'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="bg-background py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4 animate-slide-left">
              <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-semibold text-foreground animate-fade-scale">
                Transform Your Tech Career
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-foreground leading-tight text-balance">
                Industry-Oriented IT Training Programs
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg text-pretty">
                Learn from expert instructors and gain hands-on experience with the latest technologies. Join thousands of students who transformed their careers with ZeroTwoCode.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth hover:shadow-lg hover:shadow-primary/30 stagger-1" style={{ animation: 'slide-up 0.6s ease-out 0.2s backwards' }}>
                Start Learning Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-border hover:bg-secondary transition-smooth hover:shadow-lg stagger-2"
                style={{ animation: 'slide-up 0.6s ease-out 0.3s backwards' }}
              >
                <Play className="w-4 h-4 animate-icon-bounce" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right - Orbital Animation */}
          <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center animate-slide-right">
            {/* Central Student Image */}
            <div className="relative w-48 h-48 z-10 animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-xl border border-primary/20 overflow-hidden shadow-2xl hover:shadow-2xl transition-smooth hover:border-primary/40">
                <Image
                  src="/student-hero.jpg"
                  alt="Student"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Orbit 1 - Fastest */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full border border-dashed border-primary/30" style={{ animation: 'spin 20s linear infinite' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-card rounded-lg shadow-lg flex items-center justify-center border border-border">
                    <span className="text-xl">🐍</span>
                  </div>
                </div>
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-card rounded-lg shadow-lg flex items-center justify-center border border-border">
                    <span className="text-xl">☁️</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-12 h-12 bg-card rounded-lg shadow-lg flex items-center justify-center border border-border">
                    <span className="text-xl">⚙️</span>
                  </div>
                </div>
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-card rounded-lg shadow-lg flex items-center justify-center border border-border">
                    <span className="text-xl">📊</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbit 2 - Medium */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full border border-dotted border-accent/20" style={{ animation: 'spin 40s linear infinite reverse' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-11 h-11 bg-secondary rounded-lg shadow-lg flex items-center justify-center border border-border text-sm">
                    <span>🚀</span>
                  </div>
                </div>
                <div className="absolute bottom-1/4 right-0 translate-x-1/2">
                  <div className="w-11 h-11 bg-secondary rounded-lg shadow-lg flex items-center justify-center border border-border text-sm">
                    <span>💻</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-11 h-11 bg-secondary rounded-lg shadow-lg flex items-center justify-center border border-border text-sm">
                    <span>🎓</span>
                  </div>
                </div>
                <div className="absolute top-1/4 left-0 -translate-x-1/2">
                  <div className="w-11 h-11 bg-secondary rounded-lg shadow-lg flex items-center justify-center border border-border text-sm">
                    <span>⚡</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbit 3 - Slowest */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-2xl aspect-square rounded-full border border-dotted border-muted/30" style={{ animation: 'spin 60s linear infinite' }}>
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 bg-card rounded-lg shadow-lg flex items-center justify-center border border-border/50 text-xs">
                    <span>🤖</span>
                  </div>
                </div>
                <div className="absolute bottom-1/3 right-0 translate-x-1/2">
                  <div className="w-10 h-10 bg-card rounded-lg shadow-lg flex items-center justify-center border border-border/50 text-xs">
                    <span>📱</span>
                  </div>
                </div>
                <div className="absolute top-0 left-1/3 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 bg-card rounded-lg shadow-lg flex items-center justify-center border border-border/50 text-xs">
                    <span>🎯</span>
                  </div>
                </div>
                <div className="absolute bottom-0 right-1/4 translate-y-1/2">
                  <div className="w-10 h-10 bg-card rounded-lg shadow-lg flex items-center justify-center border border-border/50 text-xs">
                    <span>🌐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-border">
          <div className="bg-card/40 backdrop-blur-md border border-border rounded-xl p-8 text-center space-y-4 shadow-sm hover:shadow-lg transition-smooth hover:border-primary/50 group stagger-1 animate-bounce-in" style={{ animation: 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s backwards' }}>
            <div className="text-4xl font-bold text-primary group-hover:animate-pulse-glow">98%</div>
            <p className="text-muted-foreground font-semibold">Placement Rate</p>
            <p className="text-sm text-muted-foreground/80">Students secured jobs within 6 months</p>
          </div>

          <div className="bg-card/40 backdrop-blur-md border border-border rounded-xl p-8 text-center space-y-4 shadow-sm hover:shadow-lg transition-smooth hover:border-primary/50 group stagger-2 animate-bounce-in" style={{ animation: 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s backwards' }}>
            <div className="text-4xl font-bold text-primary group-hover:animate-pulse-glow">50K+</div>
            <p className="text-muted-foreground font-semibold">Students Trained</p>
            <p className="text-sm text-muted-foreground/80">Join our thriving community of learners</p>
          </div>

          <div className="bg-card/40 backdrop-blur-md border border-border rounded-xl p-8 text-center space-y-4 shadow-sm hover:shadow-lg transition-smooth hover:border-primary/50 group stagger-3 animate-bounce-in" style={{ animation: 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.6s backwards' }}>
            <div className="text-4xl font-bold text-primary group-hover:animate-pulse-glow">8+</div>
            <p className="text-muted-foreground font-semibold">Expert Courses</p>
            <p className="text-sm text-muted-foreground/80">From AWS to Full-Stack Development</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}
