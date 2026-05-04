'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="section-padding bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-secondary/10" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary-600/20" />
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.span
            className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-body font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest border border-white/15"
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-slow" />
            Consultations Available
          </motion.span>

          <motion.h2
            id="cta-heading"
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
          >
            Don't Wait.
            <span className="block text-secondary italic font-normal text-2xl md:text-3xl mt-1">
              Early diagnosis saves lives.
            </span>
          </motion.h2>

          <motion.p
            className="font-body text-white/65 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            If you or a loved one are facing a cancer diagnosis or suspicious symptoms, consult Dr. Nitya Nutan Misra at AHPGIC, Cuttack for expert evaluation and compassionate care.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-600 text-white font-body font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-base w-full sm:w-auto justify-center"
            aria-label={`Call Dr. Misra at ${siteConfig.phoneDisplay}`}
          >
            <Phone className="w-5 h-5" />
            Call: {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/40 text-white font-body font-medium px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-base w-full sm:w-auto justify-center backdrop-blur-sm"
          >
            <Mail className="w-5 h-5" />
            Send a Message
          </Link>
        </motion.div>

        {/* Contact info strip */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { icon: Phone, label: 'Phone', value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
            { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
            { icon: MapPin, label: 'Location', value: 'AHPGIC, Cuttack, Odisha', href: '/contact' },
          ].map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex flex-col items-center gap-2 bg-white/8 border border-white/12 rounded-xl p-4 hover:bg-white/15 transition-all duration-200 group"
              aria-label={`${label}: ${value}`}
            >
              <div className="w-9 h-9 rounded-lg bg-primary-600/40 flex items-center justify-center group-hover:bg-primary-500/50 transition-colors duration-200">
                <Icon className="w-4 h-4 text-white" />
              </div>
              <p className="font-body text-white/50 text-xs">{label}</p>
              <p className="font-body text-white/80 text-xs text-center leading-snug">{value}</p>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
