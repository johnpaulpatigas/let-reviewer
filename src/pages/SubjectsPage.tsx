import React, { useState, useMemo, useEffect } from 'react';
import { SUBJECTS } from '../data/subjects';
import { getQuestionsBySubject } from '../data/questions';
import { getStudyMaterialsBySubject } from '../data/study-materials';
import { SubjectCard } from '../components/study/SubjectCard';
import { Pagination } from '../components/ui/Pagination';
import { Search, X, Play, BookOpen, Layers, Clock, ArrowRight, ChevronLeft } from 'lucide-react';
import { IconHelper } from '../components/ui/IconHelper';
import { CategoryBadge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import type { Subject, SubjectCategory, QuizConfig, StudyMaterial } from '../types';

interface SubjectsPageProps {
  onStartQuiz: (config: QuizConfig) => void;
  onOpenMaterial?: (material: StudyMaterial) => void;
  subjectMastery?: Record<string, { answered: number; correct: number }>;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

const SUBJECTS_PER_PAGE = 6;

export const SubjectsPage: React.FC<SubjectsPageProps> = ({
  onStartQuiz,
  onOpenMaterial,
  subjectMastery = {},
  currentPage: controlledPage,
  onPageChange: controlledOnPageChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | SubjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubjectDetails, setActiveSubjectDetails] = useState<Subject | null>(null);
  const [internalPage, setInternalPage] = useState(1);

  const currentPage = controlledPage !== undefined ? controlledPage : internalPage;
  const setPage = (page: number) => {
    if (controlledOnPageChange) {
      controlledOnPageChange(page);
    } else {
      setInternalPage(page);
    }
  };

  const subjectQuestionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    SUBJECTS.forEach((sub) => {
      counts[sub.id] = getQuestionsBySubject(sub.id).length;
    });
    return counts;
  }, []);

  const subjectGuideCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    SUBJECTS.forEach((sub) => {
      counts[sub.id] = getStudyMaterialsBySubject(sub.id).length;
    });
    return counts;
  }, []);

  const filteredSubjects = useMemo(() => {
    return SUBJECTS.filter((sub) => {
      const matchesCategory =
        selectedCategory === 'all' || sub.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        sub.name.toLowerCase().includes(q) ||
        sub.description.toLowerCase().includes(q) ||
        sub.topics.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredSubjects.length / SUBJECTS_PER_PAGE));
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const paginatedSubjects = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * SUBJECTS_PER_PAGE;
    return filteredSubjects.slice(startIndex, startIndex + SUBJECTS_PER_PAGE);
  }, [filteredSubjects, safeCurrentPage]);

  const handleCategorySelect = (cat: 'all' | SubjectCategory) => {
    setSelectedCategory(cat);
    setPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setPage(1);
  };

  // Reset scroll when switching between directory and subject hub view
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeSubjectDetails]);

  const handlePageSelect = (page: number) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSubject = (subject: Subject) => {
    setActiveSubjectDetails(subject);
  };

  const handleBackToDirectory = () => {
    setActiveSubjectDetails(null);
  };

  const activeGuides = useMemo(() => {
    if (!activeSubjectDetails) return [];
    return getStudyMaterialsBySubject(activeSubjectDetails.id);
  }, [activeSubjectDetails]);

  const handleStartSubjectPractice = (subject: Subject) => {
    onStartQuiz({
      mode: 'practice',
      subjectIds: [subject.id],
      questionCount: subjectQuestionCounts[subject.id] || 15,
    });
  };

  const handleSelectMaterial = (material: StudyMaterial) => {
    if (onOpenMaterial) {
      onOpenMaterial(material);
    }
  };

  // Dedicated Subject Hub View
  if (activeSubjectDetails) {
    const stats = subjectMastery[activeSubjectDetails.id];
    const mastery =
      stats && stats.answered > 0
        ? Math.round((stats.correct / stats.answered) * 100)
        : 0;

    return (
      <div className="space-y-4 animate-page-enter">
        {/* Hub Back Navigation */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleBackToDirectory}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:underline tap-target py-1 -ml-1 cursor-pointer group"
          >
            <ChevronLeft className="w-4 h-4 transition-transform duration-150 group-hover:-translate-x-0.5" />
            <span>Back to Subjects</span>
          </button>

          <CategoryBadge category={activeSubjectDetails.category} size="sm" />
        </div>

        {/* Subject Identity & Overview Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 sm:p-5 space-y-3.5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-md flex items-center justify-center ${activeSubjectDetails.colorScheme.bg} ${activeSubjectDetails.colorScheme.text} border ${activeSubjectDetails.colorScheme.border} shrink-0`}
              >
                <IconHelper name={activeSubjectDetails.iconName} className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                  {activeSubjectDetails.name}
                </h2>
                <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                  <span className="font-medium font-mono">{subjectQuestionCounts[activeSubjectDetails.id] || 0}</span> Questions
                  <span>•</span>
                  <span className="font-medium font-mono">{activeGuides.length}</span> Study Guides
                </div>
              </div>
            </div>

            {mastery > 0 ? (
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/60 rounded shrink-0">
                {mastery}% Mastery
              </span>
            ) : null}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {activeSubjectDetails.description}
          </p>

          {/* Primary Action Button */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <Button
              variant="primary"
              fullWidth
              onClick={() => handleStartSubjectPractice(activeSubjectDetails)}
              leftIcon={<Play className="w-4 h-4 fill-current" />}
            >
              Practice Subject ({subjectQuestionCounts[activeSubjectDetails.id] || 0} Questions)
            </Button>
          </div>
        </div>

        {/* Subject Study Guides Section */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
              <span>Study Guides & Notes ({activeGuides.length})</span>
            </h3>
          </div>

          {activeGuides.length > 0 ? (
            <div className="space-y-2">
              {activeGuides.map((guide) => (
                <div
                  key={guide.id}
                  onClick={() => handleSelectMaterial(guide)}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 rounded-lg p-3.5 sm:p-4 transition-all duration-150 active:scale-[0.99] cursor-pointer group flex items-center justify-between gap-3"
                >
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                      {guide.topic}
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors line-clamp-1">
                      {guide.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {guide.readTimeMinutes} mins read
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors shrink-0">
                    <span className="text-xs font-semibold hidden xs:inline">Read</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">
              No study guides available for this subject yet.
            </div>
          )}
        </div>

        {/* Core Competencies & Topics Tested */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Core Competencies & Topics Tested
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {activeSubjectDetails.topics.map((topicName, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-md"
              >
                {topicName}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Primary Subjects Directory View
  return (
    <div className="space-y-4 animate-page-enter">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Subject Directory
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
          Explore board exam subjects, core curriculum competencies, and corresponding practice pools.
        </p>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="search"
          placeholder="Search subjects or competencies..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full h-9 pl-9 pr-9 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => handleSearchChange('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <div className="flex gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-md">
        <button
          type="button"
          onClick={() => handleCategorySelect('all')}
          className={`flex-1 py-1.5 px-3 text-xs font-medium rounded transition-colors tap-target cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          All ({SUBJECTS.length})
        </button>
        <button
          type="button"
          onClick={() => handleCategorySelect('gen_ed')}
          className={`flex-1 py-1.5 px-3 text-xs font-medium rounded transition-colors tap-target cursor-pointer ${
            selectedCategory === 'gen_ed'
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          GenEd (6)
        </button>
        <button
          type="button"
          onClick={() => handleCategorySelect('prof_ed')}
          className={`flex-1 py-1.5 px-3 text-xs font-medium rounded transition-colors tap-target cursor-pointer ${
            selectedCategory === 'prof_ed'
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          ProfEd (7)
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {paginatedSubjects.map((subject) => {
          const stats = subjectMastery[subject.id];
          const mastery =
            stats && stats.answered > 0
              ? Math.round((stats.correct / stats.answered) * 100)
              : 0;

          return (
            <SubjectCard
              key={subject.id}
              subject={subject}
              questionCount={subjectQuestionCounts[subject.id] || 0}
              guideCount={subjectGuideCounts[subject.id] || 0}
              masteryPercentage={mastery}
              onSelect={handleSelectSubject}
            />
          );
        })}
      </div>

      {/* Pagination Controls */}
      {filteredSubjects.length > 0 && totalPages > 1 && (
        <Pagination
          currentPage={safeCurrentPage}
          totalPages={totalPages}
          onPageChange={handlePageSelect}
          totalItems={filteredSubjects.length}
          itemsPerPage={SUBJECTS_PER_PAGE}
          itemLabel="subjects"
        />
      )}

      {filteredSubjects.length === 0 && (
        <div className="text-center py-10 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6">
          <Layers className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">No subjects found</h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Try adjusting your search terms or clearing the category filter.
          </p>
          <Button
            variant="secondary"
            size="sm"
            className="mt-3"
            onClick={() => {
              handleCategorySelect('all');
              handleSearchChange('');
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
};
