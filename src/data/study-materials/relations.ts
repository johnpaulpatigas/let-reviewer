import type { Question, StudyMaterial } from '../../types';
import { ALL_QUESTIONS } from '../questions';
import { ALL_STUDY_MATERIALS } from './index';

/**
 * Returns all questions from the question bank directly related to a given study material.
 * Relationship is evaluated via canonical subjectId and exact/related topic matching.
 */
export function getQuestionsForStudyMaterial(
  material: StudyMaterial,
  allQuestions: Question[] = ALL_QUESTIONS
): Question[] {
  if (!material || !material.subjectId) return [];

  const targetTopics = [material.topic, ...(material.relatedTopics || [])]
    .map((t) => t.toLowerCase().trim());

  // 1. First, search for questions matching both subjectId and target topics
  const topicMatches = allQuestions.filter((q) => {
    if (q.subjectId !== material.subjectId) return false;
    const qTopic = q.topic.toLowerCase().trim();
    return targetTopics.some((t) => t === qTopic || qTopic.includes(t) || t.includes(qTopic));
  });

  if (topicMatches.length > 0) {
    return topicMatches;
  }

  // 2. Fallback: if no specific topic match was found, return questions for the same subject
  return allQuestions.filter((q) => q.subjectId === material.subjectId);
}

/**
 * Returns the count of related questions for a study material dynamically derived from the question bank.
 */
export function getRelatedQuestionCount(
  material: StudyMaterial,
  allQuestions: Question[] = ALL_QUESTIONS
): number {
  return getQuestionsForStudyMaterial(material, allQuestions).length;
}

/**
 * Finds the most relevant study material for a given question's topic or subject.
 */
export function findStudyMaterialForTopic(
  topic: string,
  subjectId?: string,
  materials: StudyMaterial[] = ALL_STUDY_MATERIALS
): StudyMaterial | undefined {
  if (!topic && !subjectId) return undefined;

  const normTopic = (topic || '').toLowerCase().trim();

  // 1. Try exact topic or relatedTopics match
  if (normTopic) {
    const directMatch = materials.find((m) => {
      if (subjectId && m.subjectId !== subjectId) return false;
      const allMaterialTopics = [m.topic, ...(m.relatedTopics || [])].map((t) =>
        t.toLowerCase().trim()
      );
      return allMaterialTopics.includes(normTopic);
    });
    if (directMatch) return directMatch;

    // 2. Try substring or partial keyword match in topic/title
    const partialMatch = materials.find((m) => {
      if (subjectId && m.subjectId !== subjectId) return false;
      const mTopic = m.topic.toLowerCase().trim();
      const mTitle = m.title.toLowerCase().trim();
      return (
        mTopic.includes(normTopic) ||
        normTopic.includes(mTopic) ||
        mTitle.includes(normTopic)
      );
    });
    if (partialMatch) return partialMatch;
  }

  // 3. Fallback to first material for the same subject
  if (subjectId) {
    return materials.find((m) => m.subjectId === subjectId);
  }

  return undefined;
}

/**
 * Helper to get the matching study guide for a specific question.
 */
export function getStudyMaterialForQuestion(
  question: Question,
  materials: StudyMaterial[] = ALL_STUDY_MATERIALS
): StudyMaterial | undefined {
  return findStudyMaterialForTopic(question.topic, question.subjectId, materials);
}
