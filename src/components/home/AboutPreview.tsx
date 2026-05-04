'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { doctorProfile } from '@/features/doctor/doctor.data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.1 },
  }),
}

export function AboutPreview() {
  return (
    <section aria-labelledby="about-preview-heading" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left – visual block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative w-full aspect-[4/5] max-w-[400px] mx-auto lg:mr-auto lg:ml-auto"
          >
            {/* Main card */}
            <div 
              className="group relative rounded-3xl overflow-hidden w-full h-full shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(21,127,114,0.3)]"
              style={{ transform: 'translateZ(0)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
            >
              {/* Full background image */}
              <Image
                src="/images/doctor/dr-about.webp"
                alt="Dr. Nitya Nutan Misra"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent mix-blend-multiply" />

              {/* Floating stat cards */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1 z-20">
                <p className="font-display text-white text-xl font-bold leading-none drop-shadow-sm">1000+</p>
                <p className="font-body text-white/90 text-xs mt-1 font-medium">Cancer Surgeries</p>
              </div>
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1 z-20">
                <p className="font-display text-white text-xl font-bold leading-none drop-shadow-sm">10+</p>
                <p className="font-body text-white/90 text-xs mt-1 font-medium">Years Experience</p>
              </div>

              {/* Bottom Content Block */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end z-20">
                {/* Glassmorphism Container */}
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 transform transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-1 drop-shadow-sm">Dr. Nitya Nutan Misra</h3>
                  <p className="font-body text-primary-200 text-sm md:text-base font-medium mb-1">{doctorProfile.specialization}</p>
                  <p className="font-body text-white/70 text-xs md:text-sm mb-4 sm:mb-5">
                    {doctorProfile.designation} · {doctorProfile.hospital}
                  </p>

                  <div className="font-display text-white/90 text-xs sm:text-sm italic border-l-2 border-primary-400 pl-3 sm:pl-4">
                    "Every patient deserves precision surgery and compassionate support — that is the promise of my practice."
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right – text content */}
          <div>
            <motion.span
              className="section-label"
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}
            >
              <span className="w-6 h-px bg-primary-500" />
              About the Doctor
            </motion.span>

            <motion.h2
              id="about-preview-heading"
              className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-5 leading-tight"
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
            >
              Trusted Surgical Oncologist
              <span className="block text-primary-600">in Odisha</span>
            </motion.h2>

            <motion.p
              className="font-body text-neutral-600 leading-relaxed mb-6"
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
            >
              {doctorProfile.shortBio}
            </motion.p>

            {/* Qualifications */}
            <motion.div
              className="mb-7"
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
            >
              <p className="font-body font-semibold text-neutral-800 text-sm mb-3">Qualifications</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {doctorProfile.qualifications.map((q) => (
                  <div key={q} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    <span className="font-body text-neutral-700 text-sm">{q}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key values */}
            <motion.div
              className="flex flex-wrap gap-2 mb-7"
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={4}
            >
              {['Compassion', 'Precision', 'Comprehensive Cancer Care'].map((val) => (
                <span
                  key={val}
                  className="inline-flex items-center font-body text-sm text-primary-700 bg-primary-50 border border-primary-100 px-4 py-1.5 rounded-full font-medium"
                >
                  {val}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={5}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-body font-semibold text-sm group transition-colors duration-200"
              >
                Read Full Profile
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
