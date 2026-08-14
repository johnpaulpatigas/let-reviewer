import type { Question } from '../../types';

export interface ValidationReport {
  isValid: boolean;
  totalQuestions: number;
  duplicateIds: string[];
  duplicateQuestions: string[];
  invalidAnswerIndices: string[];
  invalidChoiceCounts: string[];
  missingExplanations: string[];
}

/**
 * Validates the entire question bank to ensure:
 * 1. All Question IDs are completely unique.
 * 2. No duplicate question texts exist.
 * 3. Every question has exactly 4 choices.
 * 4. Every question answer is a valid index (0, 1, 2, 3).
 * 5. Every question has a non-empty explanation.
 */
export function validateQuestionBank(questions: Question[]): ValidationReport {
  const seenIds = new Set<string>();
  const duplicateIds: string[] = [];

  const seenQuestions = new Set<string>();
  const duplicateQuestions: string[] = [];

  const invalidAnswerIndices: string[] = [];
  const invalidChoiceCounts: string[] = [];
  const missingExplanations: string[] = [];

  for (const q of questions) {
    // Check ID uniqueness
    if (seenIds.has(q.id)) {
      duplicateIds.push(q.id);
    }
    seenIds.add(q.id);

    // Normalize question text to catch near-duplicates
    const normalizedText = q.question.toLowerCase().trim().replace(/\s+/g, ' ');
    if (seenQuestions.has(normalizedText)) {
      duplicateQuestions.push(q.id);
    }
    seenQuestions.add(normalizedText);

    // Check choice length
    if (!q.choices || q.choices.length !== 4) {
      invalidChoiceCounts.push(q.id);
    }

    // Check answer bounds
    if (typeof q.answer !== 'number' || q.answer < 0 || q.answer > 3) {
      invalidAnswerIndices.push(q.id);
    }

    // Check explanation presence
    if (!q.explanation || q.explanation.trim().length < 10) {
      missingExplanations.push(q.id);
    }
  }

  const isValid =
    duplicateIds.length === 0 &&
    duplicateQuestions.length === 0 &&
    invalidAnswerIndices.length === 0 &&
    invalidChoiceCounts.length === 0 &&
    missingExplanations.length === 0;

  return {
    isValid,
    totalQuestions: questions.length,
    duplicateIds,
    duplicateQuestions,
    invalidAnswerIndices,
    invalidChoiceCounts,
    missingExplanations,
  };
}
