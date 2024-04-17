import React, {useState} from 'react'
import ComboDatas from './ComboDatas'
import './Combo.css';
import { IoCloseSharp } from "react-icons/io5";

export const Combo = () => {
  const [detail, setDetail] = useState([]); 
  const [close, setClose] =useState(false)
  const detailPage = (Product) =>{
      setDetail([{...Product}])
      setClose(true)
  }
  const [Combo] = useState(ComboDatas)
  return (
    <>
      {
        close ?
    <div className='detaii_container'>
        <div className='detaii-contant'>
       <button className='close' onClick={() => setClose(false)}><IoCloseSharp /></button>
            {
                detail.map((b)=>{
                    return(
                        <>
                        <div className='detaii_info'>
                            <div className='img-box'>
                                <img src={b.img} alt={b.Title}></img>
                            </div>
                            <div className='product_detaii'>
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
      <div  className="Combo">
      <div className="containers">
      <div className="fragbox">
        <div className="contains">
          {
            Combo.map((curElm) => {
              return(
                <>
                <div className='box'>
                    <div className='contant'>
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

