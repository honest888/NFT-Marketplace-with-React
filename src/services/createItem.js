import { CSCT, CSNFT } from '../contracts/addresses'
import { ApproveCSCT, getBalanceOf, getProviderAndSigner, mintCSNFT, uploadToPinata } from '../controllers/interact'

// Get USDC/ CORSAC ?
// Check balance
// Approve CSCT -> CSNFT
// Pinata Loading
// Mint CSNFT 

export default async function createItem(
  file,
  itemName,
  itemDescription,
) {
  let res
  const basis = getProviderAndSigner()
  const price = 10  // price * (10 ** 15) ?
  res = await getBalanceOf(CSCT, basis.signer.getAddress(),basis.signer)
  const creator = await basis.signer.getAddress()
  if( !res.success ) // ?
  {
    return res
  }
  console.log(res.balance)
  if( res.balance < price ) // ?
  {
    return {
      success: false,
      message: "😢 Insufficient CSCT."
    }
  }
  res = await ApproveCSCT( CSNFT, price , basis.signer)
  if( !res.success ) // ?
  {
    return res
  }
  res = await uploadToPinata(file, itemName, itemDescription, creator)
  if(!res.success)
    return res
  const tokenURI = res.message
  res = await mintCSNFT(tokenURI, price, basis.signer)
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