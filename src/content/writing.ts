export type Post = {
  title: string;
  description: string;
  date: string;
  venue: string;
  tags: string[];
  href: string;
};

export const posts: Post[] = [
  {
    title: 'Decoding Rotary Positional Embeddings (RoPE): The Secret Sauce for Smarter Transformers',
    description:
      'How RoPE encodes position through rotation matrices so transformers reason about relative position without absolute encodings, and why LLaMA and Mistral chose it over ALiBi and learned embeddings.',
    date: 'Sep 21, 2024',
    venue: 'Medium',
    tags: ['Positional encoding', 'Transformers', 'LLM'],
    href: 'https://medium.com/@DataDry/decoding-rotary-positional-embeddings-rope-the-secret-sauce-for-smarter-transformers-193cbc01e4ed',
  },
  {
    title: 'Understanding KL Divergence for NLP Fundamentals: A Comprehensive Guide with PyTorch Implementation',
    description:
      'Kullback-Leibler divergence from first principles: its role in language-model training, knowledge distillation and VAE regularization, with PyTorch code for forward and reverse KL and its asymmetry.',
    date: 'Sep 15, 2024',
    venue: 'Medium',
    tags: ['KL divergence', 'Information theory', 'PyTorch'],
    href: 'https://medium.com/@DataDry/understanding-kl-divergence-for-nlp-fundamentals-a-comprehensive-guide-with-pytorch-implementation-c88867ded737',
  },
];
