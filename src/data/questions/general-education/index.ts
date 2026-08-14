import type { Question } from '../../../types';
import { ENGLISH_QUESTIONS } from './english';
import { FILIPINO_QUESTIONS } from './filipino';
import { MATHEMATICS_QUESTIONS } from './mathematics';
import { SCIENCE_QUESTIONS } from './science';
import { SOCIAL_STUDIES_QUESTIONS } from './social-studies';
import { ICT_QUESTIONS } from './ict';

export const ALL_GEN_ED_QUESTIONS: Question[] = [
  ...ENGLISH_QUESTIONS,
  ...FILIPINO_QUESTIONS,
  ...MATHEMATICS_QUESTIONS,
  ...SCIENCE_QUESTIONS,
  ...SOCIAL_STUDIES_QUESTIONS,
  ...ICT_QUESTIONS,
];

export {
  ENGLISH_QUESTIONS,
  FILIPINO_QUESTIONS,
  MATHEMATICS_QUESTIONS,
  SCIENCE_QUESTIONS,
  SOCIAL_STUDIES_QUESTIONS,
  ICT_QUESTIONS,
};
