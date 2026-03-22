'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, AlertCircle, Send, User, Mail, Phone, BookOpen, MessageSquare, Sparkles } from 'lucide-react'

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

function MeshBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <div style={{
        position: 'absolute', top: '-120px', right: '-80px',
        width: '520px', height: '520px', borderRadius: '50%',
        background: 'radial-gradient(circle at 40% 40%, hsl(var(--primary)/0.18), hsl(var(--primary)/0.04) 60%, transparent 80%)',
        filter: 'blur(40px)', animation: 'orbFloat1 8s ease-in-out infinite',
      }}/>
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-60px',
        width: '380px', height: '380px', borderRadius: '50%',
        background: 'radial-gradient(circle at 60% 60%, hsl(var(--primary)/0.12), transparent 70%)',
        filter: 'blur(50px)', animation: 'orbFloat2 10s ease-in-out infinite',
      }}/>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.025 }}>
        <filter id="cfnoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#cfnoise)"/>
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(hsl(var(--primary)/0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
      }}/>
    </div>
  )
}

function FloatingField({ label, icon: Icon, type = 'text', name, value, onChange, required, as: asEl }: {
  label: string; icon: any; type?: string; name: string; value: string;
  onChange: (e: any) => void; required?: boolean; as?: 'textarea';
}) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0

  const containerStyle: React.CSSProperties = {
    position: 'relative', borderRadius: '16px',
    border: `1.5px solid ${focused ? 'hsl(var(--primary))' : 'hsl(var(--border))'}`,
    background: focused ? 'hsl(var(--background))' : 'rgba(255,255,255,0.5)',
    boxShadow: focused ? '0 0 0 4px hsl(var(--primary)/0.1), 0 4px 24px hsl(var(--primary)/0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
    transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)', overflow: 'hidden',
  }

  return (
    <div style={containerStyle}>
      <div style={{
        position: 'absolute', left: '14px',
        top: asEl === 'textarea' ? '18px' : '50%',
        transform: asEl === 'textarea' ? 'none' : 'translateY(-50%)',
        color: focused ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
        transition: 'color 0.2s', zIndex: 1,
      }}>
        <Icon size={15}/>
      </div>
      <label style={{
        position: 'absolute', left: '40px', pointerEvents: 'none', zIndex: 1,
        fontSize: lifted ? '10px' : '13px',
        top: asEl === 'textarea' ? (lifted ? '8px' : '18px') : lifted ? '8px' : '50%',
        transform: (asEl === 'textarea' || lifted) ? 'none' : 'translateY(-50%)',
        color: lifted ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
        fontWeight: lifted ? 700 : 400,
        letterSpacing: lifted ? '0.06em' : '0',
        textTransform: lifted ? 'uppercase' : 'none',
        transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
      }}>
        {label}
      </label>
      {asEl === 'textarea' ? (
        <textarea
          name={name} value={value} onChange={onChange} rows={4}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{
            paddingTop: '28px', paddingBottom: '12px', paddingLeft: '40px', paddingRight: '16px',
            width: '100%', background: 'transparent', color: 'hsl(var(--foreground))',
            fontSize: '14px', outline: 'none', border: 'none', resize: 'none', display: 'block',
            fontFamily: 'inherit',
          }}
        />
      ) : (
        <input
          type={type} name={name} value={value} onChange={onChange} required={required}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{
            paddingTop: '22px', paddingBottom: '8px', paddingLeft: '40px', paddingRight: '16px',
            width: '100%', background: 'transparent', color: 'hsl(var(--foreground))',
            fontSize: '14px', outline: 'none', border: 'none', display: 'block',
            fontFamily: 'inherit', boxSizing: 'border-box',
          }}
        />
      )}
    </div>
  )
}

