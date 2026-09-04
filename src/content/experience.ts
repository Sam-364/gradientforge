export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Machine Learning Engineer I',
    company: 'Skylark Labs',
    companyUrl: 'https://skylarklabs.ai',
    period: 'Jan 2024 — Present',
    location: 'Pune, IN',
    type: 'Full-time',
    highlights: [
      'Engineered 8+ production AI pipelines on open-source LLMs (Llama, LLaVA, NLLB) for multi-modal processing at 95%+ accuracy.',
      'Architected the vLLM migration on NVIDIA Triton: 3.2× throughput and 40% lower latency across 50+ concurrent requests.',
      'Led the Python-to-Rust server migration with PyO3 bindings: 360% faster (5 → 23 FPS) with 60% less memory.',
      'Implemented FP16 / INT8 / INT4 quantization for 4.8× faster inference and 65% memory reduction with no accuracy loss.',
      'Containerized CUDA/cuDNN workloads with Docker for horizontal scaling across 10+ GPU instances.',
      'Spearheading a custom vision-language-action model for robotics, drawing on OpenVLA and LeRobot.',
    ],
  },
  {
    role: 'Data Scientist Intern',
    company: 'Rupeek Finance',
    period: 'Jun — Aug 2023',
    location: 'Bengaluru, IN',
    type: 'Internship',
    highlights: [
      'Built a fraud-detection pipeline with Random Forest, XGBoost and Gradient Boosting over 75,000+ credit reports: 96.8% precision, F1 0.94.',
      'Developed multi-class default-risk models using attention-based DNNs, reaching AUC 0.93 and cutting loan-approval errors by 34%.',
    ],
  },
];
