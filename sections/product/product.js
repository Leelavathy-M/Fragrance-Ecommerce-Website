import React, {useState} from 'react'
import ProductData from './productData'
import './product.css'
import { RiStarFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Product=()=> {
    const [detail, setDetail] = useState([]); 
    const [close, setClose] =useState(false)
    const detailPage = (Product) =>{
        setDetail([{...Product}])
        setClose(true)
    }
  return (
    <>
    {
        close ?
    <div className='detail_container'>
        <div className='detail-contant'>
       <button className='close' onClick={() => setClose(false)}><IoCloseSharp /></button>
            {
                detail.map((x)=>{
                    return(
                        <>
                        <div className='detail_info'>
                            <div className='img-box'>
                                <img src={x.img} alt={x.Title}></img>
                            </div>
                            <div className='product_detail'>
                                <h2>{x.Title}</h2>
                                <p className='caty'>{x.category}</p>
                                <div className='rating'>
                                        <a href=''><RiStarFill/></a>
                                        <a href=''><RiStarFill/></a>
                                        <a href=''><RiStarFill/></a>
                                        <a href=''><RiStarFill/></a>
                                        <a href=''><RiStarFill/></a>
                                    </div>
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
            <h1 className='name'>Best Sellers</h1>
     <div className='contain'>
        {
            ProductData.map((curElm) =>{
                return(
                    <>
                    <div className='box'>
                        <div className='contant'>
                            <div className='img-box'>
                                <img src={curElm.img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                    <h4>{curElm.Title}</h4>
                                    <p>{curElm.category}</p>
                                    <div className='rating'>
                                        <a href=''><RiStarFill/></a>
                                        <a href=''><RiStarFill/></a>
                                        <a href=''><RiStarFill/></a>
                                        <a href=''><RiStarFill/></a>
                                        <a href=''><RiStarFill/></a>
                                    </div>
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
    </>
  )
}

export default Product