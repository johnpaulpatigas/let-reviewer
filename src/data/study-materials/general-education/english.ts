import type { StudyMaterial } from '../../../types';

export const ENGLISH_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-gen-eng-001',
    slug: 'subject-verb-agreement-and-common-grammar-rules',
    title: 'Subject-Verb Agreement Rules and High-Yield Grammar Guidelines',
    subjectId: 'gen-eng',
    subjectName: 'English & Literature',
    category: 'gen_ed',
    topic: 'Grammar & Structure',
    relatedTopics: ['Vocabulary in Context', 'Reading Comprehension'],
    description: 'Crucial subject-verb agreement rules (intervening phrases, compound subjects, indefinite pronouns) frequently tested in the LET General Education exam.',
    readTimeMinutes: 7,
    overview:
      'Subject-Verb Agreement (SVA) is one of the most heavily tested competencies in the LET General Education English subtest. Understanding syntactic proximity, compound subjects, and indefinite pronoun numbers prevents test-trap errors.',
    sections: [
      {
        heading: '1. Intervening Phrases and Parenthetical Expressions',
        paragraphs: [
          'Words that come between the subject and the verb (prepositional phrases, parenthetical expressions like "as well as", "together with", "in addition to", "accompanied by") do NOT affect the number of the subject.',
          'Always identify the true grammatical head subject before selecting the verb form.',
        ],
        example: {
          scenario: 'The teacher, together with her thirty students, (is / are) attending the national seminar.',
          analysis: 'Correct: "is". The true subject is the singular noun "teacher". The parenthetical phrase "together with her thirty students" does not pluralize the subject.',
        },
        keyConcept:
          'Intervening phrases starting with "as well as", "in addition to", "along with", and "together with" do not change a singular subject into a plural subject.',
      },
      {
        heading: '2. Compound Subjects: "And", "Or", and "Nor"',
        paragraphs: [
          'Subjects joined by "and" generally take a plural verb (e.g., "The principal and the dean are present").',
          'Exception: When two nouns joined by "and" refer to a single entity, unit, or dish, the verb is singular (e.g., "Bread and butter is my usual breakfast"; "The secretary and treasurer [one person holding two titles] has arrived").',
          'Rule of Proximity for "Either... or" / "Neither... nor" / "Not only... but also": The verb agrees with the subject closer to it.',
        ],
        example: {
          scenario: 'Neither the manager nor the employees (was / were) satisfied with the outcome.',
          analysis: 'Correct: "were". The closer subject is the plural noun "employees".',
        },
      },
      {
        heading: '3. Indefinite Pronouns: Singular vs. Plural vs. Variable',
        paragraphs: [
          'Always Singular: Each, everyone, everybody, someone, somebody, no one, nobody, anyone, anybody, either, neither, one, much.',
          'Always Plural: Both, few, many, several.',
          'Variable Pronouns (SANAM): Some, Any, None, All, Most. These agree with the object of the preposition that follows them.',
        ],
        comparisonTable: {
          headers: ['Pronoun Type', 'List of Pronouns', 'Sample Correct Sentence'],
          rows: [
            ['Always Singular', 'Each, everyone, everybody, nobody, neither, either', 'Each of the participants was given a certificate.'],
            ['Always Plural', 'Both, few, many, several', 'Several of the answers were correct.'],
            ['SANAM (Variable)', 'Some, Any, None, All, Most (Look at prepositional object)', 'All of the pie was eaten (singular). All of the pies were eaten (plural).'],
          ],
        },
      },
      {
        heading: '4. "A Number of" vs. "The Number of"',
        paragraphs: [
          '"A number of" functions as a quantifier meaning "many" and takes a PLURAL verb.',
          '"The number of" refers to an exact mathematical count and takes a SINGULAR verb.',
        ],
        example: {
          scenario: 'A number of applicants (has / have) submitted their requirements; however, the number of successful candidates (is / are) very small.',
          analysis: 'Correct: "have" for "A number of", and "is" for "the number of".',
        },
      },
    ],
    keyTerms: [
      {
        term: 'Rule of Proximity',
        definition: 'In correlative conjunctions (either/or, neither/nor), the verb agrees in number with the subject physically closer to it.',
      },
      {
        term: 'SANAM Pronouns',
        definition: 'Mnemonic for variable indefinite pronouns (Some, Any, None, All, Most) whose number is determined by the noun in the subsequent prepositional phrase.',
      },
    ],
    letTips: [
      'Ignore words enclosed in commas or parentheses between the subject and verb to spot the true subject quickly.',
      'Check whether words joined by "and" refer to two distinct individuals or one single designated item/title.',
      'Remember that "everyone" and "each" are strictly singular in formal grammar items.',
    ],
    commonMistakes: [
      'Choosing a plural verb when a prepositional phrase with a plural noun follows a singular subject (e.g., "The box of crayons *are* broken" ❌ -> "is broken" ✔).',
      'Confusing "a number of" (plural) with "the number of" (singular).',
    ],
    summaryPoints: [
      'Intervening phrases do not alter subject number.',
      'Correlative conjunctions follow the rule of proximity.',
      'SANAM indefinite pronouns vary based on the prepositional object.',
      '"A number of" is plural; "The number of" is singular.',
    ],
  },
  {
    id: 'mat-gen-eng-002',
    slug: 'figures-of-speech-and-literary-devices',
    title: 'Figures of Speech, Idioms, and Literary Devices',
    subjectId: 'gen-eng',
    subjectName: 'English & Literature',
    category: 'gen_ed',
    topic: 'Figures of Speech',
    relatedTopics: ['Philippine & World Literature', 'Reading Comprehension'],
    description: 'Mastery of major figures of speech: Metaphor, Simile, Personification, Metonymy, Synecdoche, Hyperbole, Litotes, and Oxymoron.',
    readTimeMinutes: 6,
    overview:
      'Figures of speech add poetic nuance, emphasis, and emotional vividness to language. The LET consistently tests the ability to distinguish between closely related devices like metonymy vs. synecdoche and hyperbole vs. litotes.',
    sections: [
      {
        heading: '1. Comparison Devices: Simile vs. Metaphor',
        paragraphs: [
          'Simile: An explicit comparison between two dissimilar things using connective words such as "like", "as", "than", or "resembles" (e.g., "Her smile was as radiant as the morning sun").',
          'Metaphor: A direct, implicit equation of two unlike things asserting that one IS the other without using "like" or "as" (e.g., "Time is a thief that steals our youth").',
        ],
      },
      {
        heading: '2. Association Devices: Synecdoche vs. Metonymy',
        paragraphs: [
          'Synecdoche: A figure of speech where a PART represents the whole, or the WHOLE represents a part.',
          'Metonymy: A figure of speech where a thing or concept is called not by its own name, but by the name of something closely ASSOCIATED with it.',
        ],
        comparisonTable: {
          headers: ['Device', 'Mechanism', 'Classic LET Examples'],
          rows: [
            ['Synecdoche', 'Part for Whole / Whole for Part', '"Twenty head of cattle", "Give us this day our daily bread", "All hands on deck", "Hired hands"'],
            ['Metonymy', 'Associated Symbol for Concept', '"The pen is mightier than the sword", "The Malacañang issued a statement", "The crown decided"'],
          ],
        },
      },
      {
        heading: '3. Contrast and Understatement: Oxymoron, Paradox, and Litotes',
        paragraphs: [
          'Oxymoron: Two contradictory terms placed side by side for paradoxical effect (e.g., "deafening silence", "cruel kindness", "sweet sorrow", "living dead").',
          'Paradox: A self-contradictory statement that upon closer investigation reveals an underlying profound truth (e.g., "The child is father of the man", "I must be cruel only to be kind").',
          'Litotes: An intentional understatement in which an affirmative thought is expressed by negating its contrary (e.g., "She is no novice at teaching" = she is very experienced; "It was no small achievement").',
        ],
      },
      {
        heading: '4. Personification and Apostrophe',
        paragraphs: [
          'Personification: Endowing non-human objects, ideas, or animals with human characteristics and abilities (e.g., "The wind whispered through the dark trees").',
          'Apostrophe: Directly addressing an absent person, a deceased individual, an inanimate object, or an abstract concept as if it were present and capable of listening (e.g., "O Death, where is thy sting?", "Roll on, thou deep and dark blue Ocean, roll!").',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Litotes',
        definition: 'Ironical understatement where an affirmative is expressed by the negative of its contrary.',
      },
      {
        term: 'Apostrophe',
        definition: 'Direct address to an absent entity or abstract concept as if alive and present.',
      },
      {
        term: 'Synecdoche',
        definition: 'A figure of speech where a part represents the whole entity.',
      },
    ],
    letTips: [
      'If an associated object stands for an institution (e.g., "the bench" for judges, "the crown" for royalty), it is Metonymy.',
      'If a physical body part or constituent part stands for the whole person/item (e.g., "counting heads", "lend a hand"), it is Synecdoche.',
      'Look for the phrase "no small / not bad / no easy task" as direct indicators of Litotes.',
    ],
    summaryPoints: [
      'Similes use explicit comparative connectives; metaphors make direct symbolic assertions.',
      'Synecdoche operates on part-whole relationships; metonymy operates on associative symbolism.',
      'Litotes negates the opposite to emphasize an affirmative point.',
    ],
  },
  {
    id: 'mat-gen-eng-003',
    slug: 'vocabulary-in-context-and-word-analysis',
    title: 'Context Clues, Etymology, and High-Yield LET Vocabulary',
    subjectId: 'gen-eng',
    subjectName: 'English & Literature',
    category: 'gen_ed',
    topic: 'Vocabulary in Context',
    relatedTopics: ['Reading Comprehension', 'Grammar & Structure'],
    description: 'Strategies for deducing unfamiliar words using context clues, Greek and Latin affixes, synonyms, antonyms, and high-frequency LET test vocabulary.',
    readTimeMinutes: 6,
    overview:
      'The LET assesses contextual vocabulary rather than isolated rote memorization. Understanding syntactic signals (restatement, contrast, definition clues) and morphological roots enables rapid deciphering of advanced academic vocabulary.',
    sections: [
      {
        heading: '1. Types of Context Clues',
        paragraphs: [
          'Definition / Restatement Clues: The unfamiliar word is explicitly defined or restated using phrases like "is defined as", "that is", "in other words", or appositives set off by commas.',
          'Contrast / Antonym Clues: The sentence provides a direct opposite using signal words like "although", "whereas", "however", "conversely", or "in contrast".',
          'Example / Illustration Clues: Specific examples illustrate the broader meaning (e.g., "Pachyderms, such as elephants, rhinos, and hippos, have thick skin").',
        ],
        example: {
          scenario: 'Unlike her gregarious and outgoing sister who thrives at parties, Elena was noticeably reserved and taciturn.',
          analysis: 'The contrast signal "Unlike" juxtaposes "taciturn" with "gregarious and outgoing", revealing that "taciturn" means quiet, reserved, or disinclined to speak.',
        },
      },
      {
        heading: '2. High-Yield LET Vocabulary Quick Reference',
        paragraphs: [
          'Academic and literary terms that recur frequently in licensure examinations.',
        ],
        comparisonTable: {
          headers: ['Target Word', 'Denotation / Meaning', 'Antonym'],
          rows: [
            ['Equivocal', 'Ambiguous, intentionally misleading, open to multiple interpretations', 'Lucid, explicit, clear'],
            ['Pernicious', 'Gradually causing insidious harm or ruin', 'Beneficial, benign, salutary'],
            ['Lucid', 'Clear, easily understood, rational', 'Obscure, opaque, confused'],
            ['Frugal', 'Prudent, thrifty, economical in expenditure', 'Extravagant, lavish, prodigal'],
            ['Ephemeral', 'Lasting for a very short time, transitory', 'Permanent, eternal, enduring'],
            ['Pragmatic', 'Practical, realistic, oriented toward utility', 'Idealistic, impractical'],
          ],
        },
      },
      {
        heading: '3. Latin and Greek Roots & Affixes',
        paragraphs: [
          'Morphological analysis unlocks compound word meanings: Bene- (good/well: benevolent, beneficial), Mal- (bad/evil: malevolent, malignant), Chron- (time: chronological, synchronous), Path- (feeling/suffering: empathy, apathy, antipathy).',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Context Clue',
        definition: 'Information in surrounding text that helps decipher the meaning of an unfamiliar word.',
      },
      {
        term: 'Connotation',
        definition: 'The emotional, cultural, or secondary association evoked by a word beyond its literal dictionary definition.',
      },
    ],
    letTips: [
      'Always look for contrast transition markers (unlike, but, whereas) to identify antonym clues.',
      'Break down long words into prefix, root, and suffix before guessing randomly.',
    ],
    summaryPoints: [
      'Use context clues (contrast, restatement, examples) to deduce word meanings.',
      'Distinguish denotative definitions from connotative nuances.',
      'Master high-yield academic vocabulary roots and affixes.',
    ],
  },
  {
    id: 'mat-gen-eng-004',
    slug: 'reading-comprehension-critical-analysis',
    title: 'Reading Comprehension, Textual Inference, and Author’s Purpose',
    subjectId: 'gen-eng',
    subjectName: 'English & Literature',
    category: 'gen_ed',
    topic: 'Reading Comprehension',
    relatedTopics: ['Vocabulary in Context', 'Grammar & Structure'],
    description: 'Techniques for identifying stated and implied main ideas, author\'s tone and purpose, logical inferences, and organizational text patterns.',
    readTimeMinutes: 7,
    overview:
      'Reading comprehension questions evaluate literal recall, interpretive synthesis, critical evaluation, and reading between the lines. Mastering text structure and authorial intent is essential for scoring high on reading passages.',
    sections: [
      {
        heading: '1. Stated vs. Implied Main Idea',
        paragraphs: [
          'Stated Main Idea: Explicitly formulated in a topic sentence, often placed at the beginning or conclusion of a paragraph.',
          'Implied Main Idea: Must be inferred by synthesizing supporting details, recurring motifs, and overarching thematic focus when no single sentence expresses the core thought.',
        ],
      },
      {
        heading: '2. Author’s Purpose and Text Patterns',
        paragraphs: [
          'Expository / Informative: Explains, clarifies, or illustrates factual phenomena objectively without overt emotional bias.',
          'Persuasive / Argumentative: Convinces the reader to adopt a stance, take action, or alter a worldview using rhetoric and evidence.',
          'Narrative: Tells a sequential story or recounting of events for artistic or illustrative impact.',
          'Descriptive: Uses sensory imagery to paint a vivid mental representation of a person, place, or phenomenon.',
        ],
      },
      {
        heading: '3. Tone vs. Mood in Critical Reading',
        paragraphs: [
          'Tone: The AUTHOR\'S attitude toward the subject matter or audience (e.g., didactic, satirical, solemn, objective, indignant).',
          'Mood: The EMOTIONAL ATMOSPHERE created for the reader (e.g., suspenseful, gloomy, tranquil, foreboding).',
        ],
        comparisonTable: {
          headers: ['Dimension', 'Focus', 'Key Determining Elements'],
          rows: [
            ['Tone', 'Author\'s Perspective / Stance', 'Diction, sentence structure, formality, irony'],
            ['Mood', 'Reader\'s Feeling / Atmosphere', 'Imagery, descriptive adjectives, setting details'],
          ],
        },
      },
    ],
    keyTerms: [
      {
        term: 'Inference',
        definition: 'A logical conclusion derived by combining textual clues with background schemata.',
      },
      {
        term: 'Author\'s Tone',
        definition: 'The emotional attitude of the writer toward the subject or characters.',
      },
    ],
    letTips: [
      'Inference questions ask what must logically be true based on the text, not what could possibly happen in extreme scenarios.',
      'Check whether the author is writing objectively (factual) or subjectively (advocating an opinion).',
    ],
    summaryPoints: [
      'Distinguish stated topic sentences from implied thematic ideas.',
      'Tone belongs to the writer; mood belongs to the atmosphere felt by the reader.',
      'Identify organizational text structures (cause-effect, compare-contrast, problem-solution).',
    ],
  },
  {
    id: 'mat-gen-eng-005',
    slug: 'philippine-and-world-literature-milestones',
    title: 'Philippine and World Literature: Landmarks, Authors, and Masterpieces',
    subjectId: 'gen-eng',
    subjectName: 'English & Literature',
    category: 'gen_ed',
    topic: 'Philippine & World Literature',
    relatedTopics: ['Figures of Speech', 'Reading Comprehension'],
    description: 'High-yield guide to seminal Philippine literary figures (Benitez, Joaquin, Villa, Bulosan) and world classical epics and dramatic masterpieces.',
    readTimeMinutes: 8,
    overview:
      'Literature questions in the LET test familiarity with classical world masterpieces (Homer, Shakespeare, Sophocles) and pivotal Philippine authors and stories across historical literary eras.',
    sections: [
      {
        heading: '1. Philippine Masterpieces in English',
        paragraphs: [
          '"Dead Stars" (1925) by Paz Marquez Benitez: The foundational modern Philippine short story in English, exploring the themes of illusion, faded romance (Alfredo Salazar and Esperanza vs. Julia Salas), and societal expectations.',
          'Nick Joaquin (Quijano de Manila): National Artist known for his historical-baroque style exploring Filipino identity and Spanish heritage in "A Portrait of the Artist as Filipino" and "The Woman Who Had Two Navels".',
          'Jose Garcia Villa ("Doveglion"): Renowned internationally for introducing "comma poems" and reversed consonance in lyrical modernist poetry.',
          'Carlos Bulosan: Authored "America Is in the Heart", detailing the poignant struggles, exploitation, and resilience of early Filipino immigrant workers.',
          'Rafael Zulueta da Costa: Wrote the Commonwealth Award-winning patriotic poem "Like the Molave".',
        ],
      },
      {
        heading: '2. World Classical Epics and Drama',
        paragraphs: [
          'Homer (Ancient Greece): "The Iliad" (the siege of Troy, wrath of Achilles) and "The Odyssey" (Odysseus\'s 10-year odyssey home to Ithaca).',
          'Sophocles: "Oedipus Rex" (tragic irony, prophecy, fate, and hubris).',
          'William Shakespeare: "Macbeth" (unchecked political ambition), "Hamlet" (indecision and revenge), "Othello" (destructive jealousy), "King Lear" (blind vanity and filial betrayal).',
          'Dante Alighieri: "The Divine Comedy" (Inferno, Purgatorio, Paradiso), guided by Virgil and Beatrice.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Quijano de Manila',
        definition: 'Journalistic pseudonym of National Artist for Literature Nick Joaquin.',
      },
      {
        term: 'Doveglion',
        definition: 'Pen name of poet Jose Garcia Villa (Dove, Eagle, Lion).',
      },
    ],
    letTips: [
      'Remember that "Dead Stars" by Paz Marquez Benitez is recognized as the first modern Filipino short story in English.',
      'Know Shakespearean tragedy themes: Macbeth = ambition; Othello = jealousy; Hamlet = revenge/hesitation.',
    ],
    summaryPoints: [
      'Paz Marquez Benitez pioneered Philippine short stories in English with "Dead Stars".',
      'Nick Joaquin explored Filipino-Hispanic identity and cultural legacy.',
      'Homer\'s Iliad and Odyssey are the bedrock epics of Western literature.',
    ],
  },
];
