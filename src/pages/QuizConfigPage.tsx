import React, { useState } from 'react';
import {
  Clock,
  Zap,
  Award,
  BookOpen,
  SlidersHorizontal,
  CheckCircle,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SUBJECTS } from '../data/subjects';
import { ALL_QUESTIONS } from '../data/questions';
import type { QuizConfig, SubjectCategory, Difficulty } from '../types';

interface QuizConfigPageProps {
  onStartExam: (config: QuizConfig) => void;
}

export const QuizConfigPage: React.FC<QuizConfigPageProps> = ({ onStartExam }) => {
  const [selectedMode, setSelectedMode] = useState<'practice' | 'exam'>('practice');
  const [selectedCategory, setSelectedCategory] = useState<SubjectCategory | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedSubjectIds, setSelectedSubjectIds] = useState<string[]>([]);
  const [questionCount, setQuestionCount] = useState<number>(15);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(20);

  const handleStartPreset = (preset: 'quick_practice' | 'mock_exam' | 'gen_ed' | 'prof_ed') => {
    switch (preset) {
      case 'quick_practice':
        onStartExam({
          mode: 'practice',
          subjectIds: [],
          category: 'all',
          difficulty: 'all',
          questionCount: 10,
        });
        break;
      case 'mock_exam':
        onStartExam({
          mode: 'exam',
          subjectIds: [],
          category: 'all',
          difficulty: 'all',
          questionCount: 20,
          timeLimitMinutes: 25,
        });
        break;
      case 'gen_ed':
        onStartExam({
          mode: 'practice',
          subjectIds: [],
          category: 'gen_ed',
          difficulty: 'all',
          questionCount: 15,
        });
        break;
      case 'prof_ed':
        onStartExam({
          mode: 'practice',
          subjectIds: [],
          category: 'prof_ed',
          difficulty: 'all',
          questionCount: 15,
        });
        break;
    }
  };

  const toggleSubject = (subjectId: string) => {
    setSelectedSubjectIds((prev) =>
      prev.includes(subjectId)
        ? prev.filter((id) => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const handleStartCustomSession = () => {
    onStartExam({
      mode: selectedMode,
      subjectIds: selectedSubjectIds,
      category: selectedCategory,
      difficulty: selectedDifficulty,
      questionCount,
      timeLimitMinutes: selectedMode === 'exam' ? timeLimitMinutes : undefined,
    });
  };

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Practice & Examination Center
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
          Configure a practice drill with immediate pedagogical feedback or simulate timed board conditions.
        </p>
      </div>

      {/* Quick Launch Presets */}
      <div className="space-y-2.5">
        <h2 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
          Quick Launch Presets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          <button
            type="button"
            onClick={() => handleStartPreset('quick_practice')}
            className="text-left p-3.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-colors flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-1 rounded bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                </span>
                <span className="text-[10px] font-semibold text-slate-500">
                  Practice
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                Quick Mix Practice
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                10 random mixed questions with instant rationales.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono">10 Items</span>
              <span>Self-Paced</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => handleStartPreset('mock_exam')}
            className="text-left p-3.5 rounded-lg bg-slate-900 text-white border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-1 rounded bg-slate-800 text-white">
                  <Award className="w-3.5 h-3.5" />
                </span>
                <span className="text-[10px] font-semibold text-slate-300">
                  Simulation
                </span>
              </div>
              <h3 className="font-bold text-sm text-white">
                Full LET Mock Exam
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Official timed simulation without midway answers.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">20 Items</span>
              <span>25 Mins</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => handleStartPreset('gen_ed')}
            className="text-left p-3.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-colors flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-1 rounded bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-400">
                  <BookOpen className="w-3.5 h-3.5" />
                </span>
                <span className="text-[10px] font-semibold text-slate-500">
                  Domain Drill
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                General Education
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Math, Science, English, Filipino, SocSci & ICT.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono">15 Items</span>
              <span>Self-Paced</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => handleStartPreset('prof_ed')}
            className="text-left p-3.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-colors flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <Award className="w-3.5 h-3.5" />
                </span>
                <span className="text-[10px] font-semibold text-slate-500">
                  Domain Drill
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                Professional Education
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Foundations, Pedagogy, Assessment & Ethics.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono">15 Items</span>
              <span>Self-Paced</span>
            </div>
          </button>
        </div>
      </div>

      {/* Custom Session Builder */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <SlidersHorizontal className="w-4 h-4 text-slate-700 dark:text-slate-300" />
          <h2 className="font-bold text-slate-900 dark:text-white text-sm">
            Custom Session Builder
          </h2>
        </div>

        {/* Mode Selector */}
        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1.5">
            Session Mode
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setSelectedMode('practice')}
              className={`p-3 rounded-md border text-left transition-colors tap-target cursor-pointer ${
                selectedMode === 'practice'
                  ? 'bg-slate-100 dark:bg-slate-800 border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold ring-1 ring-slate-900 dark:ring-white'
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white mb-0.5">
                <Zap className="w-3.5 h-3.5 text-amber-600 fill-current" />
                <span>Practice Mode</span>
              </div>
              <p className="text-[11px] text-slate-500 font-normal leading-normal">
                Immediate answers and detailed rationales.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setSelectedMode('exam')}
              className={`p-3 rounded-md border text-left transition-colors tap-target cursor-pointer ${
                selectedMode === 'exam'
                  ? 'bg-slate-100 dark:bg-slate-800 border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold ring-1 ring-slate-900 dark:ring-white'
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white mb-0.5">
                <Clock className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                <span>Mock Exam Mode</span>
              </div>
              <p className="text-[11px] text-slate-500 font-normal leading-normal">
                Timed test conditions, answers revealed at end.
              </p>
            </button>
          </div>
        </div>

        {/* Domain Filter */}
        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1.5">
            Target Domain
          </label>
          <div className="flex gap-2">
            {[
              { id: 'all', label: 'All Domains' },
              { id: 'gen_ed', label: 'General Education' },
              { id: 'prof_ed', label: 'Professional Education' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as SubjectCategory | 'all')}
                className={`flex-1 py-1.5 px-3 text-xs font-medium rounded-md border transition-colors tap-target cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white font-bold'
                    : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Filter */}
        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1.5">
            Difficulty Level
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
                className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md border transition-colors tap-target cursor-pointer ${
                  selectedDifficulty === diff.id
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white font-bold'
                    : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {diff.label}
              </button>
            ))}
          </div>
        </div>

        {/* Specific Subjects Selection */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Specific Subjects (Optional)
            </label>
            {selectedSubjectIds.length > 0 && (
              <button
                type="button"
                onClick={() => setSelectedSubjectIds([])}
                className="text-xs text-slate-600 dark:text-slate-400 hover:underline cursor-pointer"
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
                  className={`p-2.5 rounded-md border text-left text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                    isChecked
                      ? 'bg-slate-100 dark:bg-slate-800 border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold'
                      : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                  }`}
                >
                  <span className="truncate pr-1">{sub.name}</span>
                  {isChecked && <CheckCircle className="w-3.5 h-3.5 text-slate-900 dark:text-white shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Question Count */}
        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1.5">
            Question Count
          </label>
          <div className="flex gap-2">
            {[10, 20, 30, 50, ALL_QUESTIONS.length].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setQuestionCount(count)}
                className={`flex-1 py-1.5 px-2 text-xs font-mono font-medium rounded-md border transition-colors tap-target cursor-pointer ${
                  questionCount === count
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white font-bold'
                    : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {count === ALL_QUESTIONS.length ? `All (${count})` : `${count}`}
              </button>
            ))}
          </div>
        </div>

        {/* Time Limit (Only relevant for exam mode) */}
        {selectedMode === 'exam' && (
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
                  className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md border transition-colors tap-target cursor-pointer ${
                    timeLimitMinutes === timer.mins
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white font-bold'
                      : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {timer.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={handleStartCustomSession}
          className="mt-2"
        >
          {selectedMode === 'exam' ? 'Start Mock Examination' : 'Start Practice Drill'}
        </Button>
      </div>
    </div>
  );
};
