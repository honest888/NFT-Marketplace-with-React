import { Link } from 'react-router-dom'
import { connectTrust } from '../controllers/trustwallet';
import { 
	useDispatch
} from 'react-redux'
import {
	connected,
} from '../app/reducers/walletSlice'

export default function WalletConnection() {
	const dispatch = useDispatch()
	const trustConnect = async () => {
		const response = await connectTrust()
    if(response.status)
      dispatch(connected(response))
	}
	return(
		<main className="main">

				<div className="breadcrumb-area">
						<div className="container">
								<div className="breadcrumb-wrapper">
										<h1>Wallet Connect</h1>
										<div>
												<ul className="breadcrumb">
														<li className="breadcrumb__item"><Link to="/">Home</Link></li>
														<li className="breadcrumb__item breadcrumb__item--active">Wallet Connect</li>
												</ul>
										</div>
								</div>
						</div>
				</div>


				<div className="wallet-connect">
						<div className="container">
								<div className="row row--grid">
								<div className="col-12 col-xl-2"></div>

										<div className="col-12 col-xl-8">
												<div className="main__title">
														<h2>Available Wallet Providers</h2>

														<p>
																It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
														</p>
												</div>
										</div>

										<div className="row row--grid mt-4">
										<div className="col-12 col-md-3 col-lg-4"></div>

												<div className="col-12 col-md-6 col-lg-4">
														<div className="wallet__single" onClick={trustConnect}>
																{/* <img src="assets/img/wallet-icon/06.png" alt=""/> */}
																<h3 className="wallet__title">Connect Wallet</h3>
																{/* <p className="wallet__text">
																		It is a long established fact that a reader will be distracted by the readable content of a page.
																</p> */}
														</div>
												</div>
												{/* <div className="col-12 col-md-4 col-lg-4">
														<div className="wallet__single" onClick={trustConnect}>
																<img src="assets/img/wallet-icon/09.png" alt=""/>
																<h3 className="wallet__title">Trust Wallet</h3>
																<p className="wallet__text">
																		It is a long established fact that a reader will be distracted by the readable content of a page.
																</p>
														</div>
												</div> */}
												{/* <div className="col-12 col-md-6 col-lg-4 col-xl-3">
														<div className="wallet__single">
																<img src="assets/img/wallet-icon/08.png" alt=""/>
																<h3 className="wallet__title"><a href="#">Formetic</a></h3>
																<p className="wallet__text">
																		It is a long established fact that a reader will be distracted by the readable content of a page.
																</p>
														</div>
												</div>
												<div className="col-12 col-md-6 col-lg-4 col-xl-3">
														<div className="wallet__single">
																<img src="assets/img/wallet-icon/01.png" alt=""/>
																<h3 className="wallet__title"><a href="#">Autherum</a></h3>
																<p className="wallet__text">
																		It is a long established fact that a reader will be distracted by the readable content of a page.
																</p>
														</div>
												</div>
												<div className="col-12 col-md-6 col-lg-4 col-xl-3">
														<div className="wallet__single">
																<img src="assets/img/wallet-icon/02.png" alt=""/>
																<h3 className="wallet__title"><a href="#">Bitski</a></h3>
																<p className="wallet__text">
																		It is a long established fact that a reader will be distracted by the readable content of a page.
																</p>
														</div>
												</div>
												<div className="col-12 col-md-6 col-lg-4 col-xl-3">
														<div className="wallet__single">
																<img src="assets/img/wallet-icon/03.png" alt=""/>
																<h3 className="wallet__title"><a href="#">Coinbase</a></h3>
																<p className="wallet__text">
																		It is a long established fact that a reader will be distracted by the readable content of a page.
																</p>
														</div>
												</div>
												<div className="col-12 col-md-6 col-lg-4 col-xl-3">
														<div className="wallet__single">
																<img src="assets/img/wallet-icon/04.png" alt=""/>
																<h3 className="wallet__title"><a href="#">Dapper</a></h3>
																<p className="wallet__text">
																		It is a long established fact that a reader will be distracted by the readable content of a page.
																</p>
														</div>
												</div>
												<div className="col-12 col-md-6 col-lg-4 col-xl-3">
														<div className="wallet__single">
																<img src="assets/img/wallet-icon/05.png" alt=""/>
																<h3 className="wallet__title"><a href="#">Portis</a></h3>
																<p className="wallet__text">
																		It is a long established fact that a reader will be distracted by the readable content of a page.
																</p>
														</div>
												</div> */}
										</div>
								</div>
						</div>
				</div>

		</main>
	)
}