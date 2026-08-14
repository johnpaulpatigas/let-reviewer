import React from 'react';
import { IconHelper } from '../ui/IconHelper';
import { CategoryBadge } from '../ui/Badge';
import { ChevronRight, Play } from 'lucide-react';
import type { Subject } from '../../types';

interface SubjectCardProps {
  subject: Subject;
  questionCount: number;
  masteryPercentage?: number;
  onSelect: (subject: Subject) => void;
  onQuickStart: (subject: Subject) => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  questionCount,
  masteryPercentage = 0,
  onSelect,
  onQuickStart,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center ${subject.colorScheme.bg} ${subject.colorScheme.text} border ${subject.colorScheme.border}`}
            >
              <IconHelper name={subject.iconName} className="w-5 h-5" />
            </div>
            <div>
              <CategoryBadge category={subject.category} size="sm" />
              <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight mt-1">
                {subject.name}
              </h3>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
          {subject.description}
        </p>

        {/* Topics preview pills */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {subject.topics.slice(0, 3).map((topic, i) => (
            <span
              key={i}
              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            >
              {topic}
            </span>
          ))}
          {subject.topics.length > 3 && (
            <span className="text-[11px] font-medium px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500">
              +{subject.topics.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div className="text-xs text-slate-500 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300">{questionCount}</span>{' '}
          questions
          {masteryPercentage > 0 && (
            <span className="ml-2 font-semibold text-emerald-600 dark:text-emerald-400">
              • {masteryPercentage}% mastered
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => onQuickStart(subject)}
            title={`Quick start ${subject.name}`}
            className="h-8 px-2.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:hover:bg-indigo-900 dark:text-indigo-300 text-xs font-semibold flex items-center gap-1 tap-target transition-colors"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Practice</span>
          </button>
          <button
            type="button"
            onClick={() => onSelect(subject)}
            aria-label={`View details for ${subject.name}`}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200 tap-target transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
