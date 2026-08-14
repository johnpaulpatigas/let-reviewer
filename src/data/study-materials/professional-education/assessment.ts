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
    relatedTopics: ['Alternative & Authentic Assessment', 'Item Analysis & Statistics', 'Standardized vs Teacher-Made Tests'],
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
        heading: '3. Norm-Referenced vs. Criterion-Referenced Assessment',
        paragraphs: [
          'Norm-Referenced Assessment: Compares an individual student’s performance to that of a peer norm group (e.g., percentile ranks, grading on a curve, NCEE, College Entrance Tests).',
          'Criterion-Referenced Assessment: Evaluates student performance against predetermined, fixed learning standards or mastery criteria regardless of peer scores (e.g., DepEd grading system, LET passing mark of 75%).',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Assessment FOR Learning',
        definition: 'Formative assessment procedures designed to diagnose student learning needs and inform teaching adjustments in real time.',
      },
      {
        term: 'Criterion-Referenced Assessment',
        definition: 'An evaluation comparing student performance against predefined objective standards or competency benchmarks rather than peer rankings.',
      },
    ],
    letTips: [
      'If the primary intent is to assign grades and certify final competency mastery -> Summative / Assessment OF Learning.',
      'If the teacher checks understanding mid-lesson to re-explain a confusing concept -> Formative / Assessment FOR Learning.',
    ],
    summaryPoints: [
      'Diagnostic identifies learning deficits before instruction begins.',
      'Formative informs teaching adaptations and student feedback during instruction.',
      'Summative evaluates total learning outcomes for grading at the end of instruction.',
    ],
  },
  {
    id: 'mat-prof-assess-002',
    slug: 'item-analysis-difficulty-discrimination-distractor',
    title: 'Item Analysis: Difficulty Index, Discrimination Index, and Distractor Analysis',
    subjectId: 'prof-assessment',
    subjectName: 'Assessment of Learning',
    category: 'prof_ed',
    topic: 'Item Analysis & Statistics',
    relatedTopics: ['Types of Assessment', 'Standardized vs Teacher-Made Tests'],
    description: 'Formulas and decision rules for Item Difficulty (p), Discrimination Index (d), Effective Distractors, Skewness, and Central Tendency.',
    readTimeMinutes: 8,
    overview:
      'Item analysis is a statistical procedure used to evaluate the quality of individual test items. The LET regularly tests formulas and interpretation rules for item difficulty, discrimination, distractor quality, and distribution skewness.',
    sections: [
      {
        heading: '1. Item Difficulty Index (p-value)',
        paragraphs: [
          'Formula: p = (Number of students who answered correctly) / (Total number of students who attempted the item) = (Ru + Rl) / N',
          'Interpretation Range:',
          '- 0.00 to 0.20: Very Difficult (Revise or discard)',
          '- 0.21 to 0.80: Good / Moderate Difficulty (Ideal for classroom exams; optimal around 0.50)',
          '- 0.81 to 1.00: Very Easy (Revise or discard)',
        ],
      },
      {
        heading: '2. Item Discrimination Index (d-value)',
        paragraphs: [
          'Formula: d = (Ru - Rl) / n, where Ru is correct answers from Upper 27% group, Rl is correct answers from Lower 27% group, and n is number of students in ONE group.',
          'Decision Table for Item Discrimination:',
        ],
        comparisonTable: {
          headers: ['Discrimination Value (d)', 'Item Quality', 'Action / Decision'],
          rows: [
            ['+0.40 and above', 'Very Good Item', 'Retain without changes'],
            ['+0.30 to +0.39', 'Reasonably Good Item', 'Retain; minor refinement optional'],
            ['+0.20 to +0.29', 'Marginal / Weak Item', 'Revise the stem or distractors'],
            ['0.00 to +0.19', 'Poor Item', 'Discard or completely rewrite'],
            ['Negative (e.g. -0.25)', 'Flawed Item (Lower group outperformed Upper group)', 'Reject / Discard immediately (indicates miskeyed answer or ambiguity)'],
          ],
        },
      },
      {
        heading: '3. Distractor Analysis and Distribution Skewness',
        paragraphs: [
          'Good Distractor (Plausible / Effective): Attracts more students from the lower group than the upper group.',
          'Ineffective Distractor: Not chosen by any student (implausible distractor; revise).',
          'Positively Skewed Distribution (Skewed to the right): Mean > Median > Mode. Most scores are low; exam was difficult.',
          'Negatively Skewed Distribution (Skewed to the left): Mode > Median > Mean. Most scores are high; exam was easy.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Difficulty Index (p)',
        definition: 'The proportion of test takers who answered an item correctly, ranging from 0.00 to 1.00.',
      },
      {
        term: 'Negative Discrimination Index',
        definition: 'An item flaw where more lower-performing students answered correctly than upper-performing students.',
      },
    ],
    letTips: [
      'Higher difficulty index (p) means the item is EASIER (e.g., p=0.85 is very easy).',
      'Negative discrimination index = Discard immediately.',
      'Positively skewed = Tail to the right, low scores, difficult test. Negatively skewed = Tail to the left, high scores, easy test.',
    ],
    summaryPoints: [
      'Ideal item difficulty falls between 0.21 and 0.80.',
      'Discrimination index must be positive (>= +0.30) to differentiate ability levels.',
      'Skewness direction points to the long tail and the mean location.',
    ],
  },
  {
    id: 'mat-prof-assess-003',
    slug: 'table-of-specifications-validity-reliability',
    title: 'Table of Specifications (TOS), Validity, and Reliability',
    subjectId: 'prof-assessment',
    subjectName: 'Assessment of Learning',
    category: 'prof_ed',
    topic: 'Standardized vs Teacher-Made Tests',
    relatedTopics: ['Types of Assessment', 'Alternative & Authentic Assessment'],
    description: 'Designing a Table of Specifications (TOS), types of Validity (Content, Criterion, Construct), and methods for establishing Reliability.',
    readTimeMinutes: 7,
    overview:
      'A test must be valid and reliable to produce accurate educational inferences. The Table of Specifications (TOS) is the primary tool for establishing content validity in teacher-made tests.',
    sections: [
      {
        heading: '1. Table of Specifications (TOS) and Test Construction',
        paragraphs: [
          'Table of Specifications (TOS): A test blueprint that aligns test items with curricular objectives, instructional time allotment, and Bloom\'s cognitive process levels.',
          'Purpose: Ensures content validity by preventing over-emphasis on rote recall and ensuring balanced representation of all instructional competencies.',
        ],
      },
      {
        heading: '2. Types of Test Validity',
        paragraphs: [
          'Validity: The extent to which a test measures what it intends to measure.',
          '- Content Validity: Adequacy with which the test items sample the instructional domain (Established via TOS and expert panel review).',
          '- Criterion-Related Validity: Concurrent validity (comparing with an existing valid test) and Predictive validity (predicting future performance, e.g., college entrance exam predicting GPA).',
          '- Construct Validity: The degree to which a test measures a non-observable psychological construct (e.g., critical thinking, anxiety, empathy).',
        ],
      },
      {
        heading: '3. Types of Reliability and Measurement Error',
        paragraphs: [
          'Reliability: The consistency, stability, and reproducibility of test scores over time.',
          '- Test-Retest: Administering the same test twice to the same group across an interval (Measures stability).',
          '- Equivalent / Parallel Forms: Administering two different versions measuring the same content (Measures equivalence).',
          '- Split-Half / Cronbach’s Alpha / Kuder-Richardson (KR-20): Measures internal consistency within a single test administration.',
        ],
        comparisonTable: {
          headers: ['Concept', 'Core Question', 'Primary Threat'],
          rows: [
            ['Validity', 'Does the test measure what it claims to measure?', 'Construct underrepresentation, test bias'],
            ['Reliability', 'Are the test scores consistent across administrations?', 'Vague item stems, ambiguous scoring, short test length'],
          ],
        },
      },
    ],
    keyTerms: [
      {
        term: 'Content Validity',
        definition: 'The extent to which test items comprehensively represent the intended learning outcomes and instructional content.',
      },
      {
        term: 'Test Blueprint (TOS)',
        definition: 'A two-way grid outlining the content topics, cognitive levels, and number of items in an assessment.',
      },
    ],
    letTips: [
      'A test can be reliable without being valid, but a test CANNOT be valid unless it is reliable.',
      'A Table of Specifications primarily establishes Content Validity.',
    ],
    summaryPoints: [
      'TOS guarantees balanced item distribution across cognitive levels.',
      'Validity is truthfulness/accuracy; Reliability is consistency.',
      'Split-half and Cronbach’s Alpha evaluate internal consistency.',
    ],
  },
  {
    id: 'mat-prof-assess-004',
    slug: 'authentic-assessment-portfolios-and-rubrics',
    title: 'Authentic Assessment, Portfolios, Rubrics, and DepEd Grading System',
    subjectId: 'prof-assessment',
    subjectName: 'Assessment of Learning',
    category: 'prof_ed',
    topic: 'Alternative & Authentic Assessment',
    relatedTopics: ['Types of Assessment', 'Standardized vs Teacher-Made Tests'],
    description: 'Portfolio assessment types (Showcase, Working, Evaluative), Analytic vs. Holistic rubrics, and DepEd Order No. 8, s. 2015 grading guidelines.',
    readTimeMinutes: 7,
    overview:
      'Authentic assessment evaluates student learning through real-world tasks, performance exhibitions, structured portfolios, and objective rubric scoring, reflecting DepEd standard grading policies.',
    sections: [
      {
        heading: '1. Types of Student Portfolios',
        paragraphs: [
          'Portfolio Assessment: A systematic, purposeful collection of student work demonstrating effort, progress, and achievement over time.',
          '- Working Portfolio (Growth / Developmental): Contains drafts, works-in-progress, and ongoing reflections documenting progress over time.',
          '- Showcase Portfolio (Display / Best-Work): Contains student\'s highest-quality selected pieces for exhibitions or parent-teacher reviews.',
          '- Evaluative / Assessment Portfolio: Standardized collection of designated artifacts graded against established performance criteria.',
        ],
      },
      {
        heading: '2. Scoring Rubrics: Analytic vs. Holistic',
        paragraphs: [
          'Analytic Rubric: Evaluates student performance along multiple distinct criteria independently (e.g. Content: 4/5, Organization: 3/5, Mechanics: 5/5). Provides detailed formative diagnostic feedback but takes longer to score.',
          'Holistic Rubric: Assigns a single overall score based on the total global impression of the student\'s work. Quicker to score but provides less specific diagnostic guidance.',
        ],
        comparisonTable: {
          headers: ['Rubric Type', 'Scoring Mechanism', 'Advantage', 'Disadvantage'],
          rows: [
            ['Analytic Rubric', 'Separate score for each distinct dimension', 'Clear diagnostic feedback highlighting specific strengths and weaknesses', 'More time-consuming to create and evaluate'],
            ['Holistic Rubric', 'Single aggregate score for overall quality', 'Fast, efficient scoring for high-stakes summative evaluations', 'Lacks detailed prescriptive feedback on individual flaws'],
          ],
        },
      },
      {
        heading: '3. DepEd Classroom Assessment Policy (DepEd Order No. 8, s. 2015)',
        paragraphs: [
          'Components of Summative Assessment in DepEd Basic Education:',
          '1. Written Work (WW): Ensures students can express skills and concepts in written form (quizzes, unit tests, essays).',
          '2. Performance Tasks (PT): Allows learners to demonstrate what they know through authentic products and performances.',
          '3. Quarterly Assessment (QA): Synthesizes learning across the whole quarter (periodic test).',
          'Weighting: Languages, AP, and ESP emphasize WW (30%) and PT (50%); Science and Math balance WW (40%) and PT (40%); MAPEH and EPP/TLE heavily prioritize PT (60%).',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Analytic Rubric',
        definition: 'A scoring guide evaluating student work across distinct, separate criteria individually.',
      },
      {
        term: 'Showcase Portfolio',
        definition: 'A curated collection containing a student\'s best, most exemplary completed works.',
      },
    ],
    letTips: [
      'In MAPEH and TLE, Performance Tasks carry the highest percentage weight (60%) under DO 8 s. 2015.',
      'Use Analytic rubrics when diagnostic feedback on specific skills is needed.',
    ],
    summaryPoints: [
      'Portfolios document growth (working) or celebrate mastery (showcase).',
      'Analytic rubrics break down scores by trait; Holistic rubrics score the overall work.',
      'DepEd assessment balances Written Work, Performance Tasks, and Quarterly Assessments.',
    ],
  },
];
