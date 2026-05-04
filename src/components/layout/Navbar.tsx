'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X, Stethoscope } from 'lucide-react'
import { siteConfig } from '@/config/site'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Patient Corner', href: '/patient-corner' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const solidNav = scrolled || !isHome || mobileOpen

  return (
    <>
      {/* ── Navbar bar ──────────────────────────────────────────── */}
      <header
        style={{ height: 'var(--navbar-height)' }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          solidNav
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-neutral-100'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Dr. Nitya Nutan Misra Home">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              solidNav ? 'bg-primary-600' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Stethoscope className={`w-5 h-5 ${solidNav ? 'text-white' : 'text-white'}`} />
            </div>
            <div className="leading-tight">
              <p className={`font-display font-semibold text-sm leading-none transition-colors duration-300 ${
                solidNav ? 'text-neutral-900' : 'text-white'
              }`}>
                Dr. Nitya Nutan Misra
              </p>
              <p className={`font-body text-xs mt-0.5 transition-colors duration-300 ${
                solidNav ? 'text-primary-600' : 'text-white/80'
              }`}>
                Surgical Oncologist
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 font-body text-sm font-medium rounded-lg transition-all duration-200 group ${
                  pathname === link.href
                    ? solidNav
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-white bg-white/15'
                    : solidNav
                    ? 'text-neutral-600 hover:text-primary-700 hover:bg-primary-50/60'
                    : 'text-white/90 hover:text-white hover:bg-white/15'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-500" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-call text-sm"
              aria-label={`Call Dr. Nitya Nutan Misra at ${siteConfig.phoneDisplay}`}
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-200 ${
              solidNav
                ? 'text-neutral-700 hover:bg-neutral-100'
                : 'text-white hover:bg-white/15'
            }`}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Overlay — rendered OUTSIDE header so it's not
          clipped by the header's stacking context or height ──────── */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-white overflow-y-auto"
          style={{
            top: 'var(--navbar-height)',
            zIndex: 999,
          }}
        >
          <div className="container-custom py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3.5 rounded-xl font-body font-medium text-base transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-primary-700 bg-primary-50 font-semibold'
                    : 'text-neutral-700 hover:text-primary-700 hover:bg-primary-50/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-neutral-100">
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-call w-full justify-center text-base py-3.5"
                aria-label="Call Now"
              >
                <Phone className="w-5 h-5" />
                <span>Call: {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
