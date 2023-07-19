import { useState } from "react";
import createItem from "../services/createItem";
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector, useDispatch } from "react-redux";
import { store } from 'react-notifications-component';
import { balanceChanged } from "../app/reducers/walletSlice";

export default function CreateItem() {
  const [loading, setLoading] = useState(false)
  const [filepath, setFilePath] = useState("")
  const [file, setFile] = useState()
  const [itemName, setItemName] = useState("")
  const [description, setDescription] = useState("")
  const [selectedOption, setSelectedOption] = useState("publish")
  const [actionLoading, setActionLoading] = useState(false)
	const walletState = useSelector((state) => state.wallet)
  const dispatch = useDispatch()

  const handleFileChosen = (efile) => {
    setFile(efile)
    setFilePath(efile.name)
  };
  const onChangeItemName = (e) => {
    setItemName(e.target.value)
  }
  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  const onValueChange = (e) =>  {
    setSelectedOption(e.target.value) 
  }

  const onErrorOccured = ( type ,message) => {
    store.addNotification({
      title:  type === "warning" ? "Error" : "Success",
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

  const onCreateItem = async ()=> {
    if(walletState.connected) {
      setActionLoading(true)
      console.log(filepath, itemName, description)
      if(filepath === ""){
        onErrorOccured("warning", "Please choose file.")
        setActionLoading(false)
        return
      }
      if(itemName === ""){
        onErrorOccured("warning", "Please fill the item name.")
        setActionLoading(false)
        return
      }
      if(description === "")
      {
        onErrorOccured("warning", "Please fill the description.")
        setActionLoading(false)
        return
      }
      const res = await createItem(file, itemName, description)
      if(!res.success) {
        onErrorOccured("warning", res.message)
        setActionLoading(false)
        return
      }
      dispatch(balanceChanged({BNBbalance: res.BNBbalance, CTbalance: res.CTbalance}))
      onErrorOccured("default", res.message)
      setActionLoading(false)
    } else {
      onErrorOccured("warning", "Please connect your wallet.")
    }
  }  
 return (
    <>
    {
    loading ? 
      <div className="preloader">
        <span className="loader"></span>
      </div>
      : <></>
      }
       <main className="main">

       <div className="breadcrumb-area">
            <div className="container">
                <div className="breadcrumb-wrapper">
                    <h1>Create New Item</h1>
                    <div>
                        <ul className="breadcrumb">
                            <li className="breadcrumb__item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb__item breadcrumb__item--active">Create New Item</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
          <div className="row row--grid">
            <div className="col-12 col-xl-3">
              <div className="author author--page">
                  <div className="author__meta">
                      <a href="author.html" className="author__avatar author__avatar--verified">
                          <img src="assets/img/avatars/avatar-1.jpg" alt=""/>
                      </a>
                      <h1 className="author__name"><a href="author.html">Susa Condrey</a></h1>
                      <h2 className="author__nickname"><a href="author.html">@condrey21</a></h2>
                      <p className="author__text">There are many variations of passages orem psum available but the
                          majority have suffered alteration.</p>
                      <div className="author__code">
                          <input type="text" value="4fgddgwdfgfew5345353fdfdf3454edrgertt4rgre4" id="author-code"/>
                          <button type="button">
                              <span>Copied</span>
                              <i className="far fa-copy"></i>
                          </button>
                      </div>
                      <a href="#" className="author__link"> <i className="far fa-globe"></i> https://example.com</a>
                      <div className="author__social">
                          <a href="#" className="fab fa-facebook-f"></a>
                          <a href="#" className="fab fa-twitter"></a>
                          <a href="#" className="fab fa-instagram"></a>
                          <a href="#" className="fab fa-linkedin-in"></a>
                      </div>
                      <div className="author__wrap">
                        <div className="author__followers">
                            <p>5.5k</p>
                            <span>Followers</span>
                        </div>
                        <button className="author__follow" type="button">Follow</button>
                      </div>
                  </div>
              </div>
          </div>


          <div className="col-12 col-xl-9">
            <div className="main__title main__title--create">
              <h2>Create New Item</h2>
            </div>

            <form action="#" className="sign__form sign__form--create">
              <div className="row">
                <div className="col-12">
                  <h4 className="sign__title">Upload file</h4>
                </div>

                <div className="col-12">
                  <div className="sign__file">
                    <label id="file1" for="sign__file-upload"> <i className="far fa-upload"></i> { filepath === "" ? "Upload File (e. g. Image, Audio, Video)" : filepath }</label>
                    <input data-name="#file1" id="sign__file-upload" name="file" className="sign__file-upload" type="file" accept="video/mp4,video/x-m4v,video/*,.png,.jpg,.jpeg" onChange={e => handleFileChosen(e.target.files[0])}/>
                  </div>
                </div>

                <div className="col-12">
                  <h4 className="sign__title">Item details</h4>
                </div>

                <div className="col-12">
                  <div className="sign__group">
                    <label className="sign__label" for="itemname">Item name</label>
                    <input id="itemname" type="text" name="itemname" className="sign__input" placeholder="e. g. 'Fantacy Flower'" onChange={onChangeItemName}/>
                  </div>
                </div>

                <div className="col-12">
                  <div className="sign__group">
                    <label className="sign__label" for="description">Description</label>
                    <textarea id="description" name="description" className="sign__textarea" placeholder="e. g. 'After purchased you will get downloadable zip file'" onChange={onChangeDescription}></textarea>
                  </div>
                </div>

                <div className="col-12 col-xl-3">
                  <button type="button" className="sign__btn" onClick={onCreateItem} disabled={actionLoading}>{ actionLoading ? <CircularProgress  color="secondary" /> : "Create Item"}</button>
                </div>
              </div>
            </form>
           </div>
          </div>
        </div>
      </main>
    </>
  )
}