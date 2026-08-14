import type { StudyMaterial } from '../../../types';
import { ENGLISH_STUDY_MATERIALS } from './english';
import { FILIPINO_STUDY_MATERIALS } from './filipino';
import { MATHEMATICS_STUDY_MATERIALS } from './mathematics';
import { SCIENCE_STUDY_MATERIALS } from './science';
import { SOCIAL_STUDIES_STUDY_MATERIALS } from './social-studies';
import { ICT_STUDY_MATERIALS } from './ict';

export const ALL_GEN_ED_STUDY_MATERIALS: StudyMaterial[] = [
  ...ENGLISH_STUDY_MATERIALS,
  ...FILIPINO_STUDY_MATERIALS,
  ...MATHEMATICS_STUDY_MATERIALS,
  ...SCIENCE_STUDY_MATERIALS,
  ...SOCIAL_STUDIES_STUDY_MATERIALS,
  ...ICT_STUDY_MATERIALS,
];

export * from './english';
export * from './filipino';
export * from './mathematics';
export * from './science';
export * from './social-studies';
export * from './ict';
