"use client";
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
      "MERN Stack (MongoDB, Express JS, React JS, Node JS) || Python With Django",
      ".NET MVC (C# Programming, ADO .NET, MSSQL) || Java Full Stack (Java, Hibernate, Spring Boot, Oracle)",
      "Android with Java || Flutter || AI and ML",
    ],
  },
  {
    title: "Project Session",
    items: ["Multiple Minor Project, One Major Live Project With min. 20 Modules"],
  },
  {
    title: "Extra Activities",
    items: [
      "Gain professional edge with HR skills, Personality Development Sessions, Special Classes of AI/ML and IoT, Freelancing, Resume building",
      "Graphic Designing, Digital Marketing, Mock Interviews",
    ],
  },
  {
    title: "Project Submission & Hosting",
    items: ["Get a unique live project URL (active for 1 year) to showcase your work anytime."],
  },
  {
    title: "Farewell & Award Distribution",
    items: ["Celebrate success with Star Performer, Best Performer, Outstanding Trainee, and Scholarship."],
  },
];

const alsoAvailable = [
  "Summer Training for Electronics",
  "Summer Training for Electrical",
  "Summer Training for CS/IT",
  "Apprenticeship Program for CS/IT",
];

const popularLanguages = [
  { label: "HTML5", color: "bg-orange-100 text-orange-600" },
  { label: "CSS3", color: "bg-blue-100 text-blue-600" },
  { label: ".NET", color: "bg-purple-100 text-purple-600" },
  { label: "Flutter", color: "bg-cyan-100 text-cyan-600" },
  { label: "Python", color: "bg-yellow-100 text-yellow-600" },
  { label: "Node.js", color: "bg-green-100 text-green-600" },
];

const eligibility = [
  "Diploma in Computer Science (C.S.)",
  "Diploma in Information Technology (I.T.)",
  "B.Tech / B.E in CSE (Computer Science & Engineering)",
  "B.Tech / B.E in IT (Information Technology)",
  {
    label: "B.Tech in CSE with Specializations such as:",
    sub: [
      "Artificial Intelligence (AI)",
      "Machine Learning (ML)",
      "Data Science",
      "Internet of Things (IoT)",
      "Cybersecurity",
    ],
  },
];

