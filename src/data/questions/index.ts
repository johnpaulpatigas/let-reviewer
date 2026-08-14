import type { Question, SubjectCategory, Difficulty, QuizConfig } from '../../types';
import { ALL_GEN_ED_QUESTIONS } from './general-education';
import { ALL_PROF_ED_QUESTIONS } from './professional-education';
import { validateQuestionBank } from './validation';
import { assembleQuestionsForConfig, shuffleArray } from '../../utils/examGenerator';

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
 * Builds a tailored set of questions based on a QuizConfig
 */
export function buildQuizQuestions(
  config: QuizConfig,
  bookmarkedIds: string[] = [],
  missedIds: string[] = []
): Question[] {
  return assembleQuestionsForConfig(config, ALL_QUESTIONS, bookmarkedIds, missedIds);
}

export { shuffleArray };
export * from './general-education';
export * from './professional-education';
export * from './validation';
