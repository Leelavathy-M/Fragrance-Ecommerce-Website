import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";
import './Bg.css';
import Img1 from './Circle5.png';
import Img2 from './Circle2.png';
import Img3 from './Circle3.png';
import Img4 from './Circle4.png';

const Bg = () => {
  return (
    <>
      <div className='Bg'>
      </div>
      <div className='product_type'>
        <div className='container'>
          <div className='box'>
            <div className='img_box'>
              <img src={Img1} alt='Perfume' />
            </div>
            <div className='details'>
              <p>Perfumes</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src={Img2} alt='Body Mist & Lotion' />
            </div>
            <div className='details'>
              <p>Body Mist & Lotion</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src={Img3} alt='Combo' />
            </div>
            <div className='details'>
              <p>Combo</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src={Img4} alt='Gifts' />
            </div>
            <div className='details'>
              <p>Gifts</p>
            </div>
          </div>
        </div>
      </div>
      <div className='delivery'>
        <div className='container'>
          <div className="div">
          <div className='box'>
            <div className='icon'>
            <FaTruckFast />
            </div>
            <div className="details">
              <h3>Free Shipping</h3>
              <p>Order Above  ₹1499</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
            <FaDollarSign />
            </div>
            <div className="details">
              <h3>Return & Refund</h3>
              <p>Money Back Gaurenty</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
            <FaPercentage />
            </div>
            <div className="details">
              <h3>Member Discount</h3>
              <p>On Every Order</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
            <ImHeadphones />
            </div>
            <div className="details">
              <h3>Customer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Bg;