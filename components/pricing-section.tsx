"use client"

import { useEffect, useRef, useState } from "react"
import { pricing } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Check, Zap } from "lucide-react"

export default function PricingSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-20 md:py-32 bg-background overflow-hidden"
    >
      {/* Grid background */}
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

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-border" />
            <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-muted-foreground">
              // pricing
            </span>
            <div className="h-px w-10 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4">
            Choose your
            <br />
            <span className="text-primary">training program</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Pick the best learning program designed to boost your career and industry skills.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {pricing.map((plan, i) => {
            const isPopular = plan.isPopular

            return (
              <div
                key={plan.id}
                className={`
                  relative rounded-2xl border bg-white flex flex-col transition-all duration-500
                  ${isPopular
                    ? "border-primary/40 shadow-2xl md:-translate-y-4 z-10"
                    : "border-border hover:-translate-y-1 hover:shadow-lg"
                  }
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                {/* Popular glow strip at top */}
                {isPopular && (
                  <div className="absolute -top-px left-6 right-6 h-[3px] rounded-full bg-primary" />
                )}

                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-primary text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                      <Zap size={11} className="fill-white" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1 gap-6">

                  {/* Plan badge */}
                  {plan.badge && (
                    <span className="self-start text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-primary border border-primary/20">
                      {plan.badge}
                    </span>
                  )}

                  {/* Title + description */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-xl font-bold text-foreground">{plan.title}</h3>
                      <span className="text-xs font-mono text-muted-foreground/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {plan.description && (
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-extrabold ${isPopular ? "text-primary" : "text-foreground"}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-muted-foreground mb-1.5">/{plan.period}</span>
                    )}
                  </div>

                  {/* Divider */}
                  <div className={`h-px w-full ${isPopular ? "bg-primary/15" : "bg-border"}`} />

                  {/* Features */}
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <span className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                          isPopular ? "bg-primary/10" : "bg-secondary"
                        }`}>
                          <Check size={10} className="text-primary" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-muted-foreground leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className={`w-full font-semibold py-5 rounded-xl mt-2 transition-all duration-200 ${
                      isPopular
                        ? "bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        : "bg-secondary hover:bg-secondary/80 text-foreground border border-border hover:border-primary/30"
                    }`}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className={`text-center text-sm text-muted-foreground mt-10 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          All plans include a{" "}
          <span className="font-medium text-foreground">7-day money-back guarantee.</span>{" "}
          No questions asked.
        </p>

      </div>
    </section>
  )
}