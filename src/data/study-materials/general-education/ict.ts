import type { StudyMaterial } from '../../../types';

export const ICT_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-gen-ict-001',
    slug: 'digital-literacy-and-cybersecurity-fundamentals',
    title: 'Digital Literacy, Cybersecurity, and the Data Privacy Act of 2012 (RA 10173)',
    subjectId: 'gen-ict',
    subjectName: 'ICT & Digital Literacy',
    category: 'gen_ed',
    topic: 'Internet & Cybersecurity',
    relatedTopics: ['Computer Concepts', 'Productivity Tools', 'Digital Ethics'],
    description: 'Cybersecurity threats (phishing, malware, ransomware), HTTPS encryption, Two-Factor Authentication, and the Philippine Data Privacy Act.',
    readTimeMinutes: 7,
    overview:
      'Digital Literacy and Cybersecurity competencies evaluate understanding of online safety, identity protection, cyber threats, and legal frameworks governing electronic data in the Philippines.',
    sections: [
      {
        heading: '1. Common Cyber Threats and Malware Types',
        paragraphs: [
          'Phishing: Deceptive emails or fraudulent websites mimicking legitimate entities (banks, school portals) to trick users into revealing sensitive credentials.',
          'Ransomware: Malicious software that encrypts user files and demands financial ransom payments for decryption keys.',
          'Trojan Horse: Malware disguised as genuine or beneficial software to trick users into downloading hidden malicious payloads.',
          'Spyware: Software secretly installed to monitor keystrokes, browsing habits, and confidential communications without consent.',
        ],
      },
      {
        heading: '2. Cybersecurity Defensive Best Practices',
        paragraphs: [
          'HTTPS & SSL/TLS: Ensures encrypted end-to-end communication between browser client and server, preventing packet sniffing.',
          'Two-Factor Authentication (2FA / MFA): Requires two distinct authentication factors (something you know + something you have), dramatically reducing unauthorized account takeovers.',
          'Firewall: Hardware or software barrier monitoring and controlling incoming/outgoing network traffic based on strict security rules.',
        ],
      },
      {
        heading: '3. Philippine Data Privacy Act of 2012 (Republic Act No. 10173)',
        paragraphs: [
          'Mandate: Protects the fundamental human right of privacy while ensuring free flow of information through secure personal data processing in both public and private sectors.',
          'Personal Information: Any information from which the identity of an individual is apparent or can be reasonably and directly ascertained.',
          'Sensitive Personal Information: Includes race, ethnic origin, marital status, age, color, religious/philosophical affiliations, health records, genetic data, sexual life, and government-issued identification numbers (SSS, GSIS, passport).',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Phishing',
        definition: 'Social engineering attack using counterfeit electronic communications to steal passwords and financial data.',
      },
      {
        term: 'Two-Factor Authentication (2FA)',
        definition: 'Security protocol requiring two distinct verification methods before granting account access.',
      },
    ],
    letTips: [
      'Look for the "S" in HTTPS (Secure), which denotes encrypted communication.',
      'Under RA 10173, government-issued IDs, health records, and religious affiliations are classified as Sensitive Personal Information.',
    ],
    summaryPoints: [
      'Phishing relies on social engineering; ransomware holds encrypted data hostage.',
      '2FA and HTTPS are essential tools for safeguarding account and transmission security.',
      'RA 10173 enforces strict legal penalties for unauthorized processing of personal and sensitive data.',
    ],
  },
  {
    id: 'mat-gen-ict-002',
    slug: 'computer-concepts-and-hardware-architecture',
    title: 'Computer Concepts, Hardware Components, and Memory Systems',
    subjectId: 'gen-ict',
    subjectName: 'ICT & Digital Literacy',
    category: 'gen_ed',
    topic: 'Computer Concepts',
    relatedTopics: ['Productivity Tools', 'Internet & Cybersecurity'],
    description: 'CPU components (ALU and Control Unit), volatile RAM vs. non-volatile ROM/SSD storage, binary number systems, and system vs. application software.',
    readTimeMinutes: 6,
    overview:
      'Computer concepts items assess understanding of computer architecture, the function of microprocessors, primary vs. secondary storage, and binary representations of information.',
    sections: [
      {
        heading: '1. Central Processing Unit (CPU) and Core Hardware',
        paragraphs: [
          'CPU (Central Processing Unit): The primary microprocessor executing instructions. Comprises the Arithmetic Logic Unit (ALU) which executes mathematical and comparison operations, and the Control Unit (CU) which directs the flow of data and instructions.',
          'Motherboard: The main printed circuit board connecting the CPU, memory, storage devices, and expansion peripherals.',
        ],
      },
      {
        heading: '2. Primary vs. Secondary Storage (RAM vs. ROM/SSD)',
        paragraphs: [
          'RAM (Random Access Memory): Primary, VOLATILE memory that holds data and program instructions actively being processed. Contents are immediately erased when the system loses power.',
          'ROM (Read-Only Memory): Non-volatile primary firmware containing bootstrap instructions (BIOS/UEFI) required to start the computer.',
          'Secondary Storage: Non-volatile long-term storage (Solid State Drives / SSD, Hard Disk Drives / HDD, USB flash drives) retaining data permanently.',
        ],
        comparisonTable: {
          headers: ['Memory Type', 'Volatility', 'Purpose', 'Speed'],
          rows: [
            ['RAM', 'Volatile (erased at power off)', 'Temporary active working memory', 'Extremely fast'],
            ['ROM', 'Non-volatile (permanent)', 'Stores firmware / boot startup routines', 'Fast read-only'],
            ['SSD / HDD', 'Non-volatile (permanent)', 'Long-term file and OS storage', 'Moderate / High'],
          ],
        },
      },
      {
        heading: '3. Data Units and Binary Representation',
        paragraphs: [
          'Bit (Binary Digit): Smallest unit of data (0 or 1).',
          'Byte: Group of 8 bits representing a single character or symbol.',
          'Units of Storage: 1 Kilobyte (KB) = 1,024 Bytes; 1 Megabyte (MB) = 1,024 KB; 1 Gigabyte (GB) = 1,024 MB; 1 Terabyte (TB) = 1,024 GB.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'RAM (Random Access Memory)',
        definition: 'Volatile main system memory that temporarily stores active instructions for the CPU.',
      },
      {
        term: 'ALU (Arithmetic Logic Unit)',
        definition: 'The subcomponent of the CPU that executes all mathematical computations and logical comparisons.',
      },
    ],
    letTips: [
      'RAM is volatile (temporary); ROM and SSDs are non-volatile (permanent).',
      'Remember that 1 Byte equals exactly 8 Bits, and 1 KB equals 1,024 Bytes in binary computing.',
    ],
    summaryPoints: [
      'The CPU consists of the Arithmetic Logic Unit and Control Unit.',
      'Primary memory (RAM) is volatile, while secondary storage (SSD/HDD) is non-volatile.',
      'Data capacity scales in base-2 powers of 1,024.',
    ],
  },
  {
    id: 'mat-gen-ict-003',
    slug: 'productivity-tools-and-office-applications',
    title: 'Productivity Tools: Word Processing, Spreadsheets, and Presentation Software',
    subjectId: 'gen-ict',
    subjectName: 'ICT & Digital Literacy',
    category: 'gen_ed',
    topic: 'Productivity Tools',
    relatedTopics: ['Computer Concepts', 'Digital Ethics'],
    description: 'Mastery of spreadsheet functions (AVERAGE, COUNTIF, VLOOKUP), word processing Mail Merge workflows, and slide presentation design principles.',
    readTimeMinutes: 7,
    overview:
      'Educators must be proficient in productivity applications for grading, instructional resource creation, and administrative reporting. The LET frequently tests formula mechanics and software features.',
    sections: [
      {
        heading: '1. Spreadsheet Functions and Data Modeling',
        paragraphs: [
          '=AVERAGE(range): Computes the arithmetic mean of numeric cells.',
          '=COUNTIF(range, criteria): Counts the number of cells in a range that meet specific conditional criteria (e.g., `=COUNTIF(B2:B50, ">=75")`).',
          '=SUM(range): Adds all numerical values in the selected cell range.',
          '=IF(logical_test, value_if_true, value_if_false): Evaluates conditions to return specified values (e.g., grading pass/fail status).',
          '=VLOOKUP(lookup_value, table_array, col_index, [range_lookup]): Searches vertically for a value in the leftmost column of a table and retrieves a corresponding value from a specified column.',
        ],
      },
      {
        heading: '2. Word Processing Features and Automation',
        paragraphs: [
          'Mail Merge: Combines a standardized document template with a structured data source (e.g. spreadsheet or database) to produce individualized letters, certificates, or envelopes in mass.',
          'Track Changes: Collaborative review feature that logs insertions, deletions, formatting modifications, and editorial comments across revisions.',
          'Header and Footer: Text, page numbers, or dates that appear repeatedly at the top and bottom margins of every page.',
        ],
      },
      {
        heading: '3. Presentation Software: Transitions vs. Animations',
        paragraphs: [
          'Slide Transitions: Visual and audio effects that dictate how an entire slide enters or exits when navigating between slides.',
          'Custom Animations: Movement, entrance, emphasis, or exit effects applied to individual text boxes, bullet points, charts, or images within a single slide.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Mail Merge',
        definition: 'A feature enabling the automated generation of mass personalized documents from a spreadsheet data source.',
      },
      {
        term: 'Slide Transition',
        definition: 'The visual motion effect that occurs when advancing from one slide to another in presentation software.',
      },
    ],
    letTips: [
      'Transitions apply to whole slides; Animations apply to specific elements on a slide.',
      'Mail Merge is the most efficient feature for creating hundreds of unique student certificates.',
    ],
    summaryPoints: [
      'Spreadsheet formulas like COUNTIF and AVERAGE streamline student grade calculation.',
      'Mail Merge automates mass personalized document generation.',
      'Slide transitions govern slide switching; animations control on-slide object movement.',
    ],
  },
  {
    id: 'mat-gen-ict-004',
    slug: 'digital-ethics-intellectual-property-and-ai',
    title: 'Digital Ethics, Cyber Law, Intellectual Property, and Ethical AI Integration',
    subjectId: 'gen-ict',
    subjectName: 'ICT & Digital Literacy',
    category: 'gen_ed',
    topic: 'Digital Ethics',
    relatedTopics: ['Internet & Cybersecurity', 'Productivity Tools'],
    description: 'Cybercrime Prevention Act (RA 10175), Creative Commons licensing models, Netiquette rules, copyright law, and ethical Artificial Intelligence use in education.',
    readTimeMinutes: 7,
    overview:
      'Digital Ethics examines the responsible, lawful, and ethical use of technology, copyright compliance, Netiquette, and the emerging challenges of artificial intelligence in educational contexts.',
    sections: [
      {
        heading: '1. Philippine Cybercrime Prevention Act of 2012 (RA 10175)',
        paragraphs: [
          'Illegal Access: Accessing the whole or part of a computer system without authorization (Hacking).',
          'Cyber-squatting: Acquiring domain names in bad faith with intent to profit, mislead, or damage another\'s trademark.',
          'Cyberlibel: Defamation, libelous statements, or character assassination committed through a computer system or digital platform.',
        ],
      },
      {
        heading: '2. Creative Commons (CC) Licensing and Copyright',
        paragraphs: [
          'CC BY (Attribution): Allows sharing and adaptation, even commercially, as long as appropriate credit is given to the author.',
          'CC BY-SA (ShareAlike): Derivative works must be licensed under identical terms (copyleft principle).',
          'CC BY-ND (NoDerivs): Allows redistribution, commercial and non-commercial, as long as it is passed along unchanged and whole, with credit.',
          'CC BY-NC (NonCommercial): Allows remixing and adaptation only for non-commercial purposes.',
          'Public Domain (CC0): Work dedicated to the public with no copyright restrictions.',
        ],
        comparisonTable: {
          headers: ['License', 'Commercial Use Allowed?', 'Modifications Allowed?', 'ShareAlike Required?'],
          rows: [
            ['CC BY', 'Yes', 'Yes', 'No'],
            ['CC BY-SA', 'Yes', 'Yes', 'Yes (identical license)'],
            ['CC BY-ND', 'Yes', 'No (must remain unchanged)', 'No'],
            ['CC BY-NC', 'No', 'Yes', 'No'],
          ],
        },
      },
      {
        heading: '3. Ethical Artificial Intelligence (AI) Use in Education',
        paragraphs: [
          'Transparency: Students and teachers must disclose the use of generative AI tools in coursework and academic writing.',
          'Critical Evaluation: AI outputs must be verified against scholarly sources to prevent acceptance of fabricated "hallucinations".',
          'Academic Integrity: AI should be used as a brainstorming and tutoring scaffold, never as a replacement for original human intellectual synthesis.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Netiquette',
        definition: 'The established code of respectful, ethical, and polite behavior in digital online communications.',
      },
      {
        term: 'CC BY-SA',
        definition: 'A Creative Commons license requiring attribution and mandating that derivative works be shared under identical license terms.',
      },
    ],
    letTips: [
      'CC BY-SA requires derivatives to be shared under the same license terms.',
      'Cyberlibel applies standard penal code defamation rules to digital and online social media postings under RA 10175.',
    ],
    summaryPoints: [
      'RA 10175 criminalizes illegal access, data interference, and cyberlibel.',
      'Creative Commons licenses provide modular legal terms for intellectual property sharing.',
      'Ethical digital citizenship demands transparency, academic integrity, and responsible AI verification.',
    ],
  },
];
