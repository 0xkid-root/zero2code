import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const categories = [
  {
    id: 1, slug: "summer-training",title: "Summer Training", tag: "45-60 Days", price: "₹3,000", featured: false,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM4.22 4.22a1 1 0 011.42 0l1.42 1.42a1 1 0 01-1.42 1.42L4.22 5.64a1 1 0 010-1.42zm13.72 13.72a1 1 0 011.42 0l.36.35a1 1 0 01-1.42 1.42l-.36-.35a1 1 0 010-1.42zM2 12a1 1 0 011-1h2a1 1 0 010 2H3a1 1 0 01-1-1zm16 0a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1zM5.64 18.36a1 1 0 010-1.42l1.42-1.42a1 1 0 011.42 1.42l-1.42 1.42a1 1 0 01-1.42 0zM16.95 7.05a1 1 0 010-1.42l1.41-1.41a1 1 0 011.42 1.41l-1.41 1.42a1 1 0 01-1.42 0zM12 7a5 5 0 100 10A5 5 0 0012 7z"/></svg>,
    desc: "Make your summer count — dive into live projects, sharpen your tech skills and walk out job-ready before your peers even start.",
  },
  {
    id: 2,slug: "vocational-training", title: "Vocational Training", tag: "45-60 Days", price: "₹3,000", featured: true,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>,
    desc: "Skip the theory overload — this program puts you straight into skill-based tasks that employers actually look for on day one.",
  },
  {
    id: 3, slug: "winter-training",title: "Winter Training", tag: "45 Days", price: "₹3,000", featured: false,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>,
    desc: "Turn your winter break into a career boost — intensive sessions, project builds and industry exposure packed into 45 focused days.",
  },
  {
    id: 4, slug: "apprenticeship", title: "Apprenticeship", tag: "6 Months", price: "₹25,000", featured: false,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20 6h-2.18c.07-.44.18-.87.18-1.33C18 2.54 15.6 1 13 1c-1.6 0-3.05.54-4.12 1.44A4.97 4.97 0 006 6H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.63 0 3 .89 3 2s-1.37 2-3 2-3-.89-3-2 1.37-2 3-2zm0 12l-4-4h2.5V9h3v4H17l-4 4z"/></svg>,
    desc: "6 months working shoulder-to-shoulder with senior professionals — the closest thing to a real job before you actually get one.",
  },
  {
    id: 5, title: "Syllabus Training", tag: "30 Days", price: "₹3,000", featured: false,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>,
    desc: "We map your college syllabus to real-world applications so every topic you study actually clicks — and stays with you long after the exam.",
  },
  {
    id: 6, title: "PD & Skill Development", tag: "30 Days", price: "₹3,000", featured: false,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>,
    desc: "Technical skills get you interviews — personality gets you offers. Build the confidence, communication and presence that makes you stand out.",
  },
];

