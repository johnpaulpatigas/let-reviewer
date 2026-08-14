import React from 'react';
import { Flame, ChevronLeft, Award } from 'lucide-react';
import type { NavigationTab } from '../../types';

interface HeaderProps {
  currentTab: NavigationTab;
  inSession?: boolean;
  sessionTitle?: string;
  onBack?: () => void;
  streakDays?: number;
  totalAnswered?: number;
}

export const Header: React.FC<HeaderProps> = ({
  inSession = false,
  sessionTitle,
  onBack,
  streakDays = 1,
  totalAnswered = 0,
}) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-2xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
        {inSession ? (
          <div className="flex items-center gap-2.5 w-full">
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                aria-label="Exit current session"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 tap-target transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <div className="flex-1 truncate">
              <h1 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                {sessionTitle || 'Review Session'}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                LET Board Exam Prep
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm shadow-indigo-500/30">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
                    LET Reviewer
                  </span>
                  <span className="px-1.5 py-0.5 text-[10px] font-bold bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 rounded-md">
                    2026
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  GenEd & ProfEd Mastery
                </p>
              </div>
            </div>

            {/* Quick Stats Pill */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 rounded-full text-amber-700 dark:text-amber-400 text-xs font-bold">
                <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
                <span>{streakDays}d streak</span>
              </div>
              <div className="hidden xs:flex items-center gap-1 px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 text-xs font-semibold">
                <span>{totalAnswered} solved</span>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
