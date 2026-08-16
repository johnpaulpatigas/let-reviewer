import React, { useState } from 'react';
import {
  Award,
  RotateCcw,
  Home,
  Check,
  X,
  ChevronDown,
  Bookmark,
  BookOpen,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { CategoryBadge, DifficultyBadge } from '../components/ui/Badge';
import type { QuizResult, UserAnswer, Question } from '../types';

interface QuizResultPageProps {
  result: QuizResult;
  bookmarkedIds?: string[];
  onToggleBookmark?: (questionId: string) => void;
  onRetryIncorrect?: (customQuestions: Question[]) => void;
  onRetakeIncorrect?: () => void;
  onRetakeQuiz: () => void;
  onGoHome: () => void;
  onStudyTopic?: (topic: string, subjectId?: string) => void;
}

const CHOICE_LETTERS = ['A', 'B', 'C', 'D'];

export const QuizResultPage: React.FC<QuizResultPageProps> = ({
  result,
  bookmarkedIds = [],
  onToggleBookmark,
  onRetryIncorrect,
  onRetakeIncorrect,
  onRetakeQuiz,
  onGoHome,
  onStudyTopic,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'incorrect' | 'correct'>('all');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  const handleRetakeIncorrectQuestions = () => {
    const incorrectQuestions = questions.filter(
      (q) => !answers[q.id] || !answers[q.id].isCorrect
    );
    if (onRetryIncorrect) {
      onRetryIncorrect(incorrectQuestions);
    } else if (onRetakeIncorrect) {
      onRetakeIncorrect();
    }
  };

  const {
    totalQuestions,
    correctCount,
    incorrectCount,
    unansweredCount,
    scorePercentage,
    isPassed,
    timeSpentSeconds,
    subjectBreakdown,
    answers,
    questions,
  } = result;

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainderSecs = secs % 60;
    if (mins === 0) return `${remainderSecs}s`;
    return `${mins}m ${remainderSecs}s`;
  };

  const filteredQuestions = questions.filter((q) => {
    const ans: UserAnswer | undefined = answers[q.id];
    if (filterMode === 'incorrect') {
      return !ans || !ans.isCorrect;
    }
    if (filterMode === 'correct') {
      return ans && ans.isCorrect;
    }
    return true;
  });

  const toggleQuestionExpand = (id: string) => {
    setExpandedQuestionId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4 animate-page-enter">
      {/* Score Summary Card */}
      <div
        className={`rounded-lg p-5 sm:p-6 text-center border space-y-3 ${
          isPassed
            ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/60'
            : 'bg-rose-50/70 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/60'
        }`}
      >
        <div className="inline-flex p-2.5 rounded-full bg-white dark:bg-slate-900 mb-1 border border-slate-200 dark:border-slate-800">
          <Award
            className={`w-7 h-7 ${
              isPassed
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-rose-600 dark:text-rose-400'
            }`}
          />
        </div>

        <div>
          <span
            className={`inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-1.5 ${
              isPassed
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
            }`}
          >
            {isPassed ? 'Passed Board Benchmark' : 'Did Not Meet Benchmark'}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono">
            {scorePercentage}%
          </h1>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            Passing Benchmark: 75.00%
          </p>
        </div>

        {/* Detailed Stats Row */}
        <div className="grid grid-cols-4 gap-2 pt-3 border-t border-slate-200/60 dark:border-slate-800 text-center">
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Total</span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono">
              {totalQuestions}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block font-semibold">Correct</span>
            <span className="text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-400 font-mono">
              {correctCount}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-rose-700 dark:text-rose-400 uppercase tracking-wider block font-semibold">Incorrect</span>
            <span className="text-xs sm:text-sm font-bold text-rose-700 dark:text-rose-400 font-mono">
              {incorrectCount + unansweredCount}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Time</span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono">
              {formatTime(timeSpentSeconds)}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {incorrectCount > 0 && (
          <Button
            variant="danger"
            size="md"
            fullWidth
            leftIcon={<RotateCcw className="w-4 h-4" />}
            onClick={handleRetakeIncorrectQuestions}
          >
            Retake Missed ({incorrectCount})
          </Button>
        )}
        <Button
          variant="primary"
          size="md"
          fullWidth
          leftIcon={<RotateCcw className="w-4 h-4" />}
          onClick={onRetakeQuiz}
        >
          Retake Session
        </Button>
        <Button
          variant="secondary"
          size="md"
          fullWidth
          leftIcon={<Home className="w-4 h-4" />}
          onClick={onGoHome}
        >
          Return Home
        </Button>
      </div>

      {/* Subject Performance Breakdown */}
      {subjectBreakdown.length > 0 && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 space-y-3">
          <h2 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
            Subject Performance Breakdown
          </h2>
          <div className="space-y-3">
            {subjectBreakdown.map((sb) => (
              <div key={sb.subjectId} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span className="truncate pr-2">{sb.subjectName}</span>
                  <span
                    className={
                      sb.percentage >= 75
                        ? 'text-emerald-700 dark:text-emerald-400 font-bold font-mono'
                        : 'text-rose-700 dark:text-rose-400 font-bold font-mono'
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

      {/* Item-by-Item Review & Rationale */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
              Item-by-Item Review & Rationales
            </h2>
            <p className="text-xs text-slate-500">
              Review correct answers, explanations, and corresponding study materials.
            </p>
          </div>

          <div className="flex gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-md self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setFilterMode('all')}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              All ({questions.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('incorrect')}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                filterMode === 'incorrect'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Missed ({incorrectCount + unansweredCount})
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('correct')}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                filterMode === 'correct'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Correct ({correctCount})
            </button>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-2.5 pt-1">
          {filteredQuestions.map((q) => {
            const originalIndex = questions.findIndex((item) => item.id === q.id);
            const ans: UserAnswer | undefined = answers[q.id];
            const isCorrect = ans && ans.isCorrect;
            const isAnswered = ans !== undefined && ans.selectedAnswer !== null;
            const isExpanded = expandedQuestionId === q.id;

            return (
              <div
                key={q.id}
                className="border border-slate-200 dark:border-slate-800 rounded-md p-3.5 space-y-2.5 transition-colors bg-slate-50/40 dark:bg-slate-900"
              >
                <div
                  onClick={() => toggleQuestionExpand(q.id)}
                  className="flex items-start justify-between gap-2.5 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-2 min-w-0">
                    <span
                      className={`w-5 h-5 rounded flex items-center justify-center text-xs shrink-0 mt-0.5 ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                      }`}
                    >
                      {isCorrect ? (
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      ) : (
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      )}
                    </span>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                          #{originalIndex + 1}
                        </span>
                        <CategoryBadge category={q.category} size="sm" />
                        <DifficultyBadge difficulty={q.difficulty} size="sm" />
                        <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                          {q.subjectName}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white leading-relaxed">
                        {q.question}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0 pt-0.5">
                    {onToggleBookmark && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmark(q.id);
                        }}
                        aria-label={bookmarkedIds.includes(q.id) ? 'Remove bookmark' : 'Bookmark question'}
                        className={`p-1.5 rounded transition-colors ${
                          bookmarkedIds.includes(q.id)
                            ? 'text-amber-600 bg-amber-50 dark:bg-amber-950'
                            : 'text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        <Bookmark
                          className={`w-3.5 h-3.5 ${
                            bookmarkedIds.includes(q.id) ? 'fill-current' : ''
                          }`}
                        />
                      </button>
                    )}

                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="space-y-3 pt-2 border-t border-slate-200/80 dark:border-slate-800 animate-expand text-xs">
                    {/* Choices Breakdown */}
                    <div className="space-y-1.5">
                      {q.choices.map((choice, cIdx) => {
                        const isThisCorrect = q.answer === cIdx;
                        const isThisUserSelection = ans && ans.selectedAnswer === cIdx;

                        let rowStyle = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300';
                        if (isThisCorrect) {
                          rowStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-600 text-emerald-950 dark:text-emerald-100 font-semibold';
                        } else if (isThisUserSelection && !isThisCorrect) {
                          rowStyle = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-950 dark:text-rose-100 font-medium';
                        }

                        return (
                          <div
                            key={cIdx}
                            className={`p-2.5 rounded border flex items-center justify-between gap-2 ${rowStyle}`}
                          >
                            <div className="flex items-center gap-2 flex-1">
                              <span className="w-5 h-5 rounded border flex items-center justify-center font-bold text-[11px] shrink-0 font-mono">
                                {CHOICE_LETTERS[cIdx]}
                              </span>
                              <span>{choice}</span>
                            </div>

                            {isThisCorrect && (
                              <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 uppercase shrink-0">
                                Correct Answer
                              </span>
                            )}
                            {isThisUserSelection && !isThisCorrect && (
                              <span className="text-[10px] font-bold text-rose-700 dark:text-rose-300 uppercase shrink-0">
                                Your Choice
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {!isAnswered && (
                      <p className="text-xs text-amber-700 dark:text-amber-400 font-medium">
                        Question was left unanswered.
                      </p>
                    )}

                    {/* Explanation */}
                    <div className="p-3.5 rounded-lg bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px]">
                          Explanation & Rationale
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 font-mono">
                          Correct: {CHOICE_LETTERS[q.answer]}
                        </span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                        {q.explanation}
                      </p>
                      {onStudyTopic && (
                        <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700 flex justify-end">
                          <button
                            type="button"
                            onClick={() => onStudyTopic(q.topic, q.subjectId)}
                            className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>Related Study Guide: {q.topic} →</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
