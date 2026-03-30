'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPostsForListing, categories } from '@/lib/blog-data';
import type { BlogPost } from '@/lib/blog-data';
import Header from '@/components/header';
import Footer from '@/components/footer';

const blogPosts = getBlogPostsForListing();

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);
const gridPosts = activeCategory === 'All' && featuredPost
  ? filteredPosts.filter(post => post.id !== featuredPost.id)
  : filteredPosts;
  return (
    <div className="min-h-screen bg-[#EEEBE4]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1C1C1C] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#333]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 -right-40 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-[#5A5A5A] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/30 backdrop-blur-sm mb-6">
            <span className="text-lg">✍️</span>
            <span className="text-sm font-semibold text-[#FF6B35]">Tech Insights</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight text-balance">
            Learn, Build, and Grow Your Career
          </h1>
          <p className="text-lg text-[#B0A89E] max-w-2xl mx-auto leading-relaxed text-balance">
            Deep-dive tutorials, career guidance, and real stories from developers who made the journey from zero to pro.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-[#EEEBE4] border-b border-[#DDD8CF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${activeCategory === cat
                    ? 'bg-[#FF6B35] text-white'
                    : 'bg-white text-[#5A5A5A] hover:bg-[#F5F1E8] border border-[#DDD8CF]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Featured Post - Hero Style */}
        {activeCategory === 'All' && featuredPost && (
          <div className="mb-20">
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="group relative overflow-hidden rounded-2xl border border-[#DDD8CF] hover:shadow-2xl transition-all duration-300 cursor-pointer">
                {/* Hero Image Section */}
                <div className="relative w-full h-80 sm:h-96 lg:h-[500px] bg-[#F5F1E8] overflow-hidden">
                  {featuredPost.image ? (
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.imageAlt || featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#FF6B35] to-[#1C1C1C] flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-8xl mb-4">🚀</div>
                        <p className="text-white font-black text-2xl">Featured Article</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 lg:p-12">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className="inline-block px-3 py-1.5 bg-[#FF6B35] text-white text-xs font-bold rounded-full">
                      {featuredPost.category}
                    </span>
                    {featuredPost.tag && (
                      <span className="inline-block px-3 py-1.5 bg-white text-[#FF6B35] text-xs font-bold rounded-full">
                        ⭐ {featuredPost.tag}
                      </span>
                    )}
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight text-balance max-w-2xl">
                    {featuredPost.title}
                  </h2>

                  <p className="text-white/80 text-base leading-relaxed mb-6 max-w-2xl line-clamp-2">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-6 flex-wrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white font-bold">
                        {featuredPost.author.charAt(0)}
                      </div>
                      <div className="text-white">
                        <p className="font-bold text-sm">{featuredPost.author}</p>
                        <p className="text-xs text-white/60">{featuredPost.date}</p>
                      </div>
                    </div>
                    <div className="h-6 w-px bg-white/20"></div>
                    <div className="text-white">
                      <p className="font-bold text-sm">{featuredPost.readTime}</p>
                      <p className="text-xs text-white/60">Average read time</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-black text-[#1C1C1C]">
            {activeCategory === 'All' ? 'Latest Articles' : activeCategory}
          </h2>
          <div className="w-12 h-1.5 bg-[#FF6B35] rounded-full mt-3"></div>
        </div>

        {/* Posts Grid */}
        {gridPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {gridPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="group h-full bg-white rounded-xl border border-[#DDD8CF] overflow-hidden hover:shadow-xl hover:border-[#FF6B35] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
                  {/* Featured Image */}
                  {post.image && (
                    <div className="relative w-full h-64 bg-[#F5F1E8] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 pb-4 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="inline-block px-2.5 py-1 bg-[#F5F1E8] text-[#5A5A5A] text-xs font-bold rounded-full">
                        {post.category}
                      </span>
                      {post.tag && (
                        <span className="inline-block px-2.5 py-1 bg-[#FFF5F1] text-[#FF6B35] text-xs font-bold rounded-full border border-[#F0C4B0]">
                          {post.tag}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-black text-[#1C1C1C] mb-3 group-hover:text-[#FF6B35] transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[#5A5A5A] text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 flex items-center justify-between border-t border-[#DDD8CF]">
                    <div className="flex flex-col">
                      <p className="text-xs font-bold text-[#1C1C1C]">{post.author}</p>
                      <p className="text-xs text-[#B0A89E] mt-0.5">{post.date}</p>
                    </div>
                    <span className="text-xs font-bold text-[#FF6B35] group-hover:translate-x-1 transition-transform">
                      {post.readTime} →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">📭</p>
            <p className="text-slate-600 font-semibold text-lg">No articles in this category yet.</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-br from-[#1C1C1C] to-[#2A2A2A] rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF6B35] rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-3 text-balance">
              Stay Updated with Weekly Insights
            </h3>
            <p className="text-[#B0A89E] mb-8 max-w-xl mx-auto text-balance">
              Get tutorials, career tips, and industry insights delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3.5 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all"
              />
              <button className="px-6 py-3.5 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E55A25] transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
