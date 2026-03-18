"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState, ChangeEvent } from "react";

// ─────────────────────────────────────────
// Types & Interfaces
// ─────────────────────────────────────────

interface Blog {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  author: string;
  authorInitials: string;
  date: string;
  readTime: string;
  featured: boolean;
  tag: string | null;
}

interface AccentStyle {
  icon: string;
  bg: string;
}

interface BlogCardProps {
  blog: Blog;
  index: number;
}

interface NavbarProps {
  // no props — self-contained
}

// ─────────────────────────────────────────
// Static Data
// ─────────────────────────────────────────

const blogs: Blog[] = [
  {
    id: 1,
    category: "Web Development",
    categoryColor: "bg-orange-100 text-orange-600",
    title: "MERN Stack in 2025: Why It's Still the Top Choice for Full-Stack Developers",
    excerpt:
      "From MongoDB to React, discover why the MERN stack continues to dominate job listings and how zerotocode's curriculum keeps you ahead of the curve.",
    author: "Rahul Verma",
    authorInitials: "RV",
    date: "Mar 12, 2025",
    readTime: "6 min read",
    featured: true,
    tag: "🔥 Trending",
  },
  {
    id: 2,
    category: "Career Tips",
    categoryColor: "bg-blue-100 text-blue-600",
    title: "How to Crack Your First IT Interview: A Step-by-Step Guide",
    excerpt:
      "Resume tips, mock interview strategies, and the exact DSA topics that matter most — from students who landed jobs after zerotocode training.",
    author: "Priya Singh",
    authorInitials: "PS",
    date: "Feb 28, 2025",
    readTime: "8 min read",
    featured: false,
    tag: "📌 Popular",
  },
  {
    id: 3,
    category: "AI & ML",
    categoryColor: "bg-purple-100 text-purple-600",
    title: "AI is Not Replacing Developers — Here's What to Learn Instead",
    excerpt:
      "We break down exactly which skills make developers AI-proof in 2025 and why learning full-stack + AI fundamentals is the winning combination.",
    author: "Ankit Sharma",
    authorInitials: "AS",
    date: "Feb 14, 2025",
    readTime: "5 min read",
    featured: false,
    tag: "✨ New",
  },
  {
    id: 4,
    category: "Python",
    categoryColor: "bg-yellow-100 text-yellow-700",
    title: "Django vs Node.js: Which Backend Should You Learn First in 2025?",
    excerpt:
      "A no-fluff comparison of Python Django and Node.js — performance, learning curve, job demand, and which one zerotocode recommends for beginners.",
    author: "Neha Gupta",
    authorInitials: "NG",
    date: "Jan 30, 2025",
    readTime: "7 min read",
    featured: false,
    tag: null,
  },
  {
    id: 5,
    category: "Student Stories",
    categoryColor: "bg-green-100 text-green-700",
    title: "From Zero Coding Knowledge to a ₹6 LPA Job in 8 Months",
    excerpt:
      "Rohit, a mechanical engineering graduate, shares his journey through zerotocode's vocational training and how he pivoted into a full-stack developer role.",
    author: "Rohit Mishra",
    authorInitials: "RM",
    date: "Jan 15, 2025",
    readTime: "4 min read",
    featured: false,
    tag: "💬 Story",
  },
];

const CATEGORIES: string[] = [
  "All",
  "Web Development",
  "Career Tips",
  "AI & ML",
  "Python",
  "Student Stories",
];

const ACCENT_STYLES: AccentStyle[] = [
  { icon: "💻", bg: "bg-gradient-to-br from-[#FFF5F1] to-[#FDDDD0]" },
  { icon: "🎯", bg: "bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE]" },
  { icon: "🤖", bg: "bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE]" },
  { icon: "🐍", bg: "bg-gradient-to-br from-[#FEFCE8] to-[#FEF08A]" },
  { icon: "🚀", bg: "bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7]" },
];



// ─────────────────────────────────────────
// BlogCard
// ─────────────────────────────────────────

