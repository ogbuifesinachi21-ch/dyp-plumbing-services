//import React from 'react'
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebook, FaTiktok } from "react-icons/fa6"; 
import { Link } from "react-router-dom";
import logo from '../assets/logo2.jpeg' // your logo

const Footer = () => {
  return (
    <footer className="bg-[#FF6B00] text-white fade-in">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* COL 1: LOGO + ABOUT */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* CIRCULAR LOGO IMAGE */}
              <img 
                src={logo} 
                alt="DYP Plumbing Logo" 
                className="w-12 h-12 rounded-full object-cover border-2 border-white"
              />
              <div>
                <div className="text-2xl font-extrabold leading-none">DYP</div>
                <div className="text-xs font-semibold tracking-widest">PLUMBING SERVICES</div>
              </div>
            </div>
            <p className="text-white/80">DYP Plumbing Services Nigeria Limited provides professional plumbing installation, maintenance, and repair services for residential, commercial, and building projects.</p>
          </div>

          {/* COL 2: QUICK LINKS */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/products" className="hover:underline">Products</Link></li>
              <li><Link to="/contact-us" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* COL 3: SERVICES */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>Water Supply Installation</li>
              <li>Drainage Systems</li>
              <li>Bathroom & Sanitary Fittings</li>
              <li>Leak Detection & Repairs</li>
              <li>Emergency Plumbing</li>
            </ul>
          </div>

          {/* COL 4: CONTACT */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><Phone size={16}/> +234 916 372 8925</li>
              <li className="flex items-center gap-2"><Phone size={16}/> +234 811 172 7749</li>
              <li className="flex items-center gap-2"><Mail size={16}/> Dypplumbingservices@gmail.com</li>
              <li className="flex items-start gap-2"><MapPin size={16}/> Attachment 96, New Building Materials International Market, Ogidi, Anambra State</li>
              <li className="flex items-center gap-2"><Clock size={16}/> 7am - 6pm Daily</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a 
                href="https://www.facebook.com/share/14qDZ14Kq6V/?mibextid=wwXIfr" 
                target="_blank" 
                className="bg-white/20 p-2 rounded-full hover:bg-white/30"
              >
                <FaFacebook size={18}/>
              </a>
              <a 
                href="https://www.tiktok.com/@dypplumbingservices" 
                target="_blank" 
                className="bg-white/20 p-2 rounded-full hover:bg-white/30"
              >
                <FaTiktok size={18}/>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
          © 2026 DYP Plumbing Services Nigeria Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;