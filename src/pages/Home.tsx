//import React from 'react'
import Hero from "../components/Hero" // ADD THIS IMPORT
import Products from "../components/Products"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import WhyChooseUs from "../components/WhyChooseUs";

interface HomeProps { 
  onQuoteClick: () => void;
}

function Home({ onQuoteClick }: HomeProps) { 
  return (
    <>
      <Hero onQuoteClick={onQuoteClick} /> 
      <Services onQuoteClick={onQuoteClick} /> {/* PASS IT HERE TOO */}
      <Products />
      <WhyChooseUs />
      <Testimonials />
    </>
  )
}

export default Home