function BlogCard({ blog, index }: BlogCardProps): JSX.Element {
  const accent: AccentStyle = ACCENT_STYLES[index % ACCENT_STYLES.length];

  return (
    <article className="group cursor-pointer bg-white rounded-2xl border border-[#DDD8CF] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#F05A28]/10 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Thumbnail */}
      <div
        className={`relative h-36 sm:h-40 ${accent.bg} flex items-center justify-center overflow-hidden`}
      >
        <span className="text-5xl opacity-60 group-hover:scale-110 transition-transform duration-300 select-none">
          {accent.icon}
        </span>

        {/* Tag badge */}
        {blog.tag !== null && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#F05A28] text-xs font-bold px-2.5 py-1 rounded-full shadow-sm border border-[#F0C4B0]">
            {blog.tag}
          </div>
        )}

        {/* Read time */}
        <div className="absolute top-3 right-3 bg-[#1C1C1C]/70 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
          {blog.readTime}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Category pill */}
        <span
          className={`self-start text-xs font-bold px-3 py-1 rounded-full mb-3 ${blog.categoryColor}`}
        >
          {blog.category}
        </span>

        {/* Title */}
        <h3 className="font-black text-[#1C1C1C] text-sm sm:text-base leading-snug mb-2.5 group-hover:text-[#F05A28] transition-colors duration-200 line-clamp-2">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-[#5A5A5A] leading-relaxed line-clamp-2 mb-4 flex-1">
          {blog.excerpt}
        </p>

        {/* Divider */}
        <div className="h-px bg-[#F0EDE8] mb-4" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#F05A28] flex items-center justify-center text-white text-xs font-black flex-shrink-0">
              {blog.authorInitials}
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1C1C1C] leading-none">{blog.author}</p>
              <p className="text-xs text-[#B0A89E] mt-0.5">{blog.date}</p>
            </div>
          </div>

          {/* Animated read arrow */}
          <button
            type="button"
            aria-label={`Read article: ${blog.title}`}
            className="flex items-center gap-1 text-xs font-bold text-[#F05A28] opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0"
          >
            Read
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────
// NewsletterInput (extracted to fix uncontrolled input warning)
// ─────────────────────────────────────────

