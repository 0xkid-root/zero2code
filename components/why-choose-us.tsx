'use client'

import { useEffect, useRef, useState } from 'react'
import { Diamond, Clock, Hand, Heart } from 'lucide-react'

const features = [
  {
    id: 1,
    title: 'Structured Learning Path',
    description: 'Follow a clear roadmap designed by industry experts to master technologies step by step.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    accentColor: '#a855f7',
    glowColor: 'rgba(168,85,247,0.35)',
    icon: Diamond,
    number: '01',
  },
  {
    id: 2,
    title: 'Expert Mentorship',
    description: 'Get guidance from experienced mentors who support your learning journey at every step.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    accentColor: '#3b82f6',
    glowColor: 'rgba(59,130,246,0.35)',
    icon: Clock,
    number: '02',
  },
  {
    id: 3,
    title: 'Real-World Projects',
    description: 'Work on practical projects that simulate real industry scenarios and challenges.',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    accentColor: '#06b6d4',
    glowColor: 'rgba(6,182,212,0.35)',
    icon: Hand,
    number: '03',
  },
  {
    id: 4,
    title: 'Career Support',
    description: 'Get comprehensive placement support and interview preparation guidance from experts.',
    color: 'from-slate-400 to-slate-500',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-500/20',
    accentColor: '#94a3b8',
    glowColor: 'rgba(148,163,184,0.35)',
    icon: Heart,
    number: '04',
  },
]