export default function VocationalTrainingPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [focused, setFocused] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-[#EEEBE4] font-sans">

      {/* ── Navbar ── */}
      <nav className="bg-[#EEEBE4] border-b border-[#DDD8CF] px-8 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-[#F05A28] flex items-center justify-center text-white font-black text-sm">T</div>
          <span className="font-black text-[#1C1C1C] text-lg tracking-tight">Techpile</span>
        </div>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5A5A5A]">
          {["Home", "Training", "Services", "Projects", "Blog", "Career", "Contact"].map((n) => (
            <a key={n} href="#" className="hover:text-[#F05A28] transition-colors duration-200">{n}</a>
          ))}
        </div>
        <button
          onClick={() => setEnquiryOpen(true)}
          className="px-5 py-2 rounded-full bg-[#F05A28] text-white text-sm font-bold hover:bg-[#D94E20] transition-colors duration-200 shadow-md shadow-[#F05A28]/20"
        >
          Enroll Now
        </button>
      </nav>

      {/* ── Hero Banner ── */}
      <div className="relative overflow-hidden py-10 px-8 text-center bg-gradient-to-r from-[#F05A28] via-[#FF8C5A] to-[#C8E8F8]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F05A28]/80 to-[#C8E0F0]/60" />
        <div className="relative z-10">
          <p className="text-xs text-white/70 tracking-widest uppercase mb-1">
            Home → Vocational Training for CS/IT
          </p>
          <h1 className="text-4xl font-black text-white drop-shadow-md">Vocational Training for CS/IT</h1>
        </div>
      </div>

      {/* ── Main 2-col layout ── */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex gap-8 items-start">

          {/* ── LEFT CONTENT ── */}
          <div className="flex-1 min-w-0 space-y-6">

            {/* Hero Image — real classroom photo like screenshot */}
            <div className="rounded-2xl overflow-hidden border border-[#DDD8CF] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80"
                alt="Vocational Training CS IT Students at Techpile"
                className="w-full h-[340px] object-cover object-top"
              />
            </div>

            {/* About Card */}
            <div className="bg-white rounded-2xl border border-[#DDD8CF] p-8 shadow-sm">
              <h2 className="text-xl font-black text-[#1C1C1C] mb-1">
                Vocational Training for CS and IT Students
              </h2>
              <div className="w-8 h-1 rounded-full bg-[#F05A28] mb-5" />

              <h3 className="font-bold text-[#1C1C1C] mb-2">About</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                Vocational Training in CS &amp; IT at Techpile is a career-focused, hands-on learning program
                specially designed for B.Tech, Diploma, BCA, and MCA students. This program goes beyond theory,
                enabling learners to develop industry-ready technical skills through practical exposure and
                real-world projects. Recognized as the top company for Vocational Training in CS &amp; IT,
                Techpile is trusted by thousands of students for its expert-led sessions and career-oriented
                training. If you are looking for the best company for Vocational Training or the best company
                for Vocational Training in Lucknow, Techpile is the right choice to kickstart your IT career.
              </p>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-6">
                Through intensive Vocational Training in CS &amp; IT at Techpile, students gain hands-on
                experience with live projects and expert mentorship. This career-focused training helps
                participants apply core computer science and IT concepts in real-world scenarios. By the end
                of the program, learners develop the confidence to handle real-time challenges, showcase
                industry-level projects during interviews, and prepare effectively for a successful IT career.
                Recognized as the best company for Vocational Training in Lucknow, Techpile ensures students
                build strong technical and professional skills for their future!
              </p>

              <h3 className="font-bold text-[#1C1C1C] mb-2">Program Tenure &amp; Timing</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-6">
                Techpile's Vocational Training Program in CS &amp; IT starts every year in June/July and
                continues for 4 to 6 weeks, wrapping up by August/September. The schedule is designed to
                align with college examinations, academic calendars, and batch availability, ensuring maximum
                convenience for B.Tech, Diploma, BCA, and MCA students. Recognized as the best company for
                Vocational Training in Lucknow, Techpile provides a flexible, career-oriented learning
                experience that helps students build industry-ready skills within a short duration.
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold text-[#1C1C1C]">4.9</span>
                <span className="text-sm text-[#5A5A5A]">(2900+ reviews on Google)</span>
              </div>
            </div>

            {/* Syllabus Card */}
            <div className="bg-white rounded-2xl border border-[#DDD8CF] p-8 shadow-sm">
              <h2 className="text-xl font-black text-[#1C1C1C] mb-1">
                Vocational Training Syllabus for CS and IT
              </h2>
              <div className="w-8 h-1 rounded-full bg-[#F05A28] mb-6" />
              <div className="space-y-5">
                {syllabus.map((s, idx) => (
                  <div key={s.title} className="flex gap-4">
                    <div className="flex flex-col items-center pt-1.5">
                      <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0" />
                      {idx < syllabus.length - 1 && (
                        <div className="w-0.5 bg-[#DDD8CF] flex-1 mt-1" />
                      )}
                    </div>
                    <div className="pb-4">
                      <h3 className="font-bold text-[#1C1C1C] mb-1.5">{s.title}</h3>
                      {s.items.map((item) => (
                        <p key={item} className="text-sm text-[#5A5A5A] leading-relaxed mb-1">{item}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Tenure & How to Join — separate card like screenshot */}
            <div className="bg-white rounded-2xl border border-[#DDD8CF] p-8 shadow-sm">
              <h3 className="font-bold text-[#1C1C1C] mb-2">Program Tenure &amp; Timing</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-5">
                Techpile's Vocational Training Program in CS &amp; IT starts every year in June/July and
                continues for 4 to 6 weeks, wrapping up by August/September. The schedule is designed to
                align with college examinations, academic calendars, and batch availability, ensuring maximum
                convenience for B.Tech, Diploma, BCA, and MCA students. Recognized as the best company for
                Vocational Training in Lucknow, Techpile provides a flexible, career-oriented learning
                experience that helps students build industry-ready skills within a short duration.
              </p>

              <h3 className="font-bold text-[#1C1C1C] mb-2">How to Join?</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-5">
                Enrolling is simple! Students can apply online directly through our website or visit the
                Techpile campus to complete the registration process.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-[#F05A28] text-white text-sm font-bold hover:bg-[#D94E20] transition-colors duration-200 shadow-md shadow-[#F05A28]/25"
                >
                  Apply Online →
                </button>
                <a
                  href="tel:+917007237006"
                  className="px-5 py-2.5 rounded-xl border border-[#DDD8CF] text-[#1C1C1C] text-sm font-semibold hover:border-[#F05A28] hover:text-[#F05A28] transition-all duration-200"
                >
                  📞 Call Us
                </a>
              </div>
            </div>

            {/* Who Can Join */}
            <div className="bg-white rounded-2xl border border-[#DDD8CF] p-8 shadow-sm">
              <h2 className="text-xl font-black text-[#1C1C1C] mb-1">Who can Join?</h2>
              <div className="w-8 h-1 rounded-full bg-[#F05A28] mb-4" />
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                The program is open to students pursuing Diploma, Undergraduate, or Postgraduate degrees in
                Computer Science, Information Technology, or related domain.
              </p>
              <p className="font-semibold text-[#1C1C1C] text-sm mb-3">Available for:</p>
              <ol className="space-y-2 list-decimal list-inside text-sm text-[#5A5A5A]">
                {eligibility.map((e, i) =>
                  typeof e === "string" ? (
                    <li key={i}>{e}</li>
                  ) : (
                    <li key={i}>
                      {e.label}
                      <ol className="mt-1.5 ml-6 space-y-1 list-decimal list-inside">
                        {e.sub.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ol>
                    </li>
                  )
                )}
              </ol>
            </div>

            {/* Fee Structure */}
            <div className="bg-white rounded-2xl border border-[#DDD8CF] p-8 shadow-sm">
              <h2 className="text-xl font-black text-[#1C1C1C] mb-1">Fee Structure</h2>
              <div className="w-8 h-1 rounded-full bg-[#F05A28] mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Basic Session", price: "₹4,999", duration: "4 Weeks" },
                  { label: "Technology Session", price: "₹7,000", duration: "6 Weeks", highlight: true },
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
          </div>

          {/* ── RIGHT STICKY SIDEBAR ── */}
          <div className="w-[300px] flex-shrink-0">
            <div className="sticky top-[72px] space-y-5">

              {/* Enroll Card — matching screenshot exactly */}
              <div className="bg-white rounded-2xl border border-[#DDD8CF] p-6 shadow-sm">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-black text-green-500">Vocational Training</h3>
                  <span className="text-xs text-[#5A5A5A] bg-[#EEEBE4] border border-[#DDD8CF] rounded-full px-3 py-1 whitespace-nowrap">
                    Limited Seats
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="flex items-center justify-center gap-1.5 border border-[#DDD8CF] rounded-xl py-2.5 text-sm font-semibold text-[#1C1C1C] hover:border-[#F05A28] hover:text-[#F05A28] transition-all duration-200"
                  >
                    + Enquiry
                  </button>
                  <a
                    href="tel:+917007237006"
                    className="flex items-center justify-center gap-1.5 border border-[#DDD8CF] rounded-xl py-2.5 text-sm font-semibold text-[#1C1C1C] hover:border-[#F05A28] hover:text-[#F05A28] transition-all duration-200"
                  >
                    📞 Call
                  </a>
                </div>
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="w-full py-3 rounded-xl bg-[#F05A28] text-white font-black text-sm hover:bg-[#D94E20] transition-colors duration-200 shadow-lg shadow-[#F05A28]/25"
                >
                  Enroll Now
                </button>
              </div>

              {/* Additional Benefits */}
              <div className="bg-white rounded-2xl border border-[#DDD8CF] p-6 shadow-sm">
                <h3 className="font-black text-[#1C1C1C] mb-4">Additional Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-[#5A5A5A]">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 fill-[#F05A28]" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-2xl border border-[#DDD8CF] p-6 shadow-sm">
                <h3 className="font-black text-[#1C1C1C] mb-4">Contact Details</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <span className="text-[#F05A28] text-base mt-0.5 flex-shrink-0">✉</span>
                    <div>
                      <p className="font-semibold text-[#1C1C1C]">Email</p>
                      <p className="text-[#5A5A5A]">techpilelko@gmail.com</p>
                      <p className="text-[#5A5A5A]">hr@techpile.in</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#F05A28] text-base mt-0.5 flex-shrink-0">📍</span>
                    <div>
                      <p className="font-semibold text-[#1C1C1C]">Address</p>
                      <p className="text-[#5A5A5A]">Plot no 43 Vikas Nagar Secotor</p>
                      <p className="text-[#5A5A5A]">5 Ring Road Lucknow Pincode 226022</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#F05A28] text-base mt-0.5 flex-shrink-0">📞</span>
                    <div>
                      <p className="font-semibold text-[#1C1C1C]">Phone</p>
                      <p className="text-[#5A5A5A]">+91-7007237006</p>
                      <p className="text-[#5A5A5A]">9140444301 | 9120936936</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Also Available */}
              <div className="bg-white rounded-2xl border border-[#DDD8CF] p-6 shadow-sm">
                <h3 className="font-black text-[#1C1C1C] mb-4">Also Available for</h3>
                <div className="flex flex-col gap-2">
                  {alsoAvailable.map((a) => (
                    <a
                      key={a}
                      href="#"
                      className="flex items-center justify-between bg-[#F05A28] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#D94E20] transition-colors duration-200"
                    >
                      {a} <span>→</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Popular Languages */}
              <div className="bg-white rounded-2xl border border-[#DDD8CF] p-6 shadow-sm">
                <h3 className="font-black text-[#1C1C1C] mb-4">Popular Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {popularLanguages.map((l) => (
                    <span key={l.label} className={`text-xs font-bold px-3 py-1.5 rounded-lg ${l.color}`}>
                      {l.label}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="bg-[#1C1C1C] text-white py-10 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg bg-[#F05A28] flex items-center justify-center text-white font-black text-sm">T</div>
              <span className="font-black text-lg">Techpile</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Industry-ready IT training programs for B.Tech, Diploma, BCA, and MCA students in Lucknow.
            </p>
          </div>
          <div>
            <p className="font-bold mb-3 text-white/60 text-xs uppercase tracking-widest">Quick Links</p>
            <div className="grid grid-cols-2 gap-1.5 text-sm text-white/50">
              {["Home", "Training", "Services", "Projects", "Blog", "Career"].map((l) => (
                <a key={l} href="#" className="hover:text-[#F05A28] transition-colors duration-200">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold mb-3 text-white/60 text-xs uppercase tracking-widest">Contact</p>
            <div className="text-sm text-white/50 space-y-1.5">
              <p>techpilelko@gmail.com</p>
              <p>+91-7007237006</p>
              <p>Plot no 43 Vikas Nagar Sector, Lucknow</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-8 pt-5 text-center text-xs text-white/30">
          © 2025 Techpile Technology · All rights reserved
        </div>
      </footer>

      {/* ── Enquiry Modal ── */}
      {enquiryOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          onClick={() => setEnquiryOpen(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-black text-[#1C1C1C]">Enquire Now</h3>
                <div className="w-8 h-1 bg-[#F05A28] rounded-full mt-1.5" />
              </div>
              <button onClick={() => setEnquiryOpen(false)} className="text-[#5A5A5A] hover:text-[#F05A28] text-xl font-bold transition-colors">✕</button>
            </div>
            <div className="space-y-4">
              {[
                { label: "Full Name", name: "name", type: "text", placeholder: "Your full name" },
                { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
                { label: "Phone", name: "phone", type: "tel", placeholder: "+91 98765 43210" },
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