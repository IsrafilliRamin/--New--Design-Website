import "../../App.css"
import React from 'react'
import HeroSection from "../../components/herosection/HeroSection"
import Cards from "../../components/cardItem/Cards"
import Footer from "../../components/footer/Footer"

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default Home
