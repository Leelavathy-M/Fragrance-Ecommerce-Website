import React, {useState} from 'react';
import Navbar from './sections/Navbar/Navbar.js';
import Bg from './sections/Bg/Bg.js'
import Product from './sections/product/product.js';
import NewArrival from './sections/NewArrivals/NewArrival.js';
import Footer from './sections/Footer/Footer.js';
import {Route, Routes} from 'react-router-dom';
import {Fragrance} from './sections/pages/Fragy/Fragrance.js'
import {Combo} from './sections/pages/Combo/Combo.js'
import {Gift} from './sections/pages/Gift/Gift.js'
import {Body} from './sections/pages/Body/Body.js'
import Cart from './sections/pages/Cart/Cart.js'
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<><Bg/> <Product /> <NewArrival /></>}/>
      <Route path="/fragrance" element={<Fragrance/>} />
      <Route path="/body" element={<Body/>} />
      <Route path="/combo" element={<Combo/>} />
      <Route path="/gift" element={<Gift/>} />
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App