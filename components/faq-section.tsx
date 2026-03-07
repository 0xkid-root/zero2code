"use client"

import { useState, useEffect, useRef } from "react"
import { faqs } from "@/lib/data"

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(faqs[0]?.id ?? null)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const activeFaq = faqs.find((f) => f.id === openId)

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-20 md:py-32 bg-white overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Fira+Code:wght@400;500&display=swap');

        .faq-fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .faq-fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .faq-item-bar::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%) scaleY(0);
          width: 3px;
          height: 60%;
          border-radius: 99px;
          background: hsl(var(--primary));
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .faq-item-bar.active::before {
          transform: translateY(-50%) scaleY(1);
        }
        .answer-slide {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.45s cubic-bezier(0.4,0,0.2,1);
        }
        .answer-slide.open {
          grid-template-rows: 1fr;
        }
        .answer-slide > div {
          overflow: hidden;
        }
        .progress-ring {
          transition: stroke-dashoffset 0.4s ease;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <div
          className={`faq-fade-up mb-16 md:mb-20 ${visible ? "visible" : ""}`}
          style={{ transitionDelay: "0ms" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              // questions
            </span>
            <div className="h-px flex-1 max-w-[48px] bg-border" />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05]"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Everything you
            <br />
            <span className="text-primary">need to know</span>
          </h2>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start">

          {/* LEFT — Question list */}
          <div className="lg:col-span-2 flex flex-col gap-1">
            {faqs.map((faq, i) => {
              const isOpen = openId === faq.id
              return (
                <button
                  key={faq.id}
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className={`faq-fade-up faq-item-bar relative text-left pl-5 pr-4 py-4 rounded-lg transition-all duration-200 group ${
                    isOpen ? "active bg-secondary" : "hover:bg-secondary/50"
                  } ${visible ? "visible" : ""}`}
                  style={{
                    transitionDelay: `${80 + i * 60}ms`,
                    fontFamily: "'Sora', sans-serif",
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`text-sm md:text-base font-semibold leading-snug transition-colors duration-200 ${
                        isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
                      }`}
                    >
                      {faq.question}
                    </span>
                    {/* animated arrow */}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="shrink-0 transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
                    >
                      <path
                        d="M6 3l5 5-5 5"
                        stroke={isOpen ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Mobile inline answer */}
                  <div className={`answer-slide lg:hidden mt-1 ${isOpen ? "open" : ""}`}>
                    <div>
                      <p
                        className="pt-2 text-sm text-muted-foreground leading-relaxed"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* RIGHT — Answer panel (desktop only) */}
          <div
            className={`faq-fade-up hidden lg:flex lg:col-span-3 flex-col justify-between min-h-[320px] rounded-2xl border border-border p-10 bg-secondary/40 ${
              visible ? "visible" : ""
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {activeFaq ? (
              <>
                {/* counter */}
                <div className="flex items-center gap-3 mb-8">
                  <span
                    className="text-xs font-medium text-muted-foreground tracking-widest"
                    style={{ fontFamily: "'Fira Code', monospace" }}
                  >
                    {String(faqs.findIndex((f) => f.id === activeFaq.id) + 1).padStart(2, "0")}
                    &nbsp;/&nbsp;
                    {String(faqs.length).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                  {/* dot indicators */}
                  <div className="flex gap-1.5">
                    {faqs.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setOpenId(f.id)}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: openId === f.id ? "20px" : "6px",
                          height: "6px",
                          background:
                            openId === f.id
                              ? "hsl(var(--primary))"
                              : "hsl(var(--border))",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Question */}
                <h3
                  key={`q-${activeFaq.id}`}
                  className="text-xl md:text-2xl font-bold text-foreground mb-5 leading-snug"
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    animation: "fadeSlideIn 0.35s ease forwards",
                  }}
                >
                  {activeFaq.question}
                </h3>

                {/* Answer */}
                <p
                  key={`a-${activeFaq.id}`}
                  className="text-base text-muted-foreground leading-relaxed flex-1"
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    animation: "fadeSlideIn 0.45s ease 0.05s forwards",
                    opacity: 0,
                  }}
                >
                  {activeFaq.answer}
                </p>

                {/* Nav arrows */}
                <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
                  <button
                    onClick={() => {
                      const idx = faqs.findIndex((f) => f.id === openId)
                      if (idx > 0) setOpenId(faqs[idx - 1].id)
                    }}
                    disabled={faqs.findIndex((f) => f.id === openId) === 0}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary disabled:opacity-25 transition-colors duration-200"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Previous
                  </button>
                  <button
                    onClick={() => {
                      const idx = faqs.findIndex((f) => f.id === openId)
                      if (idx < faqs.length - 1) setOpenId(faqs[idx + 1].id)
                    }}
                    disabled={faqs.findIndex((f) => f.id === openId) === faqs.length - 1}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary disabled:opacity-25 transition-colors duration-200"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    Next
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <p className="text-muted-foreground text-sm" style={{ fontFamily: "'Sora', sans-serif" }}>
                Select a question to read the answer.
              </p>
            )}
          </div>
        </div>

        {/* ── Bottom CTA ── */}

      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}