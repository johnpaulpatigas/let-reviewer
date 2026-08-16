import type { UserStudyStats, Subject } from '../types';
import { SUBJECTS } from '../data/subjects';
import { ALL_QUESTIONS } from '../data/questions';

export interface SubjectMasteryProgress {
  subject: Subject;
  answered: number;
  correct: number;
  percentage: number;
}

export interface DomainProgressStats {
  answered: number;
  correct: number;
  percentage: number;
}

export interface ComputedStudyStats {
  totalAnswered: number;
  totalCorrect: number;
  totalQuestionsInBank: number;
  overallAccuracy: number;
  isPassing: boolean;
  subjectsStudiedCount: number;
  totalSubjectsCount: number;
  genEdStats: DomainProgressStats;
  profEdStats: DomainProgressStats;
  subjectMasteryList: SubjectMasteryProgress[];
  weakSubjects: SubjectMasteryProgress[];
  mockExamsCount: number;
  totalSessionsCount: number;
}

export function computeStudyStats(stats: UserStudyStats): ComputedStudyStats {
  const totalAnswered = stats.totalAnswered || 0;
  const totalCorrect = stats.totalCorrect || 0;
  const totalQuestionsInBank = ALL_QUESTIONS.length;
  const overallAccuracy =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const isPassing = overallAccuracy >= 75;

  const genEdSubjects = SUBJECTS.filter((s) => s.category === 'gen_ed');
  const profEdSubjects = SUBJECTS.filter((s) => s.category === 'prof_ed');

  const computeDomain = (subjects: Subject[]): DomainProgressStats => {
    let answered = 0;
    let correct = 0;
    subjects.forEach((s) => {
      const sub = stats.subjectMastery[s.id];
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

  const genEdStats = computeDomain(genEdSubjects);
  const profEdStats = computeDomain(profEdSubjects);

  const subjectMasteryList: SubjectMasteryProgress[] = SUBJECTS.map((sub) => {
    const stat = stats.subjectMastery[sub.id];
    const answered = stat ? stat.answered : 0;
    const correct = stat ? stat.correct : 0;
    const percentage = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    return {
      subject: sub,
      answered,
      correct,
      percentage,
    };
  });

  const subjectsStudiedCount = subjectMasteryList.filter((s) => s.answered > 0).length;

  const weakSubjects = subjectMasteryList
    .filter((s) => s.answered >= 3 && s.percentage < 75)
    .sort((a, b) => a.percentage - b.percentage);

  const mockExamsCount = (stats.quizHistory || []).filter(
    (q) => q.config.mode === 'exam'
  ).length;
  const totalSessionsCount = (stats.quizHistory || []).length;

  return {
    totalAnswered,
    totalCorrect,
    totalQuestionsInBank,
    overallAccuracy,
    isPassing,
    subjectsStudiedCount,
    totalSubjectsCount: SUBJECTS.length,
    genEdStats,
    profEdStats,
    subjectMasteryList,
    weakSubjects,
    mockExamsCount,
    totalSessionsCount,
  };
}
