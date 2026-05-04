'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Ribbon, ScanFace, Stethoscope, Activity, Bone, Users, ArrowRight } from 'lucide-react'
import { services } from '@/features/services/services.data'

const iconMap: Record<string, React.ElementType> = {
  ribbon: Ribbon,
  'scan-face': ScanFace,
  stethoscope: Stethoscope,
  activity: Activity,
  bone: Bone,
  users: Users,
}

export function ServicesPreview() {
  const featured = services.slice(0, 6)

  return (
    <section aria-labelledby="services-preview-heading" className="section-padding bg-neutral-50 bg-hero-pattern">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            className="section-label justify-center"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="w-6 h-px bg-primary-500" />
            Specialities
            <span className="w-6 h-px bg-primary-500" />
          </motion.span>

          <motion.h2
            id="services-preview-heading"
            className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
          >
            Comprehensive Cancer Surgery
            <span className="block text-primary-600">Under One Roof</span>
          </motion.h2>

          <motion.p
            className="font-body text-neutral-500 text-base leading-relaxed"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.2 }}
          >
            Dr. Misra offers expert surgical management across all major solid tumour categories, guided by multidisciplinary tumour board review at AHPGIC.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {featured.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Stethoscope
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-2xl p-6 border border-neutral-100 shadow-soft card-hover cursor-default"
                aria-label={service.title}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="font-body text-neutral-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.shortDesc}
                </p>

                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-primary-600 font-body font-semibold text-sm hover:gap-2.5 transition-all duration-200 group/link"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.article>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <Link href="/services" className="btn-primary">
            View All Specialities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
