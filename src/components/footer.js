import { Link } from "react-router-dom";

export default function Footer() {
  return(
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer__logo">
                <img src="assets/img/logo/logo-light.png" alt=""/>
              </div>
              <p className="footer__tagline">
                We are many variations of passages of orem psum available but the majority have suffered alteration in some form by injected humour randomised words which look even. 
              </p>

              {/* <div className="footer__lang">
                <a className="footer__lang-btn" href="#" role="button" id="dropdownLang" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <img src="assets/img/flags/uk.svg" alt=""/>
                  <span>English</span>
                </a>

                <ul className="dropdown-menu footer__lang-dropdown" aria-labelledby="dropdownLang">
                  <li><a href="#"><img src="assets/img/flags/uk.svg" alt=""/><span>English</span></a></li>
                  <li><a href="#"><img src="assets/img/flags/spain.svg" alt=""/><span>Spanish</span></a></li>
                  <li><a href="#"><img src="assets/img/flags/russia.svg" alt=""/><span>Russian</span></a></li>
                  <li><a href="#"><img src="assets/img/flags/china.svg" alt=""/><span>Chinese</span></a></li>
                </ul>
              </div> */}
            </div>

            <div className="col-md-3">
              <h6 className="footer__title">Corsac</h6>
              <div className="footer__nav">
                <Link to='/about'>About Us</Link>
                <Link to="/wallet">Wallet Connect</Link>
              </div>
            </div>

            <div className="col-md-3">
              <h6 className="footer__title">Explore</h6>
              <div className="footer__nav">
                <Link to='/auction'>Live Auction</Link>
                <Link to='/explorer'>All NFTs</Link>
                <Link to='/authors'>Authors</Link>
                <Link to='/activity'>Activity</Link>
              </div>
            </div>
            <div className="col-md-3">
              <h6 className="footer__title">Community</h6>
              <div className="footer__nav">
                <Link to="/faq">Faq</Link>
                <Link to="/contract">Contact</Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="footer__content">
                <div className="footer__social">
                  <a href="https://www.corsac.io/" > <i className="fab fa-chrome"></i> </a>
                  <a href="https://www.twitter.com/corsac_official" > <i className="fab fa-twitter"></i> </a>
                  <a href="https://www.instagram.com/corsac.official" > <i className="fab fa-instagram"></i> </a>
                  <a href="https://discord.gg/c6VFvfzJ" > <i className="fab fa-discord"></i> </a>
                  <a href="https://www.reddit.com/r/Corsac" > <i className="fab fa-reddit-alien"></i> </a>
                </div>

                <small className="footer__copyright">© Copyright 2021 Corsac All Rights Reserved.</small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}