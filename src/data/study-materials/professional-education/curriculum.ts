import type { StudyMaterial } from '../../../types';

export const CURRICULUM_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-prof-curr-001',
    slug: 'curriculum-development-theorists-and-models',
    title: 'Curriculum Development: Models, Theorists, and Spiral Progression',
    subjectId: 'prof-curriculum',
    subjectName: 'Curriculum Development',
    category: 'prof_ed',
    topic: 'Curriculum Models & Theorists',
    relatedTopics: ['Types of Curriculum', 'K to 12 Framework & Matatag Curriculum', 'Curriculum Evaluation'],
    description: 'Ralph Tyler\'s Rationale, Hilda Taba\'s Grassroots Model, Allan Glatthorn\'s curriculum types, and Jerome Bruner\'s spiral progression approach.',
    readTimeMinutes: 7,
    overview:
      'Curriculum Development encompasses the philosophical, theoretical, and practical frameworks governing what, how, and why educational content is selected, sequenced, delivered, and assessed.',
    sections: [
      {
        heading: '1. Major Classical Curriculum Theorists and Models',
        paragraphs: [
          'The LET regularly tests foundational curriculum models and the directionality of curriculum planning (Top-Down vs. Grassroots):',
        ],
        comparisonTable: {
          headers: ['Theorist / Model', 'Orientation / Nature', 'Core Principles & Four Steps', 'Key Defining Feature'],
          rows: [
            ['Ralph Tyler (Tylerian Model)', 'Deductive (Top-down / Administrative)', '1. Determine educational objectives\n2. Select learning experiences\n3. Organize experiences\n4. Evaluate effectiveness', 'Linear, ends-means rational model centered on clear behavioral objectives'],
            ['Hilda Taba (Grassroots Model)', 'Inductive (Bottom-up / Teacher-driven)', '1. Diagnose learner needs\n2. Formulate objectives\n3. Select content\n4. Organize content\n5. Select experiences\n6. Organize experiences\n7. Evaluate', 'Teachers who teach the curriculum should be the primary designers of the curriculum'],
            ['Franklin Bobbitt', 'Scientific / Industrial efficiency', 'Curriculum as a precise engineering system eliminating waste and preparing students for adult vocational life', 'Pioneer of curriculum as a specialized academic field (1918)'],
            ['Jerome Bruner', 'Cognitive Constructivism', 'Spiral Progression: Fundamental concepts are introduced early at intuitive levels and revisited at increasing depth and complexity over time', 'Core foundational architecture of Philippine K to 12 Basic Education'],
          ],
        },
      },
    ],
    keyTerms: [
      {
        term: 'Grassroots Model (Taba)',
        definition: 'Inductive, teacher-led curriculum design starting with diagnosis of student needs.',
      },
      {
        term: 'Spiral Progression',
        definition: 'Curricular design where key concepts are revisited across grade levels with increasing breadth and depth.',
      },
    ],
    letTips: [
      'Tyler\'s model is Deductive/Top-down; Taba\'s model is Inductive/Bottom-up (Grassroots).',
      'Spiral progression is rooted in Jerome Bruner\'s constructivist theory.',
    ],
    summaryPoints: [
      'Tyler emphasized linear behavioral objectives.',
      'Taba advocated for teacher-initiated grassroots design.',
      'Spiral progression revisits core concepts with increasing cognitive complexity.',
    ],
  },
  {
    id: 'mat-prof-curr-002',
    slug: 'types-of-curriculum-operating-in-schools',
    title: 'Types of Curriculum Operating in Schools and Curriculum Designs',
    subjectId: 'prof-curriculum',
    subjectName: 'Curriculum Development',
    category: 'prof_ed',
    topic: 'Types of Curriculum',
    relatedTopics: ['Curriculum Models & Theorists', 'K to 12 Framework & Matatag Curriculum'],
    description: 'Allan Glatthorn’s 7 operating curricula (Recommended, Written, Taught, Supported, Assessed, Learned, Hidden), plus Eisner’s Null Curriculum.',
    readTimeMinutes: 7,
    overview:
      'Curriculum exists in multiple dimensions within an educational institution, ranging from statutory policies to classroom delivery and unspoken cultural lessons.',
    sections: [
      {
        heading: '1. Allan Glatthorn’s Seven Types of Operating Curriculum',
        paragraphs: [
          'Glatthorn categorized the curriculum into seven interconnected operational forms:',
        ],
        comparisonTable: {
          headers: ['Curriculum Type', 'Source / Authority', 'Description & Manifestation'],
          rows: [
            ['1. Recommended Curriculum', 'Policy agencies (DepEd, CHED, TESDA, UNESCO)', 'Recommended by professional organizations and educational policy makers as ideal standards.'],
            ['2. Written Curriculum', 'DepEd Curriculum Guides, syllabi, textbooks, lesson plans', 'Formally documented and approved course of study containing competencies and learning targets.'],
            ['3. Taught Curriculum', 'Classroom teachers', 'The actual activities, methodologies, and content implemented by the teacher in the classroom.'],
            ['4. Supported Curriculum', 'Instructional resources', 'Materials supporting teaching: textbooks, laboratories, digital learning platforms, library resources.'],
            ['5. Assessed Curriculum', 'Quizzes, periodic exams, NAT, LET', 'The tested curriculum evaluated through formative and summative assessment tools.'],
            ['6. Learned Curriculum', 'Students / Learners', 'The actual knowledge, skills, and values absorbed, retained, and demonstrated by students.'],
            ['7. Hidden Curriculum', 'School culture & environment', 'The unintended, unwritten social norms, peer dynamics, and institutional values absorbed by learners.'],
          ],
        },
      },
      {
        heading: '2. Elliot Eisner’s Null Curriculum and Major Curriculum Designs',
        paragraphs: [
          'Null / Excluded Curriculum (Elliot Eisner): Important topics, perspectives, or skills that are intentionally or unintentionally omitted from the formal school curriculum.',
          'Subject-Centered Design: Focuses on discrete academic subjects and factual mastery (traditional, teacher-centered).',
          'Learner-Centered Design: Centers around student interests, individual capabilities, and developmental readiness (progressive).',
          'Problem-Centered Design: Organizes learning around persistent real-world social problems and community challenges (reconstructionist).',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Null Curriculum',
        definition: 'Topics and perspectives deliberately or inadvertently omitted from the formal curriculum (Elliot Eisner).',
      },
      {
        term: 'Learned Curriculum',
        definition: 'The actual learning outcomes, competencies, and values demonstrated and internalized by students.',
      },
    ],
    letTips: [
      'DepEd curriculum guides = Written Curriculum; teacher delivery = Taught Curriculum; student exam scores = Assessed/Learned Curriculum.',
      'Omitted or untaught historical topics represent the Null Curriculum.',
    ],
    summaryPoints: [
      'Glatthorn outlined 7 operational curriculum levels from Recommended to Hidden.',
      'Eisner defined the Null Curriculum as what is left out.',
      'Curriculum designs are categorized into subject-centered, learner-centered, and problem-centered.',
    ],
  },
  {
    id: 'mat-prof-curr-003',
    slug: 'k-to-12-framework-and-matatag-curriculum',
    title: 'Philippine K to 12 Basic Education Framework and the MATATAG Curriculum',
    subjectId: 'prof-curriculum',
    subjectName: 'Curriculum Development',
    category: 'prof_ed',
    topic: 'K to 12 Framework & Matatag Curriculum',
    relatedTopics: ['Curriculum Models & Theorists', 'Curriculum Evaluation'],
    description: 'RA 10533 mandates, Senior High School tracks, Mother Tongue-Based Multilingual Education (MTB-MLE), and the DepEd MATATAG decongested curriculum.',
    readTimeMinutes: 8,
    overview:
      'The Philippine Basic Education system underwent major legislative reform under RA 10533 (K to 12) and subsequent curriculum refinement under the MATATAG agenda to decongest competencies and prioritize foundational literacy and numeracy.',
    sections: [
      {
        heading: '1. Enhanced Basic Education Act of 2013 (RA 10533)',
        paragraphs: [
          'Structure: Universal Kindergarten + 6 years Elementary + 4 years Junior High School (Grades 7–10) + 2 years Senior High School (Grades 11–12).',
          'Key Salient Features: Spiral Progression approach, Learner-Centered, Mother Tongue-Based Multilingual Education (MTB-MLE from Kinder to Grade 3), and contextualization/indigenization of instructional materials.',
          'Senior High School (SHS) Tracks:\n- Academic Track: STEM (Science, Tech, Engineering, Math), ABM (Accountancy, Business, Management), HUMSS (Humanities & Social Sciences), GAS (General Academic Strand).\n- Technical-Vocational-Livelihood (TVL) Track: Home Economics, ICT, Agri-Fishery Arts, Industrial Arts.\n- Arts and Design Track.\n- Sports Track.',
        ],
      },
      {
        heading: '2. The DepEd MATATAG Curriculum Agenda',
        paragraphs: [
          'Rationale: Decongesting the overcrowded curriculum by approximately 70% to allow deeper mastery of foundational literacy and numeracy, peace education, and values formation.',
          'MATATAG Pillars:\n- MA: Make the curriculum relevant to produce competent and job-ready, active, and responsible citizens.\n- TA: Take steps to accelerate delivery of basic education facilities and services.\n- TA: Take good care of learners by promoting learner well-being, inclusive education, and a positive learning environment.\n- G: Give support to teachers to teach better through professional development.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'RA 10533',
        definition: 'The Enhanced Basic Education Act of 2013 establishing the mandatory K to 12 basic education program in the Philippines.',
      },
      {
        term: 'MATATAG Curriculum',
        definition: 'DepEd’s revised basic education curriculum designed to decongest learning competencies and emphasize foundational literacy and numeracy.',
      },
    ],
    letTips: [
      'Under RA 10533, Kindergarten is mandatory for entrance to Grade 1.',
      'The Senior High School curriculum includes four major tracks: Academic, TVL, Arts & Design, and Sports.',
    ],
    summaryPoints: [
      'K to 12 added two Senior High School years and institutionalized spiral progression.',
      'MTB-MLE initially utilized the mother tongue as the medium of instruction in early primary grades.',
      'The MATATAG curriculum prioritizes foundational competencies and 21st-century skills.',
    ],
  },
  {
    id: 'mat-prof-curr-004',
    slug: 'curriculum-evaluation-models-and-processes',
    title: 'Curriculum Evaluation Models: Stufflebeam’s CIPP, Stake’s Countenance, and Scriven',
    subjectId: 'prof-curriculum',
    subjectName: 'Curriculum Development',
    category: 'prof_ed',
    topic: 'Curriculum Evaluation',
    relatedTopics: ['Curriculum Models & Theorists', 'Types of Curriculum'],
    description: 'Daniel Stufflebeam’s CIPP Model (Context, Input, Process, Product), Robert Stake’s Countenance Model, and curriculum alignment principles.',
    readTimeMinutes: 7,
    overview:
      'Curriculum Evaluation is the systematic process of gathering data to make informed decisions about whether to accept, modify, or terminate an educational program or curricular reform.',
    sections: [
      {
        heading: '1. Daniel Stufflebeam’s CIPP Evaluation Model',
        paragraphs: [
          'The CIPP model guides decision-making across four progressive evaluation stages:',
        ],
        comparisonTable: {
          headers: ['CIPP Dimension', 'Evaluation Focus', 'Guiding Question', 'Decision Type'],
          rows: [
            ['Context Evaluation', 'Needs, problems, assets, and environmental conditions', 'What needs to be done? Who are the target beneficiaries?', 'Planning decisions'],
            ['Input Evaluation', 'Available resources, instructional strategies, budget, and personnel capability', 'How should it be done? What alternative approaches exist?', 'Structuring decisions'],
            ['Process Evaluation', 'Day-to-day implementation fidelity, monitoring instructional delivery', 'Is it being done properly? What operational barriers exist?', 'Implementing decisions'],
            ['Product Evaluation', 'Measuring actual learner outcomes, achievements, and long-term impact', 'Did the curriculum succeed? Did it meet targeted goals?', 'Recycling / Continuance decisions'],
          ],
        },
      },
      {
        heading: '2. Robert Stake’s Countenance Model & Michael Scriven',
        paragraphs: [
          'Robert Stake’s Countenance Model: Evaluates curriculum along two countenances (Description and Judgment) across three temporal phases:\n- Antecedents: Conditions existing prior to teaching (student entry knowledge, resources).\n- Transactions: Successive classroom interactions during instruction.\n- Outcomes: Resulting student achievements and affective impacts.',
          'Michael Scriven: Coined the distinction between Formative Evaluation (ongoing monitoring to improve curriculum during design) and Summative Evaluation (evaluating overall worth at the conclusion of a program).',
        ],
      },
      {
        heading: '3. Curriculum Articulation and Integration',
        paragraphs: [
          'Vertical Articulation (Continuity / Sequencing): Smooth, logical progression of skills and concepts from one grade level to the next without unnecessary repetition or gaps.',
          'Horizontal Integration (Scope / Balance): Meaningful interdisciplinary connections between different subject areas taught within the same grade level.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'CIPP Model',
        definition: 'Stufflebeam’s evaluation model assessing Context, Input, Process, and Product to guide curriculum decisions.',
      },
      {
        term: 'Vertical Articulation',
        definition: 'The seamless sequential alignment of learning competencies across successive grade levels.',
      },
    ],
    letTips: [
      'In CIPP: Context = Needs; Input = Resources/Strategies; Process = Implementation; Product = Outcomes.',
      'Vertical articulation is across grade levels; Horizontal integration is across subjects in the same grade.',
    ],
    summaryPoints: [
      'Stufflebeam’s CIPP model provides structured feedback for decision makers.',
      'Stake’s Countenance model analyzes Antecedents, Transactions, and Outcomes.',
      'Curriculum alignment requires both vertical continuity and horizontal balance.',
    ],
  },
];
