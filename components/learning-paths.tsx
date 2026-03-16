import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const categories = [
  { id: 1, slug: "summer-training", title: "Summer Training",        tag: "SUMMER",      duration: "8 Weeks",  students: "2.4k", icon: "☀️",  short: "Hands-on summer immersion for students"    },
  { id: 2, slug: "apprenticeship", title: "Apprenticeship Program", tag: "APPRENTICE",  duration: "6 Months", students: "1.8k", icon: "🔧",  short: "Learn directly under industry mentors"     },
  { id: 3, slug: "winter-training", title: "Winter Training",        tag: "WINTER",      duration: "6 Weeks",  students: "1.2k", icon: "❄️",  short: "Intensive winter skill bootcamp"            },
  { id: 4, slug: "industrial-training", title: "Industrial Training",    tag: "INDUSTRIAL",  duration: "3 Months", students: "3.1k", icon: "🏭",  short: "Real-world industrial exposure"            },
  { id: 5, title: "Corporate Training",     tag: "CORPORATE",   duration: "4 Weeks",  students: "2.9k", icon: "💼",  short: "Upskill your workforce fast"               },
  { id: 6, title: "Faculty Development",    tag: "FACULTY",     duration: "2 Months", students: "890",  icon: "🎓",  short: "Empower educators with new skills"         },
  { id: 7,slug: "vocational-training", title: "Vocational Training",    tag: "VOCATIONAL",  duration: "10 Weeks", students: "1.5k", icon: "⚙️",  short: "Job-ready vocational certification"        },
  { id: 8, title: "Syllabus Training",      tag: "SYLLABUS",    duration: "12 Weeks", students: "2.1k", icon: "📚",  short: "Curriculum-mapped training tracks"         },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function TrainingCategories() {
  const [displayed, setDisplayed]   = useState(categories);
  const [animating, setAnimating]   = useState(false);
  const [activeId,  setActiveId]    = useState(null);
  const [progress,  setProgress]    = useState(0);
  const intervalRef  = useRef(null);
  const progressRef  = useRef(null);
  const DURATION     = 10000;

  const triggerShuffle = () => {
    setAnimating(true);
    setProgress(0);
    setTimeout(() => {
      setDisplayed(prev => shuffle(prev));
      setAnimating(false);
    }, 450);
  };

  useEffect(() => {
    intervalRef.current  = setInterval(triggerShuffle, DURATION);
    progressRef.current  = setInterval(() => {
      setProgress(p => (p >= 100 ? 0 : p + (100 / (DURATION / 100))));
    }, 100);
    return () => {
      clearInterval(intervalRef.current);
      clearInterval(progressRef.current);
    };
  }, []);

  return (
    <section className="min-h-screen bg-[#F0EBE3] py-20 px-6 font-[Sora,sans-serif]">

      {/* ── Google Font + minimal keyframe helpers ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');

        /* shuffle fade */
        .tc-item { transition: opacity 0.4s ease, transform 0.45s cubic-bezier(0.22,1,0.36,1); }
        .tc-item:nth-child(1){transition-delay:0.00s}
        .tc-item:nth-child(2){transition-delay:0.05s}
        .tc-item:nth-child(3){transition-delay:0.10s}
        .tc-item:nth-child(4){transition-delay:0.15s}
        .tc-item:nth-child(5){transition-delay:0.20s}
        .tc-item:nth-child(6){transition-delay:0.25s}
        .tc-item:nth-child(7){transition-delay:0.30s}
        .tc-item:nth-child(8){transition-delay:0.35s}
        .tc-shuffling .tc-item { opacity:0; transform:scale(0.9) translateY(12px); }

        /* top-bar swipe */
        .tc-bar  { transform:scaleX(0); transform-origin:left; transition:transform 0.35s cubic-bezier(0.22,1,0.36,1); }
        .tc-card:hover .tc-bar  { transform:scaleX(1); }

        /* icon bounce */
        .tc-ico  { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), background 0.3s ease; }
        .tc-card:hover .tc-ico  { transform:scale(1.15) rotate(-6deg); background:#E8490F !important; }

        /* tag colour */
        .tc-tag  { transition:color 0.3s ease; }
        .tc-card:hover .tc-tag  { color:#E8490F; }

        /* arrow slide */
        .tc-arr  { opacity:0; transform:translateX(-10px); transition:opacity 0.3s ease, transform 0.3s ease; }
        .tc-card:hover .tc-arr  { opacity:1; transform:translateX(0); }

        /* card lift */
        .tc-card { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, border-color 0.3s ease; }
        .tc-card:hover { transform:translateY(-8px); box-shadow:0 24px 48px rgba(232,73,15,.14),0 4px 16px rgba(0,0,0,.06); border-color:rgba(232,73,15,.3) !important; }

        /* progress bar */
        .tc-prog { transition:width 0.1s linear; }

        /* pulse dot */
        @keyframes pdot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(.82)}}
        .tc-dot { animation:pdot 2s ease-in-out infinite; }
      `}</style>

      <div className="max-w-6xl mx-auto">

        {/* ───── HEADER ───── */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">

          <div>
            {/* eyebrow pill */}
            <div className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-2 mb-5 shadow-sm">
              <span className="tc-dot w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-xs font-bold tracking-widest uppercase text-stone-700">
                Our Training Programs
              </span>
            </div>

            <h2 className="text-5xl font-extrabold leading-[1.1] text-stone-900 mb-3">
              Choose Your{" "}
              <span className="text-orange-600">Training</span>
              <br />Category
            </h2>

            <p className="text-sm text-stone-400 font-normal max-w-md leading-relaxed">
              Industry-aligned programs designed by professionals.
              Pick the one that fits your goal.
            </p>
          </div>

          {/* shuffle control */}
          <div className="flex flex-col items-end gap-2">
            <button
              onClick={triggerShuffle}
              className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-5 py-2.5 text-sm font-semibold text-stone-600 shadow-sm hover:border-orange-400 hover:text-orange-600 hover:shadow-md transition-all duration-200"
            >
              🔀 Shuffle Cards
            </button>

            <div className="w-36 h-1 bg-stone-200 rounded-full overflow-hidden">
              <div
                className="tc-prog h-full bg-orange-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="text-xs text-stone-400 font-medium">Auto-shuffles every 10s</p>
          </div>
        </div>

        {/* ───── GRID ───── */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${animating ? "tc-shuffling" : ""}`}>
          {displayed.map((cat, i) => (
            <Link href={`/training/${cat.slug}`} key={cat.id}>
            
            <div
              key={cat.id}
              className="tc-item tc-card relative bg-white rounded-2xl p-6 border border-stone-200 cursor-pointer overflow-hidden"
              onClick={() => setActiveId(activeId === cat.id ? null : cat.id)}
            >
              {/* orange swipe bar */}
              <div className="tc-bar absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 rounded-t-2xl" />

              {/* card number */}
              <span className="absolute top-3 right-3 text-xs font-bold text-stone-300 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* icon box */}
              <div className="tc-ico w-12 h-12 rounded-xl bg-stone-200 border border-stone-100 flex items-center justify-center text-2xl mb-5">
                {cat.icon}
              </div>

              {/* tag */}
              <p className="tc-tag text-xs font-bold tracking-widest uppercase text-stone-300 mb-1">
                {cat.tag}
              </p>

              {/* title */}
              <h3 className="text-base font-bold text-stone-900 leading-snug mb-2">
                {cat.title}
              </h3>

              {/* description */}
              <p className="text-xs text-stone-400 leading-relaxed mb-4">
                {cat.short}
              </p>

              {/* pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-xs font-semibold bg-stone-100 text-stone-500 rounded-full px-2.5 py-1 border border-stone-100">
                  ⏱ {cat.duration}
                </span>
                <span className="text-xs font-semibold bg-stone-100 text-stone-500 rounded-full px-2.5 py-1 border border-stone-100">
                  👥 {cat.students}
                </span>
              </div>

              {/* footer row */}
              <div className="border-t border-stone-100 pt-3 flex items-center justify-between">
                <span className="text-xs text-stone-400">
                  <strong className="text-stone-700 font-bold">{cat.students}</strong> enrolled
                </span>
                <div className="tc-arr w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
                  →
                </div>
              </div>

              {/* click-expand CTA */}
              {activeId === cat.id && (
                <div className="mt-3 pt-3 border-t border-orange-100">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-xl py-2.5 transition-colors duration-200">
                    Explore Program →
                  </button>
                </div>
              )}
            </div>
            </Link>
          ))}
        </div>

        {/* ───── BOTTOM CTA ───── */}
        <div className="mt-10 bg-stone-900 rounded-2xl px-10 py-8 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Not sure which program fits you?
            </h3>
            <p className="text-sm text-stone-500">
              Take our 2-minute assessment and we'll match you with the right path.
            </p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-full px-8 py-3.5 flex items-center gap-2 shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200">
            Find My Program →
          </button>
        </div>

      </div>
    </section>
  );
}