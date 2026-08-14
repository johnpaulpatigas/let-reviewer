import type { StudyMaterial } from '../../../types';

export const ASSESSMENT_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-prof-assess-001',
    slug: 'types-of-assessment-formative-summative-diagnostic',
    title: 'Types of Assessment: Diagnostic, Formative, Summative, and Evaluative',
    subjectId: 'prof-assessment',
    subjectName: 'Assessment of Learning',
    category: 'prof_ed',
    topic: 'Types of Assessment',
    relatedTopics: ['Alternative & Authentic Assessment'],
    description: 'Comprehensive guide distinguishing assessment FOR, OF, and AS learning with clinical classroom indicators.',
    readTimeMinutes: 6,
    overview:
      'In educational measurement, assessment is categorized according to its timing, purpose, and impact on instructional decision-making. Mastery of these distinctions is crucial for the LET.',
    sections: [
      {
        heading: '1. The Assessment Framework: FOR, OF, and AS Learning',
        paragraphs: [
          'Assessment is not merely a grading mechanism at the end of a unit. Modern pedagogy classifies assessment into three distinct relational paradigms:',
          'Assessment FOR Learning occurs during instruction to guide and adapt teaching strategies. It provides immediate descriptive feedback rather than evaluative judgment.',
          'Assessment OF Learning is administered at conclusion points to determine competency mastery, certify achievement, and assign grades.',
          'Assessment AS Learning positions the student as the active assessor. Students monitor their own metacognition, self-assess against rubrics, and adjust their personal learning paths.',
        ],
        bulletPoints: [
          'Assessment FOR Learning: Diagnostic (pre-test) & Formative (seatwork, drills, exit tickets, checks for understanding).',
          'Assessment OF Learning: Summative (periodical exams, unit mastery tests, national standardized exams like NAT).',
          'Assessment AS Learning: Self-assessment, peer critique, reflective journals, learning logs.',
        ],
        keyConcept:
          'Formative assessment is strictly developmental. It is conducted during the learning process to modify teaching and learning activities while they are happening.',
      },
      {
        heading: '2. Diagnostic vs. Formative vs. Summative',
        paragraphs: [
          'Understanding when each assessment type occurs and how its results are utilized prevents common classroom measurement errors:',
        ],
        comparisonTable: {
          headers: ['Dimension', 'Diagnostic Assessment', 'Formative Assessment', 'Summative Assessment'],
          rows: [
            ['Timing', 'Prior to instruction', 'During instruction (ongoing)', 'After instruction / End of unit'],
            ['Primary Purpose', 'Identify prior knowledge, misconceptions, and entry skills', 'Provide continuous feedback to improve learning and modify teaching', 'Determine level of achievement and assign grades/credits'],
            ['Grading', 'Non-graded / Diagnostic record', 'Non-graded or low-stakes recording', 'Graded / High-stakes evaluative record'],
            ['Examples', 'Pre-test, KWL chart (K & W), readiness inventory', 'Exit tickets, thumbs up/down, quiz with instant rationale, observation', 'Quarterly exams, final term paper, unit achievement test'],
          ],
        },
      },
      {
        heading: '3. Authentic & Performance-Based Assessment',
        paragraphs: [
          'Traditional paper-and-pencil assessments evaluate declarative knowledge (knowing what). In contrast, authentic and performance-based assessments require learners to demonstrate procedural competencies (knowing how) within meaningful, real-world contexts.',
          'Performance assessments utilize scoring rubrics (Analytic or Holistic) to ensure objective, reliable evaluation of student artifacts.',
        ],
        example: {
          scenario:
            'A biology teacher asks students to design a water filtration device using local recycled materials and present an ecological viability report, evaluated via a 4-criterion analytic rubric.',
          analysis:
            'This is authentic performance assessment. It requires higher-order synthesis and real-world application beyond simple recall of filtration facts.',
        },
      },
    ],
    keyTerms: [
      {
        term: 'Formative Assessment',
        definition: 'Ongoing assessment conducted during the instructional process to provide real-time feedback and adapt pedagogy.',
      },
      {
        term: 'Summative Assessment',
        definition: 'Culminating assessment administered at the conclusion of an instructional period to certify learning and assign grades.',
      },
      {
        term: 'Assessment AS Learning',
        definition: 'The process where students monitor their own metacognitive learning and engage in self-regulation and reflection.',
      },
    ],
    letTips: [
      'If the scenario mentions "adjusting lesson plans based on student confusion during the discussion," the answer is ALWAYS Formative Assessment.',
      'If the scenario asks about "determining the root cause of persistent reading failure," look for Diagnostic Assessment.',
      'Do not confuse formative assessment with grading; formative assessments should prioritize feedback over score recording.',
    ],
    commonMistakes: [
      'Assuming that all quizzes are summative. A short quiz used to gauge if students understood yesterday’s lesson before proceeding is formative.',
      'Thinking Assessment AS Learning is the same as Assessment FOR Learning. "AS learning" requires active student self-monitoring and metacognition.',
    ],
    summaryPoints: [
      'Diagnostic precedes instruction to identify learning gaps.',
      'Formative accompanies instruction to shape ongoing learning.',
      'Summative follows instruction to evaluate final competence.',
      'Assessment AS learning develops metacognition and self-regulation.',
    ],
  },
  {
    id: 'mat-prof-assess-002',
    slug: 'item-analysis-difficulty-and-discrimination-index',
    title: 'Item Analysis: Difficulty Index, Discrimination Index, and Distractor Analysis',
    subjectId: 'prof-assessment',
    subjectName: 'Assessment of Learning',
    category: 'prof_ed',
    topic: 'Item Analysis & Statistics',
    description: 'Mathematical formulas, decision rules, and pedagogical interpretations for test item quality in the LET.',
    readTimeMinutes: 7,
    overview:
      'Item analysis is a statistical procedure used to evaluate the quality of test questions. In the LET, item analysis questions test your ability to calculate and interpret the Difficulty Index (P) and Discrimination Index (D).',
    sections: [
      {
        heading: '1. The Difficulty Index (p-value)',
        paragraphs: [
          'The Difficulty Index (P) represents the proportion of examinees who answered an item correctly. It is computed using the formula:',
          'P = (Ru + Rl) / N',
          'Where Ru is the number of correct responses from the Upper Group (top 27%), Rl is the number of correct responses from the Lower Group (bottom 27%), and N is the total number of students in both groups combined.',
          'Notice the inverse relationship: A higher difficulty index value means the item is EASIER, while a lower value means the item is HARDER.',
        ],
        comparisonTable: {
          headers: ['Difficulty Index (P) Range', 'Item Interpretation', 'Recommended Pedagogical Action'],
          rows: [
            ['0.00 – 0.20', 'Very Difficult', 'Revise or discard (unless intended for high-level selection)'],
            ['0.21 – 0.40', 'Difficult', 'Retain or refine phrasing'],
            ['0.41 – 0.60', 'Moderate / Average (Ideal)', 'Retain (provides optimum discriminating power)'],
            ['0.61 – 0.80', 'Easy', 'Retain or refine distractors'],
            ['0.81 – 1.00', 'Very Easy', 'Revise or discard (does not differentiate students)'],
          ],
        },
        keyConcept:
          'Ideal test items for classroom achievement have a moderate difficulty index (around 0.50), which maximizes the item’s potential to discriminate between high and low achievers.',
      },
      {
        heading: '2. The Discrimination Index (D-value)',
        paragraphs: [
          'The Discrimination Index (D) measures the ability of an item to differentiate between high-performing examinees (upper 27%) and low-performing examinees (lower 27%).',
          'D = (Ru - Rl) / n',
          'Where Ru = number of correct answers in Upper group, Rl = number of correct answers in Lower group, and n = number of students in ONE group (upper or lower).',
        ],
        comparisonTable: {
          headers: ['Discrimination Index (D)', 'Item Quality', 'Decision / Action'],
          rows: [
            ['+0.40 and above', 'Very Good Item', 'Retain without modification'],
            ['+0.30 to +0.39', 'Reasonably Good Item', 'Retain, minor review if needed'],
            ['+0.20 to +0.29', 'Marginal / Questionable Item', 'Subject to revision and review'],
            ['0.00 to +0.19', 'Poor Item', 'Discard or completely rewrite'],
            ['Negative (e.g. -0.20)', 'Defective / Flawed Item', 'Discard immediately (misleads upper group)'],
          ],
        },
        example: {
          scenario:
            'In an item analysis of 60 students (30 in Upper group, 30 in Lower group), 6 in the Upper group and 18 in the Lower group got Question #12 correct.',
          analysis:
            'D = (6 - 18) / 30 = -12 / 30 = -0.40. Because D is negative, the item is defective: lower group students scored higher than upper group students, likely due to confusing phrasing or miskeyed answer key. Action: Discard or check answer key.',
        },
      },
      {
        heading: '3. Distractor Efficiency Analysis',
        paragraphs: [
          'A distractor (incorrect alternative) is considered effective if it attracts more students from the lower group than from the upper group.',
          'An ineffective distractor is one that attracts ZERO students (implausible distractor) or attracts more students from the upper group than from the lower group (misleading distractor).',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Difficulty Index (P)',
        definition: 'The proportion of test takers who answered an item correctly. Higher value = easier item.',
      },
      {
        term: 'Discrimination Index (D)',
        definition: 'A metric indicating how effectively an item distinguishes between upper and lower group test takers.',
      },
      {
        term: 'Plausible Distractor',
        definition: 'An incorrect option in a multiple-choice item that successfully attracts lower-performing students.',
      },
    ],
    letTips: [
      'Remember: If D is NEGATIVE, the lower group outperformed the upper group. The item is ALWAYS defective and must be discarded or re-keyed.',
      'An ideal classroom test item has a difficulty index of around 0.50 and a positive discrimination index of +0.30 or higher.',
    ],
    commonMistakes: [
      'Assuming a difficulty index of 0.85 means the test was very hard. A 0.85 difficulty index means 85% of students got it right, so it was VERY EASY.',
      'Dividing by total students N when computing Discrimination Index D. Formula uses n (size of ONE group), whereas Difficulty Index P uses N (total of both groups).',
    ],
    summaryPoints: [
      'Difficulty Index (P): Ru + Rl divided by total N. Values range 0.0 to 1.0.',
      'Discrimination Index (D): Ru - Rl divided by n. Values range -1.0 to +1.0.',
      'Negative discrimination index = defective item (discard).',
      'Good distractors attract more lower-group students than upper-group students.',
    ],
  },
  {
    id: 'mat-prof-assess-003',
    slug: 'table-of-specifications-and-validity-reliability',
    title: 'Table of Specifications (TOS), Validity, and Reliability',
    subjectId: 'prof-assessment',
    subjectName: 'Assessment of Learning',
    category: 'prof_ed',
    topic: 'Standardized vs Teacher-Made Tests',
    relatedTopics: ['Types of Assessment', 'Alternative & Authentic Assessment'],
    description: 'How to construct a Table of Specifications (TOS) and assess Content, Criterion, and Construct validity and reliability coefficients.',
    readTimeMinutes: 6,
    overview:
      'A test cannot be valid if it is not reliable, but a reliable test is not necessarily valid. Understanding how to build a Table of Specifications ensures content validity in classroom assessment.',
    sections: [
      {
        heading: '1. Table of Specifications (TOS)',
        paragraphs: [
          'A Table of Specifications (TOS) is a blueprint for test construction. It links learning objectives, instructional time (hours or days spent), Bloom’s cognitive levels (Remembering to Creating), and the number/placement of test items.',
          'The primary purpose of preparing a TOS is to ensure Content Validity—guaranteeing that the test proportionally covers all intended learning competencies without over-representing or omitting instructional units.',
        ],
        bulletPoints: [
          'Determines item distribution based on instructional weight.',
          'Aligns test items with target cognitive domains (Bloom’s Taxonomy).',
          'Prevents teacher bias toward testing only lower-order recall questions.',
        ],
        keyConcept:
          'A Table of Specifications is the single most effective tool a classroom teacher has to establish content validity.',
      },
      {
        heading: '2. Types of Validity in Educational Measurement',
        paragraphs: [
          'Validity refers to the degree to which an assessment instrument measures what it purports to measure. Key types include:',
        ],
        comparisonTable: {
          headers: ['Type of Validity', 'Definition', 'Method of Verification'],
          rows: [
            ['Content Validity', 'How well the test items sample the complete domain of instructional objectives', 'Expert review, Table of Specifications alignment'],
            ['Concurrent Validity', 'How test scores correlate with an established criterion measured at the same time', 'Correlating new test scores with existing standardized exam scores'],
            ['Predictive Validity', 'How accurately test scores predict future performance or success', 'Correlating college entrance exam (e.g. NMAT, LET) with subsequent GPA or professional performance'],
            ['Construct Validity', 'How well the test measures an abstract psychological construct (e.g. critical thinking, self-efficacy)', 'Factor analysis, convergent and discriminant evidence'],
            ['Face Validity', 'Superficial appearance of whether the test looks relevant to examinees', 'Visual inspection by non-experts (weakest form)'],
          ],
        },
      },
      {
        heading: '3. Reliability and Its Relationship with Validity',
        paragraphs: [
          'Reliability refers to the consistency, stability, and repeatability of test scores across administrations.',
          'A test can be reliable without being valid (e.g. a broken scale consistently weighing 5 kg too heavy), but a test CANNOT be valid without being reliable.',
          'Common reliability estimates include: Test-Retest (stability over time), Parallel Forms (equivalence of two test versions), Split-Half with Spearman-Brown prophecy formula (internal consistency), and Kuder-Richardson / Cronbach’s Alpha (internal homogeneity of items).',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Table of Specifications (TOS)',
        definition: 'A test blueprint aligning instructional objectives, cognitive levels, and item distributions to ensure content validity.',
      },
      {
        term: 'Content Validity',
        definition: 'The extent to which test items representatively sample the subject matter and learning objectives taught.',
      },
      {
        term: 'Reliability',
        definition: 'The consistency and stability of measurement scores across repeated testing or equivalent forms.',
      },
    ],
    letTips: [
      'Remember the target analogy: High reliability = tightly clustered darts; High validity = darts hitting the bullseye.',
      'When asked which validity is directly enhanced by a Table of Specifications, the answer is ALWAYS Content Validity.',
    ],
    commonMistakes: [
      'Confusing Concurrent validity with Predictive validity. Concurrent is measured simultaneously; Predictive is measured after a time delay.',
      'Believing that a high reliability score automatically guarantees a good test. It guarantees consistency, not that the test measures the right skill.',
    ],
    summaryPoints: [
      'TOS guarantees content validity by matching test items to curriculum objectives.',
      'Validity = Accuracy (measures what it claims to measure).',
      'Reliability = Consistency (scores remain stable across administrations).',
      'Validity requires reliability; reliability does not require validity.',
    ],
  },
];
