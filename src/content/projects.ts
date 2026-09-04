export type Project = {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
};

export const projects: Project[] = [
  {
    title: 'LegalVisor',
    category: 'Legal RAG platform',
    description:
      'Retrieval-augmented contract review under Indian law across 13 contract types. Hybrid BGE-M3 dense + sparse retrieval with reciprocal rank fusion over Qdrant, a bge-reranker-v2-m3 cross-encoder, and Qwen2.5-7B-AWQ served on vLLM behind an OpenAI-compatible API.',
    highlights: [
      '8 deterministic guardrails: injection, scope, n-gram citation grounding',
      'Every flag carries a citation grounded to a retrieved chunk',
      'Durable Temporal ingestion across a 9-service uv monorepo',
    ],
    tech: ['Python', 'FastAPI', 'vLLM', 'Qdrant', 'Temporal', 'PostgreSQL', 'Kubernetes', 'Next.js'],
    github: 'https://github.com/Sam-364/LegalVisor',
  },
  {
    title: 'Inferno',
    category: 'LLM inference engine',
    description:
      'Production-grade serving engine that combines the core ideas of vLLM and SGLang: PagedAttention for KV-cache memory, RadixTree prefix caching, continuous batching and speculative decoding.',
    highlights: [
      'OpenAI-compatible REST API, drop-in replacement',
      'INT8 / FP8 quantization with <1% accuracy loss',
      'Llama, Mistral, Qwen and Phi supported',
    ],
    tech: ['Python', 'Rust', 'C++', 'CUDA', 'PagedAttention', 'Speculative decoding'],
    github: 'https://github.com/Sam-364/Inferno',
  },
  {
    title: 'FinRexent',
    category: 'Multi-agent finance',
    description:
      'Investment agent for Indian markets (NSE / BSE) on Llama 3.1-8B via Ollama. Crawls live news from 4+ sources with Firecrawl, runs 8+ technical indicators, and keeps a persistent SQLite memory across sessions.',
    highlights: [
      'Specialized agents for research, analysis and execution',
      'Market-data pipeline with <2s latency',
      'Automated stop-loss and diversification engine',
    ],
    tech: ['Python', 'LangChain', 'Llama 3.1', 'Ollama', 'Firecrawl', 'SQLite'],
    github: 'https://github.com/Sam-364/FinRexent',
  },
  {
    title: 'NNPACK',
    category: 'CPU acceleration',
    description:
      'Low-level acceleration library for neural-network ops on multi-core x86: SIMD-optimized GEMM kernels, Winograd transforms for convolutions and cache-oblivious algorithms for throughput.',
    highlights: [
      'SIMD / AVX matrix-multiplication kernels',
      'Winograd fast convolutions',
      'Cache-oblivious memory access patterns',
    ],
    tech: ['C', 'SIMD', 'AVX', 'Winograd', 'Multi-core'],
    github: 'https://github.com/Sam-364/NNPACK',
  },
  {
    title: 'Forward-Forward',
    category: 'Research implementation',
    description:
      'PyTorch implementation of Hinton’s forward-forward algorithm: two forward passes replace backpropagation, and each layer learns locally by maximizing goodness on real data and minimizing it on negatives.',
    highlights: [
      'Layer-wise local learning, no backward pass',
      'Positive / negative contrastive passes',
      'Backprop-comparable accuracy on MNIST',
    ],
    tech: ['Python', 'PyTorch', 'Contrastive learning'],
    github: 'https://github.com/Sam-364/pytorch_forward_forward',
  },
  {
    title: 'Speech Recognizer',
    category: 'Speech pipeline',
    description:
      'End-to-end speech-to-text pipeline with noise-robust feature extraction, beam-search decoding and chunked streaming inference for continuous audio, emitting structured text for downstream NLP.',
    highlights: [
      'Streaming inference over chunked audio',
      'Noise-robust feature extraction',
      'Structured output for semantic analysis',
    ],
    tech: ['Python', 'Beam search', 'Audio DSP', 'NLP'],
    github: 'https://github.com/Sam-364/Speech-Recognizer',
  },
];
