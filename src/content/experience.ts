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
      'Architected a multimodal GraphRAG platform: Kafka ingestion of documents, video, image, audio and text into Qwen2.5-7B, LLaVA-1.5 and NLLB-200, with Neo4j hybrid retrieval (vector index + LLM-built knowledge graph) over 50K+ documents serving citation-backed answers at 95%+ accuracy.',
      'Migrated inference from Ollama to vLLM on NVIDIA Triton with tensor parallelism and dynamic batching: 3.2× throughput and 40% lower latency across 50+ concurrent requests.',
      'Led the Python-to-Rust migration of the Kepler AI platform server: 360% faster (5 → 23 FPS) and 60% less memory, with every existing Python model integrated through PyO3 and zero-downtime configuration reloads.',
      'Implemented FP16 / BF16 / INT8 / INT4 quantization for custom detectors: 4.8× faster inference, 65% smaller memory footprint and 3.2× faster model loads at 100% detection accuracy, across GPU, CPU, TPU and NPU via ONNX Runtime, TensorRT and OpenVINO.',
      'Containerized the Rust inference pipeline with CUDA/cuDNN for horizontal scaling across 10+ GPU instances, cutting deployment time from 45 to 8 minutes with automated CI/CD.',
      'Spearheading a custom vision-language-action model for robotic manipulation, after OpenVLA and LeRobot: a multimodal PyTorch DataLoader (RGB, depth, proprioception) and a batching collator for 100GB+ training sets.',
    ],
  },
  {
    role: 'Data Scientist Intern',
    company: 'Rupeek Finance',
    period: 'Jun — Aug 2023',
    location: 'Bengaluru, IN',
    type: 'Internship',
    highlights: [
      'Engineered a fraud-detection ensemble (Random Forest, XGBoost, Gradient Boosting) over 75,000+ credit reports: 96.8% precision, 91.3% recall, F1 0.94, and 23% fewer false positives.',
      'Built default-risk classifiers with logistic regression, SVMs and attention-based DNNs, reaching AUC 0.93 and cutting loan-approval errors by 34% across 11,000+ monthly gold-loan applications.',
    ],
  },
];
