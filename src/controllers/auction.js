import { CSNFT, CSAUT } from '../contracts/addresses'
import abiAuction from '../contracts/Auction.json'
import { ethers } from 'ethers'
import { getTokenURI } from './interact'

export async function getAuction(signer, id, collection = CSNFT) {
  const contract = new ethers.Contract(CSAUT, abiAuction, signer)
  try{
    const data = await contract.getAuction(collection, id)
    return {
      success: true,
      message: data
    }
  } catch(error) {
    return{
      success: false,
      message: "😢 Something went wrong while getting Auction data."
    }
  }
}

export async function getNFTsAuctionAmount(signer, collection = CSNFT) {
  const contract = new ethers.Contract(CSAUT, abiAuction, signer)
  try{
    const data = await contract.getNFTsAuctionList(collection)
    return {
      success: true,
      message: data.length
    }
  } catch(error) {
    return{
      success: false,
      message: "😢 Something went wrong while getting Auction data."
    }
  }
}

export async function getNFTsAuctionIds(offset, signer, collection = CSNFT) {
  const contract = new ethers.Contract(CSAUT, abiAuction, signer)
  try{
    const data = await contract.getNFTsAuctionList(collection)
    const idList = []
    offset = parseInt(offset)
    let end = offset + 8 < data.length ? offset + 8 : data.length
    for(let i = offset; i < end; i ++){
      const seller = await contract.sellerAddressFor(data[i])

      const id = ethers.BigNumber.from(data[i]).sub(seller)
      idList.push(id)
    }
    return {
      success: true,
      message: idList
    }
  } catch(error) {
    return{
      success: false,
      message: "😢 Something went wrong while getting Auction data."
    }
  }
}

export async function getNFTsAuctionList(signer, collection = CSNFT) {
  const contract = new ethers.Contract(CSAUT, abiAuction, signer)
  try{
    const data = await contract.getNFTsAuctionList(collection)
    const idList = []
    let jsonURI
    let json
    for(let i = 0; i < data.length; i ++){
      const seller = await contract.sellerAddressFor(data[i])

      const id = ethers.BigNumber.from(data[i]).sub(seller)

      jsonURI = await (await getTokenURI(id, signer)).message
      json = await fetch(jsonURI)
      if(!json.ok)
      return {
        success: false,
        message: "😢 Somethine went wrong."
      }
      json = await json.json()
      const auctionData = await contract.getAuction(collection, id)
      idList.push({
        id: id,
        seller: seller,
        json: json,
        auctionData: {
          price: auctionData.price, // ?
          deadline: auctionData.deadline
        }
      })
    }
    return {
      success: true,
      message: idList
    }
  } catch(error) {
    return{
      success: false,
      message: "😢 Something went wrong while getting Auction data."
    }
  }
}

export async function sellerAddressFor(signer, auctionId) {
  const contract = new ethers.Contract(CSAUT, abiAuction, signer)
  try{
    const data = await contract.sellerAddressFor(auctionId)
    return {
      success: true,
      message: data
    }
  } catch(error) {
    return{
      success: false,
      message: "😢 Something went wrong while getting Auction data."
    }
  }
}

export async function placeBid(signer, tokenId, price, collection = CSNFT, _isBEP1155 = false) {
  const contract = new ethers.Contract(CSAUT, abiAuction, signer)
  try{
    const t = await contract.bid(collection, tokenId,  ethers.BigNumber.from("10").pow(18).mul(price), _isBEP1155)
    await t.wait()
    return {
      success: true,
      message: "😁 Success"
    }
  } catch(error) {
    return{
      success: false,
      message: "😢 Something went wrong while placing your bid."
    }
  }
}

export async function cancelAuction(signer, id, collection = CSNFT, _isBEP1155 = false) {
  const contract = new ethers.Contract(CSAUT, abiAuction, signer)
  try{
    const t = await contract.cancelAuction(collection, id, _isBEP1155)
    await t.wait()
    return {
      success: true,
      message: "😁 Success"
    }
  } catch(error) {
    return{
      success: false,
      message: "😢 Something went wrong while canceling your auction."
    }
  }
}

export async function createAuction(signer, id, price, deadline = 0, collection = CSNFT, _isBEP1155 = false ) {
  const contract = new ethers.Contract(CSAUT, abiAuction, signer)
  try{
    const t = await contract.createAuction(collection, id, ethers.BigNumber.from("10").pow(18).mul(price), deadline,_isBEP1155)
    await t.wait()
    return {
      success: true,
      message: "😁 Success"
    }
  } catch(error) {
    return{
      success: false,
      message: "😢 Something went wrong while creating your auction."
    }
  }
}