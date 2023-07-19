import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo/logo.png'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography';
import { getAuctionAndNFTService } from '../services/auction';
import Grid from '@mui/material/Grid';

export default function ItemCard(props) { // id
  const [imageLoaded, setImageLoaded] = useState(false)
  const [data, setData] = useState({status: false})
  const [remainTime, setRemainTime] = useState(0)
  const [deadline, setDeadLine] = useState(0) 
  useEffect(() => {
    let launchTime = new Date("November 25, 2021 22:00:00");
    let currentTime = new Date();
    setRemainTime(Math.floor((launchTime.getTime()/1000-currentTime.getTime()/1000)))
  }, [])
  useEffect(() => {
    let timerID = setInterval( () => setDeadLine(deadline - 1), 1000 );
    return () => clearInterval(timerID) 
  })

  useEffect( async () => {
    setImageLoaded(false)
    if(props.id !== 65535) {
      const res = await getAuctionAndNFTService(props.id)
      if(res.status)
        setData(res)
    }
  }, [props.id])

  useEffect(async() => {
    let currentTime = new Date();
    setDeadLine(data.deadline - Math.round(currentTime/ 1000))
  }, [data])

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
    let res = days +':'+hours+':'+mins+':' + seconds 
    return res;
  }

  return ( 
    <div className="card">
      {
        !imageLoaded || !data.status ?
          <>
            <div className="card__cover" >
              <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={'100%'}
                height={'190px'}
              />
            </div>
          <Grid container spacing={4}>
            <Grid item xs>
              <Typography component="div" variant='h3'>
                <Skeleton sx={{ bgcolor: 'grey.900' }}/>
              </Typography>
            </Grid>
          </Grid>
          <div className="card__author" >
            <Grid container>
              <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={'100%'}
                height={'100px'}
              />
            </Grid>
          </div>
          </>
        : <></>
      }
      <div style={imageLoaded? {} : {display: 'none'}}>
        <div className="card__cover" >
          <Link to={data.status ? data.link : "/"}>

            {
              data.type !== undefined ? 
                data.type.includes("image") ?
                <img src={data.image} alt="" onLoad={() => setImageLoaded(true)} className='card__cover-img'/> : 
                <video className='card__cover-img' loop src={data.image} preload={'auto'} type={data.type} autoPlay muted onLoadedData={() => setImageLoaded(true)}></video>
              :
              <img src={data.image} alt="" 
                onLoad={() => setImageLoaded(true)}
                className='card__cover-img'
                />
            }
          </Link>

          {
            deadline > 0 ?
            <span className="card__time card__time--clock">
              <i className="far fa-fire"></i>
              <span  className="card__clock card__clock--1" dangerouslySetInnerHTML={{__html: formatTime(deadline)}}></span>
            </span>
            :
            <></>
          }
        </div>
        <h3 className="card__title"><Link to={data.status ? data.link : "/"}>{data.name}</Link></h3>
        <div className="card__author">            
          <span>Creator</span>
          <span>{data.creator !== undefined && data.creator.substr(0, 12) + "..."}</span>
          {/* <img src={data.avatar}  alt="" />
          <a href="author.html">{data.creator !== undefined && data.creator.substr(0, 7) + "..."}</a> */}
        </div>
        <div className="card__info" >
          <div className="card__price">
            <span>Sale price</span>
            <span>{data.price/ (10 ** 18)} CSCT<img src={logo} className='coin-logo'/></span>
          </div>

          <button className="card__likes" type="button">
            <i className="far fa-heart"></i>
            <span>{data.follow}</span>
          </button>
        </div>
      </div>
    </div>
  )
}