import React from 'react'
import {Link} from 'react-router-dom'
import './Cart.css'

const Cart = ({Cart}) => {
    return (
    <>
    <div className='cartcontainer'>
      <div className='emptycart'>
        <h2 className='empty'>Cart is Empty</h2>
        <Link to='/' className='emptybtn'>Shop Now</Link>
    </div>
</div>
    </>
    )
}

export default Cart