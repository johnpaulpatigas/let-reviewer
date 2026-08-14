import type { StudyMaterial } from '../../../types';

export const PRINCIPLES_TEACHING_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-prof-prin-001',
    slug: 'revised-blooms-taxonomy-and-higher-order-thinking-skills',
    title: "Revised Bloom's Taxonomy, HOTS, and Questioning Strategies",
    subjectId: 'principles-of-teaching',
    subjectName: 'Principles of Teaching',
    category: 'prof_ed',
    topic: 'Principles and Methods of Teaching',
    description: 'Anderson and Krathwohl’s cognitive dimensions, verb classifications, wait time mechanics, and Socratic questioning techniques.',
    readTimeMinutes: 7,
    overview:
      'Lorim Anderson and David Krathwohl revised Benjamin Bloom’s classic taxonomy by converting static noun categories into dynamic action verbs and switching the pinnacle levels from Evaluation to Creating.',
    sections: [
      {
        heading: "1. The 6 Cognitive Process Dimensions in Anderson & Krathwohl's Revision",
        paragraphs: [
          'The Revised Taxonomy structures cognitive objectives hierarchically from Lower-Order Thinking Skills (LOTS) to Higher-Order Thinking Skills (HOTS):',
        ],
        comparisonTable: {
          headers: ['Cognitive Level', 'Category Type', 'Operational Verbs', 'Description & Sample Question'],
          rows: [
            ['Remembering', 'LOTS', 'Define, identify, list, label, recall, name, state', 'Retrieving relevant knowledge from long-term memory. E.g., "What is the capital of the Philippines?"'],
            ['Understanding', 'LOTS', 'Explain, summarize, paraphrase, classify, illustrate', 'Constructing meaning from instructional messages. E.g., "Explain in your own words how photosynthesis works."'],
            ['Applying', 'LOTS / Mid', 'Execute, implement, solve, calculate, demonstrate', 'Carrying out or using a procedure in a given situation. E.g., "Calculate the slope given these two coordinate points."'],
            ['Analyzing', 'HOTS', 'Differentiate, organize, deconstruct, compare, contrast', 'Breaking material into constituent parts and determining how parts relate to an overall structure. E.g., "Contrast the motives of Ibarra vs. Simoun."'],
            ['Evaluating', 'HOTS', 'Judge, critique, defend, justify, appraise, rate', 'Making judgments based on criteria and standards. E.g., "Evaluate the ethical implications of genetic cloning using a moral framework."'],
            ['Creating', 'HOTS (Highest)', 'Design, construct, formulate, invent, compose, plan', 'Putting elements together to form a novel, coherent whole or original product. E.g., "Design an action plan to reduce school plastic waste by 50%."'],
          ],
        },
        keyConcept:
          'In the 2001 revision, CREATING replaced SYNTHESIS and moved above EVALUATING as the highest cognitive operational level.',
      },
      {
        heading: '2. The Knowledge Dimension (Four Types of Knowledge)',
        paragraphs: [
          'The revised taxonomy is two-dimensional, crossing the 6 cognitive processes with 4 knowledge categories:',
          '1. Factual Knowledge: Basic elements students must know to be acquainted with a discipline (terminology, specific details).',
          '2. Conceptual Knowledge: Interrelationships among basic elements (classifications, categories, principles, generalizations, theories).',
          '3. Procedural Knowledge: How to do something (skills, algorithms, techniques, methods).',
          '4. Metacognitive Knowledge: Awareness and knowledge of one’s own cognition (strategic knowledge, self-monitoring, cognitive task awareness).',
        ],
      },
      {
        heading: '3. Effective Questioning Techniques & Mary Budd Rowe’s Wait Time',
        paragraphs: [
          'Wait Time 1 (Pause after asking a question): Giving students at least 3 to 5 seconds of silence before calling on a responder increases student participation, length of answers, and speculative thinking.',
          'Wait Time 2 (Pause after a student answers): Pausing after a student responds before reacting allows the student to elaborate and invite peer responses.',
          'Avoid Chorus Responses (unless practicing choral reading), and avoid calling on a specific student before stating the question to prevent the rest of the class from tuning out.',
        ],
      },
    ],
    keyTerms: [
      {
        term: "Revised Bloom's Taxonomy",
        definition: 'A 2001 framework by Anderson and Krathwohl classifying cognitive processes into Remembering, Understanding, Applying, Analyzing, Evaluating, and Creating.',
      },
      {
        term: 'Wait Time (3-5 seconds)',
        definition: 'Deliberate pause after asking a question or after a student response that significantly enhances cognitive engagement.',
      },
      {
        term: 'HOTS',
        definition: 'Higher-Order Thinking Skills encompassing Analyzing, Evaluating, and Creating.',
      },
    ],
    letTips: [
      'If an exam question asks for the HIGHEST level in the revised taxonomy, the answer is CREATING (not Evaluating).',
      'The ideal questioning procedure is: 1. Ask question to the whole class -> 2. Pause (Wait Time 3-5s) -> 3. Call a student by name -> 4. Listen -> 5. Provide constructive feedback.',
    ],
    commonMistakes: [
      'Assuming "Evaluation" is still the top level. That was the 1956 original Bloom taxonomy; the 2001 revision places "Creating" at the top.',
      'Calling on a specific student first before stating the question. Always state the question to the entire class first so everyone thinks.',
    ],
    summaryPoints: [
      'Revised Taxonomy: Remembering, Understanding, Applying, Analyzing, Evaluating, Creating.',
      'LOTS: Remembering, Understanding, Applying; HOTS: Analyzing, Evaluating, Creating.',
      'Wait Time of 3 to 5 seconds increases student verbal elaboration and critical thinking.',
    ],
  },
  {
    id: 'mat-prof-prin-002',
    slug: 'teaching-methods-inductive-deductive-and-jigsaw',
    title: 'Teaching Methodologies: Inductive vs. Deductive, Discovery, and Cooperative Learning',
    subjectId: 'principles-of-teaching',
    subjectName: 'Principles of Teaching',
    category: 'prof_ed',
    topic: 'Instructional Planning & Strategies',
    description: 'Detailed comparison of Inductive (specific to general) and Deductive (general to specific) inquiry, and Aronson’s Jigsaw classroom.',
    readTimeMinutes: 6,
    overview:
      'Instructional strategies determine how students encounter and process concepts. Understanding the flow of inquiry methods is a core competency tested on the Professional Education exam.',
    sections: [
      {
        heading: '1. Inductive vs. Deductive Teaching Approaches',
        paragraphs: [
          'Inductive and Deductive reasoning represent opposite directional flows of concept development:',
        ],
        comparisonTable: {
          headers: ['Dimension', 'Inductive Method (Discovery / In-Direct)', 'Deductive Method (Expository / Direct)'],
          rows: [
            ['Direction of Flow', 'Specific examples / observations → General rule or formula (Bottom-up)', 'General rule, principle, or formula → Specific examples and applications (Top-down)'],
            ['Student Role', 'Active discoverer, investigator, formulator of rules', 'Attentive receiver, follower of steps, applier of presented rules'],
            ['Teacher Role', 'Facilitator presenting structured examples and counter-examples', 'Direct instructor stating the theorem, definition, or formula explicitly upfront'],
            ['Classroom Advantage', 'Higher retention, deep conceptual understanding, fosters inquiry', 'Time-efficient, covers large volumes of content, excellent for procedural algorithms'],
            ['Sample Lesson', 'Students measure circumference and diameter of 5 circular objects, calculate ratio, and discover Pi = 3.14 on their own', 'Teacher writes C = 2πr on the board, defines each variable, and demonstrates 3 practice word problems'],
          ],
        },
        keyConcept:
          'Inductive teaching starts with concrete experiences and guided observation to help learners formulate their own generalizations (Specific to General).',
      },
      {
        heading: "2. Cooperative Learning & Elliot Aronson's Jigsaw Strategy",
        paragraphs: [
          'In a Jigsaw classroom, students are initially placed in "Home Groups." Each member is assigned a distinct sub-topic (e.g. Member 1: Causes of WWI, Member 2: Major Battles, Member 3: Treaty of Versailles).',
          'Students from different home groups who have the same assignment meet in "Expert Groups" to master their sub-topic and plan how to teach it.',
          'Students return to their "Home Groups" and take turns teaching their specific piece of the puzzle to their teammates. This ensures positive interdependence and individual accountability.',
        ],
      },
      {
        heading: '3. Thorndike’s Connectionism & Three Primary Laws of Learning',
        paragraphs: [
          'Edward Thorndike established the Laws of Learning through his stimulus-response puzzle box experiments:',
          '1. Law of Readiness: When a person is prepared to respond or act, doing so is satisfying; being prevented or forced when unready is annoying.',
          '2. Law of Exercise: Stimulus-response connections are strengthened with practice and repetition (Law of Use) and weakened when practice is discontinued (Law of Disuse).',
          '3. Law of Effect: Behaviors followed by satisfying consequences are more likely to recur, while behaviors followed by discomfort are weakened.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Inductive Method',
        definition: 'A pedagogical approach moving from specific concrete examples to general rules, formulas, and concepts.',
      },
      {
        term: 'Deductive Method',
        definition: 'A pedagogical approach moving from an explicitly stated general rule or theorem down to specific examples and practice applications.',
      },
      {
        term: 'Jigsaw Technique',
        definition: 'A cooperative learning structure where students split into expert groups to master sub-topics and return to teach their home group members.',
      },
    ],
    letTips: [
      'Mnemonic for Inductive: I-S-G (Inductive = Specific to General).',
      'Mnemonic for Deductive: D-G-S (Deductive = General to Specific).',
      'Whenever a question highlights "positive interdependence" and "expert groups teaching home groups," select JIGSAW STRATEGY.',
    ],
    commonMistakes: [
      'Thinking inductive is always better than deductive. While inductive promotes inquiry, deductive is crucial when time is limited or safety instructions must be directly delivered.',
    ],
    summaryPoints: [
      'Inductive = Specific to General (Discovery).',
      'Deductive = General to Specific (Direct Instruction).',
      'Jigsaw = Home Groups -> Expert Groups -> Return to Home Groups.',
      'Thorndike: Laws of Readiness, Exercise, and Effect.',
    ],
  },
];
