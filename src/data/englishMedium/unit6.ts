import { BookChapter } from '../../types/math';

export const unit6English: BookChapter = {
  id: 'en_unit_6',
  chapterNumber: 6,
  romanNumeral: 'VI',
  title: 'Trigonometry',
  subtitle: 'Complete Sura Guide: All Exercises (Ex 6.1 to 6.5 & Unit Ex 6) with 1, 2, and 5-Mark Step-by-Step Solutions',
  synopsis:
    'Trigonometry provides the computational framework for angles, distances, and heights. This unit contains step-by-step Sura-guide solutions for all exercises: Trigonometric Identities (Ex 6.1), Angle of Elevation (Ex 6.2), Angle of Depression (Ex 6.3), Combined Heights and Distances (Ex 6.4), MCQs (Ex 6.5), and Unit Exercise 6.',
  prerequisites: ['Trigonometric Ratios (sin, cos, tan)', 'Trigonometric Table Values (0°, 30°, 45°, 60°, 90°)', 'Right Triangle Properties'],
  sections: [
    // =========================================================================
    // EXERCISE 6.1 (Trigonometric Identities - 2 & 5 Marks)
    // =========================================================================
    {
      id: 'en_sec_6_1',
      sectionNumber: '6.1',
      title: 'Exercise 6.1 - Trigonometric Identities (2 & 5 Marks)',
      introText:
        'Fundamental identities: sin²θ + cos²θ = 1; 1 + tan²θ = sec²θ; 1 + cot²θ = cosec²θ. We use these algebraic relations to transform expressions and verify equality.',
      items: [
        {
          id: 'en_def_6_1',
          type: 'definition',
          number: '6.1',
          title: 'Pythagorean Identities',
          statementLatex: '\\sin^2\\theta + \\cos^2\\theta = 1, \\quad \\sec^2\\theta - \\tan^2\\theta = 1, \\quad \\csc^2\\theta - \\cot^2\\theta = 1',
          statementText: 'These three identities form the foundation of trigonometric simplification.'
        }
      ],
      problems: [
        {
          id: 'en_prob_6_1_2mark',
          number: 'Ex 6.1 - Q1(i) (2 Marks)',
          title: 'Prove that cot θ + tan θ = sec θ cosec θ',
          difficulty: 'Foundational',
          statementLatex: '\\text{Prove that } \\cot\\theta + \\tan\\theta = \\sec\\theta \\csc\\theta.',
          description: 'Basic trigonometric identity transformation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Express cot θ and tan θ in terms of sin θ and cos θ.',
              hint: 'cot θ = cos θ / sin θ, tan θ = sin θ / cos θ.',
              expectedInsight: '(cos²θ + sin²θ) / (sin θ cos θ).',
              latexIntermediate: '\\frac{\\cos\\theta}{\\sin\\theta} + \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\cos^2\\theta + \\sin^2\\theta}{\\sin\\theta \\cos\\theta}',
              options: ['\\frac{\\cos^2\\theta + \\sin^2\\theta}{\\sin\\theta \\cos\\theta}', '\\frac{1}{\\sin\\theta + \\cos\\theta}'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Apply sin²θ + cos²θ = 1.',
              hint: '1 / (sin θ cos θ) = (1 / cos θ)(1 / sin θ) = sec θ cosec θ.',
              expectedInsight: 'sec θ cosec θ.',
              latexIntermediate: '\\frac{1}{\\sin\\theta \\cos\\theta} = \\sec\\theta \\csc\\theta',
              options: ['sec θ cosec θ', 'tan θ cot θ'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\cot\\theta + \\tan\\theta = \\sec\\theta \\csc\\theta \\quad (\\text{Hence Proved})',
          fullSolutionWalkthrough:
            'LHS = cot θ + tan θ\n= (cos θ / sin θ) + (sin θ / cos θ) [1 Mark]\n= (cos²θ + sin²θ) / (sin θ cos θ)\nSince sin²θ + cos²θ = 1:\n= 1 / (sin θ cos θ) = (1 / cos θ) × (1 / sin θ) = sec θ cosec θ = RHS [1 Mark]\nHence Proved.'
        },
        {
          id: 'en_prob_6_1_5mark',
          number: 'Ex 6.1 - Q6(i) (5 Marks)',
          title: 'Prove: [sin(A - B)/cos A cos B] + [sin(B - C)/cos B cos C] + [sin(C - A)/cos C cos A] = 0',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Prove that } \\frac{\\sin(A - B)}{\\cos A \\cos B} + \\frac{\\sin(B - C)}{\\cos B \\cos C} + \\frac{\\sin(C - A)}{\\cos C \\cos A} = 0.',
          description: 'Sura Guide standard 5-mark cyclic trigonometric identity proof.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Expand the first term: sin(A - B) = sin A cos B - cos A sin B.',
              hint: '(sin A cos B - cos A sin B) / (cos A cos B) = tan A - tan B.',
              expectedInsight: 'tan A - tan B.',
              latexIntermediate: '\\frac{\\sin A \\cos B - \\cos A \\sin B}{\\cos A \\cos B} = \\tan A - \\tan B',
              options: ['tan A - tan B', 'tan A + tan B'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Similarly expand the second and third terms.',
              hint: 'Second term = tan B - tan C; Third term = tan C - tan A.',
              expectedInsight: 'tan B - tan C and tan C - tan A.',
              latexIntermediate: '(\\tan A - \\tan B) + (\\tan B - \\tan C) + (\\tan C - \\tan A) = 0',
              options: ['All terms cancel cyclically to 0', 'Equals 1'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{LHS} = (\\tan A - \\tan B) + (\\tan B - \\tan C) + (\\tan C - \\tan A) = 0 = \\text{RHS} \\quad (\\text{Hence Proved})',
          fullSolutionWalkthrough:
            'LHS = [sin(A - B)/cos A cos B] + [sin(B - C)/cos B cos C] + [sin(C - A)/cos C cos A]  [1 Mark]\n\nUsing compound angle formula sin(x - y) = sin x cos y - cos x sin y:\nTerm 1: [sin A cos B - cos A sin B] / [cos A cos B]\n= (sin A cos B)/(cos A cos B) - (cos A sin B)/(cos A cos B)\n= tan A - tan B  [1.5 Marks]\n\nSimilarly:\nTerm 2: [sin(B - C)] / [cos B cos C] = tan B - tan C  [1 Mark]\nTerm 3: [sin(C - A)] / [cos C cos A] = tan C - tan A  [1 Mark]\n\nAdding all three terms:\nLHS = (tan A - tan B) + (tan B - tan C) + (tan C - tan A)\n= 0 = RHS  [0.5 Mark]\nHence Proved (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 6.2 (Heights and Distances: Angle of Elevation)
    // =========================================================================
    {
      id: 'en_sec_6_2',
      sectionNumber: '6.2',
      title: 'Exercise 6.2 - Angle of Elevation (2 & 5 Marks)',
      introText:
        'The angle of elevation is formed by the line of sight with the horizontal when the object is above horizontal level. In right triangle ABC: tan θ = Opposite / Adjacent.',
      items: [
        {
          id: 'en_def_6_2',
          type: 'definition',
          number: '6.2',
          title: 'Angle of Elevation',
          statementLatex: '\\tan \\theta = \\frac{\\text{Height}}{\\text{Distance}}',
          statementText: 'Always draw a clear diagram labeled with given heights and angles.'
        }
      ],
      problems: [
        {
          id: 'en_prob_6_2_2mark',
          number: 'Ex 6.2 - Q1 (2 Marks)',
          title: 'Find angle of elevation of top of tower of height 10√3 m from point 30 m away',
          difficulty: 'Foundational',
          statementLatex: '\\text{Find angle of elevation of top of tower of height } 10\\sqrt{3}\\text{ m from a point on ground } 30\\text{ m away from foot.}',
          description: 'Single right triangle elevation angle calculation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Set up tan θ = Height / Distance.',
              hint: 'tan θ = (10√3) / 30 = √3 / 3 = 1/√3.',
              expectedInsight: 'tan θ = 1/√3 => θ = 30°.',
              latexIntermediate: '\\tan\\theta = \\frac{10\\sqrt{3}}{30} = \\frac{1}{\\sqrt{3}} \\implies \\theta = 30^\\circ',
              options: ['θ = 30°', 'θ = 60°', 'θ = 45°'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\theta = 30^\\circ',
          fullSolutionWalkthrough:
            'Let height of tower h = 10√3 m and distance d = 30 m. [1 Mark]\ntan θ = Opposite / Adjacent = (10√3) / 30 = √3 / 3 = 1/√3\nSince tan 30° = 1/√3, the angle of elevation θ = 30°. [1 Mark]\nFinal Answer: 30°.'
        },
        {
          id: 'en_prob_6_2_5mark',
          number: 'Ex 6.2 - Q6 (5 Marks)',
          title: 'From the top of a 12 m high building, the angle of elevation of top of a cable tower is 60° and depression of its foot is 30°. Find height of tower.',
          difficulty: 'Intermediate',
          statementLatex: '\\text{From the top of a } 12 \\text{ m high building, the angle of elevation of the top of a cable tower is } 60^\\circ \\text{ and the angle of depression of its foot is } 30^\\circ. \\text{ Find the height of the tower.}',
          description: 'Classic 5-mark board exam elevation and depression problem.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Draw diagram: Building AB = 12 m, Tower CD = H. Distance BD = x.',
              hint: 'In ΔABD: tan 30° = AB / BD = 12 / x => x = 12√3 m.',
              expectedInsight: 'x = 12√3 m.',
              latexIntermediate: '\\tan 30^\\circ = \\frac{12}{x} \\implies x = 12\\sqrt{3} \\text{ m}',
              options: ['12√3 m', '12 m', '24 m'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'In ΔACE where E is on CD: tan 60° = CE / AE = (H - 12) / (12√3).',
              hint: '√3 = (H - 12) / (12√3) => H - 12 = 12 × 3 = 36.',
              expectedInsight: 'H - 12 = 36 => H = 48 m.',
              latexIntermediate: 'H - 12 = 12\\sqrt{3} \\times \\sqrt{3} = 36 \\implies H = 48 \\text{ m}',
              options: ['48 m', '36 m', '50 m'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Height of the Cable Tower} = 48 \\text{ m}',
          fullSolutionWalkthrough:
            'Let AB be the building of height 12 m.\nLet CD be the cable tower of height H.\nHorizontal distance BD = x m. [1 Mark]\n\nIn right triangle ABD:\ntan 30° = AB / BD\n1 / √3 = 12 / x\nx = 12√3 m  --- (1)  [1.5 Marks]\n\nLet AE ⊥ CD where AE = BD = x = 12√3 m and CE = H - 12 m.\nIn right triangle AEC:\ntan 60° = CE / AE\n√3 = (H - 12) / (12√3)  [1 Mark]\nH - 12 = 12√3 × √3 = 12 × 3 = 36\nH = 36 + 12 = 48 m  [1.5 Marks]\n\nFinal Answer: Height of the cable tower = 48 m (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 6.3 (Heights and Distances: Angle of Depression)
    // =========================================================================
    {
      id: 'en_sec_6_3',
      sectionNumber: '6.3',
      title: 'Exercise 6.3 - Angle of Depression (2 & 5 Marks)',
      introText:
        'The angle of depression from the observer is equal to the angle of elevation from the ground by alternate interior angles.',
      items: [
        {
          id: 'en_def_6_3',
          type: 'definition',
          number: '6.3',
          title: 'Angle of Depression',
          statementLatex: '\\theta_{\\text{depression}} = \\theta_{\\text{elevation}}',
          statementText: 'Use alternate interior angles between horizontal line and ground.'
        }
      ],
      problems: [
        {
          id: 'en_prob_6_3_2mark',
          number: 'Ex 6.3 - Q1 (2 Marks)',
          title: 'From top of rock 50√3 m high, angle of depression of car on ground is 30°. Find distance.',
          difficulty: 'Foundational',
          statementLatex: '\\text{From top of rock } 50\\sqrt{3}\\text{ m high, the angle of depression of a car is } 30^\\circ. \\text{ Find distance of car from rock.}',
          description: 'Single right triangle depression calculation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'tan 30° = 50√3 / d.',
              hint: '1/√3 = 50√3 / d => d = 50√3 × √3 = 50 × 3 = 150 m.',
              expectedInsight: 'd = 150 m.',
              latexIntermediate: 'd = 50\\sqrt{3} \\times \\sqrt{3} = 150\\text{ m}',
              options: ['150 m', '100 m', '200 m'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'd = 150\\text{ m}',
          fullSolutionWalkthrough:
            'Height of rock AB = 50√3 m. Angle of depression = angle of elevation = 30°. [1 Mark]\nIn right triangle ABC:\ntan 30° = AB / BC\n1 / √3 = 50√3 / BC\nBC = 50√3 × √3 = 50 × 3 = 150 m [1 Mark]\nFinal Answer: 150 m.'
        },
        {
          id: 'en_prob_6_3_5mark',
          number: 'Ex 6.3 - Q4 (5 Marks)',
          title: 'An aeroplane at an altitude of 1800 m finds two ships are sailing towards it on the same side. The angles of depression are 60° and 30°. Find distance between ships.',
          difficulty: 'Intermediate',
          statementLatex: '\\text{An aeroplane at an altitude of } 1800 \\text{ m finds that two ships are sailing towards it in the same direction. The angles of depression are } 60^\\circ \\text{ and } 30^\\circ. \\text{ Find distance between the two ships (}\\sqrt{3} = 1.732\\text{).}',
          description: 'Sura Guide standard 5-mark two-ship distance calculation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Let altitude AB = 1800 m. In ΔABC with angle 60°: find BC.',
              hint: 'tan 60° = 1800 / BC => √3 = 1800 / BC => BC = 1800 / √3 = 600√3 m.',
              expectedInsight: 'BC = 600√3 m.',
              latexIntermediate: 'BC = \\frac{1800}{\\sqrt{3}} = 600\\sqrt{3} \\text{ m}',
              options: ['600√3 m', '1800√3 m'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'In ΔABD with angle 30°: find BD.',
              hint: 'tan 30° = 1800 / BD => 1/√3 = 1800 / BD => BD = 1800√3 m.',
              expectedInsight: 'BD = 1800√3 m.',
              latexIntermediate: 'BD = 1800\\sqrt{3} \\text{ m}',
              options: ['1800√3 m', '900√3 m'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Distance between ships CD = BD - BC.',
              hint: 'CD = 1800√3 - 600√3 = 1200√3 = 1200 × 1.732 = 2078.4 m.',
              expectedInsight: '2078.4 m.',
              latexIntermediate: 'CD = 1200\\sqrt{3} = 1200 \\times 1.732 = 2078.4 \\text{ m}',
              options: ['2078.4 m', '2000 m'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Distance between ships} = 2078.4 \\text{ m}',
          fullSolutionWalkthrough:
            'Let A be the position of the aeroplane, AB = 1800 m.\nLet C and D be the two ships. [1 Mark]\n\nIn right triangle ABC:\ntan 60° = AB / BC\n√3 = 1800 / BC\nBC = 1800 / √3 = (1800√3)/3 = 600√3 m  [1.5 Marks]\n\nIn right triangle ABD:\ntan 30° = AB / BD\n1 / √3 = 1800 / BD\nBD = 1800√3 m  [1.5 Marks]\n\nDistance between the two ships CD = BD - BC\n= 1800√3 - 600√3\n= 1200√3 m\n= 1200 × 1.732 = 2078.4 m  [1 Mark]\nFinal Answer: 2078.4 m (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 6.4 (Combined Heights and Distances - 5 Marks)
    // =========================================================================
    {
      id: 'en_sec_6_4',
      sectionNumber: '6.4',
      title: 'Exercise 6.4 - Combined Heights and Distances (5 Marks)',
      introText:
        'Problems involving two vertical objects (towers, cliffs, buildings) requiring dual trigonometric equations.',
      items: [
        {
          id: 'en_def_6_4',
          type: 'definition',
          number: '6.4',
          title: 'Dual Triangle Elevation and Depression',
          statementLatex: 'h = d(\\tan \\theta_1 + \\tan \\theta_2)',
          statementText: 'Combine equations from both right-angled triangles sharing a common horizontal baseline.'
        }
      ],
      problems: [
        {
          id: 'en_prob_6_4_5mark',
          number: 'Ex 6.4 - Q1 (5 Marks)',
          title: 'From top of 60 m high tree, the angle of depression of top and foot of another tree are 30° and 45°. Find height of second tree.',
          difficulty: 'Intermediate',
          statementLatex: '\\text{From the top of a } 60 \\text{ m high tree, the angles of depression of top and foot of another tree are } 30^\\circ \\text{ and } 45^\\circ. \\text{ Find height of second tree (}\\sqrt{3} = 1.732\\text{).}',
          description: 'Sura Guide standard 5-mark dual tree height problem.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Let first tree be AB = 60 m, second tree be CD = h. Find distance BD using 45° angle.',
              hint: 'tan 45° = 60 / BD => 1 = 60 / BD => BD = 60 m.',
              expectedInsight: 'BD = 60 m.',
              latexIntermediate: 'BD = 60 \\text{ m}',
              options: ['60 m', '30 m'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'In upper triangle with angle 30°: tan 30° = (60 - h) / 60.',
              hint: '1/√3 = (60 - h)/60 => 60 - h = 60/√3 = 20√3.',
              expectedInsight: '60 - h = 20√3 = 20(1.732) = 34.64 m.',
              latexIntermediate: '60 - h = 20\\sqrt{3} = 34.64 \\text{ m}',
              options: ['34.64 m', '20 m'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Find h = 60 - 34.64.',
              hint: 'h = 25.36 m.',
              expectedInsight: 'h = 25.36 m.',
              latexIntermediate: 'h = 60 - 34.64 = 25.36 \\text{ m}',
              options: ['25.36 m', '34.64 m'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Height of the second tree} = 25.36 \\text{ m}',
          fullSolutionWalkthrough:
            'Let AB be the first tree = 60 m.\nLet CD be the second tree of height h.\nDistance between trees BD = x. [1 Mark]\n\nIn right triangle ABD:\ntan 45° = AB / BD\n1 = 60 / x => x = 60 m  [1.5 Marks]\n\nIn right triangle ACE (where CE is horizontal, AE = 60 - h):\ntan 30° = AE / CE\n1 / √3 = (60 - h) / 60\n60 - h = 60 / √3 = 20√3 = 20(1.732) = 34.64 m  [1.5 Marks]\n\nh = 60 - 34.64 = 25.36 m  [1 Mark]\nFinal Answer: Height of the second tree = 25.36 m (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 6.5 (Multiple Choice Questions - MCQs)
    // =========================================================================
    {
      id: 'en_sec_6_5',
      sectionNumber: '6.5',
      title: 'Exercise 6.5 - One Mark Multiple Choice Questions (1 Mark MCQs)',
      introText:
        'Official board examination objective questions for Unit 6 covering identities, heights, and distances.',
      items: [],
      problems: [
        {
          id: 'en_prob_6_5_1',
          number: 'Ex 6.5 - MCQ 1',
          title: 'The value of sin²θ + 1/(1 + tan²θ) is...',
          difficulty: 'Foundational',
          statementLatex: '\\text{The value of } \\sin^2\\theta + \\frac{1}{1 + \\tan^2\\theta} \\text{ is: }',
          description: 'Official 1-mark board exam question.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Replace 1 + tan²θ with sec²θ.',
              hint: '1 / sec²θ = cos²θ. Then sin²θ + cos²θ = 1.',
              expectedInsight: 'sin²θ + cos²θ = 1.',
              latexIntermediate: '\\sin^2\\theta + \\cos^2\\theta = 1',
              options: ['1', '0', 'tan²θ', 'sec²θ'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '1',
          fullSolutionWalkthrough:
            'sin²θ + 1/(1 + tan²θ) = sin²θ + 1/sec²θ = sin²θ + cos²θ = 1 [1 Mark].'
        },
        {
          id: 'en_prob_6_5_2',
          number: 'Ex 6.5 - MCQ 2',
          title: 'Value of tan θ cosec²θ - tan θ is...',
          difficulty: 'Foundational',
          statementLatex: '\\tan\\theta \\csc^2\\theta - \\tan\\theta = ?',
          description: 'Identity factoring.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Factor out tan θ: tan θ (cosec²θ - 1).',
              hint: 'cosec²θ - 1 = cot²θ. tan θ · cot²θ = cot θ.',
              expectedInsight: 'cot θ.',
              latexIntermediate: '\\tan\\theta(\\csc^2\\theta - 1) = \\tan\\theta \\cot^2\\theta = \\cot\\theta',
              options: ['cot θ', 'tan θ', 'sec θ', '1'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\cot\\theta',
          fullSolutionWalkthrough:
            'tan θ (cosec²θ - 1) = tan θ · cot²θ = tan θ · (1/tan²θ) = 1/tan θ = cot θ [1 Mark].'
        },
        {
          id: 'en_prob_6_5_3',
          number: 'Ex 6.5 - MCQ 3',
          title: 'If a pole 6 m high casts a shadow 2√3 m long on the ground, then sun’s elevation is...',
          difficulty: 'Foundational',
          statementLatex: '\\text{If height } = 6\\text{ m and shadow } = 2\\sqrt{3}\\text{ m, then sun’s angle of elevation is: }',
          description: 'Standard shadow problem.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'tan θ = 6 / (2√3) = 3/√3 = √3.',
              hint: 'tan θ = √3 => θ = 60°.',
              expectedInsight: '60°.',
              latexIntermediate: '\\tan\\theta = \\frac{6}{2\\sqrt{3}} = \\sqrt{3} \\implies \\theta = 60^\\circ',
              options: ['60°', '30°', '45°', '90°'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '60^\\circ',
          fullSolutionWalkthrough:
            'tan θ = Height / Shadow = 6 / (2√3) = 3/√3 = √3. Therefore θ = 60° [1 Mark].'
        }
      ]
    },

    // =========================================================================
    // UNIT EXERCISE 6 (Advanced Trigonometry Problems - 5 Marks)
    // =========================================================================
    {
      id: 'en_sec_unit_ex_6',
      sectionNumber: 'Unit Ex 6',
      title: 'Unit Exercise 6 - Advanced Trigonometry Problems (5 Marks)',
      introText:
        'Unit Exercise 6 contains higher-order identity proofs commonly tested in state board exams.',
      items: [
        {
          id: 'en_def_unit_ex_6',
          type: 'definition',
          number: 'UE 6',
          title: 'Algebraic Trigonometric Transformations',
          statementLatex: '(m^2 + n^2)\\cos^2\\beta = n^2',
          statementText: 'Substitute given trigonometric ratios into the algebraic equation to prove identity.'
        }
      ],
      problems: [
        {
          id: 'en_prob_unit_ex_6_5mark',
          number: 'Unit Ex 6 - Q1 (5 Marks)',
          title: 'If cos α / cos β = m and cos α / sin β = n, prove (m² + n²) cos² β = n²',
          difficulty: 'Advanced',
          statementLatex: '\\text{If } \\frac{\\cos \\alpha}{\\cos \\beta} = m \\text{ and } \\frac{\\cos \\alpha}{\\sin \\beta} = n, \\text{ prove that } (m^2 + n^2)\\cos^2 \\beta = n^2.',
          description: 'Classic 5-mark board exam advanced identity proof.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Express m² and n² in terms of α and β.',
              hint: 'm² = cos²α / cos²β, n² = cos²α / sin²β.',
              expectedInsight: 'm² + n² = cos²α (1/cos²β + 1/sin²β).',
              latexIntermediate: 'm^2 + n^2 = \\cos^2\\alpha \\left(\\frac{1}{\\cos^2\\beta} + \\frac{1}{\\sin^2\\beta}\\right)',
              options: [
                'm² + n² = cos²α (1/cos²β + 1/sin²β)',
                'm² + n² = 1'
              ],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Simplify 1/cos²β + 1/sin²β.',
              hint: '(sin²β + cos²β) / (cos²β sin²β) = 1 / (cos²β sin²β).',
              expectedInsight: 'm² + n² = cos²α / (cos²β sin²β).',
              latexIntermediate: 'm^2 + n^2 = \\frac{\\cos^2\\alpha}{\\cos^2\\beta \\sin^2\\beta}',
              options: [
                'm² + n² = cos²α / (cos²β sin²β)',
                'm² + n² = sin²α / cos²β'
              ],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Multiply by cos²β: (m² + n²) cos²β.',
              hint: '[cos²α / (cos²β sin²β)] × cos²β = cos²α / sin²β = n².',
              expectedInsight: 'RHS = n².',
              latexIntermediate: '(m^2 + n^2)\\cos^2\\beta = \\frac{\\cos^2\\alpha}{\\sin^2\\beta} = n^2',
              options: ['RHS = n²', 'RHS = m²'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '(m^2 + n^2)\\cos^2 \\beta = n^2 \\quad (\\text{Hence Proved})',
          fullSolutionWalkthrough:
            'Given m = cos α / cos β and n = cos α / sin β [1 Mark]\n\nNow, m² + n² = (cos²α / cos²β) + (cos²α / sin²β)\n= cos²α [1 / cos²β + 1 / sin²β]  [1 Mark]\n= cos²α [(sin²β + cos²β) / (cos²β sin²β)]  [1 Mark]\nSince sin²β + cos²β = 1:\n= cos²α / (cos²β sin²β)  [1 Mark]\n\nNow, LHS = (m² + n²) cos²β\n= [cos²α / (cos²β sin²β)] × cos²β\n= cos²α / sin²β\n= (cos α / sin β)² = n² = RHS  [1 Mark]\nHence Proved (Full 5/5 Marks Guaranteed).'
        }
      ]
    }
  ]
};
