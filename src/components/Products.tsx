//import React from 'react'
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import fit from '../assets/fit.jpeg'
import pprpipe from '../assets/ppr.jpeg'
import tap from '../assets/tap.jpeg'
import waterheater from '../assets/water heater.jpeg'
import bathroom from '../assets/bathroom.jpeg'
import tankss from '../assets/tankss.jpeg'


const products = [
  {img: pprpipe, title: "Tuff PPR Pipes", price: "₦8,000 - ₦25,000"},
  {img: tankss, title: "Water Tanks", price: "₦85,000 - ₦350,000"},
  {img: waterheater, title: "Water Heaters", price: "₦45,000 - ₦120,000"},
  {img: tap, title: "TUFF Tap", price: "₦30,000 - ₦70,000"},
  {img: bathroom, title: "Toilets & WCs", price: "₦35,000 - ₦90,000"},
  {img: fit, title: "Pipes & Fittings", price: "₦1,500 - ₦25,000"},
]

const Products = () => {
  return (
    <section className="py-20 bg-gray-100 fade-in">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-[#FF6B00] font-bold tracking-wide">OUR PRODUCTS</p>
          <h2 className="text-4xl font-extrabold text-black mt-2">Quality Plumbing Products</h2>
        </div>

        {/* 6 PRODUCT CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(p => (
            <div key={p.title} className="card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <figure><img src={p.img} alt={p.title} className="w-full h-56 object-cover"/></figure>
              <div className="card-body">
                <h3 className="card-title text-black font-bold">{p.title}</h3>
                <p className="text-[#FF6B00] font-bold text-lg">{p.price}</p>
                <div className="card-actions justify-end mt-2">
                  <Link to="/contact" className="btn btn-sm bg-[#FF6B00] border-[#FF6B00] text-white hover:bg-[#FF6B00]/90">
                    <ShoppingCart size={16}/> View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Products;