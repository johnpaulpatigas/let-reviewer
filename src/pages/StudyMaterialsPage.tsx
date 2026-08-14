import React, { useState, useMemo } from 'react';
import { ALL_STUDY_MATERIALS, getQuestionsForStudyMaterial } from '../data/study-materials';
import { ALL_QUESTIONS } from '../data/questions';
import { SUBJECTS } from '../data/subjects';
import { CategoryBadge } from '../components/ui/Badge';
import { Pagination } from '../components/ui/Pagination';
import {
  Search,
  BookOpen,
  Clock,
  CheckCircle2,
  Bookmark,
  ChevronRight,
  X,
} from 'lucide-react';
import type { StudyMaterial, SubjectCategory } from '../types';

interface StudyMaterialsPageProps {
  onOpenMaterial: (material: StudyMaterial) => void;
  bookmarkedMaterialIds?: string[];
  completedMaterialIds?: string[];
  onToggleMaterialBookmark: (materialId: string) => void;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

const GUIDES_PER_PAGE = 8;

export const StudyMaterialsPage: React.FC<StudyMaterialsPageProps> = ({
  onOpenMaterial,
  bookmarkedMaterialIds = [],
  completedMaterialIds = [],
  onToggleMaterialBookmark,
  currentPage: controlledPage,
  onPageChange: controlledOnPageChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | SubjectCategory | 'bookmarked'>('all');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [internalPage, setInternalPage] = useState(1);

  const currentPage = controlledPage !== undefined ? controlledPage : internalPage;
  const setPage = (page: number) => {
    if (controlledOnPageChange) {
      controlledOnPageChange(page);
    } else {
      setInternalPage(page);
    }
  };

  // Dynamically compute the question count for each study material directly from the question bank
  const questionCountMap = useMemo(() => {
    const map: Record<string, number> = {};
    ALL_STUDY_MATERIALS.forEach((material) => {
      map[material.id] = getQuestionsForStudyMaterial(material, ALL_QUESTIONS).length;
    });
    return map;
  }, []);

  const filteredMaterials = useMemo(() => {
    return ALL_STUDY_MATERIALS.filter((material) => {
      // Category / Bookmark filter
      if (selectedCategory === 'bookmarked') {
        if (!bookmarkedMaterialIds.includes(material.id)) return false;
      } else if (selectedCategory !== 'all' && material.category !== selectedCategory) {
        return false;
      }

      // Subject filter
      if (selectedSubjectId !== 'all' && material.subjectId !== selectedSubjectId) {
        return false;
      }

      // Search query across title, description, topic, subjectName, and key terms
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;

      return (
        material.title.toLowerCase().includes(q) ||
        material.description.toLowerCase().includes(q) ||
        material.topic.toLowerCase().includes(q) ||
        material.subjectName.toLowerCase().includes(q) ||
        material.keyTerms?.some((kt) => kt.term.toLowerCase().includes(q) || kt.definition.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, selectedSubjectId, searchQuery, bookmarkedMaterialIds]);

  // Total pages derived directly from filtered collection
  const totalPages = Math.max(1, Math.ceil(filteredMaterials.length / GUIDES_PER_PAGE));
  // Safe clamped current page to prevent being stranded on non-existent pages after filtering
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  // Paginated subset of materials for current page
  const paginatedMaterials = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * GUIDES_PER_PAGE;
    return filteredMaterials.slice(startIndex, startIndex + GUIDES_PER_PAGE);
  }, [filteredMaterials, safeCurrentPage]);

  const handleCategorySelect = (category: 'all' | SubjectCategory | 'bookmarked') => {
    setSelectedCategory(category);
    setSelectedSubjectId('all');
    setPage(1);
  };

  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubjectId(subjectId);
    setPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setPage(1);
  };

  const handlePageSelect = (page: number) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const completedCount = completedMaterialIds.length;
  const totalCount = ALL_STUDY_MATERIALS.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          LET Study Guides & Notes
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Structured review guides, high-yield summaries, and pedagogical rationales.
        </p>
      </div>

      {/* Reading Progress Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
              Study Guide Coverage
            </h3>
            <p className="text-[11px] text-slate-500">
              {completedCount} of {totalCount} guides read ({progressPercent}%)
            </p>
          </div>
        </div>

        <div className="w-20 sm:w-28">
          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
            <div
              className="bg-emerald-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="search"
          placeholder="Search study guides, Piaget, Bloom, Laws..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full h-10 pl-9 pr-9 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => handleSearchChange('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg overflow-x-auto">
        <button
          type="button"
          onClick={() => handleCategorySelect('all')}
          className={`flex-1 min-w-[70px] py-1.5 px-2.5 text-xs font-semibold rounded transition-colors tap-target ${
            selectedCategory === 'all'
              ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          All ({totalCount})
        </button>
        <button
          type="button"
          onClick={() => handleCategorySelect('gen_ed')}
          className={`flex-1 min-w-[70px] py-1.5 px-2.5 text-xs font-semibold rounded transition-colors tap-target ${
            selectedCategory === 'gen_ed'
              ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm font-bold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          GenEd
        </button>
        <button
          type="button"
          onClick={() => handleCategorySelect('prof_ed')}
          className={`flex-1 min-w-[70px] py-1.5 px-2.5 text-xs font-semibold rounded transition-colors tap-target ${
            selectedCategory === 'prof_ed'
              ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          ProfEd
        </button>
        <button
          type="button"
          onClick={() => handleCategorySelect('bookmarked')}
          className={`flex-1 min-w-[70px] py-1.5 px-2.5 text-xs font-semibold rounded transition-colors tap-target ${
            selectedCategory === 'bookmarked'
              ? 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-sm font-bold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          Saved ({bookmarkedMaterialIds.length})
        </button>
      </div>

      {/* Subject Filter Pills (Visible when category selected) */}
      {selectedCategory !== 'bookmarked' && (
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button
            type="button"
            onClick={() => handleSubjectSelect('all')}
            className={`px-2.5 py-1 rounded-md border text-[11px] font-medium whitespace-nowrap transition-colors ${
              selectedSubjectId === 'all'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent font-bold'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800'
            }`}
          >
            All Subjects
          </button>
          {SUBJECTS.filter(
            (s) => selectedCategory === 'all' || s.category === selectedCategory
          ).map((sub) => (
            <button
              key={sub.id}
              type="button"
              onClick={() => handleSubjectSelect(sub.id)}
              className={`px-2.5 py-1 rounded-md border text-[11px] font-medium whitespace-nowrap transition-colors ${
                selectedSubjectId === sub.id
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent font-bold'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800'
              }`}
            >
              {sub.name}
            </button>
          ))}
        </div>
      )}

      {/* Materials List */}
      <div className="space-y-2.5">
        {paginatedMaterials.map((material) => {
          const isCompleted = completedMaterialIds.includes(material.id);
          const isBookmarked = bookmarkedMaterialIds.includes(material.id);
          const qCount = questionCountMap[material.id] ?? 0;

          return (
            <div
              key={material.id}
              onClick={() => onOpenMaterial(material)}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-xl p-4 transition-colors cursor-pointer group flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="flex flex-wrap items-center gap-1.5 min-w-0">
                    <CategoryBadge category={material.category} size="sm" />
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 truncate max-w-[150px] sm:max-w-[220px]">
                      {material.subjectName}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    {isCompleted && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Read</span>
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleMaterialBookmark(material.id);
                      }}
                      className={`p-1.5 rounded transition-colors ${
                        isBookmarked
                          ? 'text-amber-500 bg-amber-50 dark:bg-amber-950'
                          : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {material.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                  {material.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5 text-slate-500 text-[11px]">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {material.readTimeMinutes} mins read
                  </span>
                  <span>•</span>
                  <span>{qCount > 0 ? `${qCount} practice Qs` : 'No questions yet'}</span>
                </div>

                <div className="flex items-center gap-1 text-slate-400 group-hover:text-indigo-600 transition-colors">
                  <span className="text-[11px] font-semibold group-hover:underline">Read</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      {filteredMaterials.length > 0 && totalPages > 1 && (
        <Pagination
          currentPage={safeCurrentPage}
          totalPages={totalPages}
          onPageChange={handlePageSelect}
          totalItems={filteredMaterials.length}
          itemsPerPage={GUIDES_PER_PAGE}
          itemLabel="guides"
        />
      )}

      {/* Empty Search / Filter State */}
      {filteredMaterials.length === 0 && (
        <div className="text-center py-10 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 space-y-2">
          <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">
            No study guides found
          </h3>
          <p className="text-xs text-slate-500 max-w-xs mx-auto">
            {selectedCategory === 'bookmarked'
              ? 'You haven’t bookmarked any study guides yet. Tap the bookmark icon on any guide to save it here.'
              : 'Try clearing your search terms or selecting a different category filter.'}
          </p>
        </div>
      )}
    </div>
  );
};
