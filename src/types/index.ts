export interface Service {
  id: string
  title: string
  slug: string
  shortDesc: string
  fullDesc: string
  icon: string
  benefits: string[]
  image?: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
  author: string
  tags: string[]
  image?: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  message: string
  treatment: string
  date?: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface DoctorProfile {
  name: string
  designation: string
  specialization: string
  hospital: string
  experience: string
  qualifications: string[]
  achievements: string[]
  certifications: string[]
  bio: string
  shortBio: string
  stats: { label: string; value: string }[]
}
