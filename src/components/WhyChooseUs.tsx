//import React from 'react'
const features = [
  {icon: "👷", title: "Professional Team", desc: "Our plumbers are licensed, trained and experienced."},
  {icon: "🛡️", title: "Quality Guarantee", desc: "We stand behind our work with a 100% satisfaction guarantee."},
  {icon: "⚡", title: "Fast Response", desc: "Emergency services available 24/7 with quick response times."},
  {icon: "💰", title: "Affordable Pricing", desc: "Competitive pricing with no hidden fees or surprises."},
]

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white fade-in fade-in-delay-1">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-[#FF6B00] font-bold tracking-wide">WHY CHOOSE US</p>
        <h2 className="text-4xl font-extrabold text-black mt-2 mb-12">Why Choose DYP Plumbing</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(f => (
            <div key={f.title} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#FF6B00] rounded-full flex items-center justify-center text-4xl mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-black">{f.title}</h3>
              <p className="text-black/60 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default WhyChooseUs;