import { useState, useMemo } from 'react';
import { SUBJECTS } from '../data/subjects';
import { getQuestionsBySubject } from '../data/questions';
import { SubjectCard } from '../components/study/SubjectCard';
import { Search, X, Play, Layers } from 'lucide-react';
import { IconHelper } from '../components/ui/IconHelper';
import { CategoryBadge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import type { Subject, SubjectCategory, QuizConfig } from '../types';

interface SubjectsPageProps {
  onStartQuiz: (config: QuizConfig) => void;
  subjectMastery?: Record<string, { answered: number; correct: number }>;
}

export const SubjectsPage: React.FC<SubjectsPageProps> = ({
  onStartQuiz,
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

  const handleQuickPractice = (subject: Subject) => {
    onStartQuiz({
      mode: 'practice',
      subjectIds: [subject.id],
      questionCount: subjectQuestionCounts[subject.id] || 10,
    });
  };

  const handleStartTopicDrill = (subject: Subject, topic: string) => {
    setActiveSubjectDetails(null);
    onStartQuiz({
      mode: 'topic_drill',
      subjectIds: [subject.id],
      topic,
      questionCount: 10,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          Subject Library
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Browse competencies across General and Professional Education.
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
              ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
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
              ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
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
              ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
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
              masteryPercentage={mastery}
              onSelect={(sub) => setActiveSubjectDetails(sub)}
              onQuickStart={handleQuickPractice}
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

      {activeSubjectDetails && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div
            className="bg-white dark:bg-slate-900 w-full sm:max-w-md rounded-t-2xl sm:rounded-xl p-5 shadow-xl max-h-[85vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center ${activeSubjectDetails.colorScheme.bg} ${activeSubjectDetails.colorScheme.text} border ${activeSubjectDetails.colorScheme.border}`}
                >
                  <IconHelper name={activeSubjectDetails.iconName} className="w-4 h-4" />
                </div>
                <div>
                  <CategoryBadge category={activeSubjectDetails.category} size="sm" />
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm mt-0.5">
                    {activeSubjectDetails.name}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveSubjectDetails(null)}
                className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
              {activeSubjectDetails.description}
            </p>

            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Topic Competencies
                </span>
                <span className="text-xs text-slate-500">
                  {subjectQuestionCounts[activeSubjectDetails.id] || 0} questions
                </span>
              </div>

              <div className="space-y-1.5">
                {activeSubjectDetails.topics.map((topic, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleStartTopicDrill(activeSubjectDetails, topic)}
                    className="w-full text-left p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-400 bg-slate-50/60 dark:bg-slate-800/40 flex items-center justify-between group transition-colors tap-target"
                  >
                    <div>
                      <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {topic}
                      </h4>
                      <p className="text-[10px] text-slate-500">Targeted drill</p>
                    </div>
                    <span className="w-6 h-6 rounded bg-white dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors">
                      <Play className="w-3 h-3 fill-current" />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex gap-2">
              <Button
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => setActiveSubjectDetails(null)}
              >
                Close
              </Button>
              <Button
                variant="primary"
                size="md"
                fullWidth
                leftIcon={<Play className="w-4 h-4 fill-current" />}
                onClick={() => {
                  const sub = activeSubjectDetails;
                  setActiveSubjectDetails(null);
                  handleQuickPractice(sub);
                }}
              >
                Practice All ({subjectQuestionCounts[activeSubjectDetails.id] || 0})
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
