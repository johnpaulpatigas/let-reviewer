import type { StudyMaterial } from '../../../types';

export const CHILD_DEV_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-prof-child-001',
    slug: 'piaget-cognitive-development-stages',
    title: "Jean Piaget's Stages of Cognitive Development and Schema Theory",
    subjectId: 'child-development',
    subjectName: 'Child & Adolescent Development',
    category: 'prof_ed',
    topic: 'Child and Adolescent Development',
    description: 'Detailed breakdown of Sensorimotor, Preoperational, Concrete Operational, and Formal Operational stages with schema mechanics.',
    readTimeMinutes: 7,
    overview:
      "Jean Piaget's constructivist theory posits that children actively construct mental models of their world through assimilation, accommodation, and equilibration as they pass through four distinct cognitive stages.",
    sections: [
      {
        heading: '1. Basic Cognitive Mechanisms: Schema, Assimilation, Accommodation',
        paragraphs: [
          'Piaget proposed that cognitive development is driven by a biological drive to achieve equilibrium between mental schemes and environmental experiences:',
          'Schema: A mental structure or framework that organizes and interprets information.',
          'Assimilation: Fitting new information into existing schemas without changing the schema (e.g. calling a zebra a "striped horse").',
          'Accommodation: Modifying an existing schema or creating a new schema in response to new information that does not fit (e.g. creating a separate "zebra" category).',
          'Equilibration: The cognitive state of balance between assimilation and accommodation. Disequilibrium occurs when a new experience contradicts existing schemas, driving cognitive growth.',
        ],
        keyConcept:
          'Cognitive growth requires moments of cognitive disequilibrium where existing mental models are challenged and accommodated.',
      },
      {
        heading: '2. The Four Stages of Cognitive Development',
        paragraphs: [
          'Piaget identified four invariant stages through which children construct knowledge:',
        ],
        comparisonTable: {
          headers: ['Stage', 'Age Range', 'Hallmark Characteristics', 'Key Milestones & Cognitive Limitations'],
          rows: [
            ['Sensorimotor', '0 – 2 years', 'Learning through sensory exploration and motor activity', 'Object Permanence (recognizing objects exist when hidden); Stranger anxiety; Goal-directed actions'],
            ['Preoperational', '2 – 7 years', 'Symbolic thinking, language explosion, intuitive reasoning', 'Egocentrism (inability to see another perspective); Centration (focusing on one aspect); Irreversibility; Animism (attributing life to inanimate objects); Lack of conservation'],
            ['Concrete Operational', '7 – 11 years', 'Logical thought applied to tangible, physical objects', 'Conservation achieved (number, mass, volume); Decentration; Reversibility; Seriation (ordering); Classification; Inability to solve purely hypothetical abstract problems'],
            ['Formal Operational', '12 years & above', 'Abstract, hypothetical, and deductive reasoning', 'Hypothetico-deductive reasoning; Metacognition; Idealistic thinking; Systematic problem solving and variable isolation'],
          ],
        },
      },
      {
        heading: '3. Pedagogical Applications of Piagetian Theory',
        paragraphs: [
          'Provide hands-on manipulatives for concrete operational learners before introducing symbolic notations (e.g. fraction tiles before fraction algorithms).',
          'Avoid assuming that preoperational children are being selfish when showing egocentrism—they are developmentally unable to visualize another person’s vantage point (Three Mountain Task).',
          'Challenge adolescents in the formal operational stage with moral dilemmas, experimental hypotheses, and open-ended scientific investigations.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Object Permanence',
        definition: 'The realization that objects continue to exist even when they cannot be seen, heard, or touched (achieved around 8-9 months).',
      },
      {
        term: 'Centration',
        definition: 'The tendency of preoperational children to focus on only one salient aspect of a situation while neglecting other relevant features.',
      },
      {
        term: 'Conservation',
        definition: 'The understanding that physical properties of matter (mass, volume, quantity) remain identical despite changes in appearance or container shape.',
      },
    ],
    letTips: [
      'If a test item describes a child believing a tall thin glass has more juice than a short wide glass with the identical volume, the child is in the PREOPERATIONAL stage demonstrating CENTRATION and lack of conservation.',
      'If a student can isolate variables methodically (e.g. testing the pendulum problem), they have attained FORMAL OPERATIONAL thinking.',
    ],
    commonMistakes: [
      'Confusing assimilation with accommodation. Assimilation fits new data into an old category; accommodation changes the category itself.',
      'Assuming concrete operational students can easily handle abstract algebraic proofs without concrete representations.',
    ],
    summaryPoints: [
      'Sensorimotor (0-2): Object permanence is the major milestone.',
      'Preoperational (2-7): Egocentrism, animism, centration, irreversibility.',
      'Concrete Operational (7-11): Conservation, reversibility, logical thought with concrete objects.',
      'Formal Operational (12+): Abstract thought, hypothetical-deductive reasoning.',
    ],
  },
  {
    id: 'mat-prof-child-002',
    slug: 'vygotsky-scaffolding-and-erikson-psychosocial-stages',
    title: "Vygotsky's Socio-Cultural Theory and Erikson's Psychosocial Stages",
    subjectId: 'child-development',
    subjectName: 'Child & Adolescent Development',
    category: 'prof_ed',
    topic: 'Child and Adolescent Development',
    description: 'Zone of Proximal Development (ZPD), MKO, scaffolding techniques, and Erikson’s 8 psychosocial crises for teacher preparation.',
    readTimeMinutes: 7,
    overview:
      'Lev Vygotsky highlighted the social origin of cognition through the Zone of Proximal Development, while Erik Erikson mapped lifelong human personality across 8 developmental psychosocial crises.',
    sections: [
      {
        heading: '1. Lev Vygotsky: Socio-Cultural Theory of Learning',
        paragraphs: [
          'Unlike Piaget who viewed the child as an independent "little scientist", Vygotsky argued that cognitive development is social and cultural. Cognitive functions originate in social interactions (interpsychological) before becoming internalized (intrapsychological).',
          'Zone of Proximal Development (ZPD): The distance between the actual development level (what the learner can do independently) and the potential development level (what the learner can do with guidance from a More Knowledgeable Other).',
          'Scaffolding: Temporary instructional assistance provided by a teacher or peer that is gradually withdrawn as the learner achieves mastery (concept elaborated by Jerome Bruner).',
          'Language as a Tool for Thought: Children use private speech (talking to themselves aloud) to regulate behavior and guide cognitive tasks, which eventually internalizes as inner speech around age 7.',
        ],
        keyConcept:
          'Effective instruction targets the Zone of Proximal Development (ZPD). Teaching content that a child can already do independently causes boredom; teaching far beyond the ZPD causes frustration.',
      },
      {
        heading: '2. Erik Erikson: Eight Stages of Psychosocial Development',
        paragraphs: [
          'Erikson proposed that individuals pass through 8 universal psychosocial crises where social relationships shape psychological identity:',
        ],
        comparisonTable: {
          headers: ['Stage & Age', 'Psychosocial Crisis', 'Significant Relationship', 'Positive Outcome (Virtue) vs. Maladaptive Result'],
          rows: [
            ['Infancy (0 – 18 mos)', 'Trust vs. Mistrust', 'Maternal caregiver', 'Hope / Consistent care builds security vs. neglect builds suspicion'],
            ['Early Childhood (2 – 3 yrs)', 'Autonomy vs. Shame & Doubt', 'Parents', 'Will / Allowing self-control builds confidence vs. over-control builds self-doubt'],
            ['Preschool (3 – 5 yrs)', 'Initiative vs. Guilt', 'Family / Kindergarten', 'Purpose / Encouraging curiosity and projects vs. punishing curiosity creates guilt'],
            ['School Age (6 – 11 yrs)', 'Industry vs. Inferiority', 'School, teachers, peers', 'Competence / Praising effort and skill mastery vs. harsh comparison creates inadequacy'],
            ['Adolescence (12 – 18 yrs)', 'Identity vs. Role Confusion', 'Peer group, role models', 'Fidelity / Exploring self-definition and career values vs. fragmented sense of self'],
            ['Young Adulthood (19 – 40 yrs)', 'Intimacy vs. Isolation', 'Partners, close friends', 'Love / Deep interpersonal commitment vs. fear of vulnerability causing loneliness'],
            ['Middle Adulthood (40 – 65 yrs)', 'Generativity vs. Stagnation', 'Workplace, community', 'Care / Guiding the next generation vs. self-centered indulgence'],
            ['Late Adulthood (65+ yrs)', 'Integrity vs. Despair', 'Mankind / Society', 'Wisdom / Reflection with pride and fulfillment vs. regret and bitterness'],
          ],
        },
      },
      {
        heading: '3. Classroom Application of Industry vs. Inferiority',
        paragraphs: [
          'In elementary school (grades 1–6), students are in the Industry vs. Inferiority stage. Teachers must provide opportunities for every child to experience success, avoid public rankings that humiliate struggling students, and emphasize effort and personal growth.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Zone of Proximal Development (ZPD)',
        definition: 'The gap between what a learner can accomplish independently and what they can achieve with guidance from a More Knowledgeable Other.',
      },
      {
        term: 'Scaffolding',
        definition: 'Temporary support mechanisms tailored to the student’s needs that are systematically reduced as competence develops.',
      },
      {
        term: 'Industry vs. Inferiority',
        definition: 'Erikson’s fourth crisis (ages 6–11) where children strive to master academic and social skills; failure or negative comparison leads to feelings of inadequacy.',
      },
    ],
    letTips: [
      'If a high school student is struggling with career direction and joining different subcultures to figure out who they are, the crisis is IDENTITY VS. ROLE CONFUSION.',
      'Elementary students needing praise for their projects and science fair models are navigating INDUSTRY VS. INFERIORITY.',
      'Whenever an item mentions paired learning where an advanced peer assists a struggling classmate, connect it to Vygotsky’s MKO and ZPD.',
    ],
    commonMistakes: [
      'Assuming scaffolding means giving the answer to the student. Scaffolding means providing strategic prompts, clues, graphic organizers, and step-by-step models.',
      'Confusing Initiative (preschool exploration) with Industry (school-age skill mastery and perseverance).',
    ],
    summaryPoints: [
      'Vygotsky: Learning occurs through socio-cultural mediation in the ZPD.',
      'More Knowledgeable Other (MKO) and Scaffolding bridge the gap from actual to potential development.',
      'Erikson School Age (6-11): Industry vs. Inferiority (develops competence).',
      'Erikson Adolescence (12-18): Identity vs. Role Confusion (develops fidelity).',
    ],
  },
];
