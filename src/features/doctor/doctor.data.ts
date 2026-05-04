import type { DoctorProfile, Testimonial } from '@/types'

export const doctorProfile: DoctorProfile = {
  name: 'Dr. Nitya Nutan Misra',
  designation: 'Assistant Professor',
  specialization: 'Surgical Oncologist',
  hospital: 'Acharya Harihar Post Graduate Institute of Cancer',
  experience: '10+',
  qualifications: [
    'MBBS',
    'MS (General Surgery)',
    'MCh (Surgical Oncology)',
    'FAIS (Fellow – Association of Surgeons of India)',
  ],
  achievements: [
    'Assistant Professor – Department of Surgical Oncology, AHPGIC Cuttack',
    'Expert in complex oncosurgical procedures for breast, head & neck and GI cancers',
    'Trained in multidisciplinary tumour board approach for comprehensive cancer care',
    'Extensive experience in minimally invasive oncological surgeries',
    'Active contributor to cancer awareness and early detection programmes in Odisha',
    'Recognized for compassionate patient-centered care in challenging oncology cases',
  ],
  certifications: [
    'Registered with Medical Council of India',
    'Member – Association of Surgeons of India (ASI)',
    'Member – Indian Association of Surgical Oncology (IASO)',
  ],
  bio: `Dr. Nitya Nutan Misra is a distinguished Surgical Oncologist and Assistant Professor at the Acharya Harihar Post Graduate Institute of Cancer (AHPGIC), Cuttack — one of India's premier dedicated cancer treatment centers. With advanced training in surgical oncology, Dr. Misra has dedicated her career to offering precision-driven, evidence-based cancer surgery to patients across Odisha and beyond.

Her clinical expertise spans the entire spectrum of solid tumour surgeries: from breast cancer and complex head & neck procedures to gastrointestinal malignancies, thyroid & endocrine tumors, and sarcomas. She brings a multidisciplinary approach to every case — collaborating closely with medical oncologists, radiation oncologists, and pathologists to ensure each patient receives a comprehensive, individualized treatment plan.

Dr. Misra is deeply committed to the philosophy that early diagnosis saves lives. She actively engages in community outreach and cancer awareness initiatives, helping patients in Odisha access timely, quality oncological care. Her practice is guided by three core principles: Compassion, Precision, and comprehensive Cancer Care.`,
  shortBio:
    'Surgical Oncologist & Assistant Professor at AHPGIC Cuttack. Specialized in breast, head & neck, GI, thyroid and sarcoma surgeries with a multidisciplinary, patient-centered approach.',
  stats: [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Surgeries Performed', value: '1000+' },
    { label: 'Cancer Specialities', value: '6' },
    { label: 'Patient Success Rate', value: '95%+' },
  ],
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarita Mohanty',
    location: 'Cuttack, Odisha',
    rating: 5,
    message:
      "Dr. Misra's diagnosis was swift and her surgical precision remarkable. After my breast cancer treatment, I feel completely cancer-free. Her calm approach gave our family tremendous confidence during the most difficult time of our lives.",
    treatment: 'Breast Cancer Surgery',
    date: '2024',
  },
  {
    id: '2',
    name: 'Ramesh Kumar Sahoo',
    location: 'Bhubaneswar, Odisha',
    rating: 5,
    message:
      'I was diagnosed with thyroid cancer and was referred to Dr. Misra. She explained the treatment clearly and the surgery was successful. Today I am leading a normal life. She is truly a blessing for cancer patients in Odisha.',
    treatment: 'Thyroid Cancer Surgery',
    date: '2024',
  },
  {
    id: '3',
    name: 'Sunita Panda',
    location: 'Kendrapara, Odisha',
    rating: 5,
    message:
      "My father had gastrointestinal cancer. We were terrified. Dr. Nitya Nutan Misra handled the case with extraordinary expertise and compassion. Her team's comprehensive care made a huge difference. Highly recommend her.",
    treatment: 'Gastrointestinal Cancer',
    date: '2023',
  },
  {
    id: '4',
    name: 'Bijay Mishra',
    location: 'Puri, Odisha',
    rating: 5,
    message:
      'After being diagnosed with head and neck cancer, I felt completely lost. Dr. Misra walked us through every step with empathy and clinical excellence. The outcome exceeded our expectations. Forever grateful.',
    treatment: 'Head & Neck Cancer Surgery',
    date: '2024',
  },
]
