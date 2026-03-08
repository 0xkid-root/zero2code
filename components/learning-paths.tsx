import { useState } from "react";

const categories = [
  { id: 1, title: "Summer Training", tag: "SUMMER", duration: "8 Weeks", students: "2.4k", icon: "☀️", short: "Hands-on summer immersion for students" },
  { id: 2, title: "Apprenticeship Program", tag: "APPRENTICE", duration: "6 Months", students: "1.8k", icon: "🔧", short: "Learn directly under industry mentors" },
  { id: 3, title: "Winter Training", tag: "WINTER", duration: "6 Weeks", students: "1.2k", icon: "❄️", short: "Intensive winter skill bootcamp" },
  { id: 4, title: "Industrial Training", tag: "INDUSTRIAL", duration: "3 Months", students: "3.1k", icon: "🏭", short: "Real-world industrial exposure" },
  { id: 5, title: "Corporate Training", tag: "CORPORATE", duration: "4 Weeks", students: "2.9k", icon: "💼", short: "Upskill your workforce fast" },
  { id: 6, title: "Faculty Development", tag: "FACULTY", duration: "2 Months", students: "890", icon: "🎓", short: "Empower educators with new skills" },
  { id: 7, title: "Vocational Training", tag: "VOCATIONAL", duration: "10 Weeks", students: "1.5k", icon: "⚙️", short: "Job-ready vocational certification" },
  { id: 8, title: "Syllabus Training", tag: "SYLLABUS", duration: "12 Weeks", students: "2.1k", icon: "📚", short: "Curriculum-mapped training tracks" },
];

