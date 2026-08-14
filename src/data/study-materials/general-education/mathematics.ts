import type { StudyMaterial } from '../../../types';

export const MATHEMATICS_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-gen-math-001',
    slug: 'number-theory-and-algebraic-problem-solving',
    title: 'Number Theory, GCF/LCM, and Algebraic Problem Solving',
    subjectId: 'gen-math',
    subjectName: 'Mathematics',
    category: 'gen_ed',
    topic: 'Number Theory & Arithmetic',
    relatedTopics: ['Algebra & Linear Equations', 'Statistics & Probability', 'Geometry & Measurement'],
    description: 'Divisibility rules, prime factorization, Greatest Common Factor (GCF), Least Common Multiple (LCM), and rate/work word problems.',
    readTimeMinutes: 7,
    overview:
      'General Education Mathematics tests fundamental numerical relationships, operational proficiency, and practical algebraic problem solving (work, age, and mixture problems).',
    sections: [
      {
        heading: '1. Greatest Common Factor (GCF) vs. Least Common Multiple (LCM)',
        paragraphs: [
          'GCF (Greatest Common Divisor): The largest integer that divides each of the numbers without a remainder. Used when dividing items into identical groups or packages.',
          'LCM (Least Common Multiple): The smallest positive integer that is a multiple of two or more numbers. Used when finding when two recurring events will happen simultaneously again.',
        ],
        example: {
          scenario: 'Find the GCF and LCM of 24 and 36.',
          analysis:
            'Prime factorization: 24 = 2³ × 3; 36 = 2² × 3².\nGCF = lowest common powers = 2² × 3¹ = 12.\nLCM = highest powers of all factors = 2³ × 3² = 8 × 9 = 72.',
        },
        keyConcept:
          'GCF is used when partitioning into equal groups. LCM is used when coordinating periodic cycles (e.g. flashing lights, synchronized bells).',
      },
      {
        heading: '2. Classic Algebraic Word Problems',
        paragraphs: [
          'Work Problems: Formula: 1/A + 1/B = 1/T, where A is the time Person A takes alone, B is the time Person B takes alone, and T is the combined time working together.',
          'Age Problems: Set up a variable table for Past, Present, and Future ages based on given relationships.',
          'Percentage, Base, and Rate: Formula: Percentage = Base × Rate (P = B × R).',
        ],
        example: {
          scenario:
            'Ana can paint a room in 4 hours. Bea can paint the same room in 6 hours. How long will it take them to paint the room working together?',
          analysis:
            '1/4 + 1/6 = 1/T\n3/12 + 2/12 = 5/12\n1/T = 5/12 => T = 12/5 = 2.4 hours (or 2 hours and 24 minutes).',
        },
      },
      {
        heading: '3. Divisibility Rules Quick Reference',
        paragraphs: [
          'Divisible by 3: Sum of the digits is divisible by 3.',
          'Divisible by 4: Last two digits form a number divisible by 4.',
          'Divisible by 6: Number is divisible by BOTH 2 (even) and 3 (digit sum).',
          'Divisible by 9: Sum of the digits is divisible by 9.',
          'Divisible by 11: Alternating sum of digits is 0 or a multiple of 11.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'GCF',
        definition: 'Greatest Common Factor; the largest number that divides evenly into a set of numbers.',
      },
      {
        term: 'LCM',
        definition: 'Least Common Multiple; the smallest number that is a multiple of all numbers in a set.',
      },
      {
        term: 'Work Equation',
        definition: '1/A + 1/B = 1/T, representing combined rate of cooperative work.',
      },
    ],
    letTips: [
      'For two workers with individual times A and B, combined time T can be quickly computed as (A × B) / (A + B). E.g., (4 × 6) / (4 + 6) = 24 / 10 = 2.4 hours.',
      'In probability, "AND" means MULTIPLY probabilities; "OR" means ADD probabilities (subtracting overlaps).',
    ],
    commonMistakes: [
      'Averaging the two work times: (4 + 6) / 2 = 5 hours. Two people working together must finish FASTER than the fastest individual (less than 4 hours).',
    ],
    summaryPoints: [
      'GCF is for grouping and division; LCM is for cycles and repetitions.',
      'Combined work formula: T = (A × B) / (A + B).',
      'Divisibility by 3/9 depends on digit sums; divisibility by 6 requires meeting both 2 and 3 rules.',
    ],
  },
];
