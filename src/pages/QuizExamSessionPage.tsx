import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import {
  Clock,
  Flag,
  Grid,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  X,
  Scale,
  RotateCcw,
} from 'lucide-react';
import type { Question, QuizConfig, UserAnswer, QuizResult } from '../types';

interface QuizExamSessionPageProps {
  config: QuizConfig;
  questions: Question[];
  bookmarkedIds?: string[];
  initialIndex?: number;
  initialAnswers?: Record<string, UserAnswer>;
  initialFlaggedIds?: string[];
  initialSecondsRemaining?: number | null;
  startTime?: number;
  onRecordAnswer?: (questionId: string, choiceIndex: number, isCorrect: boolean) => void;
  onToggleFlag?: (questionId: string) => void;
  onUpdateIndex?: (index: number) => void;
  onUpdateSecondsRemaining?: (seconds: number | null) => void;
  onToggleBookmark?: (questionId: string) => void;
  onFinishSession: (result: QuizResult) => void;
  onExit: () => void;
}

const CHOICE_LETTERS = ['A', 'B', 'C', 'D'];

export const QuizExamSessionPage: React.FC<QuizExamSessionPageProps> = ({
  config,
  questions,
  initialIndex = 0,
  initialAnswers = {},
  initialFlaggedIds = [],
  initialSecondsRemaining,
  startTime: initialStartTime,
  onRecordAnswer,
  onToggleFlag: onExternalToggleFlag,
  onUpdateIndex,
  onUpdateSecondsRemaining,
  onFinishSession,
  onExit,
}) => {
  const sessionKey = `let_exam_session_${config.blueprintId || 'custom'}_${questions.length}`;

  // Persistent state initializer
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    if (initialIndex > 0) return Math.min(initialIndex, questions.length - 1);
    try {
      const saved = sessionStorage.getItem(`${sessionKey}_index`);
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  const [answers, setAnswers] = useState<Record<string, UserAnswer>>(() => {
    if (Object.keys(initialAnswers).length > 0) return initialAnswers;
    try {
      const saved = sessionStorage.getItem(`${sessionKey}_answers`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [flaggedIds, setFlaggedIds] = useState<Set<string>>(() => {
    if (initialFlaggedIds.length > 0) return new Set(initialFlaggedIds);
    try {
      const saved = sessionStorage.getItem(`${sessionKey}_flagged`);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [startTime] = useState<number>(() => {
    if (initialStartTime) return initialStartTime;
    try {
      const saved = sessionStorage.getItem(`${sessionKey}_start_time`);
      if (saved) return parseInt(saved, 10);
      const now = Date.now();
      sessionStorage.setItem(`${sessionKey}_start_time`, now.toString());
      return now;
    } catch {
      return Date.now();
    }
  });

  const totalSeconds = config.timeLimitMinutes ? config.timeLimitMinutes * 60 : null;
  const [secondsRemaining, setSecondsRemaining] = useState<number | null>(() => {
    if (initialSecondsRemaining !== undefined && initialSecondsRemaining !== null) {
      return initialSecondsRemaining;
    }
    if (!totalSeconds) return null;
    try {
      const saved = sessionStorage.getItem(`${sessionKey}_remaining`);
      return saved ? parseInt(saved, 10) : totalSeconds;
    } catch {
      return totalSeconds;
    }
  });

  const [isGridOpen, setIsGridOpen] = useState(false);
  const [gridFilter, setGridFilter] = useState<'all' | 'unanswered' | 'flagged'>('all');
  const [isSubmitConfirmOpen, setIsSubmitConfirmOpen] = useState(false);
  const [isExitConfirmOpen, setIsExitConfirmOpen] = useState(false);

  const hasFinishedRef = useRef(false);

  // Sync state to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(`${sessionKey}_index`, currentIndex.toString());
      sessionStorage.setItem(`${sessionKey}_answers`, JSON.stringify(answers));
      sessionStorage.setItem(`${sessionKey}_flagged`, JSON.stringify(Array.from(flaggedIds)));
      if (secondsRemaining !== null) {
        sessionStorage.setItem(`${sessionKey}_remaining`, secondsRemaining.toString());
      }
    } catch {
      // ignore
    }
  }, [currentIndex, answers, flaggedIds, secondsRemaining, sessionKey]);

  // Clean up session storage upon submit
  const cleanupStorage = useCallback(() => {
    try {
      sessionStorage.removeItem(`${sessionKey}_index`);
      sessionStorage.removeItem(`${sessionKey}_answers`);
      sessionStorage.removeItem(`${sessionKey}_flagged`);
      sessionStorage.removeItem(`${sessionKey}_remaining`);
      sessionStorage.removeItem(`${sessionKey}_start_time`);
    } catch {
      // ignore
    }
  }, [sessionKey]);

  const calculateAndSubmitResults = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    cleanupStorage();

    const totalQuestions = questions.length;
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;

    const subjectStatsMap: Record<string, { total: number; correct: number; name: string }> = {};

    questions.forEach((q) => {
      if (!subjectStatsMap[q.subjectId]) {
        subjectStatsMap[q.subjectId] = { total: 0, correct: 0, name: q.subjectName };
      }
      subjectStatsMap[q.subjectId].total += 1;

      const ans = answers[q.id];
      if (ans && ans.selectedAnswer !== undefined) {
        if (ans.isCorrect) {
          correctCount += 1;
          subjectStatsMap[q.subjectId].correct += 1;
        } else {
          incorrectCount += 1;
        }
      } else {
        unansweredCount += 1;
      }
    });

    const scorePercentage =
      totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const isPassed = scorePercentage >= 75; // PRC LET standard
    const timeSpentSeconds = Math.round((Date.now() - startTime) / 1000);

    const subjectBreakdown = Object.entries(subjectStatsMap).map(
      ([subjectId, stat]) => ({
        subjectId,
        subjectName: stat.name,
        total: stat.total,
        correct: stat.correct,
        percentage:
          stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0,
      })
    );

    const result: QuizResult = {
      sessionId: `exam-${Date.now()}`,
      config,
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
      timestamp: Date.now(),
    };

    onFinishSession(result);
  }, [answers, cleanupStorage, config, onFinishSession, questions, startTime]);

  // Real Countdown Timer
  useEffect(() => {
    if (secondsRemaining === null) return;

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(interval);
          calculateAndSubmitResults();
          if (onUpdateSecondsRemaining) onUpdateSecondsRemaining(0);
          return 0;
        }
        const next = prev - 1;
        if (onUpdateSecondsRemaining && next % 5 === 0) {
          onUpdateSecondsRemaining(next);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsRemaining, calculateAndSubmitResults, onUpdateSecondsRemaining]);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const isFirstQuestion = currentIndex === 0;

  if (!currentQuestion) {
    return (
      <div className="text-center py-12 space-y-3">
        <p className="text-slate-500">No questions available in this session.</p>
        <Button variant="secondary" onClick={onExit}>
          Exit Examination
        </Button>
      </div>
    );
  }

  const currentUserAnswer = answers[currentQuestion.id];
  const isCurrentFlagged = flaggedIds.has(currentQuestion.id);

  const handleSelectChoice = (choiceIndex: number) => {
    const isCorrect = choiceIndex === currentQuestion.answer;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        questionId: currentQuestion.id,
        selectedAnswer: choiceIndex,
        isCorrect,
      },
    }));
    if (onRecordAnswer) {
      onRecordAnswer(currentQuestion.id, choiceIndex, isCorrect);
    }
  };

  const toggleFlag = (questionId: string) => {
    setFlaggedIds((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
    if (onExternalToggleFlag) {
      onExternalToggleFlag(questionId);
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainderSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainderSecs
      .toString()
      .padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(answers).length;
  const unansweredCount = questions.length - answeredCount;

  // Jump to first unanswered
  const handleReviewUnanswered = () => {
    const firstUnansweredIdx = questions.findIndex((q) => !answers[q.id]);
    if (firstUnansweredIdx !== -1) {
      setCurrentIndex(firstUnansweredIdx);
    }
    setIsGridOpen(false);
    setIsSubmitConfirmOpen(false);
  };

  // Jump to first flagged
  const handleReviewFlagged = () => {
    const firstFlaggedIdx = questions.findIndex((q) => flaggedIds.has(q.id));
    if (firstFlaggedIdx !== -1) {
      setCurrentIndex(firstFlaggedIdx);
    }
    setIsGridOpen(false);
    setIsSubmitConfirmOpen(false);
  };

  const filteredGridQuestions = questions.filter((q) => {
    if (gridFilter === 'unanswered') return !answers[q.id];
    if (gridFilter === 'flagged') return flaggedIds.has(q.id);
    return true;
  });

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Examination Title & Session Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 sm:p-3.5 flex items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 min-w-0">
          <div className="p-1.5 rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900 shrink-0">
            <Scale className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <h2 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
              {config.title || 'LET Examination Simulation'}
            </h2>
            <span className="text-[10px] text-slate-500 block truncate">
              {currentQuestion.category === 'gen_ed' ? 'General Education' : 'Professional Education'} • Item {currentIndex + 1} of {questions.length}
            </span>
          </div>
        </div>

        {/* Timer & Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          {secondsRemaining !== null && (
            <div
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-xs font-bold border ${
                secondsRemaining < 300
                  ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-300 dark:border-rose-800'
                  : 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700'
              }`}
            >
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>{formatTime(secondsRemaining)}</span>
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsGridOpen(true)}
            aria-label="Open question navigator"
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors tap-target cursor-pointer border border-slate-200 dark:border-slate-700"
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="font-mono">{answeredCount}/{questions.length}</span>
          </button>
        </div>
      </div>

      {/* Progress Line */}
      <ProgressBar
        value={currentIndex + 1}
        max={questions.length}
        label={`Question ${currentIndex + 1} of ${questions.length}`}
        showPercentage
      />

      {/* Main Examination Item Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 sm:p-6 space-y-4 shadow-xs">
        {/* Topic & Metadata */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
          <div className="space-y-0.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {currentQuestion.subjectName}
            </span>
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
              {currentQuestion.topic}
            </div>
          </div>
          <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
            #{currentIndex + 1}
          </span>
        </div>

        {/* Question Stem */}
        <div className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-medium leading-relaxed">
          {currentQuestion.question}
        </div>

        {/* Examination Answer Choices */}
        <div className="space-y-2.5 pt-1" role="radiogroup" aria-label="Exam choices">
          {currentQuestion.choices.map((choiceText, index) => {
            const isSelected = currentUserAnswer?.selectedAnswer === index;

            return (
              <button
                key={index}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => handleSelectChoice(index)}
                className={`w-full text-left p-3.5 rounded-lg border transition-all duration-150 active:scale-[0.99] flex items-center justify-between gap-3 tap-target cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white font-semibold ring-2 ring-slate-900/20 dark:ring-white/20'
                    : 'bg-slate-50/70 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600'
                }`}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span
                    className={`w-6 h-6 rounded-md border flex items-center justify-center font-bold text-xs shrink-0 font-mono ${
                      isSelected
                        ? 'bg-white text-slate-900 dark:bg-slate-900 dark:text-white border-transparent'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600'
                    }`}
                  >
                    {CHOICE_LETTERS[index]}
                  </span>
                  <span className="text-xs sm:text-sm leading-snug break-words">
                    {choiceText}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Flag Question for Review Control */}
      <div className="flex justify-center py-0.5">
        <button
          type="button"
          onClick={() => toggleFlag(currentQuestion.id)}
          aria-pressed={isCurrentFlagged}
          aria-label={isCurrentFlagged ? 'Question flagged for review. Click to unflag.' : 'Flag question for review'}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-150 active:scale-[0.99] tap-target cursor-pointer border ${
            isCurrentFlagged
              ? 'bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border-amber-300 dark:border-amber-700 font-bold shadow-xs'
              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs'
          }`}
        >
          <Flag className={`w-3.5 h-3.5 shrink-0 ${isCurrentFlagged ? 'fill-current text-amber-600 dark:text-amber-400' : 'text-slate-400 dark:text-slate-500'}`} />
          <span>{isCurrentFlagged ? 'Question Flagged' : 'Flag Question for Review'}</span>
        </button>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between gap-2.5 pt-1">
        <Button
          variant="outline"
          size="md"
          onClick={() => {
            const nextIdx = Math.max(0, currentIndex - 1);
            setCurrentIndex(nextIdx);
            if (onUpdateIndex) onUpdateIndex(nextIdx);
          }}
          disabled={isFirstQuestion}
          leftIcon={<ChevronLeft className="w-4 h-4" />}
        >
          Previous
        </Button>

        <div className="flex items-center gap-2">
          {!isLastQuestion ? (
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                const nextIdx = Math.min(questions.length - 1, currentIndex + 1);
                setCurrentIndex(nextIdx);
                if (onUpdateIndex) onUpdateIndex(nextIdx);
              }}
              rightIcon={<ChevronRight className="w-4 h-4" />}
            >
              Next Item
            </Button>
          ) : (
            <Button
              variant="success"
              size="md"
              onClick={() => setIsSubmitConfirmOpen(true)}
              leftIcon={<CheckCircle2 className="w-4 h-4" />}
              className="font-bold"
            >
              Submit Examination
            </Button>
          )}
        </div>
      </div>

      {/* Quick Finish Button on Footer Bar */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
        <button
          type="button"
          onClick={() => setIsExitConfirmOpen(true)}
          className="hover:underline cursor-pointer"
        >
          Pause & Exit
        </button>
        <button
          type="button"
          onClick={() => setIsSubmitConfirmOpen(true)}
          className="font-bold text-slate-800 dark:text-slate-200 hover:underline cursor-pointer"
        >
          Finish & Grade Exam →
        </button>
      </div>

      {/* Question Navigator Drawer / Modal */}
      {isGridOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
          <div className="bg-white dark:bg-slate-900 w-full sm:max-w-md rounded-t-xl sm:rounded-xl p-5 shadow-2xl max-h-[85vh] flex flex-col space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                  Question Navigator
                </h3>
                <p className="text-xs text-slate-500">
                  {answeredCount} of {questions.length} answered ({unansweredCount} remaining)
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsGridOpen(false)}
                className="w-7 h-7 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-medium">
              <button
                type="button"
                onClick={() => setGridFilter('all')}
                className={`flex-1 py-1 rounded transition-colors cursor-pointer ${
                  gridFilter === 'all'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                All ({questions.length})
              </button>
              <button
                type="button"
                onClick={() => setGridFilter('unanswered')}
                className={`flex-1 py-1 rounded transition-colors cursor-pointer ${
                  gridFilter === 'unanswered'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Unanswered ({unansweredCount})
              </button>
              <button
                type="button"
                onClick={() => setGridFilter('flagged')}
                className={`flex-1 py-1 rounded transition-colors cursor-pointer ${
                  gridFilter === 'flagged'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Flagged ({flaggedIds.size})
              </button>
            </div>

            {/* Questions Grid */}
            <div className="grid grid-cols-5 sm:grid-cols-6 gap-2 py-2 overflow-y-auto max-h-64">
              {filteredGridQuestions.map((q) => {
                const originalIdx = questions.findIndex((item) => item.id === q.id);
                const isAnswered = answers[q.id] !== undefined;
                const isFlagged = flaggedIds.has(q.id);
                const isCurrent = originalIdx === currentIndex;

                let btnStyle =
                  'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
                if (isAnswered) {
                  btnStyle =
                    'bg-slate-900 text-white font-bold border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white';
                }
                if (isCurrent) {
                  btnStyle += ' ring-2 ring-slate-900 dark:ring-white ring-offset-1';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      setCurrentIndex(originalIdx);
                      setIsGridOpen(false);
                    }}
                    className={`h-9 rounded-md border flex flex-col items-center justify-center relative font-semibold text-xs tap-target cursor-pointer ${btnStyle}`}
                  >
                    <span>{originalIdx + 1}</span>
                    {isFlagged && (
                      <Flag className="w-2.5 h-2.5 fill-amber-400 text-amber-400 absolute top-0.5 right-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Footer Buttons */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex gap-2">
              <Button
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => setIsGridOpen(false)}
              >
                Back to Item
              </Button>
              <Button
                variant="success"
                size="md"
                fullWidth
                onClick={() => {
                  setIsGridOpen(false);
                  setIsSubmitConfirmOpen(true);
                }}
              >
                Submit Exam
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Submission Confirmation Modal */}
      {isSubmitConfirmOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-sm rounded-xl p-5 text-center space-y-3.5 shadow-2xl">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-5 h-5" />
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Submit Examination?
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Please verify your responses before final grading.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-lg p-3 text-xs text-slate-700 dark:text-slate-300 space-y-1.5 border border-slate-200 dark:border-slate-700 text-left">
              <div className="flex justify-between items-center">
                <span>Total Items Answered:</span>
                <span className="font-bold text-slate-900 dark:text-white font-mono">
                  {answeredCount} of {questions.length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Unanswered Items:</span>
                <span className={`font-bold font-mono ${unansweredCount > 0 ? 'text-rose-600 dark:text-rose-400' : 'text-slate-500'}`}>
                  {unansweredCount}
                </span>
              </div>
              {flaggedIds.size > 0 && (
                <div className="flex justify-between items-center">
                  <span>Flagged for Review:</span>
                  <span className="font-bold font-mono text-amber-600 dark:text-amber-400">
                    {flaggedIds.size}
                  </span>
                </div>
              )}
            </div>

            {unansweredCount > 0 && (
              <button
                type="button"
                onClick={handleReviewUnanswered}
                className="text-xs font-semibold text-sky-700 dark:text-sky-400 hover:underline block w-full text-center cursor-pointer"
              >
                Review Unanswered Items ({unansweredCount}) →
              </button>
            )}

            {flaggedIds.size > 0 && (
              <button
                type="button"
                onClick={handleReviewFlagged}
                className="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline block w-full text-center cursor-pointer"
              >
                Review Flagged Items ({flaggedIds.size}) →
              </button>
            )}

            <p className="text-[11px] text-slate-500 leading-snug">
              Once submitted, your examination answers will be locked and graded against the 75.00% passing mark.
            </p>

            <div className="flex gap-2 pt-1">
              <Button
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => setIsSubmitConfirmOpen(false)}
              >
                Keep Reviewing
              </Button>
              <Button
                variant="success"
                size="md"
                fullWidth
                onClick={() => {
                  setIsSubmitConfirmOpen(false);
                  calculateAndSubmitResults();
                }}
                className="font-bold"
              >
                Confirm Submit
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Accidental Exit Modal */}
      {isExitConfirmOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-sm rounded-xl p-5 text-center space-y-3 shadow-2xl">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center mx-auto">
              <RotateCcw className="w-5 h-5" />
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Leave Active Examination?
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Your current responses and remaining time are saved in this browser. You can return to resume this exam session.
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => setIsExitConfirmOpen(false)}
              >
                Continue Exam
              </Button>
              <Button
                variant="danger"
                size="md"
                fullWidth
                onClick={onExit}
              >
                Exit to Menu
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
