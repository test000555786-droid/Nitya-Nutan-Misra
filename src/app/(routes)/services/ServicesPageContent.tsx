'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Ribbon, ScanFace, Stethoscope, Activity, Bone, Users, CheckCircle2, Phone } from 'lucide-react'
import { services } from '@/features/services/services.data'
import { siteConfig } from '@/config/site'

const iconMap: Record<string, React.ElementType> = {
  ribbon: Ribbon,
  'scan-face': ScanFace,
  stethoscope: Stethoscope,
  activity: Activity,
  bone: Bone,
  users: Users,
}

export function ServicesPageContent() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="inner-page-hero pt-[calc(var(--navbar-height)+3rem)] pb-16" aria-label="Services page hero">
        <div className="container-custom relative z-10 text-center">
          <motion.span
            className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-body font-semibold px-4 py-2 rounded-full mb-5 uppercase tracking-widest border border-white/15"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            Expert Surgical Oncology
          </motion.span>
          <motion.h1
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
          >
            Our Specialities &amp; Services
          </motion.h1>
          <motion.p
            className="font-body text-white/70 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive cancer surgery with precision, guided by multidisciplinary tumour board review at AHPGIC, Cuttack.
          </motion.p>
          <nav className="mt-4 flex items-center justify-center gap-2 text-white/50 text-sm font-body" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Services</span>
          </nav>
        </div>
      </section>

      {/* Services List */}
      <section aria-labelledby="services-list-heading" className="section-padding bg-white">
        <div className="container-custom">
          <h2 id="services-list-heading" className="sr-only">All Cancer Surgery Services</h2>
          <div className="space-y-12">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Stethoscope
              const isEven = i % 2 === 0
              return (
                <motion.article
                  key={service.id}
                  id={service.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="grid lg:grid-cols-2 gap-10 items-start"
                  aria-labelledby={`service-${service.id}-heading`}
                >
                  {/* Text side */}
                  <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                    {/* Service icon + title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="font-body text-xs text-primary-600 font-semibold uppercase tracking-widest block">
                          Speciality 0{service.id}
                        </span>
                        <h3 id={`service-${service.id}-heading`} className="font-display text-2xl font-bold text-neutral-900 leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {service.fullDesc.split('\n\n').map((para, pi) => (
                      <p key={pi} className="font-body text-neutral-600 leading-relaxed mb-4">{para}</p>
                    ))}

                    {/* Benefits */}
                    <div className="mt-4 mb-6">
                      <p className="font-body font-semibold text-neutral-800 text-sm mb-3">Key Benefits</p>
                      <ul className="space-y-2" aria-label={`Benefits of ${service.title}`}>
                        {service.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                            <span className="font-body text-neutral-600 text-sm">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-body font-semibold text-sm border border-primary-200 hover:border-primary-400 hover:bg-primary-50 px-5 py-2.5 rounded-xl transition-all duration-200"
                      aria-label={`Enquire about ${service.title}`}
                    >
                      <Phone className="w-4 h-4" />
                      Enquire About This Service
                    </a>
                  </div>

                  {/* Visual side */}
                  <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 border border-primary-100 h-full min-h-[260px] flex flex-col justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary-600 flex items-center justify-center mb-5">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-display text-xl font-semibold text-primary-900 mb-2">{service.title}</h4>
                      <p className="font-body text-primary-700/70 text-sm leading-relaxed">{service.shortDesc}</p>

                      <div className="mt-6 pt-6 border-t border-primary-200">
                        <p className="font-body text-xs text-primary-600 font-semibold uppercase tracking-widest mb-2">
                          All cases reviewed by
                        </p>
                        <p className="font-body text-primary-800 text-sm font-medium">
                          Multidisciplinary Tumour Board · AHPGIC, Cuttack
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section aria-labelledby="services-cta-heading" className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary-800 to-primary-950 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-pattern opacity-30" aria-hidden />
            <div className="relative z-10">
              <h2 id="services-cta-heading" className="font-display text-2xl md:text-3xl font-bold mb-3">
                Not sure which service you need?
              </h2>
              <p className="font-body text-white/70 mb-7 max-w-lg mx-auto text-base">
                Book a consultation with Dr. Nitya Nutan Misra for an expert evaluation and personalized treatment plan.
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-600 text-white font-body font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Call to book consultation"
              >
                <Phone className="w-5 h-5" />
                Call: {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
