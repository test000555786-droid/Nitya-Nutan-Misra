'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Calendar, Tag, ArrowRight } from 'lucide-react'
import { blogPosts, blogCategories } from '@/features/blog/blog.data'
import { formatDate } from '@/lib/utils'

export function BlogsPageContent() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <div>
      {/* Hero Banner */}
      <section className="inner-page-hero pt-[calc(var(--navbar-height)+3rem)] pb-16" aria-label="Blogs page hero">
        <div className="container-custom relative z-10 text-center">
          <motion.span
            className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-body font-semibold px-4 py-2 rounded-full mb-5 uppercase tracking-widest border border-white/15"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            Expert Cancer Insights
          </motion.span>
          <motion.h1
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
          >
            Health Blog &amp; Resources
          </motion.h1>
          <motion.p
            className="font-body text-white/70 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            Evidence-based articles on cancer prevention, diagnosis, treatment and patient care by Dr. Nitya Nutan Misra.
          </motion.p>
          <nav className="mt-4 flex items-center justify-center gap-2 text-white/50 text-sm font-body" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Blogs</span>
          </nav>
        </div>
      </section>

      {/* Blog Content */}
      <section aria-labelledby="blog-list-heading" className="section-padding bg-white">
        <div className="container-custom">
          <h2 id="blog-list-heading" className="sr-only">Blog Posts</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter blog posts by category">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`font-body text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:border-primary-300 hover:text-primary-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-7">
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="group bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-soft card-hover"
                aria-labelledby={`blog-${post.id}-title`}
              >
                {/* Category Header */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-5 py-3">
                  <span className="font-body text-white text-xs font-semibold uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 id={`blog-${post.id}-title`} className="font-display text-xl font-semibold text-neutral-900 mb-3 leading-tight group-hover:text-primary-700 transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="font-body text-neutral-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 font-body mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 font-body text-xs text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">
                        <Tag className="w-2.5 h-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-primary-600 font-body font-semibold text-sm hover:gap-3 transition-all duration-200 group/link"
                    aria-label={`Read full article: ${post.title}`}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="font-body text-neutral-500">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
