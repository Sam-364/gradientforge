export const stack: { category: string; items: string[] }[] = [
  { category: 'Languages', items: ['Python', 'Rust', 'C++', 'Bash'] },
  { category: 'Deep learning', items: ['PyTorch', 'TensorFlow / Keras', 'ONNX', 'Transformers'] },
  {
    category: 'LLM · RAG · Agents',
    items: [
      'LangChain',
      'LangGraph',
      'LlamaIndex',
      'DSPy',
      'GraphRAG',
      'Hybrid retrieval (RRF)',
      'Rerankers',
      'Ragas',
      'LangSmith',
      'Firecrawl',
    ],
  },
  { category: 'Vector & graph stores', items: ['Qdrant', 'Milvus', 'LanceDB', 'Neo4j', 'PostgreSQL / pgvector'] },
  { category: 'Vision & edge', items: ['OpenCV', 'Pytesseract', 'TensorRT', 'OpenVINO'] },
  {
    category: 'Serving & infra',
    items: ['vLLM', 'Triton Inference Server', 'CUDA / cuDNN', 'Docker', 'Kubernetes / Helm', 'Kafka', 'Temporal'],
  },
  { category: 'Observability', items: ['OpenTelemetry', 'Prometheus / Grafana', 'Weights & Biases'] },
  { category: 'Platform', items: ['Linux', 'AWS', 'CI/CD', 'Git', 'FastAPI'] },
];
