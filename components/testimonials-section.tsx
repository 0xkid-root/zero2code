import { testimonials } from '@/lib/data'
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Students who turned training into momentum
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real success stories from professionals who transformed their careers with ZeroTwoCode
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="p-8 border-border bg-white space-y-4 transition-smooth hover:shadow-lg hover:border-primary/30 hover:-translate-y-2 group" style={{ animation: `fade-scale 0.6s ease-out ${index * 0.1}s backwards` }}>
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary transition-transform group-hover:scale-110"
                    style={{ transitionDelay: `${i * 0.05}s` }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-base leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 group-hover:animate-pulse transition-transform">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
