import HomeSlider from "../components/home_slider"
import HomeUnderSlider from "../components/home_under_slide"
import TopSeller from "../components/topSeller"
export default function Home() {
  
  return(
    <main className="main">
			<HomeSlider />
			<HomeUnderSlider />
      <TopSeller />
		
      <section className="feature-area">
        <div className="container">
          <div className="row row--grid">
            <div className="col-12">
              <div className="main__title main__title--border-top">
                <h2>Create and sell your NFTs</h2>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="feature">
                <span className="feature__icon">
                  <i className="far fa-wallet"></i>
                </span>
                <h3 className="feature__title">Connect your wallet</h3>
                <p className="feature__text">
                  Click Create & set up your colecton Add social links and a description profile banner images and set.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="feature">
                <span className="feature__icon feature__icon--green">
                  <i className="far fa-layer-plus"></i>
                </span>
                <h3 className="feature__title">Set up collection</h3>
                <p className="feature__text">
                  Click Create & set up your colecton Add social links and a description profile banner images and set.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="feature">
                <span className="feature__icon feature__icon--purple">
                  <i className="far fa-images"></i>
                </span>
                <h3 className="feature__title">Add your NFTs</h3>
                <p className="feature__text">
                  Click Create & set up your colecton Add social links and a description profile banner images and set.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="feature feature--last">
                <span className="feature__icon feature__icon--red">
                  <i className="far fa-sack-dollar"></i>
                </span>
                <h3 className="feature__title">Ready for sale</h3>
                <p className="feature__text">
                  Click Create & set up your colecton Add social links and a description profile banner images and set.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
	  </main>
  )
}