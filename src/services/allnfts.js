import { getAuction } from '../controllers/auction'
import { getJsonRPCProvider, getTokenURI, getTotalSupply, getProviderAndSigner, getBalanceOfMyNFTs, isOwnerOfNFT, isOwnerOfNFTOther } from '../controllers/interact'

export async function getTotalSupplyService() {
  const provider = getJsonRPCProvider()
  let res
  res = await getTotalSupply(provider)
  return res
}

export async function getAllNFTs(offset) {
  const provider = getJsonRPCProvider()
  let res
  res = await getTotalSupply(provider)
  if(!res.success)
    console.log(res.message)
  let data = []
  let jsonURI
  let json
  let auctionData
  offset = parseInt(offset)
  let end = offset + 6 < res.message ? offset + 6 : res.message
  for(let i = offset; i < end; i ++) {
    jsonURI = await (await getTokenURI(i, provider)).message
    auctionData = await getAuction(provider, i)
    json = await fetch(jsonURI)
    if(!json.ok)
      return {
        success: false,
        message: "😢 Somethine went wrong."
      }
    json = await json.json()
    data.push({id: i,json:json, auctionData: auctionData.message})
  }
  return data
}

export async function getNFTIds(offset) {
  const provider = getJsonRPCProvider()
  let res
  res = await getTotalSupply(provider)
  let ids = []
  offset = parseInt(offset)
  let end = offset + 6 < res.message ? offset + 6 : res.message
  for(let i = offset; i < end; i ++) {
    ids.push(i)
  }
  return ids
}

export async function getNFTFromId(id) {
  const provider = getJsonRPCProvider()
  let res
  let jsonURI = await (await getTokenURI(id, provider)).message
  let json = await fetch(jsonURI)
  if(!json.ok)
    return {
      success: false,
      message: "😢 Somethine went wrong."
    }
  json = await json.json()
  return {
    success: true,
    message: json
  }
}

export async function getMyNFTsTotalSupplyService(owner) {
  const provider = getJsonRPCProvider()
  let res
  res = await getBalanceOfMyNFTs(owner, provider)
  return res
}

export async function getMyNFTIds(offset, owner) {
  const provider = getJsonRPCProvider()
  let res
  res = await getTotalSupply(provider)
  let ids = []
  offset = parseInt(offset)
  let ownerRes
  for(let i = 0; i < res.message; i ++) {
    ownerRes = await isOwnerOfNFTOther(i, owner, provider)
    if(ownerRes.success && ownerRes.message) {
      ids.push(i)
    } else {
      ownerRes = await getAuction(provider, i)
      if(ownerRes.success && ownerRes.message.seller === owner) {
        ids.push(i)
      }
    }
  }
  let end = offset + 6 < ids.length ? offset + 6 : ids.length

  console.log(offset, end - offset > 6 ? 6 : end - offset)

  console.log(ids.slice(offset, end - offset > 6 ? 6 : end - offset))
  return ids.slice(offset, end - offset > 6 ? 6 : end - offset)
}