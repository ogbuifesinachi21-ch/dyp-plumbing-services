//import React from 'react'

import Services from "../components/Services"

interface ServicePageProps { // 1. ACCEPT PROP
  onQuoteClick: () => void;
}

function ServicePage({ onQuoteClick }: ServicePageProps) { // 2. RECEIVE IT
  return (
    <div>
        <Services onQuoteClick={onQuoteClick} /> {/* 3. PASS IT DOWN */}
    </div>
  )
}

export default ServicePage