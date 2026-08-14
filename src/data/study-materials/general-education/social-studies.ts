import type { StudyMaterial } from '../../../types';

export const SOCIAL_STUDIES_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-gen-soc-001',
    slug: 'philippine-constitution-and-historical-milestones',
    title: '1987 Philippine Constitution, Bill of Rights, and Revolutionary Milestones',
    subjectId: 'gen-socsci',
    subjectName: 'Social Sciences & Rizal',
    category: 'gen_ed',
    topic: 'Philippine Constitution',
    relatedTopics: ['Philippine History', 'Rizal’s Life and Works', 'Economics & Society'],
    description: 'Article III Bill of Rights, Branches of Philippine Government, Katipunan history, and Jose Rizal’s major literary works.',
    readTimeMinutes: 7,
    overview:
      'Social Sciences in the LET encompasses the structural mechanics of the 1987 Philippine Constitution, fundamental human rights in the Bill of Rights, and pivotal revolutionary history.',
    sections: [
      {
        heading: '1. Three Branches of Philippine Government & Separation of Powers',
        paragraphs: [
          'The 1987 Constitution establishes a presidential, unitary, and republican form of government with three co-equal branches:',
        ],
        comparisonTable: {
          headers: ['Branch', 'Constitutional Article', 'Vested Power', 'Key Officials & Composition'],
          rows: [
            ['Executive Branch', 'Article VII', 'Executes and enforces laws', 'President (Head of State and Government, Commander-in-Chief), Vice President, and Cabinet Secretaries. Term: 6 years with no reelection for President.'],
            ['Legislative Branch', 'Article VI', 'Enacts, amends, and repeals laws', 'Bicameral Congress: Senate (24 Senators elected at large, 6-year terms) and House of Representatives (District and Party-list representatives, 3-year terms).'],
            ['Judicial Branch', 'Article VIII', 'Interprets laws and settles judicial controversies', 'Supreme Court (1 Chief Justice + 14 Associate Justices) and lower statutory courts created by law (CA, CTA, Sandiganbayan, RTC, MTC). Justices serve until mandatory retirement at age 70.'],
          ],
        },
        keyConcept:
          'Under the system of Checks and Balances, each branch has constitutional mechanisms to prevent abuse of power by the other branches (e.g. Presidential veto, Congressional override, Judicial Review).',
      },
      {
        heading: '2. Article III: Bill of Rights Essential Protections',
        paragraphs: [
          'Section 1: Due Process and Equal Protection ("No person shall be deprived of life, liberty, or property without due process of law...").',
          'Section 2: Unreasonable Searches and Seizures (Warrant of Arrest and Search Warrant require Probable Cause determined personally by a JUDGE under oath).',
          'Section 3(2): Exclusionary Rule ("Fruit of the Poisonous Tree") — Any evidence obtained in violation of Section 2 or 3 is inadmissible for any purpose in any proceeding.',
          'Section 12: Miranda Rights during custodial investigation (Right to remain silent, right to competent and independent counsel, prohibition against torture, secret detention, and coerced confessions).',
          'Section 14(2): Presumption of Innocence until guilt is proven beyond reasonable doubt.',
          'Writ of Habeas Corpus: Protects against illegal or arbitrary detention; commands the custodian to produce the living body of the detainee before the court.',
        ],
      },
      {
        heading: '3. Jose Rizal and the Revolutionary Era',
        paragraphs: [
          'Propaganda Movement: Peaceful reform movement seeking equality with Spaniards, representation in Spanish Cortes, and secularization of parishes (La Solidaridad editors: Graciano Lopez Jaena, Marcelo H. del Pilar).',
          'Jose Rizal’s Masterpieces: Noli Me Tangere (1887, Berlin — social cancer, romantic idealism, financed by Maximo Viola) and El Filibusterismo (1891, Ghent — revolutionary political realism, revenge and failure of violent insurrection, financed by Valentin Ventura).',
          'Katipunan (KKK): Founded on July 7, 1892 by Andres Bonifacio, Ladislao Diwa, Teodoro Plata upon the arrest and exile of Rizal to Dapitan.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Exclusionary Rule',
        definition: 'Constitutional rule rendering any evidence obtained through illegal search or without a valid warrant inadmissible in court.',
      },
      {
        term: 'Writ of Habeas Corpus',
        definition: 'A judicial order requiring a detained individual to be brought before a court to determine the legality of their detention.',
      },
      {
        term: 'Noli Me Tangere',
        definition: 'Rizal’s first novel exposing the social cancer of Spanish colonial governance in the Philippines, published in Berlin in 1887.',
      },
    ],
    letTips: [
      'Who determines probable cause for a search warrant? A JUDGE personally (not a police officer or prosecutor).',
      'The financier of Noli Me Tangere is MAXIMO VIOLA; the financier of El Filibusterismo is VALENTIN VENTURA.',
      'The Great Orator of the Propaganda Movement is GRACIANO LOPEZ JAENA; the Great Plaridel/Journalist is MARCELO H. DEL PILAR.',
    ],
    commonMistakes: [
      'Believing the Propaganda Movement fought for independence. The Propaganda Movement fought for ASSIMILATION and REFORMS; the Katipunan (KKK) fought for full INDEPENDENCE.',
    ],
    summaryPoints: [
      'Executive (President), Legislative (Congress), Judicial (Supreme Court).',
      'Bill of Rights: Due process, search warrants require judge-determined probable cause, Miranda rights.',
      'Rizal: Noli (Viola/Berlin) vs. Fili (Ventura/Ghent).',
      'Katipunan: Founded July 7, 1892 by Andres Bonifacio.',
    ],
  },
];
