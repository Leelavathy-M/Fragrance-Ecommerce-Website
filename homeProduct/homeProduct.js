import React from 'react'
import './homeProduct.css'
// import Rating from '@mui/material/Rating';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const HomeProduct = () => {
  return (
    <>
    <div className='productThumb'>
      <div className='imgWrapper'>
      <img src='./images/NA1.png' className='w-100'/>
    </div>
    <div className='info'>
      <span className='d-block catName'>Perfume</span>
      <h4 className='title'>Bella Vita Luxury Date EDP Women Perfume</h4>
{/* <Rating className='Rate' name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /> */}
    </div>
    <div className='d-flex align-items-center'>
      <div className='d-flex align-items-center' >
        <span className='price'>₹599</span>
      </div>
      {/* <button type='button' className='btn custom-btn '><p><ShoppingCartOutlinedIcon/></p>Add</button> */}
    </div>
    </div>
    </>
  )
}

export default HomeProduct