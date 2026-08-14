import type { StudyMaterial } from '../../../types';

export const SCIENCE_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-gen-sci-001',
    slug: 'cellular-biology-genetics-and-photosynthesis',
    title: 'Cellular Biology, Photosynthesis, and Mendelian Genetics',
    subjectId: 'gen-sci',
    subjectName: 'Natural Sciences',
    category: 'gen_ed',
    topic: 'Cellular Biology & Ecology',
    relatedTopics: ['Physics & Motion', 'Chemistry & Matter', 'Earth & Space Sciences'],
    description: 'Cell organelles, Mitosis vs. Meiosis, Light and Dark reactions in Photosynthesis, and Punnett Square genetics.',
    readTimeMinutes: 7,
    overview:
      'Biological sciences in the LET General Education examination cover fundamental cell structures, energy transformation pathways, and inheritance laws.',
    sections: [
      {
        heading: '1. Cellular Organelles and Their Vital Functions',
        paragraphs: [
          'Key cellular structures and their biological roles:',
        ],
        comparisonTable: {
          headers: ['Organelle', 'Nickname / Function', 'Location / Characteristics'],
          rows: [
            ['Mitochondria', '"Powerhouse of the Cell"', 'Site of cellular respiration; generates ATP via Krebs cycle and electron transport chain'],
            ['Chloroplast', '"Food Producer of the Plant"', 'Contains chlorophyll; site of photosynthesis (Light reaction in thylakoids, Calvin cycle in stroma)'],
            ['Ribosome', '"Protein Synthesis Factory"', 'Found free in cytoplasm or bound to Rough Endoplasmic Reticulum (RER)'],
            ['Nucleus', '"Control Center"', 'Contains genetic material (DNA/chromosomes); houses the nucleolus for ribosome assembly'],
            ['Lysosome', '"Suicide Bag / Digestive Center"', 'Contains hydrolytic enzymes that break down waste, cellular debris, and pathogens'],
            ['Cell Wall', '"Structural Support"', 'Rigid outer layer in plant cells composed of cellulose (absent in animal cells)'],
          ],
        },
        keyConcept:
          'Mitochondria produce cellular ATP through aerobic cellular respiration; Chloroplasts convert solar photons into chemical glucose through photosynthesis.',
      },
      {
        heading: '2. Mitosis vs. Meiosis: Cell Division Mechanisms',
        paragraphs: [
          'Mitosis: Occurs in somatic (body) cells; 1 parent cell (2n diploid) divides into 2 identical daughter cells (2n diploid). Used for growth, tissue repair, and asexual reproduction.',
          'Meiosis: Occurs in germ/gamete cells (sperm and egg); 1 diploid cell (2n) undergoes two rounds of division to produce 4 genetically diverse haploid daughter cells (n). Crucial for sexual reproduction and genetic variation (via Crossing Over in Prophase I).',
        ],
      },
      {
        heading: '3. Gregor Mendel’s Laws of Inheritance',
        paragraphs: [
          '1. Law of Segregation: Each individual possesses two alleles for each gene; during gamete formation, these alleles segregate so each gamete receives only one allele.',
          '2. Law of Independent Assortment: Genes for different traits segregate independently of one another during gamete formation (applies to unlinked genes).',
          '3. Law of Dominance: An organism with at least one dominant allele will display the dominant phenotype.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Mitochondria',
        definition: 'Organelle responsible for producing energy (ATP) through cellular respiration.',
      },
      {
        term: 'Meiosis',
        definition: 'Specialized cell division producing 4 genetically varied haploid gametes (n).',
      },
      {
        term: 'Crossing Over',
        definition: 'The exchange of genetic material between homologous chromosomes during Prophase I of Meiosis, creating genetic diversity.',
      },
    ],
    letTips: [
      'In photosynthesis: Light reaction takes place in the THYLAKOID membrane; Dark reaction (Calvin cycle) takes place in the STROMA.',
      'If asked which organelle contains digestive hydrolytic enzymes, select LYSOSOME.',
      'Crossing over happens specifically in PROPHASE I of Meiosis.',
    ],
    commonMistakes: [
      'Believing plant cells only have chloroplasts and no mitochondria. Plant cells have BOTH chloroplasts (to make glucose) and mitochondria (to convert glucose to ATP).',
      'Confusing the number of daughter cells: Mitosis produces 2 identical cells; Meiosis produces 4 unique cells.',
    ],
    summaryPoints: [
      'Mitochondria = ATP energy; Chloroplasts = Photosynthesis; Lysosomes = Cellular digestion.',
      'Mitosis = 2 diploid (2n) body cells; Meiosis = 4 haploid (n) sex cells.',
      'Crossing Over in Prophase I generates genetic recombination.',
    ],
  },
];
