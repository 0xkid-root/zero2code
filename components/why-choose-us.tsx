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
    icon: Diamond,
  },
  {
    id: 2,
    title: 'Expert Mentorship',
    description: 'Get guidance from experienced mentors who support your learning journey at every step.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-200/50',
    icon: Clock,
  },
  {
    id: 3,
    title: 'Real-World Projects',
    description: 'Work on practical projects that simulate real industry scenarios and challenges.',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-200/50',
    icon: Hand,
  },
  {
    id: 4,
    title: 'Career Support',
    description: 'Get comprehensive placement support and interview preparation guidance from experts.',
    color: 'from-slate-400 to-slate-500',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-200/50',
    icon: Heart,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Layout Container */}
        <div className="relative grid md:grid-cols-[1fr_1.2fr] gap-8 lg:gap-20 items-center min-h-96">
          {/* Left: Central Circle with Background */}
          <div className="relative flex items-center justify-center">
            {/* Soft Background Circle */}
            <div className="absolute -inset-24 rounded-full bg-gradient-to-br from-secondary/40 to-secondary/10 blur-3xl"></div>

            {/* Main Circle */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary via-primary/95 to-primary/85 shadow-2xl flex items-center justify-center z-10 hover:shadow-3xl transition-shadow duration-300">
              <div className="text-center px-8">
                <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
                  WHY<br />
                  CHOOSE<br />
                  ZEROTWOCODE
                </h2>
              </div>
            </div>
          </div>

          {/* Right: Feature Items with Enhanced Design */}
          <div className="relative space-y-8 md:space-y-10">
            {/* Background text watermark */}
            <div className="absolute -top-20 -right-40 text-8xl md:text-9xl font-black text-foreground/4 pointer-events-none select-none whitespace-nowrap">
              ZEROTWOCODE
            </div>

            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.id}
                  className="relative z-20"
                  style={{
                    animation: `slideInFromLeft 0.6s ease-out ${index * 0.12}s backwards`,
                  }}
                >
                  {/* Feature Item with Enhanced Styling */}
                  <div className="group flex gap-6 items-start transition-all duration-300 hover:-translate-y-1">
                    {/* Icon Circle with Container */}
                    <div className="relative flex-shrink-0">
                      {/* Animated Glow */}
                      <div
                        className={`absolute -inset-3 rounded-full bg-gradient-to-br ${feature.color} opacity-20 blur-xl group-hover:opacity-40 transition-all duration-300`}
                      ></div>

                      {/* Icon Background Circle */}
                      <div
                        className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${feature.color} shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl`}
                      >
                        <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Text Content Container */}
                    <div className={`flex-1 pt-3 px-5 py-4 rounded-xl border transition-all duration-300 ${feature.bgColor} ${feature.borderColor} group-hover:border-opacity-100 group-hover:shadow-md`}>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/75 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>

                    {/* Connecting Line from Icon */}
                    <div className="absolute left-6 top-20 w-px h-8 bg-gradient-to-b from-foreground/20 to-transparent hidden md:block group-hover:from-primary/40 transition-all duration-300"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}
