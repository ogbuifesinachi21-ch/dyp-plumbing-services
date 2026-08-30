//import React from 'react'
import { CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    "Licensed and Insured Professional Plumbers",
    "24/7 Emergency Service with Fast Response", 
    "100% Satisfaction Guarantee on All Work",
    "Transparent Pricing - No Hidden Fees"
  ]
  
  return (
    <section className="bg-white py-20 fade-in">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#FF6B00] font-bold">ABOUT DYP PLUMBING</p>
          <h1 className="text-4xl font-extrabold text-black mt-2">Anambra Most Trusted Plumber</h1>
          <p className="mt-4 text-black/70">
            For over 10 years, DYP Plumbing Services has been providing reliable, professional plumbing solutions to homes, offices, and businesses across Port Harcourt. Our team of certified plumbers are committed to quality workmanship and excellent customer service.
          </p>
          <div className="mt-6 space-y-3">
            {values.map(v => (
              <div key={v} className="flex items-center gap-2">
                <CheckCircle className="text-[#FF6B00]" /> <span className="text-black">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800" alt="About DYP" className="rounded-2xl shadow-2xl"/>
        </div>
      </div>
    </section>
  );
};
export default About;