'use client'

import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import LearningPaths from '@/components/learning-paths'
import FeaturesSection from '@/components/features-section'
import WhyChooseUs from '@/components/why-choose-us'
import PricingSection from '@/components/pricing-section'
import TestimonialsSection from '@/components/testimonials-section'
import FAQSection from '@/components/faq-section'
import ContactForm from '@/components/contact-form'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <HeroSection />
        <LearningPaths />
        <FeaturesSection />
        <WhyChooseUs />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactForm />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
