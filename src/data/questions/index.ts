import type { Question, SubjectCategory, Difficulty, QuizConfig } from '../../types';
import { ALL_GEN_ED_QUESTIONS } from './general-education';
import { ALL_PROF_ED_QUESTIONS } from './professional-education';
import { validateQuestionBank } from './validation';

export const ALL_QUESTIONS: Question[] = [
  ...ALL_GEN_ED_QUESTIONS,
  ...ALL_PROF_ED_QUESTIONS,
];

// Perform runtime check to ensure data integrity during development
const validation = validateQuestionBank(ALL_QUESTIONS);
if (!validation.isValid && import.meta.env.DEV) {
  console.warn('[Question Bank Validation Issues]:', validation);
}

/**
 * Get all questions for a specific subject
 */
export function getQuestionsBySubject(subjectId: string): Question[] {
  return ALL_QUESTIONS.filter((q) => q.subjectId === subjectId);
}

/**
 * Get all questions for a category (gen_ed or prof_ed)
 */
export function getQuestionsByCategory(category: SubjectCategory): Question[] {
  return ALL_QUESTIONS.filter((q) => q.category === category);
}

/**
 * Get questions by difficulty rating
 */
export function getQuestionsByDifficulty(difficulty: Difficulty): Question[] {
  return ALL_QUESTIONS.filter((q) => q.difficulty === difficulty);
}

/**
 * Get a specific question by ID
 */
export function getQuestionById(id: string): Question | undefined {
  return ALL_QUESTIONS.find((q) => q.id === id);
}

/**
 * Shuffles an array randomly using Fisher-Yates algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Builds a tailored set of questions based on a QuizConfig
 */
export function buildQuizQuestions(
  config: QuizConfig,
  bookmarkedIds: string[] = [],
  missedIds: string[] = []
): Question[] {
  let pool: Question[] = [...ALL_QUESTIONS];

  // Filter by subject IDs if selected
  if (config.subjectIds && config.subjectIds.length > 0) {
    pool = pool.filter((q) => config.subjectIds.includes(q.subjectId));
  } else if (config.category && config.category !== 'all') {
    pool = pool.filter((q) => q.category === config.category);
  }

  // Filter by specific topic if provided
  if (config.topic) {
    pool = pool.filter((q) => q.topic === config.topic);
  }

  // Filter by difficulty if provided
  if (config.difficulty && config.difficulty !== 'all') {
    pool = pool.filter((q) => q.difficulty === config.difficulty);
  }

  // Filter by bookmarks or missed questions
  if (config.includeOnlyBookmarked) {
    pool = pool.filter((q) => bookmarkedIds.includes(q.id));
  } else if (config.includeOnlyIncorrect) {
    pool = pool.filter((q) => missedIds.includes(q.id));
  }

  // Shuffle the pool for variety
  const randomized = shuffleArray(pool);

  // Return requested count, or all available if pool is smaller
  return randomized.slice(0, Math.min(config.questionCount, randomized.length));
}

export * from './general-education';
export * from './professional-education';
export * from './validation';
