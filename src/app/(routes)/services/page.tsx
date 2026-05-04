import type { Metadata } from 'next'
import { ServicesPageContent } from './ServicesPageContent'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Cancer Surgery Services | Dr. Nitya Nutan Misra | Surgical Oncologist Odisha',
  description:
    'Expert surgical oncology services: Breast Cancer Surgery, Head & Neck Cancer, GI Cancer, Thyroid & Endocrine Tumors, Sarcoma, and Multidisciplinary Cancer Treatment at AHPGIC, Cuttack.',
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: 'Cancer Surgery Services | Dr. Nitya Nutan Misra',
    description: 'Comprehensive surgical oncology care at AHPGIC, Cuttack, Odisha.',
    url: `${siteConfig.url}/services`,
  },
}

export default function ServicesPage() {
  return <ServicesPageContent />
}
