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
    title: "Foundation & Web Technologies",
    items: [
      "HTML5, CSS3, JavaScript, jQuery, Bootstrap",
      "Database: MySQL / MSSQL / MongoDB",
      "Version Control: Git & GitHub",
    ],
  },
  {
    title: "Core Technology Sessions",
    items: [
      "MERN Stack (MongoDB, Express.js, React.js, Node.js) || Python with Django",
      ".NET MVC (C# Programming, ADO.NET, MSSQL) || Java Full Stack (Java, Spring Boot, Hibernate, Oracle)",
      "Android App Development || Flutter || AI & Machine Learning",
    ],
  },
  {
    title: "Project Sessions",
    items: ["Multiple Minor Projects, One Major Live Project with a minimum of 20 modules"],
  },
  {
    title: "Professional & Extra Activities",
    items: [
      "Personality Development, HR Skill Sessions, Resume Building, Freelancing, AI/ML and IoT Special Classes, Graphic Designing, Digital Marketing, Mock Interviews",
    ],
  },
  {
    title: "Project Hosting & Certification",
    items: [
      "Receive a live project URL valid for 1 year to showcase your work. Earn a certificate of apprenticeship completion recognized by industry experts.",
    ],
  },
  {
    title: "Farewell & Award Ceremony",
    items: [
      "Celebrate achievements with awards for Star Performer, Best Trainee, Outstanding Contribution, and Scholarship recognition.",
    ],
  },
];

const alsoAvailable = [
  "Summer Training for CS/It",
  "Winter Training for CS/IT",
  "Vocational Training for CS/IT",
  "Apprenticeship Program for CS/IT"
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
      "Cloud Computing",
    ],
  },
  "BCA (Bachelor of Computer Applications)",
  "MCA (Master of Computer Applications)",
];

// ── Navbar ──
function Navbar({ onEnquiry }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-[#EEEBE4] border-b border-[#DDD8CF] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-[#F05A28] flex items-center justify-center text-white font-black text-sm flex-shrink-0">Z</div>
          <span className="font-black text-[#1C1C1C] text-lg tracking-tight">zerotwocode</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#5A5A5A]">
          {["Home", "Training", "Services", "Projects", "Blog", "Career", "Contact"].map((n) => (
            <a key={n} href="#" className="hover:text-[#F05A28] transition-colors duration-200">{n}</a>
          ))}
        </div>

        <button
          onClick={onEnquiry}
          className="hidden md:inline-flex px-5 py-2 rounded-full bg-[#F05A28] text-white text-sm font-bold hover:bg-[#D94E20] transition-colors duration-200 shadow-md shadow-[#F05A28]/20"
        >
          Enroll Now
        </button>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#DDD8CF]/50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-[#1C1C1C] mb-1.5 transition-all duration-200"
            style={{ transform: menuOpen ? "rotate(45deg) translate(2px, 6px)" : "" }} />
          <div className="w-5 h-0.5 bg-[#1C1C1C] mb-1.5 transition-all duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }} />
          <div className="w-5 h-0.5 bg-[#1C1C1C] transition-all duration-200"
            style={{ transform: menuOpen ? "rotate(-45deg) translate(2px, -6px)" : "" }} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#EEEBE4] border-t border-[#DDD8CF] px-4 py-4 space-y-1">
          {["Home", "Training", "Services", "Projects", "Blog", "Career", "Contact"].map((n) => (
            <a key={n} href="#" onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-[#5A5A5A] hover:text-[#F05A28] py-2 border-b border-[#DDD8CF]/50 last:border-0">
              {n}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); onEnquiry(); }}
            className="w-full mt-3 py-3 rounded-xl bg-[#F05A28] text-white font-bold text-sm"
          >
            Enroll Now
          </button>
        </div>
      )}
    </nav>
  );
}

