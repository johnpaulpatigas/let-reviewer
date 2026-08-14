import type { StudyMaterial } from '../../../types';
import { ASSESSMENT_STUDY_MATERIALS } from './assessment';
import { CHILD_DEV_STUDY_MATERIALS } from './child-development';
import { FOUNDATIONS_STUDY_MATERIALS } from './foundations';
import { PRINCIPLES_TEACHING_STUDY_MATERIALS } from './principles-of-teaching';
import { CURRICULUM_STUDY_MATERIALS } from './curriculum';
import { EDTECH_STUDY_MATERIALS } from './educational-technology';
import { ETHICS_CLASSROOM_STUDY_MATERIALS } from './ethics-classroom';

export const ALL_PROF_ED_STUDY_MATERIALS: StudyMaterial[] = [
  ...ASSESSMENT_STUDY_MATERIALS,
  ...CHILD_DEV_STUDY_MATERIALS,
  ...FOUNDATIONS_STUDY_MATERIALS,
  ...PRINCIPLES_TEACHING_STUDY_MATERIALS,
  ...CURRICULUM_STUDY_MATERIALS,
  ...EDTECH_STUDY_MATERIALS,
  ...ETHICS_CLASSROOM_STUDY_MATERIALS,
];

export * from './assessment';
export * from './child-development';
export * from './foundations';
export * from './principles-of-teaching';
export * from './curriculum';
export * from './educational-technology';
export * from './ethics-classroom';
