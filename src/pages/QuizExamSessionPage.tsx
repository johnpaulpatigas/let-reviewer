import { useState, useEffect, useRef, useCallback } from 'react';
import { QuestionCard } from '../components/quiz/QuestionCard';
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
} from 'lucide-react';
import type { Question, QuizConfig, UserAnswer, QuizResult } from '../types';

interface QuizExamSessionPageProps {
  config: QuizConfig;
  questions: Question[];
  bookmarkedIds: string[];
  onToggleBookmark: (questionId: string) => void;
  onFinishSession: (result: QuizResult) => void;
  onExit: () => void;
}

export const QuizExamSessionPage: React.FC<QuizExamSessionPageProps> = ({
  config,
  questions,
  bookmarkedIds,
  onToggleBookmark,
  onFinishSession,
  onExit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, UserAnswer>>({});
  const [flaggedIds, setFlaggedIds] = useState<Set<string>>(new Set());
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isSubmitConfirmOpen, setIsSubmitConfirmOpen] = useState(false);
  const [startTime] = useState<number>(() => Date.now());

  const totalSeconds = config.timeLimitMinutes ? config.timeLimitMinutes * 60 : null;
  const [secondsRemaining, setSecondsRemaining] = useState<number | null>(totalSeconds);
  const hasFinishedRef = useRef(false);

  const calculateAndSubmitResults = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;

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
  }, [answers, config, onFinishSession, questions, startTime]);

  useEffect(() => {
    if (secondsRemaining === null) return;

    if (secondsRemaining <= 0) {
      calculateAndSubmitResults();
      return;
    }

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(interval);
          calculateAndSubmitResults();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsRemaining, calculateAndSubmitResults]);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const isFirstQuestion = currentIndex === 0;

  if (!currentQuestion) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">No questions available.</p>
        <Button variant="secondary" onClick={onExit} className="mt-4">
          Exit Exam
        </Button>
      </div>
    );
  }

  const currentUserAnswer = answers[currentQuestion.id];
  const isCurrentFlagged = flaggedIds.has(currentQuestion.id);

  const handleSelectChoice = (choiceIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        questionId: currentQuestion.id,
        selectedAnswer: choiceIndex,
        isCorrect: choiceIndex === currentQuestion.answer,
      },
    }));
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

  return (
    <div className="space-y-3.5">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3">
        {secondsRemaining !== null ? (
          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-xs font-bold ${
              secondsRemaining < 120
                ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span>{formatTime(secondsRemaining)}</span>
          </div>
        ) : (
          <div className="text-xs font-semibold text-slate-500">
            Untimed Exam
          </div>
        )}

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => toggleFlag(currentQuestion.id)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors tap-target ${
              isCurrentFlagged
                ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            <Flag className={`w-3.5 h-3.5 ${isCurrentFlagged ? 'fill-current' : ''}`} />
            <span>{isCurrentFlagged ? 'Flagged' : 'Flag'}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsGridOpen(true)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors tap-target"
          >
            <Grid className="w-3.5 h-3.5" />
            <span>{answeredCount}/{questions.length}</span>
          </button>
        </div>
      </div>

      <ProgressBar
        value={currentIndex + 1}
        max={questions.length}
        label={`Item ${currentIndex + 1} of ${questions.length}`}
        showPercentage
      />

      <QuestionCard
        key={currentQuestion.id}
        question={currentQuestion}
        questionNumber={currentIndex + 1}
        totalQuestions={questions.length}
        userAnswer={currentUserAnswer}
        isAnswerSubmitted={false}
        isBookmarked={bookmarkedIds.includes(currentQuestion.id)}
        onSelectChoice={handleSelectChoice}
        onToggleBookmark={onToggleBookmark}
        mode="exam"
      />

      <div className="flex items-center justify-between gap-2.5 pt-1">
        <Button
          variant="outline"
          size="md"
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
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
              onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
              rightIcon={<ChevronRight className="w-4 h-4" />}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="success"
              size="md"
              onClick={() => setIsSubmitConfirmOpen(true)}
              leftIcon={<CheckCircle2 className="w-4 h-4" />}
            >
              Submit Exam
            </Button>
          )}
        </div>
      </div>

      {isGridOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white dark:bg-slate-900 w-full sm:max-w-md rounded-t-2xl sm:rounded-xl p-5 shadow-xl max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                Question Navigator
              </h3>
              <button
                type="button"
                onClick={() => setIsGridOpen(false)}
                className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 py-2.5 text-xs text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-indigo-600" />
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-slate-200 dark:bg-slate-700" />
                <span>Unanswered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-amber-400" />
                <span>Flagged</span>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2 py-3 overflow-y-auto max-h-60">
              {questions.map((q, idx) => {
                const isAnswered = answers[q.id] !== undefined;
                const isFlagged = flaggedIds.has(q.id);
                const isCurrent = idx === currentIndex;

                let btnStyle =
                  'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
                if (isAnswered) {
                  btnStyle =
                    'bg-indigo-600 text-white font-bold border-indigo-600';
                }
                if (isCurrent) {
                  btnStyle += ' ring-2 ring-indigo-500 ring-offset-1';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsGridOpen(false);
                    }}
                    className={`h-9 rounded-lg border flex flex-col items-center justify-center relative font-semibold text-xs tap-target ${btnStyle}`}
                  >
                    <span>{idx + 1}</span>
                    {isFlagged && (
                      <Flag className="w-2.5 h-2.5 fill-amber-400 text-amber-400 absolute top-0.5 right-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex gap-2">
              <Button
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => setIsGridOpen(false)}
              >
                Back to Exam
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

      {isSubmitConfirmOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-sm rounded-xl p-5 text-center space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-5 h-5" />
            </div>

            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Ready to submit your exam?
            </h3>

            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-lg p-3 text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <div className="flex justify-between">
                <span>Answered:</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {answeredCount} / {questions.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Unanswered:</span>
                <span className={`font-bold ${unansweredCount > 0 ? 'text-rose-600' : 'text-slate-500'}`}>
                  {unansweredCount}
                </span>
              </div>
              {flaggedIds.size > 0 && (
                <div className="flex justify-between">
                  <span>Flagged items:</span>
                  <span className="font-bold text-amber-600">
                    {flaggedIds.size}
                  </span>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-500">
              Once submitted, your session will be scored against the 75% PRC passing mark.
            </p>

            <div className="flex gap-2 pt-2">
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
              >
                Confirm Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
