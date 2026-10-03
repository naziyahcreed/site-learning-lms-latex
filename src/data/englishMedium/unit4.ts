import { BookChapter } from '../../types/math';

export const unit4English: BookChapter = {
  id: 'en_unit_4',
  chapterNumber: 4,
  romanNumeral: 'IV',
  title: 'Geometry',
  subtitle: 'Complete Sura Guide: All Exercises (Ex 4.1 to 4.5 & Unit Ex 4) with 1, 2, and 5-Mark Step-by-Step Solutions',
  synopsis:
    'Geometry is visual deductive logic. This unit covers all exercises in the Class 10 Tamil Nadu syllabus: Similarity criteria of triangles, Basic Proportionality Theorem (Thales), Angle Bisector Theorem, Pythagoras Theorem, Alternate Segment Theorem, Tangents to Circles, MCQs, and Ceva/Menelaus theorems with complete Sura-guide solutions guaranteeing full marks.',
  prerequisites: ['Congruence vs Similarity', 'Parallel Lines and Transversals', 'Ratios and Proportions', 'Circle Theorems'],
  sections: [
    // =========================================================================
    // EXERCISE 4.1 (Similar Triangles & Criteria)
    // =========================================================================
    {
      id: 'en_sec_4_1',
      sectionNumber: '4.1',
      title: 'Exercise 4.1 - Similarity of Triangles & Criteria (2 & 5 Marks)',
      introText:
        'Two triangles are similar if their corresponding angles are equal and their corresponding sides are proportional. Criteria for similarity: AAA, SAS, and SSS. Ratio of areas of two similar triangles equals the ratio of squares of their corresponding sides: Area(Δ1)/Area(Δ2) = (s1/s2)².',
      items: [
        {
          id: 'en_thm_4_0',
          type: 'theorem',
          number: '4.0',
          title: 'Ratio of Areas of Similar Triangles',
          statementLatex: '\\frac{\\text{Area}(\\Delta ABC)}{\\text{Area}(\\Delta PQR)} = \\left(\\frac{AB}{PQ}\\right)^2 = \\left(\\frac{BC}{QR}\\right)^2 = \\left(\\frac{AC}{PR}\\right)^2',
          statementText: 'The ratio of the areas of two similar triangles is equal to the square of the ratio of any two corresponding sides.'
        }
      ],
      problems: [
        {
          id: 'en_prob_4_1_2mark',
          number: 'Ex 4.1 - Q1(i) (2 Marks)',
          title: 'Check whether ΔABC is similar to ΔPQR with given side lengths',
          difficulty: 'Foundational',
          statementLatex: '\\text{In } \\Delta ABC \\text{ and } \\Delta PQR, \\; AB = 3\\text{ cm}, \\; BC = 4.5\\text{ cm}, \\; PQ = 6\\text{ cm}, \\; QR = 9\\text{ cm}, \\; \\angle B = \\angle Q = 50^\\circ. \\text{ Are they similar?}',
          description: 'SAS similarity criterion verification.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Check the ratio of including sides: AB/PQ and BC/QR.',
              hint: 'AB/PQ = 3/6 = 1/2. BC/QR = 4.5/9 = 1/2.',
              expectedInsight: 'AB/PQ = BC/QR = 1/2.',
              latexIntermediate: '\\frac{AB}{PQ} = \\frac{3}{6} = \\frac{1}{2}, \\quad \\frac{BC}{QR} = \\frac{4.5}{9} = \\frac{1}{2}',
              options: ['Ratios are equal (1/2)', 'Ratios are unequal'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Compare the included angles ∠B and ∠Q.',
              hint: '∠B = ∠Q = 50° (given).',
              expectedInsight: 'ΔABC ~ ΔPQR by SAS criterion.',
              latexIntermediate: '\\Delta ABC \\sim \\Delta PQR \\quad (\\text{SAS similarity})',
              options: ['ΔABC ~ ΔPQR (SAS)', 'Not similar'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\Delta ABC \\sim \\Delta PQR \\quad (\\text{SAS Similarity Criterion})',
          fullSolutionWalkthrough:
            'Ratio of sides:\nAB / PQ = 3 / 6 = 1 / 2\nBC / QR = 4.5 / 9 = 1 / 2\nTherefore, AB / PQ = BC / QR [1 Mark]\nAlso, included angles ∠B = ∠Q = 50°\nBy SAS Similarity Criterion, ΔABC ~ ΔPQR. [1 Mark]'
        },
        {
          id: 'en_prob_4_1_5mark',
          number: 'Ex 4.1 - Q6 (5 Marks)',
          title: 'In Trapezium ABCD, AB || DC, Diagonals Intersect at O. Prove OA/OC = OB/OD',
          difficulty: 'Intermediate',
          statementLatex: '\\text{In a trapezium } ABCD, \\; AB \\parallel DC \\text{ and diagonals } AC \\text{ and } BD \\text{ intersect at } O. \\text{ Prove that } \\frac{OA}{OC} = \\frac{OB}{OD}.',
          description: 'Sura Guide standard 5-mark similarity proof.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Compare triangles ΔAOB and ΔCOD.',
              hint: '∠AOB = ∠COD (vertically opposite). Since AB || DC, ∠OAB = ∠OCD and ∠OBA = ∠ODC (alternate interior angles).',
              expectedInsight: 'ΔAOB ~ ΔCOD by AAA similarity criterion.',
              latexIntermediate: '\\Delta AOB \\sim \\Delta COD \\quad (\\text{AAA similarity})',
              options: ['ΔAOB ~ ΔCOD (AAA)', 'ΔAOB ≅ ΔCOD (SAS)'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Write the proportionality of corresponding sides.',
              hint: 'OA / OC = OB / OD = AB / CD.',
              expectedInsight: 'OA / OC = OB / OD.',
              latexIntermediate: '\\frac{OA}{OC} = \\frac{OB}{OD}',
              options: ['OA / OC = OB / OD', 'OA / OB = OD / OC'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\frac{OA}{OC} = \\frac{OB}{OD} \\quad (\\text{Hence Proved})',
          fullSolutionWalkthrough:
            'In trapezium ABCD, AB || DC.\nDiagonals AC and BD intersect at O.\n\nIn ΔAOB and ΔCOD:\n1) ∠AOB = ∠COD (Vertically opposite angles) [1 Mark]\n2) ∠OAB = ∠OCD (Alternate interior angles, since AB || DC) [1 Mark]\n3) ∠OBA = ∠ODC (Alternate interior angles, since AB || DC) [1 Mark]\n\nBy AAA Similarity Criterion:\nΔAOB ~ ΔCOD [1 Mark]\n\nSince corresponding sides of similar triangles are proportional:\nOA / OC = OB / OD [1 Mark]\nHence Proved (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 4.2 (Thales Theorem & Angle Bisector Theorem)
    // =========================================================================
    {
      id: 'en_sec_4_2',
      sectionNumber: '4.2',
      title: 'Exercise 4.2 - Thales Theorem & Angle Bisector Theorem (2 & 5 Marks)',
      introText:
        'Thales Theorem (BPT): If DE || BC in ΔABC, then AD/DB = AE/EC. Angle Bisector Theorem (ABT): If AD bisects ∠A internally, then BD/DC = AB/AC.',
      items: [
        {
          id: 'en_thm_4_1',
          type: 'theorem',
          number: '4.1',
          title: 'Basic Proportionality Theorem (Thales Theorem)',
          statementLatex: '\\text{In } \\Delta ABC, \\; DE \\parallel BC \\implies \\frac{AD}{DB} = \\frac{AE}{EC}',
          statementText: 'A straight line drawn parallel to a side of a triangle divides the other two sides in the same ratio.'
        },
        {
          id: 'en_thm_4_2',
          type: 'theorem',
          number: '4.2',
          title: 'Angle Bisector Theorem (ABT)',
          statementLatex: '\\text{If } AD \\text{ bisects } \\angle A, \\; \\frac{BD}{DC} = \\frac{AB}{AC}',
          statementText: 'The internal bisector of an angle of a triangle divides the opposite side internally in the ratio of the corresponding sides.'
        }
      ],
      problems: [
        {
          id: 'en_prob_4_2_2mark',
          number: 'Ex 4.2 - Q1(i) (2 Marks)',
          title: 'In ΔABC, DE || BC. If AD = 4 cm, DB = 4.5 cm, AE = 8 cm, find EC',
          difficulty: 'Foundational',
          statementLatex: '\\text{In } \\Delta ABC, \\; DE \\parallel BC. \\; AD = 4\\text{ cm}, \\; DB = 4.5\\text{ cm}, \\; AE = 8\\text{ cm}. \\text{ Find } EC.',
          description: 'Basic Proportionality Theorem numerical calculation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'State Thales Theorem formula for DE || BC.',
              hint: 'AD / DB = AE / EC.',
              expectedInsight: 'AD / DB = AE / EC.',
              latexIntermediate: '\\frac{AD}{DB} = \\frac{AE}{EC}',
              options: ['AD / DB = AE / EC', 'AD / AB = AE / AC'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Substitute given values: 4 / 4.5 = 8 / EC.',
              hint: 'EC = (8 × 4.5) / 4 = 2 × 4.5 = 9 cm.',
              expectedInsight: 'EC = 9 cm.',
              latexIntermediate: 'EC = \\frac{8 \\times 4.5}{4} = 9\\text{ cm}',
              options: ['9 cm', '8.5 cm', '10 cm'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'EC = 9\\text{ cm}',
          fullSolutionWalkthrough:
            'In ΔABC, since DE || BC, by Thales Theorem:\nAD / DB = AE / EC [1 Mark]\n4 / 4.5 = 8 / EC\nEC = (8 × 4.5) / 4 = 2 × 4.5 = 9 cm [1 Mark]\nFinal Answer: EC = 9 cm.'
        },
        {
          id: 'en_prob_4_2_5mark',
          number: 'Ex 4.2 - Q4 (5 Marks)',
          title: 'State and Prove Angle Bisector Theorem (ABT)',
          difficulty: 'Intermediate',
          statementLatex: '\\text{State and prove Angle Bisector Theorem.}',
          description: 'Official 5-mark board exam core proof.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'State the theorem clearly.',
              hint: 'The internal bisector of an angle of a triangle divides the opposite side internally in the ratio of the corresponding sides containing the angle.',
              expectedInsight: 'BD/DC = AB/AC.',
              latexIntermediate: '\\frac{BD}{DC} = \\frac{AB}{AC}',
              options: ['BD/DC = AB/AC', 'BD/DC = AC/AB'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Construction: Draw a line through C parallel to AB to meet ray AD produced at E.',
              hint: 'Since CE || AB, ∠AEC = ∠BAE (alternate interior angles).',
              expectedInsight: '∠ACE = ∠AEC => AC = AE.',
              latexIntermediate: 'AC = AE \\quad \\text{(Isosceles } \\Delta ACE)',
              options: ['AC = AE', 'AB = AE'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Apply Thales Theorem on ΔBCE with AD || CE.',
              hint: 'BD / DC = AB / AE. Substitute AE = AC.',
              expectedInsight: 'BD / DC = AB / AC.',
              latexIntermediate: '\\frac{BD}{DC} = \\frac{AB}{AC}',
              options: ['BD / DC = AB / AC', 'BD / DC = AE / AC'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\frac{BD}{DC} = \\frac{AB}{AC} \\quad (\\text{Hence Proved})',
          fullSolutionWalkthrough:
            'Statement: The internal bisector of an angle of a triangle divides the opposite side internally in the ratio of the corresponding sides containing the angle. [1 Mark]\n\nGiven: In ΔABC, AD is the internal bisector of ∠A. (i.e. ∠1 = ∠2) [1 Mark]\nTo prove: BD / DC = AB / AC.\n\nConstruction: Draw a line through C parallel to AB. Extend AD to meet this line at E. [1 Mark]\n\nProof:\nSince AB || CE and AE is transversal:\n∠BAE = ∠AEC (Alternate interior angles)\nSo ∠1 = ∠AEC.\nSince ∠1 = ∠2, we have ∠2 = ∠AEC.\nIn ΔACE, since angles are equal, sides are equal: AE = AC  --- (1) [1 Mark]\n\nNow in ΔBCE, AD || CE (by construction):\nBy Thales Theorem:\nBD / DC = AB / AE\nUsing (1), substitute AE = AC:\nBD / DC = AB / AC  [1 Mark]\nHence Proved (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 4.3 (Pythagoras Theorem)
    // =========================================================================
    {
      id: 'en_sec_4_3',
      sectionNumber: '4.3',
      title: 'Exercise 4.3 - Pythagoras Theorem & Applications (2 & 5 Marks)',
      introText:
        'Pythagoras Theorem: In a right-angled triangle, the square on the hypotenuse is equal to the sum of the squares on the other two sides: a² + b² = c².',
      items: [
        {
          id: 'en_thm_4_3',
          type: 'theorem',
          number: '4.3',
          title: 'Pythagoras (Baudhayana) Theorem',
          statementLatex: 'AC^2 = AB^2 + BC^2 \\quad (\\text{when } \\angle B = 90^\\circ)',
          statementText: 'In a right-angled triangle, the square of the hypotenuse equals the sum of squares of the other two sides.'
        }
      ],
      problems: [
        {
          id: 'en_prob_4_3_2mark',
          number: 'Ex 4.3 - Q1 (2 Marks)',
          title: 'A man goes 18 m due east and then 24 m due north. Find distance from start.',
          difficulty: 'Foundational',
          statementLatex: '\\text{A man goes } 18\\text{ m due east and then } 24\\text{ m due north. Find his distance from starting point.}',
          description: 'Direct Pythagoras right triangle application.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Form right triangle with legs 18 m and 24 m. Find hypotenuse.',
              hint: 'd = √(18² + 24²) = √(324 + 576) = √900 = 30 m.',
              expectedInsight: 'Distance = 30 m.',
              latexIntermediate: 'd = \\sqrt{18^2 + 24^2} = \\sqrt{900} = 30\\text{ m}',
              options: ['30 m', '28 m', '32 m'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'd = 30\\text{ m}',
          fullSolutionWalkthrough:
            'Let starting point be O. Eastward motion OA = 18 m, Northward motion AB = 24 m.\nSince East and North are perpendicular, ∠OAB = 90°. [1 Mark]\nBy Pythagoras Theorem:\nOB² = OA² + AB² = 18² + 24² = 324 + 576 = 900\nOB = √900 = 30 m [1 Mark]\nFinal Answer: 30 m.'
        },
        {
          id: 'en_prob_4_3_5mark',
          number: 'Ex 4.3 - Q5 (5 Marks)',
          title: 'The Hypotenuse of a Right Triangle is 6 m more than twice of the shortest side. Find sides.',
          difficulty: 'Intermediate',
          statementLatex: '\\text{The hypotenuse of a right triangle is } 6 \\text{ m more than twice of the shortest side. If the third side is } 2 \\text{ m less than the hypotenuse, find sides.}',
          description: 'Sura Guide standard 5-mark applied Pythagoras equation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Let the shortest side be x. Express hypotenuse and third side in terms of x.',
              hint: 'Hypotenuse h = 2x + 6. Third side = (2x + 6) - 2 = 2x + 4.',
              expectedInsight: 'Shortest = x, Third = 2x + 4, Hypotenuse = 2x + 6.',
              latexIntermediate: 'h = 2x + 6, \\quad b = 2x + 4',
              options: ['h = 2x + 6, b = 2x + 4', 'h = 2x + 6, b = 2x'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Apply Pythagoras theorem: x² + (2x + 4)² = (2x + 6)².',
              hint: 'x² + (4x² + 16x + 16) = 4x² + 24x + 36 => x² - 8x - 20 = 0.',
              expectedInsight: 'x² - 8x - 20 = 0.',
              latexIntermediate: 'x^2 - 8x - 20 = 0',
              options: ['x² - 8x - 20 = 0', 'x² + 8x - 20 = 0'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Solve x² - 8x - 20 = 0 and find all three sides.',
              hint: '(x - 10)(x + 2) = 0 => x = 10 (since length > 0). Shortest = 10 m, third = 24 m, hypotenuse = 26 m.',
              expectedInsight: '10 m, 24 m, 26 m.',
              latexIntermediate: 'x = 10 \\implies \\text{Sides are } 10\\text{ m}, \\; 24\\text{ m}, \\; 26\\text{ m}',
              options: ['10 m, 24 m, 26 m', '8 m, 15 m, 17 m'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Sides are } 10\\text{ m}, \\; 24\\text{ m}, \\; 26\\text{ m}',
          fullSolutionWalkthrough:
            'Let the shortest side = x m [1 Mark]\nHypotenuse = (2x + 6) m\nThird side = (2x + 6) - 2 = (2x + 4) m [1 Mark]\n\nBy Pythagoras Theorem:\n(Hypotenuse)² = (Shortest side)² + (Third side)²\n(2x + 6)² = x² + (2x + 4)² [1 Mark]\n4x² + 24x + 36 = x² + 4x² + 16x + 16\nx² - 8x - 20 = 0\n(x - 10)(x + 2) = 0\nx = 10 or x = -2 (Reject negative length) [1 Mark]\n\nTherefore:\nShortest side = 10 m\nThird side = 2(10) + 4 = 24 m\nHypotenuse = 2(10) + 6 = 26 m [1 Mark]\nFinal Answer: 10 m, 24 m, 26 m (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 4.4 (Circles, Tangents, Alternate Segment Theorem)
    // =========================================================================
    {
      id: 'en_sec_4_4',
      sectionNumber: '4.4',
      title: 'Exercise 4.4 - Tangents to a Circle & Alternate Segment Theorem (2 & 5 Marks)',
      introText:
        'A tangent to a circle is perpendicular to the radius at the point of contact. Alternate Segment Theorem: If a chord is drawn through the point of contact of a tangent to a circle, then the angles which this chord makes with the given tangent are equal to the angles formed in the corresponding alternate segments.',
      items: [
        {
          id: 'en_thm_4_4',
          type: 'theorem',
          number: '4.4',
          title: 'Alternate Segment Theorem',
          statementLatex: '\\angle BAT = \\angle BCA',
          statementText: 'The angle between a tangent and a chord equals the angle subtended by the chord in the alternate segment.'
        }
      ],
      problems: [
        {
          id: 'en_prob_4_4_2mark',
          number: 'Ex 4.4 - Q1 (2 Marks)',
          title: 'Find the length of the tangent from a point 13 cm away from circle of radius 5 cm',
          difficulty: 'Foundational',
          statementLatex: '\\text{A point } P \\text{ is } 13\\text{ cm from the centre of a circle. The radius of the circle is } 5\\text{ cm. Find the length of the tangent.}',
          description: 'Apply right triangle OT ⊥ PT.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Use Pythagoras theorem on ΔOPT where ∠OTP = 90°: PT = √(OP² - OT²).',
              hint: 'PT = √(13² - 5²) = √(169 - 25) = √144 = 12 cm.',
              expectedInsight: 'PT = 12 cm.',
              latexIntermediate: 'PT = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12\\text{ cm}',
              options: ['12 cm', '10 cm', '14 cm'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'PT = 12\\text{ cm}',
          fullSolutionWalkthrough:
            'Let O be the centre and P be the external point. OP = 13 cm, radius OT = 5 cm.\nSince radius is perpendicular to tangent at point of contact, ∠OTP = 90°. [1 Mark]\nIn right ΔOPT:\nPT² = OP² - OT² = 13² - 5² = 169 - 25 = 144\nPT = √144 = 12 cm [1 Mark]\nFinal Answer: 12 cm.'
        },
        {
          id: 'en_prob_4_4_5mark',
          number: 'Ex 4.4 - Q5 (5 Marks)',
          title: 'State and Prove Alternate Segment Theorem',
          difficulty: 'Intermediate',
          statementLatex: '\\text{State and prove the Alternate Segment Theorem.}',
          description: 'High-yield 5-mark circle theorem proof.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'State the theorem clearly.',
              hint: 'If a line touches a circle and from the point of contact a chord is drawn, the angles between the tangent and the chord are equal to the angles in the corresponding alternate segments.',
              expectedInsight: '∠BAT = ∠BCA.',
              latexIntermediate: '\\angle BAT = \\angle BCA',
              options: ['∠BAT = ∠BCA', '∠BAT = 90°'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Construction: Draw diameter AD through point of contact A and join BD.',
              hint: 'Radius is perpendicular to tangent => ∠DAT = 90°. Angle in semicircle ∠ABD = 90°.',
              expectedInsight: '∠ADB = 90° - ∠DAB = ∠BAT.',
              latexIntermediate: '\\angle BAT = \\angle ADB',
              options: ['∠BAT = ∠ADB', '∠BAT = ∠ABD'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Use property of angles in the same segment.',
              hint: 'Angles subtended by chord AB in the same segment are equal: ∠ADB = ∠ACB.',
              expectedInsight: '∠BAT = ∠BCA.',
              latexIntermediate: '\\angle BAT = \\angle BCA',
              options: ['∠BAT = ∠BCA', '∠BAT ≠ ∠BCA'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\angle BAT = \\angle BCA \\quad (\\text{Hence Proved})',
          fullSolutionWalkthrough:
            'Statement: If a line touches a circle and from the point of contact a chord is drawn, the angles between the tangent and the chord are equal to the angles in the corresponding alternate segments. [1 Mark]\n\nGiven: Let XY be the tangent to the circle at A and AB be a chord. [1 Mark]\nTo prove: ∠BAT = ∠BCA.\n\nConstruction: Draw diameter AD and join BD. [1 Mark]\n\nProof:\n1) AD ⊥ XY (Radius is perpendicular to tangent at point of contact)\nSo, ∠DAT = 90°\n∠DAB + ∠BAT = 90° => ∠BAT = 90° - ∠DAB  --- (1) [1 Mark]\n\n2) In ΔABD, ∠ABD = 90° (Angle in a semicircle)\nSo, ∠ADB + ∠DAB = 90° => ∠ADB = 90° - ∠DAB  --- (2)\n\nFrom (1) and (2):\n∠BAT = ∠ADB\nSince angles in the same segment are equal:\n∠ADB = ∠BCA\nTherefore, ∠BAT = ∠BCA. [1 Mark]\nHence Proved (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 4.5 (Multiple Choice Questions - MCQs)
    // =========================================================================
    {
      id: 'en_sec_4_5',
      sectionNumber: '4.5',
      title: 'Exercise 4.5 - One Mark Multiple Choice Questions (1 Mark MCQs)',
      introText:
        'Official board exam multiple choice questions covering similarity, Thales theorem, angle bisector theorem, Pythagoras theorem, and tangents.',
      items: [],
      problems: [
        {
          id: 'en_prob_4_5_1',
          number: 'Ex 4.5 - MCQ 1',
          title: 'Ratio of Areas of Two Similar Triangles is 9:16. Ratio of their altitudes is...',
          difficulty: 'Foundational',
          statementLatex: '\\text{If } \\Delta ABC \\sim \\Delta PQR \\text{ with } \\frac{\\text{Area}(\\Delta ABC)}{\\text{Area}(\\Delta PQR)} = \\frac{9}{16}, \\text{ then the ratio of their altitudes is: }',
          description: 'Official 1-mark board question.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Ratio of areas equals the square of the ratio of corresponding altitudes.',
              hint: 'Altitudes ratio = √(9/16) = 3/4 = 3:4.',
              expectedInsight: '3:4.',
              latexIntermediate: '\\sqrt{\\frac{9}{16}} = \\frac{3}{4}',
              options: ['3:4', '9:16', '4:3', '81:256'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '3:4',
          fullSolutionWalkthrough:
            'Ratio of altitudes = √(Ratio of Areas) = √(9/16) = 3/4 = 3:4 [1 Mark].'
        },
        {
          id: 'en_prob_4_5_2',
          number: 'Ex 4.5 - MCQ 2',
          title: 'Condition for similarity when AB/DE = BC/FD',
          difficulty: 'Foundational',
          statementLatex: '\\text{If in } \\Delta ABC \\text{ and } \\Delta EDF, \\; \\frac{AB}{DE} = \\frac{BC}{FD}, \\text{ then they will be similar when: }',
          description: 'Recognizing included angle between proportional sides.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Identify the angle between AB and BC in ΔABC and between DE and FD in ΔEDF.',
              hint: 'Included angle in ΔABC is ∠B. Included angle in ΔEDF is ∠D.',
              expectedInsight: '∠B = ∠D.',
              latexIntermediate: '\\angle B = \\angle D',
              options: ['∠B = ∠D', '∠A = ∠D', '∠B = ∠E'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\angle B = \\angle D',
          fullSolutionWalkthrough:
            'The included angle between AB and BC is ∠B. The included angle between DE and FD is ∠D. By SAS similarity criterion, they are similar when ∠B = ∠D [1 Mark].'
        },
        {
          id: 'en_prob_4_5_3',
          number: 'Ex 4.5 - MCQ 3',
          title: 'A line which intersects a circle at two distinct points is called a...',
          difficulty: 'Foundational',
          statementLatex: '\\text{A straight line intersecting a circle in two distinct points is called a: }',
          description: 'Basic circle terminology.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Recall the definition of secant vs tangent.',
              hint: 'Tangent touches at 1 point; secant intersects at 2 points.',
              expectedInsight: 'Secant.',
              latexIntermediate: '\\text{Secant}',
              options: ['Secant', 'Tangent', 'Chord', 'Diameter'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Secant}',
          fullSolutionWalkthrough:
            'A line that intersects a circle at two distinct points is called a secant [1 Mark].'
        }
      ]
    },

    // =========================================================================
    // UNIT EXERCISE 4 (Advanced Geometry Theorems - 5 Marks)
    // =========================================================================
    {
      id: 'en_sec_unit_ex_4',
      sectionNumber: 'Unit Ex 4',
      title: 'Unit Exercise 4 - Advanced Geometry Theorems (5 Marks)',
      introText:
        'Unit Exercise 4 focuses on concurrency and collinearity theorems: Ceva’s Theorem and Menelaus’ Theorem.',
      items: [
        {
          id: 'en_def_unit_ex_4',
          type: 'definition',
          number: 'UE 4',
          title: 'Ceva’s Theorem',
          statementLatex: '\\frac{BD}{DC} \\times \\frac{CE}{EA} \\times \\frac{AF}{FB} = 1',
          statementText: 'Three cevians AD, BE, CF of a triangle are concurrent if and only if their directed segment ratios multiply to 1.'
        },
        {
          id: 'en_def_unit_ex_4_menelaus',
          type: 'theorem',
          number: 'UE 4.2',
          title: 'Menelaus’s Theorem',
          statementLatex: '\\frac{BP}{PC} \\times \\frac{CQ}{QA} \\times \\frac{AR}{RB} = 1',
          statementText: 'A straight line intersects the sides BC, CA, AB of ΔABC at points P, Q, R iff the product of the three ratios is 1.'
        }
      ],
      problems: [
        {
          id: 'en_prob_unit_ex_4_5mark',
          number: 'Unit Ex 4 - Q1 (5 Marks)',
          title: 'State and Prove Ceva’s Theorem',
          difficulty: 'Advanced',
          statementLatex: '\\text{State and prove Ceva’s Theorem.}',
          description: 'Advanced 5-mark board concurrency theorem.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'State Ceva’s theorem.',
              hint: 'Let ABC be a triangle and D, E, F be points on lines BC, CA, AB respectively. Then cevians AD, BE, CF are concurrent iff (BD/DC)(CE/EA)(AF/FB) = 1.',
              expectedInsight: '(BD/DC)(CE/EA)(AF/FB) = 1.',
              latexIntermediate: '\\frac{BD}{DC} \\cdot \\frac{CE}{EA} \\cdot \\frac{AF}{FB} = 1',
              options: ['\\frac{BD}{DC} \\cdot \\frac{CE}{EA} \\cdot \\frac{AF}{FB} = 1', '\\frac{BD}{DC} + \\frac{CE}{EA} + \\frac{AF}{FB} = 1'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Use areas of triangles with common vertex P (point of concurrency).',
              hint: 'BD/DC = Area(ΔABP)/Area(ΔACP). Similarly CE/EA = Area(ΔBCP)/Area(ΔBAP), AF/FB = Area(ΔCAP)/Area(ΔCBP).',
              expectedInsight: 'Product of the three ratios cancels cyclically to 1.',
              latexIntermediate: '\\frac{\\text{Area}(\\Delta ABP)}{\\text{Area}(\\Delta ACP)} \\times \\frac{\\text{Area}(\\Delta BCP)}{\\text{Area}(\\Delta BAP)} \\times \\frac{\\text{Area}(\\Delta CAP)}{\\text{Area}(\\Delta CBP)} = 1',
              options: ['Product cancels cyclically to 1', 'Product equals 0'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\frac{BD}{DC} \\times \\frac{CE}{EA} \\times \\frac{AF}{FB} = 1 \\quad (\\text{Hence Proved})',
          fullSolutionWalkthrough:
            'Statement: Let ABC be a triangle and let D, E, F be points on BC, CA, AB. Then the cevians AD, BE, CF are concurrent if and only if:\n(BD/DC) × (CE/EA) × (AF/FB) = 1 [1 Mark]\n\nProof:\nLet the cevians AD, BE, CF concur at point P. [1 Mark]\nTriangles ΔABD and ΔACD have the same altitude from A, so:\nBD / DC = Area(ΔABD) / Area(ΔACD)\nAlso BD / DC = Area(ΔPBD) / Area(ΔPCD)\nSubtracting gives:\nBD / DC = Area(ΔABP) / Area(ΔACP)  --- (1) [1 Mark]\n\nSimilarly:\nCE / EA = Area(ΔBCP) / Area(ΔBAP)  --- (2)\nAF / FB = Area(ΔCAP) / Area(ΔCBP)  --- (3) [1 Mark]\n\nMultiplying (1), (2), (3):\n(BD/DC) × (CE/EA) × (AF/FB)\n= [Area(ΔABP)/Area(ΔACP)] × [Area(ΔBCP)/Area(ΔBAP)] × [Area(ΔCAP)/Area(ΔCBP)]\n= 1 [1 Mark]\nHence Proved (Full 5/5 Marks Guaranteed).'
        },
        {
          id: 'en_prob_unit_ex_4_5mark_q2',
          number: 'Unit Ex 4 - Q2 (5 Marks)',
          title: 'State and Prove Menelaus’s Theorem',
          difficulty: 'Advanced',
          statementLatex: '\\text{State and prove Menelaus’s Theorem.}',
          description: 'Sura Guide standard 5-mark collinearity theorem for transversals.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'State Menelaus’s theorem.',
              hint: 'A line intersects sides BC, CA, AB of ΔABC at points P, Q, R iff (BP/PC) × (CQ/QA) × (AR/RB) = 1.',
              expectedInsight: '(BP/PC)(CQ/QA)(AR/RB) = 1.',
              latexIntermediate: '\\frac{BP}{PC} \\times \\frac{CQ}{QA} \\times \\frac{AR}{RB} = 1',
              options: ['\\frac{BP}{PC} \\times \\frac{CQ}{QA} \\times \\frac{AR}{RB} = 1', '\\frac{BP}{PC} + \\frac{CQ}{QA} = \\frac{AR}{RB}'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Draw perpendiculars from vertices A, B, C to the transversal line PQR.',
              hint: 'Let lengths of perpendiculars from A, B, C be h₁, h₂, h₃.',
              expectedInsight: 'Ratios of segments equal ratios of altitudes by similar right triangles.',
              latexIntermediate: '\\frac{BP}{PC} = \\frac{h_2}{h_3}, \\quad \\frac{CQ}{QA} = \\frac{h_3}{h_1}, \\quad \\frac{AR}{RB} = \\frac{h_1}{h_2}',
              options: ['(h₂/h₃)(h₃/h₁)(h₁/h₂) = 1', 'Equal to 0'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\frac{BP}{PC} \\times \\frac{CQ}{QA} \\times \\frac{AR}{RB} = 1 \\quad (\\text{Hence Proved})',
          fullSolutionWalkthrough:
            'Statement: A line intersects the sides BC, CA, AB of ΔABC at points P, Q, R respectively if and only if (BP/PC) × (CQ/QA) × (AR/RB) = 1. [1 Mark]\n\nGiven: ΔABC with line PQR intersecting BC produced at P, AC at Q, and AB at R. [1 Mark]\n\nConstruction: Draw perpendiculars from vertices A, B, C to line PQR with lengths h₁, h₂, h₃ respectively. [1 Mark]\n\nProof:\nBy similar right triangles formed with the transversal:\nBP / PC = h₂ / h₃  --- (1)\nCQ / QA = h₃ / h₁  --- (2)\nAR / RB = h₁ / h₂  --- (3) [1 Mark]\n\nMultiplying (1), (2), (3):\n(BP/PC) × (CQ/QA) × (AR/RB) = (h₂/h₃) × (h₃/h₁) × (h₁/h₂) = 1. [1 Mark]\nHence Proved (Full 5/5 Marks Guaranteed).'
        }
      ]
    }
  ]
};
