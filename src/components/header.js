import { Link } from "react-router-dom"
import $ from 'jquery'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { disConnected, connected } from "../app/reducers/walletSlice";
import { connectTrust } from '../controllers/trustwallet';

function useOutsideAlerter(ref) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        $('.header__btn').hasClass('header__btn--active') ? $('.header__btn').toggleClass('header__btn--active') : $("")
        $('.header__menu').hasClass('header__menu--active') ? $('.header__menu').toggleClass('header__menu--active') : $("")
        $('.header__search').hasClass('header__search--active') ? $('.header__search').toggleClass('header__search--active') : $("")
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function Header() {
  const show_hide = () => {
    $('.header__btn').toggleClass('header__btn--active');
		$('.header__menu').toggleClass('header__menu--active');
  }
  const show_hide_search = () => {
    $('.header__search').toggleClass('header__search--active');
  }
  
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  
  const walletState = useSelector((state) => state.wallet)
  const dispatch = useDispatch()
  
  const signOut = () => {
    dispatch(disConnected())
  }
  
  const trustConnect = async () => {
		const response = await connectTrust()
    if(response.status)
      dispatch(connected(response))
	}

  return (
    <>
      <header className="header" ref={wrapperRef}>
        <div className="header__content container">
          <div className="header__logo">
            <Link to="/">
              <img src="assets/img/logo/logo-light.png" alt=""/>
            </Link>
            
          </div>

          <form action="#" className="header__search">
            <input type="text" placeholder="Search Here..."/>
            <button type="button"><i className="far fa-search"></i></button>
            <button type="button" className="close" onClick={show_hide_search}><i className="far fa-times"></i></button>
          </form>

          <div className="header__menu">
            <ul className="header__nav">
              <li className="header__nav-item">
                <Link to='/' className='header__nav-link' onClick={show_hide}>Home </Link>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#" data-bs-toggle="dropdown">Explore <i
                    className="far fa-angle-down"></i></a>

                <ul className="dropdown-menu slideIn">
                  <li><Link to="/auction" className='header__nav-link' onClick={show_hide}>Live Auctions</Link></li>
                  <li><Link to='/explorer' className='header__nav-link' onClick={show_hide}>All NFTs</Link></li>
                  <li ><Link to='/authors' className='header__nav-link' onClick={show_hide}>Authors</Link></li>
                </ul>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#" data-bs-toggle="dropdown">Create <i
                    className="far fa-angle-down"></i></a>

                <ul className="dropdown-menu slideIn">
                  <li><Link to='/createitem' className='header__nav-link' onClick={show_hide}>NFT</Link></li>
                </ul>
              </li>
              <li className="header__nav-item">
                <Link to='/activity' className='header__nav-link' onClick={show_hide}>Activity</Link>
              </li>
              
              <li className="header__nav-item">
                <Link to='/about' className='header__nav-link' onClick={show_hide}>About us</Link>
              </li>
              
              {
                walletState.connected ? <></>:
                  <li className="header__nav-item">
                    <a className='header__nav-link' onClick={trustConnect}><i className="far fa-wallet wallet-icon"></i></a>
                  </li>
              }
            </ul>
          </div>

          <div className="header__actions">
            <div className="header__action header__action--search">
              <button className="header__action-btn" type="button"  onClick={show_hide_search}><i className="far fa-search"></i></button>
            </div>
            {
              walletState.connected ?
                <div className="header__action header__action--profile">
                  <a className="header__profile-btn" href="#" data-bs-toggle="dropdown">
                    {/* <img src="assets/img/avatars/avatar-1.jpg" alt=""/> */}
                    <i className="header__action--icon far fa-wallet wallet-icon"></i>
                    <div>
                      <p>{walletState.address.substr(0,7)} ...</p>
                      <span>{parseFloat(walletState.CTbalance).toFixed(2)} CSCT</span>
                    </div>
                    <i className="far fa-angle-down"></i>
                  </a>

                  <ul className="dropdown-menu header__profile-menu slideIn">
                    <li><Link to='/activity'><i className="far fa-list-ul"></i> <span>Activity</span></Link></li>
                    <li><Link to='/mynfts'><i className="far fa-award"></i> <span>My NFTs</span></Link></li>
                    <li ><Link to='#' onClick={signOut}><i className="far fa-sign-out-alt"></i> <span>Sign out</span></Link></li>
                  </ul>
                </div>
                :  
                <></>
              }
            
          </div>

          <button className="header__btn" type="button" onClick={show_hide}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  )
}