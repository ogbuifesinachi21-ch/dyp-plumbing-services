//import React from 'react'
import { Star } from "lucide-react";

const testimonials = [
  {name: "John Adeyemi", role: "Homeowner", text: "DYP Plumbing fixed our burst pipe at 2am. They arrived in 30 minutes and did a perfect job. Highly recommend!", img: "https://i.pravatar.cc/100?img=1"},
  {name: "Sarah Okafor", role: "Business Owner", text: "Professional team. They did our entire office plumbing and it's been 1 year with zero issues. Best plumbers in PH.", img: "https://i.pravatar.cc/100?img=5"},
  {name: "Michael Bello", role: "Contractor", text: "We use DYP for all our construction projects. Reliable, affordable, and they never miss a deadline.", img: "https://i.pravatar.cc/100?img=8"},
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100 fade-in">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-[#FF6B00] font-bold tracking-wide">TESTIMONIALS</p>
        <h2 className="text-4xl font-extrabold text-black mt-2 mb-12">What Our Clients Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.name} className="card bg-white shadow-lg p-6 text-left">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-[#FF6B00] fill-[#FF6B00]" />)}
              </div>
              <p className="text-black/70 italic mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full"/>
                <div>
                  <h4 className="font-bold text-black">{t.name}</h4>
                  <p className="text-sm text-black/60">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Testimonials;