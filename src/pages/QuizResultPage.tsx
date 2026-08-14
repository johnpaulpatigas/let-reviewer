import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  Home,
  ChevronDown,
  ChevronUp,
  Bookmark,
  AlertCircle,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import type { QuizResult, Question } from '../types';

interface QuizResultPageProps {
  result: QuizResult;
  bookmarkedIds: string[];
  onToggleBookmark: (questionId: string) => void;
  onRetryIncorrect: (missedQuestions: Question[]) => void;
  onRetakeQuiz: () => void;
  onGoHome: () => void;
}

export const QuizResultPage: React.FC<QuizResultPageProps> = ({
  result,
  bookmarkedIds,
  onToggleBookmark,
  onRetryIncorrect,
  onRetakeQuiz,
  onGoHome,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'incorrect' | 'flagged'>('all');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  const {
    scorePercentage,
    correctCount,
    incorrectCount,
    unansweredCount,
    totalQuestions,
    isPassed,
    timeSpentSeconds,
    subjectBreakdown,
    answers,
    questions,
  } = result;

  // Format time (e.g., "3m 45s")
  const formatTimeSpent = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    if (mins === 0) return `${remainder}s`;
    return `${mins}m ${remainder}s`;
  };

  // Get list of questions the user got wrong or didn't answer
  const missedQuestions = questions.filter((q) => {
    const ans = answers[q.id];
    return !ans || !ans.isCorrect;
  });

  // Filtered list for detailed review
  const displayedQuestions = questions.filter((q) => {
    const ans = answers[q.id];
    if (filterMode === 'incorrect') {
      return !ans || !ans.isCorrect;
    }
    if (filterMode === 'flagged') {
      return bookmarkedIds.includes(q.id);
    }
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedQuestionId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-5 animate-fadeIn">
      {/* Result Hero Banner */}
      <div
        className={`rounded-3xl p-5 sm:p-6 text-white text-center shadow-lg transition-all ${
          isPassed
            ? 'bg-gradient-to-br from-emerald-600 to-teal-800 shadow-emerald-950/20'
            : 'bg-gradient-to-br from-rose-600 to-slate-900 shadow-rose-950/20'
        }`}
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md mb-3">
          {isPassed ? (
            <Award className="w-8 h-8 text-amber-300" />
          ) : (
            <AlertCircle className="w-8 h-8 text-white" />
          )}
        </div>

        <div className="text-3xl sm:text-4xl font-black tracking-tight">
          {scorePercentage}%
        </div>
        <h2 className="text-lg sm:text-xl font-bold mt-1">
          {isPassed ? 'Congratulations! Passed (LET Rating)' : 'Keep Practicing! Below 75% Benchmark'}
        </h2>
        <p className="text-xs sm:text-sm text-white/80 max-w-sm mx-auto mt-1">
          {isPassed
            ? 'You achieved the PRC Licensure Examination for Teachers required passing rating of 75%!'
            : 'The PRC standard passing rating is 75%. Review the explanations below to target weak areas.'}
        </p>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-white/20 text-xs">
          <div className="bg-white/10 rounded-xl p-2">
            <span className="block text-white/70 text-[11px]">Score</span>
            <span className="font-bold text-sm text-white">
              {correctCount}/{totalQuestions}
            </span>
          </div>
          <div className="bg-white/10 rounded-xl p-2">
            <span className="block text-white/70 text-[11px]">Duration</span>
            <span className="font-bold text-sm text-white">
              {formatTimeSpent(timeSpentSeconds)}
            </span>
          </div>
          <div className="bg-white/10 rounded-xl p-2">
            <span className="block text-white/70 text-[11px]">Accuracy</span>
            <span className="font-bold text-sm text-white">
              {scorePercentage}%
            </span>
          </div>
        </div>
      </div>

      {/* Answer Summary Card */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-emerald-600 text-xs font-bold mb-1">
            <CheckCircle2 className="w-4 h-4" />
            <span>Correct</span>
          </div>
          <span className="text-xl font-black text-slate-900 dark:text-white">
            {correctCount}
          </span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-rose-600 text-xs font-bold mb-1">
            <XCircle className="w-4 h-4" />
            <span>Incorrect</span>
          </div>
          <span className="text-xl font-black text-slate-900 dark:text-white">
            {incorrectCount}
          </span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-slate-500 text-xs font-bold mb-1">
            <Clock className="w-4 h-4" />
            <span>Skipped</span>
          </div>
          <span className="text-xl font-black text-slate-900 dark:text-white">
            {unansweredCount}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-2.5">
        {missedQuestions.length > 0 && (
          <Button
            variant="danger"
            size="md"
            fullWidth
            leftIcon={<RotateCcw className="w-4 h-4" />}
            onClick={() => onRetryIncorrect(missedQuestions)}
          >
            Drill Missed Questions ({missedQuestions.length})
          </Button>
        )}
        <Button
          variant="primary"
          size="md"
          fullWidth
          leftIcon={<RotateCcw className="w-4 h-4" />}
          onClick={onRetakeQuiz}
        >
          Retake Full Session
        </Button>
        <Button
          variant="secondary"
          size="md"
          fullWidth
          leftIcon={<Home className="w-4 h-4" />}
          onClick={onGoHome}
        >
          Back to Dashboard
        </Button>
      </div>

      {/* Subject Domain Breakdown */}
      {subjectBreakdown.length > 0 && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider">
            Subject Performance Breakdown
          </h3>
          <div className="space-y-3">
            {subjectBreakdown.map((sb) => (
              <div key={sb.subjectId} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span className="truncate pr-2">{sb.subjectName}</span>
                  <span
                    className={
                      sb.percentage >= 75
                        ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                        : 'text-rose-600 dark:text-rose-400 font-bold'
                    }
                  >
                    {sb.correct}/{sb.total} ({sb.percentage}%)
                  </span>
                </div>
                <ProgressBar
                  value={sb.correct}
                  max={sb.total}
                  colorVariant={sb.percentage >= 75 ? 'emerald' : 'rose'}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed Item Review Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Item-by-Item Review & Rationale
            </h3>
            <p className="text-xs text-slate-500">
              Examine each question and the official explanation.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setFilterMode('all')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                filterMode === 'all'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              All ({questions.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('incorrect')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                filterMode === 'incorrect'
                  ? 'bg-white dark:bg-slate-700 text-rose-600 dark:text-rose-300 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Incorrect ({missedQuestions.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('flagged')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                filterMode === 'flagged'
                  ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-300 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Bookmarked
            </button>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-3">
          {displayedQuestions.map((q, index) => {
            const ans = answers[q.id];
            const isCorrect = ans?.isCorrect ?? false;
            const isAnswered = ans !== undefined && ans.selectedAnswer !== undefined;
            const isExpanded = expandedQuestionId === q.id;
            const isBookmarked = bookmarkedIds.includes(q.id);

            return (
              <div
                key={q.id}
                className={`rounded-2xl border transition-all ${
                  isAnswered
                    ? isCorrect
                      ? 'border-emerald-200 dark:border-emerald-950/60 bg-emerald-50/20 dark:bg-emerald-950/10'
                      : 'border-rose-200 dark:border-rose-950/60 bg-rose-50/20 dark:bg-rose-950/10'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20'
                }`}
              >
                {/* Header Summary Row */}
                <div
                  onClick={() => toggleExpand(q.id)}
                  className="p-3.5 sm:p-4 flex items-start justify-between gap-3 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs ${
                        isAnswered
                          ? isCorrect
                            ? 'bg-emerald-600 text-white'
                            : 'bg-rose-600 text-white'
                          : 'bg-slate-300 text-slate-700'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
                          {q.subjectName}
                        </span>
                        <span className="text-[10px] text-slate-400">•</span>
                        <span className="text-[11px] text-slate-500">{q.topic}</span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 line-clamp-2">
                        {q.question}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(q.id);
                      }}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isBookmarked
                          ? 'text-amber-500 bg-amber-50 dark:bg-amber-950'
                          : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <Bookmark
                        className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`}
                      />
                    </button>

                    <span className="text-slate-400 p-1">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </div>
                </div>

                {/* Expanded Details: Choices & Explanation */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-100 dark:border-slate-800 space-y-3">
                    <div className="space-y-1.5">
                      {q.choices.map((choice, cIdx) => {
                        const isSelected = ans?.selectedAnswer === cIdx;
                        const isAnswer = q.answer === cIdx;

                        let style =
                          'bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400';
                        if (isAnswer) {
                          style =
                            'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-semibold';
                        } else if (isSelected && !isAnswer) {
                          style =
                            'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-950 dark:text-rose-200 font-semibold';
                        }

                        return (
                          <div
                            key={cIdx}
                            className={`p-2.5 rounded-xl border text-xs flex items-center justify-between gap-2 ${style}`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-bold">
                                {['A', 'B', 'C', 'D'][cIdx]}.
                              </span>
                              <span>{choice}</span>
                            </div>
                            {isAnswer && (
                              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
                                Correct Answer
                              </span>
                            )}
                            {isSelected && !isAnswer && (
                              <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400 shrink-0">
                                Your Choice
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-900/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <strong className="text-indigo-900 dark:text-indigo-200 block mb-1">
                        Pedagogical Rationale:
                      </strong>
                      {q.explanation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {displayedQuestions.length === 0 && (
            <p className="text-center py-6 text-xs text-slate-500">
              No questions found for this filter.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
