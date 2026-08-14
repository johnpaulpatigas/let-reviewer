import React from 'react';
import { Bookmark, Check, X, BookOpen } from 'lucide-react';
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
  onStudyTopic?: (topic: string, subjectId: string) => void;
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
  onStudyTopic,
  mode = 'practice',
}) => {
  const selectedChoice = userAnswer?.selectedAnswer;
  const isRevealed = isAnswerSubmitted && mode !== 'exam';

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col space-y-3.5 animate-fade-in">
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2.5">
        <div className="flex flex-wrap items-center gap-1.5 min-w-0">
          <CategoryBadge category={question.category} size="sm" />
          <DifficultyBadge difficulty={question.difficulty} size="sm" />
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 truncate max-w-[160px] sm:max-w-[220px]">
            {question.subjectName}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs font-bold text-slate-700 dark:text-slate-300">
            {questionNumber} / {totalQuestions}
          </span>
          {onToggleBookmark && (
            <button
              type="button"
              onClick={() => onToggleBookmark(question.id)}
              aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark question'}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150 active:scale-90 tap-target ${
                isBookmarked
                  ? 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}
            >
              <Bookmark
                className={`w-4 h-4 transition-transform duration-150 ${isBookmarked ? 'fill-current scale-105' : ''}`}
              />
            </button>
          )}
        </div>
      </div>

      <div className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
        {question.topic}
      </div>

      <div className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-medium leading-relaxed">
        {question.question}
      </div>

      <div className="space-y-2 pt-0.5" role="radiogroup" aria-label="Question choices">
        {question.choices.map((choiceText, index) => {
          const isSelected = selectedChoice === index;
          const isCorrectAnswer = question.answer === index;

          let choiceStyle =
            'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 text-slate-800 dark:text-slate-200';
          let letterStyle =
            'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600';
          let statusLabel = null;

          if (isRevealed) {
            if (isCorrectAnswer) {
              choiceStyle =
                'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-semibold shadow-xs';
              letterStyle =
                'bg-emerald-600 text-white border-emerald-600';
              statusLabel = (
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 shrink-0 animate-reveal">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span className="hidden xs:inline">Correct</span>
                </div>
              );
            } else if (isSelected && !isCorrectAnswer) {
              choiceStyle =
                'bg-rose-50 dark:bg-rose-950/40 border-rose-400 text-rose-950 dark:text-rose-100';
              letterStyle =
                'bg-rose-600 text-white border-rose-600';
              statusLabel = (
                <div className="flex items-center gap-1 text-xs font-bold text-rose-700 dark:text-rose-300 shrink-0 animate-reveal">
                  <X className="w-4 h-4 stroke-[3]" />
                  <span className="hidden xs:inline">Your choice</span>
                </div>
              );
            } else {
              choiceStyle =
                'bg-slate-50/40 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 opacity-60';
              letterStyle =
                'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800';
            }
          } else if (isSelected) {
            choiceStyle =
              'bg-indigo-50/80 dark:bg-indigo-950/50 border-indigo-600 text-indigo-950 dark:text-indigo-100 font-semibold ring-1 ring-indigo-500';
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
              className={`w-full text-left p-3 sm:p-3.5 rounded-lg border transition-all duration-150 active:scale-[0.99] will-change-transform flex items-center justify-between gap-3 tap-target cursor-pointer disabled:cursor-default ${choiceStyle}`}
            >
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <span
                  className={`w-7 h-7 rounded-md border flex items-center justify-center font-bold text-xs shrink-0 transition-all duration-150 ${letterStyle}`}
                >
                  {CHOICE_LETTERS[index]}
                </span>
                <span className="text-xs sm:text-sm leading-snug break-words">
                  {choiceText}
                </span>
              </div>

              {statusLabel}
            </button>
          );
        })}
      </div>

      {isRevealed && (
        <div className="mt-2.5 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-bold text-xs">
              <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Pedagogical Rationale:</span>
            </div>
            {onStudyTopic && (
              <button
                type="button"
                onClick={() => onStudyTopic(question.topic, question.subjectId)}
                className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 tap-target"
              >
                <span>Study Guide →</span>
              </button>
            )}
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};
