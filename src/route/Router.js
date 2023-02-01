import React, { useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Home from '../screen/home/Home'
import Product from '../screen/product/Product'
import {useLocation} from "react-router-dom"
import ProductDetails from '../screen/productdetails/ProductDetails'
import Checkout from '../screen/checkout/Checkout'
import Confirmation from '../screen/checkout/Confirmation'


const ScrollToTop=()=>{
  const {pathname}=useLocation();

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
}
const Router = () => {
  return (
    <div >
    <Navbar/>
    <ScrollToTop/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product/:id' element={<Product/>}/>
    <Route path='/products/:id' element={<ProductDetails/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/checkout/success' element={<Confirmation/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default Router