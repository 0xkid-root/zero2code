"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { useParams, useRouter } from "next/navigation";
import { blogs, Blog } from "@/app/blog/page"; // adjust import path as needed

// ─────────────────────────────────────────
// Full article content keyed by slug
// ─────────────────────────────────────────

const blogContent: Record<string, { emoji: string; accentFrom: string; accentTo: string; sections: { heading: string; body: string }[] }> = {
  "mern-stack-2025": {
    emoji: "⚡",
    accentFrom: "#F05A28",
    accentTo: "#FF8C5A",
    sections: [
      {
        heading: "Why MERN Still Rules in 2025",
        body: "The MERN stack — MongoDB, Express.js, React, and Node.js — has been a dominant force in full-stack web development for years. As we move into 2025, it continues to top job listings, bootcamp curricula, and startup tech stacks. But why? The answer is simple: JavaScript everywhere. Using one language across your entire stack dramatically reduces the cognitive overhead for developers and speeds up development cycles.",
      },
      {
        heading: "MongoDB: The Flexible Data Layer",
        body: "MongoDB's document-based model makes it a natural fit for modern applications where data structures evolve rapidly. Instead of rigid schemas, you get flexibility to iterate fast. In 2025, MongoDB Atlas has made cloud-native deployments trivial — with built-in vector search capabilities now powering AI features directly on your existing data.",
      },
      {
        heading: "React 19: What's New",
        body: "React 19 introduced the compiler, which dramatically reduces the need for manual memoization. The new Actions API simplifies async data mutations, and Server Components have become a standard pattern for performance-critical pages. At zerotocode, our React module is updated every quarter to reflect these changes so students are always job-ready.",
      },
      {
        heading: "Node.js + Express: Battle-Tested Backend",
        body: "Node.js remains one of the most popular backend runtimes with a massive ecosystem via npm. Express.js keeps the backend lean and unopinionated, giving developers full control. The combination handles thousands of concurrent requests efficiently, making it perfect for real-time apps, REST APIs, and microservices.",
      },
      {
        heading: "How zerotocode Teaches MERN",
        body: "Our 6-month MERN curriculum includes 12 real-world projects, 200+ coding challenges, and weekly live doubt-clearing sessions. Students build a full e-commerce platform, a real-time chat app, and a job portal before graduating. Industry mentors review your code and provide feedback that simulates actual team collaboration.",
      },
      {
        heading: "Job Market Outlook",
        body: "According to Naukri.com and LinkedIn data, MERN stack developer roles grew by 34% in India in 2024. Average fresher packages range from ₹4–8 LPA in tier-2 cities and ₹8–14 LPA in metros. Companies like Infosys, Wipro, and hundreds of product startups actively recruit MERN developers. Mastering the MERN stack in 2025 is one of the most reliable paths into a software engineering career.",
      },
    ],
  },
  "crack-first-it-interview": {
    emoji: "🎯",
    accentFrom: "#3B82F6",
    accentTo: "#60A5FA",
    sections: [
      {
        heading: "The Reality of IT Interviews in 2025",
        body: "Getting your first IT job is harder than it looks on LinkedIn. Companies receive hundreds of applications for every opening, and most resumes are filtered by ATS systems before a human even sees them. Understanding the process — from application to offer — is the first step to cracking it.",
      },
      {
        heading: "Building an ATS-Proof Resume",
        body: "Your resume needs to pass automated screening before it reaches a recruiter. Use standard section headings (Experience, Education, Skills), include keywords from the job description, and avoid tables or graphics that confuse parsers. Keep it to one page if you have under 2 years of experience. Quantify everything: 'Built REST API serving 1,000+ requests/day' beats 'Built REST API'.",
      },
      {
        heading: "DSA: The Topics That Actually Matter",
        body: "You don't need to master every LeetCode problem. Focus on: Arrays & Strings (30% of questions), Hash Maps (20%), Trees & Binary Search (20%), Recursion & DP (15%), and Graphs (15%). Practice 2–3 problems daily on platforms like LeetCode or GeeksforGeeks. Aim to solve Easy problems in under 10 minutes and Medium problems in under 25 minutes.",
      },
      {
        heading: "Mock Interviews: The Secret Weapon",
        body: "Most candidates skip mock interviews and pay the price. Practicing out loud — explaining your thought process as you code — is a completely different skill from solving problems silently. Use Pramp, Interviewing.io, or pair up with a zerotocode batchmate. Record yourself and watch it back. You'll catch communication gaps you never knew you had.",
      },
      {
        heading: "System Design for Freshers",
        body: "Freshers are often asked simple system design questions: 'How would you design a URL shortener?' or 'Design a basic notification system.' Learn the fundamentals: client-server model, databases (SQL vs NoSQL), caching, load balancers, and APIs. You don't need to know everything — showing structured thinking matters more than perfect answers.",
      },
      {
        heading: "HR Round: Often Underestimated",
        body: "The HR round eliminates candidates who can code but can't communicate. Prepare stories using the STAR method (Situation, Task, Action, Result) for common questions like 'Tell me about a challenge you faced' or 'Why do you want to join us?' Research the company before the interview — nothing impresses more than specific, informed questions at the end.",
      },
    ],
  },
  "ai-not-replacing-developers": {
    emoji: "🤖",
    accentFrom: "#8B5CF6",
    accentTo: "#A78BFA",
    sections: [
      {
        heading: "The Fear vs The Reality",
        body: "Every few months a new headline proclaims that AI will replace software developers. GitHub Copilot, ChatGPT, Cursor — these tools are powerful, but they're writing code for developers who direct them, not replacing the developers themselves. The real question isn't 'Will AI replace me?' — it's 'What skills will make me irreplaceable alongside AI?'",
      },
      {
        heading: "What AI Is Actually Good At",
        body: "AI excels at: generating boilerplate code, autocompleting known patterns, explaining unfamiliar code, writing unit tests, and suggesting fixes for common bugs. It struggles with: understanding business context, making architectural decisions, debugging complex distributed systems, and understanding why a feature should exist at all. The gap is in judgment, not syntax.",
      },
      {
        heading: "Skill #1: Systems Thinking",
        body: "The most AI-proof developers think at the system level — how services communicate, where bottlenecks form, how data flows. No AI can replace a developer who understands their company's unique infrastructure, business rules, and technical debt. Systems thinking is contextual and experiential, which makes it extremely hard to automate.",
      },
      {
        heading: "Skill #2: AI Collaboration",
        body: "Ironically, the best way to be AI-proof is to get very good at working with AI. Writing precise prompts, knowing when to trust AI output (and when to verify it), and integrating AI tools into your workflow efficiently — these are skills that amplify your output 3–5x. zerotocode's updated curriculum includes an 'AI-Assisted Development' module for this reason.",
      },
      {
        heading: "Skill #3: Domain Expertise",
        body: "A developer who deeply understands fintech, healthtech, or edtech is far more valuable than a generic coder. Domain expertise lets you ask better questions, design better solutions, and communicate with non-technical stakeholders. AI has no domain intuition — it has pattern matching. You bring the meaning.",
      },
      {
        heading: "The 2025 Developer Stack",
        body: "The winning combination in 2025: Full-Stack fundamentals (MERN or similar) + AI integration skills (APIs, LLM workflows, RAG basics) + one domain specialty. This isn't a huge pivot — it's a 20% expansion of what good developers already do. Start with the fundamentals, then layer AI skills on top. That's the zerotocode path.",
      },
    ],
  },
  "django-vs-nodejs-2025": {
    emoji: "🐍",
    accentFrom: "#D97706",
    accentTo: "#F59E0B",
    sections: [
      {
        heading: "The Question Every Beginner Asks",
        body: "You've decided to learn backend development. Now you're paralyzed: Django or Node.js? Both are production-proven, have massive communities, and are actively hiring. This guide cuts through the noise with a practical comparison based on one question: what's better for YOU, right now, as a beginner in 2025?",
      },
      {
        heading: "Django: Batteries Included",
        body: "Django is a Python web framework that follows the 'batteries included' philosophy. Authentication, admin panel, ORM, form handling — it's all built in. You can have a functional web app running in hours without configuring dozens of packages. This is a huge advantage for beginners who need to see results fast and don't want to make architectural decisions before they understand the domain.",
      },
      {
        heading: "Node.js: JavaScript All the Way",
        body: "If you're already learning JavaScript for the frontend (which you should be), Node.js lets you use the same language on the backend. The npm ecosystem is the largest package registry in the world. Node.js is non-blocking and event-driven, making it excellent for real-time applications like chat apps, live dashboards, and streaming platforms.",
      },
      {
        heading: "Performance Comparison",
        body: "For most CRUD applications, the performance difference is negligible. Node.js edges ahead for I/O-heavy, high-concurrency workloads. Django performs better for CPU-bound tasks and benefits from Python's mature data science ecosystem. Unless you're building at Twitter's scale, both handle thousands of requests per second easily on modern cloud infrastructure.",
      },
      {
        heading: "Job Market Data",
        body: "In India's job market, Node.js roles outnumber Django roles roughly 3:1 on major platforms. This is largely because Node.js fits naturally into the MERN/MEAN startup stack. However, Django has strong demand in enterprise, government, and data-heavy sectors. Python developers also have a clear path into AI/ML roles — a significant advantage as that market grows.",
      },
      {
        heading: "zerotocode's Recommendation",
        body: "For absolute beginners: start with Node.js if you're committed to the MERN stack path. Start with Django if you're leaning toward Python, data science, or want a more structured framework to learn from. Either choice leads to good jobs in 2025. The skill is learning — not the tool. zerotocode offers dedicated tracks for both, and many students learn both by the end of their course.",
      },
    ],
  },
  "zero-to-6lpa-8-months": {
    emoji: "🚀",
    accentFrom: "#059669",
    accentTo: "#34D399",
    sections: [
      {
        heading: "Meet Rohit",
        body: "Rohit Mishra graduated with a B.Tech in Mechanical Engineering from a college in Lucknow in 2023. Like thousands of other non-CS graduates, he found himself in a tough spot — mechanical jobs were scarce, the ones available paid poorly, and he had no idea how to break into software. 'I didn't even know what a variable was,' he told us. Eight months later, he accepted a ₹6 LPA offer as a junior full-stack developer.",
      },
      {
        heading: "Month 1–2: Starting From Zero",
        body: "The first two months were brutal in the best way. Rohit spent 6–8 hours a day learning HTML, CSS, and JavaScript fundamentals through zerotocode's structured curriculum. 'The hardest part wasn't the concepts — it was believing I could actually do this. But the community helped a lot. There were 200 other students in my batch, many of them also non-CS, and seeing them progress kept me going.'",
      },
      {
        heading: "Month 3–4: The MERN Deep Dive",
        body: "By month three, Rohit was building React components and writing his first Express APIs. He built a personal portfolio, a to-do app, and a basic e-commerce frontend. His mentor at zerotocode pushed him to explain his code out loud — a practice that would pay off massively in interviews. 'I could write code, but I couldn't explain it. The mock sessions forced me to find words for what I was doing.'",
      },
      {
        heading: "Month 5–6: Real Projects",
        body: "The fifth and sixth months were project-heavy. Rohit built a job portal application with authentication, role-based access, and a REST API backend. He contributed to a team project with three other students, learning Git workflows, code reviews, and the basics of agile sprints. 'Working in a team was eye-opening. Writing code for other people to read is completely different from writing it for yourself.'",
      },
      {
        heading: "Month 7–8: Job Hunt Mode",
        body: "Rohit applied to 60+ companies over eight weeks. He got 12 interview calls, made it to final rounds at 4, and received 2 offers. His rejection rate was high, but each rejection led to a specific improvement. 'I bombed my first 5 interviews badly. But I tracked every question I was asked and made sure I could answer it the next time.' The winning offer came from a Pune-based SaaS startup.",
      },
      {
        heading: "What Rohit Says to Beginners",
        body: "'Don't wait until you feel ready — you never will. Just start. The first three months are the hardest. After that, you'll surprise yourself daily. And find your community early. Going through this alone is 10x harder.' Rohit now mentors new students at zerotocode on weekends, helping the next batch of career-changers make the same leap he did.",
      },
    ],
  },
};