/* ── 3-D tilt card ── */
function TiltCard({ cat, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt]       = useState({ x: 0, y: 0 });
  const [spot, setSpot]       = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  /* staggered entrance */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 120);
    return () => clearTimeout(t);
  }, [index]);

  const onMove = (e) => {
    const el   = cardRef.current;
    const rect = el.getBoundingClientRect();
    const cx   = e.clientX - rect.left;
    const cy   = e.clientY - rect.top;
    const rx   = ((cy / rect.height) - 0.5) * 18;
    const ry   = ((cx / rect.width)  - 0.5) * -18;
    const sx   = (cx / rect.width)  * 100;
    const sy   = (cy / rect.height) * 100;
    setTilt({ x: rx, y: ry });
    setSpot({ x: sx, y: sy });
  };

  const onLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      className={`
        relative bg-white rounded-3xl p-7 border-2 cursor-pointer overflow-hidden select-none
        ${cat.featured ? "border-orange-500" : "border-stone-100"}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{
        transition: visible
          ? "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, border-color 0.3s ease"
          : "none",
        transform: visible
          ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${hovered ? -10 : 0}px) scale(${hovered ? 1.02 : 1})`
          : "translateY(32px)",
        boxShadow: hovered
          ? `0 30px 60px rgba(232,73,15,0.18), 0 6px 20px rgba(0,0,0,0.08)`
          : cat.featured
            ? "0 0 0 2px #E8490F, 0 12px 40px rgba(232,73,15,0.15)"
            : "0 2px 12px rgba(0,0,0,0.05)",
        willChange: "transform",
      }}
    >
      {/* ── spotlight ── */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle 180px at ${spot.x}% ${spot.y}%, rgba(232,73,15,0.10) 0%, transparent 70%)`,
        }}
      />

      {/* ── shimmer border on hover ── */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          background: `conic-gradient(from 0deg at ${spot.x}% ${spot.y}%, transparent 0deg, rgba(232,73,15,0.25) 60deg, transparent 120deg)`,
        }}
      />

      {/* ── popular badge ── */}
      {cat.featured && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-orange-500 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md shadow-orange-200">
            ⭐ Most Popular
          </span>
        </div>
      )}

      {/* ── content ── */}
      <div className={`relative z-10 ${cat.featured ? "mt-7" : ""}`}>

        {/* icon + badge row */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-200"
            style={{
              transform: hovered ? "scale(1.15) rotate(-8deg)" : "scale(1) rotate(0deg)",
              transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {cat.icon}
          </div>
          <span className="bg-stone-100 text-stone-500 text-xs font-semibold rounded-full px-3 py-1.5 border border-stone-200">
            {cat.tag}
          </span>
        </div>

        {/* title */}
        <h3
          className="text-lg font-bold text-stone-900 mb-2 leading-snug"
          style={{
            transform: hovered ? "translateZ(20px)" : "translateZ(0)",
            transition: "transform 0.3s ease",
          }}
        >
          {cat.title}
        </h3>

        {/* desc */}
        <p className="text-sm text-stone-400 leading-relaxed mb-6">{cat.desc}</p>

        {/* price + button */}
        <div className="flex items-center justify-between">
          <span
            className="text-2xl font-extrabold"
            style={{
              color: hovered ? "#E8490F" : "#1c1917",
              transition: "color 0.25s ease",
            }}
          >
            {cat.price}
          </span>
          <Link href={`/training/${cat.slug}`}>

          <button
            className="text-sm font-semibold rounded-full px-5 py-2 border-2 transition-all duration-250"
            style={{
              background:     hovered ? "#E8490F" : "transparent",
              color:          hovered ? "#fff"    : "#57534e",
              borderColor:    hovered ? "#E8490F" : "#e7e5e4",
              transform:      hovered ? "scale(1.06)" : "scale(1)",
            }}
          >
            Know More
          </button>
          </Link>
        </div>
      </div>

      {/* ── featured bottom bar ── */}
      {cat.featured && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 rounded-b-3xl" />
      )}
    </div>
  );
}

/* ── floating particle ── */
function Particle({ delay, size, left, duration }) {
  return (
    <div
      className="absolute rounded-full bg-orange-400 pointer-events-none"
      style={{
        width: size, height: size,
        left: `${left}%`,
        bottom: "-10px",
        opacity: 0.25,
        animation: `floatUp ${duration}s ${delay}s ease-in-out infinite`,
      }}
    />
  );
}

export default function TrainingCategories() {
  // const [counted, setCounted] = useState({ students: 0, projects: 0, rating: 0 });
  const sectionRef = useRef(null);
  const ranRef     = useRef(false);

  /* count-up on scroll into view */
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !ranRef.current) {
        ranRef.current = true;
        const targets = { students: 50000, projects: 1200, rating: 98 };
        const steps   = 60;
        let step = 0;
        const iv = setInterval(() => {
          step++;
          const p = step / steps;
          const ease = 1 - Math.pow(1 - p, 3);
          // setCounted({
          //   students: Math.round(targets.students * ease),
          //   projects: Math.round(targets.projects * ease),
          //   rating:   Math.round(targets.rating   * ease),
          // });
          if (step >= steps) clearInterval(iv);
        }, 25);
      }
    }, { threshold: 0.2 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const particles = [
    { delay: 0,   size: 6,  left: 10, duration: 8  },
    { delay: 2,   size: 4,  left: 25, duration: 10 },
    { delay: 1,   size: 8,  left: 40, duration: 7  },
    { delay: 3,   size: 5,  left: 60, duration: 9  },
    { delay: 0.5, size: 4,  left: 75, duration: 11 },
    { delay: 2.5, size: 7,  left: 88, duration: 8  },
  ];

  return (
    <section ref={sectionRef} className="bg-[#F0EBE3] py-20 px-5 font-[Sora,sans-serif] overflow-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');

        @keyframes floatUp {
          0%   { transform:translateY(0)   scale(1);   opacity:0.25; }
          50%  { transform:translateY(-80px) scale(1.2); opacity:0.4;  }
          100% { transform:translateY(-160px) scale(0.8); opacity:0;  }
        }
        @keyframes headSlide {
          from { opacity:0; transform:translateY(30px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes statPop {
          0%   { transform:scale(0.8); opacity:0; }
          70%  { transform:scale(1.06); }
          100% { transform:scale(1);   opacity:1; }
        }
        @keyframes orbPulse {
          0%,100% { transform:scale(1);   opacity:0.18; }
          50%     { transform:scale(1.15); opacity:0.28; }
        }
        @keyframes badgePulse {
          0%,100% { box-shadow:0 0 0 0 rgba(232,73,15,0.4); }
          50%     { box-shadow:0 0 0 8px rgba(232,73,15,0);  }
        }

        .anim-head  { animation:headSlide 0.7s 0.1s ease-out both; }
        .anim-sub   { animation:headSlide 0.7s 0.25s ease-out both; }
        .anim-stats { animation:headSlide 0.7s 0.4s ease-out both; }
        .stat-item  { animation:statPop 0.5s ease-out both; }
        .stat-item:nth-child(1){ animation-delay:0.5s }
        .stat-item:nth-child(2){ animation-delay:0.65s }
        .stat-item:nth-child(3){ animation-delay:0.8s }
        .orb        { animation:orbPulse 4s ease-in-out infinite; }
        .badge-pulse{ animation:badgePulse 2s ease-in-out infinite; }
      `}</style>

      {/* ── background orbs ── */}
      <div className="orb absolute -top-24 -left-24 w-80 h-80 bg-orange-400 rounded-full blur-3xl pointer-events-none" />
      <div className="orb absolute -bottom-24 -right-24 w-96 h-96 bg-orange-300 rounded-full blur-3xl pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* ── floating particles ── */}
      {particles.map((p, i) => <Particle key={i} {...p} />)}

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── HEADER ── */}
        <div className="text-center mb-14">
          <div className="badge-pulse inline-flex items-center gap-2 bg-white/90 border border-stone-200 rounded-full px-4 py-2 mb-6 shadow-sm anim-head">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-stone-600">Explore Our Programs</span>
          </div>

          <h2 className="anim-head text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight mb-4">
            Pick a Program That{" "}
            <span className="text-orange-500 relative">
              Builds Your Future
              {/* underline squiggle */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 10" fill="none">
                <path d="M0 7 Q37 1 75 7 Q112 13 150 7 Q187 1 225 7 Q262 13 300 7" stroke="#E8490F" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5"/>
              </svg>
            </span>
          </h2>

          <p className="anim-sub text-stone-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-10">
            From summer immersions to long-term apprenticeships — every program is built
            to give you real skills, real experience and a real career head-start.
          </p>

          {/* ── STATS strip ── */}
          {/* <div className="anim-stats flex flex-wrap items-center justify-center gap-8 mb-10">
            {[
              { val: `${counted.students.toLocaleString()}+`, label: "Students Enrolled" },
              { val: `${counted.projects}+`,                  label: "Live Projects" },
              { val: `${counted.rating}%`,                    label: "Placement Rate" },
            ].map((s, i) => (
              <div key={i} className="stat-item text-center">
                <div className="text-3xl font-extrabold text-orange-500">{s.val}</div>
                <div className="text-xs text-stone-400 font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        {/* ── CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <TiltCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="mt-14 relative overflow-hidden bg-stone-900 rounded-3xl px-10 py-10 flex flex-wrap items-center justify-between gap-6">
          <div className="absolute -top-12 -right-12 w-56 h-56 bg-orange-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-orange-500/10 rounded-full blur-2xl" />
          <div className="relative z-10">
            <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2">Limited Seats Available</p>
            <h3 className="text-2xl font-extrabold text-white mb-1">Still figuring out where to begin?</h3>
            <p className="text-sm text-stone-500 max-w-sm">Answer 3 quick questions and we'll recommend the program that fits your goals, timeline and budget perfectly.</p>
          </div>
          <button
            className="relative z-10 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-sm rounded-full px-9 py-4 flex items-center gap-2 shadow-xl transition-all duration-200"
            style={{ boxShadow: "0 8px 28px rgba(232,73,15,0.4)" }}
          >
            Find My Program
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}