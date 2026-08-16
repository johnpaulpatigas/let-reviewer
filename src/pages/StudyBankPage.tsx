import React, { useState, useMemo } from 'react';
import { ALL_QUESTIONS } from '../data/questions';
import { CategoryBadge, DifficultyBadge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import {
  Bookmark,
  AlertTriangle,
  Play,
  Trash2,
  ChevronDown,
  Search,
  X,
  BookOpen,
} from 'lucide-react';
import type { Question, QuizConfig } from '../types';

interface StudyBankPageProps {
  bookmarkedIds: string[];
  missedIds: string[];
  onToggleBookmark: (questionId: string) => void;
  onClearMissed: () => void;
  onStartQuiz: (config: QuizConfig) => void;
  onStudyTopic?: (topic: string, subjectId: string) => void;
}

export const StudyBankPage: React.FC<StudyBankPageProps> = ({
  bookmarkedIds,
  missedIds,
  onToggleBookmark,
  onClearMissed,
  onStartQuiz,
  onStudyTopic,
}) => {
  const [activeTab, setActiveTab] = useState<'bookmarks' | 'missed'>('bookmarks');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const questionsMap = useMemo(() => {
    const map = new Map<string, Question>();
    ALL_QUESTIONS.forEach((q) => map.set(q.id, q));
    return map;
  }, []);

  const bookmarkedQuestions = useMemo(() => {
    return bookmarkedIds
      .map((id) => questionsMap.get(id))
      .filter((q): q is Question => q !== undefined);
  }, [bookmarkedIds, questionsMap]);

  const missedQuestions = useMemo(() => {
    return missedIds
      .map((id) => questionsMap.get(id))
      .filter((q): q is Question => q !== undefined);
  }, [missedIds, questionsMap]);

  const activeQuestions = activeTab === 'bookmarks' ? bookmarkedQuestions : missedQuestions;

  const filteredQuestions = useMemo(() => {
    if (!searchQuery.trim()) return activeQuestions;
    const q = searchQuery.toLowerCase();
    return activeQuestions.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.topic.toLowerCase().includes(q) ||
        item.subjectName.toLowerCase().includes(q)
    );
  }, [activeQuestions, searchQuery]);

  const handleStartDrill = () => {
    if (activeQuestions.length === 0) return;
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
    <div className="space-y-4 animate-page-enter">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Targeted Remediation Bank
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
          Review saved bookmarks and drill items missed in past sessions.
        </p>
      </div>

      <div className="flex gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-md">
        <button
          type="button"
          onClick={() => setActiveTab('bookmarks')}
          className={`flex-1 py-1.5 px-3 text-xs font-medium rounded transition-colors flex items-center justify-center gap-1.5 tap-target cursor-pointer ${
            activeTab === 'bookmarks'
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5 fill-current" />
          <span>Bookmarked ({bookmarkedIds.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('missed')}
          className={`flex-1 py-1.5 px-3 text-xs font-medium rounded transition-colors flex items-center justify-center gap-1.5 tap-target cursor-pointer ${
            activeTab === 'missed'
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold'
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
            className="w-full h-9 pl-9 pr-9 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {activeQuestions.length > 0 && (
          <Button
            variant="primary"
            size="md"
            fullWidth
            leftIcon={<Play className="w-4 h-4 fill-current" />}
            onClick={handleStartDrill}
          >
            Practice All {activeTab === 'bookmarks' ? 'Bookmarked' : 'Missed'} Items ({activeQuestions.length})
          </Button>
        )}
      </div>

      {activeTab === 'missed' && missedIds.length > 0 && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClearMissed}
            className="text-xs text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Trash2 className="w-3 h-3" />
            <span>Clear Missed Items Log</span>
          </button>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-2.5">
        {filteredQuestions.map((q, idx) => {
          const isExpanded = expandedId === q.id;

          return (
            <div
              key={q.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3.5 space-y-2.5"
            >
              <div
                onClick={() => toggleExpand(q.id)}
                className="flex items-start justify-between gap-2.5 cursor-pointer select-none"
              >
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                      #{idx + 1}
                    </span>
                    <CategoryBadge category={q.category} size="sm" />
                    <DifficultyBadge difficulty={q.difficulty} size="sm" />
                    <span className="text-[11px] font-semibold text-slate-500 truncate">
                      {q.subjectName}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white leading-relaxed">
                    {q.question}
                  </p>
                </div>

                <div className="flex items-center gap-1 shrink-0 pt-0.5">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(q.id);
                    }}
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

                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>

              {isExpanded && (
                <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs animate-expand">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      Choices & Key:
                    </span>
                    {q.choices.map((choice, cIdx) => (
                      <div
                        key={cIdx}
                        className={`p-2 rounded border flex items-center justify-between gap-2 ${
                          cIdx === q.answer
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-semibold'
                            : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="flex-1">
                          <strong className="font-mono">{String.fromCharCode(65 + cIdx)}.</strong> {choice}
                        </span>
                        {cIdx === q.answer && (
                          <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 uppercase shrink-0">
                            Correct Answer
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px]">
                        Pedagogical Rationale
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

      {filteredQuestions.length === 0 && (
        <div className="text-center py-10 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-5 space-y-1.5">
          <p className="text-xs text-slate-500">
            {activeTab === 'bookmarks'
              ? 'No bookmarked questions found. You can bookmark any question during practice to save it for targeted review.'
              : 'No missed questions recorded yet. Any incorrectly answered questions during practice will appear here.'}
          </p>
        </div>
      )}
    </div>
  );
};