function OrbitRing({ size, duration, color, clockwise = true, children }) {
  return (
    <div
      className="absolute rounded-full border flex items-center justify-center"
      style={{
        width: size,
        height: size,
        borderColor: color,
        animation: `${clockwise ? 'spinCW' : 'spinCCW'} ${duration}s linear infinite`,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {children}
    </div>
  )
}

export default function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ students: 0, projects: 0, mentors: 0 })
  const sectionRef = useRef(null)
  const circleRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          const duration = 1800
          const startTime = performance.now()
          const animate = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const ease = 1 - Math.pow(1 - progress, 3)
            setCounters({
              students: Math.floor(ease * 2400),
              projects: Math.floor(ease * 120),
              mentors: Math.floor(ease * 45),
            })
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouse = (e) => {
      if (!circleRef.current) return
      const rect = circleRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      setMousePos({
        x: ((e.clientX - cx) / rect.width) * 18,
        y: ((e.clientY - cy) / rect.height) * 18,
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  const particles = Array.from({ length: 18 }, (_, i) => {
    const seed = i * 137.5
    return {
      id: i,
      size: (seed % 3) + 2,
      x: (seed * 1.3) % 100,
      y: (seed * 0.7) % 100,
      duration: (seed % 8) + 6,
      delay: (seed % 5),
      opacity: (seed % 4) * 0.08 + 0.1,
      color: ['#a855f7', '#3b82f6', '#06b6d4', '#94a3b8'][i % 4],
    }
  })

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden bg-background">

      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)', animation: 'morphOrb1 12s ease-in-out infinite' }} />
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)', animation: 'morphOrb2 15s ease-in-out infinite' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)', animation: 'morphOrb3 18s ease-in-out infinite' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              backgroundColor: p.color,
              opacity: p.opacity,
              animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite`,
              boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            }}
          />
        ))}
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Section Label */}
        <div
          className="flex items-center gap-3 mb-10 justify-center md:justify-start"
          style={{ animation: isVisible ? 'fadeSlideDown 0.6s ease-out 0.1s backwards' : 'none' }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" style={{ width: isVisible ? '48px' : '0px', transition: 'width 1s ease-out 0.4s' }} />
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-primary/50 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block" style={{ animation: 'pulseDot 2s ease-in-out infinite' }} />
            Why Choose Us
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block" style={{ animation: 'pulseDot 2s ease-in-out 0.5s infinite' }} />
          </span>
          <div className="h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" style={{ width: isVisible ? '48px' : '0px', transition: 'width 1s ease-out 0.4s' }} />
        </div>

        {/* Main Layout */}
        <div className="relative grid md:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 items-center">

          {/* === LEFT: CIRCLE === */}
          <div ref={circleRef} className="relative flex items-center justify-center h-[380px] md:h-[420px]">

            {/* Orbit rings with glowing dots */}
            <OrbitRing size={380} duration={30} color="rgba(168,85,247,0.08)" clockwise={true}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple-500/60"
                style={{ boxShadow: '0 0 10px rgba(168,85,247,0.8)' }} />
            </OrbitRing>
            <OrbitRing size={320} duration={22} color="rgba(59,130,246,0.08)" clockwise={false}>
              <div className="absolute bottom-0 right-1/4 w-2 h-2 rounded-full bg-blue-500/60"
                style={{ boxShadow: '0 0 8px rgba(59,130,246,0.8)' }} />
            </OrbitRing>
            <OrbitRing size={260} duration={16} color="rgba(6,182,212,0.1)" clockwise={true}>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-500/60"
                style={{ boxShadow: '0 0 6px rgba(6,182,212,0.8)' }} />
            </OrbitRing>

            {/* Dashed outer ring */}
            <div className="absolute rounded-full border border-dashed border-border/20"
              style={{ width: 430, height: 430, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animation: 'spinCCW 40s linear infinite' }} />

            {/* Pulse glow */}
            <div className="absolute rounded-full"
              style={{ width: 300, height: 300, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(var(--primary-rgb),0.15) 0%, transparent 70%)', animation: 'pulseGlow 4s ease-in-out infinite' }} />

            {/* Main Circle */}
            <div
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-full shadow-2xl flex items-center justify-center z-20"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.88) 100%)',
                transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
                transition: 'transform 0.15s ease-out',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 20px 60px rgba(0,0,0,0.3)',
                animation: isVisible ? 'scaleIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s backwards' : 'none',
              }}
            >
              <div className="absolute inset-3 rounded-full border border-white/10" />
              <div className="absolute inset-6 rounded-full border border-white/5" />

              {/* Shine sweep */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute -inset-full"
                  style={{ background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)', animation: 'shineSweepInner 5s ease-in-out 1s infinite' }} />
              </div>

              <div className="text-center px-6 relative z-10">
                <p className="text-[9px] tracking-[0.35em] font-semibold text-foreground/30 uppercase mb-1">Discover</p>
                <h2 className="text-4xl md:text-5xl font-black text-foreground leading-[1.0] tracking-tighter">
                  WHY<br />CHOOSE
                </h2>
                <div className="my-2 h-px w-10 mx-auto bg-gradient-to-r from-transparent via-foreground/25 to-transparent" />
                <p className="text-xl md:text-2xl font-black tracking-[0.15em] text-foreground/60">ZEROTWO</p>
                <p className="text-2xl md:text-3xl font-black text-foreground tracking-tight">CODE</p>
              </div>
            </div>

            {/* Stat badges */}
            {[
              { label: 'Students', value: counters.students.toLocaleString() + '+', pos: 'top-4 -right-2 md:right-2', delay: '0.7s' },
              { label: 'Projects', value: counters.projects + '+', pos: 'bottom-8 -left-2 md:left-0', delay: '0.9s' },
              { label: 'Mentors', value: counters.mentors + '+', pos: 'bottom-16 -right-2 md:right-0', delay: '1.1s' },
            ].map((badge) => (
              <div
                key={badge.label}
                className={`absolute ${badge.pos} bg-background/85 backdrop-blur-md border border-border/50 rounded-2xl px-3.5 py-2.5 shadow-xl z-30`}
                style={{
                  animation: isVisible ? `floatBadge 0.6s cubic-bezier(0.34,1.56,0.64,1) ${badge.delay} backwards` : 'none',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05)',
                }}
              >
                <div className="text-xl font-black text-foreground tabular-nums">{badge.value}</div>
                <div className="text-[9px] text-muted-foreground font-semibold tracking-widest uppercase">{badge.label}</div>
              </div>
            ))}
          </div>

          {/* === RIGHT: FEATURES === */}
          <div className="relative space-y-4">

            <div className="absolute -top-12 -right-16 text-[5.5rem] font-black text-foreground/[0.022] pointer-events-none select-none whitespace-nowrap tracking-tight">
              ZEROTWOCODE
            </div>

            {features.map((feature, index) => {
              const Icon = feature.icon
              const isActive = activeFeature === feature.id

              return (
                <div
                  key={feature.id}
                  className="relative z-20"
                  style={{ animation: isVisible ? `slideInFeature 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12 + 0.3}s backwards` : 'none' }}
                  onMouseEnter={() => setActiveFeature(feature.id)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div className="group flex gap-4 items-center cursor-pointer">

                    {/* Step number */}
                    <div className="flex-shrink-0 w-7 text-right">
                      <span className="text-[11px] font-black tabular-nums transition-all duration-300"
                        style={{ color: isActive ? feature.accentColor : 'rgba(128,128,128,0.3)' }}>
                        {feature.number}
                      </span>
                    </div>

                    {/* Icon with ripples */}
                    <div className="relative flex-shrink-0">
                      {isActive && (
                        <>
                          <div className="absolute inset-0 rounded-2xl"
                            style={{ background: `linear-gradient(135deg, ${feature.accentColor}22, transparent)`, animation: 'ripple1 1.2s ease-out infinite' }} />
                          <div className="absolute inset-0 rounded-2xl"
                            style={{ background: `linear-gradient(135deg, ${feature.accentColor}15, transparent)`, animation: 'ripple2 1.2s ease-out 0.3s infinite' }} />
                        </>
                      )}
                      <div className="absolute -inset-3 rounded-2xl blur-xl transition-opacity duration-400"
                        style={{ background: `radial-gradient(circle, ${feature.glowColor}, transparent)`, opacity: isActive ? 1 : 0 }} />
                      <div
                        className={`relative w-14 h-14 bg-gradient-to-br ${feature.color} shadow-lg flex items-center justify-center transition-all duration-400`}
                        style={{
                          borderRadius: isActive ? '50%' : '14px',
                          transform: isActive ? 'scale(1.15) rotate(8deg)' : 'scale(1) rotate(0deg)',
                          boxShadow: isActive ? `0 8px 32px ${feature.glowColor}` : '0 4px 12px rgba(0,0,0,0.15)',
                        }}
                      >
                        <Icon className="w-7 h-7 text-white transition-transform duration-400"
                          strokeWidth={1.5}
                          style={{ transform: isActive ? 'rotate(-8deg)' : 'rotate(0deg)' }} />
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className={`flex-1 px-5 py-4 rounded-2xl border transition-all duration-400 ${feature.bgColor}`}
                      style={{
                        borderColor: isActive ? feature.accentColor + '50' : 'rgba(128,128,128,0.15)',
                        transform: isActive ? 'translateX(6px)' : 'translateX(0)',
                        boxShadow: isActive ? `0 4px 24px ${feature.glowColor}, inset 0 1px 0 rgba(255,255,255,0.05)` : 'none',
                      }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="text-base font-bold mb-1 leading-tight transition-colors duration-300"
                            style={{ color: isActive ? feature.accentColor : undefined }}>
                            {feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                        <div
                          className="flex-shrink-0 transition-all duration-400"
                          style={{
                            opacity: isActive ? 1 : 0,
                            transform: isActive ? 'translateX(0) scale(1)' : 'translateX(-8px) scale(0.8)',
                          }}
                        >
                          <div className="w-8 h-8 rounded-full flex items-center justify-center"
                            style={{ background: feature.accentColor + '20' }}>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                              <path d="M3 8h10M9 4l4 4-4 4" stroke={feature.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/* Animated progress bar */}
                      <div className="mt-3 h-0.5 rounded-full overflow-hidden bg-border/20">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            background: `linear-gradient(to right, ${feature.accentColor}, ${feature.accentColor}66)`,
                            width: isActive ? '100%' : '0%',
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Vertical connector */}
                  {index < features.length - 1 && (
                    <div
                      className="absolute w-px transition-all duration-500"
                      style={{
                        left: '1.6rem',
                        top: '3.75rem',
                        height: '1.25rem',
                        background: `linear-gradient(to bottom, ${isActive ? feature.accentColor + '60' : 'rgba(128,128,128,0.2)'}, transparent)`,
                      }}
                    />
                  )}
                </div>
              )
            })}

            {/* Footer nudge */}
            <div
              className="relative z-20 flex items-center gap-3 pt-2 pl-12"
              style={{ animation: isVisible ? 'slideInFeature 0.65s cubic-bezier(0.16,1,0.3,1) 0.82s backwards' : 'none' }}
            >
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/25"
                    style={{ animation: `pulseDot 1.8s ease-in-out ${i * 0.25}s infinite` }} />
                ))}
              </div>
              <span className="text-xs text-muted-foreground/40 font-medium tracking-wider">and so much more awaits you</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spinCW {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spinCCW {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33%       { transform: translateY(-22px) translateX(8px); }
          66%       { transform: translateY(-10px) translateX(-12px); }
        }
        @keyframes morphOrb1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          33%       { transform: translate(40px,-30px) scale(1.15); }
          66%       { transform: translate(-20px,20px) scale(0.9); }
        }
        @keyframes morphOrb2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50%       { transform: translate(-50px,30px) scale(1.2); }
        }
        @keyframes morphOrb3 {
          0%, 100% { transform: translate(-50%,-50%) scale(1); }
          50%       { transform: translate(-50%,-50%) scale(1.3); }
        }
        @keyframes pulseGlow {
          0%, 100% { transform: translate(-50%,-50%) scale(1);   opacity: 0.6; }
          50%       { transform: translate(-50%,-50%) scale(1.3); opacity: 1; }
        }
        @keyframes pulseDot {
          0%, 100% { transform: scale(1);   opacity: 0.4; }
          50%       { transform: scale(1.5); opacity: 1; }
        }
        @keyframes shineSweepInner {
          0%   { transform: translateX(-200%); }
          100% { transform: translateX(400%); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.5); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
        @keyframes fadeSlideDown {
          from { transform: translateY(-12px); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }
        @keyframes slideInFeature {
          from { transform: translateX(32px); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes floatBadge {
          from { transform: scale(0.7) translateY(10px); opacity: 0; }
          to   { transform: scale(1)   translateY(0);    opacity: 1; }
        }
        @keyframes ripple1 {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes ripple2 {
          0%   { transform: scale(1);   opacity: 0.4; }
          100% { transform: scale(2.8); opacity: 0; }
        }
      `}</style>
    </section>
  )
}