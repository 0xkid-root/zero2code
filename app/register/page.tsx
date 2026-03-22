"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import Image from "next/image";

function CustomSelect({ label, name, value, onChange, options, focused, setFocused }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = value || "";
  const isFocused = focused === name || open;

  return (
    <div className="flex flex-col gap-1.5" ref={ref}>
      <label className="text-sm font-semibold text-[#1A1A1A]">
        {label} <span className="text-[#F05A28]">*</span>
      </label>
      <div
        className={`relative px-4 py-3 text-sm rounded-xl cursor-pointer bg-white border-[1.5px] transition-all duration-200 select-none ${
          isFocused ? "border-[#F05A28] ring-2 ring-[#F05A28]/10" : "border-[#E8E0D8] hover:border-[#F0C4B0]"
        }`}
        onClick={() => { setOpen(!open); setFocused(open ? "" : name); }}
      >
        <span className={selected ? "text-[#1A1A1A]" : "text-[#B0A89E]"}>
          {selected || "-- Select --"}
        </span>
        {/* Chevron */}
        <svg
          className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0A89E] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>

        {/* Dropdown list */}
        {open && (
          <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-[#E8E0D8] rounded-xl shadow-xl z-50 overflow-hidden">
            {options.map((o) => (
              <div
                key={o}
                className={`px-4 py-2.5 text-sm cursor-pointer transition-colors duration-150 ${
                  value === o
                    ? "bg-[#F05A28] text-white font-semibold"
                    : "text-[#1A1A1A] hover:bg-[#FFF5F1] hover:text-[#F05A28]"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange({ target: { name, value: o } });
                  setOpen(false);
                  setFocused("");
                }}
              >
                {o}
              </div>
            ))}
          </div>
        )}
      </div>
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

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    college: "", course: "", year: "",
  });
  const [focused, setFocused] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
  // validation
  if (!form.name || !form.email || !form.phone || !form.college || !form.course || !form.year) {
    alert("Please fill all fields");
    return;
  }

  try {
    setLoading(true);

    // 1. Save to Google Sheet
    await fetch("https://sheetdb.io/api/v1/ofzrmd3v2hvx3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          college: form.college,
          course: form.course,
          year: form.year,
          created_at: new Date().toISOString(),
        },
      }),
    });

    //show message
    toast.success("Registration successful!");

    // 2. WhatsApp message
    const message = `Hi, I want to enroll.
      Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Course: ${form.course}
Year: ${form.year}

I have completed the registration form. Please share payment details.`;

    // 3. Open WhatsApp
    const url = `https://wa.me/917570082706?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
};

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const courseOptions = ["Summer Training", "Winter Training", "Apprenticeship",];
  const yearOptions = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduated"];

  return (
    <div className="min-h-screen bg-[#F5F0EB] font-sans">
      <Header />
      {/* ── Hero strip ── */}
      <div className="bg-gradient-to-r from-[#F05A28] to-[#FF8C5A] py-5 px-4 text-center">
        <p className="text-white font-black text-sm sm:text-base tracking-wide">
          🚀 Register Now — Limited Seats Available for 2026 Batch
        </p>
      </div>

      <div className="px-4 sm:px-6 py-10 sm:py-14 flex justify-center">
        <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-xl border border-[#E8E0D8] bg-white">
        
          <div className="flex flex-col md:grid md:grid-cols-[1fr_1.4fr]">

            {/* ── Left Info Panel ── */}
            <div className="p-6 sm:p-10 bg-[#F5F0EB] md:border-r md:border-b-0 border-b border-[#E8E0D8] flex flex-col justify-between">
              <div>
                {/* Logo */}
<div className="flex items-center gap-3 mb-6 sm:mb-8">
  
  {/* Logo Image */}
  <div className="w-20 h-12 relative flex-shrink-0">
    <Image
      src="/logo1.png"
      alt="ZeroTwoCode Logo"
      width={100}
      height={60}
      className="object-contain"
    />
  </div>

  {/* Text */}
  <div>
    <p className="font-black text-sm tracking-widest uppercase text-[#1A1A1A]">
      zerotocode
    </p>
    <p className="text-xs text-[#4A4A4A]">
      Technologies Pvt Ltd
    </p>
  </div>

</div>

                <h2 className="text-xl sm:text-2xl font-black leading-snug text-[#1A1A1A] mb-2">
                  Start Your Journey<br />
                  <span className="text-[#F05A28]">Today 🚀</span>
                </h2>
                <div className="w-10 h-1 rounded-full bg-[#F05A28] mb-5" />

                <p className="text-sm leading-relaxed text-[#4A4A4A] mb-6 sm:mb-8">
                  <strong className="text-[#1A1A1A]">zerotocode Technologies Pvt Ltd</strong> is an IT training and
                  software development company providing industrial training, internships, and workshops in PHP,
                  Python, MERN Stack, Java, and more.
                </p>

                {/* Stats — 2-col grid, always */}
                <div className="grid grid-cols-2 gap-3 mb-6 sm:mb-8">
                  {[
                    { num: "50+", label: "Students Trained" },
                    { num: "10+", label: "Live Projects" },
                    { num: "6+", label: "Technologies" },
                    { num: "95%", label: "Placement Rate" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white border border-[#E8E0D8] rounded-2xl p-3 sm:p-4">
                      <p className="text-lg sm:text-xl font-black text-[#F05A28]">{s.num}</p>
                      <p className="text-xs text-[#4A4A4A] mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {courseOptions.map((c) => (
                    <span key={c} className="text-xs px-3 py-1.5 rounded-full font-medium bg-[#FDDDD0] text-[#F05A28] border border-[#F0C4B0]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#E8E0D8]">
                <p className="text-xs uppercase tracking-widest font-semibold text-[#4A4A4A] mb-3">Contact Us</p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:everythinggaurav48@gmail.com"
                    className="flex items-center gap-2 text-xs text-[#4A4A4A] hover:text-[#F05A28] transition-colors break-all">
                    <span className="text-[#F05A28] flex-shrink-0">✉</span>
                     zerotwocode.official@gmail.com
                  </a>
                  <a href="tel:+916392361443"
                    className="flex items-center gap-2 text-xs text-[#4A4A4A] hover:text-[#F05A28] transition-colors">
                    <span className="text-[#F05A28] flex-shrink-0">📞</span>
                    +91 7570082706
                  </a>
                </div>
              </div>
            </div>

            {/* ── Right Form Panel ── */}
            <div className="p-6 sm:p-10 bg-white">
              <div className="mb-6 sm:mb-7">
                <h3 className="text-lg sm:text-xl font-black text-[#1A1A1A]">Registration Details</h3>
                <div className="w-8 h-1 rounded-full bg-[#F05A28] mt-2" />
              </div>

              <div className="space-y-4 sm:space-y-5">
                <Field label="Name" name="name" type="text" value={form.name} onChange={handleChange} focused={focused} setFocused={setFocused} placeholder="Your full name" />
                <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} focused={focused} setFocused={setFocused} placeholder="you@example.com" />

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#1A1A1A]">
                    Phone <span className="text-[#F05A28]">*</span>
                  </label>
                  <div className={`flex rounded-xl overflow-hidden border-[1.5px] transition-all duration-200 ${focused === "phone" ? "border-[#F05A28] ring-2 ring-[#F05A28]/10" : "border-[#E8E0D8]"}`}>
                    <div className="bg-[#F5F0EB] border-r border-[#E8E0D8] px-3 sm:px-4 flex items-center text-xs font-bold text-[#4A4A4A] whitespace-nowrap flex-shrink-0">
                      IN +91
                    </div>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused("")}
                      placeholder="7570082706"
                      className="flex-1 min-w-0 px-3 sm:px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#B0A89E] outline-none bg-white"
                    />
                  </div>
                </div>

                <Field label="College Name" name="college" type="text" value={form.college} onChange={handleChange} focused={focused} setFocused={setFocused} placeholder="Your college / university" />

                {/* Course + Year — stack on very small, side-by-side on sm+ */}
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4">
                  <CustomSelect label="Course" name="course" value={form.course} onChange={handleChange} options={courseOptions} focused={focused} setFocused={setFocused} />
                  <CustomSelect label="Year" name="year" value={form.year} onChange={handleChange} options={yearOptions} focused={focused} setFocused={setFocused} />
                </div>

              

                {/* T&C */}
                <p className="text-xs leading-relaxed text-[#4A4A4A]">
  By registering, you agree to share your details with{" "}
  <strong className="text-[#1A1A1A]">ZeroTwoCode</strong>. We will only use your information to guide you through enrollment and will not share it with third parties.
</p>

                <button
                 type="button"
                 onClick={handleSubmit}
  disabled={loading}
  className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-black text-white bg-[#F05A28] hover:bg-[#E04818] shadow-lg shadow-[#F05A28]/30 hover:shadow-[#F05A28]/50 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
>
  {loading ? "Processing..." : " Register Now"}
  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer/>


    </div>
  );
}