function NewsletterSection(): JSX.Element {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (): void => {
    // TODO: wire up to your API / mailing list
    setEmail("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="bg-[#1C1C1C] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#F05A28]/10 pointer-events-none" />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#F05A28]/5 pointer-events-none" />

        <div className="relative z-10">
          <span className="text-3xl mb-4 block" role="img" aria-label="mailbox">
            📬
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
            Get Articles Straight to Your Inbox
          </h3>
          <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
            Weekly tutorials, career tips, and industry insights — no spam, unsubscribe anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="your@email.com"
              aria-label="Email address for newsletter"
              className="flex-1 px-4 py-3 rounded-xl text-sm bg-white/10 border border-white/20 text-white placeholder-white/30 outline-none focus:border-[#F05A28] focus:ring-2 focus:ring-[#F05A28]/20 transition-all"
            />
            <button
              type="button"
              onClick={handleSubscribe}
              className="px-6 py-3 rounded-xl bg-[#F05A28] text-white text-sm font-black hover:bg-[#D94E20] transition-colors shadow-lg shadow-[#F05A28]/25 whitespace-nowrap"
            >
              Subscribe →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// FeaturedCard (extracted component to clean up BlogPage)
// ─────────────────────────────────────────

function FeaturedCard({ blog }: { blog: Blog }): JSX.Element {
  return (
    <div className="mb-8 group cursor-pointer">
      <div className="bg-white rounded-3xl border border-[#DDD8CF] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#F05A28]/10 transition-all duration-300 hover:-translate-y-1">
        <div className="flex flex-col lg:flex-row">
          {/* Gradient image panel */}
          <div className="relative lg:w-[45%] flex-shrink-0 bg-gradient-to-br from-[#F05A28] to-[#FF8C5A] overflow-hidden">
            {/* Decorative code snippet overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <pre className="absolute top-6 left-6 text-white text-xs font-mono leading-relaxed opacity-60 whitespace-pre">
                {`const dev = {\n  stack: 'MERN',\n  year: 2025,\n  ready: true\n}`}
              </pre>
              <pre className="absolute bottom-8 right-8 text-white text-xs font-mono opacity-40 whitespace-pre">
                {`// zerotocode\n// full-stack ready`}
              </pre>
            </div>

            {/* Centre content */}
            <div className="flex items-center justify-center h-48 lg:h-full min-h-[200px] relative z-10 p-8">
              <div className="text-center">
                <div className="text-6xl sm:text-7xl mb-3" role="img" aria-label="lightning bolt">
                  ⚡
                </div>
                <p className="text-white font-black text-lg sm:text-xl">MERN Stack 2025</p>
                <p className="text-white/70 text-sm mt-1">Full-Stack Development</p>
              </div>
            </div>

            {/* Featured badge */}
            <div className="absolute top-4 left-4 bg-white text-[#F05A28] text-xs font-black px-3 py-1.5 rounded-full shadow-md">
              ⭐ Featured
            </div>
          </div>

          {/* Content panel */}
          <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              {/* Category + tag */}
              <div className="flex items-center gap-2 flex-wrap mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${blog.categoryColor}`}>
                  {blog.category}
                </span>
                {blog.tag !== null && (
                  <span className="text-xs font-semibold text-[#F05A28] bg-[#FFF5F1] px-3 py-1 rounded-full border border-[#F0C4B0]">
                    {blog.tag}
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-[#1C1C1C] leading-tight mb-3 group-hover:text-[#F05A28] transition-colors duration-200">
                {blog.title}
              </h2>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-6">{blog.excerpt}</p>
            </div>

            {/* Author row */}
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F05A28] flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                  {blog.authorInitials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1C1C1C]">{blog.author}</p>
                  <p className="text-xs text-[#5A5A5A]">
                    {blog.date} · {blog.readTime}
                  </p>
                </div>
              </div>

              <button
                type="button"
                aria-label={`Read featured article: ${blog.title}`}
                className="flex items-center gap-1.5 text-sm font-bold text-[#F05A28] hover:gap-2.5 transition-all duration-200"
              >
                Read Article
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// Page
// ─────────────────────────────────────────

export default function BlogPage(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const featuredBlog: Blog = blogs[0];

  const gridBlogs: Blog[] =
    activeCategory === "All"
      ? blogs.slice(1)
      : blogs.filter((b: Blog) => b.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#EEEBE4] font-sans">
      <Header/>

      {/* ── Hero Banner ── */}
      <div className="relative overflow-hidden bg-[#1C1C1C] py-14 sm:py-20 px-4 sm:px-8">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#F05A28]/10 pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#F05A28]/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block bg-[#F05A28]/20 text-[#F05A28] text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase border border-[#F05A28]/30">
            ✍️ zerotocode Blog
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
            Learn. Build. <span className="text-[#F05A28]">Grow.</span>
          </h1>
          <p className="text-sm sm:text-base text-white/50 max-w-xl mx-auto leading-relaxed">
            Tutorials, career guides, student stories, and tech insights — everything you need to
            level up your IT career.
          </p>
        </div>
      </div>

      {/* ── Category Filter Pills ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map((cat: string) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#F05A28] text-white shadow-lg shadow-[#F05A28]/25"
                  : "bg-white border border-[#DDD8CF] text-[#5A5A5A] hover:border-[#F05A28] hover:text-[#F05A28]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        {/* Featured (All view only) */}
        {activeCategory === "All" && <FeaturedCard blog={featuredBlog} />}

        {/* Section header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-black text-[#1C1C1C]">
              {activeCategory === "All" ? "Latest Articles" : activeCategory}
            </h2>
            <span className="text-xs font-semibold text-[#5A5A5A] bg-white border border-[#DDD8CF] px-2.5 py-1 rounded-full">
              {gridBlogs.length} {gridBlogs.length === 1 ? "post" : "posts"}
            </span>
          </div>
          <button
            type="button"
            className="text-sm font-semibold text-[#F05A28] hover:opacity-75 transition-opacity hidden sm:flex items-center gap-1"
          >
            View All →
          </button>
        </div>

        {/* Grid */}
        {gridBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {gridBlogs.map((blog: Blog, i: number) => (
              <BlogCard key={blog.id} blog={blog} index={i} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-[#5A5A5A]">
            <p className="text-4xl mb-3">📭</p>
            <p className="font-semibold">No articles in this category yet.</p>
          </div>
        )}

        {/* Load More */}
        {gridBlogs.length > 0 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-[#DDD8CF] text-sm font-bold text-[#1C1C1C] hover:border-[#F05A28] hover:text-[#F05A28] transition-all duration-200 bg-white"
            >
              Load More Articles
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </main>

      {/* Newsletter */}
      <NewsletterSection />

     <Footer/>
    </div>
  );
}