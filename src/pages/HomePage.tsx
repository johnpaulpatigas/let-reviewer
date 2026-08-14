import React from 'react';
import {
  Flame,
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  BookmarkCheck,
  Zap,
  BookOpen,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SUBJECTS } from '../data/subjects';
import { ALL_QUESTIONS } from '../data/questions';
import type { QuizConfig, SubjectCategory, NavigationTab } from '../types';

interface HomePageProps {
  onStartQuiz: (config: QuizConfig) => void;
  onNavigateTab: (tab: NavigationTab) => void;
  streakDays?: number;
  totalAnswered?: number;
  totalCorrect?: number;
  bookmarkedCount?: number;
  missedCount?: number;
}

export const HomePage: React.FC<HomePageProps> = ({
  onStartQuiz,
  onNavigateTab,
  streakDays = 1,
  totalAnswered = 0,
  totalCorrect = 0,
  bookmarkedCount = 0,
  missedCount = 0,
}) => {
  const overallAccuracy =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const handleStartQuickMix = () => {
    onStartQuiz({
      mode: 'practice',
      subjectIds: [],
      category: 'all',
      questionCount: 10,
    });
  };

  const handleStartCategoryPractice = (category: SubjectCategory) => {
    onStartQuiz({
      mode: 'practice',
      subjectIds: [],
      category,
      questionCount: 10,
    });
  };

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Hero Welcome Card */}
      <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800 shadow-sm">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-800 text-indigo-300 text-xs font-semibold mb-2.5 border border-slate-700">
            PRC LET Board Exam Prep
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
            General & Professional Education Reviewer
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
            Practice board-exam competencies with comprehensive rationales, topic drills, and timed mock simulations.
          </p>

          {/* Primary Action Buttons with High Visual Contrast & Tactile Feedback */}
          <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
            <button
              type="button"
              onClick={handleStartQuickMix}
              className="h-11 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:scale-[0.985] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm shadow-indigo-950/50 transition-all duration-150 will-change-transform tap-target cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <Zap className="w-4 h-4 text-amber-300 fill-amber-300 shrink-0" />
              <span>Quick Practice (10 Items)</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigateTab('materials')}
              className="h-11 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-800 active:scale-[0.985] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-600 hover:border-indigo-400 shadow-sm shadow-slate-950/30 transition-all duration-150 will-change-transform tap-target cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Study Guides & Notes</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigateTab('practice')}
              className="h-11 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-800 active:scale-[0.985] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-600 hover:border-sky-400 shadow-sm shadow-slate-950/30 transition-all duration-150 will-change-transform tap-target cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <BrainCircuit className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Practice & Mock Exam</span>
            </button>
          </div>
        </div>
      </div>

      {/* Accuracy & Progress Metrics */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 sm:p-3.5 transition-all duration-150 hover:shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              Accuracy
            </span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="mt-1.5">
            <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {overallAccuracy}%
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              {totalCorrect}/{totalAnswered} correct
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 sm:p-3.5 transition-all duration-150 hover:shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              Streak
            </span>
            <Flame className="w-4 h-4 text-amber-500 fill-current" />
          </div>
          <div className="mt-1.5">
            <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {streakDays} <span className="text-xs font-normal text-slate-500">days</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Daily study
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 sm:p-3.5 transition-all duration-150 hover:shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              Bank
            </span>
            <BookOpen className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="mt-1.5">
            <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {ALL_QUESTIONS.length}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Questions
            </p>
          </div>
        </div>
      </div>

      {/* Review by Domain */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            Review by Major Domain
          </h3>
          <button
            type="button"
            onClick={() => onNavigateTab('subjects')}
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline tap-target group"
          >
            <span>All {SUBJECTS.length} subjects</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => handleStartCategoryPractice('gen_ed')}
            className="text-left bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-xl p-4 transition-all duration-150 active:scale-[0.99] hover:shadow-xs will-change-transform flex items-center justify-between tap-target group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 flex items-center justify-center font-bold text-sm transition-transform duration-150 group-hover:scale-105">
                GE
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  General Education
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  English, Filipino, Math, Science, SocSci, ICT
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
          </button>

          <button
            type="button"
            onClick={() => handleStartCategoryPractice('prof_ed')}
            className="text-left bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-xl p-4 transition-all duration-150 active:scale-[0.99] hover:shadow-xs will-change-transform flex items-center justify-between tap-target group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center font-bold text-sm transition-transform duration-150 group-hover:scale-105">
                PE
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Professional Education
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Foundations, Pedagogy, Assessment, Ethics, Tech
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>
      </div>

      {/* Targeted Remediation Bank */}
      {(bookmarkedCount > 0 || missedCount > 0) && (
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <BookmarkCheck className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                Targeted Remediation Bank
              </h4>
            </div>
            <button
              type="button"
              onClick={() => onNavigateTab('bank')}
              className="text-xs font-semibold text-amber-800 dark:text-amber-400 hover:underline"
            >
              Open Bank
            </button>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
            Review {bookmarkedCount} saved question{bookmarkedCount === 1 ? '' : 's'} and drill {missedCount} missed item{missedCount === 1 ? '' : 's'} from previous sessions.
          </p>
          <div className="flex gap-2">
            {bookmarkedCount > 0 && (
              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  onStartQuiz({
                    mode: 'practice',
                    subjectIds: [],
                    includeOnlyBookmarked: true,
                    questionCount: bookmarkedCount,
                  })
                }
              >
                Review Bookmarks ({bookmarkedCount})
              </Button>
            )}
            {missedCount > 0 && (
              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  onStartQuiz({
                    mode: 'practice',
                    subjectIds: [],
                    includeOnlyIncorrect: true,
                    questionCount: missedCount,
                  })
                }
              >
                Drill Missed ({missedCount})
              </Button>
            )}
          </div>
        </div>
      )}

      {/* High Yield LET Tip */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-wider mb-1.5">
          <BrainCircuit className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span>High-Yield LET Tip</span>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <strong>Item Analysis Rationale:</strong> In Assessment of Learning, an item with a high difficulty index (e.g. 0.85+) is very easy; one with negative discrimination (-0.20) indicates that lower-performing students scored better than upper-performing students due to ambiguous phrasing, and the item must be rejected.
        </p>
      </div>
    </div>
  );
};
