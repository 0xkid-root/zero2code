"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState } from "react";

const benefits = [
  "4-5 Hour Daily Classes",
  "Study Material for Every Technology",
  "Full Lifetime Access",
  "1-Year CodeHelper Learning App Access",
  "1-Year Free Web Hosting",
  "Recovery Classes & Doubt Sessions",
  "Physical Project File Provided",
  "Live Mini & Major Projects",
  "HR Skills & PD Sessions",
  "Hostel & Room Assistance",
  "Certification & Performance Awards",
];

const syllabus = [
  {
    title: "Basic Session",
    items: [
      "HTML5, CSS3, JavaScript, jQuery, Bootstrap",
      "Database (MySQL / MSSQL / MongoDB)",
    ],
  },
  {
    title: "Technology Session",
    items: [
      "MERN Stack (MongoDB, Express JS, React JS, Node JS)",
      "Python With Django",
      ".NET MVC (C# Programming, ADO .NET, MSSQL)",
      "Java Full Stack (Java, Hibernate, Spring Boot, Oracle)",
      "Android with Java  ||  Flutter  ||  AI and ML",
    ],
  },
];

const alsoAvailable = [
 "Summer Training for CS/It",
  "Winter Training for CS/IT",
  "Vocational Training for CS/IT",
  "Apprenticeship Program for CS/IT"
];


