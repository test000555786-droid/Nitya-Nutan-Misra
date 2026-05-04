import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: '1',
    title: 'Breast Cancer Surgery',
    slug: 'breast-cancer-surgery',
    shortDesc:
      'Advanced surgical treatment for breast cancer including breast-conserving surgery, mastectomy, and oncoplastic techniques.',
    fullDesc: `Breast cancer is one of the most common cancers among women, and surgical intervention remains a cornerstone of treatment. Dr. Nitya Nutan Misra offers the full spectrum of breast cancer surgical procedures tailored to the disease stage, tumour biology, and patient preference.

Her expertise covers breast-conserving surgery (lumpectomy), modified radical mastectomy, sentinel lymph node biopsy, axillary lymph node dissection, and oncoplastic breast surgery — combining oncological safety with aesthetic outcomes.

Every case is evaluated through a multidisciplinary tumour board to ensure optimal treatment planning.`,
    icon: 'ribbon',
    benefits: [
      'Tumour-stage-appropriate surgical planning',
      'Oncoplastic reconstruction techniques',
      'Minimally invasive sentinel node biopsy',
      'Pre-operative and post-operative counselling',
      'Coordination with medical and radiation oncology',
    ],
  },
  {
    id: '2',
    title: 'Head & Neck Cancer Surgery',
    slug: 'head-neck-cancer-surgery',
    shortDesc:
      'Expert surgical management of oral, throat, laryngeal, and salivary gland cancers with functional preservation.',
    fullDesc: `Head and neck cancers encompass a wide range of malignancies including cancers of the oral cavity, oropharynx, hypopharynx, larynx, and salivary glands. These require meticulous surgical skill given the complex anatomy and critical functional structures involved.

Dr. Misra specialises in radical neck dissections, parotidectomy, thyroidectomy for malignancy, laryngectomy, and wide local excision with reconstruction. The goal is always to achieve clear oncological margins while preserving speech, swallowing, and quality of life.`,
    icon: 'scan-face',
    benefits: [
      'Function-preserving surgical techniques',
      'Reconstructive surgery for complex defects',
      'Endoscopic-assisted approaches where suitable',
      'Multidisciplinary team support',
      'Comprehensive rehabilitation planning',
    ],
  },
  {
    id: '3',
    title: 'Gastrointestinal Cancer Surgery',
    slug: 'gastrointestinal-cancer-surgery',
    shortDesc:
      'Comprehensive surgical care for cancers of the stomach, colon, rectum, liver, pancreas, and oesophagus.',
    fullDesc: `Gastrointestinal (GI) cancers require highly specialised surgical expertise. Dr. Nitya Nutan Misra performs surgeries for a full range of GI malignancies including oesophageal cancer, gastric cancer, colorectal cancer, hepatocellular carcinoma, cholangiocarcinoma, and pancreatic cancer.

Procedures range from minimally invasive laparoscopic resections to complex open surgeries such as Whipple's procedure (pancreaticoduodenectomy), low anterior resections, and hemihepatectomy — always guided by oncological principles and evidence-based protocols.`,
    icon: 'stethoscope',
    benefits: [
      'Laparoscopic and open surgical options',
      'Cytoreductive surgery with HIPEC where indicated',
      'Bowel reconstruction and anastomosis',
      'Liver resection and ablative techniques',
      'Post-surgical oncology follow-up programme',
    ],
  },
  {
    id: '4',
    title: 'Thyroid & Endocrine Tumors',
    slug: 'thyroid-endocrine-tumors',
    shortDesc:
      'Precise surgical treatment for thyroid, parathyroid, and adrenal tumors with minimal complications.',
    fullDesc: `Thyroid cancers — including papillary, follicular, medullary, and anaplastic subtypes — along with parathyroid and adrenal tumours, require careful surgical planning and execution given proximity to vital nerves and structures.

Dr. Misra performs total thyroidectomy, hemithyroidectomy, parathyroidectomy, adrenalectomy, and neck dissection for nodal metastases with meticulous preservation of recurrent laryngeal nerves and parathyroid function, minimising complications such as hoarseness or hypocalcaemia.`,
    icon: 'activity',
    benefits: [
      'Nerve-monitoring during thyroid surgery',
      'Minimally invasive thyroid approaches',
      'Parathyroid identification and preservation',
      'Post-operative iodine therapy coordination',
      'Long-term thyroid cancer surveillance plans',
    ],
  },
  {
    id: '5',
    title: 'Sarcoma Surgery',
    slug: 'sarcoma-surgery',
    shortDesc:
      'Specialist limb-salvage and wide-excision surgery for soft tissue and bone sarcomas.',
    fullDesc: `Sarcomas are rare but aggressive tumours arising from soft tissues (muscles, fat, nerves, blood vessels) or bone. They demand specialised expertise for wide-margin excision while preserving maximum limb function.

Dr. Nitya Nutan Misra is trained in wide local excision, limb-salvage surgery, and compartmentectomy for soft tissue sarcomas. For retroperitoneal sarcomas, she performs complex resections in coordination with vascular and reconstructive surgery teams. Post-operative adjuvant therapy is planned collaboratively.`,
    icon: 'bone',
    benefits: [
      'Limb-salvage over amputation wherever feasible',
      'Wide-margin excision with clear histological margins',
      'Intraoperative frozen section guidance',
      'Coordination with radiation and medical oncology',
      'Multidisciplinary sarcoma tumour board review',
    ],
  },
  {
    id: '6',
    title: 'Multidisciplinary Cancer Treatment',
    slug: 'multidisciplinary-cancer-treatment',
    shortDesc:
      'Integrated tumour board-driven care combining surgery, chemotherapy, radiation, and supportive oncology.',
    fullDesc: `Modern cancer care is fundamentally multidisciplinary. Dr. Misra firmly believes that the best outcomes arise when surgical oncologists, medical oncologists, radiation oncologists, pathologists, radiologists, and palliative care specialists work together.

At AHPGIC, she participates in and leads tumour board meetings to formulate individualised treatment plans for every patient. This ensures each case is reviewed comprehensively — and the most appropriate combination of surgery, neoadjuvant or adjuvant chemotherapy, radiation, targeted therapy, or immunotherapy is deployed.`,
    icon: 'users',
    benefits: [
      'Weekly multidisciplinary tumour board meetings',
      'Personalised cancer treatment protocols',
      'Neoadjuvant and adjuvant therapy planning',
      'Palliative and supportive care integration',
      'Clinical trial and research access',
    ],
  },
]
