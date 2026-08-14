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
        heading: '2. Classic Arithmetic & Percentage Applications',
        paragraphs: [
          'Percentage Formula: Percentage = Base × Rate (P = B × R).',
          'Successive Discounts: Discounts are applied sequentially, not added together. A 20% discount followed by a 5% loyalty discount results in: Price × 0.80 × 0.95 = 0.76 (24% total discount, not 25%).',
          'Simple Interest: Interest = Principal × Rate × Time (I = Prt).',
        ],
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
        definition: 'Least Common Multiple; the smallest positive integer divisible by all numbers in the set.',
      },
    ],
    letTips: [
      'In successive discount questions, calculate each discount on the newly reduced price step by step.',
      'Remember that prime numbers have exactly two distinct factors (1 and itself). 1 is neither prime nor composite.',
    ],
    summaryPoints: [
      'GCF is for partitioning; LCM is for synchronizing cycles.',
      'Simple Interest is computed using I = Prt.',
      'Successive discounts are multiplicative, not additive.',
    ],
  },
  {
    id: 'mat-gen-math-002',
    slug: 'algebra-and-linear-equations',
    title: 'Algebra, Linear Equations, Quadratics, and Word Problems',
    subjectId: 'gen-math',
    subjectName: 'Mathematics',
    category: 'gen_ed',
    topic: 'Algebra & Linear Equations',
    relatedTopics: ['Number Theory & Arithmetic', 'Geometry & Measurement'],
    description: 'Solving linear equations, consecutive integer problems, quadratic equations factoring, systems of linear equations, and age word problems.',
    readTimeMinutes: 7,
    overview:
      'Algebra in the LET tests equation solving, translating verbal statements into mathematical symbols, and manipulating algebraic expressions and polynomials.',
    sections: [
      {
        heading: '1. Consecutive Integers and Age Problems',
        paragraphs: [
          'Consecutive Integers: Let integers be x, x+1, x+2. For consecutive ODD or EVEN integers: x, x+2, x+4.',
          'Age Word Problems: Construct a Past-Present-Future matrix. If a father is currently 3 times as old as his son (F = 3s), in 12 years: F + 12 = 3s + 12 and Son = s + 12.',
        ],
        example: {
          scenario: 'The sum of three consecutive odd integers is 87. Find the largest integer.',
          analysis: 'x + (x+2) + (x+4) = 87 -> 3x + 6 = 87 -> 3x = 81 -> x = 27. The numbers are 27, 29, and 31. The largest is 31.',
        },
      },
      {
        heading: '2. Factoring and Solving Quadratic Equations',
        paragraphs: [
          'Standard Quadratic Form: ax² + bx + c = 0.',
          'Factoring: Look for two factors of c whose sum equals b.',
          'Difference of Two Squares: a² - b² = (a - b)(a + b).',
          'Square of a Binomial: (a ± b)² = a² ± 2ab + b².',
        ],
        example: {
          scenario: 'Solve x² - 7x + 12 = 0.',
          analysis: 'Find factors of +12 that add to -7: (-3) and (-4). Factors: (x - 3)(x - 4) = 0 -> Roots: x = 3 and x = 4.',
        },
      },
      {
        heading: '3. Laws of Exponents',
        paragraphs: [
          'Product Rule: xᵃ × xᵇ = xᵃ⁺ᵇ.',
          'Quotient Rule: xᵃ / xᵇ = xᵃ⁻ᵇ.',
          'Power of a Power: (xᵃ)ᵇ = xᵃᵇ.',
          'Negative Exponent: x⁻ⁿ = 1 / xⁿ.',
          'Zero Exponent: x⁰ = 1 (for x ≠ 0).',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Linear Equation',
        definition: 'An algebraic equation of degree 1 producing a straight line on a Cartesian plane.',
      },
      {
        term: 'Roots',
        definition: 'The values of the variable that satisfy the equation and make it equal to zero.',
      },
    ],
    letTips: [
      'When simplifying exponents with coefficients like (2x²)³, remember to cube the coefficient 2 as well: 2³ × x⁶ = 8x⁶.',
      'Check answers by plugging candidate values back into the original word problem.',
    ],
    summaryPoints: [
      'Translate word problems into structured mathematical models.',
      'Factor quadratics by identifying sum-product pairs.',
      'Apply exponent laws systematically across coefficients and variables.',
    ],
  },
  {
    id: 'mat-gen-math-003',
    slug: 'geometry-measurement-and-polygons',
    title: 'Geometry, Polygon Properties, Pythagorean Theorem, and Measurement',
    subjectId: 'gen-math',
    subjectName: 'Mathematics',
    category: 'gen_ed',
    topic: 'Geometry & Measurement',
    relatedTopics: ['Number Theory & Arithmetic', 'Algebra & Linear Equations'],
    description: 'Formulas and properties for perimeter, area, volume (cylinders, spheres, prisms), angle relationships, and regular polygon interior angle sums.',
    readTimeMinutes: 7,
    overview:
      'Geometry questions in the LET test spatial reasoning, application of geometric theorems (Pythagorean theorem, polygon angle sums), and volume/surface area computations.',
    sections: [
      {
        heading: '1. Pythagorean Theorem and Special Triangles',
        paragraphs: [
          'Pythagorean Theorem: In any right triangle, a² + b² = c², where c is the hypotenuse opposite the 90° angle.',
          'Common Pythagorean Triples: (3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17), (9, 40, 41) and their multiples (e.g., 6, 8, 10; 9, 12, 15).',
        ],
        example: {
          scenario: 'A rectangular field has length 15 m and width 8 m. What is the diagonal distance across?',
          analysis: 'd² = 15² + 8² = 225 + 64 = 289 -> d = √289 = 17 meters.',
        },
      },
      {
        heading: '2. Polygon Interior and Exterior Angles',
        paragraphs: [
          'Sum of Interior Angles of an n-sided polygon: S = (n - 2) × 180°.\n- Triangle (n=3): 180°\n- Quadrilateral (n=4): 360°\n- Pentagon (n=5): 540°\n- Hexagon (n=6): 720°\n- Octagon (n=8): 1,080°',
          'Each Interior Angle of a REGULAR Polygon: [(n - 2) × 180°] / n.',
          'Sum of Exterior Angles of ANY convex polygon is always 360°.',
        ],
      },
      {
        heading: '3. Area and Volume Formulas Quick Reference',
        paragraphs: [
          'Essential area and solid geometry volume formulas.',
        ],
        comparisonTable: {
          headers: ['Geometric Figure', 'Area Formula', 'Volume Formula'],
          rows: [
            ['Triangle', 'A = 1/2 × base × height', 'N/A (2D figure)'],
            ['Circle / Cylinder', 'Circle Area = πr²', 'Cylinder Volume = πr²h'],
            ['Sphere', 'Surface Area = 4πr²', 'Sphere Volume = 4/3 πr³'],
            ['Cone', 'Base Area = πr²', 'Cone Volume = 1/3 πr²h'],
            ['Trapezoid', 'A = 1/2 × (b₁ + b₂) × h', 'N/A (2D figure)'],
          ],
        },
      },
    ],
    keyTerms: [
      {
        term: 'Complementary Angles',
        definition: 'Two angles whose measures sum to exactly 90 degrees.',
      },
      {
        term: 'Supplementary Angles',
        definition: 'Two angles whose measures sum to exactly 180 degrees.',
      },
    ],
    letTips: [
      'Recognizing Pythagorean triples (3-4-5 and 8-15-17) saves valuable calculation time during exams.',
      'Remember that complementary angles sum to 90° while supplementary angles sum to 180°.',
    ],
    summaryPoints: [
      'Pythagorean theorem applies to right triangles (a² + b² = c²).',
      'Polygon interior angle sum is given by (n - 2) × 180°.',
      'Cylinder volume is πr²h; cone volume is 1/3 πr²h.',
    ],
  },
  {
    id: 'mat-gen-math-004',
    slug: 'statistics-probability-and-combinatorics',
    title: 'Statistics, Probability, Permutations, and Combinations',
    subjectId: 'gen-math',
    subjectName: 'Mathematics',
    category: 'gen_ed',
    topic: 'Statistics & Probability',
    relatedTopics: ['Number Theory & Arithmetic', 'Algebra & Linear Equations'],
    description: 'Measures of central tendency (mean, median, mode), permutations vs. combinations, probability rules, and data dispersion.',
    readTimeMinutes: 7,
    overview:
      'Statistics and probability items test data analysis, calculating mean/median/mode from raw datasets, computing theoretical probabilities of compound events, and choosing between combinations and permutations.',
    sections: [
      {
        heading: '1. Measures of Central Tendency',
        paragraphs: [
          'Mean (Arithmetic Average): Sum of all scores divided by the number of observations (x̄ = Σx / n).',
          'Median (Middle Value): The physical middle value after arranging scores in ascending order. If n is even, median is the average of the two middle scores.',
          'Mode: The score that occurs most frequently in the dataset.',
        ],
      },
      {
        heading: '2. Permutations vs. Combinations',
        paragraphs: [
          'Permutations: ORDER MATTERS (e.g., arrangements in a line, rankings, officer elections, lock combinations). Formula: P(n, r) = n! / (n - r)!',
          'Combinations: ORDER DOES NOT MATTER (e.g., forming a committee, selecting team members, choosing cards). Formula: C(n, r) = n! / [r! × (n - r)!]',
        ],
        comparisonTable: {
          headers: ['Concept', 'Order Relevance', 'Sample Problem', 'Formula'],
          rows: [
            ['Permutation', 'Order Matters', 'Arranging 5 students in a line for a photo', '5! = 120 ways'],
            ['Combination', 'Order Does Not Matter', 'Selecting a committee of 3 from 8 teachers', 'C(8,3) = (8×7×6)/(3×2×1) = 56 ways'],
          ],
        },
      },
      {
        heading: '3. Probability Fundamentals',
        paragraphs: [
          'Probability of an Event: P(E) = Number of Favorable Outcomes / Total Possible Outcomes.',
          'Mutually Exclusive Events: P(A or B) = P(A) + P(B).',
          'Independent Events: P(A and B) = P(A) × P(B).',
        ],
        example: {
          scenario: 'A standard pair of 6-sided dice is rolled. What is the probability of rolling a sum of 7?',
          analysis: 'Total outcomes = 6 × 6 = 36. Favorable outcomes summing to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> 6 outcomes. P(7) = 6/36 = 1/6.',
        },
      },
    ],
    keyTerms: [
      {
        term: 'Permutation',
        definition: 'An arrangement of objects in a specific, definite order.',
      },
      {
        term: 'Combination',
        definition: 'A selection of items where the order of selection does not matter.',
      },
    ],
    letTips: [
      'Ask: Does changing the order create a new outcome? If yes -> Permutation; if no -> Combination.',
      'Always sort scores in ascending order before locating the median.',
    ],
    summaryPoints: [
      'Median is the middle score in an ordered dataset.',
      'Use permutations when order is significant and combinations when grouping items.',
      'Probability of an event ranges from 0 (impossible) to 1 (certain).',
    ],
  },
];
