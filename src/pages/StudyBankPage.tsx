import { useState, useMemo } from 'react';
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
  BookOpen,
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

  const bookmarkedQuestions = useMemo(() => {
    return ALL_QUESTIONS.filter((q) => bookmarkedIds.includes(q.id));
  }, [bookmarkedIds]);

  const missedQuestions = useMemo(() => {
    return ALL_QUESTIONS.filter((q) => missedIds.includes(q.id));
  }, [missedIds]);

  const activeQuestions = activeTab === 'bookmarks' ? bookmarkedQuestions : missedQuestions;

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
    <div className="space-y-4">
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          Targeted Study Bank
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Review saved bookmarks and drill items missed in past sessions.
        </p>
      </div>

      <div className="flex gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg">
        <button
          type="button"
          onClick={() => setActiveTab('bookmarks')}
          className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded transition-colors flex items-center justify-center gap-1.5 tap-target ${
            activeTab === 'bookmarks'
              ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5 fill-current" />
          <span>Bookmarked ({bookmarkedIds.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('missed')}
          className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded transition-colors flex items-center justify-center gap-1.5 tap-target ${
            activeTab === 'missed'
              ? 'bg-white dark:bg-slate-800 text-rose-600 dark:text-rose-400 shadow-sm font-bold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Missed Items ({missedIds.length})</span>
        </button>
      </div>

      <div className="space-y-2">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            placeholder={`Search ${activeTab === 'bookmarks' ? 'bookmarked' : 'missed'} questions...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-9 pr-9 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
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

      <div className="space-y-2.5 pt-0.5">
        {filteredQuestions.map((q) => {
          const isExpanded = expandedId === q.id;
          const isBookmarked = bookmarkedIds.includes(q.id);

          return (
            <div
              key={q.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden transition-colors"
            >
              <div
                onClick={() => toggleExpand(q.id)}
                className="p-3.5 flex items-start justify-between gap-3 cursor-pointer select-none"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 mb-1">
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
                    className={`p-1.5 rounded transition-colors ${
                      isBookmarked
                        ? 'bg-amber-50 dark:bg-amber-950 text-amber-600'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600'
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
                <div className="px-3.5 pb-3.5 pt-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/20 space-y-2.5 text-xs">
                  <div className="space-y-1.5">
                    <span className="font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                      Options:
                    </span>
                    {q.choices.map((choice, cIdx) => (
                      <div
                        key={cIdx}
                        className={`p-2.5 rounded border flex items-center justify-between ${
                          cIdx === q.answer
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 text-emerald-950 dark:text-emerald-100 font-semibold'
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

                  <div className="p-3 rounded bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-slate-100 mb-1">
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
      </div>

      {filteredQuestions.length === 0 && (
        <div className="text-center py-10 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center mx-auto">
            {activeTab === 'bookmarks' ? (
              <Bookmark className="w-5 h-5" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            )}
          </div>
          <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">
            {activeTab === 'bookmarks'
              ? 'No bookmarked questions yet'
              : 'No missed questions in bank'}
          </h3>
          <p className="text-xs text-slate-500 max-w-xs mx-auto">
            {activeTab === 'bookmarks'
              ? 'Tap the bookmark icon during practice or mock exam sessions to save questions here for review.'
              : 'Great job! You have no missed items waiting for remediation.'}
          </p>
        </div>
      )}
    </div>
  );
};
