'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ArrowRight, Play, TrendingUp,  BookOpen } from 'lucide-react'
import {TypeAnimation} from 'react-type-animation'
import { User, Users, GraduationCap, UserCheck } from "lucide-react";


export default function HeroSection() {
  return (
    <section className="bg-background relative py-16 md:py-24 overflow-hidden">

      {/* ── Background: line grid + glows ── */}
      <div className="pointer-events-none absolute inset-0 z-0">

        {/* Crisp horizontal + vertical line grid — exactly like reference */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.07) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.07) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Vignette — fades grid out at all edges so it doesn't look cropped */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 90% 85% at 50% 50%,
                transparent 30%,
                hsl(var(--background) / 0.55) 65%,
                hsl(var(--background)) 100%
              )
            `,
          }}
        />

        {/* Purple glow top-left (like reference image) */}
        <div
          className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)' }}
        />

        {/* Accent glow bottom-right */}
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }}
        />

        {/* Center glow behind orbital */}
        <div
          className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* ── LEFT CONTENT ── */}
          <div className="space-y-8" style={{ animation: 'slideLeft 0.7s ease-out both' }}>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/25 rounded-full text-sm font-semibold text-foreground backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Transform Your Tech Career
            </span>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-black text-foreground leading-[1.05] tracking-tight">
                Industry-Ready
              </h1>
              <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
                <span className="relative inline-block text-primary">
                  IT Training
                  {/* squiggle underline */}
                  <svg className="absolute -bottom-1 left-0 w-full" height="10" viewBox="0 0 260 10" preserveAspectRatio="none">
                    <path d="M0,8 Q32.5,0 65,5 Q97.5,10 130,5 Q162.5,0 195,5 Q227.5,10 260,5"
                      fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
                  </svg>
                </span>
              </h1>
              <h1 className="text-5xl md:text-6xl font-black text-foreground leading-[1.05] tracking-tight">
                Programs
              </h1>
            </div>

              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Technologies You'll Master:{" "}
                <span className="font-black text-foreground ">
                  <TypeAnimation
                    sequence={[
                      "Node.js",
                      1500,
                      "React.js",
                      1500,
                      "JavaScript",
                      1500,
                      "HTML",
                      1500,
                      "CSS",
                      1500,
                      "MongoDB",
                      1500,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />

                   </span>
                    </h2>

            {/* Subtext */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Learn from expert instructors and gain hands-on experience with the latest technologies.
              Join <strong className="text-foreground font-semibold">thousands of students</strong> who transformed their careers with ZeroTwoCode.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="relative group gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-2xl shadow-lg hover:shadow-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 skew-x-12" />
                Register Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="gap-3 border-border hover:bg-secondary px-8 py-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Play className="w-3.5 h-3.5 text-primary fill-primary" />
                </span>
                Our Programs
              </Button>
            </div>

            {/* Inline trust row */}
<div className="flex items-center gap-6 pt-2">
  <div className="flex -space-x-2">
    {[User, Users, GraduationCap, UserCheck].map((Icon, i) => (
      <div
        key={i}
        className="w-8 h-8 rounded-full border-2 border-background bg-primary/10 flex items-center justify-center"
      >
        <Icon className="w-4 h-4 text-primary" />
      </div>
    ))}
  </div>

  <p className="text-sm text-muted-foreground">
    <span className="font-bold text-foreground">50,000+</span> students enrolled
  </p>
</div>
          </div>

          {/* ── RIGHT – Orbital ── */}
          <div
            className="relative h-[420px] md:h-[500px] flex items-center justify-center"
            style={{ animation: 'slideRight 0.7s ease-out both' }}
          >
            {/* Background glow disc */}
            <div className="absolute w-80 h-80 rounded-full opacity-20 blur-3xl bg-primary animate-pulse-slow" />

            {/* Orbit 3 – slowest */}
            <div className="absolute w-[420px] h-[420px] rounded-full border border-dotted border-muted/25 animate-spin-60">
              {[
                { pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2', e: '🤖' },
                { pos: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2', e: '📱' },
                { pos: 'bottom-0 left-1/3 -translate-x-1/2 translate-y-1/2', e: '🎯' },
                { pos: 'bottom-1/4 left-0 -translate-x-1/2', e: '🌐' },
              ].map(({ pos, e }, i) => (
                <div key={i} className={`absolute ${pos}`}>
                  <div className="w-10 h-10 bg-card rounded-xl shadow-lg flex items-center justify-center border border-border/60 text-sm counter-spin-60 hover:scale-110 transition-transform">
                    {e}
                  </div>
                </div>
              ))}
            </div>

            {/* Orbit 2 – medium reverse */}
            <div className="absolute w-[300px] h-[300px] rounded-full border border-dotted border-primary/20 animate-spin-40-rev">
              {[
                { pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2', e: '🚀' },
                { pos: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2', e: '💻' },
                { pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2', e: '🎓' },
                { pos: 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2', e: '⚡' },
              ].map(({ pos, e }, i) => (
                <div key={i} className={`absolute ${pos}`}>
                  <div className="w-11 h-11 bg-secondary rounded-xl shadow-lg flex items-center justify-center border border-border counter-spin-40-rev hover:scale-110 transition-transform">
                    {e}
                  </div>
                </div>
              ))}
            </div>

            {/* Orbit 1 – fastest */}
            <div className="absolute w-[190px] h-[190px] rounded-full border border-dashed border-primary/40 animate-spin-20">
              {[
                { pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2', e: '🐍' },
                { pos: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2', e: '☁️' },
                { pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2', e: '⚙️' },
                { pos: 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2', e: '📊' },
              ].map(({ pos, e }, i) => (
                <div key={i} className={`absolute ${pos}`}>
                  <div className="w-12 h-12 bg-card rounded-xl shadow-lg flex items-center justify-center border border-border text-xl counter-spin-20 hover:scale-110 transition-transform">
                    {e}
                  </div>
                </div>
              ))}
            </div>

            {/* Center student image */}
            <div className="relative z-10 w-40 h-40 animate-float">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/10 blur-xl animate-pulse-slow" />
              <div className="relative w-full h-full rounded-full border-2 border-primary/50 overflow-hidden shadow-2xl ring-4 ring-primary/10">
                <Image src="/student-hero.jpg" alt="Student" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>

        {/* ── STATS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-border"
          style={{ animation: 'fadeUp 0.8s ease-out 0.4s both' }}>
          {[
            { icon: <TrendingUp className="w-6 h-6 text-primary" />, value: '98%', label: 'Placement Rate', sub: 'Students secured jobs within 6 months' },
            { icon: <Users className="w-6 h-6 text-primary" />, value: '50K+', label: 'Students Trained', sub: 'Join our thriving community of learners' },
            { icon: <BookOpen className="w-6 h-6 text-primary" />, value: '8+', label: 'Expert Courses', sub: 'From AWS to Full-Stack Development' },
          ].map(({ icon, value, label, sub }, i) => (
            <div key={i} className="relative group bg-card/50 backdrop-blur-md border border-border rounded-2xl p-8 text-center overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, hsl(var(--primary) / 0.07) 0%, transparent 70%)' }} />
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
              </div>
              <div className="text-4xl font-black text-primary mb-1 tabular-nums">{value}</div>
              <p className="text-foreground font-bold mb-1">{label}</p>
              <p className="text-sm text-muted-foreground/80">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style jsx>{`
        .animate-spin-20     { animation: spin 20s linear infinite; }
        .animate-spin-40-rev { animation: spin 40s linear infinite reverse; }
        .animate-spin-60     { animation: spin 60s linear infinite; }
        .counter-spin-20     { animation: spinRev 20s linear infinite; }
        .counter-spin-40-rev { animation: spin 40s linear infinite; }
        .counter-spin-60     { animation: spinRev 60s linear infinite; }
        .animate-float       { animation: float 4s ease-in-out infinite; }
        .animate-pulse-slow  { animation: pulseSlow 3s ease-in-out infinite; }

        @keyframes spin      { to { transform: rotate(360deg); } }
        @keyframes spinRev   { to { transform: rotate(-360deg); } }
        @keyframes float     { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes pulseSlow { 0%,100% { opacity: 0.15; } 50% { opacity: 0.35; } }

        @keyframes slideLeft  { from { opacity:0; transform: translateX(-40px); } to { opacity:1; transform: translateX(0); } }
        @keyframes slideRight { from { opacity:0; transform: translateX(40px);  } to { opacity:1; transform: translateX(0); } }
        @keyframes fadeUp     { from { opacity:0; transform: translateY(32px);  } to { opacity:1; transform: translateY(0); } }
      `}</style>
    </section>
  )
}