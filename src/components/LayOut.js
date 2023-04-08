import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
const LayOut = () => {
  return (
    <>
        <Navbar/>
        <div>
        <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default LayOut