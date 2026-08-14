import type { StudyMaterial } from '../../../types';

export const PRINCIPLES_TEACHING_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-prof-prin-001',
    slug: 'revised-blooms-taxonomy-and-higher-order-thinking-skills',
    title: "Revised Bloom's Taxonomy, HOTS, and Questioning Strategies",
    subjectId: 'prof-principles',
    subjectName: 'Principles & Teaching Methodologies',
    category: 'prof_ed',
    topic: 'Bloom’s Taxonomy & HOTS',
    relatedTopics: ['Learner-Centered Approaches', 'Teaching Methods & Strategies', 'Differentiated Instruction'],
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
        term: 'Wait Time (Mary Budd Rowe)',
        definition: 'Deliberate 3-to-5-second pauses after asking a question or after a student answers to enhance higher-order thinking.',
      },
    ],
    letTips: [
      'In Revised Bloom’s, Creating is highest (not Evaluating).',
      'Always pose the question to the entire class first, pause for wait time, and then call on an individual student.',
    ],
    summaryPoints: [
      'Cognitive domain spans Remembering to Creating.',
      'Knowledge spans Factual, Conceptual, Procedural, and Metacognitive.',
      'Wait time significantly elevates student response depth.',
    ],
  },
  {
    id: 'mat-prof-prin-002',
    slug: 'teaching-methodologies-inductive-deductive-cooperative',
    title: 'Teaching Methodologies: Inductive vs. Deductive, Discovery, and Cooperative Learning',
    subjectId: 'prof-principles',
    subjectName: 'Principles & Teaching Methodologies',
    category: 'prof_ed',
    topic: 'Teaching Methods & Strategies',
    relatedTopics: ['Learner-Centered Approaches', 'Bloom’s Taxonomy & HOTS'],
    description: 'Detailed breakdown of direct vs. indirect instruction, inductive/deductive models, Jigsaw, Think-Pair-Share, and inquiry methods.',
    readTimeMinutes: 8,
    overview:
      'Pedagogical methodology determines how instruction is structured and delivered. This guide provides a comparison between teacher-directed expository models and student-centered discovery strategies.',
    sections: [
      {
        heading: '1. Inductive vs. Deductive Teaching Methods',
        paragraphs: [
          'Inductive Method (Bottom-Up / Discovery): Moves from SPECIFIC examples, observations, or laboratory data to GENERAL principles, rules, or formulas (Specific -> General). Fosters student active discovery and critical reasoning.',
          'Deductive Method (Top-Down / Direct Instruction): Moves from GENERAL rules, definitions, or formulas to SPECIFIC applications and problem-solving exercises (General -> Specific). Highly efficient for teaching structured procedural skills.',
        ],
        comparisonTable: {
          headers: ['Method', 'Direction of Logic', 'Teacher Role', 'Best Used For'],
          rows: [
            ['Inductive Method', 'Specific Examples -> General Rule / Principle', 'Guide / Facilitator questioning student observations', 'Concept formation, discovery labs, rule derivation'],
            ['Deductive Method', 'General Rule / Theorem -> Specific Applications', 'Direct instructor / Demonstrator of explicit steps', 'Grammar drills, standard mathematical algorithms, safety procedures'],
          ],
        },
      },
      {
        heading: '2. Cooperative Learning Structures (Kagan and Lyman)',
        paragraphs: [
          'Jigsaw (Elliot Aronson): Students are assigned to "home groups" and "expert groups." Each expert group masters a specialized subtopic, then returns to teach their home group peers.',
          'Think-Pair-Share (Frank Lyman): Teacher poses a prompt -> Students think individually (1 min) -> Pair with an elbow partner to discuss (2 mins) -> Share synthesis with whole class.',
          'Fishbowl Technique: An inner circle discusses/debates a controversial topic while an outer circle observes, tracks arguments, and evaluates dialogue quality.',
        ],
      },
      {
        heading: '3. The 4As Lesson Plan Framework',
        paragraphs: [
          'Activity: Experiential entry task that engages prior knowledge.',
          'Analysis: Critical processing questions that examine student observations and data.',
          'Abstraction: Synthesizing concepts, defining rules, and deriving overarching theories.',
          'Application: Authentic transfer of learning to real-world problems or new scenarios.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Inductive Method',
        definition: 'Instructional process proceeding from concrete specific examples to general rules or concepts.',
      },
      {
        term: 'Jigsaw Strategy',
        definition: 'Cooperative structure where students form expert groups to master subtopics and return to teach their home groups.',
      },
    ],
    letTips: [
      'Inductive = Examples first, rule last. Deductive = Rule first, examples last.',
      'In the 4As format, Abstraction is where the generalization and theoretical concept are formulated.',
    ],
    summaryPoints: [
      'Inductive builds from specific observations to generalizations.',
      'Deductive applies general rules to specific problem sets.',
      'Cooperative learning builds positive interdependence and individual accountability.',
    ],
  },
  {
    id: 'mat-prof-prin-003',
    slug: 'learner-centered-approaches-and-discovery-learning',
    title: 'Learner-Centered Approaches: Discovery Learning, PBL, and Meaningful Learning',
    subjectId: 'prof-principles',
    subjectName: 'Principles & Teaching Methodologies',
    category: 'prof_ed',
    topic: 'Learner-Centered Approaches',
    relatedTopics: ['Bloom’s Taxonomy & HOTS', 'Teaching Methods & Strategies'],
    description: 'Jerome Bruner’s modes of representation and discovery learning, David Ausubel’s advance organizers, Problem-Based Learning (PBL), and Flipped Classrooms.',
    readTimeMinutes: 7,
    overview:
      'Learner-centered paradigms position the student as an active meaning-maker rather than a passive receptacle of information, emphasizing inquiry, authentic problem solving, and metacognitive regulation.',
    sections: [
      {
        heading: '1. Jerome Bruner’s Discovery Learning and Modes of Representation',
        paragraphs: [
          'Discovery Learning: Students actively discover relationships and principles on their own through inquiry and hypothesis testing.',
          'Three Modes of Representation:\n- Enactive Mode (Action-based): Learning through physical touch and manipulation of concrete objects.\n- Iconic Mode (Image-based): Learning through visual diagrams, pictures, maps, and models.\n- Symbolic Mode (Language-based): Learning through abstract words, symbols, and mathematical notations.',
        ],
      },
      {
        heading: '2. David Ausubel’s Meaningful Verbal Learning & Advance Organizers',
        paragraphs: [
          'Subsumption Theory: New knowledge is anchored into pre-existing cognitive structures (subsumers). Meaningful learning occurs when new information is related substantively to prior knowledge.',
          'Advance Organizers: Instructional scaffolding (concept maps, narrative previews) presented prior to a lesson to build cognitive bridges between old and new material.',
        ],
      },
      {
        heading: '3. Problem-Based Learning (PBL) and the Flipped Classroom',
        paragraphs: [
          'Problem-Based Learning (PBL): Instruction begins with an authentic, ill-structured real-world problem that drives student research, self-directed study, and collaborative solution development.',
          'Flipped Classroom: Inverts traditional lecture-homework structure; direct lecture input occurs asynchronously at home via videos/readings, reserving classroom time for collaborative problem solving.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Advance Organizer',
        definition: 'An introductory cognitive tool presented prior to instruction to bridge prior knowledge with new concepts.',
      },
      {
        term: 'Enactive Representation',
        definition: 'Bruner\'s mode of representing knowledge through physical action and tangible manipulation.',
      },
    ],
    letTips: [
      'Bruner\'s sequence of representation: Enactive (action) -> Iconic (image) -> Symbolic (words/abstract symbols).',
      'Ausubel argued that the most important single factor influencing learning is what the learner already knows.',
    ],
    summaryPoints: [
      'Bruner proposed enactive, iconic, and symbolic cognitive representations.',
      'Ausubel\'s advance organizers anchor new content into existing schemas.',
      'PBL and flipped learning maximize active classroom inquiry.',
    ],
  },
  {
    id: 'mat-prof-prin-004',
    slug: 'differentiated-instruction-and-universal-design-for-learning',
    title: 'Differentiated Instruction, Universal Design for Learning (UDL), and Learner Diversity',
    subjectId: 'prof-principles',
    subjectName: 'Principles & Teaching Methodologies',
    category: 'prof_ed',
    topic: 'Differentiated Instruction',
    relatedTopics: ['Learner-Centered Approaches', 'Bloom’s Taxonomy & HOTS'],
    description: 'Carol Ann Tomlinson’s model (Content, Process, Product, Environment), UDL 3 principles, tiered assignments, and catering to diverse learner profiles.',
    readTimeMinutes: 7,
    overview:
      'Classrooms are heterogeneous environments with diverse student readiness levels, interests, and learning profiles. Differentiated instruction and UDL proactively design flexible pathways so all learners achieve curriculum mastery.',
    sections: [
      {
        heading: '1. Carol Ann Tomlinson’s Differentiated Instruction Framework',
        paragraphs: [
          'Teachers differentiate instruction by adjusting four major curricular elements based on student Readiness, Interests, and Learning Profiles:',
          '- Content: WHAT the student learns or how access to information is varied (e.g. tiered texts at varying reading levels, audiobooks, video summaries).',
          '- Process: HOW students make sense of and internalize concepts (e.g. learning centers, graphic organizers, jigsaw groups, choice boards).',
          '- Product: HOW students demonstrate and showcase mastery (e.g. choice between writing an editorial, performing a podcast, or creating a digital infographic).',
          '- Learning Environment: The physical and affective classroom setting (e.g. quiet study nooks, collaborative table clusters).',
        ],
        comparisonTable: {
          headers: ['Curricular Element', 'Modification Area', 'Classroom Example'],
          rows: [
            ['Content', 'Input / Resource complexity', 'Providing leveled science articles with vocabulary glossaries for struggling readers'],
            ['Process', 'Activities / Learning pathways', 'Using Think-Pair-Share, tiered lab experiments, or hands-on simulations'],
            ['Product', 'Assessment outputs / Evidence', 'Allowing students to choose between an essay, video report, or digital model'],
            ['Environment', 'Physical / Emotional climate', 'Arranging flexible seating with designated silent zones and group hubs'],
          ],
        },
      },
      {
        heading: '2. Universal Design for Learning (UDL) Principles',
        paragraphs: [
          'Universal Design for Learning (CAST) removes instructional barriers proactively from the initial curriculum design phase through three neural network principles:',
          '1. Multiple Means of Representation (The "What" of learning): Present information and content in multiple sensory formats (text, audio, visuals, captions).',
          '2. Multiple Means of Action and Expression (The "How" of learning): Provide varied physical options and tools for students to demonstrate their learning.',
          '3. Multiple Means of Engagement (The "Why" of learning): Offer choices, optimize autonomy, and sustain motivation through relevant authentic challenges.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Differentiated Instruction',
        definition: 'A pedagogical approach modifying Content, Process, Product, and Environment to meet diverse student readiness and interests.',
      },
      {
        term: 'Universal Design for Learning (UDL)',
        definition: 'An educational framework optimizing teaching through multiple means of representation, expression, and engagement.',
      },
    ],
    letTips: [
      'Differentiation is NOT individualized tutoring for 40 students; it is providing flexible structured options across Content, Process, and Product.',
      'UDL designs accessible options upfront for everyone rather than retrofitting accommodations after failure.',
    ],
    summaryPoints: [
      'Tomlinson differentiates Content, Process, Product, and Environment.',
      'UDL emphasizes Representation, Expression, and Engagement.',
      'Tiered assignments adjust task complexity to student readiness levels.',
    ],
  },
];
