import React from 'react';
import {
  BookOpen,
  Languages,
  Calculator,
  FlaskConical,
  Landmark,
  Laptop,
  GraduationCap,
  Users,
  Compass,
  CheckCircle2,
  FileText,
  Tv,
  ShieldCheck,
  Award,
  Clock,
  HelpCircle,
  Flame,
  Bookmark,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Sparkles,
  Search,
  Filter,
  Check,
  X,
  AlertCircle,
  Layers,
  BarChart3,
  Home,
  BookMarked,
  BrainCircuit,
  SlidersHorizontal,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Languages,
  Calculator,
  FlaskConical,
  Landmark,
  Laptop,
  GraduationCap,
  Users,
  Compass,
  CheckCircle2,
  FileText,
  Tv,
  ShieldCheck,
  Award,
  Clock,
  HelpCircle,
  Flame,
  Bookmark,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Sparkles,
  Search,
  Filter,
  Check,
  X,
  AlertCircle,
  Layers,
  BarChart3,
  Home,
  BookMarked,
  BrainCircuit,
  SlidersHorizontal,
};

interface IconHelperProps {
  name: string;
  className?: string;
}

export const IconHelper: React.FC<IconHelperProps> = ({ name, className = 'w-5 h-5' }) => {
  const IconComponent = ICON_MAP[name] || HelpCircle;
  return <IconComponent className={className} />;
};
