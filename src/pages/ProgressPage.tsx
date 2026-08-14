import React, { useState } from 'react';
import {
  TrendingUp,
  RotateCcw,
  ChevronDown,
} from 'lucide-react';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Button } from '../components/ui/Button';
import { SUBJECTS } from '../data/subjects';
import type { UserStudyStats, QuizResult, SubjectScoreBreakdown } from '../types';

interface ProgressPageProps {
  stats: UserStudyStats;
  onClearStats: () => void;
  onOpenStudyBank?: () => void;
}

export const ProgressPage: React.FC<ProgressPageProps> = ({
  stats,
  onClearStats,
  onOpenStudyBank,
}) => {
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);
  const [expandedExamId, setExpandedExamId] = useState<string | null>(null);

  const {
    totalAnswered,
    totalCorrect,
    streakDays,
    subjectMastery,
    quizHistory = [],
    bookmarkedQuestionIds = [],
    missedQuestionIds = [],
  } = stats;
  const examHistory = quizHistory;

  const overallAccuracy =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const isPassing = overallAccuracy >= 75;

  const genEdSubjects = SUBJECTS.filter((s) => s.category === 'gen_ed');
  const profEdSubjects = SUBJECTS.filter((s) => s.category === 'prof_ed');

  const computeCategoryStats = (subjects: typeof SUBJECTS) => {
    let answered = 0;
    let correct = 0;
    subjects.forEach((s) => {
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
    <div className="space-y-4 animate-fade-in">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Study Progress & Analytics
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
          Competency metrics, domain mastery tracking, and historical session logs.
        </p>
      </div>

      {/* Estimated Readiness Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 sm:p-5 space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
            <TrendingUp className="w-4 h-4" />
            <h2 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
              Estimated LET Passing Readiness
            </h2>
          </div>
          <span
            className={`text-xs font-bold px-2 py-0.5 rounded ${
              isPassing && totalAnswered >= 10
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
            }`}
          >
            {totalAnswered < 10
              ? 'Collecting baseline'
              : isPassing
              ? 'On track (≥ 75%)'
              : 'Needs practice (< 75%)'}
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-baseline">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono">
              {overallAccuracy}%
            </span>
            <span className="text-xs text-slate-500">
              PRC LET Benchmark: 75.00%
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
            <span className="text-[11px] text-slate-500 block">Total Solved</span>
            <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono">
              {totalAnswered}
            </span>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 block">Correct Items</span>
            <span className="text-sm sm:text-base font-bold text-emerald-700 dark:text-emerald-400 font-mono">
              {totalCorrect}
            </span>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 block">Study Streak</span>
            <span className="text-sm sm:text-base font-bold text-amber-700 dark:text-amber-400 font-mono">
              {streakDays}d
            </span>
          </div>
        </div>
      </div>

      {/* Domain Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3.5 space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-sky-800 dark:text-sky-400 uppercase tracking-wider">
              General Education
            </span>
            <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">
              {genEdStats.percentage}%
            </span>
          </div>
          <ProgressBar
            value={genEdStats.percentage}
            max={100}
            colorVariant="sky"
          />
          <p className="text-[11px] text-slate-500">
            {genEdStats.correct} of {genEdStats.answered} questions answered correctly
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3.5 space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider">
              Professional Education
            </span>
            <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">
              {profEdStats.percentage}%
            </span>
          </div>
          <ProgressBar
            value={profEdStats.percentage}
            max={100}
            colorVariant="amber"
          />
          <p className="text-[11px] text-slate-500">
            {profEdStats.correct} of {profEdStats.answered} questions answered correctly
          </p>
        </div>
      </div>

      {/* Targeted Study Bank Quick Status */}
      {(bookmarkedQuestionIds.length > 0 || missedQuestionIds.length > 0) && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 flex items-center justify-between gap-3">
          <div className="space-y-0.5">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
              Targeted Remediation Queue
            </h3>
            <p className="text-xs text-slate-500">
              {bookmarkedQuestionIds.length} saved bookmarks • {missedQuestionIds.length} missed items
            </p>
          </div>
          {onOpenStudyBank && (
            <Button variant="secondary" size="sm" onClick={onOpenStudyBank}>
              Open Bank
            </Button>
          )}
        </div>
      )}

      {/* Subject-by-Subject Mastery */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 space-y-3">
        <h2 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
          Subject-Level Mastery
        </h2>
        <div className="space-y-3">
          {SUBJECTS.map((sub) => {
            const stat = subjectMastery[sub.id];
            const answered = stat ? stat.answered : 0;
            const correct = stat ? stat.correct : 0;
            const percentage = answered > 0 ? Math.round((correct / answered) * 100) : 0;

            return (
              <div key={sub.id} className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-medium text-slate-800 dark:text-slate-200 truncate pr-2">
                    {sub.name}
                  </span>
                  <span className="text-slate-500 font-mono shrink-0">
                    {correct}/{answered} ({percentage}%)
                  </span>
                </div>
                <ProgressBar
                  value={percentage}
                  max={100}
                  colorVariant={percentage >= 75 ? 'emerald' : percentage >= 50 ? 'primary' : 'rose'}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Exam Simulation History */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
            Exam History & Log ({examHistory.length})
          </h2>
        </div>

        {examHistory.length > 0 ? (
          <div className="space-y-2">
            {examHistory.map((exam: QuizResult) => {
              const isExpanded = expandedExamId === exam.sessionId;
              const dateStr = new Date(exam.timestamp).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });

              return (
                <div
                  key={exam.sessionId}
                  className="border border-slate-200 dark:border-slate-800 rounded-md p-3 space-y-2 bg-slate-50/40 dark:bg-slate-900"
                >
                  <div
                    onClick={() =>
                      setExpandedExamId((prev) => (prev === exam.sessionId ? null : exam.sessionId))
                    }
                    className="flex items-center justify-between cursor-pointer select-none"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white font-mono">
                          {exam.scorePercentage}%
                        </span>
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            exam.isPassed
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                              : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                          }`}
                        >
                          {exam.isPassed ? 'Passed' : 'Failed'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {dateStr} • {exam.correctCount}/{exam.totalQuestions} correct
                      </p>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {isExpanded && exam.subjectBreakdown && (
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1.5 animate-fade-in">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Subject Breakdown
                      </span>
                      {exam.subjectBreakdown.map((sb: SubjectScoreBreakdown) => (
                        <div
                          key={sb.subjectId}
                          className="flex justify-between text-xs text-slate-600 dark:text-slate-400"
                        >
                          <span className="truncate pr-2">{sb.subjectName}</span>
                          <span className="font-mono font-medium">
                            {sb.correct}/{sb.total} ({sb.percentage}%)
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-xs text-slate-500 text-center py-4">
            No completed mock exams recorded yet. Practice sessions and mock exam scores will appear here.
          </p>
        )}
      </div>

      {/* Clear Data Action */}
      <div className="pt-2 text-center">
        {!isResetConfirmOpen ? (
          <button
            type="button"
            onClick={() => setIsResetConfirmOpen(true)}
            className="text-xs text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Progress & Scores</span>
          </button>
        ) : (
          <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-lg space-y-2">
            <p className="text-xs text-rose-800 dark:text-rose-300 font-semibold">
              Are you sure? This will delete all question answers, streaks, and exam history.
            </p>
            <div className="flex justify-center gap-2">
              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                  onClearStats();
                  setIsResetConfirmOpen(false);
                }}
              >
                Confirm Reset
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsResetConfirmOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
