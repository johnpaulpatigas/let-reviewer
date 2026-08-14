import React, { useState, useMemo } from 'react';
import { SUBJECTS } from '../data/subjects';
import { getQuestionsBySubject } from '../data/questions';
import { getStudyMaterialsBySubject } from '../data/study-materials';
import { SubjectCard } from '../components/study/SubjectCard';
import { Search, X, Play, BookOpen, Layers, Clock, ArrowRight } from 'lucide-react';
import { IconHelper } from '../components/ui/IconHelper';
import { CategoryBadge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import type { Subject, SubjectCategory, QuizConfig, StudyMaterial } from '../types';

interface SubjectsPageProps {
  onStartQuiz: (config: QuizConfig) => void;
  onOpenMaterial?: (material: StudyMaterial) => void;
  subjectMastery?: Record<string, { answered: number; correct: number }>;
}

export const SubjectsPage: React.FC<SubjectsPageProps> = ({
  onStartQuiz,
  onOpenMaterial,
  subjectMastery = {},
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | SubjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubjectDetails, setActiveSubjectDetails] = useState<Subject | null>(null);

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

  const activeGuides = useMemo(() => {
    if (!activeSubjectDetails) return [];
    return getStudyMaterialsBySubject(activeSubjectDetails.id);
  }, [activeSubjectDetails]);

  const handleStartSubjectPractice = (subject: Subject) => {
    setActiveSubjectDetails(null);
    onStartQuiz({
      mode: 'practice',
      subjectIds: [subject.id],
      questionCount: subjectQuestionCounts[subject.id] || 15,
    });
  };

  const handleSelectMaterial = (material: StudyMaterial) => {
    setActiveSubjectDetails(null);
    if (onOpenMaterial) {
      onOpenMaterial(material);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          Subject Directory
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Browse by subject domain to access structured guides and question pools.
        </p>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="search"
          placeholder="Search subjects or competencies..."
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

      <div className="flex gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg">
        <button
          type="button"
          onClick={() => setSelectedCategory('all')}
          className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded transition-colors tap-target ${
            selectedCategory === 'all'
              ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          All ({SUBJECTS.length})
        </button>
        <button
          type="button"
          onClick={() => setSelectedCategory('gen_ed')}
          className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded transition-colors tap-target ${
            selectedCategory === 'gen_ed'
              ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm font-bold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          GenEd (6)
        </button>
        <button
          type="button"
          onClick={() => setSelectedCategory('prof_ed')}
          className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded transition-colors tap-target ${
            selectedCategory === 'prof_ed'
              ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          ProfEd (7)
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filteredSubjects.map((subject) => {
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
              onSelect={(sub) => setActiveSubjectDetails(sub)}
            />
          );
        })}
      </div>

      {filteredSubjects.length === 0 && (
        <div className="text-center py-10 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
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
              setSelectedCategory('all');
              setSearchQuery('');
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}

      {/* Subject Detail & Organization Modal */}
      {activeSubjectDetails && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn">
          <div
            className="bg-white dark:bg-slate-900 w-full sm:max-w-lg rounded-t-2xl sm:rounded-xl p-5 shadow-2xl max-h-[88vh] overflow-y-auto space-y-4"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${activeSubjectDetails.colorScheme.bg} ${activeSubjectDetails.colorScheme.text} border ${activeSubjectDetails.colorScheme.border}`}
                >
                  <IconHelper name={activeSubjectDetails.iconName} className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <CategoryBadge category={activeSubjectDetails.category} size="sm" />
                    {subjectMastery[activeSubjectDetails.id]?.answered ? (
                      <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                        {Math.round(
                          (subjectMastery[activeSubjectDetails.id].correct /
                            subjectMastery[activeSubjectDetails.id].answered) *
                            100
                        )}
                        % Mastery
                      </span>
                    ) : null}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mt-0.5">
                    {activeSubjectDetails.name}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveSubjectDetails(null)}
                className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {activeSubjectDetails.description}
            </p>

            {/* Study Guides for this Subject */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Subject Study Guides</span>
                </span>
                <span className="text-[11px] text-slate-500">
                  {activeGuides.length} {activeGuides.length === 1 ? 'guide' : 'guides'}
                </span>
              </div>

              {activeGuides.length > 0 ? (
                <div className="space-y-2">
                  {activeGuides.map((guide) => (
                    <div
                      key={guide.id}
                      onClick={() => handleSelectMaterial(guide)}
                      className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 bg-slate-50/60 dark:bg-slate-800/40 cursor-pointer flex items-center justify-between gap-3 group transition-colors"
                    >
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 truncate">
                          {guide.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-0.5">
                          <span className="inline-flex items-center gap-0.5">
                            <Clock className="w-2.5 h-2.5" />
                            {guide.readTimeMinutes} mins
                          </span>
                          <span>•</span>
                          <span className="truncate">{guide.topic}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic p-2 bg-slate-50 dark:bg-slate-850 rounded">
                  No study guides currently published for this subject.
                </p>
              )}
            </div>

            {/* Core Competencies List */}
            <div className="space-y-1.5 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block">
                Topics & Competencies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeSubjectDetails.topics.map((topic, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Action Footer */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex gap-2">
              <Button
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => setActiveSubjectDetails(null)}
              >
                Back to Directory
              </Button>
              <Button
                variant="primary"
                size="md"
                fullWidth
                leftIcon={<Play className="w-4 h-4 fill-current" />}
                onClick={() => handleStartSubjectPractice(activeSubjectDetails)}
              >
                Practice Questions ({subjectQuestionCounts[activeSubjectDetails.id] || 0})
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
