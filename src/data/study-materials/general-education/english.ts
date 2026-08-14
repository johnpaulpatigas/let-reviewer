import type { StudyMaterial } from '../../../types';

export const ENGLISH_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-gen-eng-001',
    slug: 'subject-verb-agreement-and-common-grammar-rules',
    title: 'Subject-Verb Agreement Rules and High-Yield Grammar Guidelines',
    subjectId: 'english',
    subjectName: 'English & Literature',
    category: 'gen_ed',
    topic: 'Grammar & Correct Usage',
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
          '"A number of" means "many" or "several" and always takes a PLURAL verb: "A number of applicants were interviewed."',
          '"The number of" refers to a specific collective quantity and always takes a SINGULAR verb: "The number of applicants is twenty-five."',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Rule of Proximity',
        definition: 'In correlative conjunctions (either/or, neither/nor), the verb agrees with the subject closest to it.',
      },
      {
        term: 'SANAM Pronouns',
        definition: 'Some, Any, None, All, Most—indefinite pronouns whose number depends on whether the following noun is countable or non-countable.',
      },
    ],
    letTips: [
      'Mnemonic: "A number" = Plural; "The number" = Singular.',
      '"Each" and "Every" are ALWAYS singular, even when followed by compound nouns (e.g. "Every man, woman, and child was saved").',
    ],
    commonMistakes: [
      'Choosing a plural verb when an intervening phrase has plural nouns (e.g. "One of the girls are..." is INCORRECT; it must be "One of the girls IS...").',
      'Using plural verbs for collective nouns acting as a unified unit (e.g. "The jury has reached its verdict").',
    ],
    summaryPoints: [
      'Parenthetical phrases do not alter subject number.',
      'Correlative conjunctions follow the Rule of Proximity.',
      'SANAM pronouns depend on the prepositional object.',
      'A number = Plural; The number = Singular.',
    ],
  },
  {
    id: 'mat-gen-eng-002',
    slug: 'figures-of-speech-and-literary-devices',
    title: 'Figures of Speech, Idioms, and Literary Devices',
    subjectId: 'english',
    subjectName: 'English & Literature',
    category: 'gen_ed',
    topic: 'Literature & Rhetoric',
    description: 'Metaphor, Simile, Metonymy, Synecdoche, Hyperbole, Personification, Irony, Oxymoron, and Apostrophe with illustrative poetry excerpts.',
    readTimeMinutes: 6,
    overview:
      'Figures of speech enrich language by creating figurative associations. The LET regularly tests identification of poetic devices in literary excerpts and rhetorical sentences.',
    sections: [
      {
        heading: '1. Comparison & Association Figures',
        paragraphs: [
          'Understanding figurative comparisons is fundamental for reading comprehension and literary analysis:',
        ],
        comparisonTable: {
          headers: ['Figure of Speech', 'Definition', 'Illustrative Example'],
          rows: [
            ['Simile', 'Direct comparison between two unlike things using "like" or "as"', '"Her smile was as radiant as the morning sun."'],
            ['Metaphor', 'Implicit or direct equation of two unlike things without using "like" or "as"', '"Life is a broken-winged bird that cannot fly." (Langston Hughes)'],
            ['Personification', 'Attributing human qualities or actions to inanimate objects, animals, or abstract ideas', '"The wind whispered secrets through the pines."'],
            ['Metonymy', 'Substituting the name of one thing with the name of another thing closely associated with it', '"The Pen is mightier than the Sword" (Pen = literature/writing; Sword = military force). "Malacañang announced new guidelines."'],
            ['Synecdoche', 'Using a part of something to represent the whole (or the whole to represent a part)', '"Give us this day our daily bread" (bread = food). "He bought a new set of wheels" (wheels = car).'],
          ],
        },
        keyConcept:
          'Metonymy uses an associated attribute (e.g. "The Crown" for royalty), whereas Synecdoche uses an actual physical part of the whole (e.g. "all hands on deck" where hands are parts of crew members).',
      },
      {
        heading: '2. Contrast, Exaggeration, and Direct Address',
        paragraphs: [
          'Hyperbole: Deliberate exaggeration used for emphasis or emotional effect (e.g., "I have told you a million times"; "He cried a river of tears").',
          'Understatement / Litotes: Deliberately expressing an idea as less important or using negative phrasing to affirm a positive (e.g., "She is not unmindful of your kindness").',
          'Oxymoron: Juxtaposing two contradictory terms side-by-side (e.g., "deafening silence", "cruel kindness", "open secret", "bittersweet").',
          'Irony: A contrast between expectation and reality (Verbal: sarcasm; Situational: outcome contradicts expectation; Dramatic: audience knows what characters do not).',
          'Apostrophe: Direct address to an absent person, a dead person, an inanimate object, or an abstract concept (e.g., "O Death, where is thy sting?"; "Milton! thou shouldst be living at this hour").',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Apostrophe (Rhetoric)',
        definition: 'Directly addressing an inanimate object, abstract concept, or absent/dead individual as if present and capable of understanding.',
      },
      {
        term: 'Synecdoche',
        definition: 'A figure of speech where a part represents the whole (e.g., "hired hands" for workers).',
      },
      {
        term: 'Oxymoron',
        definition: 'A concise figure of speech pairing two contradictory or mutually exclusive words.',
      },
    ],
    letTips: [
      'If a poem addresses "O Liberty!" or "O Captain! My Captain!", it is APOSTROPHE.',
      'Remember: Synecdoche = Part for whole (hands = workers, bread = food); Metonymy = Associated symbol (crown = king, pen = writing).',
    ],
    commonMistakes: [
      'Confusing Apostrophe the punctuation mark with Apostrophe the figure of speech.',
      'Confusing Metaphor with Metonymy.',
    ],
    summaryPoints: [
      'Simile uses like/as; Metaphor equates directly.',
      'Metonymy replaces with associated symbol; Synecdoche replaces with an actual part.',
      'Oxymoron pairs contradictory words; Hyperbole exaggerates.',
      'Apostrophe addresses absent or inanimate entities directly.',
    ],
  },
];