function FloatingSelect({ label, icon: Icon, name, value, onChange, options }: {
  label: string; icon: any; name: string; value: string;
  onChange: (e: any) => void; options: { value: string; label: string }[]
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{
      position: 'relative', borderRadius: '16px',
      border: `1.5px solid ${focused ? 'hsl(var(--primary))' : 'hsl(var(--border))'}`,
      background: focused ? 'hsl(var(--background))' : 'rgba(255,255,255,0.5)',
      boxShadow: focused ? '0 0 0 4px hsl(var(--primary)/0.1)' : '0 1px 4px rgba(0,0,0,0.04)',
      transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: focused ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))', transition: 'color 0.2s', zIndex: 1 }}>
        <Icon size={15}/>
      </div>
      <label style={{ position: 'absolute', left: '40px', top: '8px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'hsl(var(--primary))', pointerEvents: 'none', zIndex: 1 }}>
        {label}
      </label>
      <select
        name={name} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          paddingTop: '22px', paddingBottom: '8px', paddingLeft: '40px', paddingRight: '40px',
          width: '100%', background: 'transparent', color: 'hsl(var(--foreground))',
          fontSize: '14px', outline: 'none', border: 'none', appearance: 'none',
          cursor: 'pointer', display: 'block', fontFamily: 'inherit',
        }}
      >
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'hsl(var(--muted-foreground))' }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
    </div>
  )
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ status: 'idle' })
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: 'aws', message: '' })
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setTimeout(() => setMounted(true), 60) }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ status: 'loading' })
    await new Promise(r => setTimeout(r, 1500))
    setFormState({ status: 'success', message: "We'll be in touch within 24 hours." })
    setFormData({ name: '', email: '', phone: '', course: 'aws', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(p => ({ ...p, [name]: value }))
  }

  const courseOptions = [
    { value: 'summerTraining', label: 'Summer Training' },
    { value: 'winterTraining', label: 'Winter Training' },
    { value: 'apprenticeship', label: 'Apprenticeship' },
    { value: 'vocational', label: 'Vocational Training' },
    
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&display=swap');
        @keyframes orbFloat1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-20px,30px) scale(1.05)} 66%{transform:translate(15px,-15px) scale(0.97)} }
        @keyframes orbFloat2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(25px,-20px) scale(1.08)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scaleIn { from{opacity:0;transform:scale(0.9)} to{opacity:1;transform:scale(1)} }
        @keyframes pulseRing { 0%{transform:scale(1);opacity:0.5} 100%{transform:scale(1.9);opacity:0} }
        @keyframes spin { to{transform:rotate(360deg)} }
        @keyframes gradientTitle { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
      `}</style>

      <section style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '80px 16px',
        background: 'hsl(var(--background))',
        fontFamily: "'DM Sans', sans-serif",
        overflow: 'hidden',
      }}>
        <MeshBackground/>

        <div style={{
          position: 'relative', zIndex: 1, width: '100%', maxWidth: '620px',
          opacity: mounted ? 1 : 0,
          animation: mounted ? 'fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) forwards' : 'none',
        }}>

          {/* Hero text */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px', borderRadius: '100px',
              border: '1.5px solid hsl(var(--primary)/0.25)',
              background: 'hsl(var(--primary)/0.06)',
              color: 'hsl(var(--primary))', fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px',
            }}>
              <Sparkles size={12}/>
              Start Your Journey
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05]"
            style={{ fontFamily: "'Sora', sans-serif" }}>
              Let's{' '}
              <span className='text-primary'>talk.</span>
            </h1>

            <p style={{ fontSize: '16px', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto' }}>
              Our team will guide you to the perfect program. Response guaranteed within 24 hours.
            </p>
          </div>

          {/* Card */}
          {formState.status === 'success' ? (
            <div style={{
              borderRadius: '28px', border: '1.5px solid hsl(var(--border))',
              background: 'hsl(var(--background))',
              boxShadow: '0 32px 80px -12px rgba(0,0,0,0.12)',
              padding: '64px 48px', textAlign: 'center',
              animation: 'scaleIn 0.4s cubic-bezier(0.4,0,0.2,1) forwards',
            }}>
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: '28px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'hsl(var(--primary)/0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <CheckCircle size={36} color="hsl(var(--primary))"/>
                </div>
                <div style={{ position: 'absolute', inset: '-10px', borderRadius: '50%', border: '2px solid hsl(var(--primary)/0.3)', animation: 'pulseRing 1.5s ease-out infinite' }}/>
                <div style={{ position: 'absolute', inset: '-20px', borderRadius: '50%', border: '2px solid hsl(var(--primary)/0.15)', animation: 'pulseRing 1.5s ease-out 0.4s infinite' }}/>
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: 800, color: 'hsl(var(--foreground))', margin: '0 0 12px' }}>
                Message Sent! 🎉
              </h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '15px', marginBottom: '32px' }}>
                {formState.message}
              </p>
              <button
                onClick={() => setFormState({ status: 'idle' })}
                style={{
                  background: 'hsl(var(--primary)/0.08)', color: 'hsl(var(--primary))',
                  border: '1.5px solid hsl(var(--primary)/0.2)', borderRadius: '12px',
                  padding: '10px 24px', fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                Send another →
              </button>
            </div>
          ) : (
            <div style={{
              borderRadius: '28px',
              border: '1.5px solid hsl(var(--border))',
              background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              boxShadow: '0 32px 80px -12px rgba(0,0,0,0.1), 0 0 0 1px hsl(var(--primary)/0.04), inset 0 1px 0 rgba(255,255,255,0.8)',
              padding: '48px',
            }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <FloatingField label="Full Name" icon={User} name="name" value={formData.name} onChange={handleChange} required/>
                  <FloatingField label="Email Address" icon={Mail} type="email" name="email" value={formData.email} onChange={handleChange} required/>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <FloatingField label="Phone Number" icon={Phone} type="tel" name="phone" value={formData.phone} onChange={handleChange}/>
                  <FloatingSelect label="Interested In" icon={BookOpen} name="course" value={formData.course} onChange={handleChange} options={courseOptions}/>
                </div>

                <FloatingField label="Your Message (Optional)" icon={MessageSquare} name="message" value={formData.message} onChange={handleChange} as="textarea"/>

                {formState.status === 'error' && (
                  <div style={{ display: 'flex', gap: '12px', padding: '14px 16px', background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '12px' }}>
                    <AlertCircle size={16} color="rgb(239,68,68)" style={{ flexShrink: 0, marginTop: '1px' }}/>
                    <p style={{ fontSize: '13px', color: 'rgb(185,28,28)', margin: 0 }}>{formState.message}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState.status === 'loading'}
                  className="
                    relative overflow-hidden mt-2 w-full
                    flex items-center justify-center gap-3
                    bg-primary hover:bg-primary/90
                    text-primary-foreground font-bold text-base tracking-wide
                    py-5 px-8 rounded-2xl border-none
                    shadow-[0_8px_32px_hsl(var(--primary)/0.35)]
                    hover:shadow-[0_16px_48px_hsl(var(--primary)/0.45)]
                    hover:-translate-y-0.5
                    active:translate-y-0
                    transition-all duration-300 ease-out
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0
                    group cursor-pointer
                  "
                >
                  {/* Shine sweep on hover */}
                  <div className="
                    absolute inset-0 pointer-events-none
                    bg-gradient-to-r from-transparent via-white/20 to-transparent
                    -translate-x-full group-hover:translate-x-full
                    transition-transform duration-700 ease-out skew-x-12
                  "/>
                  {formState.status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3"/>
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"/>
                    </>
                  )}
                </button>

                <p style={{ textAlign: 'center', fontSize: '12px', color: 'hsl(var(--muted-foreground))', margin: '4px 0 0' }}>
                  🔒 100% private — we never share your data
                </p>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}