import { CSNFT, CSCT, CSAUT } from '../contracts/addresses'
import abiCSNFT from '../contracts/CSNFT.json'
import { ethers } from 'ethers'
import { pinJSONToIPFS, pinFileToIPFS } from './pinata'

export function getProviderAndSigner() {
  const provider = new ethers.providers.Web3Provider(window.ethereum) // https://data-seed-prebsc-1-s1.binance.org:8545
  const signer = provider.getSigner()
  return {
    provider,
    signer
  }
}

export function getJsonRPCProvider() {
  return new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545')
}

export async function ApproveCSCT( spender, amount, signer ) { 
  const CSCTContract = new ethers.Contract(
    CSCT,
    [
      "function approve(address spender, uint256 amount) external returns (bool)",
    ],
    signer,
  )
  
  try{
    const CSCTAprove = await CSCTContract.approve(spender, 
      ethers.BigNumber.from("10").pow(18).mul(amount)) // ?
    await CSCTAprove.wait()
    return {
      success: true
    }
  } catch(error) {
    return {
      success: false,
      message: "😢 Approve Filed."
    }
  }
}

export async function uploadToPinata(
  file,
  itemName,
  itemDescription,
  creator
) {
  const price = 120000 // ? get USDC/ CORSAC
  const fileResponse = await pinFileToIPFS(file)
  if(!fileResponse.success) {
    return {
      success: false,
      message: "😢 Something went wrong while uploading your tokenURI."
    }
  }
  let metaData = {
    "name": itemName,
    "description": itemDescription,
    "image": 'https://corsac.mypinata.cloud/ipfs/' + fileResponse.pinataUrl,
    "type": file.type,
    "creator": creator,
    "createdDate": new Date() ,
    "avatar": 'assets/img/avatars/8.jpg',
  }
  console.log(metaData)
  const jsonResponse = await pinJSONToIPFS(metaData)
  if (!jsonResponse.success) {
    return {
      success: false,
      message: "😢 Something went wrong while uploading your files."
    }
  }

  return {
    success: true,
    message: 'https://corsac.mypinata.cloud/ipfs/' + jsonResponse.pinataUrl
  }
}

export async function approveCSNFT( id, signer, spender = CSAUT) {
  const contract = new ethers.Contract(CSNFT, abiCSNFT, signer)
  try{
    const t = await contract.approve(spender, id)
    await t.wait()
    return {
      success: true,
      message: "😁 Success"
    }
  } catch(error) {
    return {
      success: false,
      message: "😢 Something went wrong while approving nft."
    }
  }
}

export async function mintCSNFT(
  tokenURI,
  price,
  signer,
) {
  const contract = new ethers.Contract(CSNFT, abiCSNFT, signer)
  const signature = '0x993dab3dd91f5c6dc28e17439be475478f5635c92a56e17e82349d3fb2f166196f466c0b4e0c146f285204f0dcb13e5ae67bc33f4b888ec32dfe0a063e8f3f781b'
  try{
    const t = await contract.mint(tokenURI, price, signature)
    await t.wait()
    return {
      success: true,
      message: "😁 Success"
    }
  } catch(error) {
    return {
      success: false,
      message: "😢 Something went wrong while Minting."
    }
  }
}

export async function getBalanceOf(token, owner, signer) {
  const contract = new ethers.Contract(
    token,
    [
      {
        name: "balanceOf",
        type: "function",
        inputs: [{ name: "_owner", type: "address" }],
        outputs: [{ name: "balance", type: "uint256" }],
        constant: !0,
        payable: !1,
      },
    ],
    signer
  )
  try{
    const balance = await contract.balanceOf(owner)
    return {
      success: true,
      balance: balance / (10 ** 18), // ?
    }
  } catch(error) {
    return {
      success: false,
      message: "😢 Something went wrong while estimating your balance."
    }
  } 
}

export async function getTotalSupply(signer) {
  const contract = new ethers.Contract(CSNFT, abiCSNFT, signer)
  try{
    const t = await contract.totalSupply()
    return {
      success: true,
      message: t
    }
  } catch(error) {
    return {
      success: false,
      message: "😢 Something went wrong while estimating NFT count."
    }
  }  
}

export async function getTokenURI(id, signer) {
  const contract = new ethers.Contract(CSNFT, abiCSNFT, signer)
  try{
    const t = await contract.tokenURI(id)
    return {
      success: true,
      message: t
    }
  } catch(error) {
    return {
      success: false,
      message: "😢 Something went wrong while getting NFT URI."
    }
  }  
}

export async function isOwnerOfNFT(id, signer) {
  const contract = new ethers.Contract(CSNFT, abiCSNFT, signer)
  try{
    const t = await contract.ownerOf(id)
    if(t === await signer.getAddress())
      return{
        success: true,
        message: true,
      }
    else 
    return {
      success: true,
      message: false
    }
  } catch(error) {
    return {
      success: false,
      message: "😢 Something went wrong while getting NFT URI."
    }
  }  
}


export async function isOwnerOfNFTOther(id, owner, signer) {
  const contract = new ethers.Contract(CSNFT, abiCSNFT, signer)
  try{
    const t = await contract.ownerOf(id)
    if(t === owner)
      return{
        success: true,
        message: true,
      }
    else 
    return {
      success: true,
      message: false
    }
  } catch(error) {
    return {
      success: false,
      message: "😢 Something went wrong while getting NFT URI."
    }
  }  
}

export async function getBalanceOfMyNFTs( owner , signer) {
  const contract = new ethers.Contract(CSNFT, abiCSNFT, signer)
  try{
    const t = await contract.balanceOf(owner)
    return {
      success: true,
      message: t
    }
  } catch(error) {
    return {
      success: false,
      message: "😢 Something went wrong while getting your NFT balance."
    }
  }  
}