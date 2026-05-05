import type { FAQ } from '@/types'

export const faqs: FAQ[] = [
  {
    id: '1',
    category: 'Appointments',
    question: 'How do I book a consultation with Dr. Nitya Nutan Misra?',
    answer:
      'You can book a consultation by calling +91 94388 44662 directly. Outpatient consultations are available at Acharya Harihar Post Graduate Institute of Cancer (AHPGIC), Cuttack. Please carry all previous medical records, imaging reports, biopsy reports, and current medications.',
  },
  {
    id: '2',
    category: 'Appointments',
    question: 'What documents should I bring to my first appointment?',
    answer:
      'Please bring: (1) All prior medical reports, lab tests, and imaging (X-ray, CT, MRI, PET-CT, ultrasound). (2) Any biopsy or histopathology reports. (3) Previous prescription slips and medication list. (4) A government ID for registration. Bringing complete records ensures the most informed assessment at your first visit.',
  },
  {
    id: '3',
    category: 'Diagnosis',
    question: 'What is a biopsy and do I always need one before surgery?',
    answer:
      'A biopsy is the removal of a small tissue sample to examine under a microscope to confirm cancer. In most cases, a biopsy is essential before surgery to confirm the cancer type, grade, and guide the appropriate treatment plan. Types include FNAC (Fine Needle Aspiration Cytology), core needle biopsy, and excision biopsy. Dr. Misra will advise the most appropriate type for your situation.',
  },
  {
    id: '4',
    category: 'Diagnosis',
    question: 'What imaging tests are required for cancer diagnosis?',
    answer:
      'Depending on the suspected cancer, you may need an ultrasound, CT scan, MRI, PET-CT scan, or nuclear medicine study. These help determine the tumour size, location, and whether cancer has spread (staging). Dr. Misra will guide you on exactly which investigations are needed based on your symptoms and initial evaluation.',
  },
  {
    id: '5',
    category: 'Surgery',
    question: 'How long is the recovery after cancer surgery?',
    answer:
      'Recovery time varies depending on the type and complexity of surgery. Minor procedures may allow discharge in 2–3 days with full recovery in 2–4 weeks. Major surgeries like gastrointestinal resections or radical neck dissections may require 7–14 days of hospitalisation and 6–8 weeks for full recovery. Dr. Misra will give you a personalised recovery plan specific to your procedure.',
  },
  {
    id: '6',
    category: 'Surgery',
    question: 'Is it possible to preserve function (e.g., voice, swallowing) after head and neck cancer surgery?',
    answer:
      'Preservation of function is a primary goal of modern head and neck cancer surgery. Dr. Misra employs function-preserving techniques including nerve monitoring to protect the voice nerve during thyroid surgery, and collaborates with speech therapists and reconstructive surgeons. While some functional impact may be unavoidable in advanced cases, every effort is made to minimise it.',
  },
  {
    id: '7',
    category: 'Treatment',
    question: 'Will I need chemotherapy or radiation after surgery?',
    answer:
      'This depends on the cancer type, stage, and histopathology report. Some early-stage cancers require surgery alone. Others may need adjuvant (post-surgery) chemotherapy, radiation therapy, targeted therapy, or hormone therapy. At AHPGIC, Dr. Misra works with a multidisciplinary team to plan the most appropriate adjuvant treatment for each patient.',
  },
  {
    id: '8',
    category: 'Treatment',
    question: 'What is a multidisciplinary tumour board?',
    answer:
      "A tumour board is a meeting of specialists — surgical oncologists, medical oncologists, radiation oncologists, radiologists, pathologists, and others — who collectively review complex cancer cases and agree on the best treatment plan. At AHPGIC, every patient's case is presented at the tumour board before treatment begins, ensuring the highest standard of care.",
  },
  {
    id: '9',
    category: 'General',
    question: 'Can cancer be cured with surgery alone?',
    answer:
      'For several early-stage cancers — including some breast, thyroid, GI, and skin cancers — surgery alone can achieve cure. However, many cancers require multimodality treatment (surgery plus chemotherapy and/or radiation) for the best outcomes. The goal of treatment depends on the disease stage and biology. Dr. Misra will be candid about the aims — curative vs. palliative — for your specific case.',
  },
  {
    id: '10',
    category: 'General',
    question: 'Is a second opinion advisable before cancer surgery?',
    answer:
      'Yes, seeking a second opinion is entirely appropriate and even encouraged for major cancer surgeries. Dr. Misra welcomes patients who wish to have their case reviewed externally and will provide complete medical records for this purpose. A second opinion can provide reassurance and may occasionally offer alternative perspectives on treatment options.',
  },
]

export const patientResources = [
  {
    id: '1',
    title: 'Cancer Diagnosis: Understanding Your Pathology Report',
    description:
      'A plain-language guide to help you understand what your biopsy report means, the cancer grade, and what comes next.',
    icon: 'file-text',
    category: 'Guide',
  },
  {
    id: '2',
    title: 'Preparing for Surgery: A Checklist',
    description:
      'Everything you need to do in the days before your cancer surgery — from fasting instructions to what to bring to the hospital.',
    icon: 'clipboard-list',
    category: 'Checklist',
  },
  {
    id: '3',
    title: 'Questions to Ask Your Surgical Oncologist',
    description:
      'A printable list of 20 important questions to ask Dr. Misra at your consultation to make the most of your appointment.',
    icon: 'help-circle',
    category: 'Guide',
  },
  {
    id: '4',
    title: 'Nutrition During Cancer Treatment',
    description:
      'Guidance on maintaining good nutrition during chemotherapy, radiation, and surgical recovery to support healing.',
    icon: 'heart',
    category: 'Health Guide',
  },
]
