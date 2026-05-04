'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight, Phone } from 'lucide-react'
import type { BlogPost } from '@/types'
import { formatDate } from '@/lib/utils'
import { siteConfig } from '@/config/site'

interface Props {
  post: BlogPost
  related: BlogPost[]
}

function renderMarkdown(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="font-display text-2xl font-bold text-neutral-900 mt-8 mb-4">{line.slice(3)}</h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="font-display text-xl font-semibold text-neutral-800 mt-6 mb-3">{line.slice(4)}</h3>)
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(<p key={i} className="font-body font-semibold text-neutral-800 mb-2">{line.slice(2, -2)}</p>)
    } else if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-1 text-neutral-600 font-body mb-4">
          {items.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      )
      continue
    } else if (line.trim()) {
      // Handle inline bold
      const parts = line.split(/(\*\*[^*]+\*\*)/)
      const rendered = parts.map((p, pi) => {
        if (p.startsWith('**') && p.endsWith('**')) {
          return <strong key={pi} className="font-semibold text-neutral-800">{p.slice(2, -2)}</strong>
        }
        return p
      })
      elements.push(<p key={i} className="font-body text-neutral-600 leading-relaxed mb-4">{rendered}</p>)
    }
    i++
  }
  return elements
}

export function BlogContent({ post, related }: Props) {
  return (
    <div>
      {/* Hero */}
      <section className="inner-page-hero pt-[calc(var(--navbar-height)+3rem)] pb-16" aria-label="Blog post hero">
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-white/50 text-sm font-body mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-white/80 transition-colors">Blogs</Link>
            <span>/</span>
            <span className="text-white/80 truncate max-w-[200px]">{post.title}</span>
          </nav>

          <span className="inline-block font-body text-xs font-semibold text-white/80 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            {post.category}
          </span>

          <motion.h1
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mb-5"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          >
            {post.title}
          </motion.h1>

          <div className="flex flex-wrap items-center gap-4 text-white/60 font-body text-sm">
            <span className="flex items-center gap-1.5">
              <span className="font-medium text-white/80">{post.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 bg-white" aria-labelledby="article-content">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <article className="lg:col-span-2" itemScope itemType="https://schema.org/MedicalWebPage">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Excerpt highlight */}
                <div className="bg-primary-50 border-l-4 border-primary-600 rounded-r-xl p-5 mb-8">
                  <p className="font-body text-primary-800 text-base leading-relaxed italic">{post.excerpt}</p>
                </div>

                {/* Article content */}
                <div className="prose-medical" itemProp="articleBody">
                  {renderMarkdown(post.content)}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-neutral-100">
                  {post.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 font-body text-xs text-primary-700 bg-primary-50 border border-primary-100 px-3 py-1.5 rounded-full">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author block */}
                <div className="mt-8 p-5 bg-neutral-50 rounded-2xl border border-neutral-100 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-white font-bold text-sm">NM</span>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-neutral-800 text-sm">{post.author}</p>
                    <p className="font-body text-neutral-500 text-xs mb-2">Surgical Oncologist · AHPGIC, Cuttack</p>
                    <p className="font-body text-neutral-600 text-xs leading-relaxed">
                      Dr. Misra writes to educate patients and families about cancer — empowering them with knowledge that supports early detection and informed treatment decisions.
                    </p>
                  </div>
                </div>

                {/* Prev/next nav */}
                <div className="mt-8 flex items-center gap-4">
                  <Link href="/blogs" className="inline-flex items-center gap-2 text-primary-600 font-body font-semibold text-sm hover:gap-3 transition-all duration-200 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                    All Articles
                  </Link>
                </div>
              </motion.div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-5" aria-label="Sidebar">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-display text-lg font-bold mb-2">Need a Consultation?</h3>
                <p className="font-body text-white/70 text-sm mb-5 leading-relaxed">
                  If you have concerns about cancer symptoms or diagnosis, consult Dr. Misra for expert evaluation.
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-600 text-white font-body font-semibold px-5 py-3 rounded-xl w-full justify-center transition-all duration-300 hover:-translate-y-0.5 text-sm mb-3"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <p className="font-body text-white/50 text-xs text-center">{siteConfig.phoneDisplay}</p>
              </div>

              {/* Related articles */}
              {related.length > 0 && (
                <div>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link
                        key={r.id}
                        href={`/blogs/${r.slug}`}
                        className="block bg-white border border-neutral-100 rounded-xl p-4 hover:shadow-card hover:border-primary-100 transition-all duration-200 group"
                      >
                        <span className="font-body text-xs text-primary-600 font-semibold mb-2 block">{r.category}</span>
                        <p className="font-body font-medium text-neutral-800 text-sm leading-snug group-hover:text-primary-700 transition-colors duration-200 line-clamp-2 mb-2">
                          {r.title}
                        </p>
                        <span className="inline-flex items-center gap-1 text-primary-600 text-xs font-semibold">
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
