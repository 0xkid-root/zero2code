"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState, useEffect, useRef, ReactNode } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TEAM, STATS, VALUES, TIMELINE, TECHS } from "@/lib/about-data";

const NAV_LINKS: string[] = ["Home", "Training", "Services", "About", "Blog", "Contact"];


// Deterministic particles (no Math.random → no hydration mismatch)
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  size:     ((i * 7  + 3) % 6)  + 2,
  color:    i % 3 === 0 ? "#F05A28" : i % 3 === 1 ? "#FF8C5A" : "#ffffff",
  left:     ((i * 13 + 7) % 100),
  top:      ((i * 17 + 11) % 100),
  duration: ((i * 3  + 6) % 8)  + 6,
  delay:    ((i * 5) % 5),
}));

// ─────────────────────────────────────────
// Intersection-aware reveal wrapper
// ─────────────────────────────────────────

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

function Reveal({ children, delay = 0, direction = "up", className = "" }: RevealProps): JSX.Element {
  const ref  = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const from: Record<string, string> = {
    up:    "opacity-0 translate-y-8",
    left:  "opacity-0 -translate-x-8",
    right: "opacity-0 translate-x-8",
    none:  "opacity-0",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${vis ? "opacity-100 translate-x-0 translate-y-0" : from[direction]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ─────────────────────────────────────────
// Animated Counter
// ─────────────────────────────────────────

function Counter({ target, suffix }: { target: number; suffix: string }): JSX.Element {
  const [count, setCount]   = useState<number>(0);
  const ref                  = useRef<HTMLSpanElement>(null);
  const started              = useRef<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let cur = 0;
          const step = target / 60;
          const t = setInterval(() => {
            cur += step;
            if (cur >= target) { setCount(target); clearInterval(t); }
            else setCount(Math.floor(cur));
          }, 18);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}


// ─────────────────────────────────────────
// Page
// ─────────────────────────────────────────

export default function AboutPage(): JSX.Element {
  return (
    <>
      {/* ── Global Keyframes ── */}
      <style>{`
        @keyframes ztcFloat {
          0%,100% { transform:translateY(0) rotate(0deg); opacity:.18; }
          50%      { transform:translateY(-26px) rotate(180deg); opacity:.38; }
        }
        @keyframes ztcGradX {
          0%,100% { background-position:0% 50%; }
          50%      { background-position:100% 50%; }
        }
        @keyframes ztcShimmer {
          0%   { background-position:-200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes ztcPulseRing {
          0%   { transform:scale(1);   opacity:.5; }
          100% { transform:scale(2.4); opacity:0;  }
        }
        @keyframes ztcTickerL {
          0%   { transform:translateX(0); }
          100% { transform:translateX(-50%); }
        }
        @keyframes ztcSpin {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }
        .ztc-grad-text {
          background:linear-gradient(135deg,#F05A28,#FF8C5A,#F05A28);
          background-size:200% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:ztcGradX 3s ease infinite;
        }
        .ztc-shimmer-btn::after {
          content:'';
          position:absolute;
          inset:0;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent);
          background-size:200% 100%;
          animation:ztcShimmer 2s linear infinite;
          opacity:0;
          transition:opacity .3s;
        }
        .ztc-shimmer-btn:hover::after { opacity:1; }
        .ztc-card-lift {
          transition:transform .3s ease,box-shadow .3s ease,border-color .3s ease;
        }
        .ztc-card-lift:hover {
          transform:translateY(-6px);
          box-shadow:0 24px 60px -12px rgba(240,90,40,.22);
          border-color:rgba(240,90,40,.35);
        }
        .ztc-ticker-track {
          display:flex;
          animation:ztcTickerL 28s linear infinite;
          width:max-content;
        }
      `}</style>

      <div className="min-h-screen bg-[#EEEBE4] font-sans overflow-x-hidden">
        <Header />

        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[#1C1C1C] min-h-[90vh] flex items-center">
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {PARTICLES.map((p, i) => (
              <div key={i} className="absolute rounded-full"
                style={{
                  width: p.size, height: p.size,
                  background: p.color, left: `${p.left}%`, top: `${p.top}%`,
                  animation: `ztcFloat ${p.duration}s ease-in-out infinite`,
                  animationDelay: `${p.delay}s`,
                }} />
            ))}
          </div>

          {/* Concentric rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            {[700, 500, 320, 180].map((sz, i) => (
              <div key={sz} className="absolute rounded-full border border-[#F05A28]"
                style={{ width: sz, height: sz, opacity: 0.03 + i * 0.025 }} />
            ))}
          </div>

          {/* Central glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(240,90,40,0.14) 0%, transparent 70%)" }}
            aria-hidden="true" />

          {/* Diagonal accent bar */}
          <div className="absolute -right-24 top-0 bottom-0 w-64 opacity-5 pointer-events-none" aria-hidden="true"
            style={{ background: "linear-gradient(180deg,#F05A28,transparent)", transform: "skewX(-8deg)" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-28 relative z-10 w-full">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

              {/* Left text */}
              <div className="flex-1 text-center lg:text-left">
                <Reveal direction="up">
                  <div className="inline-flex items-center gap-2 bg-[#F05A28]/15 border border-[#F05A28]/30 text-[#F05A28] text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-widest uppercase backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F05A28] animate-pulse flex-shrink-0" />
                    Est. 2025 · Lucknow, India
                  </div>
                </Reveal>

                <Reveal direction="up" delay={100}>
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-6">
                    We Are<br />
                    <span className="ztc-grad-text">zerotwocode</span>
                  </h1>
                </Reveal>

                <Reveal direction="up" delay={200}>
                  <p className="text-base sm:text-lg text-white/55 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                    we&apos;re on mission to take students from <strong className="text-white/80">zero coding knowledge</strong> to <strong className="text-white/80">job-ready professionals</strong> — with live projects, real mentors, and a community that lasts a lifetime.
                  </p>
                </Reveal>

                <Reveal direction="up" delay={300}>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <a href="#story"
                      className="ztc-shimmer-btn relative overflow-hidden group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#F05A28] text-white text-sm font-black hover:bg-[#D94E20] transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-[#F05A28]/35">
                      Our Story
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                    <a href="#team"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white/8 border border-white/20 text-white text-sm font-bold hover:bg-white/15 transition-all duration-200 hover:scale-105 backdrop-blur-sm">
                      Meet the Team
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* Right — floating cards composition */}
              <div className="hidden lg:block relative flex-shrink-0 w-[440px] h-[420px]">
                {/* Main card */}
                <div className="absolute top-0 left-8 w-72 bg-white rounded-3xl p-6 shadow-2xl shadow-black/30 border border-[#E8E4DC]">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F05A28] to-[#FF8C5A] flex items-center justify-center text-2xl mb-4 shadow-lg shadow-[#F05A28]/30">🎓</div>
                  <p className="text-xs font-black text-[#F05A28] uppercase tracking-widest mb-1">Since 2025</p>
                  <p className="font-black text-[#1C1C1C] text-lg leading-tight">Building India&apos;s<br />Next Dev Generation</p>
                  <div className="mt-4 flex gap-2">
                    {["MERN","Python","AI"].map((t) => (
                      <span key={t} className="text-xs bg-[#FFF5F1] text-[#F05A28] border border-[#F0C4B0] px-2 py-1 rounded-lg font-semibold">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Rating card */}
                {/* <div className="absolute top-36 right-0 bg-[#1C1C1C] rounded-2xl p-5 shadow-2xl border border-white/10 w-52">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white font-black text-sm">4.9</span>
                  </div>
                  <p className="text-white/50 text-xs">2,900+ Google Reviews</p>
                  <div className="mt-3 h-px bg-white/10" />
                  <p className="text-white font-black text-2xl mt-3">50K+</p>
                  <p className="text-white/40 text-xs">Students Trained</p>
                </div> */}

                {/* Placement badge */}
                <div className="absolute bottom-0 left-0 bg-gradient-to-br from-[#F05A28] to-[#FF8C5A] rounded-2xl p-5 shadow-2xl w-48">
                  <p className="text-white/70 text-xs font-semibold mb-1">Placement Rate</p>
                  <p className="text-white font-black text-4xl">95%</p>
                  <div className="mt-3 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex-1 h-1.5 rounded-full bg-white/30" />
                    ))}
                  </div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`flex-1 h-1.5 rounded-full ${i < 4 ? "bg-white" : "bg-white/30"}`} />
                    ))}
                  </div>
                </div>

                {/* Spinning ring accent */}
                <div className="absolute top-8 right-8 w-20 h-20 rounded-full border-4 border-dashed border-[#F05A28]/20 pointer-events-none"
                  style={{ animation: "ztcSpin 12s linear infinite" }} aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            STATS TICKER
        ══════════════════════════════════════ */}
        <div className="bg-[#F05A28] py-4 overflow-hidden border-y-4 border-[#D94E20]">
          <div className="ztc-ticker-track">
            {[...STATS, ...STATS].map((s, i) => (
              <div key={i} className="flex items-center gap-2 px-8 flex-shrink-0">
                <span className="text-lg" role="img" aria-label={s.label}>{s.icon}</span>
                <span className="text-white font-black text-sm whitespace-nowrap">{s.value}{s.suffix} {s.label}</span>
                <span className="text-white/40 mx-4 text-lg">·</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            MISSION / STORY
        ══════════════════════════════════════ */}
        <section id="story" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

            {/* Left visual */}
            <Reveal direction="left" className="w-full lg:w-[45%]">
              <div className="relative">
                {/* Big quote block */}
                <div className="bg-[#1C1C1C] rounded-3xl p-8 sm:p-10 relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-[#F05A28]/10 blur-2xl pointer-events-none" aria-hidden="true" />
                  <div className="text-6xl sm:text-7xl font-black text-[#F05A28]/20 leading-none mb-4 select-none">"</div>
                  <p className="text-white text-lg sm:text-xl font-bold leading-relaxed relative z-10">
                    We don&apos;t just teach code. We build careers, confidence, and futures — one student at a time.
                  </p>
                  <div className="mt-6 flex items-center gap-3">

                  </div>
                </div>

                {/* Floating tag below */}
                <div className="absolute -bottom-5 -right-4 bg-white border border-[#DDD8CF] rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-ping absolute" />
                    <div className="w-3 h-3 rounded-full bg-green-500 relative" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#1C1C1C]">Open for Enrolment</p>
                    <p className="text-xs text-[#5A5A5A]">New batch starting soon</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right text */}
            <div className="flex-1">
              <Reveal direction="right">
                <span className="inline-block bg-[#F05A28]/10 border border-[#F05A28]/20 text-[#F05A28] text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
                  Our Mission
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#1C1C1C] leading-tight mb-5">
                  Making Real-World<br />
                  <span className="ztc-grad-text">IT Education Accessible</span>
                </h2>
              </Reveal>

              <Reveal direction="right" delay={100}>
                <p className="text-sm sm:text-base text-[#5A5A5A] leading-relaxed mb-4">
                  zerotwocode was born from a simple belief: <strong className="text-[#1C1C1C]">every student deserves a shot at an IT career</strong>, regardless of their background. Too many brilliant minds were being held back by expensive, inaccessible, or outdated training.
                </p>
                <p className="text-sm sm:text-base text-[#5A5A5A] leading-relaxed mb-8">
                  We built an institution that pairs <strong className="text-[#1C1C1C]">industry-grade curriculum</strong> with <strong className="text-[#1C1C1C]">personal mentorship</strong>, live project experience, and a placement system that actually works. Not just a course — a complete career launchpad.
                </p>
              </Reveal>

              <Reveal direction="right" delay={200}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {STATS.slice(0, 6).map((s, i) => (
                    <div key={i} className="bg-white border border-[#DDD8CF] rounded-2xl p-4 text-center ztc-card-lift">
                      <span className="text-2xl mb-1 block" role="img" aria-label={s.label}>{s.icon}</span>
                      <p className="text-xl font-black text-[#F05A28]">
                        <Counter target={s.value} suffix={s.suffix} />
                      </p>
                      <p className="text-xs text-[#5A5A5A] mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            VALUES
        ══════════════════════════════════════ */}
        <section className="bg-[#1C1C1C] py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#F05A28]/8 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#F05A28]/5 blur-2xl pointer-events-none" aria-hidden="true" />

          <div className="max-w-7xl mx-auto relative z-10">
            <Reveal direction="up" className="text-center mb-14">
              <span className="inline-block bg-[#F05A28]/20 border border-[#F05A28]/30 text-[#F05A28] text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
                What We Stand For
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Our Core <span className="ztc-grad-text">Values</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} direction="up" delay={i * 80}>
                  <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 hover:border-[#F05A28]/40 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F05A28]/0 to-[#F05A28]/0 group-hover:from-[#F05A28]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-3xl" />
                    <span className="text-3xl mb-4 block" role="img" aria-label={v.title}>{v.icon}</span>
                    <h3 className="font-black text-white text-lg mb-2 group-hover:text-[#FF8C5A] transition-colors duration-200">{v.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{v.desc}</p>
                    {/* Bottom accent */}
                    <div className="h-0.5 bg-white/10 rounded-full mt-5 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#F05A28] to-[#FF8C5A] w-0 group-hover:w-full transition-all duration-500 rounded-full" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            TIMELINE
        ══════════════════════════════════════ */}
        {/* <section id="timeline" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <Reveal direction="up" className="text-center mb-14">
            <span className="inline-block bg-[#F05A28]/10 border border-[#F05A28]/20 text-[#F05A28] text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1C1C1C]">
              2 Years of <span className="ztc-grad-text">Building Futures</span>
            </h2>
          </Reveal>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F05A28] via-[#DDD8CF] to-transparent sm:-translate-x-px" aria-hidden="true" />

            <div className="space-y-8 sm:space-y-0">
              {TIMELINE.map((item, i) => {
                const isRight = i % 2 === 0;
                return (
                  <Reveal key={item.year} direction={isRight ? "right" : "left"} delay={i * 80}
                    className={`relative flex items-start gap-6 sm:gap-0 ${i > 0 ? "sm:mt-0" : ""}`}
                    style={{ paddingBottom: i < TIMELINE.length - 1 ? "2.5rem" : 0 } as React.CSSProperties}>

                    <div className={`hidden sm:flex w-1/2 ${isRight ? "justify-end pr-8" : "justify-start pl-8 order-last"}`}>
                      <div className={`bg-white border-2 ${item.highlight ? "border-[#F05A28] shadow-lg shadow-[#F05A28]/15" : "border-[#DDD8CF]"} rounded-2xl p-5 max-w-xs w-full ztc-card-lift`}>
                        <span className={`inline-block text-xs font-black px-3 py-1 rounded-full mb-2 ${item.highlight ? "bg-[#F05A28] text-white" : "bg-[#EEEBE4] text-[#F05A28]"}`}>{item.year}</span>
                        <h3 className="font-black text-[#1C1C1C] mb-1.5">{item.title}</h3>
                        <p className="text-xs text-[#5A5A5A] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xs shadow-lg ${item.highlight ? "bg-[#F05A28] text-white shadow-[#F05A28]/40" : "bg-white border-2 border-[#DDD8CF] text-[#F05A28]"}`}>
                        {item.year.slice(2)}
                      </div>
                      {item.highlight && (
                        <div className="absolute inset-0 rounded-full bg-[#F05A28] animate-ping opacity-20" />
                      )}
                    </div>

                    <div className="hidden sm:block w-1/2" />

                    <div className={`sm:hidden flex-1 bg-white border-2 ${item.highlight ? "border-[#F05A28] shadow-lg shadow-[#F05A28]/15" : "border-[#DDD8CF]"} rounded-2xl p-4`}>
                      <span className={`inline-block text-xs font-black px-2.5 py-0.5 rounded-full mb-1.5 ${item.highlight ? "bg-[#F05A28] text-white" : "bg-[#EEEBE4] text-[#F05A28]"}`}>{item.year}</span>
                      <h3 className="font-black text-[#1C1C1C] text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-[#5A5A5A] leading-relaxed">{item.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section> */}

        {/* ══════════════════════════════════════
            TEAM
        ══════════════════════════════════════ */}
        <section id="team" className="bg-[#F5F2EC] py-16 sm:py-24 px-4 sm:px-6 border-y border-[#DDD8CF]">
          <div className="max-w-7xl mx-auto">
            <Reveal direction="up" className="text-center mb-14">
              <span className="inline-block bg-[#F05A28]/10 border border-[#F05A28]/20 text-[#F05A28] text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
                The People Behind It
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1C1C1C]">
                Meet Our <span className="ztc-grad-text">Team hiiii</span>
              </h2>
              <p className="text-sm text-[#5A5A5A] mt-3 max-w-md mx-auto">
                Industry veterans, passionate educators, and placement specialists — all in one place.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((member, i) => (
                <Reveal key={member.name} direction="up" delay={i * 90}>
                  <div className="group bg-white border border-[#DDD8CF] rounded-3xl p-6 text-center ztc-card-lift overflow-hidden relative">
                    {/* Gradient top accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.color}`} />
                    {/* Avatar */}
                    <div className="relative inline-block mb-4">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-black shadow-xl mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        {member.initials}
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-green-400 border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    </div>
                    <h3 className="font-black text-[#1C1C1C] text-base mb-0.5 group-hover:text-[#F05A28] transition-colors duration-200">{member.name}</h3>
                    <p className="text-xs font-semibold text-[#F05A28] mb-4">{member.role}</p>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {member.expertise.map((ex) => (
                        <span key={ex} className="text-xs bg-[#EEEBE4] text-[#5A5A5A] px-2.5 py-1 rounded-full font-medium">{ex}</span>
                      ))}
                    </div>
                    {/* Hover reveal */}
                    <div className="mt-4 pt-4 border-t border-[#EEEBE4] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex justify-center gap-3">
                        <div className="mt-4 pt-4 border-t border-[#EEEBE4] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <div className="flex justify-center gap-3">

    {member.social?.linkedin && (
      <a
        href={member.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-[#EEEBE4] hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition-all duration-200"
      >
        <FaLinkedinIn size={14} />
      </a>
    )}

    {member.social?.github && (
      <a
        href={member.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-[#EEEBE4] hover:bg-black hover:text-white flex items-center justify-center transition-all duration-200"
      >
        <FaGithub size={14} />
      </a>
    )}

    {member.social?.twitter && (
      <a
        href={member.social.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-[#EEEBE4] hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center transition-all duration-200"
      >
        <FaXTwitter size={14} />
      </a>
    )}

  </div>
</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <Reveal direction="up" className="text-center mb-10">
            <span className="inline-block bg-[#F05A28]/10 border border-[#F05A28]/20 text-[#F05A28] text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
              Technologies We Teach
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1C1C1C]">
              Full-Stack. <span className="ztc-grad-text">Future-Ready.</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <div className="flex flex-wrap justify-center gap-3">
              {TECHS.map((t, i) => (
                <span key={t.label}
                  className={`group inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2.5 rounded-xl border-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default ${t.color}`}
                  style={{ animationDelay: `${i * 30}ms` }}>
                  {t.label}
                </span>
              ))}
            </div>
          </Reveal>
        </section>
        <section className="px-4 sm:px-6 pb-16 sm:pb-24">
          <div className="max-w-7xl mx-auto">
            <Reveal direction="up">
              <div className="relative rounded-3xl overflow-hidden text-center py-16 sm:py-20 px-6"
                style={{ background: "linear-gradient(135deg, #1C1C1C 0%, #2A2A2A 40%, #1C1C1C 100%)" }}>
                {/* Particles inside CTA */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                  {PARTICLES.slice(0, 10).map((p, i) => (
                    <div key={i} className="absolute rounded-full"
                      style={{ width: p.size, height: p.color === "#F05A28" ? p.size : 3,
                        background: p.color, left: `${p.left}%`, top: `${p.top}%`, opacity: 0.15,
                        animation: `ztcFloat ${p.duration}s ease-in-out infinite`, animationDelay: `${p.delay}s` }} />
                  ))}
                </div>
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#F05A28]/10 blur-3xl pointer-events-none" aria-hidden="true" />
                <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#F05A28]/8 blur-2xl pointer-events-none" aria-hidden="true" />

                <div className="relative z-10">
                  <span className="inline-block text-4xl mb-5" role="img" aria-label="rocket">🚀</span>
                  <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
                    Ready to Go From<br />
                    <span className="ztc-grad-text">Zero to Hero?</span>
                  </h2>
                  <p className="text-white/50 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
                        Ready to start your IT career? Enroll with<strong className="text-white/80"> ZerotwoCode</strong> today — limited seats available.                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="#"
                      className="ztc-shimmer-btn relative overflow-hidden group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#F05A28] text-white text-sm font-black hover:bg-[#D94E20] transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-[#F05A28]/35">
                      Enroll Now — It&apos;s Free to Apply
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                    <a href="tel:+917007237006"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/8 border border-white/20 text-white text-sm font-bold hover:bg-white/15 transition-all duration-200 backdrop-blur-sm">
                      📞 Talk to an Advisor
                    </a>
                  </div>
                  {/* Trust row */}
                  <div className="flex flex-wrap justify-center gap-6 mt-10">
                    {["✅ No Experience Needed", "✅ Job Assistance", "✅ Live Projects", "✅ Certified"].map((t) => (
                      <span key={t} className="text-xs text-white/50 font-semibold">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        <Footer/>

      </div>
    </>
  );
}