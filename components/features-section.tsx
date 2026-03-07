import { features, benefits, formats } from '@/lib/data'
import { Card } from '@/components/ui/card'

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 space-y-24">
        {/* Why Choose Section */}
        <div className="space-y-8">
          <div className="text-center space-y-3 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why choose ZeroTwoCode?
            </h2>
            <p className="text-base text-muted-foreground">
              We address the core challenges of tech learning with structured, expert-led programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={feature.id} className="p-8 border border-border/50 bg-white transition-smooth hover:shadow-lg hover:border-primary/30 hover:-translate-y-2 group" style={{ animation: `slide-up 0.6s ease-out ${index * 0.1}s backwards` }}>
                <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="space-y-8">
          <div className="text-center space-y-3 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Built for outcomes, not just classroom hours
            </h2>
            <p className="text-base text-muted-foreground">
              Every aspect of our program is designed to ensure your success in the tech industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={benefit.id} className="p-6 border border-border/50 bg-white transition-smooth hover:shadow-lg hover:border-primary/30 hover:-translate-y-2 group" style={{ animation: `bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.1}s backwards` }}>
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-sm animate-icon-bounce">{benefit.id}</span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Flexible Formats Section */}
        <div className="space-y-8">
          <div className="text-center space-y-3 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Flexible formats for every stage of learning
            </h2>
            <p className="text-base text-muted-foreground">
              Choose the training schedule that works best for your lifestyle and commitments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((format, index) => (
              <Card key={format.id} className="p-6 border border-border/50 bg-white transition-smooth hover:shadow-lg hover:border-primary/30 hover:-translate-y-2 group" style={{ animation: `rotate-in 0.6s ease-out ${index * 0.1}s backwards` }}>
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {format.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors">
                  {format.description}
                </p>
                <p className="text-sm font-semibold text-primary">
                  {format.timing}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
