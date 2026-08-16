import { useState } from 'react';
import { QuestionCard } from '../components/quiz/QuestionCard';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { ChevronLeft, ChevronRight, CheckCircle2, Award } from 'lucide-react';
import type { Question, QuizConfig, UserAnswer, QuizResult } from '../types';

interface PracticeReviewPageProps {
  config: QuizConfig;
  questions: Question[];
  bookmarkedIds: string[];
  initialIndex?: number;
  initialAnswers?: Record<string, UserAnswer>;
  initialSubmittedQuestionIds?: string[];
  startTime?: number;
  onRecordAnswer?: (questionId: string, choiceIndex: number, isCorrect: boolean) => void;
  onSubmitQuestion?: (questionId: string) => void;
  onUpdateIndex?: (index: number) => void;
  onToggleBookmark: (questionId: string) => void;
  onFinishSession: (result: QuizResult) => void;
  onExit: () => void;
}

export const PracticeReviewPage: React.FC<PracticeReviewPageProps> = ({
  config,
  questions,
  bookmarkedIds,
  initialIndex = 0,
  initialAnswers = {},
  initialSubmittedQuestionIds = [],
  startTime,
  onRecordAnswer,
  onSubmitQuestion,
  onUpdateIndex,
  onToggleBookmark,
  onFinishSession,
  onExit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(() => Math.min(Math.max(0, initialIndex), Math.max(0, questions.length - 1)));
  const [direction, setDirection] = useState<'next' | 'prev' | undefined>();
  const [answers, setAnswers] = useState<Record<string, UserAnswer>>(() => initialAnswers);
  const [submittedQuestions, setSubmittedQuestions] = useState<Set<string>>(() => new Set(initialSubmittedQuestionIds));
  const [sessionStartTime] = useState<number>(() => startTime || Date.now());

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const isFirstQuestion = currentIndex === 0;

  if (!currentQuestion) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500 dark:text-neutral-400">No questions available for this selection.</p>
        <Button variant="secondary" onClick={onExit} className="mt-4">
          Return to Subjects
        </Button>
      </div>
    );
  }

  const currentUserAnswer = answers[currentQuestion.id];
  const isCurrentSubmitted = submittedQuestions.has(currentQuestion.id);
  const hasSelectedAnswer = currentUserAnswer !== undefined;

  const handleSelectChoice = (choiceIndex: number) => {
    if (isCurrentSubmitted) return;

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

  const handleCheckAnswer = () => {
    if (!hasSelectedAnswer) return;
    setSubmittedQuestions((prev) => new Set([...prev, currentQuestion.id]));
    if (onSubmitQuestion) {
      onSubmitQuestion(currentQuestion.id);
    }
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      setDirection('next');
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      if (onUpdateIndex) {
        onUpdateIndex(nextIdx);
      }
    } else {
      handleCompleteQuiz();
    }
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setDirection('prev');
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
      if (onUpdateIndex) {
        onUpdateIndex(prevIdx);
      }
    }
  };

  const handleCompleteQuiz = () => {
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
      if (ans) {
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
    const isPassed = scorePercentage >= 75; // PRC LET passing benchmark
    const timeSpentSeconds = Math.round((Date.now() - sessionStartTime) / 1000);

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
      sessionId: `session-${Date.now()}`,
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
  };

  return (
    <div className="space-y-3.5">
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
        isAnswerSubmitted={isCurrentSubmitted}
        isBookmarked={bookmarkedIds.includes(currentQuestion.id)}
        transitionDirection={direction}
        onSelectChoice={handleSelectChoice}
        onToggleBookmark={onToggleBookmark}
        mode={config.mode}
      />

      <div className="flex items-center justify-between gap-2.5 pt-1">
        <Button
          variant="outline"
          size="md"
          onClick={handlePrevious}
          disabled={isFirstQuestion}
          leftIcon={<ChevronLeft className="w-4 h-4" />}
        >
          Previous
        </Button>

        <div className="flex-1 flex justify-end">
          {!isCurrentSubmitted ? (
            <Button
              variant="primary"
              size="md"
              fullWidth
              disabled={!hasSelectedAnswer}
              onClick={handleCheckAnswer}
              leftIcon={<CheckCircle2 className="w-4 h-4" />}
            >
              Check Answer
            </Button>
          ) : (
            <Button
              variant={isLastQuestion ? 'success' : 'primary'}
              size="md"
              fullWidth
              onClick={handleNext}
              rightIcon={
                isLastQuestion ? (
                  <Award className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )
              }
            >
              {isLastQuestion ? 'Complete & View Results' : 'Next Item'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
