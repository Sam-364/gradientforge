export type SocialKey = 'github' | 'linkedin' | 'x' | 'medium' | 'email';

export const site = {
  name: 'Sambit Kumar Barik',
  firstName: 'Sambit',
  brand: 'gradientforge',
  role: 'Machine Learning Engineer',
  company: { name: 'Skylark Labs', url: 'https://skylarklabs.ai' },
  location: 'Pune, India',
  locationShort: 'Pune, IN',
  coordinates: '18.52°N 73.85°E',
  timeZone: 'Asia/Kolkata',
  timeZoneLabel: 'IST · UTC+05:30',
  email: 'sambitbarik70@gmail.com',
  resume: '/resume.pdf',
  github: 'https://github.com/Sam-364',
  medium: 'https://medium.com/@DataDry',
};

export const socials: {
  key: SocialKey;
  name: string;
  handle: string;
  href: string;
}[] = [
  {
    key: 'github',
    name: 'GitHub',
    handle: 'Sam-364',
    href: 'https://github.com/Sam-364',
  },
  {
    key: 'linkedin',
    name: 'LinkedIn',
    handle: 'sambit-kumar-barik',
    href: 'https://www.linkedin.com/in/sambit-kumar-barik-1237ba204/',
  },
  {
    key: 'x',
    name: 'X',
    handle: '@Sambitk_7',
    href: 'https://twitter.com/Sambitk_7',
  },
  {
    key: 'medium',
    name: 'Medium',
    handle: '@DataDry',
    href: 'https://medium.com/@DataDry',
  },
  {
    key: 'email',
    name: 'Email',
    handle: 'sambitbarik70@gmail.com',
    href: 'mailto:sambitbarik70@gmail.com',
  },
];

export const sections = [
  { id: 'about', index: '01', label: 'About' },
  { id: 'experience', index: '02', label: 'Experience' },
  { id: 'projects', index: '03', label: 'Projects' },
  { id: 'stack', index: '04', label: 'Stack' },
  { id: 'writing', index: '05', label: 'Writing' },
  { id: 'contact', index: '06', label: 'Contact' },
];

export const now = [
  'Building a vision-language-action model for robotics at Skylark Labs',
  'Shipping Inferno, a from-scratch LLM inference engine',
  'Writing about transformer internals on Medium',
];

export const metrics = [
  { value: '2+', label: 'Years shipping production ML' },
  { value: '8+', label: 'AI pipelines in production' },
  { value: '3.2×', label: 'Throughput gain, vLLM on Triton' },
  { value: '360%', label: 'Speed-up from Python → Rust' },
];
