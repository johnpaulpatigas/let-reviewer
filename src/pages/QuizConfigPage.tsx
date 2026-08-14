import React, { useState } from 'react';
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
import type { QuizConfig, SubjectCategory } from '../types';

interface QuizConfigPageProps {
  onStartExam: (config: QuizConfig) => void;
}

export const QuizConfigPage: React.FC<QuizConfigPageProps> = ({ onStartExam }) => {
  const [selectedCategory, setSelectedCategory] = useState<SubjectCategory | 'all'>('all');
  const [selectedSubjectIds, setSelectedSubjectIds] = useState<string[]>([]);
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
        questionCount: 15,
        timeLimitMinutes: 20,
      });
    } else if (preset === 'gen_ed') {
      onStartExam({
        mode: 'exam',
        category: 'gen_ed',
        subjectIds: [],
        questionCount: 10,
        timeLimitMinutes: 15,
      });
    } else {
      onStartExam({
        mode: 'exam',
        category: 'prof_ed',
        subjectIds: [],
        questionCount: 10,
        timeLimitMinutes: 15,
      });
    }
  };

  const handleStartCustomExam = () => {
    onStartExam({
      mode: 'exam',
      category: selectedCategory,
      subjectIds: selectedSubjectIds,
      questionCount,
      timeLimitMinutes: timeLimitMinutes === 0 ? undefined : timeLimitMinutes,
    });
  };

  return (
    <div className="space-y-5 animate-fadeIn">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          Mock Exam Simulation
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
          Simulate official PRC LET testing conditions with timed mock examinations.
        </p>
      </div>

      {/* Quick Presets Carousel / Cards */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Quick Exam Presets
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Full Mock */}
          <button
            type="button"
            onClick={() => handleStartPreset('standard')}
            className="text-left p-4 rounded-2xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-xl bg-white/20">
                  <Award className="w-4 h-4 text-amber-300" />
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/20">
                  Timed
                </span>
              </div>
              <h3 className="font-extrabold text-sm sm:text-base leading-tight">
                Full LET Mock Exam
              </h3>
              <p className="text-xs text-indigo-100 mt-1">
                Mixed GenEd & ProfEd questions
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-indigo-400/40 flex items-center justify-between text-xs font-medium">
              <span>15 Items</span>
              <span>20 Mins</span>
            </div>
          </button>

          {/* GenEd Preset */}
          <button
            type="button"
            onClick={() => handleStartPreset('gen_ed')}
            className="text-left p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                  <BookOpen className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                  GenEd
                </span>
              </div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-tight">
                General Education Mock
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                English, Math, Science & History
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>10 Items</span>
              <span>15 Mins</span>
            </div>
          </button>

          {/* ProfEd Preset */}
          <button
            type="button"
            onClick={() => handleStartPreset('prof_ed')}
            className="text-left p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <BrainCircuit className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                  ProfEd
                </span>
              </div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-tight">
                Professional Ed Mock
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Theories, Assessment & Pedagogy
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>10 Items</span>
              <span>15 Mins</span>
            </div>
          </button>
        </div>
      </div>

      {/* Custom Configuration Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 space-y-5 shadow-sm">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            Custom Exam Configuration
          </h3>
        </div>

        {/* Category Selector */}
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
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
                className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl border transition-all tap-target ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-50 border-indigo-600 text-indigo-700 dark:bg-indigo-950/70 dark:border-indigo-500 dark:text-indigo-300 font-bold'
                    : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Specific Subjects Selection (optional) */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto pr-1">
            {SUBJECTS.filter(
              (s) => selectedCategory === 'all' || s.category === selectedCategory
            ).map((sub) => {
              const isChecked = selectedSubjectIds.includes(sub.id);
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => toggleSubject(sub.id)}
                  className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between ${
                    isChecked
                      ? 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-600 text-indigo-900 dark:text-indigo-200'
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

        {/* Number of Questions */}
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
            Number of Questions
          </label>
          <div className="flex gap-2">
            {[5, 10, 15, 20, ALL_QUESTIONS.length].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setQuestionCount(count)}
                className={`flex-1 py-2 px-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all tap-target ${
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

        {/* Timer Limit */}
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
            Time Limit
          </label>
          <div className="flex gap-2">
            {[
              { mins: 5, label: '5 mins' },
              { mins: 10, label: '10 mins' },
              { mins: 15, label: '15 mins' },
              { mins: 30, label: '30 mins' },
              { mins: 0, label: 'Untimed' },
            ].map((timer) => (
              <button
                key={timer.mins}
                type="button"
                onClick={() => setTimeLimitMinutes(timer.mins)}
                className={`flex-1 py-2 px-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all tap-target ${
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

        {/* Start Custom Button */}
        <Button
          variant="primary"
          size="lg"
          fullWidth
          leftIcon={<BrainCircuit className="w-5 h-5" />}
          onClick={handleStartCustomExam}
          className="mt-2"
        >
          Start Custom Mock Exam
        </Button>
      </div>
    </div>
  );
};
