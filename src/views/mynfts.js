import ItemCard from '../components/itemCard';
import { useEffect, useState } from 'react';
import { getMyNFTIds } from '../services/allnfts'
import Pagination from '@mui/material/Pagination';
import { useSelector } from "react-redux";
import { getMyNFTsTotalSupplyService } from '../services/allnfts'

export default function MyNFTs() {
	const [data, setData] = useState([65535,65535,65535,65535,65535,65535])
	const [offset, setOffset] = useState(1)
	const walletState = useSelector((state) => state.wallet)

	useEffect(async() => {
		let res = await getMyNFTIds((offset-1) * 6, walletState.address)
		console.log(res)
		if(res.length > 0)
			setData(res)
	},[offset])

	const onChangeOffset = (event, value) => {
		setOffset(value)
	}
	
	const [amount, setAmount] = useState(0)
  const [count, setCount] = useState(1)
  useEffect(async() => {
		setAmount( await (await getMyNFTsTotalSupplyService(walletState.address)).message)
  })

  useEffect(() => {
		setCount( Math.ceil(parseInt(amount) / 6))
  }, [amount])

  return( 
	<>
	<main className="main">

	  <div className="breadcrumb-area" >
		  <div className="container">
			  <div className="breadcrumb-wrapper">
				  <h1>My NFTs</h1>
				  <div>
					  <ul className="breadcrumb">
						  <li className="breadcrumb__item"><a href="index.html">Home</a></li>
						  <li className="breadcrumb__item breadcrumb__item--active">My NFTs</li>
					  </ul>
				  </div>
			  </div>
		  </div>
	  </div>


	  <div className="explore-area pt-70">
			<div className="container">
				<div className="row">
				<div className="col-12 col-xl-3">
					<div className="filter-wrap">
						<button className="filter-wrap__btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFilter" aria-expanded="false" aria-controls="collapseFilter">Open filter</button>

						<div className="collapse filter-wrap__content" id="collapseFilter">
							<div className="filter">
								<h4 className="filter__title">Filters <button type="button">Clear all</button></h4>

								<div className="filter__group filter__search">
									<label className="filter__label">Search:</label>
									<input type="text" className="filter__input" placeholder="Keyword"/>
									<button type="submit"><i className="far fa-search"></i></button>
								</div>

								<div className="filter__group">
									<label className="filter__label">Sort by:</label>

									<div className="filter__select-wrap">
										<select name="sort" id="sort" className="filter__select">
											<option value="0">Relevance</option>
											<option value="1">Newest</option>
											<option value="2">Oldest</option>
										</select>
									</div>
								</div>

								<div className="filter__group">
									<label className="filter__label">Category:</label>
									<ul className="filter__checkboxes">
										<li>
											<input id="type5" type="checkbox" name="type5"/>
											<label >Artwork</label>
										</li>
										<li>
											<input id="type6" type="checkbox" name="type6"/>
											<label >Photography</label>
										</li>
										<li>
											<input id="type7" type="checkbox" name="type7"/>
											<label >Games</label>
										</li>
										<li>
											<input id="type8" type="checkbox" name="type8"/>
											<label >Metaverses</label>
										</li>
										<li>
											<input id="type9" type="checkbox" name="type9"/>
											<label >Music</label>
										</li>
										<li>
											<input id="type10" type="checkbox" name="type10"/>
											<label >Domains</label>
										</li>
										<li>
											<input id="type11" type="checkbox" name="type11"/>
											<label >Memes</label>
										</li>
									</ul>
								</div>

								<div className="filter__group">
									<label className="filter__label">Price Range:</label>
									<div className="row">
									   <div className="col-6">
										 <input type="text" className="filter__input" placeholder="Min"/>
									   </div>
									   <div className="col-6">
										 <input type="text" className="filter__input" placeholder="Max"/>
									   </div>
									</div>
								</div>

								<div className="filter__group">
									<button className="filter__btn" type="button">APPLY FILTER</button>
								</div>
							</div>
						</div>
					</div>
				</div>


				<div className="col-12 col-xl-9">
					<div className="row row--grid">
						{
							data.map((item) => (
								<div className="col-12 col-sm-6 col-lg-4 col-xl-4">
									<ItemCard id={item}/>
								</div>
							))
						}
					</div>
					<div className="paginator">
						<Pagination	page={parseInt(offset)} count={count}	color="secondary" onChange={onChangeOffset}	/>
					</div>
				</div>
				
				</div>
			</div>
		</div>

	  </main> 
	</>
  )
}