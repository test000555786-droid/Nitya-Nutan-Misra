'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown, FileText, ClipboardList, HelpCircle, Heart,
  Phone, CheckCircle2, AlertCircle, BookOpen,
} from 'lucide-react'
import { faqs, patientResources } from '@/features/doctor/patient.data'
import { siteConfig } from '@/config/site'

const resourceIconMap: Record<string, React.ElementType> = {
  'file-text': FileText,
  'clipboard-list': ClipboardList,
  'help-circle': HelpCircle,
  heart: Heart,
}

const faqCategories = ['All', 'Appointments', 'Diagnosis', 'Surgery', 'Treatment', 'General']

export function PatientCornerContent() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredFaqs =
    activeCategory === 'All' ? faqs : faqs.filter((f) => f.category === activeCategory)

  return (
    <div>
      {/* Hero Banner */}
      <section className="inner-page-hero pt-[calc(var(--navbar-height)+3rem)] pb-16" aria-label="Patient Corner hero">
        <div className="container-custom relative z-10 text-center">
          <motion.span
            className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-body font-semibold px-4 py-2 rounded-full mb-5 uppercase tracking-widest border border-white/15"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            For Patients &amp; Families
          </motion.span>
          <motion.h1
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
          >
            Patient Corner
          </motion.h1>
          <motion.p
            className="font-body text-white/70 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            Resources, guides, and answers to your most important questions about cancer care at AHPGIC, Cuttack.
          </motion.p>
          <nav className="mt-4 flex items-center justify-center gap-2 text-white/50 text-sm font-body" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Patient Corner</span>
          </nav>
        </div>
      </section>

      {/* Important Notice */}
      <div className="bg-secondary/10 border-b border-secondary/20">
        <div className="container-custom py-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <p className="font-body text-sm text-neutral-700">
              <span className="font-semibold">Medical Disclaimer:</span> Information on this page is for educational purposes only and does not replace professional medical advice. Please consult Dr. Misra for any personal medical concerns.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <section aria-labelledby="resources-heading" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-10">
            <motion.span
              className="section-label justify-center"
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <span className="w-6 h-px bg-primary-500" />
              Patient Resources
              <span className="w-6 h-px bg-primary-500" />
            </motion.span>
            <motion.h2
              id="resources-heading"
              className="font-display text-3xl md:text-4xl font-bold text-neutral-900"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
            >
              Guides to Support Your
              <span className="text-primary-600"> Cancer Journey</span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {patientResources.map((resource, i) => {
              const Icon = resourceIconMap[resource.icon] ?? FileText
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  className="group bg-white border border-neutral-100 rounded-2xl p-6 shadow-soft card-hover text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="inline-block font-body text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-3">
                    {resource.category}
                  </span>
                  <h3 className="font-display text-base font-semibold text-neutral-900 mb-2 leading-snug">
                    {resource.title}
                  </h3>
                  <p className="font-body text-neutral-500 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-neutral-100">
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="font-body text-xs text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                      aria-label="Call for more information"
                    >
                      Ask Dr. Misra →
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What to Expect Timeline */}
      <section aria-labelledby="journey-heading" className="section-padding bg-neutral-50 bg-hero-pattern">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="section-label justify-center">
              <span className="w-6 h-px bg-primary-500" />
              Your Care Pathway
              <span className="w-6 h-px bg-primary-500" />
            </span>
            <h2 id="journey-heading" className="font-display text-3xl font-bold text-neutral-900">
              Your Cancer Care Journey at AHPGIC
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                step: '01',
                title: 'Consultation & Evaluation',
                desc: 'Meet Dr. Misra with all your reports. She will take a detailed history, perform a clinical examination, and advise appropriate investigations.',
                color: 'bg-primary-600',
              },
              {
                step: '02',
                title: 'Investigations & Diagnosis',
                desc: 'Imaging (CT/MRI/PET-CT), biopsy, and blood tests to confirm diagnosis, cancer type, and staging.',
                color: 'bg-primary-600',
              },
              {
                step: '03',
                title: 'Tumour Board Review',
                desc: 'Your case is presented at the multidisciplinary tumour board — surgical, medical, and radiation oncologists together formulate the best treatment plan.',
                color: 'bg-primary-600',
              },
              {
                step: '04',
                title: 'Surgery & Treatment',
                desc: 'Planned surgical procedure performed at AHPGIC. Adjuvant therapy (chemotherapy/radiation) coordinated as needed.',
                color: 'bg-primary-600',
              },
              {
                step: '05',
                title: 'Recovery & Follow-up',
                desc: 'Post-operative care, histopathology review, and long-term surveillance plan. Regular follow-up visits to monitor health and detect any recurrence early.',
                color: 'bg-secondary',
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="flex gap-5 mb-6 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white font-body font-bold text-sm flex-shrink-0`}>
                    {item.step}
                  </div>
                  {i < 4 && <div className="w-0.5 h-full bg-neutral-200 mt-2" aria-hidden />}
                </div>
                <div className="bg-white rounded-2xl border border-neutral-100 p-5 shadow-soft flex-1 mb-2">
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="font-body text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section aria-labelledby="faqs-heading" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="section-label justify-center">
              <span className="w-6 h-px bg-primary-500" />
              Common Questions
              <span className="w-6 h-px bg-primary-500" />
            </span>
            <h2 id="faqs-heading" className="font-display text-3xl md:text-4xl font-bold text-neutral-900">
              Frequently Asked
              <span className="text-primary-600"> Questions</span>
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8" role="group" aria-label="Filter FAQs by category">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`font-body text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:border-primary-300 hover:text-primary-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-3">
            {filteredFaqs.map((faq, i) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-neutral-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-neutral-50 transition-colors duration-200"
                  aria-expanded={openFaq === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex items-start gap-3 flex-1 pr-4">
                    <HelpCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="font-body font-semibold text-neutral-800 text-sm leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 border-t border-neutral-100">
                        <div className="flex items-start gap-3 pt-4">
                          <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                          <p className="font-body text-neutral-600 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Still have questions */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-primary-50 border border-primary-100 rounded-2xl px-8 py-6 max-w-lg">
              <BookOpen className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                Still have questions?
              </h3>
              <p className="font-body text-neutral-500 text-sm mb-4">
                Call or visit Dr. Misra at AHPGIC for a personalised consultation.
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-body font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-sm"
                aria-label="Call Dr. Misra"
              >
                <Phone className="w-4 h-4" />
                Call: {siteConfig.phoneDisplay}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
