"use client";
import Header from "@/components/header";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    applyFor: "",
    college: "",
    course: "",
    year: "",
  });
  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const applyOptions = ["Internship", "Training", "Workshop", "Live Project"];
  const courseOptions = ["PHP", "Python", "MERN Stack", "Java", "React", "Node.js"];
  const yearOptions = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduated"];

  return (
    <div className="min-h-screen bg-[#F5F0EB] font-sans">

      {/* Navbar */}
            <Header />
      


      {/* Form Section */}
      <div className="px-6 py-12 flex justify-center">
        <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-xl border border-[#E8E0D8] bg-white">
          <div className="grid md:grid-cols-[1fr_1.4fr]">

            {/* Left Info Panel */}
            <div className="p-10 bg-[#F5F0EB] border-r border-[#E8E0D8] flex flex-col justify-between">
              <div>
                {/* Logo */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-[#F05A28] flex items-center justify-center text-white font-black text-lg">
                    S
                  </div>
                  <div>
                    <p className="font-black text-sm tracking-widest uppercase text-[#1A1A1A]">ZeroToCode</p>
                    <p className="text-xs text-[#4A4A4A]">Technologies Pvt Ltd</p>
                  </div>
                </div>

                <h2 className="text-2xl font-black leading-snug text-[#1A1A1A] mb-2">
                  Start Your Journey<br />
                  <span className="text-[#F05A28]">Today 🚀</span>
                </h2>
                <div className="w-10 h-1 rounded-full bg-[#F05A28] mb-5" />

                <p className="text-sm leading-relaxed text-[#4A4A4A] mb-8">
                  <strong className="text-[#1A1A1A]">ZeroToCode Technologies Pvt Ltd</strong> is an IT training and
                  software development company providing industrial training, internships, and workshops in PHP,
                  Python, MERN Stack, Java, and more.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { num: "500+", label: "Students Trained" },
                    { num: "10+", label: "Live Projects" },
                    { num: "6+", label: "Technologies" },
                    { num: "95%", label: "Placement Rate" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white border border-[#E8E0D8] rounded-2xl p-4">
                      <p className="text-xl font-black text-[#F05A28]">{s.num}</p>
                      <p className="text-xs text-[#4A4A4A] mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {courseOptions.map((c) => (
                    <span
                      key={c}
                      className="text-xs px-3 py-1.5 rounded-full font-medium bg-[#FDDDD0] text-[#F05A28] border border-[#F0C4B0]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="mt-8 pt-6 border-t border-[#E8E0D8]">
                <p className="text-xs uppercase tracking-widest font-semibold text-[#4A4A4A] mb-3">Contact Us</p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:jaykashyap1115@gmail.com" className="flex items-center gap-2 text-xs text-[#4A4A4A] hover:text-[#F05A28] transition-colors">
                    <span className="text-[#F05A28]">✉</span>
                    jaykashyap1115@gmail.com
                  </a>
                  <a href="tel:+916392361443" className="flex items-center gap-2 text-xs text-[#4A4A4A] hover:text-[#F05A28] transition-colors">
                    <span className="text-[#F05A28]">📞</span>
                    +91 6392361443
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="p-10 bg-white">
              <div className="mb-7">
                <h3 className="text-xl font-black text-[#1A1A1A]">Payment Details</h3>
                <div className="w-8 h-1 rounded-full bg-[#F05A28] mt-2" />
              </div>

              <div className="space-y-5">
                <Field label="Name" name="name" type="text" value={form.name} onChange={handleChange} focused={focused} setFocused={setFocused} placeholder="Your full name" />
                <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} focused={focused} setFocused={setFocused} placeholder="you@example.com" />

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#1A1A1A]">
                    Phone <span className="text-[#F05A28]">*</span>
                  </label>
                  <div className={`flex rounded-xl overflow-hidden border-[1.5px] transition-all duration-200 ${focused === "phone" ? "border-[#F05A28] ring-2 ring-[#F05A28]/10" : "border-[#E8E0D8]"}`}>
                    <div className="bg-[#F5F0EB] border-r border-[#E8E0D8] px-4 flex items-center text-xs font-bold text-[#4A4A4A] whitespace-nowrap">
                      🇮🇳 IN +91
                    </div>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused("")}
                      placeholder="98765 43210"
                      className="flex-1 px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#B0A89E] outline-none bg-white"
                    />
                  </div>
                </div>

                <SelectField label="Apply For" name="applyFor" value={form.applyFor} onChange={handleChange} options={applyOptions} focused={focused} setFocused={setFocused} />
                <Field label="College Name" name="college" type="text" value={form.college} onChange={handleChange} focused={focused} setFocused={setFocused} placeholder="Your college / university" />

                <div className="grid grid-cols-2 gap-4">
                  <SelectField label="Course" name="course" value={form.course} onChange={handleChange} options={courseOptions} focused={focused} setFocused={setFocused} />
                  <SelectField label="Year" name="year" value={form.year} onChange={handleChange} options={yearOptions} focused={focused} setFocused={setFocused} />
                </div>

                {/* Amount */}
                <div className="flex items-center justify-between rounded-xl px-5 py-4 bg-[#FFF5F1] border-[1.5px] border-[#F0C4B0]">
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-[#F05A28]">Amount</p>
                    <p className="text-2xl font-black text-[#F05A28] mt-0.5">₹ 500.00</p>
                  </div>
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#FDDDD0] text-[#F05A28]">
                    Non-refundable
                  </span>
                </div>

                {/* T&C */}
                <p className="text-xs leading-relaxed text-[#4A4A4A]">
                  By submitting, you agree to share your information with{" "}
                  <strong className="text-[#1A1A1A]">ZeroToCode</strong> and{" "}
                  <strong className="text-[#1A1A1A]">Razorpay</strong> in accordance with applicable laws.{" "}
                  <a href="#" className="text-[#F05A28] underline hover:opacity-75 transition-opacity">
                    Merchant's business policies ↗
                  </a>
                </p>

                {/* Submit Button */}
                <button
                  type="button"
                  className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-black text-white bg-[#F05A28] hover:bg-[#E04818] shadow-lg shadow-[#F05A28]/30 hover:shadow-[#F05A28]/50 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                >
                  Pay & Register Now
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                <p className="text-center text-xs text-[#B0A89E]">
                  🔒 Secured by <strong className="text-[#4A4A4A]">Razorpay</strong>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center pb-8 text-xs text-[#B0A89E]">
        © 2025 ZeroToCode Technologies Pvt Ltd · All rights reserved
      </footer>
    </div>
  );
}

function Field({ label, name, type, value, onChange, focused, setFocused, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-[#1A1A1A]">
        {label} <span className="text-[#F05A28]">*</span>
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused("")}
        placeholder={placeholder}
        className={`px-4 py-3 text-sm rounded-xl outline-none transition-all duration-200 bg-white text-[#1A1A1A] placeholder-[#B0A89E] border-[1.5px] ${
          focused === name
            ? "border-[#F05A28] ring-2 ring-[#F05A28]/10"
            : "border-[#E8E0D8] hover:border-[#F0C4B0]"
        }`}
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, focused, setFocused }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-[#1A1A1A]">
        {label} <span className="text-[#F05A28]">*</span>
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused("")}
        className={`px-4 py-3 text-sm rounded-xl outline-none transition-all duration-200 bg-white cursor-pointer appearance-none border-[1.5px] ${
          value ? "text-[#1A1A1A]" : "text-[#B0A89E]"
        } ${
          focused === name
            ? "border-[#F05A28] ring-2 ring-[#F05A28]/10"
            : "border-[#E8E0D8] hover:border-[#F0C4B0]"
        }`}
      >
        <option value="" disabled>-- Select --</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}