export default function TrainingCategories() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ background: "#F0EBE3", minHeight: "100vh", padding: "80px 24px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        .tc-wrap { max-width: 1200px; margin: 0 auto; font-family: 'Sora', sans-serif; }
        .tc-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; border: 1px solid rgba(220,210,200,0.8); border-radius: 100px;
          padding: 6px 16px 6px 10px; font-size: 13px; font-weight: 600; color: #1a1a1a;
          margin-bottom: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .tc-eyebrow-dot { width: 8px; height: 8px; border-radius: 50%; background: #E8490F; }
        .tc-title { font-size: clamp(36px, 5vw, 56px); font-weight: 800; color: #1a1a1a; line-height: 1.1; margin: 0 0 12px 0; }
        .tc-title em { color: #E8490F; font-style: normal; }
        .tc-sub { font-size: 15px; color: #888; font-weight: 400; max-width: 480px; line-height: 1.6; margin: 0; }
        .header-row { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 40px; gap: 24px; flex-wrap: wrap; }
        .all-programs-btn {
          display: inline-flex; align-items: center; gap: 8px; border: 1.5px solid rgba(220,210,200,0.8);
          border-radius: 100px; padding: 10px 20px; font-family: 'Sora', sans-serif; font-size: 13px;
          font-weight: 600; color: #555; cursor: pointer; background: #fff;
          transition: all 0.2s ease; box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .all-programs-btn:hover { border-color: #E8490F; color: #E8490F; box-shadow: 0 4px 16px rgba(232,73,15,0.1); }
        .tc-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
        }
        @media (max-width: 1024px) { .tc-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .tc-grid { grid-template-columns: 1fr; } }
        .tc-card {
          background: #fff; border-radius: 16px; padding: 28px 24px;
          border: 1.5px solid rgba(220,210,200,0.6); cursor: pointer;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative; overflow: hidden;
          animation: cardIn 0.5s ease-out both;
        }
        @keyframes cardIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .tc-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #E8490F, #FF7A45);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .tc-card:hover { border-color: rgba(232,73,15,0.25); box-shadow: 0 20px 48px rgba(232,73,15,0.12), 0 4px 16px rgba(0,0,0,0.06); transform: translateY(-6px); }
        .tc-card:hover::before { transform: scaleX(1); }
        .tc-card:hover .tc-icon-box { background: #E8490F; transform: scale(1.1) rotate(-5deg); }
        .tc-card:hover .tc-tag { color: #E8490F; }
        .tc-card:hover .tc-arrow { opacity: 1; transform: translateX(0); }
        .tc-card:hover .tc-short { color: #555; }
        .tc-icon-box {
          width: 48px; height: 48px; border-radius: 12px; background: #F5F0EB;
          display: flex; align-items: center; justify-content: center; font-size: 22px;
          margin-bottom: 20px; transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          border: 1px solid rgba(220,210,200,0.5);
        }
        .tc-tag { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #bbb; transition: color 0.3s ease; margin-bottom: 6px; }
        .tc-name { font-size: 17px; font-weight: 700; color: #1a1a1a; line-height: 1.3; margin-bottom: 8px; }
        .tc-short { font-size: 13px; color: #aaa; font-weight: 400; line-height: 1.5; transition: color 0.3s ease; margin-bottom: 20px; }
        .tc-meta { display: flex; gap: 8px; flex-wrap: wrap; }
        .tc-pill { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 600; color: #666; background: #F5F0EB; border-radius: 100px; padding: 4px 10px; border: 1px solid rgba(220,210,200,0.6); }
        .tc-divider { height: 1px; background: rgba(220,210,200,0.5); margin: 16px 0; }
        .tc-footer-row { display: flex; align-items: center; justify-content: space-between; }
        .tc-students { font-size: 12px; font-weight: 500; color: #aaa; }
        .tc-students strong { color: #1a1a1a; font-weight: 700; }
        .tc-arrow {
          width: 32px; height: 32px; border-radius: 50%; background: #E8490F;
          display: flex; align-items: center; justify-content: center; font-size: 14px; color: #fff;
          opacity: 0; transform: translateX(-8px);
          transition: opacity 0.3s ease, transform 0.3s ease; flex-shrink: 0;
        }
        .tc-bottom {
          margin-top: 40px; background: #1a1a1a; border-radius: 20px; padding: 32px 40px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap;
        }
        .tc-bottom h3 { font-family: 'Sora', sans-serif; font-size: 22px; font-weight: 700; color: #fff; margin: 0 0 6px 0; }
        .tc-bottom p { font-family: 'Sora', sans-serif; font-size: 13px; color: rgba(255,255,255,0.45); margin: 0; }
        .tc-cta-btn {
          background: #E8490F; color: #fff; border: none; border-radius: 100px; padding: 14px 30px;
          font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 700; cursor: pointer;
          display: flex; align-items: center; gap: 8px;
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          white-space: nowrap; box-shadow: 0 8px 24px rgba(232,73,15,0.35);
        }
        .tc-cta-btn:hover { background: #D03D0A; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(232,73,15,0.45); }
      `}</style>

      <div className="tc-wrap">
        {/* Header */}
        <div className="header-row">
          <div>
            <div className="tc-eyebrow">
              <span className="tc-eyebrow-dot" />
              Our Training Programs
            </div>
            <h2 className="tc-title">
              Choose Your <em>Training</em><br />Category
            </h2>
            <p className="tc-sub">
              Industry-aligned programs designed by professionals. Pick the one that fits your goal.
            </p>
          </div>
          <button className="all-programs-btn">View All Programs →</button>
        </div>

        {/* Cards Grid */}
        <div className="tc-grid">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className="tc-card"
              style={{ animationDelay: `${i * 0.06}s` }}
              onMouseEnter={() => setHovered(cat.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="tc-icon-box"><span>{cat.icon}</span></div>
              <div className="tc-tag">{cat.tag}</div>
              <div className="tc-name">{cat.title}</div>
              <div className="tc-short">{cat.short}</div>
              <div className="tc-meta">
                <span className="tc-pill">⏱ {cat.duration}</span>
                <span className="tc-pill">👥 {cat.students}</span>
              </div>
              <div className="tc-divider" />
              <div className="tc-footer-row">
                <div className="tc-students"><strong>{cat.students}</strong> enrolled</div>
                <div className="tc-arrow">→</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="tc-bottom">
          <div>
            <h3>Not sure which program fits you?</h3>
            <p>Take our quick 2-minute assessment and we'll match you with the right path.</p>
          </div>
          <button className="tc-cta-btn">Find My Program →</button>
        </div>
      </div>
    </section>
  );
}