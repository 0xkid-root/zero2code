import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
              Ready to start your training journey?
            </h2>
            <p className="text-lg text-white/90">
              Join thousands of professionals who have transformed their careers through industry-focused training
            </p>

            <div className="space-y-3">
              {[
                'Industry-aligned curriculum',
                'Expert mentors with 10+ years experience',
                'Job placement assistance',
                'Lifetime access to materials',
                '7-day money-back guarantee'
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-center">
                  <CheckCircle2 size={20} className="text-white flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <Button className="bg-white hover:bg-white/90 text-primary rounded-full px-8 py-6 font-semibold text-base gap-2">
              Start Learning Today <ArrowRight size={20} />
            </Button>
          </div>

          {/* Right Stats */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
              <p className="text-white/70 text-sm mb-1">Placement Rate</p>
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-white/70 text-sm mt-2">within 6 months of completion</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
              <p className="text-white/70 text-sm mb-1">Average Salary Growth</p>
              <p className="text-3xl font-bold text-white">+45%</p>
              <p className="text-white/70 text-sm mt-2">first year after training</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
              <p className="text-white/70 text-sm mb-1">Active Learners</p>
              <p className="text-3xl font-bold text-white">5,000+</p>
              <p className="text-white/70 text-sm mt-2">trained successfully</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
