import React, { useState, useMemo } from 'react';
import { ALL_QUESTIONS } from '../data/questions';
import { Button } from '../components/ui/Button';
import { CategoryBadge, DifficultyBadge } from '../components/ui/Badge';
import {
  Bookmark,
  AlertTriangle,
  Play,
  Search,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  X,
} from 'lucide-react';
import type { QuizConfig } from '../types';

interface StudyBankPageProps {
  bookmarkedIds: string[];
  missedIds: string[];
  onToggleBookmark: (questionId: string) => void;
  onStartQuiz: (config: QuizConfig) => void;
}

export const StudyBankPage: React.FC<StudyBankPageProps> = ({
  bookmarkedIds,
  missedIds,
  onToggleBookmark,
  onStartQuiz,
}) => {
  const [activeTab, setActiveTab] = useState<'bookmarks' | 'missed'>('bookmarks');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Get question objects for bookmarks
  const bookmarkedQuestions = useMemo(() => {
    return ALL_QUESTIONS.filter((q) => bookmarkedIds.includes(q.id));
  }, [bookmarkedIds]);

  // Get question objects for missed questions
  const missedQuestions = useMemo(() => {
    return ALL_QUESTIONS.filter((q) => missedIds.includes(q.id));
  }, [missedIds]);

  const activeQuestions = activeTab === 'bookmarks' ? bookmarkedQuestions : missedQuestions;

  // Filter by search
  const filteredQuestions = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return activeQuestions;
    return activeQuestions.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.subjectName.toLowerCase().includes(q) ||
        item.topic.toLowerCase().includes(q) ||
        item.explanation.toLowerCase().includes(q)
    );
  }, [activeQuestions, searchQuery]);

  const handleStartDrill = () => {
    onStartQuiz({
      mode: 'practice',
      subjectIds: [],
      includeOnlyBookmarked: activeTab === 'bookmarks',
      includeOnlyIncorrect: activeTab === 'missed',
      questionCount: activeQuestions.length,
    });
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Page Title */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          Targeted Study Bank
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
          Review saved bookmarks and drill questions you missed in past sessions.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-slate-200/70 dark:bg-slate-900/80 rounded-xl">
        <button
          type="button"
          onClick={() => setActiveTab('bookmarks')}
          className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 tap-target ${
            activeTab === 'bookmarks'
              ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5 fill-current" />
          <span>Bookmarked ({bookmarkedIds.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('missed')}
          className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 tap-target ${
            activeTab === 'missed'
              ? 'bg-white dark:bg-slate-800 text-rose-600 dark:text-rose-400 shadow-sm font-bold'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Missed Items ({missedIds.length})</span>
        </button>
      </div>

      {/* Search and Drill CTA */}
      <div className="space-y-2.5">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            placeholder={`Search ${activeTab === 'bookmarks' ? 'bookmarked' : 'missed'} questions...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-11 pl-10 pr-9 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {activeQuestions.length > 0 && (
          <Button
            variant={activeTab === 'bookmarks' ? 'primary' : 'danger'}
            size="md"
            fullWidth
            leftIcon={<Play className="w-4 h-4 fill-current" />}
            onClick={handleStartDrill}
          >
            Practice All {activeTab === 'bookmarks' ? 'Bookmarked' : 'Missed'} Items ({activeQuestions.length})
          </Button>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-3 pt-1">
        {filteredQuestions.map((q) => {
          const isExpanded = expandedId === q.id;
          const isBookmarked = bookmarkedIds.includes(q.id);

          return (
            <div
              key={q.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm transition-all"
            >
              <div
                onClick={() => toggleExpand(q.id)}
                className="p-4 flex items-start justify-between gap-3 cursor-pointer select-none"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                    <CategoryBadge category={q.category} size="sm" />
                    <DifficultyBadge difficulty={q.difficulty} size="sm" />
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 truncate">
                      {q.subjectName}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white line-clamp-2">
                    {q.question}
                  </h4>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(q.id);
                    }}
                    title={isBookmarked ? 'Remove bookmark' : 'Bookmark item'}
                    className={`p-2 rounded-xl transition-colors ${
                      isBookmarked
                        ? 'bg-amber-100 dark:bg-amber-950 text-amber-600'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600'
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

              {isExpanded && (
                <div className="px-4 pb-4 pt-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-3 text-xs">
                  <div className="space-y-1.5">
                    <span className="font-bold text-slate-600 dark:text-slate-400 block mb-1">
                      Options:
                    </span>
                    {q.choices.map((choice, cIdx) => (
                      <div
                        key={cIdx}
                        className={`p-2.5 rounded-xl border flex items-center justify-between ${
                          cIdx === q.answer
                            ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 text-emerald-950 dark:text-emerald-100 font-semibold'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold">
                            {['A', 'B', 'C', 'D'][cIdx]}.
                          </span>
                          <span>{choice}</span>
                        </div>
                        {cIdx === q.answer && (
                          <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                            Correct
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-900/60 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-indigo-900 dark:text-indigo-200 block mb-0.5">
                      Pedagogical Rationale:
                    </strong>
                    {q.explanation}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredQuestions.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto">
            {activeTab === 'bookmarks' ? (
              <Bookmark className="w-6 h-6" />
            ) : (
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            )}
          </div>
          <h3 className="font-bold text-slate-800 dark:text-slate-200 text-base">
            {activeTab === 'bookmarks'
              ? 'No bookmarked questions yet'
              : 'No missed questions in bank!'}
          </h3>
          <p className="text-xs text-slate-500 max-w-xs mx-auto">
            {activeTab === 'bookmarks'
              ? 'Tap the bookmark icon during practice or exam sessions to save difficult questions here for targeted review.'
              : 'Great job! You haven’t missed any questions yet or they have all been remediated.'}
          </p>
        </div>
      )}
    </div>
  );
};
