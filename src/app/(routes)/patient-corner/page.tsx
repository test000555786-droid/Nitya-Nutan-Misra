import type { Metadata } from 'next'
import { PatientCornerContent } from './PatientCornerContent'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Patient Corner | FAQs & Resources | Dr. Nitya Nutan Misra',
  description:
    'Cancer patient resources, FAQs, and guides by Dr. Nitya Nutan Misra — Surgical Oncologist at AHPGIC Cuttack. Get answers to common questions about cancer surgery, diagnosis, and recovery.',
  alternates: { canonical: `${siteConfig.url}/patient-corner` },
  openGraph: {
    title: 'Patient Corner | Dr. Nitya Nutan Misra',
    description: 'Cancer patient resources and FAQs at AHPGIC, Cuttack.',
    url: `${siteConfig.url}/patient-corner`,
  },
}

export default function PatientCornerPage() {
  return <PatientCornerContent />
}
