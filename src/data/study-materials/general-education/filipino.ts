import type { StudyMaterial } from '../../../types';

export const FILIPINO_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-gen-fil-001',
    slug: 'wastong-gamit-ng-salita-ng-nang-din-rin-may-mayroon',
    title: 'Wastong Gamit ng mga Salita: NG vs. NANG, DIN/RIN, at MAY/MAYROON',
    subjectId: 'gen-fil',
    subjectName: 'Filipino at Panitikan',
    category: 'gen_ed',
    topic: 'Wastong Gamit',
    relatedTopics: ['Balarila at Ponolohiya', 'Tayutay at Idyoma', 'Panitikang Pilipino'],
    description: 'Gabay sa wastong gramatika at balarila ayon sa Komisyon sa Wikang Filipino (KWF) para sa LET General Education.',
    readTimeMinutes: 6,
    overview:
      'Ang wastong gamit ng mga salita ay isa sa pinakamadalas lumabas sa pagsusulit sa Filipino sa LET. Mahalagang matukoy ang angkop na paggamit ng ng/nang, din/rin, daw/raw, at may/mayroon.',
    sections: [
      {
        heading: '1. Wastong Gamit ng "NG" laban sa "NANG"',
        paragraphs: [
          'Ang "NG" ay ginagamit:',
          '1. Bilang pananda ng tuwirang layon ng pandiwa (Direct Object): "Bumili siya ng aklat."',
          '2. Bilang pananda ng tagaganap ng pandiwang balintiyak (Passive Agent): "Isinulat ng guro ang pagsusulit."',
          '3. Bilang pananda ng pagmamay-ari (Possessive): "Ang payong ng bata ay nabasa."',
          'Ang "NANG" ay ginagamit:',
          '1. Katumbas ng "when" o "noong": "Nang dumating ang guro, tumahimik ang klase."',
          '2. Katumbas ng "so that" o "upang / para": "Mag-aral ka nang mabuti nang makapasa ka sa LET."',
          '3. Bilang pang-abay na pamaraan (Adverb of manner / how): "Tumakbo siya nang mabilis."',
          '4. Sa pagitan ng inuulit na pandiwa: "Kain nang kain", "iyak nang iyak", "basa nang basa."',
          '5. Katumbas ng pinagsamang "na" at "ng": "Sobra nang (na + ng) sakit ang kanyang naramdaman."',
        ],
        keyConcept:
          'Gamitin ang NANG sa inuulit na pandiwa, bilang pang-abay na pamaraan (paano), at katumbas ng "noong" o "upang". Gamitin ang NG bilang pantukoy ng layon, tagaganap, o pagmamay-ari.',
      },
      {
        heading: '2. Wastong Gamit ng DIN/RIN at DAW/RAW',
        paragraphs: [
          'Gamitin ang RIN at RAW kapag ang sinusundang salita ay nagtatapos sa PATINIG (vowel: A, E, I, O, U) o malapatinig na W at Y: "Ikaw raw", "babae rin", "bahay raw", "tayo rin".',
          'Gamitin ang DIN at DAW kapag ang sinusundang salita ay nagtatapos sa KATINIG (consonant, maliban sa W at Y): "Kapatid din", "aklat daw", "guro din (mali -> guro rin)".',
        ],
      },
      {
        heading: '3. Wastong Gamit ng MAY laban sa MAYROON',
        paragraphs: [
          'Gamitin ang MAY kapag sinusundan ng:',
          '1. Pangngalan (Noun): "May tao sa labas."',
          '2. Pandiwa (Verb): "May kumakatok sa pinto."',
          '3. Pang-uri (Adjective): "May magandang balita siya."',
          '4. Pang-abay (Adverb): "May biglang sumigaw."',
          '5. Pantukoy na "mga": "May mga mag-aaral sa silid."',
          'Gamitin ang MAYROON kapag:',
          '1. Sinusundan ng panghalip na panao (Personal pronoun): "Mayroon siyang pagsusulit."',
          '2. Sinusundan ng katagang pang-abay (e.g. pa, ba, din, naman): "Mayroon pa bang natira?"',
          '3. Panagot sa tanong (affirmative response): "May pera ka ba? — Mayroon."',
          '4. Nangangahulugang mayaman / mariwasa: "Sila ay maykaya at mayroon sa buhay."',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Pang-abay na Pamaraan',
        definition: 'Nagsasaad kung paano ginawa ang kilos (sinusundan ng "nang", hal. lumakad nang dahan-dahan).',
      },
      {
        term: 'DIN vs RIN',
        definition: 'RIN/RAW pagkatapos ng patinig/W/Y; DIN/DAW pagkatapos ng katinig.',
      },
    ],
    letTips: [
      'Kapag inuulit ang pandiwa ("aral ___ aral"), palaging NANG ang sagot.',
      'Kung ang salita ay nagtatapos sa W o Y ("ikaw", "araw", "kamay"), gamitin ang RAW o RIN.',
      'Kung sumasagot nang mag-isa sa tanong ("Mayroon ka bang lapis?"), ang tamang sagot ay "Mayroon" (hindi "May").',
    ],
    commonMistakes: [
      'Pagsusulat ng "Maganda din" (mali; dapat ay "Maganda rin" dahil nagtatapos sa patinig na A).',
      'Paggamit ng "May siya" (mali; dapat ay "Mayroon siyang...").',
    ],
    summaryPoints: [
      'NG = layon, pagmamay-ari, tagaganap.',
      'NANG = paano, noong, upang, inuulit na pandiwa.',
      'RIN/RAW = patinig at W, Y.',
      'DIN/DAW = katinig.',
      'MAY = sinusundan ng pangngalan/pandiwa/pang-uri; MAYROON = sinusundan ng panghalip/kataga o panagot.',
    ],
  },
];
