const key = '25cc22ddd44ebf9d2cb9';
const secret = '4ab5758492281635f08e241ffb8fccbc05f58ceac8d70c782964c56d6c73ad5c';
const axios = require('axios');
const FormData = require('form-data');

export const pinJSONToIPFS = async(JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    console.log(key, secret, JSONBody)
    return axios
        .post(url, JSONBody, {
            headers: {
                'pinata_api_key': key,
                'pinata_secret_api_key': secret,
            }
        })
        .then(function (response) {
           return {
               success: true,
               pinataUrl: response.data.IpfsHash
            //    pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
           };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }
           
        });
};


export const pinFileToIPFS = async(file) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    //we gather a local file for this example, but any valid readStream source will work here.
    let data = new FormData();
    console.log(file)
    data.append('file', file, file.name);

    //You'll need to make sure that the metadata is in the form of a JSON object that's been convered to a string
    //metadata is optional
    const metadata = JSON.stringify({
        name: 'pic',
        keyvalues: {
            Key: 'Value'
        }
    });
    data.append('pinataMetadata', metadata);

    //pinataOptions are optional
    const pinataOptions = JSON.stringify({
        cidVersion: 0,
        customPinPolicy: {
            regions: [
                {
                    id: 'FRA1',
                    desiredReplicationCount: 1
                },
                {
                    id: 'NYC1',
                    desiredReplicationCount: 2
                }
            ]
        }
    });
    data.append('pinataOptions', pinataOptions);

    return axios
        .post(url, data, {
            maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                'pinata_api_key': key,
                'pinata_secret_api_key': secret,
            }
        })
        .then(function (response) {
            //handle response here
            console.log(response.data.IpfsHash)
            return {
                success: true,
                pinataUrl: response.data.IpfsHash
             //    pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
            };
        })
        .catch(function (error) {
            //handle error here
            console.log(error)
            return {
                success: false,
                message: error.message,
            }
           
        });
};
