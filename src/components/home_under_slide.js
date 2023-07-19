import { Zoom } from "@mui/material"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { connected } from "../app/reducers/walletSlice";
import { connectTrust } from '../controllers/trustwallet';

export default function HomeUnderSlider() {
	const dispatch = useDispatch()

  const trustConnect = async () => {
		const response = await connectTrust()
    if(response.status)
      dispatch(connected(response))
	}
  return(
    <Zoom in={true}  style={{ transitionDelay: '1000ms' }}>
      <div className="call-to-action">
        <div className="container">
          <div className="call-to-action-inr">
            <div className="cta-overlay">
              <div className="cta-content">
                <h2 className="cta-header">
                  Create, Sell &amp; Collect NFTs at Corsac
                </h2>
                <p className="cta-desc">
                  Aliquam viverra enim commodo sed consequat tempor sit nisl cursus lectus.
                </p>
                <div className="cta-action">
                  <Link to="/createitem"><h1 className="cta-btn cta-btn2">Create</h1></Link>
                  <h1 className="cta-btn cta-btn2"  onClick={trustConnect}>Connect Wallet</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		</Zoom>
  )
}