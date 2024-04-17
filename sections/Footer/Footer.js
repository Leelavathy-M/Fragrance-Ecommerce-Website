import React from 'react'
import imgg from '../Navbar/Fra.jpg';
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='conatiner'>
            <div className='footer-box'>
                <div className='header'>
                    <img className='im' src={imgg} alt=''></img>
                    <p className='logo-footer'>L'Fragy</p>
                </div>
                <div className='bottom'>
                    <div className='boxx'>
                        <h3>BEST SELLERS</h3>
                        <ul>
                            <li>Fragrance</li>
                            <li>Body Frags</li>
                            <li>Combo</li>
                            <li>Gifts</li>
                        </ul>
                    </div>
                    <div className='boxx'>
                        <h3>INFORMATION</h3>
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Refund And Return</li>
                            <li>Shipping Policy</li>
                        </ul>
                    </div>
                    <div className='boxx'>
                        <h3>SUPPORT</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>All Products</li>
                            <li>Customer Support</li>
                        </ul>
                    </div>
                    <div className='boxx'>
                        <h3>STORE LOCATION</h3>
                        <ul>
                            <li>No. 152, Ranganatha Road, Vadapalani, Chennai-600023.</li>
                            <li>l'fragy@gmail.com</li>
                            <li>+91 902440 02004</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='copyright'>copyright © 2024 | All Rights Reserved | L'FRAGY</div>
    </div>
    </>
  )
}

export default Footer;