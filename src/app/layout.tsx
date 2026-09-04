import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sambit Kumar Barik — Machine Learning Engineer',
  description:
    'Machine Learning Engineer at Skylark Labs building production inference systems: LLM serving on Triton and vLLM, quantized computer vision, and Rust-backed pipelines.',
  keywords: [
    'Sambit Kumar Barik',
    'Machine Learning Engineer',
    'LLM inference',
    'vLLM',
    'Triton',
    'Computer Vision',
    'Rust',
    'GradientForge',
  ],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Sambit Kumar Barik — Machine Learning Engineer',
    description:
      'Production inference systems: LLM serving, quantized vision pipelines, and the Rust that makes them fast.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
