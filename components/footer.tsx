'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUpRight, Zap } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
const [hoveredLink, setHoveredLink] = useState<string | null>(null) 
 
const footerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }
    const footer = footerRef.current
    if (footer) footer.addEventListener('mousemove', handleMouseMove)
    return () => { if (footer) footer.removeEventListener('mousemove', handleMouseMove) }
  }, [])

  const programs = [
    { label: 'AWS Training', tag: 'HOT' },
    { label: 'Python Development', tag: null },
    { label: 'Java Development', tag: null },
    { label: 'Full-Stack Development', tag: 'NEW' },
  ]

  const resources = ['Blog', 'Success Stories', 'FAQ', 'Pricing']

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        .ztc-footer {
          --bg: #0a0a0f;
          --fg: #0d0d14;
          --primary: #ff5e1a;
          --primary-dim: rgba(255, 94, 26, 0.15);
          --border: rgba(255,255,255,0.07);
          --text-muted: rgba(255,255,255,0.4);
          --text-mid: rgba(255,255,255,0.65);
          background: var(--bg);
          font-family: 'DM Mono', monospace;
          position: relative;
          overflow: hidden;
        }

        /* Spotlight glow following mouse */
        .ztc-spotlight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          transition: opacity 0.3s;
        }

        /* Top divider — animated scanline */
        .ztc-scanline {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--primary) 40%, #ff9a00 60%, transparent 100%);
          background-size: 200% 100%;
          animation: scanSlide 3s linear infinite;
        }
        @keyframes scanSlide {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }

        /* Big brand stamp */
        .ztc-brand-stamp {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(3.5rem, 9vw, 7rem);
          letter-spacing: -0.04em;
          line-height: 0.9;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.08);
          user-select: none;
          pointer-events: none;
          position: absolute;
          bottom: 3.5rem;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          z-index: 0;
        }

        /* Grid layout */
        .ztc-grid {
          display: grid;
          grid-template-columns: 1fr 1px 1fr 1px 1fr 1px 1fr;
          gap: 0;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 900px) {
          .ztc-grid {
            grid-template-columns: 1fr;
          }
          .ztc-divider-v { display: none; }
          .ztc-col { border-bottom: 1px solid var(--border) !important; border-right: none !important; }
        }

        .ztc-divider-v {
          background: var(--border);
          width: 1px;
        }

        .ztc-col {
          padding: 2.5rem 2rem;
          position: relative;
        }

        /* Section label */
        .ztc-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .ztc-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--primary-dim);
        }

        /* Logo block */
        .ztc-logo-mark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          height: 2.75rem;
          background: var(--primary);
          border-radius: 6px;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.25rem;
          color: white;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }
        .ztc-logo-mark::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%);
        }
        .ztc-logo-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.15rem;
          letter-spacing: -0.02em;
          color: white;
        }

        /* Program links */
        .ztc-prog-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.65rem 0;
          border-bottom: 1px solid var(--border);
          color: var(--text-mid);
          text-decoration: none;
          font-size: 0.8rem;
          transition: color 0.2s, padding-left 0.2s;
          cursor: pointer;
        }
        .ztc-prog-link:hover {
          color: white;
          padding-left: 0.4rem;
        }
        .ztc-prog-link:hover .prog-arrow { opacity: 1; transform: translate(2px, -2px); color: var(--primary); }
        .prog-arrow { opacity: 0; transition: opacity 0.2s, transform 0.2s; }

        .ztc-tag {
          font-size: 0.55rem;
          letter-spacing: 0.1em;
          padding: 2px 6px;
          border-radius: 3px;
          font-weight: 500;
          background: var(--primary-dim);
          color: var(--primary);
          border: 1px solid rgba(255,94,26,0.3);
        }

        /* Resource pills */
        .ztc-res-link {
          display: block;
          padding: 0.5rem 0.9rem;
          margin-bottom: 0.5rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          color: var(--text-mid);
          font-size: 0.78rem;
          text-decoration: none;
          transition: all 0.2s;
          width: fit-content;
        }
        .ztc-res-link:hover {
          background: var(--primary-dim);
          border-color: rgba(255,94,26,0.4);
          color: white;
          transform: translateX(4px);
        }

        /* Contact items */
        .ztc-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .ztc-contact-icon {
          width: 2rem;
          height: 2rem;
          border: 1px solid var(--border);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--primary);
          background: var(--primary-dim);
        }
        .ztc-contact-text {
          font-size: 0.78rem;
          color: var(--text-mid);
          line-height: 1.5;
        }
        .ztc-contact-text a:hover { color: var(--primary); }
        .ztc-contact-text a { color: inherit; text-decoration: none; transition: color 0.2s; }

        /* Social */
        .ztc-socials { display: flex; gap: 0.75rem; margin-top: 1.5rem; }
        .ztc-social-btn {
          width: 2.2rem;
          height: 2.2rem;
          border: 1px solid var(--border);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: all 0.2s;
          text-decoration: none;
        }
        .ztc-social-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: var(--primary-dim);
          transform: translateY(-2px);
        }

        /* Tagline ticker */
        .ztc-ticker-wrap {
          overflow: hidden;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 0.6rem 0;
          position: relative;
          z-index: 1;
        }
        .ztc-ticker {
          display: flex;
          gap: 3rem;
          animation: tickerMove 18s linear infinite;
          white-space: nowrap;
          width: max-content;
        }
        @keyframes tickerMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ztc-ticker-item {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .ztc-ticker-dot {
          width: 4px;
          height: 4px;
          background: var(--primary);
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* Bottom bar */
        .ztc-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2rem;
          position: relative;
          z-index: 1;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .ztc-bottom-copy {
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }
        .ztc-bottom-links {
          display: flex;
          gap: 1.5rem;
        }
        .ztc-bottom-link {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }
        .ztc-bottom-link:hover { color: var(--primary); }

        /* Status chip */
        .ztc-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.65rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }
        .ztc-status-dot {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 6px #22c55e;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* Noise overlay */
        .ztc-noise {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px;
        }
      `}</style>

      <footer className="ztc-footer" ref={footerRef}>
        {/* Noise texture */}
        <div className="ztc-noise" />

        {/* Mouse spotlight */}
        <div
          className="ztc-spotlight"
          style={{
            background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,94,26,0.06) 0%, transparent 70%)`
          }}
        />

        {/* Watermark brand name */}
        <div className="ztc-brand-stamp" aria-hidden="true">ZEROTWOCODE</div>

        {/* Scanline top border */}
        <div className="ztc-scanline" />

        {/* Main content grid */}
        <div className="ztc-grid">
          {/* Col 1 — Brand */}
          <div className="ztc-col">
            <div className="ztc-label">
              <Zap size={10} />
              Est. 2024
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div className="ztc-logo-mark">Z</div>
              <span className="ztc-logo-name">ZeroTwoCode</span>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', marginBottom: '0.5rem' }}>
              Industry-oriented IT training for career transformation.
            </p>
            <div className="ztc-socials">
              <a href="#" className="ztc-social-btn" aria-label="LinkedIn"><Linkedin size={14} /></a>
              <a href="#" className="ztc-social-btn" aria-label="Twitter"><Twitter size={14} /></a>
              <a href="#" className="ztc-social-btn" aria-label="Facebook"><Facebook size={14} /></a>
            </div>
          </div>

          <div className="ztc-divider-v" />

          {/* Col 2 — Programs */}
          <div className="ztc-col">
            <div className="ztc-label">Programs</div>
            {programs.map((p, i) => (
              <a
                key={i}
                href="#"
                className="ztc-prog-link"
                onMouseEnter={() => setHoveredLink(p.label)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {p.label}
                  {p.tag && <span className="ztc-tag">{p.tag}</span>}
                </span>
                <ArrowUpRight size={13} className="prog-arrow" />
              </a>
            ))}
          </div>

          <div className="ztc-divider-v" />

          {/* Col 3 — Resources */}
          <div className="ztc-col">
            <div className="ztc-label">Resources</div>
            {resources.map((r, i) => (
              <a key={i} href="#" className="ztc-res-link">{r}</a>
            ))}
          </div>

          <div className="ztc-divider-v" />

          {/* Col 4 — Contact */}
          <div className="ztc-col">
            <div className="ztc-label">Contact</div>
            <div className="ztc-contact-item">
              <div className="ztc-contact-icon"><Mail size={13} /></div>
              <div className="ztc-contact-text">
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: '2px' }}>EMAIL</div>
                <a href="mailto:info@zerotwocode.com">info@zerotwocode.com</a>
              </div>
            </div>
            <div className="ztc-contact-item">
              <div className="ztc-contact-icon"><Phone size={13} /></div>
              <div className="ztc-contact-text">
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: '2px' }}>PHONE</div>
                <a href="tel:+919876543210">+91 9876543210</a>
              </div>
            </div>
            <div className="ztc-contact-item">
              <div className="ztc-contact-icon"><MapPin size={13} /></div>
              <div className="ztc-contact-text">
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: '2px' }}>LOCATION</div>
                New Delhi, India
              </div>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="ztc-ticker-wrap">
          <div className="ztc-ticker">
            {[
              'AWS Training', 'Python Development', 'Java Development',
              'Full-Stack Dev', 'Career Transformation', 'Industry Mentors',
              'AWS Training', 'Python Development', 'Java Development',
              'Full-Stack Dev', 'Career Transformation', 'Industry Mentors',
            ].map((item, i) => (
              <span key={i} className="ztc-ticker-item">
                <span className="ztc-ticker-dot" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ztc-bottom">
          <span className="ztc-bottom-copy">© {currentYear} ZeroTwoCode. All rights reserved.</span>
          <div className="ztc-status">
            <span className="ztc-status-dot" />
            All systems operational
          </div>
          <div className="ztc-bottom-links">
            <a href="#" className="ztc-bottom-link">Privacy</a>
            <a href="#" className="ztc-bottom-link">Terms</a>
            <a href="#" className="ztc-bottom-link">Cookies</a>
          </div>
        </div>
      </footer>
    </>
  )
}