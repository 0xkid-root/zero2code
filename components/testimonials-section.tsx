"use client"

import { useEffect, useRef, useState } from "react"
import { testimonials } from "@/lib/data"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsSection() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-advance
  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 3500)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [paused])

  const prev = () => {
    setPaused(true)
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length)
  }
  const next = () => {
    setPaused(true)
    setActive((p) => (p + 1) % testimonials.length)
  }

  // Create infinite scroll list: [...last, ...all, ...first] for seamless feel
  const getPosition = (i: number) => {
    const total = testimonials.length
    let diff = i - active
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff // -2, -1, 0, 1, 2
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-background overflow-hidden"
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 85% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_65%_60%_at_50%_50%,hsl(var(--background)/0.95)_0%,transparent_100%)]" />

      {/* Left/right edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 pointer-events-none z-10"
        style={{ background: "linear-gradient(90deg, hsl(var(--background)) 0%, transparent 100%)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 pointer-events-none z-10"
        style={{ background: "linear-gradient(-90deg, hsl(var(--background)) 0%, transparent 100%)" }} />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-border" />
            <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-muted-foreground">
              // testimonials
            </span>
            <div className="h-px w-10 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4">
            Students who turned
            <br />
            <span className="text-primary">training into momentum</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Real success stories from professionals who transformed their careers with ZeroTwoCode
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative flex items-center justify-center"
          style={{ height: "360px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {testimonials.map((t, i) => {
            const pos = getPosition(i)
            const isCenter = pos === 0
            const isAdjacent = Math.abs(pos) === 1
            const isHidden = Math.abs(pos) > 1

            const xOffset = pos * 340
            const scale = isCenter ? 1 : isAdjacent ? 0.82 : 0.68
            const opacity = isCenter ? 1 : isAdjacent ? 0.55 : 0
            const zIndex = isCenter ? 30 : isAdjacent ? 20 : 10
            const blur = isCenter ? 0 : isAdjacent ? 1 : 3

            return (
              <div
                key={t.id}
                onClick={() => { setPaused(true); setActive(i) }}
                className="absolute w-full max-w-md cursor-pointer"
                style={{
                  transform: `translateX(${xOffset}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  filter: `blur(${blur}px)`,
                  transition: "all 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                  pointerEvents: isHidden ? "none" : "auto",
                }}
              >
                <div className={`rounded-2xl border bg-white p-8 flex flex-col gap-5 transition-shadow duration-300 ${
                  isCenter ? "border-primary/30 shadow-2xl" : "border-border shadow-sm"
                }`}>
                  {/* Decorative quote */}
                  <span className="absolute top-3 left-5 text-8xl font-serif leading-none text-primary opacity-[0.07] select-none pointer-events-none">
                    "
                  </span>

                  {/* Stars + index */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, si) => (
                        <Star key={si} size={14} className="fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-xs font-mono text-muted-foreground/40 tabular-nums">
                      {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-foreground text-sm md:text-base leading-relaxed flex-1 relative z-10">
                    "{t.text}"
                  </p>

                  <div className={`h-px w-full transition-colors duration-300 ${isCenter ? "bg-primary/20" : "bg-border"}`} />

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className={`shrink-0 w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold ring-2 ring-offset-2 transition-all duration-300 ${
                      isCenter ? "ring-primary/40 scale-105" : "ring-transparent"
                    }`}>
                      {t.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm truncate">{t.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{t.role} · {t.company}</p>
                    </div>
                    {isCenter && <div className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Controls */}
        <div className={`flex items-center justify-center gap-6 mt-10 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {/* Prev */}
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-muted-foreground hover:border-primary/40 hover:text-primary hover:shadow-md transition-all duration-200"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setPaused(true); setActive(i) }}
                className={`h-[7px] rounded-full transition-all duration-300 ${
                  active === i ? "w-6 bg-primary" : "w-[7px] bg-border hover:bg-primary/40"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-muted-foreground hover:border-primary/40 hover:text-primary hover:shadow-md transition-all duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="flex justify-center mt-5">
          <div className="w-48 h-[3px] rounded-full bg-border overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-none"
              style={{
                width: `${((active + 1) / testimonials.length) * 100}%`,
                transition: paused ? "width 0.3s ease" : "width 3.5s linear",
              }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}