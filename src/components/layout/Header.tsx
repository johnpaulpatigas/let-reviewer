import React from 'react';
import { ChevronLeft, Award, Settings } from 'lucide-react';
import type { NavigationTab } from '../../types';

interface HeaderProps {
  currentTab: NavigationTab;
  inSession?: boolean;
  sessionTitle?: string;
  sessionSubtitle?: string;
  onBack?: () => void;
  onOpenSettings?: () => void;
  totalAnswered?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  inSession = false,
  sessionTitle,
  sessionSubtitle,
  onBack,
  onOpenSettings,
  totalAnswered = 0,
}) => {
  const isSettingsTab = currentTab === 'settings';

  return (
    <header className="sticky top-0 z-30 w-full bg-white dark:bg-neutral-900 border-b border-slate-200 dark:border-neutral-800">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        {inSession || isSettingsTab ? (
          <div className="flex items-center gap-2.5 w-full">
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                aria-label="Go back"
                className="inline-flex items-center justify-center w-8 h-8 rounded-md text-slate-600 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-neutral-800 hover:text-slate-900 dark:hover:text-white tap-target transition-colors shrink-0 -ml-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <div className="flex-1 min-w-0">
              <h1 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                {isSettingsTab ? 'Settings & Preferences' : sessionTitle || 'Review Session'}
              </h1>
              <p className="text-[11px] text-slate-500 dark:text-neutral-400 truncate">
                {isSettingsTab
                  ? 'Display, typography & study preferences'
                  : sessionSubtitle || 'LET Board Exam Reviewer'}
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-slate-900 dark:bg-neutral-100 flex items-center justify-center text-white dark:text-neutral-900">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white block leading-none">
                  LET Reviewer
                </span>
                <span className="text-[11px] font-medium text-slate-500 dark:text-neutral-400 block mt-0.5">
                  General & Professional Education
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Questions Solved Progress */}
              {totalAnswered > 0 && (
                <div className="hidden xs:flex items-center gap-1 px-2.5 py-1 bg-slate-100 dark:bg-neutral-800 rounded text-slate-700 dark:text-neutral-300 text-xs font-medium border border-slate-200 dark:border-neutral-700">
                  <span className="font-mono font-bold text-slate-900 dark:text-white">{totalAnswered}</span> solved
                </div>
              )}

              {/* Secondary Settings Icon */}
              {onOpenSettings && (
                <button
                  type="button"
                  onClick={onOpenSettings}
                  aria-label="Open Settings"
                  title="Settings & Preferences"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-md text-slate-500 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-neutral-800 tap-target transition-colors cursor-pointer"
                >
                  <Settings className="w-4 h-4" />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  );
};
