import type { StudyMaterial } from '../../../types';

export const FOUNDATIONS_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-prof-found-001',
    slug: 'educational-philosophies-progressivism-essentialism-perennialism',
    title: 'Major Educational Philosophies: Essentialism, Progressivism, Perennialism, and Existentialism',
    subjectId: 'prof-foundations',
    subjectName: 'Philosophical & Sociological Foundations',
    category: 'prof_ed',
    topic: 'Philosophies of Education',
    relatedTopics: ['Historical Foundations', 'Sociological & Anthropological Bases', 'Legal Bases of Philippine Education'],
    description: 'Philosophical roots, aims of schooling, curricular focus, and teacher roles frequently tested in the LET.',
    readTimeMinutes: 7,
    overview:
      'Educational philosophies guide curriculum design, instructional methodology, and classroom authority. The LET consistently tests your ability to identify teacher behaviors and school policies corresponding to each philosophical school.',
    sections: [
      {
        heading: '1. Comparative Analysis of Western Educational Philosophies',
        paragraphs: [
          'Educational philosophies are broadly categorized into teacher-centered (Essentialism, Perennialism) and student-centered (Progressivism, Existentialism, Reconstructionism) paradigms:',
        ],
        comparisonTable: {
          headers: ['Philosophy', 'Key Proponent', 'Educational Aim & Focus', 'Teacher Role & Curriculum'],
          rows: [
            ['Essentialism', 'William Bagley', 'Mastery of fundamental academic knowledge (3Rs: Reading, wRiting, aRithmetic) and traditional values', 'Teacher is the intellectual authority; curriculum is subject-centered, rigorous, and uniform across all students'],
            ['Perennialism', 'Robert Hutchins, Mortimer Adler', 'Cultivation of rational intellect and timeless truths through the Great Books of Western civilization', 'Teacher is a Socratic facilitator; curriculum focuses on perennial themes, classical literature, philosophy, and enduring human dilemmas'],
            ['Progressivism', 'John Dewey', 'Active learning through experience, problem solving, scientific inquiry, and democratic living ("Learning by doing")', 'Teacher is a facilitator and guide; curriculum is learner-centered, interdisciplinary, and responsive to student interests and community needs'],
            ['Existentialism', 'Jean-Paul Sartre, Soren Kierkegaard', 'Fostering individual freedom, authentic choice, and personal responsibility for one’s own existence and values', 'Teacher encourages self-direction and introspective dialogue; curriculum emphasizes humanities, arts, and self-chosen learning paths with no standardized uniformity'],
            ['Reconstructionism', 'George Counts, Theodore Brameld', 'Using education as an instrument to reconstruct society, eradicate injustice, and build a better world order', 'Teacher is a change agent / social activist; curriculum focuses on critical societal problems, inequality, and democratic reform'],
          ],
        },
        keyConcept:
          'John Dewey’s Progressivism emphasizes that education is not preparation for life; education is life itself. The curriculum must emerge from the child’s lived experiences.',
      },
      {
        heading: '2. Behaviorism, Constructivism, and Pragmatism in the Classroom',
        paragraphs: [
          'Behaviorism (B.F. Skinner, John Watson): Learning is a measurable change in observable behavior brought about by conditioning, reinforcement schedules, and stimulus-response associations.',
          'Constructivism (Jean Piaget, Lev Vygotsky, Jerome Bruner): Learners actively construct their own understanding by synthesizing new experiences with prior mental frameworks.',
          'Pragmatism (Charles Sanders Peirce, William James): Ideas are true and meaningful only to the extent that they produce practical, observable consequences when tested in reality.',
        ],
      },
      {
        heading: '3. LET Situational Vignettes',
        paragraphs: [
          'When Teacher Maria organizes field trips, community investigative projects, and hands-on laboratory experiments where students solve local environmental challenges, she is practicing Progressivism and Pragmatism.',
          'When Principal Santos mandates that all grade 10 students read Shakespeare and Homer because "human nature remains constant across centuries," he is operating under Perennialism.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Essentialism',
        definition: 'Teacher-centered philosophy emphasizing core academic competencies (3Rs), discipline, and traditional values.',
      },
      {
        term: 'Progressivism',
        definition: 'Learner-centered philosophy advocating experiential learning, democratic participation, and problem-solving.',
      },
      {
        term: 'Perennialism',
        definition: 'Educational philosophy focused on enduring universal truths and the study of classic works of literature and philosophy.',
      },
    ],
    letTips: [
      'If the scenario mentions the 3Rs, basic skills, or academic rigor under strict teacher authority -> Essentialism.',
      'If the scenario mentions "Great Books", timeless classical ideas, or unchanging human nature -> Perennialism.',
      'If the scenario mentions experiential hands-on problem solving, democratic classrooms, or learning by doing -> Progressivism.',
    ],
    summaryPoints: [
      'Teacher-centered philosophies focus on transmission of established academic content.',
      'Student-centered philosophies focus on student experience, freedom of choice, and societal reconstruction.',
    ],
  },
  {
    id: 'mat-prof-found-002',
    slug: 'legal-bases-of-philippine-education',
    title: 'Legal Bases of Philippine Education: RA 7836, RA 9293, and Article XIV',
    subjectId: 'prof-foundations',
    subjectName: 'Philosophical & Sociological Foundations',
    category: 'prof_ed',
    topic: 'Legal Bases of Philippine Education',
    relatedTopics: ['Philosophies of Education', 'Historical Foundations'],
    description: 'Foundational laws governing the teaching profession, licensure examinations, qualification mandates, and the 1987 Constitutional mandates on education.',
    readTimeMinutes: 8,
    overview:
      'Mastery of Philippine educational legislation is essential for every aspiring professional teacher. This guide synthesizes key statutory provisions, qualifications, licensing rules, and constitutional rights.',
    sections: [
      {
        heading: '1. Constitutional Mandates: Article XIV (1987 Constitution)',
        paragraphs: [
          'Section 1: The State shall protect and promote the right of all citizens to quality education at all levels and shall take appropriate steps to make such education accessible to all.',
          'Section 2(1): Establish and maintain a complete, adequate, and integrated system of education relevant to the needs of the people and society.',
          'Section 2(2): Establish and maintain a system of free public education in the elementary and high school levels (elementary is compulsory for all children of school age).',
          'Section 5(5): The State shall assign the highest budgetary priority to education and ensure that teaching will attract and retain its rightful share of the best available talents through adequate remuneration.',
        ],
      },
      {
        heading: '2. Professionalization Acts: RA 7836 and RA 9293',
        paragraphs: [
          'RA 7836 (Philippine Teachers Professionalization Act of 1994): Institutionalized the Licensure Examination for Teachers (LET) under the regulation of the Professional Regulation Commission (PRC) and created the Board for Professional Teachers (BPT).',
          'RA 9293 (Amendments to RA 7836 in 2004): Introduced key qualification and licensing flexibilities:',
        ],
        comparisonTable: {
          headers: ['Provision Area', 'RA 7836 (Original)', 'RA 9293 (Amended)'],
          rows: [
            ['Secondary Teacher Requirement', 'Bachelor’s degree in Education (BSEd) with major/minor', 'Bachelor’s degree in Arts and Sciences plus at least 18 units in Professional Education'],
            ['Para-teachers in Underserved Areas', 'No provision for para-teachers', 'Special permits granted to examinees who obtained a rating not lower than 5 percentage points below passing (70%–74%) to teach in remote/shortage areas for up to 2 years'],
            ['Professional License Renewal', 'Standard renewal process', 'Teachers who have not practiced for 5 continuous years must take at least 12 units of refresher pedagogy courses'],
          ],
        },
      },
      {
        heading: '3. Other Major Educational Acts in the Philippines',
        paragraphs: [
          'RA 10533 (Enhanced Basic Education Act of 2013): Formalized K to 12 (Universal Kindergarten + 6 years Elementary + 4 years Junior High + 2 years Senior High School).',
          'RA 9155 (Governance of Basic Education Act of 2001): Transformed DECS to DepEd, institutionalized School-Based Management (SBM), and empowered school heads.',
          'RA 10931 (Universal Access to Quality Tertiary Education Act of 2017): Free tuition and miscellaneous fees in State Universities and Colleges (SUCs) and Local Universities and Colleges (LUCs).',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'RA 7836',
        definition: 'The Philippine Teachers Professionalization Act of 1994, which instituted the LET under PRC.',
      },
      {
        term: 'Para-Teacher',
        definition: 'Under RA 9293, an examinee who scored 70-74% on the LET granted a temporary permit to teach in underserved areas.',
      },
    ],
    letTips: [
      'Elementary education is constitutionally compulsory; high school is free but not legally compulsory under Article XIV.',
      'Remember that non-education bachelor degree holders must complete at least 18 units in professional education to qualify for the LET under RA 9293.',
    ],
    summaryPoints: [
      'Article XIV mandates highest national budgetary priority to education.',
      'RA 7836 created the Board for Professional Teachers under PRC.',
      'RA 9293 allows 18 professional education units for non-BSEd graduates and para-teacher permits (70-74%).',
    ],
  },
  {
    id: 'mat-prof-found-003',
    slug: 'historical-foundations-of-philippine-education',
    title: 'Historical Foundations of Philippine Education: Pre-Colonial to Contemporary Era',
    subjectId: 'prof-foundations',
    subjectName: 'Philosophical & Sociological Foundations',
    category: 'prof_ed',
    topic: 'Historical Foundations',
    relatedTopics: ['Philosophies of Education', 'Legal Bases of Philippine Education'],
    description: 'Evolution of Philippine schooling: Pre-colonial informal apprenticeship, Spanish Educational Decree of 1863, American Act No. 74, and Commonwealth education.',
    readTimeMinutes: 7,
    overview:
      'Understanding the historical evolution of Philippine education illuminates how past colonial and socio-political systems shaped current curricular aims, language of instruction, and institutional governance.',
    sections: [
      {
        heading: '1. Chronological Eras of Philippine Education',
        paragraphs: [
          'Pre-Colonial Era: Education was informal, practical, and community-centered (apprenticeship model within the home and barangay; learning tribal customs, survival skills, and Baybayin script).',
          'Spanish Colonial Period (1565–1898): Parochial, religious, and teacher-centered. Education was church-controlled until the historic Educational Decree of 1863, which established the first public primary school system in municipalities and the Escuela Normal de Maestros.',
          'American Period (1898–1946): Democratic, secular, and universal. Act No. 74 (1901) established the public school system, made English the language of instruction, and deployed the "Thomasites" (American teachers aboard USS Thomas).',
          'Commonwealth Era (1935–1946): Nationalistic and character-oriented. Executive Order No. 134 proclaimed Tagalog as the basis of the national language.',
          'Japanese Occupation (1942–1945): Enforced Military Order No. 2, diffusion of Nippongo language, vocational training, and love for physical labor under the Greater East Asia Co-Prosperity Sphere.',
        ],
        comparisonTable: {
          headers: ['Historical Era', 'Primary Educational Aim', 'Medium of Instruction', 'Key Legacy'],
          rows: [
            ['Pre-Colonial', 'Survival, tribal values, vocational apprenticeship', 'Native dialects / Baybayin', 'Informal home-based learning'],
            ['Spanish Era', 'Christianization, moral catechism', 'Spanish / Local dialects', 'Educational Decree of 1863 (Public system & Normal schools)'],
            ['American Era', 'Democratic citizenship, universal literacy', 'English', 'Act No. 74 (Public school system, Thomasites)'],
            ['Japanese Era', 'Asian co-prosperity, love for labor, Nippongo', 'Nippongo, Tagalog, English', 'Vocational trade focus, character training'],
          ],
        },
      },
    ],
    keyTerms: [
      {
        term: 'Thomasites',
        definition: 'Group of approximately 500 American teachers who arrived in 1901 aboard the USS Thomas to establish the public school system.',
      },
      {
        term: 'Educational Decree of 1863',
        definition: 'Spanish decree establishing the first free, state-regulated primary school system in the Philippines.',
      },
    ],
    letTips: [
      'Act No. 74 established the Department of Public Instruction and brought the Thomasites.',
      'The Educational Decree of 1863 created the Escuela Normal de Maestros under the Jesuits.',
    ],
    summaryPoints: [
      'Pre-colonial education was informal and vocational.',
      'Spanish education focused on religious conversion and moral catechism.',
      'American education instituted secular public schooling in English.',
    ],
  },
  {
    id: 'mat-prof-found-004',
    slug: 'sociological-and-anthropological-bases-of-education',
    title: 'Sociological and Anthropological Bases of Education: Socialization and Equity',
    subjectId: 'prof-foundations',
    subjectName: 'Philosophical & Sociological Foundations',
    category: 'prof_ed',
    topic: 'Sociological & Anthropological Bases',
    relatedTopics: ['Philosophies of Education', 'Legal Bases of Philippine Education'],
    description: 'Structural-functionalism vs. conflict theory, enculturation vs. acculturation, the hidden curriculum, and culturally responsive pedagogy in diverse classrooms.',
    readTimeMinutes: 7,
    overview:
      'Sociological and anthropological foundations analyze the school as a social institution responsible for transmitting culture, socializing youth, promoting equity, and driving social mobility.',
    sections: [
      {
        heading: '1. Sociological Theories on Schooling',
        paragraphs: [
          'Structural-Functionalism (Emile Durkheim, Talcott Parsons): Views schooling as a vital social organ that maintains societal equilibrium, socializes learners into shared norms, and sorts individuals based on merit.',
          'Conflict Theory (Karl Marx, Pierre Bourdieu): Asserts that schools often reproduce socioeconomic inequalities by rewarding the cultural capital of dominant classes while marginalizing working-class and indigenous learners.',
          'Symbolic Interactionism: Focuses on everyday classroom interactions, teacher labeling effects, and self-fulfilling prophecies (Pygmalion effect).',
        ],
      },
      {
        heading: '2. Cultural Transmission: Enculturation vs. Acculturation',
        paragraphs: [
          'Enculturation: The lifelong process of learning and internalizing one\'s own native cultural heritage, language, and social mores from birth.',
          'Acculturation: The adoption of cultural traits, beliefs, or social patterns from another external cultural group resulting from sustained contact.',
          'Hidden Curriculum: The unwritten, informal, and tacit lessons, values, obedience norms, and social behaviors acquired in school alongside formal academic content.',
        ],
        comparisonTable: {
          headers: ['Concept', 'Core Process', 'Classroom Example'],
          rows: [
            ['Enculturation', 'Acquiring native culture from within', 'A child learning native regional traditions, folkways, and mother tongue at home'],
            ['Acculturation', 'Adopting external/foreign cultural traits', 'Filipino students adopting Western dress codes, idioms, and digital media behaviors'],
            ['Hidden Curriculum', 'Absorbing unwritten school rules and norms', 'Learning punctuality, raising hands to speak, and deference to authority'],
          ],
        },
      },
    ],
    keyTerms: [
      {
        term: 'Hidden Curriculum',
        definition: 'Unintended, unofficial social lessons, values, and behavioral norms transmitted to students in schools.',
      },
      {
        term: 'Enculturation',
        definition: 'The process of acquiring the traditional culture and customs of one’s native community.',
      },
    ],
    letTips: [
      'Enculturation is internal/native cultural learning; Acculturation is adopting foreign cultural traits.',
      'Remember the Pygmalion Effect: Teacher expectations strongly influence student academic performance.',
    ],
    summaryPoints: [
      'Functionalism emphasizes social cohesion; Conflict theory highlights cultural reproduction.',
      'Schools transmit explicit academic curricula and tacit hidden curricula.',
      'Culturally responsive teaching validates diverse cultural backgrounds in the classroom.',
    ],
  },
];
