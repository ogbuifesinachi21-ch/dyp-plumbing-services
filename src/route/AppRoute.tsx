//import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ServicePage from "../pages/ServicePage";
import ProductsPage from "../pages/ProductsPage";
import Request from "../pages/Request";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsAppButton";
import { useState } from "react";
import QuoteForm from "../components/QuoteForm";
import ApprenticeshipForm from "../components/ApprenticeshipForm";

const AppRoute = () => {
    const [quoteOpen, setQuoteOpen] = useState(false);
    const [appOpen, setAppOpen] = useState(false)

    const openQuote = () => setQuoteOpen(true); // helper
    

  return (
    <>
       <Navbar 
        onQuoteClick={() => setQuoteOpen(true)} 
        onApprenticeshipClick={() => setAppOpen(true)} // NEW
      />
      <Routes>
        <Route path="/" element={<Home onQuoteClick={openQuote} />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/services" element={<ServicePage onQuoteClick={openQuote} />} /> {/* 2. PASS TO SERVICES */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/request-a-quote" element={<Request />} /> {/* keep this as fallback page */}
      </Routes>

      <Footer />
      <QuoteForm isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
        <ApprenticeshipForm isOpen={appOpen} onClose={() => setAppOpen(false)} /> 
      <WhatsappButton />
    </>
    
  );
};

export default AppRoute;