import type { Metadata } from 'next'
import { BlogsPageContent } from './BlogsPageContent'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Cancer Health Blog | Dr. Nitya Nutan Misra | Surgical Oncologist',
  description:
    'Read expert articles on breast cancer, thyroid cancer, head & neck cancer, GI cancer, and patient guides by Dr. Nitya Nutan Misra, Surgical Oncologist at AHPGIC Cuttack.',
  alternates: { canonical: `${siteConfig.url}/blogs` },
  openGraph: {
    title: 'Cancer Health Blog | Dr. Nitya Nutan Misra',
    description: 'Expert oncology articles and patient guides.',
    url: `${siteConfig.url}/blogs`,
  },
}

export default function BlogsPage() {
  return <BlogsPageContent />
}
