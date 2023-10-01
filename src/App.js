import React from 'react'
import Navbar from './component/Navbar'
import Services from './component/Services'
import Tours from './component/Tours'
import Footer from './component/Footer'

import About from './component/About'
import Hero from './component/Hero'


const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Tours></Tours>
      <Footer></Footer>
    </>
  );
}

export default App