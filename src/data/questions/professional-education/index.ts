import type { Question } from '../../../types';
import { FOUNDATIONS_QUESTIONS } from './foundations';
import { CHILD_DEVELOPMENT_QUESTIONS } from './child-development';
import { PRINCIPLES_QUESTIONS } from './principles-of-teaching';
import { ASSESSMENT_QUESTIONS } from './assessment';
import { CURRICULUM_QUESTIONS } from './curriculum';
import { EDTECH_QUESTIONS } from './educational-technology';
import { ETHICS_CLASSROOM_QUESTIONS } from './ethics-classroom';

export const ALL_PROF_ED_QUESTIONS: Question[] = [
  ...FOUNDATIONS_QUESTIONS,
  ...CHILD_DEVELOPMENT_QUESTIONS,
  ...PRINCIPLES_QUESTIONS,
  ...ASSESSMENT_QUESTIONS,
  ...CURRICULUM_QUESTIONS,
  ...EDTECH_QUESTIONS,
  ...ETHICS_CLASSROOM_QUESTIONS,
];

export {
  FOUNDATIONS_QUESTIONS,
  CHILD_DEVELOPMENT_QUESTIONS,
  PRINCIPLES_QUESTIONS,
  ASSESSMENT_QUESTIONS,
  CURRICULUM_QUESTIONS,
  EDTECH_QUESTIONS,
  ETHICS_CLASSROOM_QUESTIONS,
};
