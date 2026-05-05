'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle2,
  AlertCircle, Loader2,
} from 'lucide-react'
import { siteConfig } from '@/config/site'

interface FormData {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

const initialForm: FormData = { name: '', phone: '', email: '', subject: '', message: '' }

const subjects = [
  'Book Consultation',
  'Breast Cancer Surgery',
  'Head & Neck Cancer',
  'Gastrointestinal Cancer',
  'Thyroid & Endocrine Tumors',
  'Sarcoma Surgery',
  'Second Opinion',
  'General Inquiry',
]

export function ContactPageContent() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[+\d\s-]{8,15}$/.test(form.phone)) {
      newErrors.phone = 'Enter a valid phone number'
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address'
    }
    if (!form.subject) newErrors.subject = 'Please select a subject'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    
    // Small delay for UI feedback
    await new Promise((res) => setTimeout(res, 800))
    
    const phoneNumber = siteConfig.phone.replace(/[^0-9]/g, '')
    const whatsappMessage = `*New Enquiry from Website*
*Name:* ${form.name}
*Phone:* ${form.phone}
*Email:* ${form.email || 'N/A'}
*Subject:* ${form.subject}

*Message:*
${form.message}`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')

    setStatus('success')
    setForm(initialForm)
  }

  const inputClass = (field: keyof FormData) =>
    `w-full font-body text-sm text-neutral-800 bg-white border rounded-xl px-4 py-3 outline-none transition-all duration-200 placeholder:text-neutral-400 ${
      errors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
        : 'border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-50'
    }`

  return (
    <div>
      {/* Hero Banner */}
      <section className="inner-page-hero pt-[calc(var(--navbar-height)+3rem)] pb-16" aria-label="Contact page hero">
        <div className="container-custom relative z-10 text-center">
          <motion.span
            className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-body font-semibold px-4 py-2 rounded-full mb-5 uppercase tracking-widest border border-white/15"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            Book a Consultation
          </motion.span>
          <motion.h1
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="font-body text-white/70 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            Reach Dr. Nitya Nutan Misra at his clinic in Cuttack for cancer consultations, second opinions, or general enquiries.
          </motion.p>
          <nav className="mt-4 flex items-center justify-center gap-2 text-white/50 text-sm font-body" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Contact</span>
          </nav>
        </div>
      </section>

      {/* Contact Content */}
      <section aria-labelledby="contact-section-heading" className="section-padding bg-white">
        <div className="container-custom">
          <h2 id="contact-section-heading" className="sr-only">Contact Information and Form</h2>
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Left: Info Cards */}
            <div className="lg:col-span-2 space-y-5">
              {/* Quick contact cards */}
              {[
                {
                  icon: Phone,
                  label: 'Phone / WhatsApp',
                  value: siteConfig.phoneDisplay,
                  sub: 'Call or WhatsApp for appointments',
                  href: `tel:${siteConfig.phone}`,
                  cta: 'Call Now',
                  highlight: true,
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: siteConfig.email,
                  sub: 'Send your query via email',
                  href: `mailto:${siteConfig.email}`,
                  cta: 'Send Email',
                  highlight: false,
                },
                {
                  icon: MapPin,
                  label: 'Clinic Address',
                  value: siteConfig.hospital,
                  sub: 'Kathagola, Ring Rd, Cuttack, Odisha 753110',
                  href: 'https://maps.google.com/?q=Sai+shree+polyclinic+Cuttack+At-+Kathagola,+Ring+Rd,+near+Shree+Maa,+Cuttack,+Odisha+753110',
                  cta: 'Get Directions',
                  highlight: false,
                },
              ].map(({ icon: Icon, label, value, sub, href, cta, highlight }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-2xl p-4 sm:p-5 border overflow-hidden ${
                    highlight
                      ? 'bg-gradient-to-br from-primary-700 to-primary-900 border-primary-600 text-white'
                      : 'bg-white border-neutral-100 shadow-soft'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      highlight ? 'bg-white/15' : 'bg-primary-50'
                    }`}>
                      <Icon className={`w-5 h-5 ${highlight ? 'text-white' : 'text-primary-600'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-body text-xs font-semibold uppercase tracking-wider mb-1 ${
                        highlight ? 'text-white/60' : 'text-neutral-400'
                      }`}>{label}</p>
                      <p className={`font-body font-semibold text-sm mb-0.5 break-all ${
                        highlight ? 'text-white' : 'text-neutral-800'
                      }`}>{value}</p>
                      <p className={`font-body text-xs mb-3 ${highlight ? 'text-white/60' : 'text-neutral-500'}`}>{sub}</p>
                      <a
                        href={href}
                        target={label === 'Clinic Address' ? '_blank' : undefined}
                        rel={label === 'Clinic Address' ? 'noopener noreferrer' : undefined}
                        className={`inline-flex items-center gap-1.5 font-body text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 ${
                          highlight
                            ? 'bg-white text-primary-700 hover:bg-primary-50'
                            : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
                        }`}
                        aria-label={`${cta}: ${value}`}
                      >
                        {cta} →
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Hours */}
              <motion.div
                className="bg-neutral-50 border border-neutral-100 rounded-2xl p-5"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <h3 className="font-display font-semibold text-neutral-900 text-base">OPD Hours</h3>
                </div>
                <div className="space-y-2 text-sm font-body">
                  {[
                    { day: 'Monday – Friday', time: '9:00 AM – 4:00 PM' },
                    { day: 'Saturday', time: '9:00 AM – 1:00 PM' },
                    { day: 'Sunday', time: 'Emergency Only' },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between items-center gap-2 flex-wrap py-1.5 border-b border-neutral-100 last:border-0">
                      <span className="text-neutral-600">{day}</span>
                      <span className="text-neutral-800 font-medium">{time}</span>
                    </div>
                  ))}
                </div>
                <p className="font-body text-xs text-neutral-400 mt-3">
                  * OPD schedule subject to change. Call ahead to confirm.
                </p>
              </motion.div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-white border border-neutral-100 rounded-3xl p-4 sm:p-7 md:p-8 shadow-card"
              >
                <h2 className="font-display text-2xl font-bold text-neutral-900 mb-1">Send a Message</h2>
                <p className="font-body text-neutral-500 text-sm mb-7">
                  Fill in your details and Dr. Misra's team will respond within 24 hours.
                </p>

                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">Redirecting to WhatsApp!</h3>
                    <p className="font-body text-neutral-500 text-sm max-w-sm">
                      Thank you for reaching out. Please complete the message on WhatsApp to send it to Dr. Misra's team.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 font-body text-sm text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block font-body text-sm font-medium text-neutral-700 mb-1.5">
                          Full Name <span className="text-red-500" aria-hidden>*</span>
                        </label>
                        <input
                          id="name" name="name" type="text"
                          value={form.name} onChange={handleChange}
                          placeholder="Your full name"
                          className={inputClass('name')}
                          autoComplete="name"
                          aria-required="true"
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="flex items-center gap-1 mt-1 text-xs text-red-500 font-body" role="alert">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block font-body text-sm font-medium text-neutral-700 mb-1.5">
                          Phone Number <span className="text-red-500" aria-hidden>*</span>
                        </label>
                        <input
                          id="phone" name="phone" type="tel"
                          value={form.phone} onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className={inputClass('phone')}
                          autoComplete="tel"
                          aria-required="true"
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        {errors.phone && (
                          <p id="phone-error" className="flex items-center gap-1 mt-1 text-xs text-red-500 font-body" role="alert">
                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                      <label htmlFor="email" className="block font-body text-sm font-medium text-neutral-700 mb-1.5">
                        Email Address <span className="text-neutral-400 font-normal">(optional)</span>
                      </label>
                      <input
                        id="email" name="email" type="email"
                        value={form.email} onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass('email')}
                        autoComplete="email"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="flex items-center gap-1 mt-1 text-xs text-red-500 font-body" role="alert">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="mb-4">
                      <label htmlFor="subject" className="block font-body text-sm font-medium text-neutral-700 mb-1.5">
                        Subject <span className="text-red-500" aria-hidden>*</span>
                      </label>
                      <select
                        id="subject" name="subject"
                        value={form.subject} onChange={handleChange}
                        className={`${inputClass('subject')} cursor-pointer`}
                        aria-required="true"
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                      >
                        <option value="">Select a subject…</option>
                        {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.subject && (
                        <p id="subject-error" className="flex items-center gap-1 mt-1 text-xs text-red-500 font-body" role="alert">
                          <AlertCircle className="w-3 h-3" /> {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <label htmlFor="message" className="block font-body text-sm font-medium text-neutral-700 mb-1.5">
                        Your Message <span className="text-red-500" aria-hidden>*</span>
                      </label>
                      <textarea
                        id="message" name="message"
                        value={form.message} onChange={handleChange}
                        placeholder="Briefly describe your condition, concerns, or questions…"
                        rows={5}
                        className={`${inputClass('message')} resize-none`}
                        aria-required="true"
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="flex items-center gap-1 mt-1 text-xs text-red-500 font-body" role="alert">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-body font-semibold px-6 py-3.5 rounded-xl shadow-primary hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed text-base"
                      aria-label="Submit contact form"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send via WhatsApp
                        </>
                      )}
                    </button>

                    <p className="font-body text-xs text-neutral-400 text-center mt-4">
                      Or call directly:{' '}
                      <a href={`tel:${siteConfig.phone}`} className="text-primary-600 font-semibold hover:text-primary-700">
                        {siteConfig.phoneDisplay}
                      </a>
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section aria-labelledby="map-heading" className="pb-16 bg-white">
        <div className="container-custom">
          <h2 id="map-heading" className="font-display text-2xl font-bold text-neutral-900 mb-6 text-center">
            Find Us at our Clinic in Cuttack
          </h2>
          <div className="rounded-3xl overflow-hidden shadow-card border border-neutral-100 aspect-video w-full max-h-[450px]">
            <iframe
              title="Clinic Location - Sai shree polyclinic, Cuttack, Odisha"
              src="https://www.google.com/maps?q=Sai+shree+polyclinic+Cuttack+At-+Kathagola,+Ring+Rd,+near+Shree+Maa,+Cuttack,+Odisha+753110&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a
              href="https://maps.google.com/?q=Sai+shree+polyclinic+Cuttack+At-+Kathagola,+Ring+Rd,+near+Shree+Maa,+Cuttack,+Odisha+753110"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="Get directions to the clinic on Google Maps"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-secondary"
              aria-label="Call to confirm address"
            >
              <Phone className="w-4 h-4" />
              Call to Confirm
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
