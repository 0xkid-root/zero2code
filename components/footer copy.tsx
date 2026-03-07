'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUpRight, Zap, ChevronRight } from 'lucide-react'

/* ─── Particle canvas background ─────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    const particles = []
    const COUNT = 80
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,94,26,${p.alpha})`
        ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255,94,26,${0.07 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />
}

/* ─── 3D tilt card ────────────────────────────────────────────── */
function TiltCard({ children, style = {} }) {
  const ref = useRef(null)
  const handleMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02,1.02,1.02)`
  }, [])
  const handleMouseLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)'
  }, [])
  return (
    <div ref={ref} style={{ transition: 'transform 0.15s ease', display: 'inline-block', ...style }}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  )
}

/* ─── Animated counter ────────────────────────────────────────── */
function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0
        const step = to / 60
        const timer = setInterval(() => {
          start += step
          if (start >= to) { setVal(to); clearInterval(timer) }
          else setVal(Math.floor(start))
        }, 16)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [to])
  return <span ref={ref}>{val}{suffix}</span>
}

/* ─── Main Footer ─────────────────────────────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const programs = [
    { name: 'AWS Training', tag: 'HOT', desc: 'Cloud architecture mastery' },
    { name: 'Python Development', tag: null, desc: 'From scripting to AI pipelines' },
    { name: 'Java Development', tag: null, desc: 'Enterprise-grade engineering' },
    { name: 'Full-Stack Development', tag: 'NEW', desc: 'React + Node + DevOps' },
  ]

  const stats = [
    { label: 'Students Placed', value: 2400, suffix: '+' },
    { label: 'Programs Live', value: 12, suffix: '' },
    { label: 'Avg Salary Hike', value: 68, suffix: '%' },
    { label: 'Expert Mentors', value: 40, suffix: '+' },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');

        :root {
          --bg0: #070709;
          --bg1: #0d0d12;
          --bg2: #111118;
          --orange: #ff5e1a;
          --orange-glow: rgba(255,94,26,0.18);
          --orange-dim: rgba(255,94,26,0.08);
          --border: rgba(255,255,255,0.06);
          --border-hot: rgba(255,94,26,0.25);
          --text1: #ffffff;
          --text2: rgba(255,255,255,0.6);
          --text3: rgba(255,255,255,0.3);
        }

        .ztc-root {
          background: var(--bg0);
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
          color: var(--text1);
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .blob-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(255,94,26,0.12), transparent 70%);
          top: -100px; left: -100px;
          animation: blobFloat 12s ease-in-out infinite;
        }
        .blob-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(0,229,255,0.05), transparent 70%);
          bottom: 0; right: 0;
          animation: blobFloat 15s ease-in-out infinite reverse;
        }
        @keyframes blobFloat {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-20px) scale(1.05); }
          66% { transform: translate(-20px,30px) scale(0.97); }
        }

        /* Hero */
        .ztc-hero {
          position: relative; z-index: 1;
          padding: 4rem 3rem 3rem;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
          border-bottom: 1px solid var(--border);
        }
        .ztc-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--orange);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .ztc-eyebrow-line { width: 2rem; height: 1px; background: var(--orange); }
        .ztc-big-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.5rem, 8vw, 6.5rem);
          line-height: 0.9;
          letter-spacing: 0.02em;
          background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.5) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ztc-big-title span {
          -webkit-text-fill-color: transparent;
          background: linear-gradient(135deg, var(--orange) 0%, #ff9a00 100%);
          -webkit-background-clip: text;
          background-clip: text;
        }

        /* Subscribe */
        .ztc-subscribe { display: flex; flex-direction: column; gap: 0.75rem; min-width: 280px; }
        .ztc-sub-label {
          font-size: 0.75rem; color: var(--text3);
          font-family: 'JetBrains Mono', monospace; letter-spacing: 0.1em;
        }
        .ztc-sub-row {
          display: flex; border: 1px solid var(--border-hot);
          border-radius: 8px; overflow: hidden;
          background: var(--bg2); transition: box-shadow 0.3s;
        }
        .ztc-sub-row:focus-within {
          box-shadow: 0 0 0 2px var(--orange-glow), 0 0 30px var(--orange-glow);
        }
        .ztc-sub-input {
          flex: 1; background: transparent; border: none; outline: none;
          padding: 0.7rem 1rem; font-size: 0.8rem; color: var(--text1);
          font-family: 'Outfit', sans-serif;
        }
        .ztc-sub-input::placeholder { color: var(--text3); }
        .ztc-sub-btn {
          padding: 0.7rem 1.25rem;
          background: linear-gradient(135deg, var(--orange) 0%, #ff8c00 100%);
          border: none; cursor: pointer; color: white;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem; letter-spacing: 0.1em;
          transition: opacity 0.2s; white-space: nowrap;
        }
        .ztc-sub-btn:hover { opacity: 0.9; }

        /* Stats */
        .ztc-stats {
          position: relative; z-index: 1;
          display: grid; grid-template-columns: repeat(4,1fr);
          border-bottom: 1px solid var(--border);
        }
        @media(max-width:768px){ .ztc-stats{ grid-template-columns: repeat(2,1fr); } }
        .ztc-stat {
          padding: 1.75rem 2rem;
          border-right: 1px solid var(--border);
          position: relative; overflow: hidden;
        }
        .ztc-stat:last-child { border-right: none; }
        .ztc-stat::before {
          content: ''; position: absolute; inset: 0;
          background: var(--orange-dim);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s cubic-bezier(.22,1,.36,1);
        }
        .ztc-stat:hover::before { transform: scaleX(1); }
        .ztc-stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.5rem; color: var(--orange); line-height: 1; position: relative;
        }
        .ztc-stat-label {
          font-size: 0.7rem; color: var(--text3);
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.12em; text-transform: uppercase;
          margin-top: 0.25rem; position: relative;
        }

        /* Main grid */
        .ztc-main {
          position: relative; z-index: 1;
          display: grid; grid-template-columns: 1.2fr 1fr 0.8fr 1fr;
          border-bottom: 1px solid var(--border);
        }
        @media(max-width:900px){ .ztc-main{ grid-template-columns: 1fr 1fr; } }
        @media(max-width:560px){ .ztc-main{ grid-template-columns: 1fr; } }
        .ztc-cell {
          padding: 2.5rem 2rem;
          border-right: 1px solid var(--border);
        }
        .ztc-cell:last-child { border-right: none; }
        .ztc-section-head {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--text3); margin-bottom: 1.5rem;
          padding-bottom: 0.75rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
        }
        .ztc-section-num { font-size: 0.55rem; color: var(--orange); opacity: 0.5; }

        /* Logo */
        .logo-mark {
          width: 3rem; height: 3rem;
          background: linear-gradient(135deg, var(--orange) 0%, #ff8c00 100%);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; color: white;
          margin-bottom: 1rem;
          box-shadow: 0 0 30px rgba(255,94,26,0.35);
          position: relative; overflow: hidden;
        }
        .logo-mark::after {
          content: ''; position: absolute;
          top: -50%; left: -50%;
          width: 40%; height: 150%;
          background: rgba(255,255,255,0.3);
          transform: skewX(-20deg);
          animation: sheen 4s ease-in-out infinite;
        }
        @keyframes sheen {
          0%,80%,100% { left: -60%; opacity: 0; }
          85% { left: 120%; opacity: 1; }
        }
        .logo-wordmark {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; letter-spacing: 0.05em;
          background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; margin-bottom: 0.75rem;
        }
        .logo-tagline {
          font-size: 0.75rem; color: var(--text3);
          line-height: 1.65; margin-bottom: 1.5rem;
          font-family: 'JetBrains Mono', monospace;
        }

        /* Socials */
        .socials { display: flex; gap: 0.6rem; }
        .social-btn {
          width: 2.25rem; height: 2.25rem;
          border: 1px solid var(--border); border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: var(--text3); text-decoration: none;
          transition: all 0.25s; position: relative; overflow: hidden;
        }
        .social-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, var(--orange) 0%, #ff8c00 100%);
          opacity: 0; transition: opacity 0.25s;
        }
        .social-btn:hover {
          border-color: var(--orange); color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(255,94,26,0.3);
        }
        .social-btn:hover::before { opacity: 1; }
        .social-btn svg { position: relative; z-index: 1; }

        /* Program items */
        .prog-item {
          padding: 0.9rem 0; border-bottom: 1px solid var(--border);
          cursor: pointer;
          transition: padding-left 0.25s cubic-bezier(.22,1,.36,1);
        }
        .prog-item:hover { padding-left: 0.75rem; }
        .prog-item:last-child { border-bottom: none; }
        .prog-name {
          display: flex; align-items: center; justify-content: space-between;
          font-size: 0.85rem; color: var(--text2); transition: color 0.2s; gap: 0.5rem;
        }
        .prog-item:hover .prog-name { color: var(--text1); }
        .prog-item:hover .prog-arrow-icon { color: var(--orange); opacity: 1; transform: translate(3px,-3px); }
        .prog-arrow-icon { opacity: 0; transition: all 0.2s; color: var(--orange); flex-shrink: 0; }
        .prog-desc { font-size: 0.7rem; color: var(--text3); margin-top: 0.25rem; font-family: 'JetBrains Mono', monospace; }
        .prog-tag {
          font-size: 0.55rem; padding: 2px 7px; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace; letter-spacing: 0.1em;
          background: var(--orange-glow); color: var(--orange);
          border: 1px solid var(--border-hot); flex-shrink: 0;
        }

        /* Resource links */
        .res-link {
          display: flex; align-items: center; gap: 0.6rem;
          padding: 0.6rem 0; border-bottom: 1px solid var(--border);
          font-size: 0.82rem; color: var(--text2);
          text-decoration: none; transition: color 0.2s, gap 0.2s;
        }
        .res-link:hover { color: var(--orange); gap: 1rem; }
        .res-link:last-child { border-bottom: none; }
        .res-arrow { transition: transform 0.2s; }
        .res-link:hover .res-arrow { transform: translateX(3px); }

        /* Contact */
        .contact-row { display: flex; align-items: flex-start; gap: 0.85rem; margin-bottom: 1.25rem; }
        .contact-icon-wrap {
          width: 2.25rem; height: 2.25rem;
          border: 1px solid var(--border-hot); border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          background: var(--orange-dim); color: var(--orange);
          flex-shrink: 0; transition: background 0.2s, transform 0.2s;
        }
        .contact-row:hover .contact-icon-wrap { background: var(--orange-glow); transform: scale(1.08); }
        .contact-meta {
          font-size: 0.6rem; font-family: 'JetBrains Mono', monospace;
          color: var(--text3); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 3px;
        }
        .contact-val { font-size: 0.8rem; color: var(--text2); transition: color 0.2s; }
        .contact-row:hover .contact-val { color: var(--text1); }
        .contact-val a { color: inherit; text-decoration: none; }

        /* CTA button */
        .cta-btn {
          display: inline-flex; align-items: center; gap: 0.5rem;
          margin-top: 0.75rem; padding: 0.65rem 1.25rem;
          background: linear-gradient(135deg,#ff5e1a,#ff8c00);
          border-radius: 8px; font-size: 0.75rem; color: white;
          text-decoration: none; font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.1em; transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(255,94,26,0.3);
        }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(255,94,26,0.45); }

        /* Ticker */
        .ztc-ticker-band {
          border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          overflow: hidden; position: relative; z-index: 1; background: var(--bg1);
        }
        .ztc-ticker-inner {
          display: flex; width: max-content;
          animation: ticker 22s linear infinite;
          padding: 0.7rem 0;
        }
        .ztc-ticker-inner:hover { animation-play-state: paused; }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .t-item {
          display: flex; align-items: center; gap: 1rem;
          padding: 0 2.5rem;
          font-family: 'JetBrains Mono', monospace; font-size: 0.62rem;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--text3); white-space: nowrap;
        }
        .t-item strong { color: var(--orange); font-weight: 400; }
        .t-sep { color: var(--orange); opacity: 0.4; }

        /* Bottom bar */
        .ztc-bottom {
          position: relative; z-index: 1;
          padding: 1.25rem 2.5rem;
          display: flex; align-items: center; justify-content: space-between;
          gap: 1rem; flex-wrap: wrap;
        }
        .ztc-copy {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem; color: var(--text3); letter-spacing: 0.08em;
        }
        .ztc-status-pill {
          display: flex; align-items: center; gap: 0.5rem;
          background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.2);
          border-radius: 999px; padding: 0.3rem 0.75rem;
          font-family: 'JetBrains Mono', monospace; font-size: 0.6rem;
          color: rgba(34,197,94,0.8); letter-spacing: 0.1em;
        }
        .status-dot {
          width: 5px; height: 5px; background: #22c55e;
          border-radius: 50%; box-shadow: 0 0 8px #22c55e;
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .ztc-legal-links { display: flex; gap: 1.5rem; }
        .legal-link {
          font-family: 'JetBrains Mono', monospace; font-size: 0.62rem;
          color: var(--text3); text-decoration: none;
          letter-spacing: 0.08em; transition: color 0.2s;
        }
        .legal-link:hover { color: var(--orange); }
      `}</style>

      <footer className="ztc-root">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <ParticleCanvas />

        {/* Hero */}
        <div className="ztc-hero">
          <div>
            <div className="ztc-eyebrow">
              <span className="ztc-eyebrow-line" />
              Transform Your Career
              <span className="ztc-eyebrow-line" />
            </div>
            <div className="ztc-big-title">
              ZERO<span>TWO</span><br />CODE
            </div>
          </div>
          <div className="ztc-subscribe">
            <div className="ztc-sub-label">// get_updates()</div>
            {subscribed ? (
              <div style={{ color: '#22c55e', fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace', padding: '0.75rem 0' }}>
                ✓ You're in. Watch your inbox.
              </div>
            ) : (
              <div className="ztc-sub-row">
                <input
                  className="ztc-sub-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button className="ztc-sub-btn" onClick={() => email && setSubscribed(true)}>
                  SUBSCRIBE →
                </button>
              </div>
            )}
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'JetBrains Mono, monospace' }}>
              No spam. Unsubscribe any time.
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="ztc-stats">
          {stats.map((s, i) => (
            <div className="ztc-stat" key={i}>
              <div className="ztc-stat-num"><Counter to={s.value} suffix={s.suffix} /></div>
              <div className="ztc-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div className="ztc-main">
          {/* Col 1 — Brand */}
          <div className="ztc-cell">
            <div className="ztc-section-head">
              <span>Identity</span>
              <span className="ztc-section-num">01</span>
            </div>
            <TiltCard>
              <div className="logo-mark">Z</div>
            </TiltCard>
            <div className="logo-wordmark">ZeroTwoCode</div>
            <p className="logo-tagline">
              Industry-oriented IT<br />
              training for career<br />
              transformation.
            </p>
            <div className="socials">
              <a href="#" className="social-btn" aria-label="LinkedIn"><Linkedin size={14} /></a>
              <a href="#" className="social-btn" aria-label="Twitter"><Twitter size={14} /></a>
              <a href="#" className="social-btn" aria-label="Facebook"><Facebook size={14} /></a>
            </div>
          </div>

          {/* Col 2 — Programs */}
          <div className="ztc-cell">
            <div className="ztc-section-head">
              <span>Programs</span>
              <span className="ztc-section-num">02</span>
            </div>
            {programs.map((p, i) => (
              <div key={i} className="prog-item">
                <div className="prog-name">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {p.name}
                    {p.tag && <span className="prog-tag">{p.tag}</span>}
                  </span>
                  <ArrowUpRight size={13} className="prog-arrow-icon" />
                </div>
                <div className="prog-desc">{p.desc}</div>
              </div>
            ))}
          </div>

          {/* Col 3 — Resources */}
          <div className="ztc-cell">
            <div className="ztc-section-head">
              <span>Resources</span>
              <span className="ztc-section-num">03</span>
            </div>
            {['Blog', 'Success Stories', 'FAQ', 'Pricing', 'Career Guide'].map((r, i) => (
              <a href="#" key={i} className="res-link">
                <ChevronRight size={12} className="res-arrow" />
                {r}
              </a>
            ))}
          </div>

          {/* Col 4 — Contact */}
          <div className="ztc-cell">
            <div className="ztc-section-head">
              <span>Contact</span>
              <span className="ztc-section-num">04</span>
            </div>
            <div className="contact-row">
              <div className="contact-icon-wrap"><Mail size={13} /></div>
              <div>
                <div className="contact-meta">Email</div>
                <div className="contact-val"><a href="mailto:info@zerotwocode.com">info@zerotwocode.com</a></div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon-wrap"><Phone size={13} /></div>
              <div>
                <div className="contact-meta">Phone</div>
                <div className="contact-val"><a href="tel:+919876543210">+91 9876543210</a></div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon-wrap"><MapPin size={13} /></div>
              <div>
                <div className="contact-meta">Location</div>
                <div className="contact-val">New Delhi, India</div>
              </div>
            </div>
            <a href="#" className="cta-btn">
              <Zap size={13} />
              START LEARNING
            </a>
          </div>
        </div>

        {/* Ticker */}
        <div className="ztc-ticker-band">
          <div className="ztc-ticker-inner">
            {[...Array(2)].map((_, rep) =>
              ['AWS Training', 'Python Dev', 'Java Dev', 'Full-Stack', 'Career Growth', 'Live Mentorship', 'Industry Projects', 'Job Assistance'].map((t, i) => (
                <span key={`${rep}-${i}`} className="t-item">
                  <strong>◈</strong> {t} <span className="t-sep">/</span>
                </span>
              ))
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ztc-bottom">
          <span className="ztc-copy">© {year} ZeroTwoCode — All rights reserved</span>
          <div className="ztc-status-pill">
            <span className="status-dot" />
            ALL SYSTEMS OPERATIONAL
          </div>
          <div className="ztc-legal-links">
            <a href="#" className="legal-link">Privacy</a>
            <a href="#" className="legal-link">Terms</a>
            <a href="#" className="legal-link">Cookies</a>
          </div>
        </div>
      </footer>
    </>
  )
}