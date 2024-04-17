import React, {useState} from "react";
import BodyDatas from './BodyDatas'
import './Body.css';
import { IoCloseSharp } from "react-icons/io5";

export const Body = () => {
  const [detail, setDetail] = useState([]); 
  const [close, setClose] =useState(false)
  const detailPage = (Product) =>{
      setDetail([{...Product}])
      setClose(true)
  }
  const [Body, setBody] = useState(BodyDatas)
  const filtterbody = (Body)=>{
    const update = BodyDatas.filter((b)=>{
     return b.gender === Body;
    })
    setBody(update);
  }
  const AllProducts = ()=>{
    setBody(BodyDatas)
  }
  return ( 
    <>
    {
        close ?
    <div className='detai_container'>
        <div className='detai-contant'>
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
      <div  className="Body">
      <div className="containers">
        <div className="filter">
          <div className="cate">
          <h2>Body </h2>
            <h2>Categories</h2>
            <ul>
            <li onClick={()=>AllProducts ()}>All Products</li>
              <li onClick={()=>filtterbody ("Body Mist")}>Body Mist</li>
              <li onClick={()=>filtterbody ("Body Lotion")}>Body Lotion</li>
            </ul>
          </div>
        </div>
      <div className="fragbox">
        <div className="contains">
          {
            Body.map((curElmm) => {
              return(
                <>
                <div className='box'>
                    <div className='contant'>
                        <div className='img-box'>
                            <img src={curElmm.img} alt={curElmm.Title}></img>
                        </div>
                        <div className='details'>
                            <div className='info'>
                                <h4>{curElmm.Title}</h4>
                                <p className="review">{curElmm.Review}</p>
                                <p>{curElmm.ml}</p>
                                <span>{curElmm.gender}</span>
                            <p>{curElmm.price}</p>
                            </div>
                            <button onClick={()=> detailPage (curElmm)}>View</button>
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