//import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react"; // added GraduationCap icon
import { useState } from "react";
import logo from '../assets/logo2.jpeg'

interface NavbarProps { 
  onQuoteClick: () => void;
  onApprenticeshipClick: () => void; // 1. NEW PROP
}

const Navbar = ({ onQuoteClick, onApprenticeshipClick }: NavbarProps) => { // 2. USE NEW PROP
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            
            {/* LOGO + TEXT - LEFT */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logo}
                alt="DYP Plumbing Logo" 
                className="h-14 w-14 rounded-full object-cover border-2 border-[#FF6B00] shadow-md shrink-0" 
              />
              <div className="flex flex-col leading-tight italic">
                <span className="text-2xl font-extrabold text-[#FF6B00]">DYP</span>
                <span className="text-sm font-bold text-black -mt-1 tracking-wide">PLUMBING SERVICES</span>
              </div>
            </Link>

            {/* DESKTOP LINKS - MIDDLE */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map(link => (
                <NavLink 
                  key={link.name} 
                  to={link.path}
                  className={({ isActive }) => 
                    `font-semibold hover:text-[#FF6B00] ${isActive ? 'text-[#FF6B00]' : 'text-black'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* BUTTONS - FAR RIGHT */}
            <div className="hidden lg:flex items-center gap-3">
              {/* NEW APPRENTICESHIP BUTTON */}
              <button 
                onClick={onApprenticeshipClick}
                className="btn bg-black border-black text-white hover:bg-black/80 px-5 flex items-center gap-2"
              >
                <GraduationCap size={18} /> Apply Now
              </button>

              <button 
                onClick={onQuoteClick}
                className="btn bg-[#FF6B00] border-[#FF6B00] text-white hover:bg-[#FF6B00]/90 px-6"
              >
                Request a Quote
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button className="lg:hidden" onClick={() => setOpen(!open)}>
              {open ? <X className="text-black"/> : <Menu className="text-black"/>}
            </button>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="lg:hidden py-4 space-y-3">
              {navLinks.map(link => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setOpen(false)}
                  className="block text-black font-semibold"
                >
                  {link.name}
                </Link>
              ))}

              {/* MOBILE APPRENTICESHIP BUTTON */}
              <button 
                onClick={() => { onApprenticeshipClick(); setOpen(false); }}
                className="btn w-full bg-black border-black text-white flex items-center justify-center gap-2"
              >
                <GraduationCap size={18} /> Apply For Apprenticeship
              </button>

              <button 
                onClick={() => { onQuoteClick(); setOpen(false); }}
                className="btn w-full bg-[#FF6B00] border-[#FF6B00] text-white"
              >
                Request a Quote
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;