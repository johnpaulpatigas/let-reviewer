import React, { useState } from 'react';
import { SUBJECTS } from '../data/subjects';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Button } from '../components/ui/Button';
import { IconHelper } from '../components/ui/IconHelper';
import {
  Flame,
  Trash2,
  TrendingUp,
  AlertCircle,
} from 'lucide-react';
import type { UserStudyStats, QuizResult } from '../types';

interface ProgressPageProps {
  stats: UserStudyStats;
  onClearStats: () => void;
  onViewQuizResult?: (result: QuizResult) => void;
}

export const ProgressPage: React.FC<ProgressPageProps> = ({
  stats,
  onClearStats,
}) => {
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const {
    totalAnswered,
    totalCorrect,
    streakDays,
    subjectMastery,
    quizHistory,
  } = stats;

  const overallAccuracy =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const isPassing = overallAccuracy >= 75;

  // Compute category masteries
  const genEdSubjects = SUBJECTS.filter((s) => s.category === 'gen_ed');
  const profEdSubjects = SUBJECTS.filter((s) => s.category === 'prof_ed');

  const computeCategoryStats = (subjectList: typeof SUBJECTS) => {
    let answered = 0;
    let correct = 0;
    subjectList.forEach((s) => {
      const subStat = subjectMastery[s.id];
      if (subStat) {
        answered += subStat.answered;
        correct += subStat.correct;
      }
    });
    return {
      answered,
      correct,
      percentage: answered > 0 ? Math.round((correct / answered) * 100) : 0,
    };
  };

  const genEdStats = computeCategoryStats(genEdSubjects);
  const profEdStats = computeCategoryStats(profEdSubjects);

  return (
    <div className="space-y-5 animate-fadeIn">
      {/* Title */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          Study Progress & Analytics
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
          Track your mastery across PRC LET exam competencies.
        </p>
      </div>

      {/* Main Readiness Gauge Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
            <TrendingUp className="w-5 h-5" />
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-white">
              Estimated LET Passing Readiness
            </h3>
          </div>
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-full ${
              isPassing && totalAnswered >= 10
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
            }`}
          >
            {totalAnswered < 10
              ? 'Collecting Baseline'
              : isPassing
              ? 'On Track to Pass (>= 75%)'
              : 'Needs Practice (< 75%)'}
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between items-baseline">
            <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              {overallAccuracy}%
            </span>
            <span className="text-xs text-slate-500 font-semibold">
              PRC Benchmark: 75.00%
            </span>
          </div>
          <ProgressBar
            value={overallAccuracy}
            max={100}
            colorVariant={overallAccuracy >= 75 ? 'emerald' : 'amber'}
          />
        </div>

        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
          <div>
            <span className="text-xs text-slate-500 block">Total Answered</span>
            <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {totalAnswered}
            </span>
          </div>
          <div>
            <span className="text-xs text-slate-500 block">Correct Items</span>
            <span className="text-base sm:text-lg font-bold text-emerald-600 dark:text-emerald-400">
              {totalCorrect}
            </span>
          </div>
          <div>
            <span className="text-xs text-slate-500 block">Study Streak</span>
            <span className="text-base sm:text-lg font-bold text-amber-600 dark:text-amber-400 flex items-center justify-center gap-1">
              <Flame className="w-4 h-4 fill-amber-500 inline" />
              {streakDays}d
            </span>
          </div>
        </div>
      </div>

      {/* Domain Mastery Cards (GenEd vs ProfEd) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              General Education
            </span>
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              {genEdStats.percentage}%
            </span>
          </div>
          <ProgressBar
            value={genEdStats.percentage}
            max={100}
            colorVariant="indigo"
          />
          <p className="text-[11px] text-slate-400">
            {genEdStats.correct} of {genEdStats.answered} questions answered correctly
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Professional Education
            </span>
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              {profEdStats.percentage}%
            </span>
          </div>
          <ProgressBar
            value={profEdStats.percentage}
            max={100}
            colorVariant="indigo"
          />
          <p className="text-[11px] text-slate-400">
            {profEdStats.correct} of {profEdStats.answered} questions answered correctly
          </p>
        </div>
      </div>

      {/* Subject-by-Subject Mastery Breakdown */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm space-y-4">
        <h3 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider">
          Competency Breakdown by Subject
        </h3>

        <div className="space-y-3.5">
          {SUBJECTS.map((subject) => {
            const stat = subjectMastery[subject.id] || { answered: 0, correct: 0 };
            const percentage =
              stat.answered > 0 ? Math.round((stat.correct / stat.answered) * 100) : 0;

            let statusLabel = 'Not Started';
            let statusColor = 'text-slate-400 bg-slate-100 dark:bg-slate-800';
            if (stat.answered > 0) {
              if (percentage >= 80) {
                statusLabel = 'Mastered';
                statusColor = 'text-emerald-700 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300';
              } else if (percentage >= 60) {
                statusLabel = 'Developing';
                statusColor = 'text-indigo-700 bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-300';
              } else {
                statusLabel = 'Needs Review';
                statusColor = 'text-rose-700 bg-rose-100 dark:bg-rose-950 dark:text-rose-300';
              }
            }

            return (
              <div key={subject.id} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 min-w-0">
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${subject.colorScheme.bg} ${subject.colorScheme.text}`}
                    >
                      <IconHelper name={subject.iconName} className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 truncate">
                      {subject.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${statusColor}`}>
                      {statusLabel}
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white min-w-[36px] text-right">
                      {percentage}%
                    </span>
                  </div>
                </div>

                <ProgressBar
                  value={stat.correct}
                  max={Math.max(stat.answered, 1)}
                  colorVariant={percentage >= 75 ? 'emerald' : percentage >= 50 ? 'indigo' : 'rose'}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Exam History */}
      {quizHistory.length > 0 && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider">
            Recent Quiz & Exam History
          </h3>

          <div className="space-y-2">
            {quizHistory.slice(0, 5).map((item) => {
              const dateStr = new Date(item.timestamp).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
              });

              return (
                <div
                  key={item.sessionId}
                  className="p-3 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                        item.isPassed
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                      }`}
                    >
                      {item.scorePercentage}%
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 capitalize">
                        {item.config.mode === 'exam' ? 'Mock Board Exam' : 'Practice Review'}
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        {dateStr} • {item.correctCount}/{item.totalQuestions} items correct
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      item.isPassed
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                    }`}
                  >
                    {item.isPassed ? 'Passed' : 'Failed'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Reset Stats Action */}
      <div className="pt-2 text-center">
        <button
          type="button"
          onClick={() => setIsResetModalOpen(true)}
          className="text-xs text-rose-600 hover:text-rose-700 dark:text-rose-400 font-semibold inline-flex items-center gap-1.5 p-2"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Reset Study History & Analytics</span>
        </button>
      </div>

      {/* Reset Confirmation Dialog */}
      {isResetModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-sm rounded-3xl p-6 shadow-2xl text-center space-y-4 animate-scaleUp">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              Reset all study progress?
            </h3>
            <p className="text-xs text-slate-500">
              This will clear your answered questions, mastery metrics, and quiz history. This action cannot be undone.
            </p>
            <div className="flex gap-2.5 pt-2">
              <Button
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => setIsResetModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="danger"
                size="md"
                fullWidth
                onClick={() => {
                  setIsResetModalOpen(false);
                  onClearStats();
                }}
              >
                Confirm Reset
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
