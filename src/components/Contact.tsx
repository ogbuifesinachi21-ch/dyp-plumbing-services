//import React from 'react'
import { Phone, Mail, MapPin, Send, Music2 } from "lucide-react"; // 1. ADD Facebook, Music2
import { useState } from "react";
import { FaFacebook } from "react-icons/fa6";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    (e.target as HTMLFormElement).reset();
  };

  const inputClass = "input input-bordered w-full bg-white text-black border-gray-300 focus:border-[#FF6B00] placeholder:text-gray-500";
  const textareaClass = "textarea textarea-bordered w-full h-32 bg-white text-black border-gray-300 focus:border-[#FF6B00] placeholder:text-gray-500";

  return (
    <section className="bg-gray-100 py-20 fade-in fade-in-delay-1">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#FF6B00] font-bold">CONTACT US</p>
          <h1 className="text-4xl font-extrabold text-black mt-2">Get In Touch Today</h1>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* CONTACT INFO */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3"><Phone className="text-[#FF6B00]"/> <span className="text-black">+2349163728925</span></div>
              <div className="flex items-center gap-3"><Mail className="text-[#FF6B00]"/> <span className="text-black">Dypplumbingservices@gmail.com</span></div>
              <div className="flex items-start gap-3"><MapPin className="text-[#FF6B00]"/> <span className="text-black">Attachment 96 new building material international market Ogidi, Anambra State</span></div>
              
              {/* 2. ADDED SOCIAL LINKS */}
              <a href="https://www.facebook.com/share/14qDZ14Kq6V/?mibextid=wwXIfr" target="_blank" className="flex items-center gap-3 hover:text-[#FF6B00] transition">
                <FaFacebook className="text-[#FF6B00]"/> 
                <span className="text-black">Facebook</span>
              </a>
              <a href="https://www.tiktok.com/@dypplumbingservices" target="_blank" className="flex items-center gap-3 hover:text-[#FF6B00] transition">
                <Music2 className="text-[#FF6B00]"/> 
                <span className="text-black">TikTok</span>
              </a>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-black">Working Hours</h3>
              <p className="text-black/70">Mon - Sat: 8AM - 6PM</p>
              <p className="text-black/70">Emergency: 24/7</p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Send Us A Message</h2>
            
            {sent && <div className="bg-green-100 text-green-700 p-3 rounded-xl mb-4">Message Sent! We will reply soon.</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label text-black font-semibold">Full Name</label>
                <input type="text" name="name" required placeholder="Enter your Full Name" className={inputClass} />
              </div>
              <div>
                <label className="label text-black font-semibold">Email Address</label>
                <input type="email" name="email" required placeholder="Enter your Email" className={inputClass} />
              </div>
              <div>
                <label className="label text-black font-semibold">Subject</label>
                <input type="text" name="subject" placeholder="What is this about?" className={inputClass} />
              </div>
              <div>
                <label className="label text-black font-semibold">Message</label>
                <textarea name="message" required placeholder="Enter your Message" className={textareaClass}></textarea>
              </div>
              <button type="submit" className="btn w-full bg-[#FF6B00] border-[#FF6B00] text-white hover:bg-[#FF6B00]/90 text-lg">
                <Send /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;