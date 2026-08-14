import type { Question, QuizConfig } from '../types';
import { OFFICIAL_LET_BLUEPRINTS, type ExamBlueprint } from '../data/exam-blueprint';

/**
 * Fisher-Yates shuffle array algorithm
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
 * Generate questions for a structured LET examination simulation based on blueprint
 */
export function generateQuestionsFromBlueprint(
  blueprint: ExamBlueprint,
  allQuestions: Question[]
): Question[] {
  const resultQuestions: Question[] = [];
  const selectedIds = new Set<string>();

  blueprint.sections.forEach((section) => {
    // Filter questions belonging to this section's subjects
    const sectionPool = allQuestions.filter(
      (q) => section.subjectIds.includes(q.subjectId) && !selectedIds.has(q.id)
    );

    // Calculate per-subject allocation to ensure equal and balanced coverage
    const perSubjectTarget = Math.max(1, Math.floor(section.questionCount / section.subjectIds.length));
    const sectionSelected: Question[] = [];

    section.subjectIds.forEach((subId) => {
      const subjectPool = shuffleArray(sectionPool.filter((q) => q.subjectId === subId));
      const needed = perSubjectTarget;
      const picked = subjectPool.slice(0, needed);
      picked.forEach((q) => {
        sectionSelected.push(q);
        selectedIds.add(q.id);
      });
    });

    // If section hasn't met the target question count, fill from remaining pool in section
    if (sectionSelected.length < section.questionCount) {
      const remainingPool = shuffleArray(
        sectionPool.filter((q) => !selectedIds.has(q.id))
      );
      const needed = section.questionCount - sectionSelected.length;
      remainingPool.slice(0, needed).forEach((q) => {
        sectionSelected.push(q);
        selectedIds.add(q.id);
      });
    }

    resultQuestions.push(...shuffleArray(sectionSelected));
  });

  return resultQuestions;
}

/**
 * Assemble questions for any QuizConfig (practice, domain drill, or full exam)
 */
export function assembleQuestionsForConfig(
  config: QuizConfig,
  allQuestions: Question[],
  bookmarkedIds: string[] = [],
  missedIds: string[] = []
): Question[] {
  // Check if a specific blueprint preset is requested
  if (config.blueprintId && OFFICIAL_LET_BLUEPRINTS[config.blueprintId]) {
    return generateQuestionsFromBlueprint(
      OFFICIAL_LET_BLUEPRINTS[config.blueprintId],
      allQuestions
    );
  }

  let pool = [...(allQuestions || [])];

  // Filter by bookmarked
  if (config.includeOnlyBookmarked) {
    const bookmarkedSet = new Set(bookmarkedIds);
    pool = pool.filter((q) => bookmarkedSet.has(q.id));
  }

  // Filter by missed / incorrect
  if (config.includeOnlyIncorrect) {
    const missedSet = new Set(missedIds);
    pool = pool.filter((q) => missedSet.has(q.id));
  }

  // Filter by category
  if (config.category && config.category !== 'all') {
    pool = pool.filter((q) => q.category === config.category);
  }

  // Filter by subjects
  if (config.subjectIds && config.subjectIds.length > 0) {
    const subjectSet = new Set(config.subjectIds);
    pool = pool.filter((q) => subjectSet.has(q.subjectId));
  }

  // Filter by topic
  if (config.topic) {
    pool = pool.filter((q) => q.topic.toLowerCase() === config.topic!.toLowerCase());
  }

  // Filter by difficulty
  if (config.difficulty && config.difficulty !== 'all') {
    pool = pool.filter((q) => q.difficulty === config.difficulty);
  }

  const shuffled = shuffleArray(pool);
  return shuffled.slice(0, Math.min(config.questionCount, shuffled.length));
}
