import React, {useState} from "react";
import FragDatas from './FragDatas'
import './Frag.css'
import { IoCloseSharp } from "react-icons/io5";

export const Fragrance = () => {
  const [detail, setDetail] = useState([]); 
    const [close, setClose] =useState(false)
    const detailPage = (Product) =>{
        setDetail([{...Product}])
        setClose(true)
    }
  const [Fragrance, setFragrance] = useState(FragDatas)
  const filtterfrag = (Fragrance)=>{
    const update = FragDatas.filter((x)=>{
     return x.gender === Fragrance;
    })
    setFragrance(update);
  }
  const AllProducts = ()=>{
    setFragrance(FragDatas)
  }
  return ( 
    <>
     {
        close ?
    <div className='detai_container'>
        <div className='detai-contant'>
       <button className='close' onClick={() => setClose(false)}><IoCloseSharp /></button>
            {
                detail.map((x)=>{
                    return(
                        <>
                        <div className='detai_info'>
                            <div className='img-box'>
                                <img src={x.img} alt={x.Title}></img>
                            </div>
                            <div className='product_detai'>
                                <h2>{x.Title}</h2>
                                <p >{x.Review}</p>
                                <p >{x.ml}</p>
                                <p >{x.gender}</p>
                                <p className="Des">{x.Des}</p>
                                <p >{x.price}</p>
                                <button>Add to cart</button>
                            </div>
                            </div></>
                    )
                })
            }
        </div>
    </div> :null
}
    <div className="frag">
      <div className="containers">
        <div className="filter">
          <div className="cate">
          <h2>Fragrance</h2>
            <h2>Categories</h2>
            <ul>
            <li onClick={()=>AllProducts ()}>All Products</li>
              <li onClick={()=>filtterfrag ("For Women")}>For Women</li>
              <li onClick={()=>filtterfrag ("For Men")}>For Men</li>
            </ul>
          </div>
        </div>
      <div className="fragbox">
        <div className="contains">
          {
            Fragrance.map((curElmm) => {
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
