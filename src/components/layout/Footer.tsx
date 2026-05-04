import Link from 'next/link'
import { Phone, Mail, MapPin, Stethoscope, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

const footerLinks = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Dr. Misra', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Patient Corner', href: '/patient-corner' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Breast Cancer Surgery', href: '/services#breast-cancer-surgery' },
    { label: 'Head & Neck Cancer', href: '/services#head-neck-cancer-surgery' },
    { label: 'GI Cancer Surgery', href: '/services#gastrointestinal-cancer-surgery' },
    { label: 'Thyroid & Endocrine', href: '/services#thyroid-endocrine-tumors' },
    { label: 'Sarcoma Surgery', href: '/services#sarcoma-surgery' },
    { label: 'Multidisciplinary Care', href: '/services#multidisciplinary-cancer-treatment' },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-display font-semibold text-sm">Dr. Nitya Nutan Misra</p>
                <p className="text-primary-400 text-xs font-body">Surgical Oncologist</p>
              </div>
            </div>
            <p className="font-body text-neutral-400 text-sm leading-relaxed mb-5">
              Assistant Professor & Surgical Oncologist at Acharya Harihar Post Graduate Institute of Cancer, Cuttack, Odisha.
            </p>
            <div className="p-4 rounded-xl bg-primary-600/10 border border-primary-600/20">
              <p className="font-display text-primary-300 text-sm italic">
                &ldquo;Early diagnosis saves lives.&rdquo;
              </p>
              <p className="font-body text-neutral-500 text-xs mt-1">— Dr. Nitya Nutan Misra</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 font-body text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Specialities
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 font-body text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 group"
                  aria-label="Call Dr. Nitya Nutan Misra"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600/40 transition-colors duration-200">
                    <Phone className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-neutral-500">Phone / WhatsApp</p>
                    <p className="font-body text-sm text-neutral-300 group-hover:text-primary-400 transition-colors duration-200">
                      {siteConfig.phoneDisplay}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 group"
                  aria-label="Email Dr. Nitya Nutan Misra"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600/40 transition-colors duration-200">
                    <Mail className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-neutral-500">Email</p>
                    <p className="font-body text-sm text-neutral-300 group-hover:text-primary-400 transition-colors duration-200 break-all">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-neutral-500">Hospital</p>
                    <p className="font-body text-sm text-neutral-300 leading-snug">
                      {siteConfig.hospital},<br />Cuttack, Odisha
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-neutral-500 text-center sm:text-left">
            © {year} Dr. Nitya Nutan Misra. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="font-body text-xs text-neutral-500 hover:text-neutral-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-neutral-700">|</span>
            <p className="font-body text-xs text-neutral-500">
              Made with precision for comprehensive cancer care
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
