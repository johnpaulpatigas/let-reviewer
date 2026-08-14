import React from 'react';
import {
  ArrowRight,
  BookmarkCheck,
  BookOpen,
  GraduationCap,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { CategoryBadge } from '../components/ui/Badge';
import { SUBJECTS } from '../data/subjects';
import { ALL_QUESTIONS } from '../data/questions';
import type { QuizConfig, SubjectCategory, NavigationTab } from '../types';

interface HomePageProps {
  onStartQuiz: (config: QuizConfig) => void;
  onNavigateTab: (tab: NavigationTab) => void;
  totalAnswered?: number;
  totalCorrect?: number;
  bookmarkedCount?: number;
  missedCount?: number;
}

export const HomePage: React.FC<HomePageProps> = ({
  onStartQuiz,
  onNavigateTab,
  totalAnswered = 0,
  totalCorrect = 0,
  bookmarkedCount = 0,
  missedCount = 0,
}) => {
  const overallAccuracy =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const handleStartCategoryPractice = (category: SubjectCategory) => {
    onStartQuiz({
      mode: 'practice',
      subjectIds: [],
      category,
      questionCount: 10,
    });
  };

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Overview & Heading */}
      <section className="space-y-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Licensure Examination for Teachers
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
            Curriculum-aligned reviewer for General and Professional Education board competencies.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <Button
            variant="primary"
            size="lg"
            leftIcon={<BookOpen className="w-4 h-4 stroke-[2.25] shrink-0" />}
            onClick={() => onNavigateTab('materials')}
            className="w-full text-center justify-center font-semibold"
          >
            Study Guides & Notes
          </Button>

          <Button
            variant="primary"
            size="lg"
            leftIcon={<GraduationCap className="w-4 h-4 stroke-[2.25] shrink-0" />}
            onClick={() => onNavigateTab('practice')}
            className="w-full text-center justify-center font-semibold"
          >
            Mock Exam & Practice
          </Button>
        </div>

        {/* Study Metrics Summary Strip */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 py-2 px-3 bg-slate-100 dark:bg-slate-900 rounded-md text-xs text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
          <div>
            <span className="font-semibold text-slate-900 dark:text-white font-mono">{ALL_QUESTIONS.length}</span> questions in bank
          </div>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <div>
            <span className="font-semibold text-slate-900 dark:text-white font-mono">{totalAnswered}</span> solved ({overallAccuracy}% accuracy)
          </div>
          {totalCorrect > 0 && (
            <>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <div>
                <span className="font-semibold text-emerald-700 dark:text-emerald-400 font-mono">{totalCorrect}</span> correct
              </div>
            </>
          )}
        </div>
      </section>

      {/* Curriculum Tracks */}
      <section className="space-y-3 pt-1">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
            Curriculum Domains
          </h2>
          <button
            type="button"
            onClick={() => onNavigateTab('subjects')}
            className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 hover:underline cursor-pointer"
          >
            <span>All {SUBJECTS.length} subjects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* General Education */}
          <div
            onClick={() => handleStartCategoryPractice('gen_ed')}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-800 rounded-lg p-4 transition-all duration-150 active:scale-[0.99] cursor-pointer group flex flex-col justify-between space-y-3"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <CategoryBadge category="gen_ed" size="sm" />
                <span className="text-xs text-slate-500 font-medium">6 Subjects</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
                General Education
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                English, Filipino, Mathematics, Natural Science, Social Sciences, and ICT Literacy.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span>Practice 10 random items</span>
              <span className="font-semibold text-sky-700 dark:text-sky-400 group-hover:underline flex items-center gap-1">
                Start drill <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Professional Education */}
          <div
            onClick={() => handleStartCategoryPractice('prof_ed')}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-300 dark:hover:border-amber-800 rounded-lg p-4 transition-all duration-150 active:scale-[0.99] cursor-pointer group flex flex-col justify-between space-y-3"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <CategoryBadge category="prof_ed" size="sm" />
                <span className="text-xs text-slate-500 font-medium">7 Subjects</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                Professional Education
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Foundations, Child Development, Teaching Principles, Curriculum, Assessment, EdTech, and Ethics.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span>Practice 10 random items</span>
              <span className="font-semibold text-amber-700 dark:text-amber-400 group-hover:underline flex items-center gap-1">
                Start drill <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Targeted Remediation (Conditional) */}
      {(bookmarkedCount > 0 || missedCount > 0) && (
        <section className="bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 rounded-lg p-4 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookmarkCheck className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <h3 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
                Targeted Remediation
              </h3>
            </div>
            <button
              type="button"
              onClick={() => onNavigateTab('bank')}
              className="text-xs font-semibold text-amber-800 dark:text-amber-300 hover:underline cursor-pointer"
            >
              Open Study Bank →
            </button>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            You have {bookmarkedCount} saved question{bookmarkedCount === 1 ? '' : 's'} and {missedCount} missed item{missedCount === 1 ? '' : 's'} recorded for targeted review.
          </p>
          <div className="flex flex-wrap gap-2 pt-0.5">
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
                Review Saved ({bookmarkedCount})
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
        </section>
      )}
    </div>
  );
};
