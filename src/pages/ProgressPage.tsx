import React, { useState } from 'react';
import {
  TrendingUp,
  RotateCcw,
  ChevronDown,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { computeStudyStats } from '../utils/progressStats';
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
  const [expandedExamId, setExpandedExamId] = useState<string | null>(null);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);

  const {
    totalAnswered,
    totalQuestionsInBank,
    overallAccuracy,
    genEdStats,
    profEdStats,
    subjectMasteryList,
    totalSessionsCount,
  } = computeStudyStats(stats);

  const {
    bookmarkedQuestionIds = [],
    missedQuestionIds = [],
    quizHistory = [],
  } = stats;

  return (
    <div className="space-y-5 animate-page-enter">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Detailed Progress & Analytics
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
          Comprehensive curriculum mastery records, domain performance, and examination logs.
        </p>
      </div>

      {/* Overall Performance Benchmark */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5 space-y-3 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
            <TrendingUp className="w-4 h-4" />
            <h2 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
              Benchmark Passing Readiness
            </h2>
          </div>
          <span
            className={`text-xs font-bold px-2 py-0.5 rounded ${
              overallAccuracy >= 75 && totalAnswered >= 10
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
            }`}
          >
            {totalAnswered < 10
              ? 'Collecting baseline'
              : overallAccuracy >= 75
              ? 'Passing (≥75%)'
              : 'Below Benchmark (<75%)'}
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-baseline">
            <span className="text-3xl font-black text-slate-900 dark:text-white font-mono">
              {overallAccuracy}%
            </span>
            <span className="text-xs text-slate-500">
              Passing Benchmark: 75.00%
            </span>
          </div>
          <ProgressBar
            value={overallAccuracy}
            max={100}
            colorVariant={overallAccuracy >= 75 ? 'emerald' : 'amber'}
          />
        </div>

        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between text-xs text-slate-500">
          <span>
            Total Items Solved:{' '}
            <strong className="text-slate-900 dark:text-white font-mono">
              {totalAnswered}
            </strong>{' '}
            of {totalQuestionsInBank}
          </span>
          <span>
            Logged Sessions:{' '}
            <strong className="text-slate-900 dark:text-white font-mono">
              {totalSessionsCount}
            </strong>
          </span>
        </div>
      </div>

      {/* Domain Comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Gen Ed */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-sky-800 dark:text-sky-300 uppercase tracking-wider">
              General Education
            </span>
            <span className="font-mono text-sm text-slate-900 dark:text-white">
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

        {/* Prof Ed */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-amber-800 dark:text-amber-300 uppercase tracking-wider">
              Professional Education
            </span>
            <span className="font-mono text-sm text-slate-900 dark:text-white">
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

      {/* Targeted Study Bank Status */}
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
          {subjectMasteryList.map((item) => (
            <div key={item.subject.id} className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium text-slate-800 dark:text-slate-200 truncate pr-2">
                  {item.subject.name}
                </span>
                <span className="text-slate-500 font-mono shrink-0">
                  {item.answered > 0 ? `${item.correct}/${item.answered} (${item.percentage}%)` : 'Unattempted'}
                </span>
              </div>
              <ProgressBar
                value={item.percentage}
                max={100}
                colorVariant={item.answered === 0 ? 'primary' : item.percentage >= 75 ? 'emerald' : item.percentage >= 50 ? 'primary' : 'rose'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Exam Simulation History */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
            Exam & Drill Log ({quizHistory.length})
          </h2>
        </div>

        {quizHistory.length > 0 ? (
          <div className="space-y-2">
            {quizHistory.map((exam: QuizResult) => {
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
              Are you sure? This will delete all question answers, session logs, and mastery history.
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
