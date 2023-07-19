import { CSAUT, CSCT } from '../contracts/addresses'
import { 
  createAuction,
  cancelAuction,
  getAuction,
  getNFTsAuctionList,
  placeBid,
  getNFTsAuctionIds,
  getNFTsAuctionAmount
} from '../controllers/auction'

import { 
  getProviderAndSigner, 
  approveCSNFT, 
  isOwnerOfNFT,
  getBalanceOf,
  ApproveCSCT,
  getJsonRPCProvider,

} from '../controllers/interact'
import { getNFTFromId } from './allnfts'

// owner check
// approve CSNFT
// create

export async function create(
  id,
  price,
  deadline,
) {
  const basis = getProviderAndSigner()
  let res
  res = await isOwnerOfNFT(id, basis.signer)
  if( !res.success ) return res
  if( !res.message ) return {
    success: false,
    message: "😢 You are not owner."
  }
  res = await approveCSNFT(id, basis.signer)
  if( !res.success ) return res
  res = await createAuction(basis.signer, id, price, deadline) // change id
  if(!res.success) return res
  let BNBbalance = await basis.signer.getBalance() / (10 ** 18)
  console.log(BNBbalance)
  let balance = await getBalanceOf(CSCT, basis.signer.getAddress(),basis.signer)
  return {
    success: res.success,
    message: res.message,
    BNBbalance: BNBbalance,
    CTbalance: balance.balance,
  }
}

export async function cancel(id) {
  const basis = getProviderAndSigner()
  let res
  res = await cancelAuction(basis.signer, id)
  if(!res.success) return res
  let BNBbalance = await basis.signer.getBalance() / (10 ** 18)
  console.log(BNBbalance)
  let balance = await getBalanceOf(CSCT, basis.signer.getAddress(),basis.signer)
  return {
    success: res.success,
    message: res.message,
    BNBbalance: BNBbalance,
    CTbalance: balance.balance,
  }
}
// balance check
// approve CSCT
// bid
export async function bid(id, price) {
  let res
  const basis = getProviderAndSigner()
  res = await getBalanceOf(CSCT, basis.signer.getAddress(),basis.signer)
  if( res.balance < price ) // ?
    return {
      success: false,
      message:  "😢 Insufficient CSCT."
    }
  res = await ApproveCSCT( CSAUT, price , basis.signer)
  if( !res.success ) return res
  res = await placeBid(basis.signer, id, price)
  if(!res.success) return res
  let BNBbalance = await basis.signer.getBalance() / (10 ** 18)
  console.log(BNBbalance)
  let balance = await getBalanceOf(CSCT, basis.signer.getAddress(),basis.signer)
  return {
    success: res.success,
    message: res.message,
    BNBbalance: BNBbalance,
    CTbalance: balance.balance,
  }
}

export async function getAuctionService(id) {
  const provider = getJsonRPCProvider()
  let res
  res = await getAuction(provider, id)
  return res
}

export async function getAuctionListService() {
  const provider = getJsonRPCProvider()
  let res
  res = await getNFTsAuctionList(provider)
  return res
}


export async function getAuctionAndNFTService(id) {
  const provider = getJsonRPCProvider()
  let res
  res = await getAuction(provider, id)
  if(!res.success) return res
  let auction = res.message
  res = await getNFTFromId(id)
  if(!res.success) return res
  return {
    status: true,
    image: res.message.image,
    name: res.message.name,
    type: res.message.type,
    avatar: res.message.avatar,
    createdDate: res.message.createdDate,
    creator: res.message.creator,
    follow: '6k',
    deadline: auction.deadline,
    link: `/item/${id}`,
    price: auction.price,
    seller: auction.seller,
    description: res.message.description
   }
}

export async function getLiveAuctionIds(offset) {
  const provider = getJsonRPCProvider()
  let res
  res = await getNFTsAuctionIds(offset, provider)
  return res
}

export async function getLiveAuctionAmount() {
  const provider = getJsonRPCProvider()
  let res
  res = await getNFTsAuctionAmount(provider)
  return res
}
