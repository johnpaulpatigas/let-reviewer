import type { StudyMaterial } from '../../../types';

export const ETHICS_CLASSROOM_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-prof-ethics-001',
    slug: 'code-of-ethics-for-professional-teachers-and-ra-4670',
    title: 'Code of Ethics for Professional Teachers and Magna Carta for Public School Teachers (RA 4670)',
    subjectId: 'prof-ethics-mgmt',
    subjectName: 'Teaching Profession & Ethics',
    category: 'prof_ed',
    topic: 'Code of Ethics for Teachers',
    relatedTopics: ['Legal Mandates (RA 7836, RA 9293, RA 4670)'],
    description: 'Critical articles of the Code of Ethics (PRC Resolution 435), RA 4670 benefits, and DepEd Child Protection Policy (DO 40 s.2012).',
    readTimeMinutes: 8,
    overview:
      'The Code of Ethics for Professional Teachers and RA 4670 establish the legal and moral obligations of educators in the Philippines. These statutes constitute a significant portion of the LET Professional Education examination.',
    sections: [
      {
        heading: '1. Code of Ethics for Professional Teachers (Key Articles)',
        paragraphs: [
          'Pursuant to Section 6 of RA 7836, the PRC Board for Professional Teachers promulgated Resolution No. 435, establishing the ethical benchmarks for educators:',
        ],
        bulletPoints: [
          'Article II (The Teacher and the State): Every teacher shall enjoy academic freedom; shall actively help carry out state policies; shall NOT use position or official authority to proselytize or coerce others into partisan political activity.',
          'Article III (The Teacher and the Community): Teachers are intellectual leaders in the community; shall maintain harmonious relations with community officials; shall provide leadership in community welfare and civic betterment.',
          'Article V (The Teacher and the Teaching Profession): Teachers shall maintain professional dignity; participate in Continuing Professional Development (CPD); shall NOT accept gifts or favors that might influence professional evaluation.',
          'Article VIII (The Teacher and the Learners): Teachers shall recognize that the interest and welfare of learners are their first and most important concern; evaluation must be based on merit and quality; teachers are strictly prohibited from accepting remuneration for tutoring their own regular students; physical or psychological abuse is forbidden.',
          'Article IX (The Teacher and Parents): Teachers shall establish and maintain cordial relations with parents; hear their grievances with sympathy; and refrain from making disparaging remarks about students in front of others.',
        ],
        keyConcept:
          'Under Article VIII Section 5 of the Code of Ethics, a teacher shall NOT accept any remuneration from students or parents for tutorials or remedial classes conducted for their own enrolled students.',
      },
      {
        heading: '2. Republic Act No. 4670: Magna Carta for Public School Teachers (1966)',
        paragraphs: [
          'RA 4670 protects the rights, working conditions, economic security, and tenure of public school teachers:',
        ],
        comparisonTable: {
          headers: ['Provision', 'Legal Mandate under RA 4670', 'Classroom / Administrative Rule'],
          rows: [
            ['Teaching Hours (Sec. 13)', 'Maximum of 6 hours of actual classroom teaching per day', 'Any teaching load in excess of 6 hours must be compensated with regular pay PLUS at least 25% of basic salary'],
            ['Special Hardship Allowance (Sec. 19)', 'Compensation for teachers assigned in hazardous or remote areas', 'At least 25% of regular monthly compensation'],
            ['Medical Examination (Sec. 22)', 'Annual compulsory medical exam', 'Provided FREE of charge to all public school teachers by the government'],
            ['Study Leave (Sec. 24)', 'Entitled to Sabbatical / Study Leave after 7 continuous years of service', 'Up to 1 school year on full compensation (60% salary / provisions)'],
            ['Indefinite Sick Leave', 'For teachers afflicted with illnesses requiring prolonged treatment', 'Granted when nature of illness requires leave exceeding available sick days'],
            ['Transfers (Sec. 6)', 'Consent requirement', 'No teacher shall be transferred from one station to another without consent, except for urgent cause'],
          ],
        },
      },
      {
        heading: '3. DepEd Child Protection Policy (DepEd Order No. 40, s. 2012)',
        paragraphs: [
          'Strict "Zero Tolerance" policy against child abuse, exploitation, violence, discrimination, and bullying in all schools.',
          'Corporal Punishment is strictly prohibited in any form. This includes: physical beatings, forcing students into uncomfortable postures, public humiliation, verbal denigration, locking students in closets, or withholding basic physical needs as disciplinary action.',
          'Every school must establish a Child Protection Committee (CPC) chaired by the School Head.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'RA 4670',
        definition: 'The Magna Carta for Public School Teachers, enacted in 1966 to guarantee teachers’ rights, welfare, and employment security.',
      },
      {
        term: 'DepEd Order No. 40 s. 2012',
        definition: 'DepEd Child Protection Policy mandating zero tolerance for corporal punishment, bullying, and abuse in schools.',
      },
      {
        term: '6-Hour Rule',
        definition: 'Statutory maximum daily classroom teaching load for public school teachers without overtime compensation.',
      },
    ],
    letTips: [
      'If a scenario asks if a teacher can accept payment for tutoring their own regular enrolled student after class hours, the answer is ALWAYS NO (violation of Code of Ethics Article VIII).',
      'Under RA 4670, actual classroom teaching hours cannot exceed 6 HOURS per day. Any additional teaching requires 25% overtime pay.',
      'Corporal punishment is strictly illegal in all Philippine schools without exception.',
    ],
    commonMistakes: [
      'Thinking teachers can administer mild physical discipline (like standing in the corner with arms raised) if authorized by parents. This is corporal punishment and strictly prohibited under DO 40 s. 2012.',
      'Assuming teachers have 8 hours of continuous classroom teaching. It is 6 hours of teaching + 2 hours of lesson preparation/advising.',
    ],
    summaryPoints: [
      'Code of Ethics: Merit-based grading, no tutoring fees from own students, no partisan political coercion.',
      'RA 4670: 6 hours max teaching load, 25% overtime pay, annual free medical exam, study leave after 7 years.',
      'DO 40 s. 2012: Absolute zero tolerance for corporal punishment and bullying in schools.',
    ],
  },
  {
    id: 'mat-prof-ethics-002',
    slug: 'kounin-classroom-management-withitness-overlapping',
    title: "Jacob Kounin's Classroom Management: Withitness, Overlapping, and Group Focus",
    subjectId: 'prof-ethics-mgmt',
    subjectName: 'Teaching Profession & Ethics',
    category: 'prof_ed',
    topic: 'Kounin’s Classroom Management',
    relatedTopics: ['Teacher Rights and Responsibilities'],
    description: 'Preventative classroom management techniques, smoothness, momentum, desist cues, and ripple effect principles.',
    readTimeMinutes: 6,
    overview:
      'Jacob Kounin demonstrated through extensive video analysis that effective classroom managers differ from ineffective ones not in how they handle misbehavior, but in how proactively they prevent it through instructional pacing and awareness.',
    sections: [
      {
        heading: "1. Kounin's Five Key Instructional Management Dimensions",
        paragraphs: [
          'Kounin identified five behavioral traits displayed by teachers with low rates of student misbehavior:',
        ],
        comparisonTable: {
          headers: ['Concept', 'Definition / Teacher Behavior', 'Classroom Example'],
          rows: [
            ['Withitness', 'The teacher conveys that they are aware of everything happening in the room at all times ("eyes in the back of the head")', 'While writing on the board, the teacher turns and makes eye contact with a student passing a note before it disrupts the class'],
            ['Overlapping', 'The ability to attend to two or more concurrent events or issues smoothly without interrupting the lesson', 'While assisting a student in a reading circle, the teacher quietly nods and hands a hall pass to another student without pausing discussion'],
            ['Smoothness & Momentum', 'Maintaining continuous instructional pace without abrupt transitions or irrelevant distractions', 'Transitions from seatwork to group work happen promptly without teacher digressions or pauses'],
            ['Group Alerting & Focus', 'Keeping all students attentive and engaged even when one student is responding at the board', 'Teacher asks the question to the entire class, pauses, and randomly draws a student name, keeping all students prepared to respond'],
            ['Satiation Avoidance', 'Providing sufficient variety in instructional activities to prevent boredom and mental fatigue', 'Alternating between short mini-lecture, paired problem solving, and quick quiz games during a 60-minute period'],
          ],
        },
        keyConcept:
          'Withitness is the teacher’s constant situational awareness of classroom dynamics. It enables the teacher to target the correct misbehaving student promptly before misbehavior escalates.',
      },
      {
        heading: '2. Negative Management Behaviors to Avoid (Kounin)',
        paragraphs: [
          '1. Thrust: Bursting into an ongoing student activity without noticing that students are busy.',
          '2. Dangle: Starting an activity, leaving it hanging to do something else, and then coming back to it.',
          '3. Truncation: Starting an activity and abruptly dropping it completely without resolution.',
          '4. Flip-Flop: Terminating an activity, starting a new one, and then returning to the previous one after realizing something was forgotten.',
          '5. Stimulus-Bound: Teacher getting easily distracted by a minor irrelevance (e.g. noticing a poster slightly crooked and interrupting a math proof to fix it).',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Withitness',
        definition: 'A teacher’s continuous awareness of all classroom activities and prompt intervention before minor infractions escalate.',
      },
      {
        term: 'Overlapping',
        definition: 'The ability of a teacher to manage multiple classroom events simultaneously without derailing instruction.',
      },
      {
        term: 'Ripple Effect',
        definition: 'The phenomenon where correcting the misbehavior of one student positively influences the behavior of watching classmates.',
      },
    ],
    letTips: [
      'Whenever a scenario mentions a teacher addressing a misbehavior in the back row while continuously explaining a math problem on the chalkboard, select OVERLAPPING.',
      'If the scenario highlights a teacher who knows exactly who started a disturbance even with their back turned, choose WITHITNESS.',
    ],
    commonMistakes: [
      'Confusing Withitness with Overlapping. Withitness is knowing what is happening (awareness); Overlapping is doing two things at once (multitasking).',
    ],
    summaryPoints: [
      'Withitness = Eyes in the back of the head (constant awareness).',
      'Overlapping = Handling multiple situations simultaneously without stopping instruction.',
      'Smoothness & Momentum = Continuous instructional flow without distracting pauses.',
      'Ripple Effect = Correcting one student influences the whole room.',
    ],
  },
];
