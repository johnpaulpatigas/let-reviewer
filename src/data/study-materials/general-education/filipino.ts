import type { StudyMaterial } from '../../../types';

export const FILIPINO_STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat-gen-fil-001',
    slug: 'wastong-gamit-ng-mga-salita-filipino',
    title: 'Wastong Gamit ng mga Salita: NG vs. NANG, DIN/RIN, at MAY/MAYROON',
    subjectId: 'gen-fil',
    subjectName: 'Filipino at Panitikan',
    category: 'gen_ed',
    topic: 'Wastong Gamit',
    relatedTopics: ['Balarila at Ponolohiya', 'Tayutay at Idyoma'],
    description: 'Gabay sa tamang paggamit ng mga salitang madalas ipagkamali sa LET: ng/nang, may/mayroon, pinto/pintuan, subukin/subukan, at pahirin/pahiran.',
    readTimeMinutes: 7,
    overview:
      'Ang wastong gamit ng mga salita ay pundasyon ng pagsusulit sa Filipino sa LET General Education. Mahalagang maunawaan ang gramatikal na gamit ng bawat salita ayon sa tuntunin ng KWF.',
    sections: [
      {
        heading: '1. Wastong Gamit ng NG at NANG',
        paragraphs: [
          'Ginagamit ang "NG": bilang pantukoy sa layon ng pandiwa (sumasagot sa "ano": "Bumili siya ng sapatos"), bilang pantukoy sa tagaganap ng pandiwa ("Kinain ng bata ang tinapay"), at bilang pag-aari ("Bahay ng aking guro").',
          'Ginagamit ang "NANG": bilang pang-abay na pamaraan (sumasagot sa "paano": "Tumakbo nang mabilis"), pampalit sa salitang "noong" ("Nang dumating ang guro..."), pampalit sa "upang" o "para" ("Mag-aral ka nang makapasa"), at sa inuulit na pandiwa ("Umiyak nang umiyak").',
        ],
        comparisonTable: {
          headers: ['Salita', 'Kaukulan / Gamit', 'Halimbawa'],
          rows: [
            ['NG', 'Layon ng pandiwa / Pag-aari / Tagaganap', 'Nagbasa ng aklat ang mag-aaral.'],
            ['NANG', 'Pamaraan (paano) / Noong / Upang / Inuulit na kilos', 'Nagdasal nang taimtim nang makamit ang tagumpay.'],
          ],
        },
      },
      {
        heading: '2. MAY vs. MAYROON',
        paragraphs: [
          'Gamitin ang "MAY" kapag sinusundan ng: Pangngalan ("May pera"), Pandiwa ("May kumakatok"), Pang-uri ("May magandang balita"), o Pang-abay ("May biglang sumigaw").',
          'Gamitin ang "MAYROON" kapag: Sinusundan ng kataga o panghalip panao ("Mayroon kaming pagsusulit", "Mayroon ba siyang dala?"), at kapag ginagamit na panagot sa tanong ("May asukal ba? — Mayroon.").',
        ],
      },
      {
        heading: '3. Mga Salitang Madalas Ipagkamali',
        paragraphs: [
          'Pinto vs. Pintuan: Ang "pinto" (door) ay ang mismong panara na ibinubukas/isinasara. Ang "pintuan" (doorway) ay ang lagusan o espasyo.',
          'Hagdan vs. Hagdanan: Ang "hagdan" (stairs/steps) ay ang mga baitang. Ang "hagdanan" (stairway/stairwell) ay ang lugar kung saan nakatayo ang hagdan.',
          'Subukin vs. Subukan: Ang "subukin" (to test) ay pagsukat sa husay o kalidad. Ang "subukan" (to spy on) ay pagmamanman nang palihim.',
          'Pahirin vs. Pahiran: Ang "pahirin" ay pag-alis o pagpunas sa dumi ("Pahirin mo ang luha"). Ang "pahiran" ay paglalagay ng bagay sa ibabaw ("Pahiran mo ng mantikilya ang tinapay").',
          'Raw/Rin vs. Daw/Din: "Raw/Rin" kapag nagtatapos sa patinig o malapatinig (w, y); "Daw/Din" kapag nagtatapos sa katinig.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Pang-abay na Pamaraan',
        definition: 'Naglalarawan kung paano isinagawa ang kilos ng pandiwa, palaging ginagamitan ng "nang".',
      },
      {
        term: 'Malapatinig',
        definition: 'Ang mga ponemang /w/ at /y/ na sinusundan ng "raw/rin" sa ortograpiyang Filipino.',
      },
    ],
    letTips: [
      'Tandaan: Kung inuulit ang pandiwa ("sayaw nang sayaw", "takbo nang takbo"), laging "NANG" ang gamit.',
      'Kung may panghalip pagkatapos ("kami", "sila", "ka"), laging "MAYROON" ang gamitin ("Mayroon kaming...").',
    ],
    summaryPoints: [
      'Gamitin ang NG para sa layon at pag-aari; gamitin ang NANG para sa pamaraan, noong, upang, at inuulit na pandiwa.',
      'Gamitin ang MAY kapag sinusundan ng pangngalan/pandiwa/pang-uri; gamitin ang MAYROON kapag sinusundan ng kataga o panghalip.',
      'Subukin = subukan ang husay; Subukan = manmanan nang lihim.',
    ],
  },
  {
    id: 'mat-gen-fil-002',
    slug: 'balarila-ponolohiya-at-morpolohiya',
    title: 'Balarila, Ponolohiya, at mga Pagbabagong Morpoponemiko',
    subjectId: 'gen-fil',
    subjectName: 'Filipino at Panitikan',
    category: 'gen_ed',
    topic: 'Balarila at Ponolohiya',
    relatedTopics: ['Wastong Gamit', 'Panitikang Pilipino'],
    description: 'Komprehensibong talakay sa ponemang segmental/suprasegmental (diin, tono, antala) at mga uri ng pagbabagong morpoponemiko sa wikang Filipino.',
    readTimeMinutes: 7,
    overview:
      'Ang ponolohiya (tunog) at morpolohiya (pagbuo ng salita) ay mahahalagang sangkap sa pagsusuri ng kayarian ng wikang Filipino. Madalas itanong sa LET ang mga pagbabagong morpoponemiko tulad ng asimilasyon, metatesis, at pagkakaltas.',
    sections: [
      {
        heading: '1. Ponemang Suprasegmental',
        paragraphs: [
          'Diin (Stress): Ang bigat o lakas ng pagbigkas sa pantig ng salita na nagpapabago sa kahulugan (hal. TUBO = pipe; tuBO = sugar cane; tuBO = profit/interest).',
          'Tono o Intonasyon (Pitch): Ang taas-baba ng pagbigkas ng pantig na nagpapahiwatig ng damdamin o layon (pagsasalaysay vs pagtatanong).',
          'Antala o Hinto (Juncture): Ang saglit na pagtigil sa pagsasalita upang maging malinaw ang mensahe (hal. "Hindi, ako si Maria." [paliwanag] vs "Hindi ako si Maria." [pagtanggi]).',
        ],
      },
      {
        heading: '2. Mga Uri ng Pagbabagong Morpoponemiko',
        paragraphs: [
          'Asimilasyong Di-ganap (Parsyal): Nagbabago ang /ng/ ng panlapi batay sa kasunod na titik (/p, b/ -> /m/; /d, l, r, s, t/ -> /n/) ngunit nananatili ang unang titik ng salitang-ugat (hal. pang + bansa -> pambansa; pang + dikdik -> pandikdik).',
          'Asimilasyong Ganap: Bukod sa pagbabago ng panlapi, nawawala rin ang unang titik ng salitang-ugat (hal. pang + palo -> pamalo; pang + tali -> panali).',
          'Metatesis: Pagpapalitan ng posisyon ng mga ponema sa loob ng salita (hal. in + lipad -> linipad -> nilipad; in + yaya -> niyaya).',
          'Pagkakaltas ng Ponema: Nawawalan ng patinig ang salitang-ugat kapag hinuhulapian (hal. takip + an -> takpan; sara + an -> sarhan; bukas + an -> buksan).',
          'Pagpapalit ng Ponema: Ang ponemang /d/ ay nagiging /r/ kapag napapagitnaan ng dalawang patinig (hal. ma + dapat -> marapat; ma + dunong -> marunong).',
        ],
        comparisonTable: {
          headers: ['Pagbabago', 'Paliwanag', 'Halimbawa'],
          rows: [
            ['Asimilasyong Ganap', 'Nagbago ang panlapi at nawala ang unang titik ng ugat', 'pang + palo -> pamalo'],
            ['Asimilasyong Di-Ganap', 'Nagbago lang ang panlapi, buo pa ang ugat', 'pang + bansa -> pambansa'],
            ['Metatesis', 'Nagkapalit ang puwesto ng ponema', 'linipad -> nilipad'],
            ['Pagkakaltas', 'Nawalan ng patinig sa hulapi', 'takip + an -> takpan'],
          ],
        },
      },
    ],
    keyTerms: [
      {
        term: 'Ponema',
        definition: 'Pinakamaliit na makabuluhang yunit ng tunog sa isang wika.',
      },
      {
        term: 'Morpema',
        definition: 'Pinakamaliit na yunit ng salita na nagtataglay ng kahulugan.',
      },
    ],
    letTips: [
      'Kapag nawala ang unang titik ng salitang-ugat (pang + tali -> panali), ito ay Asimilasyong Ganap.',
      'Kapag nagpalit ng puwesto ang mga titik (linipad -> nilipad), ito ay Metatesis.',
    ],
    summaryPoints: [
      'Ang antala, diin, at tono ay nagpapabago sa kahulugan ng pahayag.',
      'Kabisaduhin ang 5 pangunahing pagbabagong morpoponemiko para sa pagsusulit.',
    ],
  },
  {
    id: 'mat-gen-fil-003',
    slug: 'tayutay-idyoma-at-sawikain-filipino',
    title: 'Mga Tayutay, Sawikain, at Idyomang Filipino',
    subjectId: 'gen-fil',
    subjectName: 'Filipino at Panitikan',
    category: 'gen_ed',
    topic: 'Tayutay at Idyoma',
    relatedTopics: ['Panitikang Pilipino', 'Wastong Gamit'],
    description: 'Pagsusuri sa mga uri ng tayutay (pagtutulad, pagwawangis, pagsasatao, pagmamalabis, pagpapalit-saklaw) at tanyag na sawikain at idyoma sa LET.',
    readTimeMinutes: 6,
    overview:
      'Ang mga tayutay at sawikain ay nagpapayaman sa pagpapahayag sa panitikan. Sinusubok sa LET ang kakayahang kumilala ng mga matatalinghagang salita at tayutay.',
    sections: [
      {
        heading: '1. Pangunahing mga Tayutay',
        paragraphs: [
          'Pagtutulad (Simile): Tahasang paghahambing gamit ang mga salitang tulad ng, gaya ng, paris ng, tila, kawangis ng (hal. "Ang kanyang ngiti ay tulad ng araw").',
          'Pagwawangis (Metaphor): Tiyak na paghahambing na hindi gumagamit ng mga salitang pantulad (hal. "Siya ang liwanag sa aming tahanan").',
          'Pagsasatao (Personification): Pagbibigay ng katangian o gawi ng tao sa mga bagay na walang buhay (hal. "Nahihiyang nagtago ang buwan sa ulap").',
          'Pagmamalabis (Hyperbole / Eksahirasyon): Labis-labis na paglalarawan na lampas sa katotohanan (hal. "Bumaha ng luha sa kanyang pag-alis").',
          'Pagpapalit-saklaw (Synecdoche): Pagbanggit sa bahagi para sa kabuuan (hal. "Apat na bibig ang umaasa sa kanyang kita").',
          'Pagpapalit-tawag (Metonymy): Pagpapalit ng katawagan batay sa kaugnayan (hal. "Igalang natin ang puting buhok" [matatanda]).',
        ],
      },
      {
        heading: '2. Mga Tanyag na Sawikain at Idyoma',
        paragraphs: [
          'Mahalagang maunawaan ang matatalinghagang sawikain na sumasalamin sa kulturang Pilipino.',
        ],
        comparisonTable: {
          headers: ['Sawikain / Idyoma', 'Kahulugan'],
          rows: [
            ['Balat-sibuyas', 'Maramdamin, sensitibo, madaling umiyak o masaktan'],
            ['Nagbibilang ng poste', 'Walang trabaho o hanapbuhay'],
            ['Bukas-palad', 'Matulungin, mapagbigay'],
            ['Kapilas ng puso / Kabiyak', 'Asawa o kapareha sa buhay'],
            ['Kusang-palo', 'Nagtatrabaho nang kusa nang hindi na kailangang utusan'],
            ['Ilaw ng tahanan', 'Ina / Nanay'],
            ['Haligi ng tahanan', 'Ama / Tatay'],
          ],
        },
      },
    ],
    keyTerms: [
      {
        term: 'Tayutay',
        definition: 'Matalinghagang pagpapahayag na lumilihis sa karaniwang paraan ng pagsasalita upang maging kaakit-akit.',
      },
      {
        term: 'Sawikain',
        definition: 'Idyomatikong pahayag na ang kahulugan ay hindi tuwirang nakukuha sa literal na kahulugan ng mga salita.',
      },
    ],
    letTips: [
      'Kung may "tulad ng", "parang", o "tila", Pagtutulad (Simile) ito.',
      'Kung direktang inilapat ang katangian ("ikaw ang aking bituin"), Pagwawangis (Metaphor) ito.',
    ],
    summaryPoints: [
      'Pagtutulad ay gumagamit ng mga salitang pantulad; Pagwawangis ay tuwirang paglalapat.',
      'Ang sawikain ay may malalim at di-literal na kahulugan sa kulturang Pilipino.',
    ],
  },
  {
    id: 'mat-gen-fil-004',
    slug: 'panitikang-pilipino-akda-at-may-akda',
    title: 'Panitikang Pilipino: Mga Obra Maestra, Akda, at Manunulat',
    subjectId: 'gen-fil',
    subjectName: 'Filipino at Panitikan',
    category: 'gen_ed',
    topic: 'Panitikang Pilipino',
    relatedTopics: ['Tayutay at Idyoma', 'Balarila at Ponolohiya'],
    description: 'Mahahalagang akdang pampanitikan, sinaunang awiting-bayan, epiko, at sagisag-panulat ng mga bantog na manunulat sa Pilipinas.',
    readTimeMinutes: 8,
    overview:
      'Sinasaklaw ng pagsusulit sa Panitikang Pilipino ang kasaysayan ng panitikan mula sa panahong pre-kolonyal (epiko at awiting-bayan) hanggang sa Panahon ng Kastila, Propaganda, Amerikano, at Kontemporaryo.',
    sections: [
      {
        heading: '1. Mga Sinaunang Epiko at Awiting-Bayan',
        paragraphs: [
          'Biag ni Lam-ang: Tanyag na epikong Ilokano tungkol sa bayaning si Lam-ang, kanyang mahiwagang tandang at aso, at pakikipagsapalaran para kay Ines Kannoyan.',
          'Hinilawod: Pinakamahabang epikong-bayan mula sa Panay (Labaw Donggon, Humadapnon, Dumalapdap).',
          'Hudhud at Alim: Mga dakilang epiko ng mga Ifugao.',
          'Mga Uri ng Awiting-Bayan: Kundiman (awit ng pag-ibig), Kumintang/Tikam (awit sa pakikidigma), Oyayi/Hele (pagpapatulog ng sanggol), Talindaw (awit sa pamamangka), Diona (awit sa kasal), Dalit (awit na panrelihiyon/papuri).',
        ],
      },
      {
        heading: '2. Mahahalagang Akda sa Panahon ng Kastila',
        paragraphs: [
          'Doctrina Christiana (1593): Kauna-unahang aklat na nailimbag sa Pilipinas nina Fray Juan de Plasencia at Fray Domingo de Nieva.',
          'Florante at Laura (1838): Dakilang awit ni Francisco "Balagtas" Baltazar ("Prinsipe ng Makatang Tagalog").',
          'Urbana at Felisa (1864): Aklat ng kagandahang-asal ni Padre Modesto de Castro ("Ama ng Tuluyang Klasika sa Tagalog").',
          'Barlaan at Josaphat: Kauna-unahang nobelang Tagalog na isinalin ni Fray Antonio de Borja.',
        ],
      },
      {
        heading: '3. Mga Bantog na Sagisag-Panulat (Pen Names)',
        paragraphs: [
          'Kabisaduhin ang mga pangunahing sagisag-panulat ng mga bayani at manunulat sa Pilipinas.',
        ],
        comparisonTable: {
          headers: ['Tunay na Pangalan', 'Sagisag-Panulat / Titulo', 'Kilalang Obra / Kontribusyon'],
          rows: [
            ['Francisco Baltazar', 'Balagtas / Prinsipe ng Makatang Tagalog', 'Florante at Laura, Orosman at Zafira'],
            ['Jose Corazon de Jesus', 'Huseng Batute / Hari ng Balagtasan', 'Bayan Ko, Isang Punongkahoy'],
            ['Severino Reyes', 'Lola Basyang / Ama ng Sarswelang Tagalog', 'Walang Sugat, Mga Kwento ni Lola Basyang'],
            ['Jose dela Cruz', 'Huseng Sisiw (guro ni Balagtas)', 'Ibong Adarna (pinaniniwalaan), mga tula'],
            ['Lope K. Santos', 'Ama ng Balarilang Tagalog', 'Banaag at Sikat, Balarila ng Wikang Pambansa'],
            ['Amado V. Hernandez', 'Makata ng mga Manggagawa', 'Luha ng Buwaya, Mga Ibong Mandaragit, Isang Dipang Langit'],
          ],
        },
      },
    ],
    keyTerms: [
      {
        term: 'Awit vs. Korido',
        definition: 'Ang Awit ay may 12 pantig sa bawat taludtod at marahang ritmo (hal. Florante at Laura); ang Korido ay may 8 pantig at mabilis na ritmo (hal. Ibong Adarna).',
      },
      {
        term: 'Balagtasan',
        definition: 'Isang uri ng pagtatalo sa pamamagitan ng patulang pagpapahayag na ipinangalan kay Francisco Balagtas.',
      },
    ],
    letTips: [
      'Tandaan ang sukat: Awit = 12 pantig (Florante at Laura); Korido = 8 pantig (Ibong Adarna).',
      'Severino Reyes = Lola Basyang (Walang Sugat); Jose Corazon de Jesus = Huseng Batute (Bayan Ko).',
    ],
    summaryPoints: [
      'Ang Doctrina Christiana (1593) ang unang aklat sa Pilipinas.',
      'Si Francisco Balagtas ang sumulat ng Florante at Laura.',
      'Kabisaduhin ang mga sinaunang awiting-bayan tulad ng Oyayi (hele) at Kumintang (pakikidigma).',
    ],
  },
];
