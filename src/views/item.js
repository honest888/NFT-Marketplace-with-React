import logo from '../logo/logo.png'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { bid, cancel, create, getAuctionService } from '../services/auction'
import { getProviderAndSigner, isOwnerOfNFT } from '../controllers/interact'
import Dialog from '@mui/material/Dialog';
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import { getAuctionAndNFTService } from '../services/auction';
import { balanceChanged } from "../app/reducers/walletSlice";

import { store } from 'react-notifications-component';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

export default function Item () {
	const [actionLoading, setActionLoading] = useState(false)
	const walletState = useSelector((state) => state.wallet)
	const params = useParams()
  const [deadline, setDeadline] = useState(new Date())
  const [endAuctionDate, setEndAuctionDate] = useState(new Date())
  let currentLocalTime = new Date();
	const [isOwner, setIsOwner] = useState(false)
  const [remainTime, setRemainTime] = useState(0)
  const dispatch = useDispatch()
	const [data, setData] = useState(
    {
      status: false,
      image: "",
      title: "",
      avatar: 'assets/img/avatars/8.jpg',
      name: '@morgan28',
      follow: '6k',
      deadline: 0,
      link: "",
      price: 0,
      seller: "",
      description: "",
      type: 'image/jpg',
      createdDate: new Date(),
      creator: "Franklin",
    }
  )
	const [price, setPrice] = useState(0)
	const [open, setOpen] = useState(false);
	const [openCreate, setOpenCreate] = useState(false)
  const [openSell, setOpenSell] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)


  const handleCloseSell = () => {
    setOpenSell(false);
  };

  const handleClickOpenSell = () => {
    setEndAuctionDate(new Date())
    setOpenSell(true);
  };

  const handleCloseCreate = () => {
    setOpenCreate(false);
  };

  const handleClickOpenCreate = () => {
    setOpenCreate(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

	useEffect(async() => {
		if(walletState.connected)
			setIsOwner((await isOwnerOfNFT(params.id, getProviderAndSigner().signer)).message)
	}, [walletState])

  useEffect(async() => {
    const res = await getAuctionAndNFTService(params.id)
    if(res.status)
      setData(res)
  }, [params.id])

  useEffect(() => {
    let launchTime = new Date("November 25, 2021 22:00:00");
    let currentTime = new Date();
    setRemainTime(Math.floor((launchTime.getTime()/1000-currentTime.getTime()/1000)))
  }, [])

	useEffect(async() => {
		setDeadline(parseInt(data.deadline.toString()) - Math.round(currentLocalTime/1000))
    setPrice(data.price / (10 ** 18)) // ?
	}, [data])

  useEffect(() => {
    let timerID = setInterval( () => setDeadline(deadline - 1), 1000 );
    return () => clearInterval(timerID) 
  });

  const onErrorOccured = ( type ,message) => {
    store.addNotification({
      title: type === "warning" ? "Error" : "Success",
      message: message,
      type: type,                         // 'default', 'success', 'info', 'warning'
      container: 'top-right',                // where to position the notifications
      animationIn: ["animate__animated", "animate__backInRight"],     // animate.css classes that's applied
      animationOut: ["animate__animated", "animate__backOutRight"],   // animate.css classes that's applied
      dismiss: {
        duration: 3000
      }
    })
  }

	const createAUT = async () => {
    if(price === 0 || price === "" || price === null || price === undefined){
      onErrorOccured("warning", "Please set initial price.")
      return
    }
		setActionLoading(true)
		const res = await create(params.id, price, Math.ceil(endAuctionDate/1000)) //?
    onErrorOccured(res.success ? "default" : "warning", res.message)
    if(res.success)
      dispatch(balanceChanged({BNBbalance: res.BNBbalance, CTbalance: res.CTbalance}))
    handleCloseCreate()
    handleCloseSell()

    const resData = await getAuctionAndNFTService(params.id)
    if(resData.status)
      setData(resData)
		setActionLoading(false)
	}
	const placeAUT = async() => {
    if(price === 0 || price === "" || price === null || price === undefined){
      onErrorOccured("warning", "Please set initial price.")
      return
    }
    if ( parseFloat(price) < parseFloat(data.price/ (10 ** 18)) )
    {
      onErrorOccured("warning", `Please set price bigger than minimum price ${data.price / (10 ** 18)} CSCT.` )
      return
    }
		setActionLoading(true)
		const res = await bid(params.id, price) //?
    onErrorOccured(res.success ? "default" : "warning", res.message)
    if(res.success)
      dispatch(balanceChanged({BNBbalance: res.BNBbalance, CTbalance: res.CTbalance}))

		handleClose()
    const resData = await getAuctionAndNFTService(params.id)
    if(resData.status)
      setData(resData)
		setActionLoading(false)
	}

	const cancelAUT = async() => {
		setActionLoading(true)
		const res = await cancel(params.id)
    onErrorOccured(res.success ? "default" : "warning", res.message)
    if(res.success)
      dispatch(balanceChanged({BNBbalance: res.BNBbalance, CTbalance: res.CTbalance}))
    const resData = await getAuctionAndNFTService(params.id)
    if(resData.status)
      setData(resData)
		setActionLoading(false)
	}

	const onChangePrice = (e) => {
		setPrice(e.target.value)
	}
  function formatTime(timestamp) {
    let days = Math.floor(timestamp/(60 * 24 * 60));
    let hours = Math.floor((timestamp - days* 24 * 60 * 60)/3600);
    let mins = Math.floor((timestamp-days*60*24*60 - hours*60*60)/60);
    let seconds = Math.floor((timestamp-days*60*24*60 - hours*60*60 - mins*60))
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    mins = mins > 9 ? mins : '0' + mins
    seconds = seconds > 9 ? seconds : '0' + seconds
    if(timestamp < 0 )
    {
      return ""
    }
    let res = [days, hours, mins, seconds] 
    return res;
  }
  return (
    <main className="main" >
      <div className="breadcrumb-area" >
        <div className="container">
          <div className="breadcrumb-wrapper">
            <h1>{data.name}</h1>
            <div>
              <ul className="breadcrumb">
                <li className="breadcrumb__item"><Link to="/">Home</Link></li>
                <li className="breadcrumb__item breadcrumb__item--active">{data.name} Item</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="item-single pt-30">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-8">
              <div className="asset__item">
                { 
                // !imageLoaded ?
                //   <CircularProgress /> :

                  data.type !== undefined ? 
                    data.type.includes("image") ?
                    <img src={data.image} alt="" onLoad={() => setImageLoaded(true)} /> : 
                    <video loop src={data.image} preload={'auto'} type={data.type} autoPlay muted onLoadedData={() => setImageLoaded(true)}></video>
                  :
                  <img src={data.image} alt="" onLoad={() => setImageLoaded(true)}/>
                }
                <button className="asset__likes" type="button">
                  <i className="far fa-heart"></i>
                  <span>{data.follow}</span>
                </button>
              </div>
            </div>

            <div className="col-12 col-xl-4">
              <div className="asset__info">
                <div className="asset__desc">
                  <h2>{data.name}</h2>
                </div>
                {
                  data.price === 0 || data.seller ===  "0x0000000000000000000000000000000000000000" ? <></>
                  :
                  <ul className="asset__authors">
                    <li>
                      <div className="card__price">
                        <span>Sale price</span>
                        <span className="text-danger fw-bolder">{data.price / (10 ** 18)} CSCT<img src={logo} className='coin-logo'/></span>
                      </div>
                    </li>
                    <li>
                      <span>Seller</span>
                      <div className="asset__author">
                        {/* <img src={'assets/img/items/8.jpg'} alt=""/> */}
                        <a href="author.html">{data.seller !== undefined && data.seller.substr(0, 12) + "..."}</a>
                      </div>
                    </li>
                  </ul>
                }

                <ul className="nav nav-tabs asset__tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#tab-33" role="tab"
                      aria-controls="tab-33" aria-selected="false">Details</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-22" role="tab" aria-controls="tab-22"
                      aria-selected="false">Bids</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-11" role="tab" aria-controls="tab-11"
                      aria-selected="true">History</a>
                  </li>
                </ul>

                <div className="tab-content">

                  <div className="tab-pane fade show active" id="tab-33" role="tabpanel">
                    <div className="asset__desc--tab">
                      <p>
                        {data.description}
                      </p>
                      <div className="asset__desc--content">
                        <div className="asset__desc-list">
                          <span> <i className="far fa-user"></i>Item Creator </span>
                          <span> {data.creator !== undefined && data.creator.substr(0, 12) + "..."} </span>
                        </div>
                        <div className="asset__desc-list">
                          <span> <i className="far fa-clock"></i>Created </span>
                          <span> {new Date(data.createdDate).toDateString()} </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-22" role="tabpanel">
                    <div className="asset__actions">
                      {/* <div className="asset__action asset__action--verified">
                        <img src={'assets/img/avatars/8.jpg'} alt=""/>
                        <p>Bid placed for <b>12.00 CSCT<img src={logo} className='coin-logo'/></b> 2 hours ago <br></br>by <a href="author.html">@kimberly28</a></p>
                      </div>

                      <div className="asset__action asset__action--verified">
                        <img src={'assets/img/avatars/8.jpg'} alt=""/>
                        <p>Bid placed for <b>9.25 CSCT<img src={logo} className='coin-logo'/></b> 3 hours ago <br></br>by <a href="author.html">@nessler520</a></p>
                      </div>

                      <div className="asset__action asset__action--verified">
                        <img src={'assets/img/avatars/8.jpg'} alt=""/>
                        <p>Bid placed for <b>10.21 CSCT<img src={logo} className='coin-logo'/></b> 4 hours ago <br></br>by <a href="author.html">@kimberly120</a></p>
                      </div> */}
                    </div>
                  </div>


                  <div className="tab-pane fade" id="tab-11" role="tabpanel">
                    <div className="asset__actions asset__actions--scroll" id="asset__actions--scroll">
                      {/* <div className="asset__action asset__action--verified">
                        <img src={'assets/img/avatars/8.jpg'} alt=""/>
                        <p>Bid placed for <b>12.00 CSCT<img src={logo} className='coin-logo'/></b> 2 hours ago <br></br>by <a href="author.html">@kimberly28</a></p>
                      </div>

                      <div className="asset__action asset__action--verified">
                        <img src={'assets/img/avatars/8.jpg'} alt=""/>
                        <p>Bid placed for <b>9.25 CSCT<img src={logo} className='coin-logo'/></b> 3 hours ago <br></br>by <a href="author.html">@nessler520</a></p>
                      </div>

                      <div className="asset__action asset__action--verified">
                        <img src={'assets/img/avatars/8.jpg'} alt=""/>
                        <p>Bid placed for <b>10.21 CSCT<img src={logo} className='coin-logo'/></b> 4 hours ago <br></br>by <a href="author.html">@kimberly120</a></p>
                      </div>

                      <div className="asset__action asset__action--verified">
                        <img src={'assets/img/avatars/8.jpg'} alt=""/>
                        <p>Bid placed for <b>12.21 CSCT<img src={logo} className='coin-logo'/></b> 6 hours ago <br></br>by <a href="author.html">@humphrey124</a></p>
                      </div> */}
                    </div>
                  </div>

                </div>
                {
                  deadline > 0 ? 
                  <div className="asset__wrap">
                    <div className="asset__timer asset__timer2">
                      <span><i className="far fa-stopwatch"></i> Auction ends in</span>
                      <div className="asset__clock" >
                        <div className="asset__countdown">
                          <div className="asset__countdown--single">
                            <div>{formatTime(deadline)[0]}</div><small>Days</small>
                          </div>
                          <div className="asset__countdown--single">
                            <div>{formatTime(deadline)[1]}</div><small>Hours</small>
                          </div>
                          <div className="asset__countdown--single">
                            <div>{formatTime(deadline)[2]}</div><small>Mins</small>
                          </div>
                          <div className="asset__countdown--single">
                            <div>{formatTime(deadline)[3]}</div><small>Secs</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="asset__price">
                        <span>Minimum bid</span>
                        <span>{data.price / (10 ** 18)} CSCT<img src={logo} className='coin-logo'/></span>
                    </div> */}
                  </div>
                  :
                  <></>
                }
                  

                <div className="asset__btns">
                  {
                    data.seller === "0x0000000000000000000000000000000000000000" ?
                      isOwner ?
                      walletState.connected && 
                        <>
                          <button className="asset__btn" onClick={handleClickOpenSell}>{ actionLoading ? <CircularProgress  color="success"/> : "Sell"}</button>
                          <button className="asset__btn" onClick={handleClickOpenCreate}>{ actionLoading ? <CircularProgress  color="success"/> : "Auction"}</button>
                        </>
                    :
                    <></>
                    : 
                    data.seller === walletState.address ?
                      walletState.connected && <button className="asset__btn" onClick={cancelAUT}>{ actionLoading ? <CircularProgress  color="success"/> : "Cancel"}</button>
                    : walletState.connected && 
                    <>
                      {
                        deadline > 0 ?
                          <button className="asset__btn" onClick={handleClickOpen}>{ actionLoading ? <CircularProgress  color="success"/> : "Place Bid"}</button>
                        :
                          <button className="asset__btn" onClick={() => placeAUT()}>{ actionLoading ? <CircularProgress  color="success"/> : "Buy"}</button>
                      }
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose} PaperProps={{ style: { backgroundColor: 'transparent', boxShadow: 'none', }, }}>
        <div id="modal-bid" className="zoom-anim-dialog mfp-hide modal modal--form">
          <h4 className="sign__title">Place a bid</h4>
          <div className="sign__group sign__group--row">
            <label className="sign__label" >Your bid</label>
            <input id="placebid" type="text" name="placebid" placeholder="Enter amount" className="sign__input" onChange={onChangePrice} value={price}/>
            <span className="sign__text sign__text--small">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</span>
          </div>
          <button className="sign__btn" type="button" onClick={placeAUT}>{ actionLoading ? <CircularProgress  color="secondary" /> : "Place Bid"}</button>
        </div>
      </Dialog>

      <Dialog open={openCreate} onClose={handleCloseCreate} PaperProps={{ style: { backgroundColor: 'transparent', boxShadow: 'none', },}}>
        <div id="modal-bid" className="zoom-anim-dialog mfp-hide modal modal--form">
          <h4 className="sign__title">Sell</h4>
          <div className="sign__group sign__group--row">
            <label className="sign__label" >Price</label>
            <input id="placebid" type="text" name="placebid" placeholder="Enter amount" className="sign__input" onChange={onChangePrice} value={price}/>
            <div className='datepicker'>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <label className="sign__label" >End Auction Date</label>
                <KeyboardDatePicker
                  variant="dialog"
                  value={endAuctionDate}
                  onChange={(newValue) => setEndAuctionDate(newValue)
                  }
                />
              </MuiPickersUtilsProvider>
            </div>
            <span className="sign__text sign__text--small">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</span>
          </div>
          <button className="sign__btn" type="button" onClick={createAUT}>{ actionLoading ? <CircularProgress  color="secondary" /> : "Sell"}</button>
        </div>
      </Dialog>
      <Dialog open={openSell} onClose={handleCloseSell} PaperProps={{ style: { backgroundColor: 'transparent', boxShadow: 'none', },}}>
        <div id="modal-bid" className="zoom-anim-dialog mfp-hide modal modal--form">
          <h4 className="sign__title">Sell</h4>
          <div className="sign__group sign__group--row">
            <label className="sign__label" >Price</label>
            <input id="placebid" type="text" name="placebid" placeholder="Enter amount" className="sign__input" onChange={onChangePrice} value={price}/>
            <span className="sign__text sign__text--small">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</span>
          </div>
          <button className="sign__btn" type="button" onClick={createAUT}>{ actionLoading ? <CircularProgress  color="secondary" /> : "Sell"}</button>
        </div>
      </Dialog>
    </main>
  )
}