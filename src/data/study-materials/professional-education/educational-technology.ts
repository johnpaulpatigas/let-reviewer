import type { StudyMaterial } from '../../../types';

export const EDTECH_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-prof-tech-001',
    slug: 'educational-technology-samr-tpack-dale-cone',
    title: 'Educational Technology: SAMR Model and the TPACK Framework',
    subjectId: 'prof-edtech',
    subjectName: 'Educational Technology & 21st Century Skills',
    category: 'prof_ed',
    topic: 'TPACK & SAMR Models',
    relatedTopics: ['Dale’s Cone of Experience', 'ICT Integration in Education', '21st Century Skills Framework'],
    description: 'Ruben Puentedura\'s SAMR hierarchy (Substitution to Redefinition) and Mishra & Koehler\'s TPACK framework intersections.',
    readTimeMinutes: 7,
    overview:
      'Integrating technology into education requires meaningful instructional design. This guide reviews the SAMR model for technology transformation and the TPACK framework for technological-pedagogical synergy.',
    sections: [
      {
        heading: '1. Ruben Puentedura’s SAMR Model of Technology Integration',
        paragraphs: [
          'The SAMR model categorizes degrees of digital classroom technology integration into Enhancement and Transformation stages:',
        ],
        comparisonTable: {
          headers: ['Level', 'Category', 'Functional Impact', 'Classroom Example'],
          rows: [
            ['Substitution', 'Enhancement', 'Tech acts as a direct tool substitute with NO functional change', 'Students read a standard PDF textbook on a tablet instead of a printed book'],
            ['Augmentation', 'Enhancement', 'Tech acts as a direct tool substitute with functional IMPROVEMENT', 'Students read an interactive digital e-book with built-in audio pronunciation and hyperlinked glossaries'],
            ['Modification', 'Transformation', 'Tech allows for significant task REDESIGN', 'Students collaborate in real time on a shared cloud document and receive peer comments asynchronously'],
            ['Redefinition', 'Transformation', 'Tech allows for the creation of new tasks previously INCONCEIVABLE', 'Students create a multimedia documentary, conduct virtual international expert interviews, and publish globally'],
          ],
        },
      },
      {
        heading: '2. Mishra and Koehler\'s TPACK Framework',
        paragraphs: [
          'Technological Pedagogical Content Knowledge (TPACK) identifies three primary forms of knowledge that intersect to create effective digital teaching:',
          '1. Content Knowledge (CK): Mastery of the subject matter being taught.',
          '2. Pedagogical Knowledge (PK): Deep understanding of teaching methods, learning theories, and classroom management.',
          '3. Technology Knowledge (TK): Proficiency in utilizing hardware, software, and digital tools.',
          'TPACK (Center Intersection): The harmonious synthesis where teachers utilize specific technologies that match pedagogical strategies to make complex subject content accessible and engaging.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'SAMR Model',
        definition: 'A framework classifying educational technology integration into Substitution, Augmentation, Modification, and Redefinition.',
      },
      {
        term: 'TPACK',
        definition: 'The complex intersection of Technological, Pedagogical, and Content Knowledge required for effective digital teaching.',
      },
    ],
    letTips: [
      'If the technology allows students to do something impossible without tech (e.g. international virtual reality field trip) -> Redefinition.',
      'Substitution and Augmentation enhance; Modification and Redefinition transform.',
    ],
    summaryPoints: [
      'SAMR scales from tool replacement (Substitution) to innovative redesign (Redefinition).',
      'TPACK balances technology, pedagogy, and subject content mastery.',
    ],
  },
  {
    id: 'mat-prof-tech-002',
    slug: 'edgar-dale-cone-of-experience',
    title: 'Edgar Dale’s Cone of Experience and Instructional Media Selection',
    subjectId: 'prof-edtech',
    subjectName: 'Educational Technology & 21st Century Skills',
    category: 'prof_ed',
    topic: 'Dale’s Cone of Experience',
    relatedTopics: ['TPACK & SAMR Models', 'ICT Integration in Education'],
    description: 'The continuum from direct, purposeful experiences at the base to abstract verbal symbols at the pinnacle of Edgar Dale’s Cone of Experience.',
    readTimeMinutes: 7,
    overview:
      'Edgar Dale organized sensory instructional media from concrete, direct experiences at the base to abstract, symbolic representations at the top. Moving down the cone increases sensory engagement and retention.',
    sections: [
      {
        heading: '1. Levels of Edgar Dale’s Cone of Experience',
        paragraphs: [
          'The Cone of Experience arranges sensory learning modalities across three major bands:',
        ],
        comparisonTable: {
          headers: ['Band / Category', 'Cone Level', 'Instructional Activity & Example'],
          rows: [
            ['Direct / Concrete (Doing)', '1. Direct Purposeful Experiences', 'Hands-on sensory contact with real objects (e.g. dissecting a real frog, cultivating a garden)'],
            ['Direct / Concrete (Doing)', '2. Contrived Experiences', 'Working with representative models, mock-ups, or simulations when reality is too dangerous/large (e.g. globe, CPR mannequin)'],
            ['Direct / Concrete (Doing)', '3. Dramatized Experiences', 'Role playing, pageants, socio-drama, and re-enactments where learners participate directly'],
            ['Pictorial / Iconic (Observing)', '4. Demonstrations', 'Observing an instructor show how a process is performed (e.g. chemistry teacher demonstrating titration)'],
            ['Pictorial / Iconic (Observing)', '5. Study Trips / Field Trips', 'Visiting actual locations to observe real-world phenomena in context (e.g. visiting a national museum)'],
            ['Pictorial / Iconic (Observing)', '6. Exhibits & Displays', 'Viewing curated static or interactive three-dimensional learning displays'],
            ['Pictorial / Iconic (Observing)', '7. Motion Pictures / Video', 'Watching televised documentaries, educational films, or animated simulations'],
            ['Pictorial / Iconic (Observing)', '8. Still Pictures / Recordings', 'Looking at photographs, listening to podcasts or audio recordings'],
            ['Abstract / Symbolic (Thinking)', '9. Visual Symbols', 'Interpreting charts, graphs, maps, diagrams, flat schematic drawings'],
            ['Abstract / Symbolic (Thinking)', '10. Verbal Symbols', 'Reading printed words, spoken lectures, abstract mathematical formulas'],
          ],
        },
      },
    ],
    keyTerms: [
      {
        term: 'Contrived Experience',
        definition: 'A modified or simulated model used when real-life experiences are inaccessible, dangerous, or impractical.',
      },
      {
        term: 'Direct Purposeful Experience',
        definition: 'Firsthand, concrete sensory interaction with reality providing the richest foundation for conceptual learning.',
      },
    ],
    letTips: [
      'Base of the cone = Direct Purposeful Experiences (most concrete); Top = Verbal Symbols (most abstract).',
      'When real objects are too hazardous or enormous (e.g. atom, solar system), use Contrived Experiences (models/mockups).',
    ],
    summaryPoints: [
      'Dale\'s Cone moves from concrete physical action to abstract symbolic concepts.',
      'Concrete experiences provide the essential foundation for abstract conceptualization.',
    ],
  },
  {
    id: 'mat-prof-tech-003',
    slug: 'ict-integration-and-blended-learning-models',
    title: 'ICT Integration in Education: Blended Learning, LMS, and Assistive Technology',
    subjectId: 'prof-edtech',
    subjectName: 'Educational Technology & 21st Century Skills',
    category: 'prof_ed',
    topic: 'ICT Integration in Education',
    relatedTopics: ['TPACK & SAMR Models', '21st Century Skills Framework'],
    description: 'Blended learning rotation models (Station, Lab, Flipped), Learning Management Systems (LMS), and Assistive Technology for inclusive special education.',
    readTimeMinutes: 7,
    overview:
      'ICT integration transforms classroom dynamics through hybrid modalities, digital content management, synchronous/asynchronous workflows, and assistive accommodations for learners with diverse needs.',
    sections: [
      {
        heading: '1. Blended Learning Modality Models',
        paragraphs: [
          'Station Rotation Model: Students rotate on a fixed schedule among classroom stations, with at least one station being online digital learning.',
          'Lab Rotation Model: Students rotate to a dedicated computer lab for the online learning portion of a course.',
          'Flipped Classroom Model: Instructional lectures are delivered online for homework, freeing in-person class time for hands-on projects and guided practice.',
          'Flex Model: Digital curriculum delivers most content; teachers provide on-demand small-group tutoring and flexible interventions.',
        ],
      },
      {
        heading: '2. Synchronous vs. Asynchronous Distance Learning',
        paragraphs: [
          'Synchronous Learning: Real-time, concurrent interaction between teacher and students via video conferencing (Zoom, Google Meet) or live chat.',
          'Asynchronous Learning: Self-paced learning where students access pre-recorded modules, discussion boards, and assignments on their own schedule.',
        ],
      },
      {
        heading: '3. Assistive Technology for Inclusive Education',
        paragraphs: [
          'Screen Readers (e.g. JAWS, NVDA) and Braille displays empower visually impaired learners.',
          'Speech-to-Text and Closed Captioning support hearing-impaired and ESL students.',
          'Augmentative and Alternative Communication (AAC) devices enable non-verbal learners to communicate effectively.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Station Rotation',
        definition: 'A blended learning format where learners rotate between digital self-paced stations and face-to-face teacher instruction.',
      },
      {
        term: 'Assistive Technology',
        definition: 'Hardware or software tools that maintain or improve functional capabilities of learners with disabilities.',
      },
    ],
    letTips: [
      'Flipped classroom reserves classroom time for active problem solving and application, not passive listening.',
      'Station rotation keeps students within the standard classroom, while Lab rotation moves them to a computer lab.',
    ],
    summaryPoints: [
      'Blended learning combines traditional teacher guidance with self-paced digital learning.',
      'Synchronous is live in real time; Asynchronous is flexible and self-paced.',
      'Assistive technology ensures equitable access for learners with special needs.',
    ],
  },
  {
    id: 'mat-prof-tech-004',
    slug: '21st-century-skills-and-digital-citizenship',
    title: '21st Century Skills Framework (4Cs), IMT Skills, and Digital Citizenship',
    subjectId: 'prof-edtech',
    subjectName: 'Educational Technology & 21st Century Skills',
    category: 'prof_ed',
    topic: '21st Century Skills Framework',
    relatedTopics: ['TPACK & SAMR Models', 'ICT Integration in Education'],
    description: 'Partnership for 21st Century Skills (P21): The 4Cs (Critical Thinking, Communication, Collaboration, Creativity), IMT, and FLIPS life skills.',
    readTimeMinutes: 7,
    overview:
      'The 21st Century Skills framework equips learners for an interconnected, knowledge-driven global economy through cognitive agility, digital literacy, and adaptive life skills.',
    sections: [
      {
        heading: '1. The 4Cs: Core Learning and Innovation Skills',
        paragraphs: [
          '1. Critical Thinking: Analyzing arguments, synthesizing evidence, solving complex problems, and making evidence-based judgments.',
          '2. Communication: Articulating thoughts clearly across varied verbal, written, and multimedia formats for diverse audiences.',
          '3. Collaboration: Working respectfully, flexibly, and effectively with diverse teams to achieve shared objectives.',
          '4. Creativity and Innovation: Generating novel ideas, refining concepts, and executing innovative solutions.',
        ],
      },
      {
        heading: '2. IMT Skills and FLIPS Life/Career Framework',
        paragraphs: [
          'Information, Media, and Technology (IMT) Skills:\n- Information Literacy: Evaluating credibility, bias, and authority of data sources.\n- Media Literacy: Analyzing how digital media messages are constructed.\n- Technology Literacy: Leveraging digital tools efficiently to produce new knowledge.',
          'FLIPS Life and Career Skills: Flexibility, Leadership, Initiative, Productivity, and Social Skills.',
        ],
      },
    ],
    keyTerms: [
      {
        term: '4Cs of 21st Century Skills',
        definition: 'Critical Thinking, Communication, Collaboration, and Creativity.',
      },
      {
        term: 'Information Literacy',
        definition: 'The ability to find, critically evaluate, and effectively utilize information from digital and print sources.',
      },
    ],
    letTips: [
      'The 4Cs focus on Learning and Innovation Skills.',
      'Information literacy enables students to detect bias, fake news, and unverified online claims.',
    ],
    summaryPoints: [
      'The 4Cs prepare students for creative collaborative problem solving.',
      'IMT literacy cultivates critical evaluation of media and information sources.',
      'FLIPS skills build resilience, leadership, and adaptive workforce readiness.',
    ],
  },
];
