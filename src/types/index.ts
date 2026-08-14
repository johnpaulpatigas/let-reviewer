export type SubjectCategory = 'gen_ed' | 'prof_ed';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Subject {
  id: string;
  name: string;
  category: SubjectCategory;
  description: string;
  iconName: string;
  colorScheme: {
    bg: string;
    text: string;
    border: string;
    badge: string;
  };
  topics: string[];
}

export interface Question {
  id: string;
  subjectId: string;
  subjectName: string;
  category: SubjectCategory;
  topic: string;
  question: string;
  choices: string[];
  answer: number; // 0, 1, 2, 3 index
  explanation: string;
  difficulty: Difficulty;
}

export interface UserAnswer {
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpentSeconds?: number;
  flagged?: boolean;
}

export type QuizMode = 'practice' | 'exam' | 'topic_drill';

export interface QuizConfig {
  mode: QuizMode;
  subjectIds: string[];
  category?: SubjectCategory | 'all';
  topic?: string;
  questionCount: number;
  timeLimitMinutes?: number; // null or undefined for untimed
  includeOnlyBookmarked?: boolean;
  includeOnlyIncorrect?: boolean;
}

export interface QuizSession {
  id: string;
  config: QuizConfig;
  questions: Question[];
  currentIndex: number;
  answers: Record<string, UserAnswer>;
  flaggedIds: Set<string>;
  timeRemainingSeconds: number | null;
  isCompleted: boolean;
  startedAt: number;
  completedAt?: number;
}

export interface SubjectScoreBreakdown {
  subjectId: string;
  subjectName: string;
  total: number;
  correct: number;
  percentage: number;
}

export interface QuizResult {
  sessionId: string;
  config: QuizConfig;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  scorePercentage: number;
  isPassed: boolean; // PRC passing mark is 75%
  timeSpentSeconds: number;
  subjectBreakdown: SubjectScoreBreakdown[];
  answers: Record<string, UserAnswer>;
  questions: Question[];
  timestamp: number;
}

export interface UserStudyStats {
  totalAnswered: number;
  totalCorrect: number;
  streakDays: number;
  lastStudyDate: string; // YYYY-MM-DD
  subjectMastery: Record<string, { answered: number; correct: number }>;
  bookmarkedQuestionIds: string[];
  missedQuestionIds: string[];
  quizHistory: QuizResult[];
}

export type NavigationTab = 'home' | 'subjects' | 'quiz' | 'bank' | 'progress';
