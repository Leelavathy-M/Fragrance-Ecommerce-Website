import React, {useState} from 'react'
import NewArrivalData from './NewArrivalData.js'
import './NewArrivals.css'
import { IoCloseSharp } from "react-icons/io5";

const NewArrival=()=> {
    const [detail, setDetails] = useState([]); 
    const [close, setClose] =useState(false)
    const detailPages = (NewArrival) =>{
        setDetails([{...NewArrival}])
        setClose(true)
    }
  return (
    <>
    {
        close ?
    <div className='details_container'>
        <div className='details-contant'>
       <button className='close' onClick={() => setClose(false)}><IoCloseSharp /></button>
            {
                detail.map((x)=>{
                    return(
                        <>
                        <div className='details_info'>
                            <div className='img-box'>
                                <img src={x.img} alt={x.Title}></img>
                            </div>
                            <div className='product_details'>
                                <h2>{x.Title}</h2>
                                <p className='caty'>{x.category}</p>
                                <p >{x.price}</p>
                                <button onClick={()=>{}}>Add to cart</button>
                            </div>
                            </div></>
                    )
                })
            }
        </div>
    </div> :null
}
            <h1 className='name'>New Arrivals</h1>
     <div className='contains'>
        {
            NewArrivalData.map((curElmm) =>{
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
                                    <p>{curElmm.category}</p>
                                    <span>{curElmm.gender}</span>
                                <p>{curElmm.price}</p>
                                </div>
                                <button onClick={()=> detailPages (curElmm)}>View</button>
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

export default NewArrival