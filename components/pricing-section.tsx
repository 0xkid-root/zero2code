import { pricing } from '@/lib/data'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Simple plans for serious learners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your learning journey
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <Card
              key={plan.id}
              className={`p-8 border-border transition-smooth ${
                plan.isPopular
                  ? 'ring-2 ring-primary shadow-lg'
                  : 'hover:shadow-lg'
              }`}
              style={{ animation: `bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.15}s backwards` }}
            >
              {plan.isPopular && (
                <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  {plan.originalPrice && (
                    <p className="text-sm text-muted-foreground line-through">
                      {plan.originalPrice}
                    </p>
                  )}
                </div>

                <Button
                  className={`w-full py-6 rounded-full font-semibold transition-smooth hover:shadow-lg group ${
                    plan.isPopular
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'border border-primary text-primary hover:bg-secondary'
                  }`}
                >
                  Get Started
                  {plan.isPopular && <span className="animate-pulse ml-2">→</span>}
                </Button>

                <div className="space-y-3 pt-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-muted-foreground">
            All plans include 7-day money-back guarantee and lifetime access to materials
          </p>
          <p className="text-sm text-muted-foreground">
            Need a custom plan? <span className="text-primary font-semibold cursor-pointer">Contact our team</span>
          </p>
        </div>
      </div>
    </section>
  )
}
