import type { StudyMaterial } from '../../../types';

export const FOUNDATIONS_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-prof-found-001',
    slug: 'educational-philosophies-progressivism-essentialism-perennialism',
    title: 'Major Educational Philosophies: Essentialism, Progressivism, Perennialism, and Existentialism',
    subjectId: 'foundations',
    subjectName: 'Foundations of Education',
    category: 'prof_ed',
    topic: 'Foundations of Education & Philosophies',
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
        definition: 'Educational philosophy asserting that human intellect is best developed by studying enduring universal truths in classic literature.',
      },
    ],
    letTips: [
      'Keywords for Progressivism: "Learning by doing", "Dewey", "hands-on", "experiential", "community-based", "democratic".',
      'Keywords for Essentialism: "Back to the basics", "3Rs", "mastery of subject matter", "academic rigor".',
      'Keywords for Perennialism: "Great books", "timeless truths", "classical canon", "universal human nature".',
      'Keywords for Existentialism: "Individual choice", "freedom", "self-discovery", "uniqueness".',
    ],
    commonMistakes: [
      'Confusing Essentialism with Perennialism. Both are teacher-centered, but Essentialism focuses on basic modern competencies (3Rs), while Perennialism focuses on timeless philosophical classics (Great Books).',
    ],
    summaryPoints: [
      'Essentialism = Back to basics, 3Rs, subject-matter mastery.',
      'Progressivism = Dewey, learning by doing, student-centered.',
      'Perennialism = Great books, timeless classical truths.',
      'Existentialism = Individual freedom and authentic choices.',
      'Social Reconstructionism = School as an engine for social justice and societal reform.',
    ],
  },
  {
    id: 'mat-prof-found-002',
    slug: 'philippine-education-laws-ra-7836-ra-9293-and-1987-constitution',
    title: 'Legal Bases of Philippine Education: RA 7836, RA 9293, and Article XIV',
    subjectId: 'foundations',
    subjectName: 'Foundations of Education',
    category: 'prof_ed',
    topic: 'Legal Bases of Philippine Education',
    description: 'Essential Philippine education laws, teacher licensing requirements, PRC board composition, and Constitutional mandates.',
    readTimeMinutes: 7,
    overview:
      'The Philippine Licensure Examination for Teachers requires mastery of landmark legislation governing teacher professionalization, constitutional mandates on free public education, and regulatory policies.',
    sections: [
      {
        heading: '1. Republic Act No. 7836: Philippine Teachers Professionalization Act of 1994',
        paragraphs: [
          'Enacted on December 15, 1994, RA 7836 professionalized teaching in the Philippines by creating the Board for Professional Teachers under the PRC and mandating the Licensure Examination for Teachers (LET).',
          'Prior to RA 7836, teachers were certified under Presidential Decree No. 1006 (Civil Service Commission / National Board for Teachers). RA 7836 transferred licensing jurisdiction entirely to the Professional Regulation Commission (PRC).',
        ],
        bulletPoints: [
          'Board Composition: 5 members appointed by the President of the Philippines from nominees submitted by PRC.',
          'Term of Office: 3 years, with eligibility for one reappointment.',
          'Passing Mark: A general average of not less than 75% with no rating below 50% in any subject.',
          'Revocation of Certificate of Registration: Immorality, unprofessional conduct, chronic inebriety, mental incompetence, fraud in obtaining license.',
        ],
        keyConcept:
          'RA 7836 makes teaching an official licensed profession in the Philippines, legally requiring a valid PRC license and Certificate of Registration to practice in public or private basic education institutions.',
      },
      {
        heading: '2. Republic Act No. 9293: Amendments to RA 7836 (2004)',
        paragraphs: [
          'RA 9293 introduced important amendments to enhance the qualifications and deployment of teachers:',
        ],
        comparisonTable: {
          headers: ['Provision', 'RA 7836 (Original)', 'RA 9293 (Amended)'],
          rows: [
            ['Non-Education Graduates', 'Required 10 units in professional education', 'Increased requirement to at least 18 units of Professional Education'],
            ['Special Permits', 'Strict temporary licensing', 'Allows issuance of Special Permits to individuals with a LET rating of 70% to 74% to teach in shortage/remote areas (valid for up to 3 years)'],
            ['Para-teachers', 'Not formally institutionalized', 'Formalized para-teachers who scored 70-74% in areas with acute teacher shortages'],
            ['Professional Registration', 'Mandatory license without periodic renewal penalty', 'Mandates that registered professional teachers who have not practiced for 5 continuous years must take 12 units of refresher courses (6 units content + 6 units pedagogy)'],
          ],
        },
      },
      {
        heading: '3. 1987 Philippine Constitution: Article XIV (Education, Science, and Technology)',
        paragraphs: [
          'Section 1: The State shall protect and promote the right of all citizens to quality education at all levels and shall take appropriate steps to make such education accessible to all.',
          'Section 2(2): Establish and maintain a system of free public education in the elementary and high school levels (elementary education is compulsory for all children of school age).',
          'Section 3(2): All educational institutions shall inculcate patriotism, nationalism, foster love of humanity, respect for human rights, and teach the rights and duties of citizenship.',
          'Section 5(4): The State shall enhance the right of teachers to professional advancement. The State shall assign the HIGHEST BUDGETARY PRIORITY to education.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'RA 7836',
        definition: 'Philippine Teachers Professionalization Act of 1994, instituting the PRC Board for Professional Teachers and the LET.',
      },
      {
        term: 'RA 9293',
        definition: '2004 amendment to RA 7836 requiring 18 units in professional education for non-Ed graduates and institutionalizing refresher courses for inactive teachers.',
      },
      {
        term: 'Article XIV, Sec 5(4)',
        definition: 'Constitutional provision mandating that the government assign the highest budgetary priority to education.',
      },
    ],
    letTips: [
      'If an exam question asks what the state gives the highest budgetary priority to under the 1987 Constitution, the answer is EDUCATION.',
      'Remember: Non-education degree holders need at least 18 units in professional education (pursuant to RA 9293) to qualify for the LET.',
      'A teacher who has not practiced teaching for 5 consecutive years must take 12 units of refresher courses before returning to the classroom.',
    ],
    commonMistakes: [
      'Selecting Presidential Decree 1006 as the current teacher licensing law. PD 1006 was repealed and superseded by RA 7836 in 1994.',
      'Believing high school education is compulsory. Under the Constitution, elementary education is compulsory; both elementary and high school are free in public schools.',
    ],
    summaryPoints: [
      'RA 7836 professionalized teaching under the PRC with a 75% LET passing threshold.',
      'RA 9293 requires 18 prof-ed units for non-BEd graduates and 12-unit refresher courses after 5 years of non-practice.',
      '1987 Constitution Article XIV mandates highest budgetary priority for education and free public basic education.',
    ],
  },
];
