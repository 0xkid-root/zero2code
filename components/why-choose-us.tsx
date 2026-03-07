'use client'

import { Diamond, Clock, Hand, Heart } from 'lucide-react'

const features = [
  {
    id: 1,
    title: 'Structured Learning Path',
    description: 'Follow a clear roadmap designed by industry experts to master technologies step by step.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-200/50',
    accentColor: '#a855f7',
    icon: Diamond,
    number: '01',
  },
  {
    id: 2,
    title: 'Expert Mentorship',
    description: 'Get guidance from experienced mentors who support your learning journey at every step.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-200/50',
    accentColor: '#3b82f6',
    icon: Clock,
    number: '02',
  },
  {
    id: 3,
    title: 'Real-World Projects',
    description: 'Work on practical projects that simulate real industry scenarios and challenges.',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-200/50',
    accentColor: '#06b6d4',
    icon: Hand,
    number: '03',
  },
  {
    id: 4,
    title: 'Career Support',
    description: 'Get comprehensive placement support and interview preparation guidance from experts.',
    color: 'from-slate-400 to-slate-500',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-200/50',
    accentColor: '#94a3b8',
    icon: Heart,
    number: '04',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-background">

      {/* Ambient background orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
          <div className="h-px w-8 bg-primary/40" />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary/60">Why Us</span>
          <div className="h-px w-8 bg-primary/40" />
        </div>

        {/* Main Layout Container */}
        <div className="relative grid md:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 items-center min-h-96">

          {/* Left: Central Circle */}
          <div className="relative flex items-center justify-center">

            {/* Outer ring decoration */}
            <div className="absolute w-[340px] h-[340px] md:w-[380px] md:h-[380px] rounded-full border border-primary/10 animate-spin-slow" />
            <div className="absolute w-[300px] h-[300px] md:w-[340px] md:h-[340px] rounded-full border border-dashed border-primary/8" />

            {/* Soft Background Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/50 to-secondary/10 blur-3xl scale-125" />

            {/* Main Circle */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary via-primary/95 to-primary/85 shadow-2xl flex items-center justify-center z-10 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(var(--primary-rgb),0.3)]">

              {/* Inner subtle ring */}
              <div className="absolute inset-4 rounded-full border border-white/10" />
              <div className="absolute inset-8 rounded-full border border-white/5" />

              <div className="text-center px-8 relative z-10">
                <p className="text-[10px] tracking-[0.3em] font-medium text-foreground/40 uppercase mb-2">Discover</p>
                <h2 className="text-4xl md:text-5xl font-black text-foreground leading-[1.05] tracking-tighter">
                  WHY<br />
                  CHOOSE<br />
                  <span className="text-foreground/70 text-2xl md:text-3xl tracking-widest font-light">ZEROTWO</span><br />
                  <span className="text-3xl md:text-4xl">CODE</span>
                </h2>
                <div className="mt-3 h-0.5 w-12 mx-auto bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
              </div>
            </div>

            {/* Floating stat badges */}
            <div className="absolute -top-2 -right-2 md:right-4 bg-background/90 backdrop-blur-sm border border-border/60 rounded-2xl px-4 py-2.5 shadow-lg z-20">
              <div className="text-2xl font-black text-foreground">4+</div>
              <div className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase">Features</div>
            </div>
            <div className="absolute -bottom-2 -left-2 md:left-4 bg-background/90 backdrop-blur-sm border border-border/60 rounded-2xl px-4 py-2.5 shadow-lg z-20">
              <div className="text-2xl font-black text-foreground">100%</div>
              <div className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase">Practical</div>
            </div>
          </div>

          {/* Right: Feature Items */}
          <div className="relative space-y-5">

            {/* Subtle watermark */}
            <div className="absolute -top-16 -right-20 text-7xl md:text-8xl font-black text-foreground/[0.025] pointer-events-none select-none whitespace-nowrap">
              ZEROTWOCODE
            </div>

            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.id}
                  className="relative z-20"
                  style={{
                    animation: `slideInFromRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1 + 0.1}s backwards`,
                  }}
                >
                  <div className="group flex gap-5 items-center transition-all duration-300 hover:-translate-y-0.5 hover:translate-x-1 cursor-pointer">

                    {/* Step number - subtle */}
                    <div className="flex-shrink-0 w-6 text-right">
                      <span className="text-[11px] font-bold text-muted-foreground/40 tabular-nums">{feature.number}</span>
                    </div>

                    {/* Icon Circle */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`absolute -inset-2 rounded-full bg-gradient-to-br ${feature.color} opacity-0 blur-lg group-hover:opacity-30 transition-all duration-400`}
                      />
                      <div
                        className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rounded-full group-hover:shadow-xl`}
                      >
                        <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className={`flex-1 px-5 py-4 rounded-2xl border transition-all duration-300 ${feature.bgColor} ${feature.borderColor} group-hover:border-opacity-100 group-hover:shadow-lg group-hover:scale-[1.01]`}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 leading-tight">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                            {feature.description}
                          </p>
                        </div>

                        {/* Arrow indicator */}
                        <div className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/50"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vertical connector line between items */}
                  {index < features.length - 1 && (
                    <div className="absolute left-[1.35rem] top-[3.75rem] w-px h-5 bg-gradient-to-b from-border/40 to-transparent" />
                  )}
                </div>
              )
            })}

            {/* Bottom CTA nudge */}
            <div
              className="relative z-20 flex items-center gap-3 pt-2 pl-[2.75rem]"
              style={{ animation: 'slideInFromRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.55s backwards' }}
            >
              <div className="h-px flex-1 max-w-[3rem] bg-gradient-to-r from-border/60 to-transparent" />
              <span className="text-xs text-muted-foreground/50 font-medium tracking-wide">and much more awaits</span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}