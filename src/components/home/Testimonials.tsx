'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/features/doctor/doctor.data'

export function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  const t = testimonials[active]

  return (
    <section aria-labelledby="testimonials-heading" className="section-padding bg-white">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <motion.span
            className="section-label justify-center"
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="w-6 h-px bg-primary-500" />
            Patient Stories
            <span className="w-6 h-px bg-primary-500" />
          </motion.span>
          <motion.h2
            id="testimonials-heading"
            className="font-display text-3xl md:text-4xl font-bold text-neutral-900"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
          >
            Lives Transformed by
            <span className="text-primary-600"> Expert Care</span>
          </motion.h2>
        </div>

        {/* All testimonials grid on md+ */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {testimonials.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-neutral-50 border border-neutral-100 rounded-2xl p-5 relative hover:shadow-card transition-all duration-300"
              aria-label={`Testimonial from ${item.name}`}
            >
              <Quote className="w-7 h-7 text-primary-100 mb-3" aria-hidden />
              <p className="font-body text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-5">
                "{item.message}"
              </p>
              <div className="flex mb-2" aria-label={`Rating: ${item.rating} out of 5`}>
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-body font-semibold text-neutral-800 text-sm">{item.name}</p>
              <p className="font-body text-neutral-500 text-xs">{item.location}</p>
              <span className="inline-block mt-2 text-xs font-body text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">
                {item.treatment}
              </span>
            </motion.article>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative mb-6">
          <AnimatePresence mode="wait">
            <motion.article
              key={t.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="bg-neutral-50 border border-neutral-100 rounded-2xl p-6"
              aria-label={`Testimonial from ${t.name}`}
            >
              <Quote className="w-8 h-8 text-primary-100 mb-3" aria-hidden />
              <p className="font-body text-neutral-600 text-base leading-relaxed mb-4">
                "{t.message}"
              </p>
              <div className="flex mb-2" aria-label={`Rating: ${t.rating} out of 5`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-body font-semibold text-neutral-800">{t.name}</p>
              <p className="font-body text-neutral-500 text-sm">{t.location}</p>
              <span className="inline-block mt-2 text-sm font-body text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                {t.treatment}
              </span>
            </motion.article>
          </AnimatePresence>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:border-primary-400 hover:text-primary-600 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 bg-primary-600' : 'w-2 bg-neutral-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:border-primary-400 hover:text-primary-600 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trust line */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-body text-neutral-500 text-sm">
            Join hundreds of patients who chose expert oncology care at AHPGIC, Cuttack.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
