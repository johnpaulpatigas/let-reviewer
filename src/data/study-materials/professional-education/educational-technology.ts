import type { StudyMaterial } from '../../../types';

export const EDTECH_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-prof-tech-001',
    slug: 'samr-model-tpack-and-dales-cone-of-experience',
    title: "Educational Technology: SAMR Model, TPACK Framework, and Edgar Dale's Cone of Experience",
    subjectId: 'educational-technology',
    subjectName: 'Educational Technology',
    category: 'prof_ed',
    topic: 'Educational Technology',
    description: 'Frameworks for technology integration, SAMR levels, TPACK intersections, and sensory learning retention rates.',
    readTimeMinutes: 6,
    overview:
      'Modern educational technology focuses on meaningful pedagogical integration rather than mere gadget usage. The LET tests your mastery of the SAMR, TPACK, and Dale frameworks.',
    sections: [
      {
        heading: '1. The SAMR Model (Puentedura)',
        paragraphs: [
          'Ruben Puentedura developed the SAMR model to describe the depth of classroom technology integration, dividing it into Enhancement and Transformation stages:',
        ],
        comparisonTable: {
          headers: ['Level', 'Phase', 'Definition', 'Classroom Example'],
          rows: [
            ['Substitution', 'Enhancement', 'Tech acts as a direct tool substitute, with NO functional change in pedagogy', 'Students type an essay on MS Word instead of handwriting it on lined paper'],
            ['Augmentation', 'Enhancement', 'Tech acts as a direct tool substitute with functional improvements', 'Students write the essay on Google Docs using built-in spell-check, word count, and text-to-speech'],
            ['Modification', 'Transformation', 'Tech allows for significant task redesign', 'Students write the essay, embed audio narration and hyperlinked research citations, and receive asynchronous peer comments from another section'],
            ['Redefinition', 'Transformation (Highest)', 'Tech allows for the creation of new tasks previously inconceivable without tech', 'Students collaborate in real time with marine biology students in Japan to co-author an interactive multimedia global coral reef website and host a live video conference'],
          ],
        },
        keyConcept:
          'Transformation occurs only at the Modification and Redefinition levels, where students become active creators and collaborators rather than passive consumers of digital content.',
      },
      {
        heading: '2. The TPACK Framework (Mishra & Koehler)',
        paragraphs: [
          'Technological Pedagogical Content Knowledge (TPACK) identifies three primary forms of knowledge that an effective 21st-century teacher must integrate:',
          '1. Content Knowledge (CK): Subject matter expertise (e.g. knowing chemical stoichiometry or Philippine history).',
          '2. Pedagogical Knowledge (PK): Methods and processes of teaching and learning (e.g. classroom management, formative assessment, inquiry methods).',
          '3. Technological Knowledge (TK): Understanding tools, software, and digital media (e.g. learning management systems, spreadsheets, video editing).',
          'The intersection of all three (TPACK) represents true pedagogical-technological synergy.',
        ],
      },
      {
        heading: "3. Edgar Dale's Cone of Experience",
        paragraphs: [
          'Edgar Dale organized sensory learning experiences along a continuum from concrete (bottom of the cone) to abstract (top of the cone):',
          'Direct, Purposeful Experiences (Base / Most Concrete): First-hand, hands-on participation (e.g. performing a real dissection, conducting laboratory titration).',
          'Contrived Experiences: Working with realistic models, mock-ups, and simulations when reality is too dangerous or large (e.g. globe, CPR mannequin).',
          'Dramatized Experiences: Role-playing, plays, simulations.',
          'Demonstrations, Study Trips, Exhibits, Educational Television, Motion Pictures.',
          'Visual Symbols & Verbal Symbols (Apex / Most Abstract): Charts, formulas, written words, spoken lectures.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'SAMR Model',
        definition: 'A 4-tier model (Substitution, Augmentation, Modification, Redefinition) classifying the depth of technological transformation in learning.',
      },
      {
        term: 'TPACK',
        definition: 'The dynamic intersection of Technological, Pedagogical, and Content Knowledge required for effective modern teaching.',
      },
      {
        term: "Dale's Cone of Experience",
        definition: 'A visual model arranging instructional media from concrete direct experiences at the base to abstract verbal symbols at the peak.',
      },
    ],
    letTips: [
      'In Dale’s Cone, DIRECT PURPOSEFUL EXPERIENCES provide the highest retention and sensory engagement.',
      'A globe or a working model of a human heart is a CONTRIVED EXPERIENCE in Dale’s Cone.',
      'If a lesson simply replaces paper with a tablet without altering the task, it is SUBSTANTITION.',
    ],
    commonMistakes: [
      'Assuming that the top of Dale’s Cone is the best. The base is the most concrete; teachers should provide concrete foundations before moving to abstract verbal symbols.',
    ],
    summaryPoints: [
      'SAMR: Substitution and Augmentation enhance; Modification and Redefinition transform.',
      'TPACK: Harmonious synthesis of Content, Pedagogy, and Technology.',
      'Dale’s Cone: Base = Direct purposeful experiences; Peak = Verbal/textual symbols.',
    ],
  },
];
