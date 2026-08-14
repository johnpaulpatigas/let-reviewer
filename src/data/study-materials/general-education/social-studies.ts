import type { StudyMaterial } from '../../../types';

export const SOCIAL_STUDIES_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-gen-soc-001',
    slug: 'philippine-constitution-and-historical-milestones',
    title: '1987 Philippine Constitution, Bill of Rights, and State Principles',
    subjectId: 'gen-socsci',
    subjectName: 'Social Sciences & Rizal',
    category: 'gen_ed',
    topic: 'Philippine Constitution',
    relatedTopics: ['Philippine History', 'Rizal’s Life and Works', 'Economics & Society'],
    description: 'Article III Bill of Rights, three co-equal branches of government, constitutional commissions, citizenship principles (Jus sanguinis), and Article XIV education mandates.',
    readTimeMinutes: 8,
    overview:
      'The 1987 Philippine Constitution is the supreme law of the land. Understanding governmental separation of powers, due process, Miranda rights, and citizenship rules is critical for the LET Social Sciences subtest.',
    sections: [
      {
        heading: '1. Three Branches of Philippine Government & Separation of Powers',
        paragraphs: [
          'The 1987 Constitution establishes a presidential, unitary, and republican form of government with three co-equal branches:',
        ],
        comparisonTable: {
          headers: ['Branch', 'Constitutional Article', 'Vested Power', 'Key Officials & Composition'],
          rows: [
            ['Executive Branch', 'Article VII', 'Executes and enforces laws', 'President (Head of State and Government, Commander-in-Chief), Vice President, and Cabinet Secretaries. Term: 6 years with no reelection.'],
            ['Legislative Branch', 'Article VI', 'Enacts, amends, and repeals laws', 'Bicameral Congress: Senate (24 Senators elected at large, 6-year terms) and House of Representatives (District and Party-list representatives, 3-year terms).'],
            ['Judicial Branch', 'Article VIII', 'Interprets laws and settles judicial controversies', 'Supreme Court (1 Chief Justice + 14 Associate Justices) and lower statutory courts. Justices serve until mandatory retirement at age 70.'],
          ],
        },
      },
      {
        heading: '2. Article III: Bill of Rights Essential Protections',
        paragraphs: [
          'Section 1: Due Process and Equal Protection ("No person shall be deprived of life, liberty, or property without due process of law...").',
          'Section 2: Unreasonable Searches and Seizures (Warrant of Arrest and Search Warrant require Probable Cause determined personally by a JUDGE under oath).',
          'Section 3(2): Exclusionary Rule ("Fruit of the Poisonous Tree") — Any evidence obtained in violation of Section 2 or 3 is inadmissible for any purpose in any proceeding.',
          'Section 12: Miranda Rights during custodial investigation (Right to remain silent, right to competent and independent counsel, prohibition against torture and coerced confessions).',
          'Section 14(2): Presumption of Innocence until guilt is proven beyond reasonable doubt.',
          'Writ of Habeas Corpus: Protects against illegal or arbitrary detention; commands the custodian to produce the living body of the detainee before the court.',
        ],
      },
      {
        heading: '3. Inherent Powers of the State and Citizenship',
        paragraphs: [
          'Police Power: Power to regulate liberty and property for the promotion of general public welfare and health.',
          'Power of Eminent Domain: Power to take private property for public use upon payment of "just compensation".',
          'Power of Taxation: Power to impose proportional burdens on persons and property to raise governmental revenues.',
          'Jus Sanguinis (Right of Blood): Citizenship acquired by virtue of blood relationship or parents\' citizenship (The foundational Philippine rule).',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Exclusionary Rule',
        definition: 'Constitutional rule rendering any evidence obtained through illegal search or without a valid warrant inadmissible in court.',
      },
      {
        term: 'Jus Sanguinis',
        definition: 'The principle that citizenship is determined by the nationality of one or both parents, not by place of birth.',
      },
    ],
    letTips: [
      'Search warrants and arrest warrants can only be issued by a Judge after personal determination of probable cause under oath.',
      'Article XIV mandates the state to assign the highest budgetary priority to education.',
    ],
    summaryPoints: [
      'The Constitution divides authority among Executive, Legislative, and Judicial branches.',
      'Article III guarantees Due Process, Equal Protection, and Miranda rights.',
      'Philippine citizenship adheres primarily to the principle of Jus Sanguinis.',
    ],
  },
  {
    id: 'mat-gen-soc-002',
    slug: 'philippine-history-and-revolutionary-struggle',
    title: 'Philippine History: Pre-Colonial Eras, Spanish Rule, Revolution, and Republics',
    subjectId: 'gen-socsci',
    subjectName: 'Social Sciences & Rizal',
    category: 'gen_ed',
    topic: 'Philippine History',
    relatedTopics: ['Philippine Constitution', 'Rizal’s Life and Works'],
    description: 'Comprehensive historical guide from pre-colonial social stratification to Spanish colonial policies (Polo, Encomienda), Katipunan, Malolos Republic, and EDSA People Power.',
    readTimeMinutes: 8,
    overview:
      'Philippine History questions assess knowledge of pre-colonial societies, colonial economic and labor systems, key revolutionary battles, and the development of the democratic republic.',
    sections: [
      {
        heading: '1. Pre-Colonial Social Stratification and Spanish Colonial Policies',
        paragraphs: [
          'Pre-colonial Social Classes: Datu/Chieftain (political and military head of the barangay), Maharlika (noble warrior class), Timawa (freemen), and Alipin (Aliping Namamahay with own house vs. Aliping Saguiguilid living in master\'s household).',
          'Spanish Colonial Economic Policies:\n- Polo y Servicios: Compulsory forced manual labor for 40 days (later 15 days) annually required of Filipino males aged 16 to 60 (polistas).\n- Encomienda System: Royal grant giving Spanish colonizers the right to collect tribute from inhabitants of a designated territory.\n- Bandala: Compulsory sale of agricultural harvests to the Spanish government at fixed promissory prices.\n- Tributo: Annual tax paid by Filipinos in cash or produce.',
        ],
      },
      {
        heading: '2. The Philippine Revolution and the First Republic',
        paragraphs: [
          'Katipunan (KKK): Founded on July 7, 1892 in Tondo by Andres Bonifacio, Teodoro Plata, and Ladislao Diwa; Emilio Jacinto served as the intellectual advisor ("Brains of the Katipunan") and penned the *Kartilya ng Katipunan*.',
          'Cry of Pugad Lawin (August 1896): Katipuneros tore their cedulas personales (residence tax certificates), signaling armed insurrection.',
          'Tejeros Convention (March 22, 1897): Emilio Aguinaldo was elected President of the revolutionary government, superseding the Katipunan supreme council.',
          'Malolos Republic (January 23, 1899): The First Philippine Republic was formally inaugurated at Barasoain Church in Malolos, Bulacan.',
          'Battle of Tirad Pass (December 2, 1899): General Gregorio del Pilar ("Boy General") fought a rear-guard action to allow Aguinaldo\'s retreat.',
        ],
      },
      {
        heading: '3. American Period, Commonwealth, and Modern Democracy',
        paragraphs: [
          'Tydings-McDuffie Act (1934): Provided for a 10-year Commonwealth transition period under President Manuel L. Quezon leading to full independence on July 4, 1946.',
          'EDSA People Power Revolution (February 22–25, 1986): Peaceful civilian-backed military revolution that ousted Ferdinand Marcos and restored democratic constitutional government under Corazon C. Aquino.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Polo y Servicios',
        definition: 'System of forced, compulsory community labor imposed on Filipino males during the Spanish colonial era.',
      },
      {
        term: 'Kartilya ng Katipunan',
        definition: 'The moral code and orientation guide of the Katipunan written by Emilio Jacinto.',
      },
    ],
    letTips: [
      'Emilio Jacinto is the "Brains of the Katipunan"; Apolinario Mabini is the "Brains of the Philippine Revolution".',
      'The First Philippine Republic was inaugurated at Barasoain Church in Malolos, Bulacan.',
    ],
    summaryPoints: [
      'Pre-colonial society was organized around independent barangays led by Datus.',
      'The Katipunan launched the armed revolution in 1896 following the Cry of Pugad Lawin.',
      'The 1986 EDSA Revolution restored democratic constitutional governance in the Philippines.',
    ],
  },
  {
    id: 'mat-gen-soc-003',
    slug: 'rizal-life-works-and-writings',
    title: 'Dr. Jose Rizal: Life, Literary Masterpieces, and Socio-Political Philosophy',
    subjectId: 'gen-socsci',
    subjectName: 'Social Sciences & Rizal',
    category: 'gen_ed',
    topic: 'Rizal’s Life and Works',
    relatedTopics: ['Philippine History', 'Philippine Constitution'],
    description: 'Dr. Jose Rizal\'s education, Propaganda movement contributions, Noli Me Tangere vs. El Filibusterismo analysis, Dapitan exile achievements, and martyrdom.',
    readTimeMinutes: 8,
    overview:
      'RA 1425 (Rizal Law) mandates the study of the life, works, and writings of Dr. Jose Rizal. Examination items test his novels, characters, socio-political reforms, and historical decisions.',
    sections: [
      {
        heading: '1. Major Literary Masterpieces: Noli Me Tangere vs. El Filibusterismo',
        paragraphs: [
          'Noli Me Tangere ("Touch Me Not", Berlin, 1887, financed by Maximo Viola): Romantic, idealistic novel diagnosing the social cancer of Spanish friar rule, dedicated to the Motherland (A La Patria). Characters include Crisostomo Ibarra, Maria Clara, Elias (the patriotic commoner), Sisa (the oppressed mother), and Pilosopo Tasyo (the enlightened scholar).',
          'El Filibusterismo ("The Reign of Greed", Ghent, 1891, financed by Valentin Ventura): Dark, political, revolutionary novel exploring revenge and the tragic failure of violent conspiracy. Dedicated to the martyred priests GOMBURZA. Features Simoun (Ibarra in disguise as a wealthy jeweler), Basilio, Isagani, and Father Florentino.',
        ],
        comparisonTable: {
          headers: ['Dimension', 'Noli Me Tangere (1887)', 'El Filibusterismo (1891)'],
          rows: [
            ['Tone & Theme', 'Romantic, social reform, diagnostic', 'Political, revolutionary, revenge, tragic realism'],
            ['Dedication', 'To the Motherland (A La Patria)', 'To GOMBURZA (Gomez, Burgos, Zamora)'],
            ['City of Publication', 'Berlin, Germany (Maximo Viola)', 'Ghent, Belgium (Valentin Ventura)'],
            ['Lead Protagonist', 'Juan Crisostomo Ibarra (Idealist)', 'Simoun (Disguised revolutionary jeweler)'],
          ],
        },
      },
      {
        heading: '2. Civic Organizations and Dapitan Exile (1892–1896)',
        paragraphs: [
          'La Liga Filipina (Founded July 3, 1892 in Tondo): Socio-civic organization aiming for national unity, mutual protection, education, and economic cooperation.',
          'Exile in Dapitan, Zamboanga del Norte (1892–1896): Exemplified community nation-building by practicing ophthalmology, establishing a boys\' school teaching English and sciences, building a public waterworks system, and discovering animal species (Draco rizali, Apogonia rizali, Rhacophorus rizali).',
          'Martyrdom at Bagumbayan (December 30, 1896): Rizal was falsely convicted of rebellion, sedition, and illegal association; penned his farewell poem "Mi Ultimo Adios" inside an alcohol cooking lamp.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'GOMBURZA',
        definition: 'Fathers Mariano Gomez, Jose Burgos, and Jacinto Zamora, executed in 1872, inspiring Rizal\'s nationalist movement and El Filibusterismo.',
      },
      {
        term: 'La Liga Filipina',
        definition: 'A progressive civic association founded by Rizal in 1892 to promote education, commerce, and mutual protection.',
      },
    ],
    letTips: [
      'Noli Me Tangere was published in Berlin (financed by Maximo Viola); El Filibusterismo in Ghent (financed by Valentin Ventura).',
      'Rizal dedicated El Filibusterismo to GOMBURZA and Noli Me Tangere to the Motherland.',
    ],
    summaryPoints: [
      'Noli Me Tangere diagnosed social ills; El Filibusterismo explored the moral consequences of violent revolt.',
      'In Dapitan, Rizal modeled comprehensive community development, education, and public works.',
      'Mi Ultimo Adios expressed his ultimate sacrifice for Philippine freedom.',
    ],
  },
  {
    id: 'mat-gen-soc-004',
    slug: 'economics-sociology-and-cultural-dynamics',
    title: 'Economics, Market Principles, Sociology, and Cultural Concepts',
    subjectId: 'gen-socsci',
    subjectName: 'Social Sciences & Rizal',
    category: 'gen_ed',
    topic: 'Economics & Society',
    relatedTopics: ['Philippine Constitution', 'Philippine History'],
    description: 'Law of demand and supply, inflation, GDP/GNP, progressive taxation, and sociological concepts (ethnocentrism, cultural relativism, enculturation).',
    readTimeMinutes: 7,
    overview:
      'Economics and sociology items evaluate understanding of market equilibrium, macroeconomic indicators, cultural dynamics, and social institutions.',
    sections: [
      {
        heading: '1. Microeconomics: Laws of Supply and Demand',
        paragraphs: [
          'Law of Demand: There is an inverse relationship between price and quantity demanded (As price rises, quantity demanded falls, ceteris paribus).',
          'Law of Supply: There is a direct relationship between price and quantity supplied (As price rises, producers supply more goods).',
          'Market Equilibrium: The price point where quantity demanded equals quantity supplied.',
        ],
      },
      {
        heading: '2. Macroeconomic Indicators and Fiscal Policy',
        paragraphs: [
          'Gross Domestic Product (GDP): Total market value of all final goods and services produced within a country\'s domestic borders in a given time period.',
          'Gross National Product (GNP): Total value produced by a country\'s citizens and enterprises, including income generated abroad (e.g. OFW remittances).',
          'Inflation: A sustained general increase in overall price levels over time, diminishing currency purchasing power.',
          'Progressive Taxation: Tax system where tax rates increase as taxable income rises, ensuring equitable wealth redistribution.',
        ],
      },
      {
        heading: '3. Sociological and Anthropological Concepts',
        paragraphs: [
          'Ethnocentrism: The tendency to judge foreign cultures based solely on the standards of one\'s own culture, considering one\'s own culture superior.',
          'Xenocentrism: The belief that foreign products, cultural practices, or ideas are inherently superior to one\'s own.',
          'Cultural Relativism: The anthropological principle that a culture\'s practices and beliefs should be evaluated and understood within its own cultural context rather than judged by external standards.',
          'Enculturation (learning native culture) vs. Acculturation (adopting traits from a foreign culture).',
        ],
        comparisonTable: {
          headers: ['Concept', 'Definition / Stance', 'Classroom Example'],
          rows: [
            ['Ethnocentrism', 'Belief in one\'s own cultural superiority', 'Looking down upon rural indigenous practices as primitive'],
            ['Xenocentrism', 'Preference for foreign cultures over one\'s own', 'Believing foreign goods and accents are always superior to Filipino ones'],
            ['Cultural Relativism', 'Evaluating cultures within their own context', 'Understanding diverse tribal customs without imposing outside bias'],
          ],
        },
      },
    ],
    keyTerms: [
      {
        term: 'Cultural Relativism',
        definition: 'The view that cultural practices and moral values must be understood from the perspective of that culture itself.',
      },
      {
        term: 'Inflation',
        definition: 'The persistent, sustained rise in the general price level of goods and services over time.',
      },
    ],
    letTips: [
      'GDP is domestic (location-based within borders); GNP is nationality-based (includes overseas citizens).',
      'Remember: Ethnocentrism = mine is best; Xenocentrism = foreign is best; Cultural Relativism = respect each in context.',
    ],
    summaryPoints: [
      'Demand has an inverse relationship with price; supply has a direct relationship.',
      'Progressive taxation taxes higher income brackets at higher marginal percentages.',
      'Sociology promotes cultural relativism and objective analysis of social structures.',
    ],
  },
];
