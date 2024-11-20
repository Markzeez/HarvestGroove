import React from 'react'
import HeroSection from './Component/HeroSection'
import CultivateSustain from './Component/CultivateSustain'
import Navbar from './Component/Navbar'
import About from './Component/About'
import Farm from './Component/Farm'
import Provide from './Component/Provide'
import Footer from './Component/Footer'


function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Farm/>
    <Provide/>
    <CultivateSustain/>
    <Footer/>
    </>
  )
}

export default App