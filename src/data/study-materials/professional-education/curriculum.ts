import type { StudyMaterial } from '../../../types';

export const CURRICULUM_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-prof-curr-001',
    slug: 'types-of-curriculum-and-development-models',
    title: 'Curriculum Development: Types of Curriculum, Tyler, Taba, and Spiral Progression',
    subjectId: 'curriculum',
    subjectName: 'Curriculum Development',
    category: 'prof_ed',
    topic: 'Curriculum Development & Spiral Progression',
    description: 'Operating types of curriculum (written, taught, hidden, null), Ralph Tyler vs. Hilda Taba models, and K-12 spiral progression.',
    readTimeMinutes: 7,
    overview:
      'Curriculum encompasses all learning experiences planned and guided by the school. Mastery of curricular categories and development frameworks is vital for pedagogical alignment.',
    sections: [
      {
        heading: '1. The Seven Types of Operating Curriculum (Glatthorn)',
        paragraphs: [
          'Allan Glatthorn categorized curriculum into operational dimensions based on where and how it is enacted:',
        ],
        comparisonTable: {
          headers: ['Curriculum Type', 'Definition', 'Classroom / Institutional Example'],
          rows: [
            ['Recommended Curriculum', 'Proposed by educational scholars, professional organizations (e.g. PAFTE), and DepEd/CHED/TESDA', 'Basic Education Curriculum guidelines, UNESCO recommendations'],
            ['Written Curriculum', 'Formal documents produced by curriculum writers and school boards', 'DepEd Curriculum Guides (CGs), lesson plans, syllabi, textbooks'],
            ['Taught Curriculum', 'The actual instructional activities and interactions happening inside the classroom', 'Day-to-day lectures, laboratory experiments, group discussions'],
            ['Supported Curriculum', 'Resources, learning materials, and physical facilities that enable instruction', 'Science laboratories, audio-visual equipment, textbooks, Wi-Fi access'],
            ['Assessed Curriculum', 'Evaluative tools used to measure student learning and mastery', 'Quarterly exams, NAT, quizzes, portfolios, rubrics'],
            ['Learned Curriculum', 'The actual knowledge, skills, values, and behavioral changes achieved by the student', 'Test scores, observable student competencies, learning outcomes achieved'],
            ['Hidden Curriculum', 'Unintended, unwritten lessons, values, and cultural norms transmitted implicitly by school environment and teacher behavior', 'Punctuality, classroom social hierarchy, gender expectations, competition vs. cooperation'],
          ],
        },
        keyConcept:
          'The Hidden Curriculum consists of unwritten, implicit cultural messages, social norms, and institutional expectations that students absorb without direct instruction.',
      },
      {
        heading: '2. Classic Models of Curriculum Development: Tyler vs. Taba',
        paragraphs: [
          'Ralph Tyler’s Rational / Deductive Model (Top-Down):',
          'Linear 4-step framework: 1. Determine educational purposes -> 2. Select learning experiences -> 3. Organize learning experiences -> 4. Evaluate whether purposes are achieved.',
          'Hilda Taba’s Grassroots / Inductive Model (Bottom-Up):',
          'Taba argued that teachers who teach the curriculum should design it. 7-step sequence starting with Diagnosing learner needs -> Formulating specific objectives -> Selecting content -> Organizing content -> Selecting learning experiences -> Organizing learning experiences -> Determining what and how to evaluate.',
        ],
      },
      {
        heading: '3. Jerome Bruner’s Spiral Progression in the K-12 Curriculum',
        paragraphs: [
          'In the Philippine K-12 program (RA 10533), subjects are taught using the Spiral Progression Approach pioneered by Jerome Bruner.',
          'Fundamental concepts are introduced in early grades in a simple, concrete form, and are revisited across subsequent grade levels with increasing depth, complexity, and abstraction.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Hidden Curriculum',
        definition: 'Implicit values, social norms, and institutional culture absorbed by students that are not formally written in the curriculum guide.',
      },
      {
        term: 'Spiral Progression',
        definition: 'Curricular design where basic concepts are repeatedly revisited across grade levels at increasing levels of depth and complexity.',
      },
      {
        term: 'Taba’s Grassroots Model',
        definition: 'An inductive curriculum design model advocating that classroom teachers should be the primary designers of the curriculum.',
      },
    ],
    letTips: [
      'If an exam question mentions curriculum designed by teachers starting from needs diagnosis, choose HILDA TABA’S GRASSROOTS MODEL.',
      'If asked what type of curriculum is reflected by unwritten gender biases or competitive atmospheres in school, select HIDDEN CURRICULUM.',
      'Spiral progression is rooted in Jerome Bruner’s cognitive theory: "Any subject can be taught effectively in some intellectually honest form to any child at any stage of development."',
    ],
    commonMistakes: [
      'Confusing Taught Curriculum with Learned Curriculum. Taught is what the teacher delivers; Learned is what the student actually acquires.',
      'Assuming Tyler’s model starts from classroom teachers. Tyler’s model is deductive/top-down, while Taba’s is inductive/bottom-up.',
    ],
    summaryPoints: [
      'Glatthorn: Recommended, Written, Taught, Supported, Assessed, Learned, and Hidden curricula.',
      'Ralph Tyler = Deductive / Administrative / Top-down model.',
      'Hilda Taba = Inductive / Grassroots / Teacher-centered curriculum design.',
      'Spiral Progression (K-12) revisits key concepts with expanding breadth and depth.',
    ],
  },
];
