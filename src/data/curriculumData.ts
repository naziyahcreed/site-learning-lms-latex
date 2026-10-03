import { BookChapter } from '../types/math';
import { CHAPTERS_DATA as CLASSICAL_PRINCIPIA_DATA } from './chaptersData';
import { ENGLISH_MEDIUM_UNITS } from './englishMedium';
import { TAMIL_MEDIUM_UNITS } from './tamilMedium';
import { TAMIL_SUBJECT_UNITS } from './tamilSubject';
import { ENGLISH_SUBJECT_UNITS } from './englishSubject';
import { SCIENCE_SUBJECT_UNITS } from './scienceSubject';

export type CurriculumMedium = 
  | 'tamil'
  | 'english'
  | 'science'
  | 'maths_ta'
  | 'maths_en'
  | 'classical';

export interface MediumOption {
  id: CurriculumMedium;
  label: string;
  badge: string;
  description: string;
  icon: string;
}

export const MEDIUM_OPTIONS: MediumOption[] = [
  {
    id: 'tamil',
    label: '10ஆம் வகுப்பு தமிழ்',
    badge: 'இயல் 1 - 9 வரை (அனைத்தும்)',
    description: 'தமிழ்நாடு அரசுப் பாடத்திட்டம் 10ஆம் வகுப்பு தமிழ் - அனைத்து இயல்களுக்கான வினா-விடைகள்',
    icon: '📖'
  },
  {
    id: 'english',
    label: '10th English',
    badge: 'Units 1 - 7 (Complete)',
    description: 'TN State Board Class 10 English - Prose, Poetry, Supplementary & Grammar with LaTeX',
    icon: '🇬🇧'
  },
  {
    id: 'science',
    label: '10th Science (அறிவியல்)',
    badge: 'Physics, Chem, Bio',
    description: 'TN Class 10 Science - Physics, Chemistry & Biology comprehensive Q&A and derivations',
    icon: '🔬'
  },
  {
    id: 'maths_ta',
    label: 'கணிதம் (தமிழ் வழி)',
    badge: '10ஆம் வகுப்பு - 8 அலகுகள்',
    description: 'தமிழ்நாடு அரசுப் பாடத்திட்டம் 10ஆம் வகுப்பு கணிதம் (அலகுகள் 1 முதல் 8 வரை)',
    icon: '📐'
  },
  {
    id: 'maths_en',
    label: 'Mathematics (English)',
    badge: 'Class 10 - 8 Units',
    description: 'Tamil Nadu State Board Class 10 Mathematics (Units 1 to 8)',
    icon: '➗'
  },
  {
    id: 'classical',
    label: 'Classical Principia',
    badge: 'Advanced - 5 Chapters',
    description: 'Higher Foundations of Real Analysis & Calculus (Original Collection)',
    icon: '📜'
  }
];

export function getChaptersByMedium(medium: CurriculumMedium): BookChapter[] {
  switch (medium) {
    case 'tamil':
      return TAMIL_SUBJECT_UNITS;
    case 'english':
      return ENGLISH_SUBJECT_UNITS;
    case 'science':
      return SCIENCE_SUBJECT_UNITS;
    case 'maths_ta':
      return TAMIL_MEDIUM_UNITS;
    case 'maths_en':
      return ENGLISH_MEDIUM_UNITS;
    case 'classical':
    default:
      return CLASSICAL_PRINCIPIA_DATA;
  }
}

export { 
  CLASSICAL_PRINCIPIA_DATA, 
  ENGLISH_MEDIUM_UNITS, 
  TAMIL_MEDIUM_UNITS,
  TAMIL_SUBJECT_UNITS,
  ENGLISH_SUBJECT_UNITS,
  SCIENCE_SUBJECT_UNITS
};
