//import React from 'react'
import { useState, useRef, useEffect } from "react";
import { Send, CheckCircle, X } from "lucide-react";
import emailjs from '@emailjs/browser';

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteForm = ({ isOpen, onClose }: QuoteFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Init EmailJS once
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const buildingTypes = ["Four Story Building","Two Story Building","Duplex","Bungalow","One Toilet / Small Job"];
  const services = ["Water Leakage","Pipe Installation","Drainage / Sewage","Bathroom & Kitchen Plumbing","Water Tank & Pump","Full Plumbing Contract","Emergency Repair","Other"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      'template_zpfq1lo',
      formRef.current!,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
 .then(() => {
      setSubmitted(true);
      setLoading(false);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
      formRef.current?.reset();
    })
 .catch((error) => {
      alert("Failed to send. Please try again.");
      console.log("EmailJS Error:", error); // This will show exact error in console
      setLoading(false);
    });
  };

  if (!isOpen) return null;

  const inputClass = "input input-bordered w-full bg-white text-black border-gray-300 focus:border-[#FF6B00] placeholder:text-gray-500";
  const selectClass = "select select-bordered w-full bg-white text-black border-gray-300 focus:border-[#FF6B00]";
  const textareaClass = "textarea textarea-bordered w-full bg-white text-black border-gray-300 focus:border-[#FF6B00] placeholder:text-gray-500";

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl relative fade-in fade-in-delay-1 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 btn btn-sm btn-circle btn-ghost"><X className="text-black"/></button>

        <div className="p-8">
          <p className="text-[#FF6B00] font-bold">REQUEST A QUOTE</p>
          <h1 className="text-3xl font-extrabold text-black">Get Your Free Contract Estimate</h1>

          {submitted && <div className="bg-green-100 text-green-700 p-3 rounded-xl my-4 flex gap-2 items-center"><CheckCircle /> Quote Request Sent Successfully!</div>}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label text-black font-semibold">Full Name *</label>
                <input name="name" required placeholder="Enter your Full Name" className={inputClass} />
              </div>
              <div>
                <label className="label text-black font-semibold">Phone Number *</label>
                <input name="phone" required placeholder="Enter your Phone Number" className={inputClass} />
              </div>
            </div>

            <div>
              <label className="label text-black font-semibold">Email *</label>
              <input name="email" type="email" required placeholder="Enter your Email" className={inputClass} />
            </div>

            <div>
              <label className="label text-black font-semibold">Type of Building / Project *</label>
              <select name="buildingType" required className={selectClass}> {/* FIXED: was "service" */}
                <option value="">Select Building Type</option>
                {buildingTypes.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>

            <div>
              <label className="label text-black font-semibold">Type of Work Needed *</label>
              <select name="service" required className={selectClass}> {/* Keep "service" for work */}
                <option value="">Select Work</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label className="label text-black font-semibold">Project Address</label>
              <input name="address" placeholder="Enter Project Address" className={inputClass} />
            </div>

            <div>
              <label className="label text-black font-semibold">Project Details *</label>
              <textarea name="message" required rows={4} placeholder="Describe the job: e.g. 4 toilets, water leakage in 2nd floor..." className={textareaClass}></textarea>
            </div>

            <button type="submit" disabled={loading} className="btn w-full bg-[#FF6B00] border-[#FF6B00] text-white text-lg disabled:opacity-50">
              <Send /> {loading? "Sending..." : "Send Quote Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default QuoteForm;