// ─────────────────────────────────────────
// Related Cards
// ─────────────────────────────────────────

const ACCENT_STYLES = [
  { icon: "💻", bg: "bg-gradient-to-br from-[#FFF5F1] to-[#FDDDD0]" },
  { icon: "🎯", bg: "bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE]" },
  { icon: "🤖", bg: "bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE]" },
  { icon: "🐍", bg: "bg-gradient-to-br from-[#FEFCE8] to-[#FEF08A]" },
  { icon: "🚀", bg: "bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7]" },
];

function RelatedCard({ blog, index }: { blog: Blog; index: number }): JSX.Element {
  const router = useRouter();
  const accent = ACCENT_STYLES[index % ACCENT_STYLES.length];

  return (
    <article
      onClick={() => router.push(`/blog/${blog.slug}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && router.push(`/blog/${blog.slug}`)}
      className="group cursor-pointer bg-white rounded-2xl border border-[#DDD8CF] overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#F05A28]/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className={`h-28 ${accent.bg} flex items-center justify-center`}>
        <span className="text-4xl opacity-60 group-hover:scale-110 transition-transform duration-300 select-none">
          {accent.icon}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className={`self-start text-xs font-bold px-2.5 py-0.5 rounded-full mb-2 ${blog.categoryColor}`}>
          {blog.category}
        </span>
        <h4 className="text-sm font-black text-[#1C1C1C] leading-snug line-clamp-2 group-hover:text-[#F05A28] transition-colors flex-1">
          {blog.title}
        </h4>
        <p className="text-xs text-[#B0A89E] mt-2">{blog.readTime}</p>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────
// Blog Detail Page
// ─────────────────────────────────────────

export default function BlogDetailPage(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  const blog = blogs.find((b) => b.slug === slug);
  const content = blogContent[slug ?? ""];

  // Related: exclude current blog
  const relatedBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  if (!blog || !content) {
    return (
      <div className="min-h-screen bg-[#EEEBE4] flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <p className="text-5xl mb-4">📭</p>
          <h1 className="text-2xl font-black text-[#1C1C1C] mb-2">Article Not Found</h1>
          <p className="text-[#5A5A5A] mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <button
            type="button"
            onClick={() => router.push("/blog")}
            className="px-6 py-3 bg-[#F05A28] text-white font-bold rounded-xl hover:bg-[#D94E20] transition-colors"
          >
            ← Back to Blog
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EEEBE4] font-sans">
      <Header />

      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-8"
        style={{ background: `linear-gradient(135deg, ${content.accentFrom}, ${content.accentTo})` }}
      >
        {/* Decorative blobs */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />

        {/* Code overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <pre className="absolute top-8 left-8 text-white text-xs font-mono leading-loose whitespace-pre hidden sm:block">
            {`import { useState } from 'react'\nconst [code, setCode] = useState(true)\n// zerotocode 2025`}
          </pre>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Back link */}
          <button
            type="button"
            onClick={() => router.push("/blog")}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold mb-8 transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back to Blog
          </button>

          {/* Category + tag */}
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white border border-white/30">
              {blog.category}
            </span>
            {blog.tag && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#1C1C1C]">
                {blog.tag}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-4">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-8 max-w-2xl">
            {blog.excerpt}
          </p>

          {/* Meta row */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-sm font-black flex-shrink-0"
                style={{ color: content.accentFrom }}>
                {blog.authorInitials}
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-none">{blog.author}</p>
                <p className="text-xs text-white/60 mt-0.5">{blog.date}</p>
              </div>
            </div>

            <div className="h-4 w-px bg-white/30 hidden sm:block" />

            <div className="flex items-center gap-1 text-white/70 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {blog.readTime}
            </div>
          </div>
        </div>
      </div>

      {/* ── Article Body ── */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

        {/* Big emoji */}
        <div className="flex justify-center mb-8">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg"
            style={{ background: `linear-gradient(135deg, ${content.accentFrom}20, ${content.accentTo}40)`, border: `2px solid ${content.accentFrom}30` }}
          >
            {content.emoji}
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-8">
          {content.sections.map((section, i) => (
            <section key={i} className="bg-white rounded-2xl border border-[#DDD8CF] p-6 sm:p-8 shadow-sm">
              {/* Section number accent */}
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black mt-0.5"
                  style={{ background: `linear-gradient(135deg, ${content.accentFrom}, ${content.accentTo})` }}
                >
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-base sm:text-lg font-black text-[#1C1C1C] mb-3 leading-snug">
                    {section.heading}
                  </h2>
                  <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                    {section.body}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* ── Share / Tags row ── */}
        <div className="mt-10 flex items-center justify-between flex-wrap gap-4 py-6 border-t border-b border-[#DDD8CF]">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-[#5A5A5A] uppercase tracking-wider">Tags:</span>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${blog.categoryColor}`}>
              {blog.category}
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F0EDE8] text-[#5A5A5A]">
              zerotocode
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F0EDE8] text-[#5A5A5A]">
              2025
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#5A5A5A] uppercase tracking-wider">Share:</span>
            {["𝕏", "in", "🔗"].map((icon) => (
              <button
                key={icon}
                type="button"
                className="w-8 h-8 rounded-full bg-white border border-[#DDD8CF] text-[#5A5A5A] text-xs font-bold flex items-center justify-center hover:border-[#F05A28] hover:text-[#F05A28] transition-colors"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* ── Author Card ── */}
        <div className="mt-8 bg-white rounded-2xl border border-[#DDD8CF] p-6 sm:p-8 shadow-sm flex items-start gap-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-lg font-black flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${content.accentFrom}, ${content.accentTo})` }}
          >
            {blog.authorInitials}
          </div>
          <div>
            <p className="text-xs font-bold text-[#F05A28] uppercase tracking-wider mb-1">Written by</p>
            <h3 className="text-base font-black text-[#1C1C1C] mb-1">{blog.author}</h3>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              Expert contributor at zerotocode. Passionate about making tech education accessible to everyone in India.
            </p>
          </div>
        </div>

        {/* ── Related Articles ── */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-black text-[#1C1C1C]">Related Articles</h2>
            <button
              type="button"
              onClick={() => router.push("/blog")}
              className="text-sm font-semibold text-[#F05A28] hover:opacity-75 transition-opacity flex items-center gap-1"
            >
              View All →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedBlogs.map((b, i) => (
              <RelatedCard key={b.id} blog={b} index={i} />
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-12 bg-[#1C1C1C] rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-[#F05A28]/10 pointer-events-none" />
          <div className="relative z-10">
            <span className="text-3xl mb-3 block">🎓</span>
            <h3 className="text-lg sm:text-xl font-black text-white mb-2">
              Ready to Start Your Journey?
            </h3>
            <p className="text-white/50 text-sm mb-5 max-w-sm mx-auto">
              Join 10,000+ students learning to code at zerotocode. Get job-ready in 6 months.
            </p>
            <button
              type="button"
              className="px-8 py-3.5 rounded-xl bg-[#F05A28] text-white text-sm font-black hover:bg-[#D94E20] transition-colors shadow-lg shadow-[#F05A28]/25"
            >
              Explore Courses →
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}