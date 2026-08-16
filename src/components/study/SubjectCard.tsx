import React from 'react';
import { IconHelper } from '../ui/IconHelper';
import { CategoryBadge } from '../ui/Badge';
import { ChevronRight, BookOpen } from 'lucide-react';
import type { Subject } from '../../types';

interface SubjectCardProps {
  subject: Subject;
  questionCount: number;
  guideCount?: number;
  masteryPercentage?: number;
  onSelect: (subject: Subject) => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  questionCount,
  guideCount = 0,
  masteryPercentage = 0,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(subject)}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-600 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 ease-out active:scale-[0.985] cursor-pointer group select-none"
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2.5">
            <div
              className={`w-8 h-8 rounded-md flex items-center justify-center ${subject.colorScheme.bg} ${subject.colorScheme.text} border ${subject.colorScheme.border} group-hover:scale-105 transition-transform duration-200`}
            >
              <IconHelper name={subject.iconName} className="w-4 h-4" />
            </div>
            <div>
              <CategoryBadge category={subject.category} size="sm" />
              <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-tight mt-0.5 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                {subject.name}
              </h3>
            </div>
          </div>

          <div className="w-6 h-6 rounded-md flex items-center justify-center text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all duration-150">
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
          {subject.description}
        </p>

        <div className="flex flex-wrap gap-1 mt-2.5">
          {subject.topics.slice(0, 3).map((topic, i) => (
            <span
              key={i}
              className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            >
              {topic}
            </span>
          ))}
          {subject.topics.length > 3 && (
            <span className="text-[11px] font-medium px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
              +{subject.topics.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2 text-[11px]">
          {guideCount > 0 && (
            <span className="inline-flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
              <BookOpen className="w-3 h-3 text-sky-600 dark:text-sky-400" />
              {guideCount} {guideCount === 1 ? 'guide' : 'guides'}
            </span>
          )}
          {guideCount > 0 && <span>•</span>}
          <span>
            <strong className="font-semibold text-slate-700 dark:text-slate-300 font-mono">
              {questionCount}
            </strong>{' '}
            questions
          </span>
        </div>

        {masteryPercentage > 0 ? (
          <span className="font-semibold text-emerald-700 dark:text-emerald-300 text-[11px] font-mono">
            {masteryPercentage}% mastery
          </span>
        ) : (
          <span className="text-[11px] text-slate-700 dark:text-slate-300 font-semibold group-hover:underline">
            View Hub →
          </span>
        )}
      </div>
    </div>
  );
};
