import { faqs } from '@/lib/data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Everything students usually ask first
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our programs
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`faq-${faq.id}`}
              className="border border-border rounded-lg px-6 data-[state=open]:bg-secondary transition"
            >
              <AccordionTrigger className="text-foreground font-semibold hover:text-primary py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Support */}
        {/* <div className="mt-12 text-center bg-secondary rounded-lg p-8">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-4">
            Our support team is here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@skillmanthan.com"
              className="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition"
            >
              Email Us
            </a>
            <a
              href="#contact"
              className="px-6 py-2 border border-primary text-primary rounded-full font-semibold hover:bg-white transition"
            >
              Schedule Call
            </a>
          </div>
        </div> */}
      </div>
    </section>
  )
}
