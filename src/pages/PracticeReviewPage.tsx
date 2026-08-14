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
  onToggleBookmark: (questionId: string) => void;
  onFinishSession: (result: QuizResult) => void;
  onExit: () => void;
}

export const PracticeReviewPage: React.FC<PracticeReviewPageProps> = ({
  config,
  questions,
  bookmarkedIds,
  onToggleBookmark,
  onFinishSession,
  onExit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, UserAnswer>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Set<string>>(new Set());
  const [startTime] = useState<number>(() => Date.now());

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const isFirstQuestion = currentIndex === 0;

  if (!currentQuestion) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">No questions available for this selection.</p>
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

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        questionId: currentQuestion.id,
        selectedAnswer: choiceIndex,
        isCorrect: choiceIndex === currentQuestion.answer,
      },
    }));
  };

  const handleCheckAnswer = () => {
    if (!hasSelectedAnswer) return;
    setSubmittedQuestions((prev) => new Set([...prev, currentQuestion.id]));
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      handleCompleteQuiz();
    }
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentIndex((prev) => prev - 1);
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
        question={currentQuestion}
        questionNumber={currentIndex + 1}
        totalQuestions={questions.length}
        userAnswer={currentUserAnswer}
        isAnswerSubmitted={isCurrentSubmitted}
        isBookmarked={bookmarkedIds.includes(currentQuestion.id)}
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
