import { BookChapter } from '../../types/math';

export const unit6Tamil: BookChapter = {
  id: 'tm_unit_6',
  chapterNumber: 6,
  romanNumeral: 'VI',
  title: 'முக்கோணவியல்',
  subtitle: 'சுரா வழிகாட்டி முழு தீர்வுகள்: அனைத்து பயிற்சிகளும் (பயிற்சி 6.1 முதல் 6.5 & அலகுப் பயிற்சி 6)',
  synopsis:
    'முக்கோணவியல் பாடத்தில் முக்கோணவியல் முற்றொருமைகள், உயரங்களும் தொலைவுகளும் (ஏற்றக் கோணம், இறக்கக் கோணம்), மற்றும் ஒருங்கிணைந்த கோணக் கணக்குகளுக்கான 1, 2 மற்றும் 5 மதிப்பெண் சுரா வழிகாட்டி படிநிலை தீர்வுகள்.',
  prerequisites: ['முக்கோணவியல் விகிதங்கள்', 'கோணங்களின் அட்டவணை மதிப்புகள் (0°, 30°, 45°, 60°, 90°)', 'செங்கோண முக்கோணம்'],
  sections: [
    // =========================================================================
    // பயிற்சி 6.1 (முக்கோணவியல் முற்றொருமைகள்)
    // =========================================================================
    {
      id: 'tm_sec_6_1',
      sectionNumber: '6.1',
      title: 'பயிற்சி 6.1 - முக்கோணவியல் முற்றொருமைகள் (2 & 5 மதிப்பெண்)',
      introText:
        'அடிப்படை முற்றொருமைகள்: sin²θ + cos²θ = 1; 1 + tan²θ = sec²θ; 1 + cot²θ = cosec²θ. இவற்றை இயற்கணித முறையில் பயன்படுத்தி சமன்பாடுகளை நிறுவலாம்.',
      items: [
        {
          id: 'tm_thm_6_1',
          type: 'definition',
          number: '6.1',
          title: 'பிதாகரியன் முற்றொருமைகள்',
          statementLatex: '\\sin^2\\theta + \\cos^2\\theta = 1, \\quad \\sec^2\\theta - \\tan^2\\theta = 1, \\quad \\csc^2\\theta - \\cot^2\\theta = 1',
          statementText: 'இவை முக்கோணவியல் சுருக்குதல்களின் அடித்தளமாகும்.'
        }
      ],
      problems: [
        {
          id: 'tm_prob_6_1_2mark',
          number: 'பயிற்சி 6.1 - வினா 1(i) (2 மதிப்பெண்)',
          title: 'cot θ + tan θ = sec θ cosec θ என நிறுவுக',
          difficulty: 'Foundational',
          statementLatex: '\\cot\\theta + \\tan\\theta = \\sec\\theta \\csc\\theta \\text{ என நிறுவுக.}',
          description: 'முக்கோணவியல் அடிப்படை முற்றொருமை நிறுவல்.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'cot θ மற்றும் tan θ-ஐ sin θ மற்றும் cos θ வடிவில் மாற்றுக.',
              hint: 'cos θ / sin θ + sin θ / cos θ = (cos²θ + sin²θ) / (sin θ cos θ).',
              expectedInsight: '(cos²θ + sin²θ) / (sin θ cos θ).',
              latexIntermediate: '\\frac{\\cos^2\\theta + \\sin^2\\theta}{\\sin\\theta \\cos\\theta}',
              options: ['\\frac{\\cos^2\\theta + \\sin^2\\theta}{\\sin\\theta \\cos\\theta}', '\\frac{1}{\\sin\\theta + \\cos\\theta}'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'sin²θ + cos²θ = 1 எனப் பிரதியிடுக.',
              hint: '1 / (sin θ cos θ) = sec θ cosec θ.',
              expectedInsight: 'sec θ cosec θ.',
              latexIntermediate: '\\frac{1}{\\sin\\theta \\cos\\theta} = \\sec\\theta \\csc\\theta',
              options: ['sec θ cosec θ', 'tan θ cot θ'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\cot\\theta + \\tan\\theta = \\sec\\theta \\csc\\theta \\quad (\\text{நிரூபிக்கப்பட்டது})',
          fullSolutionWalkthrough:
            'LHS = cot θ + tan θ\n= (cos θ / sin θ) + (sin θ / cos θ) [1 மதிப்பெண்]\n= (cos²θ + sin²θ) / (sin θ cos θ)\nsin²θ + cos²θ = 1 என்பதால்:\n= 1 / (sin θ cos θ) = (1 / cos θ) × (1 / sin θ) = sec θ cosec θ = RHS [1 மதிப்பெண்]\nநிரூபிக்கப்பட்டது.'
        },
        {
          id: 'tm_prob_6_1_5mark',
          number: 'பயிற்சி 6.1 - வினா 6(i) (5 மதிப்பெண்)',
          title: '[sin(A - B)/cos A cos B] + [sin(B - C)/cos B cos C] + [sin(C - A)/cos C cos A] = 0 என நிறுவுக',
          difficulty: 'Intermediate',
          statementLatex: '\\frac{\\sin(A - B)}{\\cos A \\cos B} + \\frac{\\sin(B - C)}{\\cos B \\cos C} + \\frac{\\sin(C - A)}{\\cos C \\cos A} = 0 \\text{ என நிறுவுக.}',
          description: 'சுரா வழிகாட்டி மாதிரி 5 மதிப்பெண் சுழற்சி முறை முற்றொருமை தீர்வு.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'முதல் உறுப்பை விரிக்க: sin(A - B) = sin A cos B - cos A sin B.',
              hint: '(sin A cos B)/(cos A cos B) - (cos A sin B)/(cos A cos B) = tan A - tan B.',
              expectedInsight: 'tan A - tan B.',
              latexIntermediate: '\\frac{\\sin A \\cos B - \\cos A \\sin B}{\\cos A \\cos B} = \\tan A - \\tan B',
              options: ['tan A - tan B', 'tan A + tan B'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'இதேபோல் மற்ற இரு உறுப்புகளையும் விரிக்க.',
              hint: 'tan B - tan C மற்றும் tan C - tan A.',
              expectedInsight: 'அனைத்து உறுப்புகளும் நீங்கி பூச்சியமாகும்.',
              latexIntermediate: '(\\tan A - \\tan B) + (\\tan B - \\tan C) + (\\tan C - \\tan A) = 0',
              options: ['அனைத்தும் நீங்கி பூச்சியமாகும்', 'விடை 1 ஆகும்'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{LHS} = 0 = \\text{RHS} \\quad (\\text{நிரூபிக்கப்பட்டது})',
          fullSolutionWalkthrough:
            'LHS = [sin(A - B)/cos A cos B] + [sin(B - C)/cos B cos C] + [sin(C - A)/cos C cos A]  [1 மதிப்பெண்]\n\nsin(x - y) = sin x cos y - cos x sin y சூத்திரப்படி:\nஉறுப்பு 1 = (sin A cos B)/(cos A cos B) - (cos A sin B)/(cos A cos B)\n= tan A - tan B  [1.5 மதிப்பெண்]\n\nஇதேபோல்:\nஉறுப்பு 2 = tan B - tan C  [1 மதிப்பெண்]\nஉறுப்பு 3 = tan C - tan A  [1 மதிப்பெண்]\n\nமூன்றையும் கூட்ட:\nLHS = (tan A - tan B) + (tan B - tan C) + (tan C - tan A)\n= 0 = RHS  [0.5 மதிப்பெண்]\nநிரூபிக்கப்பட்டது (முழு 5/5 மதிப்பெண்கள் உறுதி).'
        }
      ]
    },

    // =========================================================================
    // பயிற்சி 6.2 (ஏற்றக் கோணம்)
    // =========================================================================
    {
      id: 'tm_sec_6_2',
      sectionNumber: '6.2',
      title: 'பயிற்சி 6.2 - ஏற்றக் கோணம் (2 & 5 மதிப்பெண்)',
      introText:
        'கிடைமட்டப் பார்வைக்கோட்டிற்கு மேலே உள்ள பொருளைப் பார்க்கும் போது பார்வைக்கோடு கிடைமட்டக் கோட்டுடன் ஏற்படுத்தும் கோணம் ஏற்றக் கோணம் ஆகும்.',
      items: [
        {
          id: 'tm_def_6_2',
          type: 'definition',
          number: '6.2',
          title: 'ஏற்றக் கோணம்',
          statementLatex: '\\tan \\theta = \\frac{\\text{எதிர்ப்பக்கம்}}{\\text{அடுத்துள்ள பக்கம்}}',
          statementText: 'செங்கோண முக்கோணத்தில் உயரத்திற்கும் தூரத்திற்குமான தொடர்பு.'
        }
      ],
      problems: [
        {
          id: 'tm_prob_6_2_2mark',
          number: 'பயிற்சி 6.2 - வினா 1 (2 மதிப்பெண்)',
          title: '10√3 மீ உயரமுள்ள கோபுரத்தின் உச்சியின் ஏற்றக்கோணத்தை அதன் அடியிலிருந்து 30 மீ தொலைவிலுள்ள புள்ளியிலிருந்து காண்க',
          difficulty: 'Foundational',
          statementLatex: '\\text{உயரம் } 10\\sqrt{3}\\text{ மீ, தொலைவு } 30\\text{ மீ எனில் ஏற்றக் கோணம் காண்க.}',
          description: 'செங்கோண முக்கோண ஏற்றக்கோண நேரடிக் கணக்கீடு.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'tan θ = உயரம் / தொலைவு கணக்கிடுக.',
              hint: 'tan θ = 10√3 / 30 = 1/√3 => θ = 30°.',
              expectedInsight: 'θ = 30°.',
              latexIntermediate: '\\tan\\theta = \\frac{10\\sqrt{3}}{30} = \\frac{1}{\\sqrt{3}} \\implies \\theta = 30^\\circ',
              options: ['θ = 30°', 'θ = 60°', 'θ = 45°'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\theta = 30^\\circ',
          fullSolutionWalkthrough:
            'கோபுரத்தின் உயரம் h = 10√3 மீ, கிடைமட்டத் தொலைவு d = 30 மீ [1 மதிப்பெண்]\ntan θ = எதிர்ப்பக்கம் / அடுத்துள்ள பக்கம் = (10√3) / 30 = √3 / 3 = 1/√3\ntan 30° = 1/√3 என்பதால், ஏற்றக் கோணம் θ = 30° ஆகும் [1 மதிப்பெண்]\nவிடை: 30°.'
        },
        {
          id: 'tm_prob_6_2_5mark',
          number: 'பயிற்சி 6.2 - வினா 6 (5 மதிப்பெண்)',
          title: '12 மீ உயரமுள்ள கட்டடத்தின் உச்சியிலிருந்து ஒரு கேபிள் கோபுரத்தின் உச்சியை 60° ஏற்றக் கோணத்திலும், அடியை 30° இறக்கக் கோணத்திலும் பார்த்தால், கோபுரத்தின் உயரம் காண்க',
          difficulty: 'Intermediate',
          statementLatex: '\\text{12 மீ உயர கட்டட உச்சியிலிருந்து கேபிள் கோபுர உச்சி } 60^\\circ \\text{ ஏற்றக் கோணம், அடி } 30^\\circ \\text{ இறக்கக் கோணம் எனில் உயரம் காண்க.}',
          description: 'சுரா வழிகாட்டி மாதிரி 5 மதிப்பெண் தீர்வு.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'கட்டடம் AB = 12 மீ. ΔABD-ல் tan 30° = 12/x கொண்டு தொலைவு x-ஐக் காண்க.',
              hint: '1/√3 = 12/x => x = 12√3 மீ.',
              expectedInsight: 'x = 12√3 மீ.',
              latexIntermediate: 'x = 12\\sqrt{3} \\text{ மீ}',
              options: ['12√3 மீ', '12 மீ'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'ΔACE-ல் tan 60° = (H - 12)/(12√3) கொண்டு உயரம் H-ஐக் காண்க.',
              hint: '√3 = (H - 12)/(12√3) => H - 12 = 36 => H = 48 மீ.',
              expectedInsight: 'H = 48 மீ.',
              latexIntermediate: 'H - 12 = 36 \\implies H = 48 \\text{ மீ}',
              options: ['48 மீ', '36 மீ'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{கேபிள் கோபுரத்தின் உயரம்} = 48 \\text{ மீ}',
          fullSolutionWalkthrough:
            'கட்டடத்தின் உயரம் AB = 12 மீ, கேபிள் கோபுரத்தின் உயரம் CD = H மீ என்க.\nகிடைமட்டத் தொலைவு BD = x மீ [1 மதிப்பெண்]\n\nசெங்கோண ΔABD-ல்:\ntan 30° = AB / BD\n1 / √3 = 12 / x => x = 12√3 மீ  --- (1) [1.5 மதிப்பெண்]\n\nசெங்கோண ΔACE-ல் (AE = BD = 12√3 மீ, CE = H - 12 மீ):\ntan 60° = CE / AE\n√3 = (H - 12) / (12√3) [1 மதிப்பெண்]\nH - 12 = 12√3 × √3 = 36\nH = 36 + 12 = 48 மீ [1.5 மதிப்பெண்]\nவிடை: கோபுரத்தின் உயரம் = 48 மீ (முழு 5/5 மதிப்பெண்கள் உறுதி).'
        }
      ]
    },

    // =========================================================================
    // பயிற்சி 6.3 (இறக்கக் கோணம்)
    // =========================================================================
    {
      id: 'tm_sec_6_3',
      sectionNumber: '6.3',
      title: 'பயிற்சி 6.3 - இறக்கக் கோணம் (2 & 5 மதிப்பெண்)',
      introText:
        'பார்வையாளரின் கிடைமட்டப் பார்வைக்கோட்டிற்கு கீழே உள்ள பொருளைப் பார்க்கும் போது ஏற்படும் கோணம் இறக்கக் கோணம் ஆகும். ஒன்றுவிட்ட கோணங்கள் சமம் என்பதால் இறக்கக் கோணம் = ஏற்றக் கோணம்.',
      items: [
        {
          id: 'tm_def_6_3',
          type: 'definition',
          number: '6.3',
          title: 'இறக்கக் கோணம்',
          statementLatex: '\\theta_{\\text{இறக்கம்}} = \\theta_{\\text{ஏற்றம்}}',
          statementText: 'கிடைமட்டக் கோடுகளுக்கு இடையே ஒன்றுவிட்ட கோணங்கள் சமம்.'
        }
      ],
      problems: [
        {
          id: 'tm_prob_6_3_2mark',
          number: 'பயிற்சி 6.3 - வினா 1 (2 மதிப்பெண்)',
          title: '50√3 மீ உயரமுள்ள பாறையின் உச்சியிலிருந்து தரையிலுள்ள ஒரு மகிழுந்தின் இறக்கக்கோணம் 30° எனில் தொலைவு காண்க',
          difficulty: 'Foundational',
          statementLatex: '\\text{உயரம் } 50\\sqrt{3}\\text{ மீ, இறக்கக் கோணம் } 30^\\circ \\text{ எனில் மகிழுந்தின் தொலைவு காண்க.}',
          description: 'செங்கோண முக்கோண இறக்கக் கோணக் கணக்கீடு.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'tan 30° = 50√3 / d சமன்பாட்டைத் தீர்க்க.',
              hint: 'd = 50√3 × √3 = 150 மீ.',
              expectedInsight: 'd = 150 மீ.',
              latexIntermediate: 'd = 50\\sqrt{3} \\times \\sqrt{3} = 150\\text{ மீ}',
              options: ['150 மீ', '100 மீ', '200 மீ'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'd = 150\\text{ மீ}',
          fullSolutionWalkthrough:
            'பாறையின் உயரம் AB = 50√3 மீ. இறக்கக் கோணம் = 30° [1 மதிப்பெண்]\nசெங்கோண ΔABC-ல்:\ntan 30° = AB / BC\n1 / √3 = 50√3 / BC\nBC = 50√3 × √3 = 50 × 3 = 150 மீ [1 மதிப்பெண்]\nவிடை: 150 மீ.'
        },
        {
          id: 'tm_prob_6_3_5mark',
          number: 'பயிற்சி 6.3 - வினா 4 (5 மதிப்பெண்)',
          title: '1800 மீ உயரத்தில் பறக்கும் ஒரு விமானத்திலிருந்து ஒரே திசையில் செல்லும் இரு கப்பல்களின் இறக்கக் கோணங்கள் முறையே 60° மற்றும் 30° எனில், கப்பல்களுக்கு இடைப்பட்ட தூரம் காண்க',
          difficulty: 'Intermediate',
          statementLatex: '\\text{விமானம் உயரம் } 1800\\text{ மீ, இறக்கக் கோணங்கள் } 60^\\circ, 30^\\circ. \\text{ கப்பல்களுக்கு இடைப்பட்ட தூரம் காண்க (}\\sqrt{3}=1.732\\text{).}',
          description: 'சுரா வழிகாட்டி மாதிரி 5 மதிப்பெண் தீர்வு.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'ΔABC-ல் 60° கோணத்தைக் கொண்டு BC-ஐக் காண்க.',
              hint: 'tan 60° = 1800/BC => BC = 1800/√3 = 600√3 மீ.',
              expectedInsight: 'BC = 600√3 மீ.',
              latexIntermediate: 'BC = 600\\sqrt{3} \\text{ மீ}',
              options: ['600√3 மீ', '1800√3 மீ'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'ΔABD-ல் 30° கோணத்தைக் கொண்டு BD-ஐக் காண்க.',
              hint: 'tan 30° = 1800/BD => BD = 1800√3 மீ.',
              expectedInsight: 'BD = 1800√3 மீ.',
              latexIntermediate: 'BD = 1800\\sqrt{3} \\text{ மீ}',
              options: ['1800√3 மீ', '900√3 மீ'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'கப்பல்களுக்கு இடைப்பட்ட தூரம் CD = BD - BC கணக்கிடுக.',
              hint: '1800√3 - 600√3 = 1200√3 = 1200 × 1.732 = 2078.4 மீ.',
              expectedInsight: '2078.4 மீ.',
              latexIntermediate: 'CD = 1200\\sqrt{3} = 2078.4 \\text{ மீ}',
              options: ['2078.4 மீ', '2000 மீ'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{கப்பல்களுக்கு இடைப்பட்ட தூரம்} = 2078.4 \\text{ மீ}',
          fullSolutionWalkthrough:
            'விமானத்தின் உயரம் AB = 1800 மீ. கப்பல்கள் C மற்றும் D என்க [1 மதிப்பெண்]\n\nசெங்கோண ΔABC-ல்:\ntan 60° = AB / BC\n√3 = 1800 / BC => BC = 1800 / √3 = 600√3 மீ  [1.5 மதிப்பெண்]\n\nசெங்கோண ΔABD-ல்:\ntan 30° = AB / BD\n1 / √3 = 1800 / BD => BD = 1800√3 மீ  [1.5 மதிப்பெண்]\n\nகப்பல்களுக்கு இடைப்பட்ட தூரம் CD = BD - BC\n= 1800√3 - 600√3 = 1200√3 மீ\n= 1200 × 1.732 = 2078.4 மீ [1 மதிப்பெண்]\nவிடை: 2078.4 மீ (முழு 5/5 மதிப்பெண்கள் உறுதி).'
        }
      ]
    },

    // =========================================================================
    // பயிற்சி 6.4 (உயரங்களும் தொலைவுகளும் - ஒருங்கிணைந்த கணக்குகள்)
    // =========================================================================
    {
      id: 'tm_sec_6_4',
      sectionNumber: '6.4',
      title: 'பயிற்சி 6.4 - ஒருங்கிணைந்த உயரங்களும் தொலைவுகளும் (5 மதிப்பெண்)',
      introText:
        'இரு செங்குத்து அமைப்புகளைக் கொண்ட சிக்கலான கணக்குகளுக்கான முக்கோணவியல் தீர்வுகள்.',
      items: [
        {
          id: 'tm_def_6_4',
          type: 'definition',
          number: '6.4',
          title: 'இரட்டை முக்கோணவியல் மாதிரிகள்',
          statementLatex: 'h = d(\\tan \\theta_1 + \\tan \\theta_2)',
          statementText: 'பொதுவான கிடைமட்டக் கோட்டைக் கொண்டு இரு சமன்பாடுகளைத் தீர்க்கவும்.'
        }
      ],
      problems: [
        {
          id: 'tm_prob_6_4_5mark',
          number: 'பயிற்சி 6.4 - வினா 1 (5 மதிப்பெண்)',
          title: '60 மீ உயரமுள்ள மரத்தின் உச்சியிலிருந்து மற்றொரு மரத்தின் உச்சி மற்றும் அடியின் இறக்கக் கோணங்கள் 30° மற்றும் 45° எனில், இரண்டாவது மரத்தின் உயரம் காண்க',
          difficulty: 'Intermediate',
          statementLatex: '\\text{60 மீ உயர மர உச்சியிலிருந்து மற்றொரு மர உச்சி, அடி இறக்கக் கோணங்கள் } 30^\\circ, 45^\\circ \\text{ எனில் உயரம் காண்க (}\\sqrt{3}=1.732\\text{).}',
          description: 'சுரா வழிகாட்டி மாதிரி 5 மதிப்பெண் தீர்வு.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'முதல் மரம் AB = 60 மீ, 45° கோணத்தைப் பயன்படுத்தி மரங்களுக்கு இடைப்பட்ட தொலைவு காண்க.',
              hint: 'tan 45° = 60/x => x = 60 மீ.',
              expectedInsight: 'x = 60 மீ.',
              latexIntermediate: 'x = 60 \\text{ மீ}',
              options: ['60 மீ', '30 மீ'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: '30° கோணத்தைக் கொண்டு (60 - h)-ஐக் காண்க.',
              hint: 'tan 30° = (60 - h)/60 => 60 - h = 60/√3 = 20√3 = 34.64 மீ.',
              expectedInsight: '60 - h = 34.64 மீ.',
              latexIntermediate: '60 - h = 34.64 \\text{ மீ}',
              options: ['34.64 மீ', '20 மீ'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'இரண்டாவது மரத்தின் உயரம் h = 60 - 34.64 கணக்கிடுக.',
              hint: 'h = 25.36 மீ.',
              expectedInsight: '25.36 மீ.',
              latexIntermediate: 'h = 60 - 34.64 = 25.36 \\text{ மீ}',
              options: ['25.36 மீ', '34.64 மீ'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{இரண்டாவது மரத்தின் உயரம்} = 25.36 \\text{ மீ}',
          fullSolutionWalkthrough:
            'முதல் மரம் AB = 60 மீ. இரண்டாவது மரம் CD = h மீ என்க.\nமரங்களுக்கு இடைப்பட்ட தொலைவு BD = x மீ [1 மதிப்பெண்]\n\nசெங்கோண ΔABD-ல்:\ntan 45° = AB / BD\n1 = 60 / x => x = 60 மீ [1.5 மதிப்பெண்]\n\nசெங்கோண ΔACE-ல் (AE = 60 - h, CE = 60 மீ):\ntan 30° = AE / CE\n1 / √3 = (60 - h) / 60\n60 - h = 60 / √3 = 20√3 = 20(1.732) = 34.64 மீ [1.5 மதிப்பெண்]\n\nh = 60 - 34.64 = 25.36 மீ [1 மதிப்பெண்]\nவிடை: இரண்டாவது மரத்தின் உயரம் = 25.36 மீ (முழு 5/5 மதிப்பெண்கள் உறுதி).'
        }
      ]
    },

    // =========================================================================
    // பயிற்சி 6.5 (பலவுள் தெரிவு வினாக்கள் - MCQs)
    // =========================================================================
    {
      id: 'tm_sec_6_5',
      sectionNumber: '6.5',
      title: 'பயிற்சி 6.5 - ஒரு மதிப்பெண் பலவுள் தெரிவு வினாக்கள் (1 மதிப்பெண்)',
      introText:
        'முக்கோணவியல் பாடத்தின் முக்கியமான அரசுத் தேர்வு பலவுள் தெரிவு வினாக்கள்.',
      items: [],
      problems: [
        {
          id: 'tm_prob_6_5_1',
          number: 'பயிற்சி 6.5 - வினா 1',
          title: 'sin²θ + 1/(1 + tan²θ)-ன் மதிப்பு',
          difficulty: 'Foundational',
          statementLatex: '\\sin^2\\theta + \\frac{1}{1 + \\tan^2\\theta} = ?',
          description: 'அரசு பொதுத்தேர்வு 1 மதிப்பெண் வினா.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: '1 + tan²θ = sec²θ எனப் பிரதியிடுக.',
              hint: 'sin²θ + cos²θ = 1.',
              expectedInsight: '1.',
              latexIntermediate: '\\sin^2\\theta + \\cos^2\\theta = 1',
              options: ['1', '0', 'tan²θ'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '1',
          fullSolutionWalkthrough:
            'sin²θ + 1/(1 + tan²θ) = sin²θ + 1/sec²θ = sin²θ + cos²θ = 1 [1 மதிப்பெண்].'
        },
        {
          id: 'tm_prob_6_5_2',
          number: 'பயிற்சி 6.5 - வினா 2',
          title: 'tan θ cosec²θ - tan θ-ன் மதிப்பு',
          difficulty: 'Foundational',
          statementLatex: '\\tan\\theta \\csc^2\\theta - \\tan\\theta = ?',
          description: 'முற்றொருமை காரணிப்படுத்துதல்.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'tan θ-ஐ பொதுவாக எடுக்க: tan θ (cosec²θ - 1).',
              hint: 'tan θ · cot²θ = cot θ.',
              expectedInsight: 'cot θ.',
              latexIntermediate: '\\tan\\theta \\cot^2\\theta = \\cot\\theta',
              options: ['cot θ', 'tan θ', '1'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\cot\\theta',
          fullSolutionWalkthrough:
            'tan θ (cosec²θ - 1) = tan θ · cot²θ = cot θ [1 மதிப்பெண்].'
        },
        {
          id: 'tm_prob_6_5_3',
          number: 'பயிற்சி 6.5 - வினா 3',
          title: '6 மீ உயர கம்பத்தின் நிழலின் நீளம் 2√3 மீ எனில் சூரியனின் ஏற்றக்கோணம்',
          difficulty: 'Foundational',
          statementLatex: '\\text{உயரம் } 6\\text{ மீ, நிழல் } 2\\sqrt{3}\\text{ மீ எனில் சூரியனின் ஏற்றக்கோணம்: }',
          description: 'நிலையான நிழல் கணக்கீடு.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'tan θ = 6 / (2√3) = √3 எனத் தீர்க்க.',
              hint: 'tan 60° = √3 => θ = 60°.',
              expectedInsight: '60°.',
              latexIntermediate: '\\tan\\theta = \\sqrt{3} \\implies \\theta = 60^\\circ',
              options: ['60°', '30°', '45°'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '60^\\circ',
          fullSolutionWalkthrough:
            'tan θ = உயரம் / நிழல் = 6 / (2√3) = √3. எனவே θ = 60° [1 மதிப்பெண்].'
        }
      ]
    },

    // =========================================================================
    // அலகுப் பயிற்சி 6 (உயர்சிந்தனை முக்கோணவியல் வினாக்கள்)
    // =========================================================================
    {
      id: 'tm_sec_unit_ex_6',
      sectionNumber: 'அலகுப் பயிற்சி 6',
      title: 'அலகுப் பயிற்சி 6 - உயர்சிந்தனை வினாக்கள் (5 மதிப்பெண்)',
      introText:
        'தேர்வில் கேட்கப்படும் மிக முக்கியமான உயர்சிந்தனை முக்கோணவியல் முற்றொருமை நிரூபணங்கள்.',
      items: [
        {
          id: 'tm_def_unit_ex_6',
          type: 'definition',
          number: 'அ.ப 6',
          title: 'முக்கோணவியல் இயற்கணித உருமாற்றங்கள்',
          statementLatex: '(m^2 + n^2)\\cos^2\\beta = n^2',
          statementText: 'விகிதங்களை பிரதியிட்டு முற்றொருமையை நிறுவும் முறை.'
        }
      ],
      problems: [
        {
          id: 'tm_prob_unit_ex_6_5mark',
          number: 'அலகுப் பயிற்சி 6 - வினா 1 (5 மதிப்பெண்)',
          title: 'cos α / cos β = m மற்றும் cos α / sin β = n எனில் (m² + n²) cos² β = n² என நிறுவுக',
          difficulty: 'Advanced',
          statementLatex: '\\frac{\\cos \\alpha}{\\cos \\beta} = m, \\quad \\frac{\\cos \\alpha}{\\sin \\beta} = n \\implies (m^2 + n^2)\\cos^2 \\beta = n^2 \\text{ என நிறுவுக.}',
          description: 'அரசுப் பொதுத்தேர்வு முக்கியமான 5 மதிப்பெண் வினா.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'm² + n² மதிப்பை எழுதுக.',
              hint: 'cos²α [1/cos²β + 1/sin²β].',
              expectedInsight: 'm² + n² = cos²α / (cos²β sin²β).',
              latexIntermediate: 'm^2 + n^2 = \\frac{\\cos^2\\alpha}{\\cos^2\\beta \\sin^2\\beta}',
              options: [
                'm² + n² = cos²α / (cos²β sin²β)',
                'm² + n² = 1'
              ],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'cos²β-ஆல் பெருக்கி RHS-ஐப் பெறுக.',
              hint: '[cos²α / (cos²β sin²β)] × cos²β = cos²α / sin²β = n².',
              expectedInsight: 'n².',
              latexIntermediate: '(m^2 + n^2)\\cos^2\\beta = \\frac{\\cos^2\\alpha}{\\sin^2\\beta} = n^2',
              options: ['RHS = n²', 'RHS = m²'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '(m^2 + n^2)\\cos^2 \\beta = n^2 \\quad (\\text{நிரூபிக்கப்பட்டது})',
          fullSolutionWalkthrough:
            'm = cos α / cos β மற்றும் n = cos α / sin β என்க [1 மதிப்பெண்]\n\nm² + n² = (cos²α / cos²β) + (cos²α / sin²β)\n= cos²α [1 / cos²β + 1 / sin²β]  [1 மதிப்பெண்]\n= cos²α [(sin²β + cos²β) / (cos²β sin²β)]  [1 மதிப்பெண்]\nsin²β + cos²β = 1 என்பதால்:\n= cos²α / (cos²β sin²β)  [1 மதிப்பெண்]\n\nLHS = (m² + n²) cos²β\n= [cos²α / (cos²β sin²β)] × cos²β\n= cos²α / sin²β = (cos α / sin β)² = n² = RHS  [1 மதிப்பெண்]\nநிரூபிக்கப்பட்டது (முழு 5/5 மதிப்பெண்கள் உறுதி).'
        }
      ]
    }
  ]
};
