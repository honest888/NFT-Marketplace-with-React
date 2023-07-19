import { Zoom } from "@mui/material"
import { Link } from "react-router-dom"

export default function HomeSlider() {

  return(
    <div className="home home__slider">
      <div className="container">
        <div className="hero__slide" >
          <Zoom in={true}>
            <h1 className="hero__title">Discover Rare Digital Art And <br></br> Collect NFTs</h1>
          </Zoom>
          <Zoom in={true} style={{ transitionDelay: '500ms' }}>
            <p className="hero__text">The world’s first and largest digital marketplace for crypto
              collectibles <br></br> and non-fungible tokens. Buy And sell digital assets. </p>
          </Zoom>
          <Zoom in={true} style={{ transitionDelay: '700ms' }}>
            <div className="hero__btns">
                <Link to='/explorer/0' className="hero__btn">Explore</Link>
                <Link to='/createitem' className="hero__btn hero__btn2">Create</Link>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  )
}