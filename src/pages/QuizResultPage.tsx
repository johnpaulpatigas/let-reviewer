import { useState } from 'react';
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
  BookOpen,
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

  const formatTimeSpent = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    if (mins === 0) return `${remainder}s`;
    return `${mins}m ${remainder}s`;
  };

  const missedQuestions = questions.filter((q) => {
    const ans = answers[q.id];
    return !ans || !ans.isCorrect;
  });

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
    <div className="space-y-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 mb-2.5">
          {isPassed ? (
            <Award className="w-6 h-6 text-emerald-600" />
          ) : (
            <AlertCircle className="w-6 h-6 text-amber-600" />
          )}
        </div>

        <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {scorePercentage}%
        </div>
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
          {isPassed ? 'Passed (Meets 75% LET Rating)' : 'Below 75% LET Passing Benchmark'}
        </h2>
        <p className="text-xs text-slate-500 max-w-md mx-auto mt-0.5">
          {isPassed
            ? 'Score meets or exceeds the PRC Licensure Examination for Teachers passing threshold.'
            : 'The PRC standard rating is 75%. Review the explanations below to target weak competencies.'}
        </p>

        <div className="grid grid-cols-3 gap-2 mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="p-2 bg-slate-50 dark:bg-slate-800/60 rounded-lg">
            <span className="block text-slate-500 text-[11px]">Score</span>
            <span className="font-bold text-slate-900 dark:text-white text-sm">
              {correctCount}/{totalQuestions}
            </span>
          </div>
          <div className="p-2 bg-slate-50 dark:bg-slate-800/60 rounded-lg">
            <span className="block text-slate-500 text-[11px]">Duration</span>
            <span className="font-bold text-slate-900 dark:text-white text-sm">
              {formatTimeSpent(timeSpentSeconds)}
            </span>
          </div>
          <div className="p-2 bg-slate-50 dark:bg-slate-800/60 rounded-lg">
            <span className="block text-slate-500 text-[11px]">Status</span>
            <span className={`font-bold text-sm ${isPassed ? 'text-emerald-600' : 'text-amber-600'}`}>
              {isPassed ? 'Passed' : 'Needs Practice'}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-emerald-600 text-xs font-semibold mb-0.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Correct</span>
          </div>
          <span className="text-lg font-bold text-slate-900 dark:text-white">
            {correctCount}
          </span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-rose-600 text-xs font-semibold mb-0.5">
            <XCircle className="w-3.5 h-3.5" />
            <span>Incorrect</span>
          </div>
          <span className="text-lg font-bold text-slate-900 dark:text-white">
            {incorrectCount}
          </span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-slate-500 text-xs font-semibold mb-0.5">
            <Clock className="w-3.5 h-3.5" />
            <span>Skipped</span>
          </div>
          <span className="text-lg font-bold text-slate-900 dark:text-white">
            {unansweredCount}
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        {missedQuestions.length > 0 && (
          <Button
            variant="danger"
            size="md"
            fullWidth
            leftIcon={<RotateCcw className="w-4 h-4" />}
            onClick={() => onRetryIncorrect(missedQuestions)}
          >
            Drill Missed Items ({missedQuestions.length})
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

      {subjectBreakdown.length > 0 && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
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

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
              Item-by-Item Review & Rationale
            </h3>
            <p className="text-xs text-slate-500">
              Review correct answers and rationales.
            </p>
          </div>

          <div className="flex gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setFilterMode('all')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
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
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
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
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                filterMode === 'flagged'
                  ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-300 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Bookmarked
            </button>
          </div>
        </div>

        <div className="space-y-2.5">
          {displayedQuestions.map((q, index) => {
            const ans = answers[q.id];
            const isCorrect = ans?.isCorrect ?? false;
            const isAnswered = ans !== undefined && ans.selectedAnswer !== undefined;
            const isExpanded = expandedQuestionId === q.id;
            const isBookmarked = bookmarkedIds.includes(q.id);

            return (
              <div
                key={q.id}
                className={`rounded-lg border transition-all ${
                  isAnswered
                    ? isCorrect
                      ? 'border-emerald-200 dark:border-emerald-950/60 bg-emerald-50/20 dark:bg-emerald-950/10'
                      : 'border-rose-200 dark:border-rose-950/60 bg-rose-50/20 dark:bg-rose-950/10'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20'
                }`}
              >
                <div
                  onClick={() => toggleExpand(q.id)}
                  className="p-3.5 flex items-start justify-between gap-3 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-2.5 flex-1 min-w-0">
                    <span
                      className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 font-bold text-xs ${
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

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(q.id);
                      }}
                      className={`p-1.5 rounded transition-colors ${
                        isBookmarked
                          ? 'text-amber-500 bg-amber-50 dark:bg-amber-950'
                          : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <Bookmark
                        className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`}
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

                {isExpanded && (
                  <div className="px-3.5 pb-3.5 pt-1 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
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
                            className={`p-2.5 rounded-md border text-xs flex items-center justify-between gap-2 ${style}`}
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

                    <div className="p-3 rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <div className="flex items-center gap-1 text-slate-900 dark:text-slate-100 font-bold mb-1">
                        <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                        <span>Pedagogical Rationale:</span>
                      </div>
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
