import type { StudyMaterial } from '../../../types';

export const ICT_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-gen-ict-001',
    slug: 'digital-literacy-cybersecurity-and-data-privacy-act',
    title: 'Digital Literacy, Cybersecurity, and the Data Privacy Act of 2012 (RA 10173)',
    subjectId: 'ict',
    subjectName: 'Information and Communications Technology',
    category: 'gen_ed',
    topic: 'Information and Communications Technology',
    description: 'Hardware vs. Software, Networking basics, Cybersecurity threats (phishing, malware), and the Philippine Data Privacy Act (RA 10173).',
    readTimeMinutes: 6,
    overview:
      'Information and Communications Technology (ICT) competencies test computer literacy, networking architecture, cyber ethics, and Philippine digital privacy legislation.',
    sections: [
      {
        heading: '1. Computer System Architecture & Storage Hierarchies',
        paragraphs: [
          'Computer systems operate through an interplay of hardware, software, and data processing cycles:',
          'CPU (Central Processing Unit): The "brain" of the computer comprising the ALU (Arithmetic Logic Unit) and Control Unit (CU).',
          'RAM (Random Access Memory): Primary volatile memory holding active data and program instructions currently in use; lost when power is turned off.',
          'ROM (Read Only Memory): Non-volatile memory containing permanent boot instructions (BIOS/firmware).',
          'Storage Units: Byte (8 bits) -> Kilobyte (KB) -> Megabyte (MB) -> Gigabyte (GB) -> Terabyte (TB) -> Petabyte (PB).',
        ],
        keyConcept:
          'RAM is volatile memory (temporary and cleared upon shutdown); ROM is non-volatile (permanent hardware instructions).',
      },
      {
        heading: '2. Cybersecurity Threats & Social Engineering',
        paragraphs: [
          'Phishing: Fraudulent attempts to obtain sensitive information (usernames, passwords, credit card numbers) by masquerading as a trustworthy entity in an electronic communication.',
          'Ransomware: Malicious software that encrypts a user’s files, demanding payment to restore access.',
          'Spyware: Covert software that monitors user activities, keystrokes (keyloggers), and internet history without consent.',
          'Denial of Service (DoS / DDoS): Cyberattack overwhelming a network server with fictitious traffic to render it unavailable to legitimate users.',
        ],
      },
      {
        heading: '3. Republic Act No. 10173: Data Privacy Act of 2012',
        paragraphs: [
          'Enacted in 2012 to protect individual personal information and communication systems in both government and private sectors, enforced by the National Privacy Commission (NPC).',
          'Three Essential Principles of Data Privacy:',
          '1. Transparency: Data subjects must be informed of the nature, purpose, and extent of personal data processing.',
          '2. Legitimate Purpose: Processing must be compatible with declared, specified, and legal institutional objectives.',
          '3. Proportionality: Data collected must be adequate, relevant, and not excessive in relation to the intended purpose.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'RA 10173',
        definition: 'Data Privacy Act of 2012, protecting personal information in the Philippines and creating the National Privacy Commission.',
      },
      {
        term: 'Phishing',
        definition: 'Deceptive social engineering scam aiming to steal login credentials or confidential data via fraudulent emails or websites.',
      },
      {
        term: 'RAM vs ROM',
        definition: 'RAM is volatile temporary working memory; ROM is non-volatile permanent boot memory.',
      },
    ],
    letTips: [
      'The 3 Core Principles of the Data Privacy Act (RA 10173) are TRANSPARENCY, LEGITIMATE PURPOSE, and PROPORTIONALITY.',
      'The regulatory body governing Data Privacy in the Philippines is the NATIONAL PRIVACY COMMISSION (NPC).',
    ],
    commonMistakes: [
      'Confusing RAM with ROM. RAM is volatile (cleared when turned off); ROM is non-volatile (permanent).',
    ],
    summaryPoints: [
      'Hardware: CPU (ALU + CU), RAM (volatile), ROM (non-volatile).',
      'Cybersecurity: Phishing (social engineering credentials theft), Ransomware (data encryption extortion).',
      'RA 10173: Transparency, Legitimate Purpose, Proportionality.',
    ],
  },
];
