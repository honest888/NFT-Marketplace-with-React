import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import { CSCT } from '../contracts/addresses'

export const connectTrust = async() => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          56: 'https://bsc-dataseed.binance.org/',
          // 97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
        },
        network: 'binance',
      },
      qrcodeModalOptions: {
        mobileLinks: [
          "metamask",
          "trust",
        ],
        desktopLinks: [
          "encrypted ink",
        ]
      }
    }
  }
  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: false, // optional
    providerOptions, // required,
    theme: {
      background: "rgba(17, 23, 64, 0.9)",
      main: "rgba(199, 199, 199, 0.9)",
      secondary: "rgba(136, 136, 136, 0.5)",
      border: "rgba(3, 9, 32, 0.14)",
      hover: "rgb(3, 9, 32)"
    }
  })
   
  const provider = await web3Modal.connect()
  web3Modal.clearCachedProvider()
  const newWeb3 = new Web3(provider)
  if(window.ethereum) {
    const chain = await window.ethereum.request({ method: 'eth_chainId' })
    if(parseInt(chain, 16) !== 97) {
      await changeChain()
    }
  }
  const accounts = await newWeb3.eth.getAccounts()
  let balance = await newWeb3.eth.getBalance(accounts[0]) / (10 ** 18)
  const contract = new newWeb3.eth.Contract(
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
    CSCT
  )
  const ctbalance = await contract.methods.balanceOf(accounts[0]).call() / (10 ** 18) // ?
  return {
    status: true,
    provider,
    address: accounts[0],
    BNBbalance: balance,
    CTbalance: ctbalance
  }
}

export async function changeChain() {
  await window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId:'0x61' }],
  })
}