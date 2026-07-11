'use client';

import * as React from 'react';
import { GitHubLogoIcon, LinkedInLogoIcon } from './custom-icons';
import { Globe, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

type IconName = 'github' | 'linkedin' | 'globe' | 'mail';

const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
  github: GitHubLogoIcon,
  linkedin: LinkedInLogoIcon,
  globe: Globe,
  mail: Mail,
};

export function SocialIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Globe;
  return <Icon className={cn('h-5 w-5', className)} />;
}
