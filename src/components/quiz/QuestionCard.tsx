import React from 'react';
import { Bookmark, Check, X, Lightbulb } from 'lucide-react';
import { CategoryBadge, DifficultyBadge } from '../ui/Badge';
import type { Question, UserAnswer } from '../../types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  userAnswer?: UserAnswer;
  isAnswerSubmitted?: boolean;
  isBookmarked?: boolean;
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
  onSelectChoice,
  onToggleBookmark,
  mode = 'practice',
}) => {
  const selectedChoice = userAnswer?.selectedAnswer;
  const isRevealed = isAnswerSubmitted && mode !== 'exam';

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col space-y-4">
      {/* Top Header Row: Subject, Topic, Question Counter & Bookmark */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <CategoryBadge category={question.category} size="sm" />
          <DifficultyBadge difficulty={question.difficulty} size="sm" />
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 truncate max-w-[150px] sm:max-w-[200px]">
            {question.subjectName}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-bold text-slate-700 dark:text-slate-300">
            {questionNumber} / {totalQuestions}
          </span>
          {onToggleBookmark && (
            <button
              type="button"
              onClick={() => onToggleBookmark(question.id)}
              aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark question'}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors tap-target ${
                isBookmarked
                  ? 'bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}
            >
              <Bookmark
                className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`}
              />
            </button>
          )}
        </div>
      </div>

      {/* Topic Tag */}
      <div className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
        {question.topic}
      </div>

      {/* Main Question Text */}
      <div className="text-slate-900 dark:text-slate-50 text-base sm:text-lg font-medium leading-relaxed">
        {question.question}
      </div>

      {/* Choices Options List */}
      <div className="space-y-2.5 pt-1" role="radiogroup" aria-label="Question choices">
        {question.choices.map((choiceText, index) => {
          const isSelected = selectedChoice === index;
          const isCorrectAnswer = question.answer === index;

          let choiceStyle =
            'bg-slate-50/80 dark:bg-slate-800/60 border-slate-200 dark:border-slate-800 hover:border-indigo-400 text-slate-800 dark:text-slate-200';
          let letterStyle =
            'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600';
          let statusIcon = null;

          if (isRevealed) {
            if (isCorrectAnswer) {
              choiceStyle =
                'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-semibold ring-1 ring-emerald-500';
              letterStyle =
                'bg-emerald-600 text-white border-emerald-600';
              statusIcon = (
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span className="hidden xs:inline">Correct</span>
                </div>
              );
            } else if (isSelected && !isCorrectAnswer) {
              choiceStyle =
                'bg-rose-50 dark:bg-rose-950/50 border-rose-500 text-rose-950 dark:text-rose-100 ring-1 ring-rose-500';
              letterStyle =
                'bg-rose-600 text-white border-rose-600';
              statusIcon = (
                <div className="flex items-center gap-1 text-xs font-bold text-rose-700 dark:text-rose-300 shrink-0">
                  <X className="w-4 h-4 stroke-[3]" />
                  <span className="hidden xs:inline">Your Answer</span>
                </div>
              );
            } else {
              choiceStyle =
                'bg-slate-50/50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 opacity-60';
              letterStyle =
                'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800';
            }
          } else if (isSelected) {
            choiceStyle =
              'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-600 dark:border-indigo-500 text-indigo-950 dark:text-indigo-100 font-semibold ring-2 ring-indigo-500/30';
            letterStyle =
              'bg-indigo-600 text-white border-indigo-600';
          }

          return (
            <button
              key={index}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={isRevealed}
              onClick={() => onSelectChoice(index)}
              className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 tap-target cursor-pointer disabled:cursor-default ${choiceStyle}`}
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span
                  className={`w-8 h-8 rounded-xl border flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-colors ${letterStyle}`}
                >
                  {CHOICE_LETTERS[index]}
                </span>
                <span className="text-xs sm:text-sm leading-snug break-words">
                  {choiceText}
                </span>
              </div>

              {statusIcon}
            </button>
          );
        })}
      </div>

      {/* Answer Rationale / Explanation Box (Visible when revealed in practice mode) */}
      {isRevealed && (
        <div className="mt-4 p-4 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 animate-fadeIn">
          <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-300 font-bold text-xs sm:text-sm mb-1.5">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>Rationale & LET Concept:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};
