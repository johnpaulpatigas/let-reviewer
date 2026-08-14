import React from 'react';
import {
  Sparkles,
  Flame,
  BrainCircuit,
  Award,
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

  const handleStartMockExam = () => {
    onNavigateTab('quiz');
  };

  return (
    <div className="space-y-4 sm:space-y-5 animate-fadeIn">
      {/* Hero Action Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-900 text-white p-5 sm:p-6 shadow-xl shadow-indigo-950/20">
        {/* Decorative background glow */}
        <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-indigo-500/20 blur-2xl pointer-events-none" />
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <Award className="w-28 h-28" />
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-indigo-200 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>PRC LET Exam Readiness</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
            Master General & Professional Education
          </h2>
          <p className="text-xs sm:text-sm text-indigo-100/90 mt-1 max-w-md leading-relaxed">
            Review Board exam questions with comprehensive explanations, rationales, and mock exam simulations.
          </p>

          <div className="mt-5 flex flex-col xs:flex-row gap-2.5">
            <Button
              variant="primary"
              size="md"
              leftIcon={<Zap className="w-4 h-4 fill-amber-300 text-amber-300" />}
              onClick={handleStartQuickMix}
              className="bg-white hover:bg-slate-100 text-indigo-900 shadow-lg"
            >
              Quick Practice (10 Items)
            </Button>
            <Button
              variant="outline"
              size="md"
              leftIcon={<BrainCircuit className="w-4 h-4" />}
              onClick={handleStartMockExam}
              className="border-white/30 text-white hover:bg-white/10 hover:border-white"
            >
              Custom Mock Exam
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 sm:p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Accuracy
            </span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="mt-2">
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {overallAccuracy}%
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              {totalCorrect}/{totalAnswered} correct
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 sm:p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Streak
            </span>
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>
          <div className="mt-2">
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {streakDays} <span className="text-xs font-semibold text-slate-400">days</span>
            </div>
            <p className="text-[10px] text-amber-600 dark:text-amber-400 mt-0.5">
              Keep it going!
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 sm:p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Bank
            </span>
            <BookOpen className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="mt-2">
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {ALL_QUESTIONS.length}
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Total questions
            </p>
          </div>
        </div>
      </div>

      {/* Domain Quick Drill Cards */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Review by Domain
          </h3>
          <button
            type="button"
            onClick={() => onNavigateTab('subjects')}
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline tap-target"
          >
            <span>View all ({SUBJECTS.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* General Education Drill */}
          <div
            onClick={() => handleStartCategoryPractice('gen_ed')}
            className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 dark:hover:border-sky-500 rounded-2xl p-4 shadow-sm transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 flex items-center justify-center font-bold text-lg">
                GE
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  General Education
                </h4>
                <p className="text-xs text-slate-500">
                  English, Math, Science, Filipino, SocSci, ICT
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-sky-600 group-hover:bg-sky-50 dark:group-hover:bg-sky-950 transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Professional Education Drill */}
          <div
            onClick={() => handleStartCategoryPractice('prof_ed')}
            className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-2xl p-4 shadow-sm transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 flex items-center justify-center font-bold text-lg">
                PE
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Professional Education
                </h4>
                <p className="text-xs text-slate-500">
                  Foundations, Child Dev, Assessment, Pedagogy
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Target Focus: Bookmarks & Missed Questions */}
      {(bookmarkedCount > 0 || missedCount > 0) && (
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <BookmarkCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                Targeted Remediation Bank
              </h4>
            </div>
            <button
              type="button"
              onClick={() => onNavigateTab('bank')}
              className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline"
            >
              Open Bank
            </button>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
            Review your {bookmarkedCount} saved question{bookmarkedCount === 1 ? '' : 's'} and {missedCount} missed item{missedCount === 1 ? '' : 's'} to solidify high-yield concepts.
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
                Drill Missed Items ({missedCount})
              </Button>
            )}
          </div>
        </div>
      )}

      {/* High-Yield LET Reviewer Tip */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4">
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1">
          <BrainCircuit className="w-4 h-4" />
          <h4 className="text-xs font-bold uppercase tracking-wider">
            LET Strategy Tip
          </h4>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <strong>Item Analysis Rationale:</strong> In Assessment of Learning, an item with high difficulty index (e.g. 0.85+) is very easy; one with negative discrimination (-0.20) misidentifies top students and must be discarded. Always check for distractors that trick high-performing test takers!
        </p>
      </div>
    </div>
  );
};
