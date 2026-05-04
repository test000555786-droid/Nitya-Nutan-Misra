'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, Award, BookOpen, Heart, Phone, Star } from 'lucide-react'
import { doctorProfile, testimonials } from '@/features/doctor/doctor.data'
import { siteConfig } from '@/config/site'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.1 } }),
}

export function AboutPageContent() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="inner-page-hero pt-[calc(var(--navbar-height)+3rem)] pb-16" aria-label="About page hero">
        <div className="container-custom relative z-10 text-center">
          <motion.span
            className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-body font-semibold px-4 py-2 rounded-full mb-5 uppercase tracking-widest border border-white/15"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            About the Doctor
          </motion.span>
          <motion.h1
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
          >
            Dr. Nitya Nutan Misra
          </motion.h1>
          <motion.p
            className="font-body text-white/70 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            Surgical Oncologist · Assistant Professor · AHPGIC, Cuttack
          </motion.p>
          <nav className="mt-4 flex items-center justify-center gap-2 text-white/50 text-sm font-body" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">About</span>
          </nav>
        </div>
      </section>

      {/* Profile Section */}
      <section aria-labelledby="profile-heading" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left sidebar */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.65, ease: 'easeOut' }}
              >
                {/* Profile Image */}
                <div className="mb-6 relative rounded-3xl overflow-hidden shadow-md">
                  <Image
                    src="/images/doctor/dr-about.webp"
                    alt="Dr. Nitya Nutan Misra"
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {doctorProfile.stats.map((stat) => (
                    <div key={stat.label} className="bg-neutral-50 border border-neutral-100 rounded-2xl p-4 text-center">
                      <p className="font-display text-primary-600 text-2xl font-bold leading-none">{stat.value}</p>
                      <p className="font-body text-neutral-500 text-xs mt-1 leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Book CTA */}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-primary w-full justify-center"
                  aria-label="Call to book appointment"
                >
                  <Phone className="w-4 h-4" />
                  Book Appointment
                </a>
              </motion.div>
            </div>

            {/* Right main content */}
            <div className="lg:col-span-3">
              <motion.span className="section-label" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="w-6 h-px bg-primary-500" />
                Full Profile
              </motion.span>

              <motion.h2 className="font-display text-3xl font-bold text-neutral-900 mb-5 leading-tight"
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
                A Dedicated Surgical Oncologist Committed to Precision & Compassion
              </motion.h2>

              {doctorProfile.bio.split('\n\n').map((para, i) => (
                <motion.p key={i} className="font-body text-neutral-600 leading-relaxed mb-4"
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i + 2}>
                  {para}
                </motion.p>
              ))}

              {/* Qualifications */}
              <motion.div className="mt-8 mb-7"
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={5}>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-primary-600" />
                  <h3 className="font-display text-xl font-semibold text-neutral-800">Qualifications</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {doctorProfile.qualifications.map((q) => (
                    <div key={q} className="flex items-center gap-2.5 bg-primary-50 rounded-xl px-4 py-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span className="font-body text-neutral-700 text-sm">{q}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div className="mb-7"
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={6}>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-primary-600" />
                  <h3 className="font-display text-xl font-semibold text-neutral-800">Memberships & Certifications</h3>
                </div>
                <ul className="space-y-2">
                  {doctorProfile.certifications.map((c) => (
                    <li key={c} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="font-body text-neutral-600 text-sm">{c}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section aria-labelledby="achievements-heading" className="section-padding bg-neutral-50 bg-hero-pattern">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="section-label justify-center">
              <span className="w-6 h-px bg-primary-500" />
              Achievements
              <span className="w-6 h-px bg-primary-500" />
            </span>
            <h2 id="achievements-heading" className="font-display text-3xl font-bold text-neutral-900">
              Professional Highlights
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {doctorProfile.achievements.map((ach, i) => (
              <motion.div key={i}
                className="bg-white rounded-2xl p-5 border border-neutral-100 shadow-soft flex items-start gap-3 card-hover"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-primary-600" />
                </div>
                <p className="font-body text-neutral-700 text-sm leading-relaxed">{ach}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section aria-labelledby="values-heading" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="section-label justify-center">
              <span className="w-6 h-px bg-primary-500" />
              Philosophy
              <span className="w-6 h-px bg-primary-500" />
            </span>
            <h2 id="values-heading" className="font-display text-3xl font-bold text-neutral-900">
              Guided by Three Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: 'Compassion',
                desc: "Every patient's fear, hope, and journey is treated with empathy, dignity, and humanity. Cancer care goes beyond surgery.",
              },
              {
                icon: Star,
                title: 'Precision',
                desc: 'Evidence-based surgical planning, meticulous execution, and commitment to oncological safety define every procedure.',
              },
              {
                icon: CheckCircle2,
                title: 'Comprehensive Cancer Care',
                desc: 'From diagnosis to recovery, patients receive multidisciplinary support — surgical, medical, radiation, and palliative.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title}
                className="text-center bg-neutral-50 rounded-2xl p-7 border border-neutral-100"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3">{title}</h3>
                <p className="font-body text-neutral-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Testimonials */}
      <section aria-labelledby="testimonials-about-heading" className="section-padding bg-gradient-to-br from-primary-800 to-primary-950">
        <div className="container-custom">
          <h2 id="testimonials-about-heading" className="font-display text-2xl font-bold text-white text-center mb-8">
            What Patients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.slice(0, 2).map((t, i) => (
              <motion.blockquote key={t.id}
                className="bg-white/8 border border-white/12 rounded-2xl p-6"
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="font-body text-white/75 text-sm leading-relaxed mb-4 italic">"{t.message}"</p>
                <footer>
                  <p className="font-body font-semibold text-white text-sm">{t.name}</p>
                  <p className="font-body text-white/50 text-xs">{t.location} · {t.treatment}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
