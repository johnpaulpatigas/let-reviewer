import { useState } from 'react';
import { SUBJECTS } from '../data/subjects';
import { ALL_QUESTIONS } from '../data/questions';
import { Button } from '../components/ui/Button';
import {
  BrainCircuit,
  CheckCircle,
  SlidersHorizontal,
  Award,
  BookOpen,
} from 'lucide-react';
import type { QuizConfig, SubjectCategory, Difficulty } from '../types';

interface QuizConfigPageProps {
  onStartExam: (config: QuizConfig) => void;
}

export const QuizConfigPage: React.FC<QuizConfigPageProps> = ({ onStartExam }) => {
  const [selectedCategory, setSelectedCategory] = useState<SubjectCategory | 'all'>('all');
  const [selectedSubjectIds, setSelectedSubjectIds] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(15);

  const toggleSubject = (id: string) => {
    setSelectedSubjectIds((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleStartPreset = (preset: 'standard' | 'gen_ed' | 'prof_ed') => {
    if (preset === 'standard') {
      onStartExam({
        mode: 'exam',
        category: 'all',
        subjectIds: [],
        questionCount: 20,
        timeLimitMinutes: 25,
      });
    } else if (preset === 'gen_ed') {
      onStartExam({
        mode: 'exam',
        category: 'gen_ed',
        subjectIds: [],
        questionCount: 15,
        timeLimitMinutes: 20,
      });
    } else {
      onStartExam({
        mode: 'exam',
        category: 'prof_ed',
        subjectIds: [],
        questionCount: 15,
        timeLimitMinutes: 20,
      });
    }
  };

  const handleStartCustomExam = () => {
    onStartExam({
      mode: 'exam',
      category: selectedCategory,
      subjectIds: selectedSubjectIds,
      difficulty: selectedDifficulty,
      questionCount,
      timeLimitMinutes: timeLimitMinutes === 0 ? undefined : timeLimitMinutes,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          Mock Exam Simulation
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Simulate official PRC LET testing conditions with timed mock examinations.
        </p>
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
          Quick Exam Presets
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <button
            type="button"
            onClick={() => handleStartPreset('standard')}
            className="text-left p-4 rounded-xl bg-slate-900 text-white border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-1.5 rounded-lg bg-slate-800">
                  <Award className="w-4 h-4 text-amber-300" />
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  Timed
                </span>
              </div>
              <h3 className="font-bold text-sm leading-tight text-white">
                Full LET Mock Exam
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Mixed GenEd & ProfEd items
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>20 Items</span>
              <span>25 Mins</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => handleStartPreset('gen_ed')}
            className="text-left p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-1.5 rounded-lg bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
                  <BookOpen className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                  GenEd
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-tight">
                General Education Mock
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                English, Math, Science & History
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span>15 Items</span>
              <span>20 Mins</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => handleStartPreset('prof_ed')}
            className="text-left p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  <BrainCircuit className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  ProfEd
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-tight">
                Professional Ed Mock
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Pedagogy, Assessment & Ethics
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span>15 Items</span>
              <span>20 Mins</span>
            </div>
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">
            Custom Exam Configuration
          </h3>
        </div>

        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1.5">
            Target Domain
          </label>
          <div className="flex gap-2">
            {[
              { id: 'all', label: 'All Domains' },
              { id: 'gen_ed', label: 'General Ed' },
              { id: 'prof_ed', label: 'Professional Ed' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as SubjectCategory | 'all')}
                className={`flex-1 py-1.5 px-3 text-xs sm:text-sm font-semibold rounded-lg border transition-colors tap-target ${
                  selectedCategory === cat.id
                    ? 'bg-slate-100 dark:bg-slate-800 border-indigo-600 text-indigo-700 dark:text-indigo-300 font-bold'
                    : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1.5">
            Question Difficulty
          </label>
          <div className="flex gap-2">
            {[
              { id: 'all', label: 'Mixed / All' },
              { id: 'easy', label: 'Easy' },
              { id: 'medium', label: 'Medium' },
              { id: 'hard', label: 'Hard' },
            ].map((diff) => (
              <button
                key={diff.id}
                type="button"
                onClick={() => setSelectedDifficulty(diff.id as Difficulty | 'all')}
                className={`flex-1 py-1.5 px-2 text-xs sm:text-sm font-semibold rounded-lg border transition-colors tap-target ${
                  selectedDifficulty === diff.id
                    ? 'bg-slate-100 dark:bg-slate-800 border-indigo-600 text-indigo-700 dark:text-indigo-300 font-bold'
                    : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                {diff.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Specific Subjects (Optional)
            </label>
            {selectedSubjectIds.length > 0 && (
              <button
                type="button"
                onClick={() => setSelectedSubjectIds([])}
                className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Clear selection ({selectedSubjectIds.length})
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-44 overflow-y-auto pr-1">
            {SUBJECTS.filter(
              (s) => selectedCategory === 'all' || s.category === selectedCategory
            ).map((sub) => {
              const isChecked = selectedSubjectIds.includes(sub.id);
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => toggleSubject(sub.id)}
                  className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-colors flex items-center justify-between ${
                    isChecked
                      ? 'bg-slate-100 dark:bg-slate-800 border-indigo-600 text-indigo-900 dark:text-indigo-200'
                      : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="truncate pr-1">{sub.name}</span>
                  {isChecked && <CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1.5">
            Number of Questions
          </label>
          <div className="flex gap-2">
            {[10, 20, 30, 50, ALL_QUESTIONS.length].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setQuestionCount(count)}
                className={`flex-1 py-1.5 px-2 text-xs sm:text-sm font-semibold rounded-lg border transition-colors tap-target ${
                  questionCount === count
                    ? 'bg-indigo-600 border-indigo-600 text-white font-bold'
                    : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                {count === ALL_QUESTIONS.length ? `All (${count})` : `${count} Qs`}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1.5">
            Time Limit
          </label>
          <div className="flex gap-2">
            {[
              { mins: 5, label: '5m' },
              { mins: 10, label: '10m' },
              { mins: 15, label: '15m' },
              { mins: 30, label: '30m' },
              { mins: 0, label: 'Untimed' },
            ].map((timer) => (
              <button
                key={timer.mins}
                type="button"
                onClick={() => setTimeLimitMinutes(timer.mins)}
                className={`flex-1 py-1.5 px-2 text-xs sm:text-sm font-semibold rounded-lg border transition-colors tap-target ${
                  timeLimitMinutes === timer.mins
                    ? 'bg-indigo-600 border-indigo-600 text-white font-bold'
                    : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                {timer.label}
              </button>
            ))}
          </div>
        </div>

        <Button
          variant="primary"
          size="lg"
          fullWidth
          leftIcon={<BrainCircuit className="w-4 h-4" />}
          onClick={handleStartCustomExam}
          className="mt-1"
        >
          Start Custom Mock Exam
        </Button>
      </div>
    </div>
  );
};
