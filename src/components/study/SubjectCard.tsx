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
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-150 active:scale-[0.99] hover:shadow-xs will-change-transform cursor-pointer group select-none"
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2.5">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center ${subject.colorScheme.bg} ${subject.colorScheme.text} border ${subject.colorScheme.border} transition-transform duration-150 group-hover:scale-105`}
            >
              <IconHelper name={subject.iconName} className="w-4 h-4" />
            </div>
            <div>
              <CategoryBadge category={subject.category} size="sm" />
              <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-tight mt-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {subject.name}
              </h3>
            </div>
          </div>

          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all">
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
          {subject.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-2.5">
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
              <BookOpen className="w-3 h-3 text-indigo-500" />
              {guideCount} {guideCount === 1 ? 'guide' : 'guides'}
            </span>
          )}
          {guideCount > 0 && <span>•</span>}
          <span>
            <strong className="font-semibold text-slate-700 dark:text-slate-300">
              {questionCount}
            </strong>{' '}
            questions
          </span>
        </div>

        {masteryPercentage > 0 ? (
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 text-[11px]">
            {masteryPercentage}% mastery
          </span>
        ) : (
          <span className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold group-hover:underline">
            View Hub →
          </span>
        )}
      </div>
    </div>
  );
};
