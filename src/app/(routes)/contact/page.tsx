import type { Metadata } from 'next'
import { ContactPageContent } from './ContactPageContent'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Contact Dr. Nitya Nutan Misra | Book Appointment | AHPGIC Cuttack',
  description:
    'Contact Dr. Nitya Nutan Misra, Surgical Oncologist at AHPGIC Cuttack. Call +91 70080 16514 to book a consultation. Expert cancer surgery in Odisha.',
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: 'Contact Dr. Nitya Nutan Misra | Book Appointment',
    description: 'Reach out for a cancer surgery consultation at AHPGIC, Cuttack, Odisha.',
    url: `${siteConfig.url}/contact`,
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
