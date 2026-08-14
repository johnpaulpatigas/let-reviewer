import type { StudyMaterial } from '../../../types';

export const SCIENCE_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-gen-sci-001',
    slug: 'cellular-biology-photosynthesis-and-genetics',
    title: 'Cellular Biology, Photosynthesis, and Mendelian Genetics',
    subjectId: 'gen-sci',
    subjectName: 'Natural Sciences',
    category: 'gen_ed',
    topic: 'Cellular Biology & Ecology',
    relatedTopics: ['Chemistry & Matter', 'Earth & Space Sciences', 'Physics & Motion'],
    description: 'Cell organelles, cellular respiration, light/dark photosynthesis reactions, Mendelian inheritance principles, and ecological food webs.',
    readTimeMinutes: 8,
    overview:
      'Natural Sciences in the LET covers core biological systems, the flow of biological energy, genetics, and ecological interactions between organisms and their ecosystems.',
    sections: [
      {
        heading: '1. Cell Organelles and Their Functions',
        paragraphs: [
          'Nucleus: Control center of the cell housing genetic DNA and directing protein synthesis.',
          'Mitochondria: Powerhouse of the cell; site of cellular respiration and ATP generation.',
          'Ribosomes: Sites of protein synthesis, located freely in cytoplasm or on the rough endoplasmic reticulum.',
          'Chloroplasts: Double-membraned plant organelles containing chlorophyll, conducting photosynthesis.',
          'Cell Membrane: Phospholipid bilayer regulating selective permeability and transport.',
        ],
      },
      {
        heading: '2. Photosynthesis vs. Cellular Respiration',
        paragraphs: [
          'Photosynthesis: 6CO₂ + 6H₂O + Sunlight -> C₆H₁₂O₆ + 6O₂ (Occurs in chloroplasts). Converts solar energy into chemical energy stored in glucose.',
          'Cellular Respiration: C₆H₁₂O₆ + 6O₂ -> 6CO₂ + 6H₂O + ATP (Occurs in cytoplasm and mitochondria). Breaks down glucose to release cellular ATP energy.',
        ],
        comparisonTable: {
          headers: ['Parameter', 'Photosynthesis', 'Cellular Respiration'],
          rows: [
            ['Primary Organelle', 'Chloroplast', 'Mitochondrion (and Cytoplasm)'],
            ['Reactants', 'Carbon dioxide, Water, Solar energy', 'Glucose, Oxygen'],
            ['End Products', 'Glucose, Oxygen', 'Carbon dioxide, Water, ATP energy'],
            ['Occurs In', 'Autotrophs (Plants, Algae)', 'All aerobic living organisms'],
          ],
        },
      },
      {
        heading: '3. Mendelian Genetics and Punnett Squares',
        paragraphs: [
          'Law of Segregation: Alleles separate during gamete formation so each gamete carries only one allele for each gene.',
          'Law of Independent Assortment: Genes for different traits sort independently during gamete formation.',
          'Monohybrid Cross: Crossing two heterozygous individuals (Bb × Bb) yields a 3:1 phenotypic ratio (Dominant : Recessive) and a 1:2:1 genotypic ratio (1 BB : 2 Bb : 1 bb).',
        ],
      },
      {
        heading: '4. Ecology and 10% Energy Transfer Rule',
        paragraphs: [
          'Trophic Levels: Producers -> Primary Consumers (herbivores) -> Secondary Consumers (carnivores) -> Tertiary Consumers (apex predators).',
          'Lindeman’s 10% Rule: Only approximately 10% of energy stored in one trophic level is transferred to the next higher level; the remaining 90% is lost as metabolic heat.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'ATP (Adenosine Triphosphate)',
        definition: 'The primary energy currency used by cells to fuel metabolic reactions.',
      },
      {
        term: '10% Ecological Rule',
        definition: 'Principle stating that ~10% of energy is transferred from one trophic level to the next.',
      },
    ],
    letTips: [
      'In crosses between pure dominant (BB) and pure recessive (bb), 100% of the F1 generation display the dominant phenotype.',
      'Remember that plants undergo BOTH photosynthesis (during daytime) and cellular respiration (continuously 24/7).',
    ],
    summaryPoints: [
      'Mitochondria generate ATP; chloroplasts capture solar light for glucose synthesis.',
      'Meiosis creates 4 haploid gametes; mitosis creates 2 identical diploid somatic cells.',
      'Energy pyramids diminish by 90% at each successive trophic tier.',
    ],
  },
  {
    id: 'mat-gen-sci-002',
    slug: 'physics-motion-and-laws-of-energy',
    title: 'Physics, Newton’s Laws of Motion, Work, Energy, and Optics',
    subjectId: 'gen-sci',
    subjectName: 'Natural Sciences',
    category: 'gen_ed',
    topic: 'Physics & Motion',
    relatedTopics: ['Chemistry & Matter', 'Earth & Space Sciences'],
    description: 'Newton’s three laws of motion, kinetic vs. potential energy, heat transfer mechanisms, optical phenomena (reflection and refraction), and thermodynamics.',
    readTimeMinutes: 7,
    overview:
      'Physics in the LET emphasizes conceptual understanding of force, motion, momentum, thermodynamics, and the wave nature of light and sound.',
    sections: [
      {
        heading: '1. Sir Isaac Newton’s Three Laws of Motion',
        paragraphs: [
          '1st Law (Law of Inertia): An object at rest remains at rest, and an object in motion continues at constant velocity unless acted upon by an unbalanced net external force.',
          '2nd Law (Law of Acceleration): The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass (F = ma).',
          '3rd Law (Law of Action-Reaction): For every action force, there is an equal in magnitude and opposite in direction reaction force.',
        ],
      },
      {
        heading: '2. Work, Kinetic Energy, and Gravitational Potential Energy',
        paragraphs: [
          'Work: W = Force × Distance (W = F × d), measured in Joules (N·m). Work is done only when displacement occurs in the direction of the applied force.',
          'Gravitational Potential Energy: PE = m × g × h (where g ≈ 9.8 m/s²).',
          'Kinetic Energy: KE = 1/2 m v² (Energy of motion; quadruples when velocity doubles).',
          '1st Law of Thermodynamics (Conservation of Energy): Energy can neither be created nor destroyed, only transformed from one form to another.',
        ],
      },
      {
        heading: '3. Optics: Reflection vs. Refraction',
        paragraphs: [
          'Reflection: The bouncing back of light waves when they strike a boundary surface (Law of Reflection: angle of incidence = angle of reflection).',
          'Refraction: The bending of light as it passes from one medium to another of different optical density due to a change in wave speed (e.g., bent pencil in water, rainbows, lenses).',
          'Electromagnetic Spectrum: From longest wavelength/lowest energy to shortest wavelength/highest energy: Radio waves -> Microwaves -> Infrared -> Visible Light (ROYGBIV) -> Ultraviolet -> X-rays -> Gamma rays.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Inertia',
        definition: 'The resistance of any physical object to any change in its velocity or state of motion.',
      },
      {
        term: 'Refraction',
        definition: 'The bending of a light ray as it crosses the boundary between different optical media.',
      },
    ],
    letTips: [
      'If velocity doubles, kinetic energy increases by four times because KE is proportional to v².',
      'Gamma rays have the highest frequency and shortest wavelength in the EM spectrum.',
    ],
    summaryPoints: [
      'Newton\'s laws govern classical mechanics (Inertia, F=ma, Action-Reaction).',
      'Total mechanical energy (PE + KE) is conserved in the absence of friction.',
      'Refraction explains the apparent bending of submerged objects in water.',
    ],
  },
  {
    id: 'mat-gen-sci-003',
    slug: 'chemistry-matter-and-chemical-bonding',
    title: 'Chemistry, Atomic Structure, Periodic Trends, and Chemical Bonds',
    subjectId: 'gen-sci',
    subjectName: 'Natural Sciences',
    category: 'gen_ed',
    topic: 'Chemistry & Matter',
    relatedTopics: ['Physics & Motion', 'Cellular Biology & Ecology'],
    description: 'Atomic models (protons, neutrons, electrons), periodic table families, ionic vs. covalent bonding, physical vs. chemical changes, and pH acidity.',
    readTimeMinutes: 7,
    overview:
      'General chemistry competencies focus on the particulate nature of matter, atomic structure, classification of mixtures and compounds, and chemical reactivity.',
    sections: [
      {
        heading: '1. Physical vs. Chemical Changes and States of Matter',
        paragraphs: [
          'Physical Change: Alteration of form, size, or physical state without changing chemical composition (e.g., melting ice, tearing paper, dissolving salt in water).',
          'Chemical Change: Transformation of substances into new chemical products with different molecular identities (e.g., rusting of iron, burning wood, food digestion, photosynthesis).',
        ],
      },
      {
        heading: '2. Subatomic Particles and Periodic Table Trends',
        paragraphs: [
          'Proton (positive charge, inside nucleus), Neutron (neutral charge, inside nucleus), Electron (negative charge, orbiting in electron shells).',
          'Atomic Number = Number of protons. Mass Number = Protons + Neutrons.',
          'Valence Electrons: Electrons in the outermost energy shell determining chemical bonding.',
          'Elements in the same vertical column (Group/Family) share similar chemical properties because they have identical valence electron counts.',
        ],
      },
      {
        heading: '3. Chemical Bonding and the pH Scale',
        paragraphs: [
          'Ionic Bond: Electrostatic attraction formed by complete transfer of valence electrons from a metal (cation) to a non-metal (anion) (e.g., NaCl).',
          'Covalent Bond: Sharing of electron pairs between non-metal atoms (e.g., H₂O, CO₂, CH₄).',
          'pH Scale: 0–6.9 = Acidic (high H⁺ ion concentration); 7.0 = Neutral (pure water); 7.1–14.0 = Basic/Alkaline (high OH⁻ ion concentration).',
        ],
        comparisonTable: {
          headers: ['Bond Type', 'Electron Behavior', 'Participating Elements', 'Classic Example'],
          rows: [
            ['Ionic Bond', 'Complete transfer of electrons', 'Metal + Non-metal', 'Sodium chloride (NaCl)'],
            ['Covalent Bond', 'Sharing of electron pairs', 'Non-metal + Non-metal', 'Water (H₂O), Methane (CH₄)'],
            ['Metallic Bond', 'Delocalized "sea of electrons"', 'Metals only', 'Copper wire, Iron bar'],
          ],
        },
      },
    ],
    keyTerms: [
      {
        term: 'Ionic Bonding',
        definition: 'Chemical bonding involving the complete transfer of electrons forming oppositely charged ions.',
      },
      {
        term: 'pH Scale',
        definition: 'Logarithmic scale measuring the concentration of hydrogen ions (acidity or alkalinity) in aqueous solutions.',
      },
    ],
    letTips: [
      'Dissolving sugar or salt in water is a physical change (homogeneous solution), NOT a chemical change.',
      'Lower pH values indicate stronger acidity (pH 2 is more acidic than pH 5).',
    ],
    summaryPoints: [
      'Physical changes alter form without altering chemical identity; chemical changes produce new substances.',
      'Valence electrons govern periodic trends and chemical bonding.',
      'Ionic bonds transfer electrons; covalent bonds share electrons.',
    ],
  },
  {
    id: 'mat-gen-sci-004',
    slug: 'earth-space-sciences-and-geology',
    title: 'Earth and Space Sciences: Geology, Atmosphere, Meteorology, and Astronomy',
    subjectId: 'gen-sci',
    subjectName: 'Natural Sciences',
    category: 'gen_ed',
    topic: 'Earth & Space Sciences',
    relatedTopics: ['Cellular Biology & Ecology', 'Physics & Motion'],
    description: 'Internal Earth structure, plate tectonics, rock classification, atmospheric layers (troposphere to thermosphere), Philippine monsoon seasons, and solar/lunar eclipses.',
    readTimeMinutes: 7,
    overview:
      'Earth and Space Science items assess knowledge of geological structures, meteorological cycles (monsoons in the Philippines), and celestial mechanics.',
    sections: [
      {
        heading: '1. Layers of the Earth and the Rock Cycle',
        paragraphs: [
          'Earth Layers: Crust (thin outermost solid layer), Mantle (semi-solid silicate layer driving plate tectonics via convection currents), Outer Core (liquid iron-nickel generating Earth\'s geomagnetic field), Inner Core (solid iron-nickel under intense pressure).',
          'Igneous Rocks: Formed from cooled and solidified magma or lava (e.g., granite, basalt, obsidian).',
          'Sedimentary Rocks: Formed by accumulation, compaction, and cementation of mineral particles and fossils (e.g., sandstone, limestone, shale).',
          'Metamorphic Rocks: Formed by transformation of existing rocks under intense heat and pressure (e.g., marble from limestone, slate from shale).',
        ],
      },
      {
        heading: '2. Atmospheric Layers and Meteorology in the Philippines',
        paragraphs: [
          'Troposphere: Lowest atmospheric layer where all weather phenomena occur and temperature decreases with altitude.',
          'Stratosphere: Contains the ozone layer (O₃) that absorbs harmful solar ultraviolet (UV) radiation.',
          'Northeast Monsoon (Amihan): Cool, dry prevailing wind system from Siberia/China occurring between November and February.',
          'Southwest Monsoon (Habagat): Warm, moist wind system from the southwest bringing heavy seasonal monsoon rains between June and October.',
        ],
      },
      {
        heading: '3. Solar vs. Lunar Eclipses',
        paragraphs: [
          'Solar Eclipse: Moon passes directly between the Sun and Earth (Sun - Moon - Earth), casting the Moon\'s shadow on Earth during a New Moon.',
          'Lunar Eclipse: Earth passes directly between the Sun and Moon (Sun - Earth - Moon), casting Earth\'s shadow on the Moon during a Full Moon.',
        ],
        comparisonTable: {
          headers: ['Eclipse Type', 'Alignment Order', 'Moon Phase', 'Visibility'],
          rows: [
            ['Solar Eclipse', 'Sun — Moon — Earth', 'New Moon', 'Daytime along narrow totality path'],
            ['Lunar Eclipse', 'Sun — Earth — Moon', 'Full Moon', 'Nighttime across entire hemisphere'],
          ],
        },
      },
    ],
    keyTerms: [
      {
        term: 'Amihan',
        definition: 'The Philippine Northeast Monsoon bringing cool, dry winds from November to February.',
      },
      {
        term: 'Habagat',
        definition: 'The Philippine Southwest Monsoon bringing warm, humid air and southwest rains from June to October.',
      },
    ],
    letTips: [
      'Weather occurs exclusively in the Troposphere; the ozone layer is located in the Stratosphere.',
      'Remember alignment: Solar eclipse has the Moon in the middle; Lunar eclipse has the Earth in the middle.',
    ],
    summaryPoints: [
      'The Earth comprises the crust, mantle, liquid outer core, and solid inner core.',
      'Igneous rocks originate from cooled magma; metamorphic rocks from intense heat and pressure.',
      'Amihan is northeast (cool/dry); Habagat is southwest (warm/rainy).',
    ],
  },
];
