export default function About() {
  return(
    <main className='main'>
    <div className="breadcrumb-area">
            <div className="container">
                <div className="breadcrumb-wrapper">
                    <h1>About Us</h1>
                    <div>
                        <ul className="breadcrumb">
                            <li className="breadcrumb__item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb__item breadcrumb__item--active">About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


        <div className="about-area pt-70">
            <div className="container">
                <div className="row row--grid">
                    <div className="col-lg-6">
                        <img src="assets/img/about/about.png" className="w-100 mb-5" alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <div className="main__title main__title--page">
                            {/* <h1>About Corsac</h1> */}

                            <p>
                            Founded on 1st November 2021, Corsac (CSCT) is a reflection token based on Binance Smart Chain, where holders earn BUSD just for holding the tokens. Corsac had a stellar launch which was reflected by it getting listed in CMC and CoinGecko and getting over thousands of holders on board within 24 hours from its launch. Unlike Other tokens, Corsac has got multiple utilities, few of them includes: 
                            </p><p>CorsacSwap: Fast, Secure and Most Convenient way to swap your native crypto for Corsac. 
                            </p><p>Corsac Finance: Unique away of lending your BUSD and earn interest on them. Lending is secure as you get CSCT as collateral and on top of that earn the reflections on the collateral as well. Else you can borrow BUSD for some other investments, keep the capital gains and return the rest without getting your bank involved. 
                            </p><p>We at Corsac believe in constantly improving and bring out new utilities. Be a part of Corsac, and let your investment ventures take wings.
                            </p>
                            {/* <p>
                                On the other hand, we denounce with righteous indignation and dislike men who are so
                                beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire,
                                that they cannot foresee the pain and trouble that are bound to ensue; and equal blame
                                belongs to those who fail in their duty.
                            </p> */}
                            {/* <div className="home-btns">
                                <a href="#" className="home__btn">Learn More</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="how-works pt-70">
            <div className="container">
                <div className="row row--grid">
                <div className="col-12 col-lg-2">
                </div>
                    <div className="col-12 col-lg-4">
                        <div className="step">
                            <span className="step__number">01</span>
                            <h3 className="step__title">CorsacSwap</h3>
                            <p className="step__text">Fast, Secure and Most Convenient way to swap your native crypto for Corsac. </p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="step">
                            <span className="step__number">02</span>
                            <h3 className="step__title">Corsac Finance</h3>
                            <p className="step__text">Unique away of lending your BUSD and earn interest on them. </p>
                        </div>
                    </div>

                    {/* <div className="col-12 col-lg-4">
                        <div className="step">
                            <span className="step__number">03</span>
                            <h3 className="step__title">Add your NFTs</h3>
                            <p className="step__text">We at Corsac believe in constantly improving and bring out new utilities. Be a part of Corsac, and let your investment ventures take wings.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>


        {/* <div className="how-works pt-70">
            <div className="container">
                <div className="row row--grid">
                    <div className="col-md-6">
                        <div className="main__title">
                            <h2>Why choose us?</h2>

                            <p>
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                                necessary, making this the first true generator on the Internet. It uses a dictionary of
                                over Latin words, combined with a handful of model sentence structures, to generate
                                Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
                                from repetition, injected humour, or non-characteristic words etc.
                            </p>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form.
                            </p>
                            <a href="https://www.youtube.com/watch?v=ckHzmP1evNU" className="main__video open-video"><i
                                    className="far fa-play"></i> Watch video</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="assets/img/about/choose.png" className="w-100" alt=""/>
                    </div>
                </div>
            </div>
        </div> */}

    </main>
  )
}