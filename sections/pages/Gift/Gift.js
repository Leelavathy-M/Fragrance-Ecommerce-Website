import React, {useState}  from 'react'
import GiftDatas from './GiftDatas'
import './Gift.css';
import { IoCloseSharp } from "react-icons/io5";

export const Gift = () => {
  const [detail, setDetail] = useState([]); 
  const [close, setClose] =useState(false)
  const detailPage = (Product) =>{
      setDetail([{...Product}])
      setClose(true)
  }
  const [Gift] = useState(GiftDatas)
  return (
    <>
    {
        close ?
    <div className='detai_containers'>
        <div className='detai-contants'>
       <button className='close' onClick={() => setClose(false)}><IoCloseSharp /></button>
            {
                detail.map((b)=>{
                    return(
                        <>
                        <div className='detai_info'>
                            <div className='img-box'>
                                <img src={b.img} alt={b.Title}></img>
                            </div>
                            <div className='product_detai'>
                                <h2>{b.Title}</h2>
                                <p >{b.Review}</p>
                                <p >{b.ml}</p>
                                <p >{b.gender}</p>
                                <p className="Des">{b.Des}</p>
                                <p >{b.price}</p>
                                <button>Add to cart</button>
                            </div>
                            </div></>
                    )
                })
            }
        </div>
    </div> :null
}
      <div  className="Gift">
      <div className="containers">
      <div className="fragbox">
        <div className="contains">
          {
            Gift.map((curElm) => {
              return(
                <>
                <div className='boxs'>
                    <div className='contants'>
                        <div className='img-box'>
                            <img src={curElm.img} alt={curElm.Title}></img>
                        </div>
                        <div className='details'>
                            <div className='info'>
                                <h4>{curElm.Title}</h4>
                                <p className="review">{curElm.Review}</p>
                                <p>{curElm.ml}</p>
                                <span>{curElm.gender}</span>
                            <p>{curElm.price}</p>
                            </div>
                            <button onClick={()=> detailPage (curElm)}>View</button>
                        </div>
                    </div>
                </div>
                </>
              )
            })
          }
        </div>
      </div>
      </div>
    </div>
    </>
  )
}
