import type { StudyMaterial } from '../../../types';

export const ETHICS_CLASSROOM_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-prof-ethics-001',
    slug: 'code-of-ethics-for-professional-teachers-philippines',
    title: 'Code of Ethics for Professional Teachers and Magna Carta for Public School Teachers (RA 4670)',
    subjectId: 'prof-ethics-mgmt',
    subjectName: 'Teaching Profession & Ethics',
    category: 'prof_ed',
    topic: 'Code of Ethics for Teachers',
    relatedTopics: ['Legal Mandates (RA 7836, RA 9293, RA 4670)', 'Kounin’s Classroom Management', 'Teacher Rights and Responsibilities'],
    description: 'Statutory ethical mandates: Teacher and the State, Teacher and the Community, Teacher and the Profession, Teacher and Students, and RA 4670 rights.',
    readTimeMinutes: 8,
    overview:
      'The Code of Ethics for Professional Teachers (Resolution No. 435, s. 1997) outlines the ethical obligations and professional boundaries required of all licensed teachers in the Philippines.',
    sections: [
      {
        heading: '1. Articles of the Code of Ethics for Professional Teachers',
        paragraphs: [
          'The Code sets explicit ethical standards governing educator conduct across twelve articles:',
        ],
        comparisonTable: {
          headers: ['Article', 'Constituency / Domain', 'Core Ethical Mandates & Prohibitions'],
          rows: [
            ['Article II', 'The Teacher and the State', 'Teachers shall transmit cultural heritage, instill national pride and obedience to laws. Teachers may exercise constitutional voting rights but SHALL NOT use position/authority to promote political candidates or partisan interests.'],
            ['Article III', 'The Teacher and the Community', 'Teachers shall provide leadership in community development, maintain harmonious community relationships, and study local customs. Prohibited from proselytizing or imposing religious beliefs on students/community.'],
            ['Article IV', 'The Teacher and the Profession', 'Commitment to continuous professional development (CPD), upholding the dignity of the profession, and avoiding corrupt or unbecoming behavior.'],
            ['Article V', 'The Teacher and Higher Authorities', 'Respect for legitimate administrative directives. Right to lodge formal grievances through proper official channels without insubordination or slander.'],
            ['Article VIII', 'The Teacher and the Learners', 'First and foremost concern is the interest and welfare of learners. Absolute prohibition against accepting gifts/favors in exchange for grades. If mutual attraction occurs with a student, the teacher must exercise utmost professional discretion or transfer the student.'],
            ['Article IX', 'The Teacher and the Parents', 'Establish cordial relations with parents, provide objective reports on learner progress, and listen to grievances with fairness and empathy.'],
          ],
        },
      },
    ],
    keyTerms: [
      {
        term: 'Code of Ethics Article II',
        definition: 'Prohibits teachers from using their classroom or authority for partisan political campaigning.',
      },
      {
        term: 'Article VIII Prohibitions',
        definition: 'Forbids accepting remuneration or gifts in exchange for concessions or grades from students.',
      },
    ],
    letTips: [
      'Teachers are permitted to vote and exercise political franchise, but CANNOT campaign inside the classroom or use school authority for candidate endorsements.',
      'Tutoring one’s own official classroom students for a fee is strictly unethical.',
    ],
    summaryPoints: [
      'Teachers must uphold state laws and promote democratic patriotism without partisan bias.',
      'Grades must be based strictly on merit and authentic performance, never gifts or personal favors.',
      'Maintain professional boundaries in student and community relationships.',
    ],
  },
  {
    id: 'mat-prof-ethics-002',
    slug: 'jacob-kounin-classroom-management-principles',
    title: 'Jacob Kounin\'s Classroom Management: Withitness, Overlapping, and Group Focus',
    subjectId: 'prof-ethics-mgmt',
    subjectName: 'Teaching Profession & Ethics',
    category: 'prof_ed',
    topic: 'Kounin’s Classroom Management',
    relatedTopics: ['Code of Ethics for Teachers', 'Teacher Rights and Responsibilities'],
    description: 'Mastery of Kounin\'s core managerial behaviors: Withitness, Overlapping, Smoothness, Momentum, Group Alerting, and Ripple Effect.',
    readTimeMinutes: 7,
    overview:
      'Jacob Kounin demonstrated that effective classroom managers prevent misbehavior through proactive instructional pacing, acute situational awareness, and seamless lesson transitions rather than punitive disciplinary interventions.',
    sections: [
      {
        heading: '1. Kounin’s Foundational Classroom Management Constructs',
        paragraphs: [
          'Effective teachers display specific instructional and behavioral management skills:',
        ],
        comparisonTable: {
          headers: ['Construct', 'Definition / Mechanism', 'Classroom Scenario & Example'],
          rows: [
            ['1. Withitness', 'Teacher communicates awareness of all classroom events ("eyes in the back of the head") and nips misbehavior in the bud immediately', 'Teacher makes eye contact and signals a distracting student in the back row while writing notes on the whiteboard'],
            ['2. Overlapping', 'Ability to attend to two or more simultaneous classroom events effectively without getting derailed', 'Teacher assists a student with a math question while simultaneously signaling another student to return quietly to their desk'],
            ['3. Smoothness', 'Maintaining continuous instructional flow without erratic digressions, tangents, or abrupt halts', 'Moving logically from homework review into guided practice without random interruptions'],
            ['4. Momentum', 'Keeping an energetic, appropriate instructional pace without stalling on minor logistical details (anti-slowdown)', 'Distributing supplies quickly without turning it into a 15-minute lecture'],
            ['5. Group Alerting', 'Techniques that keep the entire class engaged, accountable, and intellectually on their toes', 'Posing a question to the entire room, pausing for wait time, and randomly selecting a responder'],
            ['6. Ripple Effect', 'When correcting one student’s misbehavior influences and improves the behavior of other observing students', 'Quietly reminding one student to stay on task causes adjacent whispering peers to refocus immediately'],
          ],
        },
      },
      {
        heading: '2. Teacher Movement Pitfalls Identified by Kounin',
        paragraphs: [
          'Dangling: Teacher begins an activity, leaves it hanging in mid-air, and starts another unrelated task.',
          'Flip-Flop: Teacher terminates an activity, transitions to another, and then suddenly jumps back to the first activity.',
          'Thrust: Teacher bursts into an ongoing student activity with instructions without noticing student readiness.',
          'Fragmentation: Teacher unnecessarily breaks an instructional activity into tiny, tedious steps or has students perform tasks individually when whole-group action is more efficient.',
          'Overdwelling: Spending excessive, redundant time lecturing on a rule or behavioral infraction long after students have understood.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Withitness',
        definition: 'A teacher’s continuous situational awareness of everything occurring simultaneously throughout the classroom.',
      },
      {
        term: 'Overlapping',
        definition: 'The capability of a teacher to manage multiple ongoing classroom events and student interactions at once.',
      },
    ],
    letTips: [
      'If the teacher stops misbehavior early and targets the correct instigator -> Withitness.',
      'If the teacher manages a student question while collecting homework without stopping the lesson -> Overlapping.',
    ],
    summaryPoints: [
      'Withitness and Overlapping represent managerial multitasking and environmental awareness.',
      'Smoothness and Momentum prevent transition stalls and disruptive misbehavior.',
      'Eliminate movement traps: dangling, flip-flops, thrusts, and overdwelling.',
    ],
  },
  {
    id: 'mat-prof-ethics-003',
    slug: 'magna-carta-and-professional-teacher-statutes',
    title: 'Legal Mandates: Magna Carta for Public School Teachers (RA 4670) and Licensing Laws',
    subjectId: 'prof-ethics-mgmt',
    subjectName: 'Teaching Profession & Ethics',
    category: 'prof_ed',
    topic: 'Legal Mandates (RA 7836, RA 9293, RA 4670)',
    relatedTopics: ['Code of Ethics for Teachers', 'Teacher Rights and Responsibilities'],
    description: 'In-depth review of Republic Act No. 4670 (teaching hours, overtime, study leave, security of tenure) and RA 7836 / RA 9293 teacher licensing regulations.',
    readTimeMinutes: 8,
    overview:
      'RA 4670 (Magna Carta for Public School Teachers) guarantees rights, working conditions, economic benefits, and career security for public school educators in the Philippines.',
    sections: [
      {
        heading: '1. Magna Carta for Public School Teachers (RA 4670)',
        paragraphs: [
          'Working Hours: Maximum of SIX (6) HOURS of actual classroom teaching per day. Any teaching load in excess of 6 hours requires additional compensation of at least 25% of regular basic pay.',
          'Health and Medical Benefits: Free annual medical physical examination for all public school teachers; free treatment and hospitalization for occupational diseases.',
          'Paid Study Leave (Sabbatical): Teachers who have rendered at least SEVEN (7) YEARS of continuous satisfactory service are entitled to a study leave for up to one full school year on 60% of basic salary.',
          'Special Hardship Allowance: At least 25% of monthly salary for teachers assigned to remote, isolated, or hazardous hardship posts.',
          'Security of Tenure & Transfers: No transfer shall be made from one station to another without the consent of the teacher, except for deep public interest with transportation and moving expenses fully paid by the government.',
        ],
        comparisonTable: {
          headers: ['Statutory Benefit', 'Legal Threshold under RA 4670'],
          rows: [
            ['Max Classroom Teaching Hours', '6 hours daily (excess compensated at +25%)'],
            ['Overtime / Hardship Rate', 'At least 25% of regular monthly salary'],
            ['Paid Study Leave Eligibility', '7 years of continuous service (60% salary for up to 1 year)'],
            ['Medical Examination', 'Mandatory free annual physical examination'],
          ],
        },
      },
      {
        heading: '2. Revocation and Suspension of License under RA 7836',
        paragraphs: [
          'The Board for Professional Teachers may suspend or revoke a teacher\'s Certificate of Registration and License on the following grounds:',
          '1. Conviction by a court of competent jurisdiction of any criminal offense involving moral turpitude.',
          '2. Immoral, unprofessional, or dishonorable conduct.',
          '3. Gross incompetence, negligence, or malpractice in the practice of teaching.',
          '4. Falsification of documents, fraud, or deceit in obtaining a license.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'RA 4670',
        definition: 'The Magna Carta for Public School Teachers enacted in 1966 to improve social and economic status of educators.',
      },
      {
        term: 'Actual Teaching Hours',
        definition: 'Statutory limit of 6 hours per day for direct classroom instruction under RA 4670.',
      },
    ],
    letTips: [
      'A teacher can only be assigned a maximum of 6 hours of actual classroom teaching; extra hours mandate +25% compensation.',
      'Sabbatical study leave requires 7 years of service and provides up to 60% salary.',
    ],
    summaryPoints: [
      'RA 4670 protects teacher welfare, work hours, and economic benefits.',
      'Transfers cannot be imposed punitively without consent.',
      'License revocation requires due process for offenses involving moral turpitude or gross negligence.',
    ],
  },
  {
    id: 'mat-prof-ethics-004',
    slug: 'teacher-rights-child-protection-and-in-loco-parentis',
    title: 'Teacher Rights, DepEd Child Protection Policy (DO 40, s. 2012), and Legal Liabilities',
    subjectId: 'prof-ethics-mgmt',
    subjectName: 'Teaching Profession & Ethics',
    category: 'prof_ed',
    topic: 'Teacher Rights and Responsibilities',
    relatedTopics: ['Code of Ethics for Teachers', 'Legal Mandates (RA 7836, RA 9293, RA 4670)'],
    description: 'DepEd Child Protection Policy, absolute ban on corporal punishment, the doctrine of In Loco Parentis (Family Code), and educator legal liability.',
    readTimeMinutes: 7,
    overview:
      'Educators stand In Loco Parentis (in the place of parents) regarding student custody and care. Understanding child protection mandates, positive non-violent discipline, and civil liabilities is critical for professional practice.',
    sections: [
      {
        heading: '1. DepEd Child Protection Policy (DepEd Order No. 40, s. 2012)',
        paragraphs: [
          'Zero Tolerance Policy: Mandatory prohibition against child abuse, violence, discrimination, exploitation, and bullying in all basic education schools.',
          'Corporal Punishment Ban: Explicitly forbids any act of physical punishment (slapping, kneeling on mongo beans, hitting with ruler, forced manual labor) or psychological degradation (ridicule, shaming, verbal insults).',
          'Positive and Non-Violent Discipline: Managing classroom behavior through clear proactive rules, restorative dialogue, empathy, and constructive problem-solving.',
        ],
      },
      {
        heading: '2. Doctrine of In Loco Parentis and Civil Liability',
        paragraphs: [
          'Family Code of the Philippines (Articles 218 & 219): The school, administrators, and teachers have special parental authority and responsibility over minor children while under their custody and supervision.',
          'Duty of Care: Teachers are legally liable for damages and injuries sustained by students during curricular or authorized school activities (e.g. laboratory experiments, sports, field trips) unless they prove they exercised the diligence of a "good father of a family" (due diligence).',
        ],
        comparisonTable: {
          headers: ['Legal Concept', 'Statutory Source', 'Teacher Duty & Legal Standard'],
          rows: [
            ['In Loco Parentis', 'Family Code Art. 218', 'Special parental authority exercising custody and supervision over minors'],
            ['Due Diligence', 'Civil Code Art. 2180', 'Exercising the diligence of a "good father of a family" to protect students from foreseeable harm'],
            ['Corporal Punishment Prohibition', 'DepEd DO 40, s. 2012', 'Strict ban on physical or psychological punishment; positive discipline required'],
          ],
        },
      },
    ],
    keyTerms: [
      {
        term: 'In Loco Parentis',
        definition: 'Legal doctrine granting teachers special parental authority and responsibility over students under school custody.',
      },
      {
        term: 'Corporal Punishment',
        definition: 'Cruel, humiliating, or physical punishment strictly banned under DepEd Child Protection Policy.',
      },
    ],
    letTips: [
      'Corporal punishment is strictly forbidden with zero tolerance under DO 40, s. 2012; even non-contact public shaming is classified as psychological abuse.',
      'Teachers must exercise the diligence of a good father of a family during all school-supervised activities.',
    ],
    summaryPoints: [
      'DepEd Order No. 40 enforces a zero-tolerance policy against child abuse and corporal punishment.',
      'Teachers hold special parental authority and must exercise due diligence for student safety.',
      'Positive discipline replaces punitive sanctions with constructive behavior support.',
    ],
  },
];
