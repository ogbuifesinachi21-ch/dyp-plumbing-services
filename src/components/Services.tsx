//import React from 'react'
import { Wrench, Droplets, Bath, CookingPot, Droplet, Toilet, Flame, Phone, Waves } from "lucide-react";
import { GiFountain } from "react-icons/gi";

import bathroom from '../assets/bathroom.jpeg'
import fountain from '../assets/fountain.jpeg'
import pool from '../assets/pool.jpeg'
import pipe from '../assets/pipes.jpeg'
import tank from '../assets/tanks.jpeg'
import toilet from '../assets/dyp10.jpeg'
import kitchen from '../assets/kitechen.jpeg' // fixed typo
import emergency from '../assets/emergency.jpeg'
import leak from '../assets/leak.jpeg'
import water from '../assets/water heater.jpeg'

const services = [
  {
    icon: <Wrench size={32}/>, 
    title: "Pipe Installation & Repair", 
    desc: "Installation, repair and replacement of all types of pipes including PVC, copper and PPR.",
    image: pipe // was unsplash
  },
  {
    icon: <Droplets size={32}/>, 
    title: "Water Leak Detection & Repair", 
    desc: "Accurate leak detection and repair to prevent water damage and reduce water bills.",
    image: leak // was unsplash
  },
  {
    icon: <Bath size={32}/>, 
    title: "Bathroom Plumbing", 
    desc: "Complete bathroom plumbing installation and repair including showers, tubs and faucets.",
    image: bathroom // was unsplash
  },
  {
    icon: <CookingPot size={32}/>, 
    title: "Kitchen Plumbing", 
    desc: "Sink, faucet and kitchen plumbing installation and repair for homes and restaurants.",
    image: kitchen // was unsplash
  },
  {
    icon: <Waves size={32}/>, 
    title: "Swimming Pool Plumbing", 
    desc: "Pool water circulation, filtration systems, and pipe installation for residential and commercial pools.",
    image: pool // was unsplash
  },
  {
    icon: <Droplet size={32}/>, 
    title: "Water Tank Installation", 
    desc: "Installation of overhead and underground water tanks with pump connections.",
    image: tank // was unsplash
  },
  {
    icon: <Toilet size={32}/>, 
    title: "Toilet Installation & Repair", 
    desc: "Toilet installation and repair for all types of toilets including flush tanks.",
    image: toilet // was unsplash
  },
  {
    icon: <Flame size={32}/>, 
    title: "Water Heater Installation", 
    desc: "Installation and repair of electric and gas water heaters for homes and offices.",
    image: water // was unsplash
  },
  {
    icon: <GiFountain size={32}/>, 
    title: "Water Fountain Installation", 
    desc: "Design and installation of decorative water fountains for homes, hotels and offices.",
    image: fountain // was unsplash
  },
  {
    icon: <Phone size={32}/>, 
    title: "Emergency Plumbing", 
    desc: "24/7 emergency plumbing services when you need us most. Fast response guaranteed.",
    image: emergency // was unsplash
  },
]

interface ServicesProps {
  onQuoteClick: () => void;
}

const Services = ({ onQuoteClick }: ServicesProps) => {
  return (
    <section className="py-20 bg-gray-50 fade-in">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <p className="text-[#FF6B00] font-bold tracking-wide">WHAT WE DO</p>
          <h2 className="text-4xl font-extrabold text-black mt-2">Our Plumbing Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 fade-in">
          {services.map(s => (
            <div key={s.title} className="card bg-white shadow-lg rounded-2xl overflow-hidden border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex-col">
              
              {/* IMAGE */}
              <div className="relative h-40 w-full">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-white p-2 rounded-lg text-[#FF6B00] shadow">
                  {s.icon}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 flex-col grow">
                <h3 className="font-bold text-black text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-black/70 mb-4 grow">{s.desc}</p>
                <button 
                  onClick={onQuoteClick}
                  className="btn btn-sm w-full bg-[#FF6B00] border-[#FF6B00] text-white hover:bg-[#FF6B00]/90 mt-auto"
                >
                  Request This Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Services;