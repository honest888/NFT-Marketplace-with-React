import { useEffect, useState } from 'react'
import { getLiveAuctionIds } from '../services/auction'
import ItemCard from '../components/itemCard'
import { getLiveAuctionAmount } from "../services/auction"
import Pagination from '@mui/material/Pagination';

export default function Auction() {
	const [auctionList, setAuctionList] = useState([65535,65535,65535,65535])
	const [offset, setOffset] = useState(1)
	const [amount, setAmount] = useState(0)
  const [count, setCount] = useState(1)
  useEffect(async() => {
		setAmount( await (await getLiveAuctionAmount()).message)
  })
	
	const onChangeOffset = (event, value) => {
		setOffset(value)
	}

  useEffect(() => {
		setCount( Math.ceil(parseInt(amount) / 8))
  }, [amount])

	useEffect(async() => {
		let res = (await getLiveAuctionIds((offset -1 ) * 8))
		if (res.success)
			setAuctionList(res.message)
	}, [offset])


  return(
    <main className="main">
			<div className="breadcrumb-area" >
				<div className="container">
					<div className="breadcrumb-wrapper">
						<h1>Live Auctions</h1>
						<div>
							<ul className="breadcrumb">
								<li className="breadcrumb__item"><a href="index.html">Home</a></li>
								<li className="breadcrumb__item breadcrumb__item--active">Live Auctions</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="live auction pt-70">
				<div className="container p-0">
					<div className="row row--grid">
					{	
						auctionList.map((item) => (
						<div className="col-12 col-sm-4 col-lg-3 col-xl-3">
							<ItemCard id={item}/>
						</div>
						))
					}
					</div>

					<Pagination	page={parseInt(offset)} count={count}	color="secondary" onChange={onChangeOffset}	/>

				</div>
			</div>
    </main>
  )
}