import type { StudyMaterial } from '../../../types';

export const CHILD_DEV_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-prof-child-001',
    slug: 'piaget-stages-of-cognitive-development',
    title: 'Jean Piaget\'s Stages of Cognitive Development and Schema Theory',
    subjectId: 'prof-child-dev',
    subjectName: 'Child & Adolescent Development',
    category: 'prof_ed',
    topic: 'Cognitive Development (Piaget/Vygotsky)',
    relatedTopics: ['Psychosocial Theory (Erikson)', 'Moral Development (Kohlberg)', 'Behavioral & Social Learning'],
    description: 'Detailed analysis of Sensorimotor, Preoperational, Concrete, and Formal operational stages, schema adaptation, and developmental milestones.',
    readTimeMinutes: 8,
    overview:
      'Jean Piaget proposed that children actively construct knowledge as they explore and interact with their physical world. Cognitive growth progresses through four qualitative stages driven by equilibration, assimilation, and accommodation.',
    sections: [
      {
        heading: '1. Piagetian Stages of Cognitive Development',
        paragraphs: [
          'Piaget identified four sequential, invariant developmental stages corresponding to distinct age brackets and cognitive milestones:',
        ],
        comparisonTable: {
          headers: ['Stage', 'Approx. Age', 'Major Milestones', 'Cognitive Limitations'],
          rows: [
            ['1. Sensorimotor', 'Birth – 2 years', 'Object Permanence (knowing objects exist when hidden), goal-directed actions, trial-and-error exploration', 'Absence of symbolic thought and internal mental representation in early months'],
            ['2. Preoperational', '2 – 7 years', 'Symbolic thinking, rapid language acquisition, pretend play', 'Egocentrism (Three Mountains), Centration (focusing on one attribute), Irreversibility, Animism, Lack of conservation'],
            ['3. Concrete Operational', '7 – 11 years', 'Conservation (mass, volume, number), Reversibility, Decentration, Seriation (sorting by height/weight), Classification', 'Requires tangible, concrete objects; struggles with purely hypothetical or abstract propositions'],
            ['4. Formal Operational', '12 years – Adulthood', 'Hypothetico-deductive reasoning, abstract conceptualization, propositional logic, systematic problem solving', 'Adolescent egocentrism (imaginary audience, personal fable)'],
          ],
        },
      },
      {
        heading: '2. Schema Adaptation: Assimilation, Accommodation, and Equilibration',
        paragraphs: [
          'Schema: A basic mental building block of knowledge or framework used to organize and interpret information.',
          'Assimilation: Fitting new experiences or objects into an existing schema without changing the schema (e.g. calling a 4-legged cat a "dog").',
          'Accommodation: Modifying an existing schema or creating a completely new schema because new information contradicts current schemas.',
          'Equilibration: The cognitive balance between assimilation and accommodation; disequilibrium drives cognitive learning forward.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Object Permanence',
        definition: 'The realization attained in sensorimotor stage that objects continue to exist even when concealed from sight.',
      },
      {
        term: 'Conservation',
        definition: 'Understanding that physical properties (mass, volume, quantity) remain unchanged despite alterations in visual container shape.',
      },
    ],
    letTips: [
      'Preoperational children fail conservation tasks due to Centration (focusing on single dimension) and Irreversibility.',
      'Concrete operational students need physical manipulatives (e.g., base-ten blocks) to grasp arithmetic concepts.',
    ],
    summaryPoints: [
      'Cognitive development progresses from Sensorimotor to Formal Operations.',
      'Assimilation fits new data into old schemas; Accommodation modifies schemas.',
      'Object permanence develops in sensorimotor; Conservation in concrete operational.',
    ],
  },
  {
    id: 'mat-prof-child-002',
    slug: 'vygotsky-sociocultural-theory-and-erikson-stages',
    title: 'Lev Vygotsky\'s Socio-Cultural Theory and Erik Erikson\'s Psychosocial Stages',
    subjectId: 'prof-child-dev',
    subjectName: 'Child & Adolescent Development',
    category: 'prof_ed',
    topic: 'Psychosocial Theory (Erikson)',
    relatedTopics: ['Cognitive Development (Piaget/Vygotsky)', 'Moral Development (Kohlberg)'],
    description: 'Zone of Proximal Development (ZPD), Scaffolding (Bruner), and Erikson\'s 8 Psychosocial Crises across the human lifespan.',
    readTimeMinutes: 8,
    overview:
      'Vygotsky emphasized that social interaction and cultural tools drive cognitive growth. Erik Erikson formulated eight psychosocial crises that every human must resolve from infancy through late adulthood.',
    sections: [
      {
        heading: '1. Lev Vygotsky’s Socio-Cultural Framework',
        paragraphs: [
          'Zone of Proximal Development (ZPD): The fertile learning zone between what a student can do independently and what they can achieve with guidance from a More Knowledgeable Other (MKO).',
          'Scaffolding (Jerome Bruner): Temporary structured assistance provided by teachers or capable peers that is gradually removed as the student gains mastery.',
          'Private Speech: Talking aloud to oneself during early childhood that serves as a self-regulatory cognitive tool before becoming internalized inner thought.',
        ],
      },
      {
        heading: '2. Erikson\'s 8 Psychosocial Stages of Development',
        paragraphs: [
          'Erikson\'s lifespan theory posits that personality develops through eight sequential psychosocial crises:',
        ],
        comparisonTable: {
          headers: ['Stage & Age', 'Psychosocial Crisis', 'Basic Virtue / Strength', 'Key Social Relationship'],
          rows: [
            ['Infancy (0–18 mos)', 'Trust vs. Mistrust', 'Hope', 'Mother / Primary Caregiver'],
            ['Early Childhood (2–3 yrs)', 'Autonomy vs. Shame & Doubt', 'Will', 'Parents'],
            ['Preschool (3–5 yrs)', 'Initiative vs. Guilt', 'Purpose', 'Family / Playmates'],
            ['School Age (6–11 yrs)', 'Industry vs. Inferiority', 'Competence', 'School / Neighborhood / Teachers'],
            ['Adolescence (12–18 yrs)', 'Identity vs. Role Confusion', 'Fidelity', 'Peer Groups / Role Models'],
            ['Young Adulthood (19–40 yrs)', 'Intimacy vs. Isolation', 'Love', 'Spouse / Friends / Colleagues'],
            ['Middle Adulthood (40–65 yrs)', 'Generativity vs. Stagnation', 'Care', 'Work / Community / Family'],
            ['Maturity (65+ yrs)', 'Integrity vs. Despair', 'Wisdom', 'Mankind / Self-Reflection'],
          ],
        },
      },
    ],
    keyTerms: [
      {
        term: 'ZPD (Zone of Proximal Development)',
        definition: 'The gap between a learner\'s actual independent developmental level and their potential level achieved with skilled assistance.',
      },
      {
        term: 'Identity vs. Role Confusion',
        definition: 'The adolescent psychosocial crisis of discovering who one is and choosing personal, social, and vocational values.',
      },
    ],
    letTips: [
      'Elementary school students (ages 6–12) navigate "Industry vs. Inferiority" — praise their effort and competency.',
      'High school students navigate "Identity vs. Role Confusion" — encourage healthy career exploration and autonomy.',
    ],
    summaryPoints: [
      'Vygotsky: Learning is socially mediated through ZPD and scaffolding.',
      'Erikson: Eight lifespan crises shape human emotional and social development.',
    ],
  },
  {
    id: 'mat-prof-child-003',
    slug: 'kohlberg-stages-of-moral-development',
    title: 'Lawrence Kohlberg’s Stages of Moral Development and the Heinz Dilemma',
    subjectId: 'prof-child-dev',
    subjectName: 'Child & Adolescent Development',
    category: 'prof_ed',
    topic: 'Moral Development (Kohlberg)',
    relatedTopics: ['Cognitive Development (Piaget/Vygotsky)', 'Psychosocial Theory (Erikson)'],
    description: 'Pre-conventional, Conventional, and Post-conventional levels of moral reasoning, moral dilemmas, and Carol Gilligan’s Care Ethics critique.',
    readTimeMinutes: 7,
    overview:
      'Lawrence Kohlberg evaluated how children and adults reason through complex ethical dilemmas. Moral development proceeds through three levels and six distinct stages based on reasoning, not outward behavior.',
    sections: [
      {
        heading: '1. Three Levels and Six Stages of Moral Reasoning',
        paragraphs: [
          'Kohlberg presented subjects with moral dilemmas (e.g. Heinz stealing a drug for his dying wife) to classify their underlying moral justification:',
        ],
        comparisonTable: {
          headers: ['Level & Stage', 'Orientation / Stage Name', 'Basis of Moral Decision', 'Sample Reasoning in Heinz Dilemma'],
          rows: [
            ['Level 1: Pre-Conventional (Stage 1)', 'Obedience & Punishment', 'Consequences and physical punishment avoidance', '"Do not steal because the police will lock you up."'],
            ['Level 1: Pre-Conventional (Stage 2)', 'Individualism & Instrumental Exchange', 'Self-interest, personal reward, mutual barter', '"Steal the drug if Heinz wants his wife to cook for him later."'],
            ['Level 2: Conventional (Stage 3)', 'Good Boy / Nice Girl (Interpersonal)', 'Peer approval, social conformity, and good intentions', '"Steal the drug because people will think Heinz is a loving husband."'],
            ['Level 2: Conventional (Stage 4)', 'Law and Order / Social System', 'Duty, respect for authority, upholding laws and social order', '"Do not steal because the law prohibits theft; without laws, chaos reigns."'],
            ['Level 3: Post-Conventional (Stage 5)', 'Social Contract & Individual Rights', 'Democratic consensus, basic human rights, flexibility of laws', '"Steal because the right to human life transcends economic property rights."'],
            ['Level 3: Post-Conventional (Stage 6)', 'Universal Ethical Principles', 'Self-chosen abstract principles of justice, equality, and human dignity', '"Human life possesses absolute intrinsic worth; one must act on universal justice regardless of statutory law."'],
          ],
        },
      },
      {
        heading: '2. Carol Gilligan’s Care Ethics Critique',
        paragraphs: [
          'Carol Gilligan argued that Kohlberg\'s all-male sample produced a justice-oriented bias. She proposed an alternative "Ethics of Care" where women often prioritize interpersonal relationships, compassion, and minimizing harm over abstract rights.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Pre-Conventional Morality',
        definition: 'Moral reasoning driven purely by external physical rewards and punishments.',
      },
      {
        term: 'Universal Ethical Principles',
        definition: 'Stage 6 moral reasoning guided by self-chosen abstract principles of human dignity, justice, and equality.',
      },
    ],
    letTips: [
      'Stage 1 = Avoiding punishment; Stage 4 = Obeying the law to maintain social order; Stage 6 = Upholding human life above all.',
      'Remember that moral stages are determined by the *reasons* given for the choice, not the choice itself.',
    ],
    summaryPoints: [
      'Kohlberg\'s 3 levels: Pre-conventional (external), Conventional (social norms), Post-conventional (universal ethics).',
      'Gilligan introduced Care Ethics as a complementary relational perspective to Kohlberg\'s justice framework.',
    ],
  },
  {
    id: 'mat-prof-child-004',
    slug: 'behavioral-social-learning-and-ecological-systems',
    title: 'Behaviorism, Albert Bandura’s Social Learning, and Bronfenbrenner’s Bioecological Model',
    subjectId: 'prof-child-dev',
    subjectName: 'Child & Adolescent Development',
    category: 'prof_ed',
    topic: 'Behavioral & Social Learning',
    relatedTopics: ['Cognitive Development (Piaget/Vygotsky)', 'Psychosocial Theory (Erikson)'],
    description: 'Classical conditioning (Pavlov), operant conditioning (Skinner), observational modeling (Bandura), and Bronfenbrenner\'s ecological systems theory.',
    readTimeMinutes: 8,
    overview:
      'Learning is shaped by environmental stimuli, social observation, and nested ecological systems. This guide reviews classical conditioning, operant reinforcement, vicarious modeling, and bioecological contexts.',
    sections: [
      {
        heading: '1. Behavioral Conditioning: Pavlov and Skinner',
        paragraphs: [
          'Classical Conditioning (Ivan Pavlov): Learning through stimulus association (Unconditioned Stimulus -> Unconditioned Response; Conditioned Stimulus -> Conditioned Response; Extinction and Spontaneous Recovery).',
          'Operant Conditioning (B.F. Skinner): Behavior is shaped by its environmental consequences:',
          '- Positive Reinforcement: Adding a desirable stimulus to INCREASE behavior (e.g., praise, gold stars).',
          '- Negative Reinforcement: REMOVING an unpleasant stimulus to INCREASE behavior (e.g., canceling a boring chore for good lab work).',
          '- Positive Punishment: Adding an aversive stimulus to DECREASE behavior (e.g., reprimand).',
          '- Negative Punishment: Removing a valued privilege to DECREASE behavior (e.g., losing recess time).',
        ],
      },
      {
        heading: '2. Albert Bandura\'s Social Learning Theory',
        paragraphs: [
          'Observational Learning (Modeling): Learning occurs by observing the behaviors and consequences of others (Bobo doll experiment).',
          'Four Sub-Processes of Modeling: 1) Attention (noticing model) -> 2) Retention (remembering in memory) -> 3) Motor Reproduction (physical execution) -> 4) Motivation (reinforcement or incentive).',
          'Self-Efficacy: A person’s belief in their own capability to successfully accomplish a specific task.',
        ],
      },
      {
        heading: '3. Urie Bronfenbrenner’s Bioecological Systems Theory',
        paragraphs: [
          'Development is influenced by five nested environmental layers:',
          '- Microsystem: Direct, face-to-face environments (Family, classroom, peers, teachers).',
          '- Mesosystem: Interactions between two or more microsystems (e.g. Parent-Teacher conferences).',
          '- Exosystem: External settings affecting the child indirectly (e.g. parent\'s workplace stress, DepEd division policies).',
          '- Macrosystem: Overarching cultural values, socioeconomic strata, religious beliefs, and national laws.',
          '- Chronosystem: Temporal changes and historical milestones over the lifespan (e.g. pandemic, war).',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Negative Reinforcement',
        definition: 'Increasing the frequency of a behavior by removing an aversive or unpleasant stimulus.',
      },
      {
        term: 'Self-Efficacy',
        definition: 'One’s perceived confidence and belief in their ability to execute tasks and attain goals.',
      },
    ],
    letTips: [
      'Reinforcement (both positive and negative) ALWAYS increases/strengthens behavior.',
      'Punishment ALWAYS decreases/weakens behavior.',
      'Mesosystem is the relationship BETWEEN two microsystems (e.g., home and school collaboration).',
    ],
    summaryPoints: [
      'Pavlov conditioned automatic reflexes; Skinner shaped operant voluntary actions.',
      'Bandura proved that observational modeling and self-efficacy drive behavioral learning.',
      'Bronfenbrenner mapped child development across five nested ecological systems.',
    ],
  },
];
