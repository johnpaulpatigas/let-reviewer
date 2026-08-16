import React from 'react';
import { Bookmark, Check, X } from 'lucide-react';
import { CategoryBadge, DifficultyBadge } from '../ui/Badge';
import { FormattedText } from '../ui/FormattedText';
import type { Question, UserAnswer } from '../../types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  userAnswer?: UserAnswer;
  isAnswerSubmitted?: boolean;
  isBookmarked?: boolean;
  transitionDirection?: 'next' | 'prev';
  onSelectChoice: (choiceIndex: number) => void;
  onToggleBookmark?: (questionId: string) => void;
  mode?: 'practice' | 'exam' | 'topic_drill';
}

const CHOICE_LETTERS = ['A', 'B', 'C', 'D'];

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  userAnswer,
  isAnswerSubmitted = false,
  isBookmarked = false,
  transitionDirection,
  onSelectChoice,
  onToggleBookmark,
  mode = 'practice',
}) => {
  const selectedChoice = userAnswer?.selectedAnswer;
  const isRevealed = isAnswerSubmitted && mode !== 'exam';

  const animationClass =
    transitionDirection === 'next'
      ? 'animate-slide-left'
      : transitionDirection === 'prev'
      ? 'animate-slide-right'
      : 'animate-page-enter';

  return (
    <div className={`bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-lg p-4 sm:p-5 flex flex-col space-y-3 shadow-xs ${animationClass}`}>
      {/* Header Metadata */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-neutral-800 pb-2.5">
        <div className="flex flex-wrap items-center gap-1.5 min-w-0">
          <CategoryBadge category={question.category} size="sm" />
          <DifficultyBadge difficulty={question.difficulty} size="sm" />
          <span className="text-xs font-medium text-slate-500 dark:text-neutral-400 truncate max-w-[160px] sm:max-w-[240px]">
            {question.subjectName}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="px-2 py-0.5 bg-slate-100 dark:bg-neutral-800 rounded text-xs font-mono font-bold text-slate-700 dark:text-neutral-300">
            {questionNumber} / {totalQuestions}
          </span>
          {onToggleBookmark && (
            <button
              type="button"
              onClick={() => onToggleBookmark(question.id)}
              aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark question'}
              className={`w-7 h-7 rounded-md flex items-center justify-center transition-all duration-150 active:scale-90 tap-target cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400'
                  : 'bg-slate-100 dark:bg-neutral-800 text-slate-400 dark:text-neutral-400 hover:text-slate-700 dark:hover:text-neutral-200'
              }`}
            >
              <Bookmark
                className={`w-3.5 h-3.5 transition-transform duration-150 ${isBookmarked ? 'fill-current scale-110' : 'scale-100'}`}
              />
            </button>
          )}
        </div>
      </div>

      {/* Topic Subheading */}
      <div className="text-[11px] font-semibold text-slate-500 dark:text-neutral-400 uppercase tracking-wider">
        {question.topic}
      </div>

      {/* Question Text */}
      <FormattedText
        text={question.question}
        className="text-slate-900 dark:text-neutral-100 text-sm sm:text-base font-medium leading-relaxed"
      />

      {/* Choices List */}
      <div className="space-y-2 pt-1" role="radiogroup" aria-label="Question choices">
        {question.choices.map((choiceText, index) => {
          const isSelected = selectedChoice === index;
          const isCorrectAnswer = question.answer === index;

          let choiceStyle =
            'bg-slate-50/70 dark:bg-neutral-800/40 border-slate-200 dark:border-neutral-800 hover:border-slate-400 dark:hover:border-neutral-600 text-slate-800 dark:text-neutral-200';
          let letterStyle =
            'bg-white dark:bg-neutral-700 text-slate-700 dark:text-neutral-300 border-slate-300 dark:border-neutral-600';
          let statusLabel = null;

          if (isRevealed) {
            if (isCorrectAnswer) {
              choiceStyle =
                'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-600 text-emerald-950 dark:text-emerald-100 font-semibold';
              letterStyle =
                'bg-emerald-700 text-white border-emerald-700';
              statusLabel = (
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 shrink-0 animate-pop">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span className="hidden xs:inline">Correct</span>
                </div>
              );
            } else if (isSelected && !isCorrectAnswer) {
              choiceStyle =
                'bg-rose-50/80 dark:bg-rose-950/40 border-rose-600 text-rose-950 dark:text-rose-100';
              letterStyle =
                'bg-rose-700 text-white border-rose-700';
              statusLabel = (
                <div className="flex items-center gap-1 text-xs font-bold text-rose-700 dark:text-rose-300 shrink-0 animate-pop">
                  <X className="w-4 h-4 stroke-[3]" />
                  <span className="hidden xs:inline">Your choice</span>
                </div>
              );
            } else {
              choiceStyle =
                'bg-slate-50/40 dark:bg-neutral-900/30 border-slate-200 dark:border-neutral-800 text-slate-400 dark:text-neutral-500 opacity-60';
              letterStyle =
                'bg-slate-100 dark:bg-neutral-800 text-slate-400 dark:text-neutral-500 border-slate-200 dark:border-neutral-800';
            }
          } else if (isSelected) {
            choiceStyle =
              'bg-slate-100 dark:bg-neutral-800 border-slate-900 dark:border-white text-slate-900 dark:text-white font-semibold ring-1 ring-slate-900 dark:ring-white';
            letterStyle =
              'bg-slate-900 dark:bg-white text-white dark:text-neutral-900 border-slate-900 dark:border-white';
          }

          return (
            <button
              key={index}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={isRevealed}
              onClick={() => onSelectChoice(index)}
              className={`w-full text-left p-3 sm:p-3.5 rounded-md border transition-all duration-150 ease-out active:scale-[0.985] flex items-center justify-between gap-3 tap-target cursor-pointer disabled:cursor-default ${choiceStyle}`}
            >
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <span
                  className={`w-6 h-6 rounded border flex items-center justify-center font-bold text-xs shrink-0 font-mono transition-colors ${letterStyle}`}
                >
                  {CHOICE_LETTERS[index]}
                </span>
                <span className="text-xs sm:text-sm leading-snug break-words">
                  <FormattedText text={choiceText} inline />
                </span>
              </div>

              {statusLabel}
            </button>
          );
        })}
      </div>

      {/* Answer Rationale Section */}
      {isRevealed && (
        <div className="mt-3 p-3.5 rounded-lg bg-slate-50 dark:bg-neutral-800/60 border border-slate-200 dark:border-neutral-700 space-y-1.5 animate-expand">
          <div className="flex items-center justify-between gap-2">
            <span className="text-slate-900 dark:text-neutral-100 font-bold text-xs uppercase tracking-wider">
              Explanation & Rationale
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 font-mono">
              Correct: {CHOICE_LETTERS[question.answer]}
            </span>
          </div>
          <FormattedText
            text={question.explanation}
            className="text-xs sm:text-sm text-slate-700 dark:text-neutral-300 leading-relaxed"
          />
        </div>
      )}
    </div>
  );
};