export default function WinterTrainingPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [focused, setFocused] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-[#EEEBE4] font-sans">
      <Header />

      {/* ── Hero Section ── */}
      <div className="bg-[#EEEBE4] px-4 sm:px-8 lg:px-10 py-10 sm:py-14 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">

          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-[#F05A28]/10 text-[#F05A28] text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              ❄️ Winter Training 2025
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1C1C] leading-tight mb-4">
              Winter Training<br />
              <span className="text-[#F05A28]">for CS / IT</span>
            </h1>
            <p className="text-sm sm:text-base text-[#5A5A5A] leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              Hands-on, industry-ready training for B.Tech, Diploma, BCA & MCA students.
              Work on live projects with expert mentors and jumpstart your IT career.
            </p>
            {/* Stats row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
              {[
                { value: "50,000+", label: "Students Trained" },
                { value: "4.9 ⭐", label: "Google Rating" },
                { value: "4–6 Weeks", label: "Program Duration" },
              ].map((s) => (
                <div key={s.label} className="bg-white border border-[#DDD8CF] rounded-xl px-4 py-2.5 text-center shadow-sm">
                  <p className="font-black text-[#1C1C1C] text-sm">{s.value}</p>
                  <p className="text-xs text-[#5A5A5A]">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={() => setEnquiryOpen(true)}
                className="px-6 py-3 rounded-xl bg-[#F05A28] text-white font-black text-sm hover:bg-[#D94E20] transition-colors shadow-lg shadow-[#F05A28]/25"
              >
                Enroll Now →
              </button>
              <a
                href="tel:+917007237006"
                className="px-6 py-3 rounded-xl border border-[#DDD8CF] text-[#1C1C1C] font-semibold text-sm hover:border-[#F05A28] hover:text-[#F05A28] transition-all text-center"
              >
                📞 Call Us
              </a>
            </div>
          </div>

          {/* Right — Hero Image (desktop only) */}
          <div className="hidden lg:block relative flex-shrink-0 w-[480px]">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#F05A28]/15 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80"
                alt="Winter Training CS IT Students at zerotwocode"
                className="w-full h-[360px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#1C1C1C]/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div>
                  <p className="text-white font-black text-base">Winter Training 2025</p>
                  <p className="text-white/70 text-xs">CS & IT — Hands-on Learning</p>
                </div>
                <div className="bg-[#F05A28] text-white text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0">
                  Enrolling Now
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -top-4 -left-6 bg-white rounded-2xl shadow-lg border border-[#DDD8CF] px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F5D5C8] flex items-center justify-center text-xl">🎓</div>
              <div>
                <p className="text-[#1C1C1C] font-black text-sm">50,000+</p>
                <p className="text-[#5A5A5A] text-xs">Students Trained</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg border border-[#DDD8CF] px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F5D5C8] flex items-center justify-center text-xl">⭐</div>
              <div>
                <p className="text-[#1C1C1C] font-black text-sm">4.9 Rating</p>
                <p className="text-[#5A5A5A] text-xs">2900+ Google Reviews</p>
              </div>
            </div>
          </div>

          {/* Mobile hero image */}
          <div className="lg:hidden w-full rounded-2xl overflow-hidden border border-[#DDD8CF] shadow-md">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80"
              alt="Winter Training CS IT Students at zerotwocode"
              className="w-full h-48 sm:h-64 object-cover"
            />
          </div>
        </div>
      </div>

      {/* ── Page Body: 2-col layout ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

          {/* ── LEFT: scrollable content ── */}
          <div className="w-full lg:flex-1 lg:min-w-0 space-y-5 sm:space-y-6">

            {/* Mobile quick-action strip */}
            <div className="flex gap-3 lg:hidden">
              <button
                onClick={() => setEnquiryOpen(true)}
                className="flex-1 py-3 rounded-xl bg-[#F05A28] text-white font-black text-sm shadow-lg shadow-[#F05A28]/25"
              >
                Enroll Now →
              </button>
              <a
                href="tel:+917007237006"
                className="flex-1 py-3 rounded-xl border border-[#DDD8CF] text-[#1C1C1C] font-semibold text-sm text-center"
              >
                📞 Call Us
              </a>
            </div>

            {/* About Card */}
            <div className="bg-white rounded-2xl border border-[#DDD8CF] p-5 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-black text-[#1C1C1C] mb-1">
                Winter Training for CS and IT Students
              </h2>
              <div className="w-8 h-1 rounded-full bg-[#F05A28] mb-5" />

              <h3 className="font-bold text-[#1C1C1C] mb-2">About</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                Winter Training in CS &amp; IT at <strong className="text-[#1C1C1C]">zerotwocode</strong> is a
                career-focused, hands-on learning program specially designed for B.Tech, Diploma, BCA, and MCA
                students. This program goes beyond theory, enabling learners to develop{" "}
                <strong className="text-[#1C1C1C]">industry-ready technical skills</strong> through practical
                exposure and real-world projects. Recognized as the{" "}
                <strong className="text-[#1C1C1C]">top company for Winter Training in CS &amp; IT</strong>,
                zerotwocode is trusted by thousands of students for its expert-led sessions and career-oriented
                training. If you are looking for the best company for Winter Training in Lucknow, zerotwocode
                is the right choice to kickstart your IT career.
              </p>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-6">
                Through intensive Winter Training in CS &amp; IT at zerotwocode, students gain hands-on experience
                with live projects and expert mentorship. By the end of the program, learners develop the
                confidence to handle real-time challenges, showcase industry-level projects during interviews,
                and prepare effectively for a successful IT career. Recognized as the{" "}
                <strong className="text-[#1C1C1C]">best company for Winter Training in Lucknow</strong>,
                zerotwocode ensures students build strong technical and professional skills.
              </p>

              <h3 className="font-bold text-[#1C1C1C] mb-2">Program Tenure &amp; Timing</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-6">
                zerotwocode's Winter Training Program in CS &amp; IT starts every year in November/December and
                continues for 4 to 6 weeks, wrapping up by January. The schedule is designed to align with
                college examinations and academic calendars, ensuring maximum convenience for B.Tech, Diploma,
                BCA, and MCA students.
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold text-[#1C1C1C]">4.9</span>
                <span className="text-sm text-[#5A5A5A]">(2900+ reviews on Google)</span>
              </div>
            </div>

            {/* Syllabus Card */}
            <div className="bg-white rounded-2xl border border-[#DDD8CF] p-5 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-black text-[#1C1C1C] mb-1">
                Winter Training Syllabus for CS and IT
              </h2>
              <div className="w-8 h-1 rounded-full bg-[#F05A28] mb-6" />
              <div className="space-y-5">
                {syllabus.map((s, idx) => (
                  <div key={s.title} className="flex gap-3 sm:gap-4">
                    <div className="flex flex-col items-center pt-1.5">
                      <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0" />
                      {idx < syllabus.length - 1 && (
                        <div className="w-0.5 bg-[#DDD8CF] flex-1 mt-1" />
                      )}
                    </div>
                    <div className="pb-4">
                      <h3 className="font-bold text-[#1C1C1C] mb-1.5 text-sm sm:text-base">{s.title}</h3>
                      {s.items.map((item) => (
                        <p key={item} className="text-sm text-[#5A5A5A] leading-relaxed mb-1">{item}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Join */}
            <div className="bg-white rounded-2xl border border-[#DDD8CF] p-5 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-black text-[#1C1C1C] mb-1">How to Join?</h2>
              <div className="w-8 h-1 rounded-full bg-[#F05A28] mb-4" />
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-5">
                Enrolling is simple! Students can apply online directly through our website or visit the
                zerotwocode campus to complete the registration process.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-[#F05A28] text-white text-sm font-bold hover:bg-[#D94E20] transition-colors shadow-md shadow-[#F05A28]/25 text-center"
                >
                  Apply Online →
                </button>
                <a
                  href="tel:+917007237006"
                  className="px-5 py-2.5 rounded-xl border border-[#DDD8CF] text-[#1C1C1C] text-sm font-semibold hover:border-[#F05A28] hover:text-[#F05A28] transition-all text-center"
                >
                  📞 Call Us
                </a>
              </div>
            </div>

            {/* Fee Cards */}
            <div className="bg-white rounded-2xl border border-[#DDD8CF] p-5 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-black text-[#1C1C1C] mb-1">Fee Structure</h2>
              <div className="w-8 h-1 rounded-full bg-[#F05A28] mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Basic Session", price: "₹4,999", duration: "4 Weeks" },
                  { label: "Technology Session", price: "₹7,999", duration: "6 Weeks", highlight: true },
                  { label: "Full Program", price: "₹10,999", duration: "8 Weeks" },
                ].map((f) => (
                  <div
                    key={f.label}
                    className={`rounded-xl border p-5 text-center transition-all ${
                      f.highlight
                        ? "bg-[#F05A28] border-[#F05A28] text-white shadow-lg shadow-[#F05A28]/25"
                        : "bg-[#EEEBE4] border-[#DDD8CF] text-[#1C1C1C]"
                    }`}
                  >
                    {f.highlight && (
                      <span className="inline-block bg-white text-[#F05A28] text-xs font-bold px-2 py-0.5 rounded-full mb-2">
                        Most Popular
                      </span>
                    )}
                    <p className={`text-sm font-semibold mb-1 ${f.highlight ? "text-white/80" : "text-[#5A5A5A]"}`}>
                      {f.label}
                    </p>
                    <p className="text-2xl font-black mb-1">{f.price}</p>
                    <p className={`text-xs ${f.highlight ? "text-white/70" : "text-[#5A5A5A]"}`}>{f.duration}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose zerotwocode */}
            <div className="bg-white rounded-2xl border border-[#DDD8CF] p-5 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-black text-[#1C1C1C] mb-1">Why Choose zerotwocode?</h2>
              <div className="w-8 h-1 rounded-full bg-[#F05A28] mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "🏆", title: "Industry Recognized", desc: "Certification accepted by top IT companies across India." },
                  { icon: "👨‍💻", title: "Expert Mentors", desc: "Learn from professionals with 5+ years of real-world experience." },
                  { icon: "🚀", title: "Live Projects", desc: "Work on actual client projects, not just dummy assignments." },
                  { icon: "📍", title: "Placement Support", desc: "Dedicated HR team to help you land your first IT job." },
                  { icon: "💻", title: "Modern Tech Stack", desc: "Curriculum updated every year to match current industry demand." },
                  { icon: "🎓", title: "Flexible Batches", desc: "Morning, evening & weekend batches to fit your schedule." },
                ].map((w) => (
                  <div key={w.title} className="flex gap-3 p-4 rounded-xl bg-[#EEEBE4] border border-[#DDD8CF]">
                    <span className="text-2xl flex-shrink-0">{w.icon}</span>
                    <div>
                      <p className="font-bold text-[#1C1C1C] text-sm mb-0.5">{w.title}</p>
                      <p className="text-xs text-[#5A5A5A] leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT: sticky sidebar ── */}
          <div className="w-full lg:w-[320px] lg:flex-shrink-0">
            <div className="lg:sticky lg:top-[72px] space-y-5">

              {/* Enroll Card */}
              <div className="bg-white rounded-2xl border border-[#DDD8CF] p-5 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-black text-green-500">Winter Training</h3>
                  <span className="text-xs text-[#5A5A5A] bg-[#EEEBE4] border border-[#DDD8CF] rounded-full px-3 py-1 flex-shrink-0 ml-2">
                    Limited Seats
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="flex items-center justify-center gap-1.5 border border-[#DDD8CF] rounded-xl py-2.5 text-sm font-semibold text-[#1C1C1C] hover:border-[#F05A28] hover:text-[#F05A28] transition-all"
                  >
                    + Enquiry
                  </button>
                  <a
                    href="tel:+917007237006"
                    className="flex items-center justify-center gap-1.5 border border-[#DDD8CF] rounded-xl py-2.5 text-sm font-semibold text-[#1C1C1C] hover:border-[#F05A28] hover:text-[#F05A28] transition-all"
                  >
                    📞 Call
                  </a>
                </div>
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="w-full py-3 rounded-xl bg-[#F05A28] text-white font-black text-sm hover:bg-[#D94E20] transition-colors shadow-lg shadow-[#F05A28]/25"
                >
                  Enroll Now
                </button>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl border border-[#DDD8CF] p-5 sm:p-6 shadow-sm">
                <h3 className="font-black text-[#1C1C1C] mb-4">Additional Benefits</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[#5A5A5A]">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 fill-[#F05A28]" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-2xl border border-[#DDD8CF] p-5 sm:p-6 shadow-sm">
                <h3 className="font-black text-[#1C1C1C] mb-4">Contact Details</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <span className="text-[#F05A28] text-base mt-0.5 flex-shrink-0">✉</span>
                    <div>
                      <p className="font-semibold text-[#1C1C1C]">Email</p>
                      <p className="text-[#5A5A5A] break-all">zerotwocode.official@gmail.com</p>
                      {/* <p className="text-[#5A5A5A] break-all">hr@zerotwocode.in</p> */}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#F05A28] text-base mt-0.5 flex-shrink-0">📍</span>
                    <div>
                      <p className="font-semibold text-[#1C1C1C]">Address</p>
                      {/* <p className="text-[#5A5A5A]">Plot no 43 Vikas Nagar Sector</p> */}
                      <p className="text-[#5A5A5A]">Lucknow 226022</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#F05A28] text-base mt-0.5 flex-shrink-0">📞</span>
                    <div>
                      <p className="font-semibold text-[#1C1C1C]">Phone</p>
                      <p className="text-[#5A5A5A]">+91-7570082706</p>
                      <p className="text-[#5A5A5A]">+91-8381978806</p>
                      <p className="text-[#5A5A5A]">+91-7390814759</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Also Available */}
              <div className="bg-white rounded-2xl border border-[#DDD8CF] p-5 sm:p-6 shadow-sm">
                <h3 className="font-black text-[#1C1C1C] mb-4">Also Available for</h3>
                <div className="flex flex-col gap-2">
                  {alsoAvailable.map((a) => (
                    <a
                      key={a}
                      href="#"
                      className="flex items-center justify-between bg-[#F05A28] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#D94E20] transition-colors"
                    >
                      <span className="truncate pr-2">{a}</span>
                      <span className="flex-shrink-0">→</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <Footer/>

      {/* ── Enquiry Modal ── */}
      {enquiryOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={() => setEnquiryOpen(false)}
        >
          <div
            className="bg-white rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 w-full sm:max-w-md shadow-2xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile drag handle */}
            <div className="w-10 h-1 bg-[#DDD8CF] rounded-full mx-auto mb-5 sm:hidden" />
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-black text-[#1C1C1C]">Enquire Now</h3>
                <div className="w-8 h-1 bg-[#F05A28] rounded-full mt-1.5" />
              </div>
              <button
                onClick={() => setEnquiryOpen(false)}
                className="text-[#5A5A5A] hover:text-[#F05A28] text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F5F2EE] transition-colors"
              >✕</button>
            </div>

            <div className="space-y-4">
              {[
                { label: "Full Name", name: "name", type: "text", placeholder: "Your full name" },
                { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
                { label: "Phone", name: "phone", type: "tel", placeholder: "+91 7570082706" },
              ].map((f) => (
                <div key={f.name} className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#1C1C1C]">
                    {f.label} <span className="text-[#F05A28]">*</span>
                  </label>
                  <input
                    name={f.name}
                    type={f.type}
                    value={form[f.name]}
                    onChange={handleChange}
                    onFocus={() => setFocused(f.name)}
                    onBlur={() => setFocused("")}
                    placeholder={f.placeholder}
                    className={`px-4 py-3 text-sm rounded-xl outline-none bg-white text-[#1C1C1C] placeholder-[#B0A89E] border-[1.5px] transition-all duration-200 ${
                      focused === f.name ? "border-[#F05A28] ring-2 ring-[#F05A28]/10" : "border-[#DDD8CF] hover:border-[#F0C4B0]"
                    }`}
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#1C1C1C]">Course <span className="text-[#F05A28]">*</span></label>
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  onFocus={() => setFocused("course")}
                  onBlur={() => setFocused("")}
                  className={`px-4 py-3 text-sm rounded-xl outline-none bg-white cursor-pointer appearance-none border-[1.5px] transition-all duration-200 ${
                    form.course ? "text-[#1C1C1C]" : "text-[#B0A89E]"
                  } ${focused === "course" ? "border-[#F05A28] ring-2 ring-[#F05A28]/10" : "border-[#DDD8CF] hover:border-[#F0C4B0]"}`}
                >
                  <option value="">-- Select Course --</option>
                  {["MERN Stack", "Python with Django", ".NET MVC", "Java Full Stack", "Android", "Flutter", "AI and ML"].map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#1C1C1C]">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                  placeholder="Any specific queries..."
                  rows={3}
                  className={`px-4 py-3 text-sm rounded-xl outline-none bg-white text-[#1C1C1C] placeholder-[#B0A89E] border-[1.5px] transition-all duration-200 resize-none ${
                    focused === "message" ? "border-[#F05A28] ring-2 ring-[#F05A28]/10" : "border-[#DDD8CF] hover:border-[#F0C4B0]"
                  }`}
                />
              </div>

              <button
                type="button"
                className="w-full py-3.5 rounded-xl bg-[#F05A28] text-white font-black text-sm hover:bg-[#D94E20] transition-colors duration-200 shadow-lg shadow-[#F05A28]/25"
              >
                Submit Enquiry →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}