export default function ApprenticeshipPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [focused, setFocused] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-[#EEEBE4] font-sans">

      <Header/>


      {/* ── Hero Section (matches Winter Training style) ── */}
      <div className="bg-[#EEEBE4] px-4 sm:px-8 lg:px-10 py-10 sm:py-14 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">

          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-[#F05A28]/10 text-[#F05A28] text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              🎓 Apprenticeship Program 2025
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1C1C] leading-tight mb-4">
              CS &amp; IT<br />
              <span className="text-[#F05A28]">Apprenticeship</span>
            </h1>
            <p className="text-sm sm:text-base text-[#5A5A5A] leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              A 6-month industry-level apprenticeship for B.Tech, MCA, BCA & Diploma students.
              Build real projects, gain expert mentorship, and launch your IT career.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
              {[
                { value: "50+", label: "Students Trained" },
                { value: "6 Months", label: "Program Duration" },
              ].map((s) => (
                <div key={s.label} className="bg-white border border-[#DDD8CF] rounded-xl px-4 py-2.5 text-center shadow-sm">
                  <p className="font-black text-[#1C1C1C] text-sm">{s.value}</p>
                  <p className="text-xs text-[#5A5A5A]">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={() => {
                  const message = "Hi, I want to enroll in your course";
                  const url = `https://wa.me/918381978806?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                }}
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

          {/* Right — Desktop Hero Image */}
          <div className="hidden lg:block relative flex-shrink-0 w-[480px]">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#F05A28]/15 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80"
                alt="Apprenticeship Training CS IT at zerotwocode"
                className="w-full h-[360px] object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#1C1C1C]/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div>
                  <p className="text-white font-black text-base">Apprenticeship Program 2025</p>
                  <p className="text-white/70 text-xs">CS & IT — 6 Months Hands-on</p>
                </div>
                <div className="bg-[#F05A28] text-white text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0">
                  Enrolling Now
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            

          </div>

          {/* Mobile hero image */}
          <div className="lg:hidden w-full rounded-2xl overflow-hidden border border-[#DDD8CF] shadow-md relative">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80"
              alt="Apprenticeship Training CS IT at zerotwocode"
              className="w-full h-48 sm:h-64 object-cover object-center"
            />
            <div className="absolute bottom-3 left-3 bg-[#1C1C1C]/80 text-white text-xs font-semibold px-3 py-1.5 rounded-lg backdrop-blur-sm">
              Apprenticeship Training for CS
            </div>
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
                onClick={() => {
                  const message = "Hi, I want to enroll in your course";
                  const url = `https://wa.me/918381978806?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                }}
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
                CS &amp; IT Apprenticeship Program – 6 Months
              </h2>
              <div className="w-8 h-1 rounded-full bg-[#F05A28] mb-5" />

              <h3 className="font-bold text-[#1C1C1C] mb-2">About</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                zerotwocode's <strong className="text-[#1C1C1C]">6-month CS &amp; IT Apprenticeship Program in Lucknow</strong> is
                a comprehensive, career-focused training designed for{" "}
                <strong className="text-[#1C1C1C]">B.Tech, MCA, BCA, and Diploma students</strong>. This program combines
                practical learning, real-world projects, and industry mentorship to help participants develop{" "}
                <strong className="text-[#1C1C1C]">job-ready technical and professional skills</strong>. Recognized as the{" "}
                <strong className="text-[#1C1C1C]">best apprenticeship program for CS &amp; IT students in Lucknow</strong>,
                zerotwocode equips learners to excel in software development, web technologies, and IT careers.
              </p>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-6">
                During this apprenticeship, students gain hands-on experience with live projects, learn industry-standard
                tools, and receive mentorship from experienced professionals. By the end of the program, participants will be
                able to build full-fledged applications, showcase{" "}
                <strong className="text-[#1C1C1C]">industry-level projects</strong>, and confidently pursue careers in
                software development, web development, and related IT fields.
              </p>

              <h3 className="font-bold text-[#1C1C1C] mb-2">Program Duration &amp; Timing</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-6">
                zerotwocode's <strong className="text-[#1C1C1C]">6-Month CS &amp; IT Apprenticeship Program</strong> starts in{" "}
                <strong className="text-[#1C1C1C]">July and runs for 6 months</strong>. The program schedule is flexible,
                designed to align with college exams and academic commitments, making it convenient for{" "}
                <strong className="text-[#1C1C1C]">B.Tech, MCA, BCA, and Diploma students</strong>. Our apprenticeship
                program ensures comprehensive exposure to technical skills, soft skills, and industry practices for career
                readiness.
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
                <span className="text-sm text-[#5A5A5A]">(3000+ reviews on Google)</span>
              </div>
            </div>

            {/* Syllabus Card */}
            <div className="bg-white rounded-2xl border border-[#DDD8CF] p-5 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-black text-[#1C1C1C] mb-1">
                Apprenticeship Training Syllabus for CS and IT
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
                Apply online through the zerotwocode website or visit the campus to register for the{" "}
                <strong className="text-[#1C1C1C]">CS &amp; IT Apprenticeship Program</strong>. Limited seats available —
                enroll now to secure your career advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const message = "Hi, I want to enroll in your course";
                    const url = `https://wa.me/918381978806?text=${encodeURIComponent(message)}`;
                    window.open(url, "_blank");
                  }}
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

            {/* Who Can Join */}
            <div className="bg-white rounded-2xl border border-[#DDD8CF] p-5 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-black text-[#1C1C1C] mb-1">Who can Join?</h2>
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
                      <ol className="mt-1.5 ml-4 sm:ml-6 space-y-1 list-decimal list-inside">
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
            <div className="bg-white rounded-2xl border border-[#DDD8CF] p-5 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-black text-[#1C1C1C] mb-1">Fee Structure</h2>
              <div className="w-8 h-1 rounded-full bg-[#F05A28] mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Apprenticeship Program", price: "₹15,000", duration: "6 Months" },
                  // { label: "6 Month Program", price: "₹30,000", duration: "6 Months", highlight: true },
                  // { label: "1 Year Program", price: "₹50,000", duration: "12 Months" },
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
                  { icon: "🏆", title: "Industry Recognized", desc: "Apprenticeship certificate accepted by top IT companies across India." },
                  { icon: "👨‍💻", title: "Expert Mentors", desc: "Learn from professionals with 5+ years of real-world industry experience." },
                  { icon: "🚀", title: "Live Projects", desc: "Work on actual client projects — not just dummy assignments." },
                  { icon: "📍", title: "Placement Support", desc: "Dedicated HR team to help you land your first IT job post-program." },
                  { icon: "💻", title: "Modern Tech Stack", desc: "Curriculum updated every year to match current industry demand." },
                  { icon: "🎓", title: "Flexible Batches", desc: "Morning, evening & weekend batches to fit your college schedule." },
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
          <div className="w-full lg:w-[300px] lg:flex-shrink-0">
            <div className="lg:sticky lg:top-[72px] space-y-5">

              {/* Price + Enroll Card */}
              <div className="bg-white rounded-2xl border border-[#DDD8CF] p-5 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-2xl font-black text-green-500">15000/-</h3>
                  <span className="text-xs text-[#5A5A5A] bg-[#EEEBE4] border border-[#DDD8CF] rounded-full px-3 py-1 whitespace-nowrap flex-shrink-0 ml-2">
                    Limited Seats
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button
                    onClick={() => {
                      const message = "Hi, I want to enroll in your course";
                      const url = `https://wa.me/918381978806?text=${encodeURIComponent(message)}`;
                      window.open(url, "_blank");
                    }}
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
                  onClick={() => {
                    const message = "Hi, I want to enroll in your course";
                    const url = `https://wa.me/918381978806?text=${encodeURIComponent(message)}`;
                    window.open(url, "_blank");
                  }}
                  className="w-full py-3 rounded-xl bg-[#F05A28] text-white font-black text-sm hover:bg-[#D94E20] transition-colors shadow-lg shadow-[#F05A28]/25"
                >
                  Enroll Now
                </button>
              </div>

              {/* Additional Benefits */}
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
                      <p className="text-[#5A5A5A] break-all"> zerotwocode.official@gmail.com</p>
                      {/* <p className="text-[#5A5A5A] break-all">hr@zerotwocode.in</p> */}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#F05A28] text-base mt-0.5 flex-shrink-0">📍</span>
                    <div>
                      <p className="font-semibold text-[#1C1C1C]">Address</p>
                      {/* <p className="text-[#5A5A5A]">Plot no 43 Vikas Nagar Sector</p> */}
                      <p className="text-[#5A5A5A]"> Lucknow 226022</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#F05A28] text-base mt-0.5 flex-shrink-0">📞</span>
                    <div>
                      <p className="font-semibold text-[#1C1C1C]">Phone</p>
                      <p className="text-[#5A5A5A]">+91-7570082706</p>
                      <p className="text-[#5A5A5A]">916299349073</p>
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

              {/* Popular Languages */}
              <div className="bg-white rounded-2xl border border-[#DDD8CF] p-5 sm:p-6 shadow-sm">
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
            <Footer/>
      
    </div>
  );
}