import type { StudyMaterial, SubjectCategory } from '../../types';
import { ALL_GEN_ED_STUDY_MATERIALS } from './general-education';
import { ALL_PROF_ED_STUDY_MATERIALS } from './professional-education';

export const ALL_STUDY_MATERIALS: StudyMaterial[] = [
  ...ALL_GEN_ED_STUDY_MATERIALS,
  ...ALL_PROF_ED_STUDY_MATERIALS,
];

/**
 * Get a study material by ID
 */
export function getStudyMaterialById(id: string): StudyMaterial | undefined {
  return ALL_STUDY_MATERIALS.find((m) => m.id === id);
}

/**
 * Get a study material by URL slug
 */
export function getStudyMaterialBySlug(slug: string): StudyMaterial | undefined {
  return ALL_STUDY_MATERIALS.find((m) => m.slug === slug);
}

/**
 * Get all study materials for a specific subject ID
 */
export function getStudyMaterialsBySubject(subjectId: string): StudyMaterial[] {
  return ALL_STUDY_MATERIALS.filter((m) => m.subjectId === subjectId);
}

/**
 * Get all study materials for a domain category ('gen_ed' | 'prof_ed')
 */
export function getStudyMaterialsByCategory(category: SubjectCategory): StudyMaterial[] {
  return ALL_STUDY_MATERIALS.filter((m) => m.category === category);
}

/**
 * Search study materials by text query
 */
export function searchStudyMaterials(query: string): StudyMaterial[] {
  const q = query.toLowerCase().trim();
  if (!q) return ALL_STUDY_MATERIALS;

  return ALL_STUDY_MATERIALS.filter(
    (m) =>
      m.title.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      m.subjectName.toLowerCase().includes(q) ||
      m.topic.toLowerCase().includes(q) ||
      m.overview.toLowerCase().includes(q) ||
      m.keyTerms?.some((kt) => kt.term.toLowerCase().includes(q) || kt.definition.toLowerCase().includes(q))
  );
}

export * from './general-education';
export * from './professional-education';
export * from './relations';
