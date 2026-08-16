import React, { useState } from 'react';
import {
  TrendingUp,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Play,
  AlertCircle,
  ChevronDown,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { CategoryBadge } from '../components/ui/Badge';
import { SUBJECTS } from '../data/subjects';
import { ALL_QUESTIONS } from '../data/questions';
import { ALL_STUDY_MATERIALS } from '../data/study-materials';
import type { UserStudyStats, QuizConfig, NavigationTab } from '../types';

interface HomePageProps {
  stats: UserStudyStats;
  onStartQuiz: (config: QuizConfig) => void;
  onNavigateTab: (tab: NavigationTab) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  stats,
  onStartQuiz,
  onNavigateTab,
}) => {
  const [expandedSessionId, setExpandedSessionId] = useState<string | null>(null);

  const {
    totalAnswered = 0,
    totalCorrect = 0,
    subjectMastery = {},
    bookmarkedQuestionIds = [],
    missedQuestionIds = [],
    quizHistory = [],
    completedMaterialIds = [],
  } = stats;

  const isNewUser = totalAnswered === 0 && quizHistory.length === 0 && completedMaterialIds.length === 0;

  const overallAccuracy =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const isPassing = overallAccuracy >= 75;

  const genEdSubjects = SUBJECTS.filter((s) => s.category === 'gen_ed');
  const profEdSubjects = SUBJECTS.filter((s) => s.category === 'prof_ed');

  const computeDomainStats = (subjects: typeof SUBJECTS) => {
    let answered = 0;
    let correct = 0;
    subjects.forEach((s) => {
      const sub = subjectMastery[s.id];
      if (sub) {
        answered += sub.answered;
        correct += sub.correct;
      }
    });
    return {
      answered,
      correct,
      percentage: answered > 0 ? Math.round((correct / answered) * 100) : 0,
    };
  };

  const genEdStats = computeDomainStats(genEdSubjects);
  const profEdStats = computeDomainStats(profEdSubjects);

  const subjectsWithActivity = SUBJECTS.filter(
    (s) => subjectMastery[s.id] && subjectMastery[s.id].answered > 0
  );

  // Identify weak areas (answered >= 3 and accuracy < 75%)
  const weakSubjects = SUBJECTS.map((sub) => {
    const stat = subjectMastery[sub.id];
    const answered = stat ? stat.answered : 0;
    const correct = stat ? stat.correct : 0;
    const percentage = answered > 0 ? Math.round((correct / answered) * 100) : null;
    return {
      subject: sub,
      answered,
      correct,
      percentage,
    };
  })
    .filter((item) => item.percentage !== null && item.answered >= 3 && item.percentage < 75)
    .sort((a, b) => (a.percentage ?? 0) - (b.percentage ?? 0));

  // Determine smart "Continue Studying" recommendation
  const getContinueAction = () => {
    if (missedQuestionIds.length > 0) {
      return {
        type: 'missed',
        title: 'Remediate Missed Items',
        subtitle: `You have ${missedQuestionIds.length} missed question${missedQuestionIds.length === 1 ? '' : 's'} to drill.`,
        actionLabel: `Drill Missed (${missedQuestionIds.length})`,
        action: () =>
          onStartQuiz({
            mode: 'practice',
            subjectIds: [],
            includeOnlyIncorrect: true,
            questionCount: Math.min(missedQuestionIds.length, 15),
          }),
      };
    }

    if (weakSubjects.length > 0) {
      const weakest = weakSubjects[0];
      return {
        type: 'weak_subject',
        title: `Strengthen ${weakest.subject.name}`,
        subtitle: `Current accuracy is ${weakest.percentage}%. Drill core competencies to reach 75%.`,
        actionLabel: `Practice ${weakest.subject.name}`,
        action: () =>
          onStartQuiz({
            mode: 'practice',
            subjectIds: [weakest.subject.id],
            questionCount: 10,
          }),
      };
    }

    if (bookmarkedQuestionIds.length > 0) {
      return {
        type: 'bookmarked',
        title: 'Review Saved Bookmarks',
        subtitle: `You have ${bookmarkedQuestionIds.length} flagged bookmark${bookmarkedQuestionIds.length === 1 ? '' : 's'} in your bank.`,
        actionLabel: `Review Saved (${bookmarkedQuestionIds.length})`,
        action: () =>
          onStartQuiz({
            mode: 'practice',
            subjectIds: [],
            includeOnlyBookmarked: true,
            questionCount: Math.min(bookmarkedQuestionIds.length, 15),
          }),
      };
    }

    // Default next recommendation
    return {
      type: 'mock',
      title: 'Full LET Simulation Practice',
      subtitle: 'Complete a timed mock battery to measure your current readiness across all domains.',
      actionLabel: 'Configure Mock Exam',
      action: () => onNavigateTab('practice'),
    };
  };

  const nextAction = getContinueAction();

  // Onboarding view for brand new users
  if (isNewUser) {
    return (
      <div className="space-y-6 animate-fade-in">
        {/* Clean Onboarding Header */}
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Licensure Examination for Teachers
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
            Curriculum-aligned reviewer for General Education and Professional Education.
          </p>
        </div>

        {/* Start Your Review Hero */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5 sm:p-6 space-y-4">
          <div className="space-y-1.5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Start Your Review
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
              Begin with a self-paced practice drill or explore the study guides to start tracking your competency progress.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <Button
              variant="primary"
              size="lg"
              leftIcon={<GraduationCap className="w-4 h-4 stroke-[2.25] shrink-0" />}
              onClick={() => onNavigateTab('practice')}
              className="w-full justify-center font-semibold"
            >
              Start Practice Drill
            </Button>

            <Button
              variant="secondary"
              size="lg"
              leftIcon={<BookOpen className="w-4 h-4 stroke-[2.25] shrink-0" />}
              onClick={() => onNavigateTab('materials')}
              className="w-full justify-center font-semibold"
            >
              Explore Study Guides
            </Button>
          </div>
        </section>

        {/* Curriculum Tracks Quick Overview */}
        <section className="space-y-3 pt-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              Curriculum Domains
            </h3>
            <button
              type="button"
              onClick={() => onNavigateTab('subjects')}
              className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>Browse {SUBJECTS.length} subjects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              onClick={() =>
                onStartQuiz({
                  mode: 'practice',
                  subjectIds: [],
                  category: 'gen_ed',
                  questionCount: 10,
                })
              }
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-800 rounded-lg p-4 transition-all duration-150 active:scale-[0.99] cursor-pointer group space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <CategoryBadge category="gen_ed" size="sm" />
                <span className="text-xs text-slate-500 font-medium">6 Subjects</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
                  General Education
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  English, Filipino, Mathematics, Natural Science, Social Sciences, and ICT Literacy.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>10-item quick drill</span>
                <span className="font-semibold text-sky-700 dark:text-sky-400 group-hover:underline flex items-center gap-1">
                  Start drill <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            <div
              onClick={() =>
                onStartQuiz({
                  mode: 'practice',
                  subjectIds: [],
                  category: 'prof_ed',
                  questionCount: 10,
                })
              }
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-300 dark:hover:border-amber-800 rounded-lg p-4 transition-all duration-150 active:scale-[0.99] cursor-pointer group space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <CategoryBadge category="prof_ed" size="sm" />
                <span className="text-xs text-slate-500 font-medium">7 Subjects</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                  Professional Education
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Foundations, Child Development, Teaching Principles, Curriculum, Assessment, EdTech, and Ethics.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>10-item quick drill</span>
                <span className="font-semibold text-amber-700 dark:text-amber-400 group-hover:underline flex items-center gap-1">
                  Start drill <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Progress-Centric Home Screen for Active Learners
  return (
    <div className="space-y-5 animate-fade-in">
      {/* Header & Overall Summary Metrics */}
      <section className="space-y-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Study Progress Overview
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
            Performance analytics, curriculum mastery, and recommended study actions.
          </p>
        </div>

        {/* Primary Metric Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-0.5">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
              Questions Solved
            </span>
            <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-mono mt-0.5">
              {totalAnswered}
              <span className="text-xs text-slate-400 font-normal ml-1">/ {ALL_QUESTIONS.length}</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
              Accuracy
            </span>
            <div className={`text-lg sm:text-xl font-bold font-mono mt-0.5 ${overallAccuracy >= 75 ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-900 dark:text-white'}`}>
              {overallAccuracy}%
              <span className="text-[10px] text-slate-400 font-normal ml-1">(≥75% pass)</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
              Subjects Studied
            </span>
            <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-mono mt-0.5">
              {subjectsWithActivity.length}
              <span className="text-xs text-slate-400 font-normal ml-1">/ {SUBJECTS.length}</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
              Guides Read
            </span>
            <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-mono mt-0.5">
              {completedMaterialIds.length}
              <span className="text-xs text-slate-400 font-normal ml-1">/ {ALL_STUDY_MATERIALS.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Continue Studying (Smart Next Action) */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 sm:p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded bg-slate-900 text-white dark:bg-white dark:text-slate-900">
              <Play className="w-3.5 h-3.5 fill-current" />
            </div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Continue Studying
            </h2>
          </div>
          <span className="text-[11px] text-slate-500 font-medium">Recommended Next Action</span>
        </div>

        <div className="space-y-1">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
            {nextAction.title}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {nextAction.subtitle}
          </p>
        </div>

        <div className="pt-1">
          <Button
            variant="primary"
            size="md"
            onClick={nextAction.action}
            className="font-bold"
          >
            {nextAction.actionLabel} →
          </Button>
        </div>
      </section>

      {/* Performance Overview & Estimated Readiness */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 sm:p-5 space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
            <TrendingUp className="w-4 h-4" />
            <h2 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
              Estimated Passing Readiness
            </h2>
          </div>
          <span
            className={`text-xs font-bold px-2 py-0.5 rounded ${
              isPassing && totalAnswered >= 10
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
            }`}
          >
            {totalAnswered < 10
              ? 'Collecting baseline'
              : isPassing
              ? 'On track (≥ 75%)'
              : 'Needs practice (< 75%)'}
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-baseline">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono">
              {overallAccuracy}%
            </span>
            <span className="text-xs text-slate-500">
              Passing Benchmark: 75.00%
            </span>
          </div>
          <ProgressBar
            value={overallAccuracy}
            max={100}
            colorVariant={overallAccuracy >= 75 ? 'emerald' : 'amber'}
          />
        </div>

        {/* Domain Comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-md border border-slate-200 dark:border-slate-700 space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-sky-800 dark:text-sky-300">General Education</span>
              <span className="font-mono text-slate-900 dark:text-white">{genEdStats.percentage}%</span>
            </div>
            <ProgressBar value={genEdStats.percentage} max={100} colorVariant="sky" />
            <p className="text-[10px] text-slate-500 pt-0.5">
              {genEdStats.correct} of {genEdStats.answered} questions correct
            </p>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-md border border-slate-200 dark:border-slate-700 space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-amber-800 dark:text-amber-300">Professional Education</span>
              <span className="font-mono text-slate-900 dark:text-white">{profEdStats.percentage}%</span>
            </div>
            <ProgressBar value={profEdStats.percentage} max={100} colorVariant="amber" />
            <p className="text-[10px] text-slate-500 pt-0.5">
              {profEdStats.correct} of {profEdStats.answered} questions correct
            </p>
          </div>
        </div>
      </section>

      {/* Areas to Review (Weak Competencies Queue) */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <h2 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
              Areas to Review
            </h2>
          </div>
          {(bookmarkedQuestionIds.length > 0 || missedQuestionIds.length > 0) && (
            <button
              type="button"
              onClick={() => onNavigateTab('bank')}
              className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:underline cursor-pointer"
            >
              Open Study Bank →
            </button>
          )}
        </div>

        {weakSubjects.length > 0 ? (
          <div className="space-y-2">
            {weakSubjects.map((item) => (
              <div
                key={item.subject.id}
                className="p-3 rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3 text-xs"
              >
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">
                    {item.subject.name}
                  </span>
                  <span className="text-[11px] text-rose-600 dark:text-rose-400 font-medium">
                    {item.percentage}% accuracy • {item.answered} questions attempted
                  </span>
                </div>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() =>
                    onStartQuiz({
                      mode: 'practice',
                      subjectIds: [item.subject.id],
                      questionCount: 10,
                    })
                  }
                >
                  Drill Subject
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-3 rounded-md bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">
            {totalAnswered < 10
              ? 'Complete more practice items across subjects to identify specific weak areas.'
              : 'Great work! All tested subjects are performing at or above the 75% passing benchmark.'}
          </div>
        )}
      </section>

      {/* Subject-by-Subject Mastery Breakdown */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
            Subject Performance Breakdown
          </h2>
          <button
            type="button"
            onClick={() => onNavigateTab('subjects')}
            className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:underline cursor-pointer"
          >
            All Subjects →
          </button>
        </div>

        <div className="space-y-2.5">
          {SUBJECTS.map((sub) => {
            const stat = subjectMastery[sub.id];
            const answered = stat ? stat.answered : 0;
            const correct = stat ? stat.correct : 0;
            const percentage = answered > 0 ? Math.round((correct / answered) * 100) : 0;

            return (
              <div key={sub.id} className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="font-medium text-slate-800 dark:text-slate-200 truncate">
                      {sub.name}
                    </span>
                    <span className="text-[10px] text-slate-400 shrink-0">
                      ({sub.category === 'gen_ed' ? 'GenEd' : 'ProfEd'})
                    </span>
                  </div>
                  <span className="text-slate-500 font-mono shrink-0 ml-2">
                    {answered > 0 ? `${correct}/${answered} (${percentage}%)` : 'Unattempted'}
                  </span>
                </div>
                <ProgressBar
                  value={percentage}
                  max={100}
                  colorVariant={
                    answered === 0
                      ? 'primary'
                      : percentage >= 75
                      ? 'emerald'
                      : percentage >= 50
                      ? 'amber'
                      : 'rose'
                  }
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Recent Examination Activity */}
      {quizHistory.length > 0 && (
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
              Recent Activity & Sessions
            </h2>
            <span className="text-xs text-slate-500 font-mono font-medium">
              {quizHistory.length} total logged
            </span>
          </div>

          <div className="space-y-2">
            {quizHistory.slice(0, 5).map((session) => {
              const isExpanded = expandedSessionId === session.sessionId;
              const hasBreakdown = session.subjectBreakdown && session.subjectBreakdown.length > 0;
              const dateStr = new Date(session.timestamp).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });

              return (
                <div
                  key={session.sessionId}
                  className="p-3 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`min-w-0 flex-1 ${hasBreakdown ? 'cursor-pointer select-none' : ''}`}
                      onClick={() => {
                        if (hasBreakdown) {
                          setExpandedSessionId((prev) => (prev === session.sessionId ? null : session.sessionId));
                        }
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 dark:text-white font-mono text-sm">
                          {session.scorePercentage}%
                        </span>
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            session.isPassed
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                              : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                          }`}
                        >
                          {session.isPassed ? 'Passed' : 'Needs Review'}
                        </span>
                        <span className="text-[11px] text-slate-500 truncate">
                          {session.config.title || (session.config.mode === 'exam' ? 'Mock Exam' : 'Practice Drill')}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-500">
                        <span>{dateStr}</span>
                        <span>•</span>
                        <span>{session.correctCount} of {session.totalQuestions} items</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => onStartQuiz(session.config)}
                      >
                        Retake
                      </Button>
                      {hasBreakdown && (
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedSessionId((prev) => (prev === session.sessionId ? null : session.sessionId))
                          }
                          aria-label={isExpanded ? 'Collapse subject breakdown' : 'Expand subject breakdown'}
                          className="w-7 h-7 flex items-center justify-center rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-150 ${isExpanded ? 'rotate-180' : ''}`}
                          />
                        </button>
                      )}
                    </div>
                  </div>

                  {isExpanded && hasBreakdown && (
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1.5 animate-fade-in">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Subject Score Breakdown
                      </span>
                      {session.subjectBreakdown.map((sb) => (
                        <div
                          key={sb.subjectId}
                          className="flex justify-between text-xs text-slate-600 dark:text-slate-400"
                        >
                          <span className="truncate pr-2">{sb.subjectName}</span>
                          <span className="font-mono font-medium">
                            {sb.correct}/{sb.total} ({sb.percentage}%)
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
