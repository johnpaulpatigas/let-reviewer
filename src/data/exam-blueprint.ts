import type { SubjectCategory } from '../types';

export interface ExamSectionBlueprint {
  id: string;
  name: string;
  category: SubjectCategory;
  subjectIds: string[];
  weightPercentage: number;
  questionCount: number;
  timeLimitMinutes: number;
  description: string;
}

export interface ExamBlueprint {
  id: string;
  title: string;
  subtitle: string;
  level: 'elementary' | 'secondary' | 'general' | 'professional';
  passingGWA: number; // 75.00%
  minimumDomainScore: number; // 50.00%
  sections: ExamSectionBlueprint[];
  totalQuestions: number;
  totalTimeMinutes: number;
  instructions: string[];
  disclaimer: string;
}

export const OFFICIAL_LET_BLUEPRINTS: Record<string, ExamBlueprint> = {
  'full-let-elementary': {
    id: 'full-let-elementary',
    title: 'Full LET Simulation — Elementary Track',
    subtitle: 'Comprehensive General Education & Professional Education Battery',
    level: 'elementary',
    passingGWA: 75.0,
    minimumDomainScore: 50.0,
    totalQuestions: 100,
    totalTimeMinutes: 100,
    sections: [
      {
        id: 'sec-gen-ed',
        name: 'General Education (GenEd)',
        category: 'gen_ed',
        subjectIds: ['gen-eng', 'gen-fil', 'gen-math', 'gen-sci', 'gen-socsci', 'gen-ict'],
        weightPercentage: 40,
        questionCount: 40,
        timeLimitMinutes: 40,
        description: 'English, Filipino, Mathematics, Natural Sciences, Social Sciences, and Information & Communications Technology.',
      },
      {
        id: 'sec-prof-ed',
        name: 'Professional Education (ProfEd)',
        category: 'prof_ed',
        subjectIds: [
          'prof-foundations',
          'prof-child-dev',
          'prof-principles',
          'prof-assessment',
          'prof-curriculum',
          'prof-edtech',
          'prof-ethics-mgmt',
        ],
        weightPercentage: 60,
        questionCount: 60,
        timeLimitMinutes: 60,
        description: 'Foundations, Child & Adolescent Development, Teaching Methodologies, Assessment of Learning, Curriculum, EdTech, and Ethics.',
      },
    ],
    instructions: [
      'This simulation is designed to approximate the conditions and competency standards of the Licensure Examination for Teachers (LET).',
      'Manage your time carefully: aim for approximately 1 minute per test item.',
      'You can flag questions for later review and navigate back to any item within the examination.',
      'No correct or incorrect feedback will be shown during the exam session.',
      'Your examination will automatically submit when the timer expires.',
      'A General Weighted Average (GWA) of at least 75.00% with no rating below 50.00% is required to pass.',
    ],
    disclaimer:
      'This is an educational practice simulation and is not an official PRC examination. Examination structure and content are aligned with PRC Board for Professional Teachers standards. Refer to official PRC announcements for current schedule and licensing requirements.',
  },

  'full-let-secondary': {
    id: 'full-let-secondary',
    title: 'Full LET Simulation — Secondary Track',
    subtitle: 'General Education & Professional Education Core Battery',
    level: 'secondary',
    passingGWA: 75.0,
    minimumDomainScore: 50.0,
    totalQuestions: 100,
    totalTimeMinutes: 100,
    sections: [
      {
        id: 'sec-gen-ed',
        name: 'General Education (GenEd)',
        category: 'gen_ed',
        subjectIds: ['gen-eng', 'gen-fil', 'gen-math', 'gen-sci', 'gen-socsci', 'gen-ict'],
        weightPercentage: 20,
        questionCount: 40,
        timeLimitMinutes: 40,
        description: 'English, Filipino, Mathematics, Natural Sciences, Social Sciences, and ICT Literacy.',
      },
      {
        id: 'sec-prof-ed',
        name: 'Professional Education (ProfEd)',
        category: 'prof_ed',
        subjectIds: [
          'prof-foundations',
          'prof-child-dev',
          'prof-principles',
          'prof-assessment',
          'prof-curriculum',
          'prof-edtech',
          'prof-ethics-mgmt',
        ],
        weightPercentage: 40,
        questionCount: 60,
        timeLimitMinutes: 60,
        description: 'Educational Foundations, Child Development, Teaching Methods, Assessment, Curriculum, and Teacher Ethics.',
      },
    ],
    instructions: [
      'This simulation covers the General and Professional Education core components required for Secondary Education examinees.',
      'Read all scenario stems and analyze all options before making your selection.',
      'Use the Question Navigator to verify that all questions are answered before submitting.',
      'Answers are locked upon submission and detailed diagnostic analytics will be generated.',
    ],
    disclaimer:
      'This is an educational practice simulation and is not an official PRC examination. Examination structure and content are aligned with PRC Board for Professional Teachers standards.',
  },

  'gen-ed-battery': {
    id: 'gen-ed-battery',
    title: 'General Education Domain Mock Exam',
    subtitle: 'Full 50-Item Timed Battery covering all 6 GenEd Competency Areas',
    level: 'general',
    passingGWA: 75.0,
    minimumDomainScore: 50.0,
    totalQuestions: 50,
    totalTimeMinutes: 50,
    sections: [
      {
        id: 'sec-gen-ed',
        name: 'General Education',
        category: 'gen_ed',
        subjectIds: ['gen-eng', 'gen-fil', 'gen-math', 'gen-sci', 'gen-socsci', 'gen-ict'],
        weightPercentage: 100,
        questionCount: 50,
        timeLimitMinutes: 50,
        description: 'Comprehensive assessment across all 6 General Education subjects.',
      },
    ],
    instructions: [
      'Timed 50-item mock exam covering English, Filipino, Math, Science, Social Sciences, and ICT.',
      'Continuous countdown timer with automatic submission upon expiry.',
      'No midway answer explanations.',
    ],
    disclaimer:
      'Practice simulation aligned with PRC Board for Professional Teachers competencies.',
  },

  'prof-ed-battery': {
    id: 'prof-ed-battery',
    title: 'Professional Education Domain Mock Exam',
    subtitle: 'Full 60-Item Timed Battery covering all 7 ProfEd Pedagogical Competencies',
    level: 'professional',
    passingGWA: 75.0,
    minimumDomainScore: 50.0,
    totalQuestions: 60,
    totalTimeMinutes: 60,
    sections: [
      {
        id: 'sec-prof-ed',
        name: 'Professional Education',
        category: 'prof_ed',
        subjectIds: [
          'prof-foundations',
          'prof-child-dev',
          'prof-principles',
          'prof-assessment',
          'prof-curriculum',
          'prof-edtech',
          'prof-ethics-mgmt',
        ],
        weightPercentage: 100,
        questionCount: 60,
        timeLimitMinutes: 60,
        description: 'Comprehensive pedagogical evaluation across all 7 Professional Education subjects.',
      },
    ],
    instructions: [
      'Timed 60-item mock exam covering Foundations, Theories, Strategies, Assessment, Curriculum, EdTech, and Ethics.',
      'Continuous countdown timer with automatic submission upon expiry.',
      'No midway answer explanations.',
    ],
    disclaimer:
      'Practice simulation aligned with PRC Board for Professional Teachers competencies.',
  },
};
