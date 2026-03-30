'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getBlogBySlug, getRelatedPosts, allBlogPosts } from '@/lib/blog-data';

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const blog = getBlogBySlug(slug);
  const relatedPosts = blog ? getRelatedPosts(blog.id) : [];

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#EEEBE4]">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-black text-[#1C1C1C] mb-4">Article Not Found</h1>
          <p className="text-[#5A5A5A] mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="inline-block px-6 py-3 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E55A25]">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EEEBE4]">
      <Header />

      {/* Hero Image Section */}
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1C1C1C] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#333]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -right-40 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
        </div>
        

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-sm">
            <Link href="/blog" className="text-[#B0A89E] hover:text-white transition-colors">Blog</Link>
            <span className="text-[#5A5A5A]">/</span>
            <Link href={`/blog?category=${blog.category}`} className="text-[#B0A89E] hover:text-white transition-colors">
              {blog.category}
            </Link>
            <span className="text-[#5A5A5A]">/</span>
            <span className="text-[#FF6B35]">{blog.title.substring(0, 30)}...</span>
          </div>

          {/* Category & Tag */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="px-3 py-1 bg-[#FF6B35]/20 text-[#FF6B35] text-xs font-bold rounded-full border border-[#FF6B35]/30">
              {blog.category}
            </span>
            {blog.tag && (
              <span className="px-3 py-1 bg-[#FF6B35]/20 text-[#FF6B35] text-xs font-bold rounded-full border border-[#FF6B35]/30">
                {blog.tag}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-6 flex-wrap text-[#B0A89E] text-sm">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#FF6B35]/20 border border-[#FF6B35]/40 flex items-center justify-center text-[#FF6B35] font-bold text-lg">
                {blog.emoji}
              </div>
              <div>
                <p className="font-semibold text-white">{blog.author}</p>
                <p className="text-xs mt-1">{blog.date}</p>
              </div>
            </div>
            <div className="h-6 w-px bg-[#5A5A5A]"></div>
            <div>
              <p className="font-semibold text-white">{blog.readTime} read</p>
              <p className="text-xs mt-1">Average reading time</p>
            </div>
          </div>
        </div>
      </section>
      

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-[#5A5A5A] leading-relaxed mb-8">
            {blog.excerpt}
          </p>
          <div className="bg-[#FFF5F1] border-l-4 border-[#FF6B35] p-6 rounded-r-lg mb-8">
            <p className="text-[#5A5A5A] leading-relaxed">
              {blog.content}
            </p>
          </div>
        </div>

{blog.image && (
        <section className="relative w-full h-96 sm:h-[500px] bg-[#F5F1E8] overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.imageAlt || blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#EEEBE4]"></div>
        </section>
      )}

        {/* Sections */}
        <div className="space-y-12">
          {blog.sections.map((section, idx) => (
            <article key={idx} className="scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-black text-[#1C1C1C] mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[#FFF5F1] flex items-center justify-center text-[#FF6B35] font-bold">
                  {idx + 1}
                </span>
                {section.title}
              </h2>

              <p className="text-[#5A5A5A] leading-relaxed mb-6">
                {section.content}
              </p>

              {section.highlight && (
                <div className="bg-[#F0EDE8] border-l-4 border-[#FF6B35] p-5 rounded-r-lg mb-6">
                  <p className="text-sm font-semibold text-[#5A5A5A] before:content-['💡_']">
                    {section.highlight}
                  </p>
                </div>
              )}

              {section.tip && (
                <div className="bg-[#F0EDE8] border-l-4 border-[#FF6B35] p-5 rounded-r-lg mb-6">
                  <p className="text-sm font-semibold text-[#5A5A5A]">
                    {section.tip}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-[#DDD8CF]"></div>

        {/* Author Card */}
        <div className="bg-gradient-to-br from-[#F5F1E8] to-[#F0EDE8] rounded-xl p-8 border border-[#DDD8CF] mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-[#FF6B35] flex items-center justify-center text-white text-2xl font-black">
              {blog.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="text-lg font-black text-[#1C1C1C]">{blog.author}</h3>
              <p className="text-sm text-[#5A5A5A]">{blog.category} Specialist</p>
            </div>
          </div>
          <p className="text-[#5A5A5A] text-sm leading-relaxed">
            Technical writer and industry expert with years of experience in {blog.category.toLowerCase()}. Passionate about helping developers grow their careers.
          </p>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-black text-[#1C1C1C] mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="group h-full bg-white rounded-xl border border-[#DDD8CF] p-6 hover:shadow-lg hover:border-[#FF6B35] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
                    <span className="text-xs font-bold text-[#5A5A5A] mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-base font-black text-[#1C1C1C] mb-3 group-hover:text-[#FF6B35] transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <div className="mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-[#FF6B35] font-bold text-sm group-hover:translate-x-1 transition-transform">
                        Read
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#1C1C1C] to-[#2A2A2A] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#333]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Level Up?</h2>
          <p className="text-[#B0A89E] mb-8">
            Join thousands of developers who are mastering full-stack development and landing high-paying jobs.
          </p>
          <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#E55A25] transition-all">
            Explore More Articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
