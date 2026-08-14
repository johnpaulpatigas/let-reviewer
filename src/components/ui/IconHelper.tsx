import React from 'react';
import { BookOpen } from 'lucide-react';
import { ICON_MAP } from './iconMap';

interface IconHelperProps {
  name: string;
  className?: string;
}

export const IconHelper: React.FC<IconHelperProps> = ({ name, className = 'w-5 h-5' }) => {
  const IconComponent = (name && ICON_MAP[name]) ? ICON_MAP[name] : BookOpen;
  return <IconComponent className={className} />;
};
