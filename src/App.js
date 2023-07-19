import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './views/home';
import Header from './components/header';
import Footer from './components/footer';
import Auction from './views/auction';
import Item from './views/item';
import SignUp from './views/signup';
import SignIn from './views/signin';
import CreateItem from './views/createItem';
import Activity from './views/activity';
import Explorer from './views/explorer';
import MyNFTs from './views/mynfts';
import { useEffect, useState } from 'react';
import About from './views/about';
import Authors from './views/authors';
import WalletConnection from './views/walletConnection';
import Faq from './views/faq';
import Contract from './views/contract';
import { ReactNotifications } from 'react-notifications-component';

import { useDispatch, useSelector } from "react-redux";
import { disConnected } from "./app/reducers/walletSlice";

import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import Web3 from 'web3';

function App () {
  const walletState = useSelector( ( state ) => state.wallet );
  const dispatch = useDispatch();

  useEffect( () => {
    if ( walletState.connected ) {
      walletState.provider.on( "accountsChanged", ( accounts ) => {
        dispatch( disConnected() );
      } );

      // Subscribe to chainId change
      walletState.provider.on( "chainChanged", ( chainId ) => {
        console.log( chainId );
        if ( chainId !== '0x61' ) {
          dispatch( disConnected() );
        }
      } );

      // Subscribe to provider connection
      walletState.provider.on( "connect", ( info ) => {
      } );

      // Subscribe to provider disconnection
      walletState.provider.on( "disconnect", () => {
        dispatch( disConnected() );
      } );
    }
  }, [ walletState ] );
  const [ loading, setLoading ] = useState( true );
  useEffect( () => {
    if ( loading ) {
      if ( document.readyState === "complete" ) {
        setLoading( false );
      } else {
        window.addEventListener( 'load', () => setLoading( false ) );
        return () => document.removeEventListener( 'load', () => setLoading( false ) );
      }
    }
  }, [ loading ] );

  const detectCurrentProvider = () => {
    let provider;
    if ( window.ethereum ) {
      provider = window.ethereum;
    } else {
      console.log( 'Non-ethereum browser detected' );
    }
    return provider;
  };

  useEffect( () => {
    ( async () => {
      const currentProvicer = detectCurrentProvider();
      if ( currentProvicer ) {
        if ( currentProvicer !== window.ethereum ) {
          console.log( 'Non-ethereum browser detected' );
          return;
        }
        await currentProvicer.request( { method: 'eth_requestAccounts' } );
      }
    } )();
  } );

  return (
    loading ?
      <div className="preloader">
        <span className="loader"></span>
      </div>
      :
      <>
        <ReactNotifications />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/auction' element={<Auction />} />
            <Route path='/item/:id' element={<Item />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/createitem' element={<CreateItem />} />
            <Route path='/activity' element={<Activity />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path='/about' element={<About />} />
            <Route path='/authors' element={<Authors props={false} />} />
            <Route path='/wallet' element={<WalletConnection />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/contract' element={<Contract />} />
            <Route path='/mynfts' element={<MyNFTs />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </>
  );
}

export default App;
