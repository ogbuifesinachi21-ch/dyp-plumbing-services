//import React from 'react'
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from "react";
import dyp from '../assets/dy.jpeg'
import dyp1 from '../assets/dyp2.jpeg'
import dyp2 from '../assets/dyp3.jpeg'
import dyp3 from '../assets/dyp4.jpeg'
import dyp4 from '../assets/dyp5.jpeg'
import dyp5 from '../assets/dyp6.jpeg'
import dyp6 from '../assets/dyp7.jpeg'
import dyp7 from '../assets/dyp8.jpeg'
import dyp8 from '../assets/dyp9.jpeg'
import dyp9 from '../assets/dy1.jpeg'

const images = [
  dyp, dyp1, dyp2, dyp3, dyp4, dyp5, dyp6, dyp7, dyp8, dyp9
];

interface HeroProps {
  onQuoteClick: () => void;
}

const Hero = ({ onQuoteClick }: HeroProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const features = [
    {icon: "👷", title: "Professional Service"},
    {icon: "🛡️", title: "Quality Workmanship"},
    {icon: "⚡", title: "Fast Response"},
    {icon: "💰", title: "Affordable Solutions"},
  ]

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 3000);
    emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="bg-gray-100 relative overflow-hidden fade-in">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* LEFT: TEXT */}
        <div className="text-center lg:text-left">
          <p className="text-[#FF6B00] font-bold mb-2 tracking-wide text-sm md:text-base fade-in">DYP PLUMBING SERVICES NIG LTD.</p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
            Reliable <span className="text-[#FF6B00]">Plumbing</span> <br className="hidden md:block"/>Services You Can Trust
          </h1>

          <p className="mt-4 text-black/70">DYP Plumbing Services Nigeria Limited is a company that provides professional plumbing installation, maintenance, and repair services for residential, commercial, and building projects. We provide professional plumbing solutions for homes, offices, businesses, and construction projects.</p>
          <p className="text-3xl text-black mt-4">YOU CAN BOOK APPRENTICESHIP WITH US JUST BY CLICKING ON THE BUTTON ON THE NAVBAR THAT SAYS <span className="italic text-semibold text-red-500">Apply NOW</span></p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <button
              onClick={onQuoteClick}
              className="btn bg-[#FF6B00] border-[#FF6B00] text-white hover:bg-[#FF6B00]/90 flex items-center gap-2"
            >
              Request a Quote <ArrowRight size={16}/>
            </button>

            <Link to="/services" className="btn btn-outline border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white flex items-center gap-2">
              Our Services <ArrowRight size={16}/>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {features.map(f => (
              <div key={f.title} className="flex flex-col items-center text-center">
                <div className="text-2xl md:text-3xl text-[#FF6B00]">{f.icon}</div>
                <p className="text-xs md:text-sm font-semibold text-black mt-1">{f.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: CAROUSEL */}
        <div className="relative mt-8 lg:mt-0">
          <div className="overflow-hidden rounded-2xl shadow-2xl" ref={emblaRef}>
            <div className="flex">
              {images.map((img, index) => (
                <div className="flex-[0_0_100%] min-w-0" key={index}>
                  <img src={img} alt={`DYP Plumbing work ${index + 1}`} className="w-full h-[300px] md:h-[500px] object-cover"/>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${selectedIndex === index? 'bg-[#FF6B00] w-5' : 'bg-black/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-12 md:h-20 bg-[#FF6B00]" style={{clipPath: 'ellipse(100% 100% at 50% 100%)'}}></div>
    </section>
  )
}
export default Hero;