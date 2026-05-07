'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle2, Microscope, Stethoscope, Star, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: d },
  }),
}

const fadeIn = (d = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, delay: d },
})

const stats = [
  { icon: Trophy,      value: '10+',   label: 'Years Experience' },
  { icon: Stethoscope, value: '1000+', label: 'Surgeries Performed' },
  { icon: Microscope,  value: '6',     label: 'Specialities' },
  { icon: Star,        value: '95%+',  label: 'Success Rate' },
]

const badges = [
  'AHPGIC Certified',
  'MCh Surgical Oncology',
  '1000+ Surgeries',
  '10+ Years Experience',
]

export function Hero() {
  return (
    <section
      aria-label="Hero — Dr. Nitya Nutan Misra Surgical Oncologist"
      className="relative flex flex-col overflow-hidden lg:h-[100dvh]"
      style={{
        background: 'linear-gradient(135deg, #052e2b 0%, #064e3b 100%)',
        minHeight: '100dvh',
        paddingTop: 'var(--navbar-height)',
      }}
    >
      {/* ── Subtle grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden
      />

      {/* ── Radial glow — right-anchored on desktop ── */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-end"
        aria-hidden
      >
        <div
          className="w-[700px] h-[700px] rounded-full translate-x-1/4"
          style={{
            background:
              'radial-gradient(circle, rgba(20,184,166,0.10) 0%, rgba(6,78,59,0.05) 50%, transparent 75%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 flex-1 flex lg:items-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6 lg:py-0">

          {/*
            ┌─────────────────────────────────────────────────────┐
            │  Desktop layout:  [TEXT + STATS]  |  [IMAGE RIGHT] │
            │  Mobile layout:   label → image → text → stats     │
            └─────────────────────────────────────────────────────┘
          */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-16 items-center">

            {/* ══ MOBILE-ONLY LABEL — hidden on lg+ ════════════════ */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={0.05}
              className="order-1 lg:hidden flex items-center justify-center gap-2"
            >
              <span className="w-6 h-px bg-teal-400/60" />
              <span className="text-teal-400/80 text-[10px] font-body font-semibold uppercase tracking-[0.18em]">
                Expert Cancer Care You Can Trust
              </span>
            </motion.div>

            {/* ══ COL 2 — DOCTOR IMAGE (RIGHT) ══════════════════════
                order-2 on mobile (between label and text)
                order-2 on desktop (right column)
            ════════════════════════════════════════════════════════ */}
            <motion.div
              {...fadeIn(0.15)}
              className="order-2 lg:order-2 flex justify-center lg:justify-end items-end relative"
            >
              {/* Decorative diamond background shape */}
              <div
                className="absolute hidden lg:block"
                style={{
                  width: '420px',
                  height: '420px',
                  background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
                  borderRadius: '28% 72% 28% 72% / 72% 28% 72% 28%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -44%) rotate(6deg)',
                  opacity: 0.85,
                  zIndex: 0,
                }}
                aria-hidden
              />

              {/* Subtle glow ring behind doctor */}
              <div
                className="absolute hidden lg:block"
                style={{
                  width: '380px',
                  height: '380px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(251,191,36,0.18) 0%, transparent 70%)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -44%)',
                  filter: 'blur(20px)',
                  zIndex: 0,
                }}
                aria-hidden
              />

              {/* Doctor image */}
              <div
                className="relative z-10
                            w-[280px] sm:w-[320px] lg:w-[460px] xl:w-[520px]
                            lg:-mb-4"
              >
                <Image
                  src="/images/doctor/d-hero-home-1.webp"
                  alt="Dr. Nitya Nutan Misra — Surgical Oncologist"
                  width={760}
                  height={900}
                  priority
                  className="w-full h-auto object-contain select-none drop-shadow-2xl"
                />
              </div>
            </motion.div>

            {/* ══ COL 1 — TEXT CONTENT + STATS (LEFT) ════════════
                order-3 on mobile (below image)
                order-1 on desktop (left column)
            ════════════════════════════════════════════════════════ */}
            <div className="order-3 lg:order-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">

              {/* Desktop-only label */}
              <motion.div
                variants={fadeUp} initial="hidden" animate="show" custom={0.05}
                className="hidden lg:flex items-center gap-2 mb-5"
              >
                <span className="w-6 h-px bg-teal-400/60" />
                <span className="text-teal-400/80 text-[10px] font-body font-semibold uppercase tracking-[0.18em]">
                  Expert Cancer Care You Can Trust
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                variants={fadeUp} initial="hidden" animate="show" custom={0.15}
                className="font-display font-bold text-white leading-[1.08] mb-4"
                style={{ fontSize: 'clamp(2rem, 3.8vw, 3.25rem)' }}
              >
                Precision{' '}
                <span className="text-amber-400">Cancer Surgery.</span>
                <br />
                <span className="font-normal italic text-white/70" style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2.2rem)' }}>
                  Compassionate Care.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={fadeUp} initial="hidden" animate="show" custom={0.25}
                className="font-body text-white/55 text-sm leading-relaxed max-w-md mb-2"
              >
                Dr. Nitya Nutan Misra — Surgical Oncologist &amp; Assistant Professor at Acharya
                Harihar Post Graduate Institute of Cancer, Cuttack, Odisha.
              </motion.p>

              {/* Quote */}
              <motion.p
                variants={fadeUp} initial="hidden" animate="show" custom={0.32}
                className="font-display italic text-amber-400/80 text-sm mb-6"
              >
                &ldquo;Early diagnosis saves lives.&rdquo;
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUp} initial="hidden" animate="show" custom={0.4}
                className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-7"
              >
                <a
                  href={`tel:${siteConfig.phone}`}
                  aria-label={`Call Dr. Nitya Nutan Misra at ${siteConfig.phoneDisplay}`}
                  className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#052e2b] font-body font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-amber-400/25 w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4" />
                  Book Consultation
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-teal-400/50 text-white hover:text-amber-300 font-body font-medium px-7 py-3.5 rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  View Specialities
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* ── Stats row — inline beneath CTAs on desktop ─── */}
              <motion.div
                {...fadeIn(0.35)}
                className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-0 mb-6
                            border border-white/8 rounded-2xl overflow-hidden
                            bg-white/[0.03] backdrop-blur-sm"
              >
                {stats.map(({ icon: Icon, value, label }, i) => (
                  <motion.div
                    key={label}
                    variants={fadeUp} initial="hidden" animate="show" custom={0.45 + i * 0.08}
                    className="flex flex-col items-center lg:items-start gap-1 px-4 py-4
                                border-r border-white/8 last:border-r-0
                                [&:nth-child(2)]:border-r-0 sm:[&:nth-child(2)]:border-r
                                lg:[&:nth-child(2)]:border-r"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-7 h-7 rounded-md border border-white/10 bg-white/5 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-teal-400/80" />
                      </div>
                      <p
                        className="font-display text-amber-400 font-bold leading-none"
                        style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)' }}
                      >
                        {value}
                      </p>
                    </div>
                    <p className="font-body text-white/50 text-[10px] leading-snug">{label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Badge pills */}
              <motion.div
                variants={fadeUp} initial="hidden" animate="show" custom={0.6}
                className="w-full flex flex-wrap justify-center lg:justify-start gap-2"
              >
                {badges.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 border border-white/12 text-white/60 text-[10px] font-body font-medium px-3 py-1 rounded-full"
                  >
                    <CheckCircle2 className="w-3 h-3 text-teal-400/70" />
                    {b}
                  </span>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* ══ BOTTOM TRUST BAR ════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="relative z-10 border-t border-white/10"
      >
        <div className="container-custom py-3">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {badges.map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5 text-white/40 text-xs font-body">
                <CheckCircle2 className="w-3 h-3 text-teal-500/60" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
