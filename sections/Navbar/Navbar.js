import React, {useState} from 'react';
import { RiSearchLine, RiShoppingCartFill, RiUserFill } from 'react-icons/ri';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Image from './Fra.jpg';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
             <div className='topbar'>
        FREE SHIPPING ON ORDER ABOVE  ₹1499
      </div>
            <div className='Container'>
            <img className='Logo' src={Image}/>
                <a href='' className='logo'>L'Fragy</a>
                <div className='search-box'>
                    <input type='search' id='' placeholder='search perfumes, mist, lotion, combo, gifts, etc...' />
                    <div className='search-icon'><RiSearchLine /></div>
                </div>
                <div className='icons'>
                    <Link to='/cart' className='cart-icon'><RiShoppingCartFill/><span className='count'>0</span></Link>
                    <Link to='/user' className='user-icon'><RiUserFill/></Link>
                </div>
                </div>
                <div className='menu' onClick={()=>{
                    setMenuOpen(!menuOpen);
                }}>
                <span></span>
                <span></span>
                <span></span>
                </div>
                <div className='bn-container'>
                    <ul className={menuOpen ? "open" : ""} >
                        <li><Link to='/' className='link' >Shop All</Link></li>
                        <li><Link to='/fragrance' className='link'>Fragrance</Link></li>
                        <li><Link to='/body' className='link'>Body Frags</Link></li>
                        <li><Link to='/combo' className='link'>Combo</Link></li>
                        <li><Link to='/gift' className='link'>Gifts</Link></li>
                    </ul>
                </div>
        </nav>
    )
}

export default Navbar;

{/* <MdArrowDropDown/> */}