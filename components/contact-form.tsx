'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle, AlertCircle } from 'lucide-react'

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ status: 'idle' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'aws',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ status: 'loading' })

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setFormState({
        status: 'success',
        message: 'Thank you for your interest! Well contact you shortly.',
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'aws',
        message: '',
      })
    } catch {
      setFormState({
        status: 'error',
        message: 'Something went wrong. Please try again.',
      })
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-2xl mx-auto px-4">
        <Card className="p-8 md:p-12 border-border">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Talk to our team and choose the right program
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          {formState.status === 'success' ? (
            <div className="space-y-4 text-center py-8">
              <CheckCircle className="w-16 h-16 text-primary mx-auto" />
              <h3 className="text-xl font-semibold text-foreground">
                {formState.message}
              </h3>
              <button
                onClick={() => setFormState({ status: 'idle' })}
                className="text-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Interested In
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="aws">AWS Track</option>
                    <option value="python">Python Development</option>
                    <option value="java">Java Development</option>
                    <option value="android">Android Development</option>
                    <option value="digital">Digital Marketing</option>
                    <option value="fullstack">Full-Stack Development</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific questions or requirements?"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {formState.status === 'error' && (
                <div className="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="text-red-600 mt-0.5 flex-shrink-0" size={18} />
                  <p className="text-sm text-red-800">{formState.message}</p>
                </div>
              )}

              <Button
                type="submit"
                disabled={formState.status === 'loading'}
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-lg font-semibold"
              >
                {formState.status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Your information will only be used to contact you about your inquiry.
              </p>
            </form>
          )}
        </Card>
      </div>
    </section>
  )
}
