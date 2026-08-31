//import React from 'react'
import { useState, useRef } from "react";
import { GraduationCap, Wrench, Shield, User, CheckCircle, Send, X, Loader2 } from "lucide-react";

interface ApprenticeshipFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApprenticeshipForm = ({ isOpen, onClose }: ApprenticeshipFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [education, setEducation] = useState([
    { level: "", school: "", location: "", year: "" },
    { level: "", school: "", location: "", year: "" },
    { level: "", school: "", location: "", year: "" },
  ]);

  const handleEduChange = (index: number, field: string, value: string) => {
    const updated = [...education];
    updated[index][field as keyof typeof updated[0]] = value;
    setEducation(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");

    const formData = new FormData(formRef.current!);

    // Add education table data as JSON so it shows nicely in email
    formData.append("education", JSON.stringify(education));

    // Web3Forms required fields
    formData.append("access_key", "d97c92c1-afb7-4bbe-b9ed-6ba8a3bf2fb0");
    formData.append("subject", "New Apprenticeship Application - DYP Plumbing");
    formData.append("from_name", "DYP Plumbing Website");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      setStatusMsg("✅ Application Submitted Successfully!");
      formRef.current?.reset();
      setEducation([
        { level: "", school: "", location: "", year: "" },
        { level: "", school: "", location: "", year: "" },
        { level: "", school: "", location: "", year: "" },
      ]);
      setTimeout(() => {
        setSubmitted(false);
        setStatusMsg("");
        onClose();
      }, 3000);
    } else {
      setStatusMsg(`❌ ${data.message}`);
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  const inputClass = "input input-bordered w-full bg-white text-black border-gray-300 focus:border-[#FF6B00] placeholder:text-gray-500";
  const labelClass = "label text-black font-semibold";
  const tableInputClass = "input input-sm w-full bg-white text-black border-gray-300";

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 btn-sm btn-circle btn-ghost z-10">
          <X className="text-black"/>
        </button>

        <div className="p-8 pt-14">
          <div className="text-center mb-8">
            <p className="text-[#FF6B00] font-bold">JOIN OUR TEAM</p>
            <h2 className="text-4xl font-extrabold text-black">APPRENTICESHIP APPLICATION FORM</h2>
            <p className="text-black/70 italic mt-2">Learn Today. Build Tomorrow. Succeed With Us.</p>
          </div>

          {statusMsg && (
            <div className={`p-4 rounded-xl text-center font-semibold flex items-center justify-center gap-2 mb-6 ${submitted? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
              <CheckCircle/> {statusMsg}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            {/* 1. PERSONAL INFORMATION */}
            <div>
              <h3 className="flex items-center gap-2 text-xl font-bold text-white bg-black p-3 rounded-lg mb-4">
                <User size={20}/> 1. PERSONAL INFORMATION
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className={labelClass}>Full Name</label><input name="fullName" required className={inputClass}/></div>
                <div><label className={labelClass}>Date of Birth</label><input type="date" name="dob" required className={`${inputClass} text-black`}/></div>
                <div><label className={labelClass}>Phone Number</label><input name="phone" required className={inputClass}/></div>
                <div><label className={labelClass}>Email Address</label><input type="email" name="email" required className={inputClass}/></div>
                <div className="md:col-span-2"><label className={labelClass}>Residential Address</label><input name="address" required className={inputClass}/></div>
              </div>
            </div>

            {/* 2. EDUCATION */}
            <div>
              <h3 className="flex items-center gap-2 text-xl font-bold text-white bg-black p-3 rounded-lg mb-4">
                <GraduationCap size={20}/> 2. EDUCATIONAL BACKGROUND
              </h3>
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead className="bg-[#FF6B00] text-white">
                    <tr>
                      <th>S/N</th><th>LEVEL</th><th>SCHOOL</th><th>LOCATION</th><th>YEAR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {education.map((edu, i) => (
                      <tr key={i} className="text-black">
                        <td className="font-bold">{i + 1}</td>
                        <td><input value={edu.level} onChange={(e) => handleEduChange(i, 'level', e.target.value)} className={tableInputClass} placeholder="SSCE"/></td>
                        <td><input value={edu.school} onChange={(e) => handleEduChange(i, 'school', e.target.value)} className={tableInputClass} placeholder="School"/></td>
                        <td><input value={edu.location} onChange={(e) => handleEduChange(i, 'location', e.target.value)} className={tableInputClass} placeholder="City"/></td>
                        <td><input value={edu.year} onChange={(e) => handleEduChange(i, 'year', e.target.value)} className={tableInputClass} placeholder="2020"/></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. APPRENTICESHIP INFO */}
            <div>
              <h3 className="flex items-center gap-2 text-xl font-bold text-white bg-black p-3 rounded-lg mb-4">
                <Wrench size={20}/> 3. APPRENTICESHIP INFORMATION
              </h3>
              <div className="space-y-4">
                <div><label className={labelClass}>Trade / Area of Interest</label><input name="trade" className={inputClass}/></div>
                <div><label className={labelClass}>Why do you want to join?</label><textarea name="why" className="textarea textarea-bordered w-full h-24 bg-white text-black border-gray-300"/></div>
              </div>
            </div>

            {/* 4. GUARANTOR */}
            <div>
              <h3 className="flex items-center gap-2 text-xl font-bold text-white bg-black p-3 rounded-lg mb-4">
                <Shield size={20}/> 4. GUARANTOR INFORMATION
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className={labelClass}>Full Name</label><input name="guarantorName" required className={inputClass}/></div>
                <div><label className={labelClass}>Phone Number</label><input name="guarantorPhone" required className={inputClass}/></div>
                <div><label className={labelClass}>Relationship</label><input name="guarantorRelation" required className={inputClass}/></div>
                <div><label className={labelClass}>Address</label><input name="guarantorAddress" required className={inputClass}/></div>
              </div>
            </div>

            <button type="submit" disabled={loading} className="btn w-full bg-[#FF6B00] border-[#FF6B00] text-white text-lg disabled:opacity-50">
              {loading? <Loader2 className="animate-spin" /> : <Send />} {loading? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ApprenticeshipForm;