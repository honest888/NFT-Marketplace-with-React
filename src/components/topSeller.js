import logo from '../logo/logo.png'
import { Link } from "react-router-dom"

export default function TopSeller() {
  return (
    <section className="top-seller">
			<div className="container">
				<div className="row row--grid">
					<div className="col-12">
						<div className="main__title">
							<h2>Top sellers</h2>
							<Link to="/authors" className="main__link">View all <i className="far fa-arrow-right"></i></Link>
						</div>
					</div>

					<div className="col-12">
						<ul className="sellers-list">
							<li>
								<span className="sellers-list__number">1</span>
								<div className="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/1.jpg" alt=""/>
									<a href="author.html">@kimberly120</a>
									<span>520.25 CSCT<img src={logo} className='top-seller-coin-logo'/></span>
								</div>
							</li>

							<li>
								<span className="sellers-list__number">2</span>
								<div className="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/2.jpg" alt=""/>
									<a href="author.html">@sheilagne22</a>
									<span>310.18 CSCT<img src={logo} className='top-seller-coin-logo'/></span>
								</div>
							</li>

							<li>
								<span className="sellers-list__number">3</span>
								<div className="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/3.jpg" alt=""/>
									<a href="author.html">@humphrey124</a>
									<span>288.65 CSCT<img src={logo} className='top-seller-coin-logo'/></span>
								</div>
							</li>

							<li>
								<span className="sellers-list__number">4</span>
								<div className="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/4.jpg" alt=""/>
									<a href="author.html">@patricia458</a>
									<span>150.98 CSCT<img src={logo} className='top-seller-coin-logo'/></span>
								</div>
							</li>

							<li>
								<span className="sellers-list__number">5</span>
								<div className="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/5.jpg" alt=""/>
									<a href="author.html">@kimberly28</a>
									<span>220.29 CSCT<img src={logo} className='top-seller-coin-logo'/></span>
								</div>
							</li>

							<li>
								<span className="sellers-list__number">6</span>
								<div className="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/6.jpg" alt=""/>
									<a href="author.html">@nessler520</a>
									<span>95.72 CSCT<img src={logo} className='top-seller-coin-logo'/></span>
								</div>
							</li>

							<li>
								<span className="sellers-list__number">7</span>
								<div className="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/7.jpg" alt=""/>
									<a href="author.html">@morgan28</a>
									<span>180.11 CSCT<img src={logo} className='top-seller-coin-logo'/></span>
								</div>
							</li>

							<li>
								<span className="sellers-list__number">8</span>
								<div className="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/8.jpg" alt=""/>
									<a href="author.html">@michalak952</a>
									<span>125.25 CSCT<img src={logo} className='top-seller-coin-logo'/></span>
								</div>
							</li>

							<li>
								<span className="sellers-list__number">9</span>
								<div className="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/9.jpg" alt=""/>
									<a href="author.html">@wheeler77</a>
									<span>800.99 CSCT<img src={logo} className='top-seller-coin-logo'/></span>
								</div>
							</li>

							<li>
								<span className="sellers-list__number">10</span>
								<div className="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/10.jpg" alt=""/>
									<a href="author.html">@donna211</a>
									<span>602.23 CSCT<img src={logo} className='top-seller-coin-logo'/></span>
								</div>
							</li>

							<li>
								<span className="sellers-list__number">11</span>
								<div className="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/11.jpg" alt=""/>
									<a href="author.html">@samuels26</a>
									<span>999.00 CSCT<img src={logo} className='top-seller-coin-logo'/></span>
								</div>
							</li>

							<li>
								<span className="sellers-list__number">12</span>
								<div className="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/12.jpg" alt=""/>
									<a href="author.html">@freda100</a>
									<span>22.10 CSCT<img src={logo} className='top-seller-coin-logo'/></span>
								</div>
							</li>

							<li>
								<span className="sellers-list__number">13</span>
								<div className="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/13.jpg" alt=""/>
									<a href="author.html">@gipson005</a>
									<span>420.37 CSCT<img src={logo} className='top-seller-coin-logo'/></span>
								</div>
							</li>

							<li>
								<span className="sellers-list__number">14</span>
								<div className="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/14.jpg" alt=""/>
									<a href="author.html">@helen22 </a>
									<span>10.00 CSCT<img src={logo} className='top-seller-coin-logo'/></span>
								</div>
							</li>

							<li>
								<span className="sellers-list__number">15</span>
								<div className="sellers-list__author sellers-list__author--verified">
									<img src="assets/img/avatars/15.jpg" alt=""/>
									<a href="author.html">@wilson202</a>
									<span>520.88 CSCT<img src={logo} className='top-seller-coin-logo'/></span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>

		</section>
  )
}