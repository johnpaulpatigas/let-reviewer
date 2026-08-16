import React, { useState } from 'react';
import {
  Clock,
  Zap,
  SlidersHorizontal,
  Scale,
  Play,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SUBJECTS } from '../data/subjects';
import { OFFICIAL_LET_BLUEPRINTS, type ExamBlueprint } from '../data/exam-blueprint';
import { ExamBriefingModal } from '../components/quiz/ExamBriefingModal';
import type { QuizConfig, SubjectCategory, Difficulty, ActiveSessionState } from '../types';

interface QuizConfigPageProps {
  onStartExam: (config: QuizConfig) => void;
  activeSession?: ActiveSessionState | null;
  onResumeSession?: () => void;
  onDiscardSession?: () => void;
}

export const QuizConfigPage: React.FC<QuizConfigPageProps> = ({
  onStartExam,
  activeSession,
  onResumeSession,
  onDiscardSession,
}) => {
  const [selectedMode, setSelectedMode] = useState<'practice' | 'exam'>('practice');
  const [selectedCategory, setSelectedCategory] = useState<SubjectCategory | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedSubjectIds, setSelectedSubjectIds] = useState<string[]>([]);
  const [questionCount, setQuestionCount] = useState<number>(15);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(20);
  const [activeBriefingBlueprint, setActiveBriefingBlueprint] = useState<ExamBlueprint | null>(null);

  const handleLaunchBlueprint = (blueprintKey: string) => {
    const bp = OFFICIAL_LET_BLUEPRINTS[blueprintKey];
    if (bp) {
      setActiveBriefingBlueprint(bp);
    }
  };

  const handleConfirmStartBriefing = () => {
    if (!activeBriefingBlueprint) return;
    const bp = activeBriefingBlueprint;
    setActiveBriefingBlueprint(null);
    onStartExam({
      mode: 'exam',
      subjectIds: [],
      category: 'all',
      difficulty: 'all',
      questionCount: bp.totalQuestions,
      timeLimitMinutes: bp.totalTimeMinutes,
      blueprintId: bp.id,
      title: bp.title,
    });
  };

  const handleStartQuickPractice = (category: SubjectCategory | 'all' = 'all') => {
    onStartExam({
      mode: 'practice',
      subjectIds: [],
      category,
      difficulty: 'all',
      questionCount: 10,
    });
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
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Examination & Practice Center
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
          Full-length timed LET simulations and self-paced competency practice drills.
        </p>
      </div>

      {/* Active In-Progress Session Resume Banner */}
      {activeSession && (
        <section className="bg-amber-50/70 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-700/80 rounded-lg p-4 sm:p-5 space-y-3 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-amber-600 text-white dark:bg-amber-500 dark:text-slate-900">
                <Play className="w-3.5 h-3.5 fill-current" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                In-Progress Session
              </span>
            </div>
            <span className="text-xs text-amber-800 dark:text-amber-400 font-mono font-semibold">
              {Object.keys(activeSession.answers).length} of {activeSession.questions.length} completed
            </span>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
              {activeSession.config.title ||
                (activeSession.config.mode === 'exam'
                  ? 'LET Mock Board Examination'
                  : activeSession.config.topic
                  ? `Topic Drill: ${activeSession.config.topic}`
                  : 'Practice Drill')}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
              Resume where you left off at question #{activeSession.currentIndex + 1}. All previously answered items are preserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Button
              variant="primary"
              size="md"
              onClick={onResumeSession}
              className="font-bold"
            >
              Resume Practice Session →
            </Button>
            {onDiscardSession && (
              <Button
                variant="secondary"
                size="md"
                onClick={onDiscardSession}
              >
                Discard & Start New
              </Button>
            )}
          </div>
        </section>
      )}

      {/* 1. Full LET Simulations */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Scale className="w-4 h-4 text-slate-700 dark:text-slate-300" />
            <h2 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              Full LET Simulations
            </h2>
          </div>
          <span className="text-[11px] text-slate-500 font-medium">Standardized Timed Batteries</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Elementary Track */}
          <div
            onClick={() => handleLaunchBlueprint('full-let-elementary')}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-white rounded-lg p-4 transition-all duration-150 active:scale-[0.99] cursor-pointer group flex flex-col justify-between space-y-3 select-none"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-[10px] font-bold uppercase tracking-wider border border-sky-200 dark:border-sky-800">
                  Elementary Level
                </span>
                <span className="text-xs font-mono text-slate-500 font-semibold">100 Mins</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                Full LET Simulation — Elementary
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                40 GenEd items (40% weight) + 60 ProfEd items (60% weight). Realistic timed board exam conditions.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono">100 Items • ≥ 75% GWA</span>
              <span className="font-semibold text-slate-900 dark:text-white group-hover:underline">
                View Briefing →
              </span>
            </div>
          </div>

          {/* Secondary Track */}
          <div
            onClick={() => handleLaunchBlueprint('full-let-secondary')}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-white rounded-lg p-4 transition-all duration-150 active:scale-[0.99] cursor-pointer group flex flex-col justify-between space-y-3 select-none"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[10px] font-bold uppercase tracking-wider border border-amber-200 dark:border-amber-800">
                  Secondary Level
                </span>
                <span className="text-xs font-mono text-slate-500 font-semibold">100 Mins</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                Full LET Simulation — Secondary Core
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                40 GenEd core items + 60 ProfEd pedagogical items. Continuous countdown with zero intermediate feedback.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono">100 Items • ≥ 75% GWA</span>
              <span className="font-semibold text-slate-900 dark:text-white group-hover:underline">
                View Briefing →
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Domain Mock Batteries */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-700 dark:text-slate-300" />
            <h2 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              Domain Mock Exams
            </h2>
          </div>
          <span className="text-[11px] text-slate-500 font-medium">Single-Domain Timed Tests</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* GenEd Battery */}
          <div
            onClick={() => handleLaunchBlueprint('gen-ed-battery')}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-800 rounded-lg p-4 transition-all duration-150 active:scale-[0.99] cursor-pointer group flex flex-col justify-between space-y-2.5 select-none"
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-xs text-sky-800 dark:text-sky-300 uppercase tracking-wider">
                  General Education Battery
                </span>
                <span className="text-xs font-mono text-slate-500">50 Mins</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                50-Item GenEd Timed Mock
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Comprehensive evaluation covering English, Filipino, Math, Science, Social Sciences, and ICT.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span>50 Questions</span>
              <span className="font-semibold text-sky-700 dark:text-sky-400 group-hover:underline">
                Start Mock →
              </span>
            </div>
          </div>

          {/* ProfEd Battery */}
          <div
            onClick={() => handleLaunchBlueprint('prof-ed-battery')}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-300 dark:hover:border-amber-800 rounded-lg p-4 transition-all duration-150 active:scale-[0.99] cursor-pointer group flex flex-col justify-between space-y-2.5 select-none"
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-xs text-amber-800 dark:text-amber-300 uppercase tracking-wider">
                  Professional Education Battery
                </span>
                <span className="text-xs font-mono text-slate-500">60 Mins</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                60-Item ProfEd Timed Mock
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Deep pedagogical testing covering Foundations, Child Dev, Methods, Assessment, Curriculum, and Ethics.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span>60 Questions</span>
              <span className="font-semibold text-amber-700 dark:text-amber-400 group-hover:underline">
                Start Mock →
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quick Practice Drills (Self-Paced with Rationales) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-slate-700 dark:text-slate-300" />
            <h2 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              Self-Paced Practice Drills
            </h2>
          </div>
          <span className="text-[11px] text-slate-500 font-medium">Instant Pedagogical Feedback</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <button
            type="button"
            onClick={() => handleStartQuickPractice('all')}
            className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 text-left transition-colors flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <span className="font-bold text-xs text-slate-900 dark:text-white block">
                Quick Mix (10 Items)
              </span>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Randomized cross-curricular sample.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 group-hover:underline mt-2">
              Start Drill →
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleStartQuickPractice('gen_ed')}
            className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-300 text-left transition-colors flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <span className="font-bold text-xs text-sky-800 dark:text-sky-300 block">
                GenEd Drill (10 Items)
              </span>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Core general education subjects.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-sky-700 dark:text-sky-400 group-hover:underline mt-2">
              Start Drill →
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleStartQuickPractice('prof_ed')}
            className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-300 text-left transition-colors flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <span className="font-bold text-xs text-amber-800 dark:text-amber-300 block">
                ProfEd Drill (10 Items)
              </span>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Professional education competencies.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 group-hover:underline mt-2">
              Start Drill →
            </span>
          </button>
        </div>
      </section>

      {/* 4. Custom Session Builder */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-3">
          <SlidersHorizontal className="w-4 h-4 text-slate-700 dark:text-slate-300" />
          <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Custom Session Builder
          </h2>
        </div>

        {/* Mode Selector */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
            Session Mode
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setSelectedMode('practice')}
              className={`p-3 rounded-md border text-left transition-colors cursor-pointer ${
                selectedMode === 'practice'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white font-bold'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
            >
              <div className="text-xs">Practice Mode</div>
              <div className={`text-[11px] mt-0.5 ${selectedMode === 'practice' ? 'text-slate-300 dark:text-slate-700' : 'text-slate-500'}`}>
                Instant rationales & untimed
              </div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedMode('exam')}
              className={`p-3 rounded-md border text-left transition-colors cursor-pointer ${
                selectedMode === 'exam'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white font-bold'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
            >
              <div className="text-xs">Timed Exam Mode</div>
              <div className={`text-[11px] mt-0.5 ${selectedMode === 'exam' ? 'text-slate-300 dark:text-slate-700' : 'text-slate-500'}`}>
                Timed & scored after submit
              </div>
            </button>
          </div>
        </div>

        {/* Domain Category Filter */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
            Domain Focus
          </label>
          <div className="flex gap-1.5">
            {[
              { id: 'all', label: 'All Domains' },
              { id: 'gen_ed', label: 'General Education' },
              { id: 'prof_ed', label: 'Professional Education' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as SubjectCategory | 'all')}
                className={`flex-1 py-1.5 rounded-md text-xs font-semibold border transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question Count & Time Limit */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Number of Questions ({questionCount})
            </label>
            <div className="flex gap-1.5">
              {[10, 20, 30, 50].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setQuestionCount(count)}
                  className={`flex-1 py-1.5 rounded-md text-xs font-semibold border transition-colors cursor-pointer ${
                    questionCount === count
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          {selectedMode === 'exam' && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Time Limit ({timeLimitMinutes} Mins)
              </label>
              <div className="flex gap-1.5">
                {[15, 25, 45, 60].map((mins) => (
                  <button
                    key={mins}
                    type="button"
                    onClick={() => setTimeLimitMinutes(mins)}
                    className={`flex-1 py-1.5 rounded-md text-xs font-semibold border transition-colors cursor-pointer ${
                      timeLimitMinutes === mins
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {mins}m
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Difficulty Selector */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
            Item Difficulty
          </label>
          <div className="flex gap-1.5">
            {[
              { id: 'all', label: 'All Difficulties' },
              { id: 'easy', label: 'Easy' },
              { id: 'medium', label: 'Medium' },
              { id: 'hard', label: 'Hard' },
            ].map((diff) => (
              <button
                key={diff.id}
                type="button"
                onClick={() => setSelectedDifficulty(diff.id as Difficulty | 'all')}
                className={`flex-1 py-1.5 rounded-md text-xs font-semibold border transition-colors cursor-pointer ${
                  selectedDifficulty === diff.id
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                {diff.label}
              </button>
            ))}
          </div>
        </div>

        {/* Subject Filter Selection */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Filter by Subject ({selectedSubjectIds.length > 0 ? `${selectedSubjectIds.length} Selected` : 'All Subjects'})
            </label>
            {selectedSubjectIds.length > 0 && (
              <button
                type="button"
                onClick={() => setSelectedSubjectIds([])}
                className="text-[11px] text-slate-500 hover:underline cursor-pointer"
              >
                Clear selection
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-48 overflow-y-auto p-1 bg-slate-50 dark:bg-slate-800/40 rounded-md border border-slate-200 dark:border-slate-700">
            {SUBJECTS.map((sub) => {
              const isSelected = selectedSubjectIds.includes(sub.id);
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => toggleSubject(sub.id)}
                  className={`p-2 rounded text-left text-xs transition-colors border cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 font-semibold'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <span className="truncate block">{sub.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Start Custom Button */}
        <div className="pt-2">
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleStartCustomSession}
            className="font-bold"
          >
            {selectedMode === 'exam' ? 'Launch Timed Exam' : 'Launch Practice Drill'}
          </Button>
        </div>
      </section>

      {/* Pre-Exam Briefing Modal */}
      {activeBriefingBlueprint && (
        <ExamBriefingModal
          blueprint={activeBriefingBlueprint}
          isOpen={Boolean(activeBriefingBlueprint)}
          onClose={() => setActiveBriefingBlueprint(null)}
          onConfirmStart={handleConfirmStartBriefing}
        />
      )}
    </div>
  );
};
