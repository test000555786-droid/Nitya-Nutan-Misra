import type { Metadata } from 'next'
import { AboutPageContent } from './AboutPageContent'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: `About Dr. Nitya Nutan Misra | Surgical Oncologist Cuttack Odisha`,
  description: `Learn about Dr. Nitya Nutan Misra — Surgical Oncologist and Assistant Professor at AHPGIC Cuttack. Expert in breast, head & neck, GI, thyroid, and sarcoma cancer surgery.`,
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: `About Dr. Nitya Nutan Misra | Surgical Oncologist`,
    description: `Surgical Oncologist & Assistant Professor at Acharya Harihar Post Graduate Institute of Cancer, Cuttack, Odisha.`,
    url: `${siteConfig.url}/about`,
  },
}

export default function AboutPage() {
  return <AboutPageContent />
}
