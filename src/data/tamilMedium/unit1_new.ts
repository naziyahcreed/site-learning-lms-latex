import { BookChapter } from '../../types/math';

export const unit1TamilNew: BookChapter = {
  id: 'tm_unit_1_new',
  chapterNumber: 1,
  romanNumeral: 'I',
  title: 'உறவுகளும் சார்புகளும் (Detailed Steps)',
  subtitle: 'PDF-ல் இருந்து எடுக்கப்பட்ட விரிவான படிநிலை தீர்வுகள்',
  synopsis:
    'சுரா வழிகாட்டி pdf-ல் கொடுக்கப்பட்டுள்ள விரிவான படிநிலை தீர்வுகள்.',
  prerequisites: ['கணங்கள்', 'சார்புகள்'],
  sections: [
    {
      id: 'tm_sec_1_3_new',
      sectionNumber: '1.3',
      title: 'பயிற்சி 1.3 - சார்புகள் (விரிவான தீர்வுகள்)',
      introText: 'PDF வழிகாட்டியில் உள்ளபடி விரிவான தீர்வுகள்.',
      items: [],
      problems: [
        {
          id: 'ta_prob_1_3_q6_new',
          number: 'பயிற்சி 1.3 - வினா 6',
          title: 'f(x) = 2x - 3 சார்பு மதிப்பீடு',
          difficulty: 'Intermediate',
          statementLatex: 'f(x) = 2x - 3 \\text{ எனில் } (i) \\frac{f(0) + f(1)}{2} \\text{ காண்க, } (ii) f(x) = 0 \\text{ எனில் } x \\text{ காண்க, } (iii) f(x) = x \\text{ எனில் } x \\text{ காண்க.}',
          description: 'கொடுக்கப்பட்ட சார்பின் மதிப்புகளைப் பிரதியிட்டு விடை காண்க.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: '(i) f(0) மற்றும் f(1) காண்க.',
              hint: 'f(0) = 2(0)-3, f(1) = 2(1)-3',
              expectedInsight: 'f(0) = -3, f(1) = -1',
              latexIntermediate: 'f(0) = 2 \\times 0 - 3 = 0 - 3 = -3 \\\\ f(1) = 2 \\times 1 - 3 = 2 - 3 = -1',
              options: [],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: '(i) இன் இறுதி விடை காண்க.',
              hint: '(-3 + -1) / 2',
              expectedInsight: '-4 / 2 = -2',
              latexIntermediate: '\\frac{f(0) + f(1)}{2} = \\frac{-3 + (-1)}{2} = \\frac{-3 - 1}{2} = \\frac{-4}{2} = -2',
              options: [],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: '(ii) f(x) = 0 எனில் x காண்க.',
              hint: '2x - 3 = 0',
              expectedInsight: '2x = 3 => x = 3/2',
              latexIntermediate: 'f(x) = 0 \\implies 2x - 3 = 0 \\\\ 2x = 3 \\\\ x = \\frac{3}{2}',
              options: [],
              correctOptionIndex: 0
            },
            {
              stepIndex: 4,
              prompt: '(iii) f(x) = x எனில் x காண்க.',
              hint: '2x - 3 = x',
              expectedInsight: 'x = 3',
              latexIntermediate: 'f(x) = x \\implies 2x - 3 = x \\\\ 2x - x = 3 \\\\ x = 3',
              options: [],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '(i) -2 \\quad (ii) x = \\frac{3}{2} \\quad (iii) x = 3',
          fullSolutionWalkthrough:
            'கொடுக்கப்பட்ட சார்பு f(x) = 2x - 3\n\n(i) \\frac{f(0) + f(1)}{2}\nபடி 1: f(0) = 2 × 0 - 3 = 0 - 3 = -3\nபடி 2: f(1) = 2 × 1 - 3 = 2 - 3 = -1\nஇதிலிருந்து,\n\\frac{f(0) + f(1)}{2} = \\frac{(-3) + (-1)}{2} = \\frac{-3 - 1}{2} = \\frac{-4}{2} = -2\n\n(ii) f(x) = 0 எனில் x காண்க\nf(x) = 0 எனில் 2x - 3 = 0\n2x = 3\nx = 3/2\n\n(iii) f(x) = x எனில் x காண்க\nf(x) = x எனில் 2x - 3 = x\n2x - x = 3\nx = 3'
        }
      ]
    }
  ]
};
