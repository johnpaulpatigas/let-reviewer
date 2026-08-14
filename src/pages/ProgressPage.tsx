import { useState } from 'react';
import { SUBJECTS } from '../data/subjects';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Button } from '../components/ui/Button';
import { IconHelper } from '../components/ui/IconHelper';
import {
  Flame,
  Trash2,
  TrendingUp,
  AlertCircle,
  BookMarked,
  ArrowRight,
} from 'lucide-react';
import type { UserStudyStats, QuizResult } from '../types';

interface ProgressPageProps {
  stats: UserStudyStats;
  onClearStats: () => void;
  onViewQuizResult?: (result: QuizResult) => void;
  onOpenStudyBank?: () => void;
}

export const ProgressPage: React.FC<ProgressPageProps> = ({
  stats,
  onClearStats,
  onOpenStudyBank,
}) => {
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const {
    totalAnswered,
    totalCorrect,
    streakDays,
    subjectMastery,
    quizHistory,
  } = stats;

  const overallAccuracy =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const isPassing = overallAccuracy >= 75;

  const genEdSubjects = SUBJECTS.filter((s) => s.category === 'gen_ed');
  const profEdSubjects = SUBJECTS.filter((s) => s.category === 'prof_ed');

  const computeCategoryStats = (subjectList: typeof SUBJECTS) => {
    let answered = 0;
    let correct = 0;
    subjectList.forEach((s) => {
      const subStat = subjectMastery[s.id];
      if (subStat) {
        answered += subStat.answered;
        correct += subStat.correct;
      }
    });
    return {
      answered,
      correct,
      percentage: answered > 0 ? Math.round((correct / answered) * 100) : 0,
    };
  };

  const genEdStats = computeCategoryStats(genEdSubjects);
  const profEdStats = computeCategoryStats(profEdSubjects);

  return (
    <div className="space-y-4 animate-fade-in">
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          Study Progress & Analytics
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Competency metrics and historical exam performance.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
            <TrendingUp className="w-4 h-4" />
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
              Estimated LET Passing Readiness
            </h3>
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
              ? 'On track to pass (>= 75%)'
              : 'Needs practice (< 75%)'}
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-baseline">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {overallAccuracy}%
            </span>
            <span className="text-xs text-slate-500">
              PRC Benchmark: 75.00%
            </span>
          </div>
          <ProgressBar
            value={overallAccuracy}
            max={100}
            colorVariant={overallAccuracy >= 75 ? 'emerald' : 'amber'}
          />
        </div>

        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
          <div>
            <span className="text-[11px] text-slate-500 block">Total Answered</span>
            <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              {totalAnswered}
            </span>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 block">Correct Items</span>
            <span className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400">
              {totalCorrect}
            </span>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 block">Study Streak</span>
            <span className="text-sm sm:text-base font-bold text-amber-600 dark:text-amber-400 flex items-center justify-center gap-1">
              <Flame className="w-3.5 h-3.5 fill-current inline" />
              {streakDays}d
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider">
              General Education
            </span>
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {genEdStats.percentage}%
            </span>
          </div>
          <ProgressBar
            value={genEdStats.percentage}
            max={100}
            colorVariant="indigo"
          />
          <p className="text-[10px] text-slate-400">
            {genEdStats.correct} of {genEdStats.answered} questions answered correctly
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
              Professional Education
            </span>
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {profEdStats.percentage}%
            </span>
          </div>
          <ProgressBar
            value={profEdStats.percentage}
            max={100}
            colorVariant="indigo"
          />
          <p className="text-[10px] text-slate-400">
            {profEdStats.correct} of {profEdStats.answered} questions answered correctly
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 space-y-3">
        <h3 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
          Competency Breakdown by Subject
        </h3>

        <div className="space-y-3">
          {SUBJECTS.map((subject) => {
            const stat = subjectMastery[subject.id] || { answered: 0, correct: 0 };
            const percentage =
              stat.answered > 0 ? Math.round((stat.correct / stat.answered) * 100) : 0;

            let statusLabel = 'Not Started';
            let statusColor = 'text-slate-400 bg-slate-100 dark:bg-slate-800';
            if (stat.answered > 0) {
              if (percentage >= 80) {
                statusLabel = 'Mastered';
                statusColor = 'text-emerald-700 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300';
              } else if (percentage >= 60) {
                statusLabel = 'Developing';
                statusColor = 'text-indigo-700 bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-300';
              } else {
                statusLabel = 'Needs Review';
                statusColor = 'text-rose-700 bg-rose-100 dark:bg-rose-950 dark:text-rose-300';
              }
            }

            return (
              <div key={subject.id} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 min-w-0">
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${subject.colorScheme.bg} ${subject.colorScheme.text}`}
                    >
                      <IconHelper name={subject.iconName} className="w-3 h-3" />
                    </div>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                      {subject.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${statusColor}`}>
                      {statusLabel}
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white min-w-[32px] text-right">
                      {percentage}%
                    </span>
                  </div>
                </div>

                <ProgressBar
                  value={stat.correct}
                  max={Math.max(stat.answered, 1)}
                  colorVariant={percentage >= 75 ? 'emerald' : percentage >= 50 ? 'indigo' : 'rose'}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* Saved & Remediation Bank Card */}
      {onOpenStudyBank && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900/50 flex items-center justify-center font-bold">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                Targeted Remediation & Bookmarks
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {stats.bookmarkedQuestionIds.length} saved bookmarks • {stats.missedQuestionIds.length} missed items
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenStudyBank}
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-semibold inline-flex items-center gap-1 transition-colors tap-target shrink-0"
          >
            <span>Open Bank</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {quizHistory && quizHistory.length > 0 && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 space-y-2.5">
          <h3 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
            Recent Quiz & Exam History
          </h3>

          <div className="space-y-2">
            {quizHistory.slice(0, 5).map((item) => {
              const dateStr = new Date(item.timestamp).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
              });

              return (
                <div
                  key={item.sessionId}
                  className="p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                        item.isPassed
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                      }`}
                    >
                      {item.scorePercentage}%
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 capitalize">
                        {item.config.mode === 'exam' ? 'Mock Board Exam' : 'Practice Review'}
                      </h4>
                      <p className="text-[10px] text-slate-400">
                        {dateStr} • {item.correctCount}/{item.totalQuestions} items correct
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                      item.isPassed
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                    }`}
                  >
                    {item.isPassed ? 'Passed' : 'Failed'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="pt-1 text-center">
        <button
          type="button"
          onClick={() => setIsResetModalOpen(true)}
          className="text-xs text-rose-600 hover:text-rose-700 dark:text-rose-400 font-semibold inline-flex items-center gap-1.5 p-2 tap-target"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Reset Study History & Analytics</span>
        </button>
      </div>

      {isResetModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-sm rounded-xl p-5 text-center space-y-3">
            <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Reset all study progress?
            </h3>
            <p className="text-xs text-slate-500">
              This will clear answered questions, mastery metrics, and quiz history. This action cannot be undone.
            </p>
            <div className="flex gap-2 pt-2">
              <Button
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => setIsResetModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="danger"
                size="md"
                fullWidth
                onClick={() => {
                  setIsResetModalOpen(false);
                  onClearStats();
                }}
              >
                Confirm Reset
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
