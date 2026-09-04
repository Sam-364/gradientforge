import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiMedium } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import type { SocialKey } from '@/content/site';

const icons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  x: FaXTwitter,
  medium: SiMedium,
  email: FiMail,
};

export default function SocialIcon({
  name,
  className = '',
}: {
  name: SocialKey;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
