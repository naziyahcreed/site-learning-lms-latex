import { BookChapter } from '../../types/math';

export const unit7English: BookChapter = {
  id: 'en_unit_7',
  chapterNumber: 7,
  romanNumeral: 'VII',
  title: 'Mensuration',
  subtitle: 'Complete Sura Guide: All Exercises (Ex 7.1 to 7.5 & Unit Ex 7) with 1, 2, and 5-Mark Step-by-Step Solutions',
  synopsis:
    'Mensuration is the science of spatial geometric measurement. This comprehensive unit provides step-by-step Sura-guide solutions for all exercises in the Class 10 Tamil Nadu syllabus: Surface Areas of Cylinders, Cones, Spheres, Frustum (Ex 7.1), Volumes of Solids (Ex 7.2), Combined Solids (Ex 7.3), Conversion/Melting of Solids (Ex 7.4), MCQs (Ex 7.5), and Unit Exercise 7.',
  prerequisites: ['Circle Formulas', 'Pythagoras Theorem for Slant Height', 'Volume and Surface Area Concepts'],
  sections: [
    // =========================================================================
    // EXERCISE 7.1 (Surface Areas of Cylinder, Cone, Sphere, Frustum)
    // =========================================================================
    {
      id: 'en_sec_7_1',
      sectionNumber: '7.1',
      title: 'Exercise 7.1 - Curved & Total Surface Areas (2 & 5 Marks)',
      introText:
        'Formulas: Cylinder CSA = 2πrh, TSA = 2πr(h + r); Cone CSA = πrl, TSA = πr(l + r) where l = √(r² + h²); Sphere SA = 4πr²; Hemisphere CSA = 2πr², TSA = 3πr²; Frustum CSA = π(R + r)l.',
      items: [
        {
          id: 'en_def_7_1',
          type: 'definition',
          number: '7.1',
          title: 'Surface Area Formulas',
          statementLatex: '\\text{Cylinder CSA} = 2\\pi r h, \\quad \\text{Cone CSA} = \\pi r l, \\quad \\text{Frustum CSA} = \\pi (R + r) l',
          statementText: 'Slant height of cone: l = √(r² + h²). Slant height of frustum: l = √[h² + (R - r)²].'
        }
      ],
      problems: [
        {
          id: 'en_prob_7_1_1',
          number: 'Ex 7.1 - Q1 (2 Marks)',
          title: 'Radius and Height of Cylinder Given Ratio 5:7 and CSA 5500 cm²',
          difficulty: 'Intermediate',
          statementLatex: '\\text{The radius and height of a cylinder are in the ratio } 5:7 \\text{ and its CSA is } 5500 \\text{ cm}^2. \\text{ Find its radius and height.}',
          description: 'Standard 2-mark ratio substitution problem.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Let r = 5x and h = 7x. Solve 2πrh = 5500.',
              hint: '2 × (22/7) × (5x) × (7x) = 220x² = 5500 => x² = 25 => x = 5.',
              expectedInsight: 'x = 5.',
              latexIntermediate: '220 x^2 = 5500 \\implies x = 5',
              options: ['x = 5', 'x = 4'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Find r and h.',
              hint: 'r = 5(5) = 25 cm, h = 7(5) = 35 cm.',
              expectedInsight: 'r = 25 cm, h = 35 cm.',
              latexIntermediate: 'r = 25 \\text{ cm}, \\quad h = 35 \\text{ cm}',
              options: ['r = 25 cm, h = 35 cm', 'r = 20 cm, h = 28 cm'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'r = 25 \\text{ cm}, \\quad h = 35 \\text{ cm}',
          fullSolutionWalkthrough:
            'Let radius r = 5x and height h = 7x [1 Mark]\nCSA of cylinder = 2πrh = 5500\n2 × (22/7) × (5x) × (7x) = 5500\n220x² = 5500 => x² = 25 => x = 5\n\nRadius r = 5(5) = 25 cm\nHeight h = 7(5) = 35 cm [1 Mark]\nFinal Answer: r = 25 cm, h = 35 cm.'
        },
        {
          id: 'en_prob_7_1_5mark',
          number: 'Ex 7.1 - Q5 (5 Marks)',
          title: 'Find the total surface area of a cone whose radius is 7 cm and slant height is 25 cm, and compare with a hemisphere of radius 7 cm',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Find the TSA of a right circular cone with radius } 7\\text{ cm and slant height } 25\\text{ cm. Also find TSA of a hemisphere with the same radius.}',
          description: 'Sura Guide standard 5-mark surface area calculation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Calculate TSA of the cone: TSA = πr(l + r).',
              hint: '(22/7) × 7 × (25 + 7) = 22 × 32 = 704 cm².',
              expectedInsight: 'TSA of cone = 704 cm².',
              latexIntermediate: '\\text{TSA}_{\\text{cone}} = \\frac{22}{7} \\times 7 \\times 32 = 704\\text{ cm}^2',
              options: ['704 cm²', '650 cm²', '720 cm²'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Calculate TSA of hemisphere: TSA = 3πr².',
              hint: '3 × (22/7) × 7² = 3 × 22 × 7 = 462 cm².',
              expectedInsight: 'TSA of hemisphere = 462 cm².',
              latexIntermediate: '\\text{TSA}_{\\text{hemi}} = 3 \\times \\frac{22}{7} \\times 49 = 462\\text{ cm}^2',
              options: ['462 cm²', '308 cm²'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{TSA}_{\\text{cone}} = 704\\text{ cm}^2, \\quad \\text{TSA}_{\\text{hemi}} = 462\\text{ cm}^2',
          fullSolutionWalkthrough:
            'For Cone: Radius r = 7 cm, Slant height l = 25 cm [1 Mark]\nTSA of cone = πr(l + r) [1 Mark]\n= (22/7) × 7 × (25 + 7) = 22 × 32 = 704 cm² [1 Mark]\n\nFor Hemisphere: Radius r = 7 cm\nTSA of hemisphere = 3πr² [1 Mark]\n= 3 × (22/7) × 7 × 7 = 3 × 22 × 7 = 462 cm² [1 Mark]\nFinal Answer: Cone TSA = 704 cm², Hemisphere TSA = 462 cm² (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 7.2 (Volumes of Cylinder, Cone, Sphere, Hemisphere)
    // =========================================================================
    {
      id: 'en_sec_7_2',
      sectionNumber: '7.2',
      title: 'Exercise 7.2 - Volumes of Solids (2 & 5 Marks)',
      introText:
        'Volume formulas: Cylinder V = πr²h; Cone V = (1/3)πr²h; Sphere V = (4/3)πr³; Hemisphere V = (2/3)πr³; Frustum V = (1/3)πh(R² + r² + Rr).',
      items: [
        {
          id: 'en_def_7_2',
          type: 'definition',
          number: '7.2',
          title: 'Volume Formulas',
          statementLatex: 'V_{\\text{cylinder}} = \\pi r^2 h, \\quad V_{\\text{cone}} = \\frac{1}{3} \\pi r^2 h, \\quad V_{\\text{sphere}} = \\frac{4}{3} \\pi r^3',
          statementText: 'Volume of a cone is exactly one-third the volume of a cylinder with the same radius and height.'
        }
      ],
      problems: [
        {
          id: 'en_prob_7_2_2mark',
          number: 'Ex 7.2 - Q1 (2 Marks)',
          title: 'A 14 m deep well with diameter 4 m is dug. Find the volume of earth taken out.',
          difficulty: 'Foundational',
          statementLatex: '\\text{A } 14\\text{ m deep well with diameter } 4\\text{ m is dug. Find the volume of earth taken out.}',
          description: 'Cylindrical well volume calculation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Radius r = 4/2 = 2 m, depth h = 14 m. Calculate V = πr²h.',
              hint: '(22/7) × 2² × 14 = 22 × 4 × 2 = 176 m³.',
              expectedInsight: 'Volume = 176 m³.',
              latexIntermediate: 'V = \\frac{22}{7} \\times 4 \\times 14 = 176\\text{ m}^3',
              options: ['176 m³', '352 m³', '88 m³'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'V = 176\\text{ m}^3',
          fullSolutionWalkthrough:
            'Radius of well r = 4/2 = 2 m, depth h = 14 m [1 Mark]\nVolume of earth taken out = πr²h\n= (22/7) × 2² × 14 = (22/7) × 4 × 14 = 22 × 8 = 176 m³ [1 Mark]\nFinal Answer: 176 m³.'
        },
        {
          id: 'en_prob_7_2_5mark',
          number: 'Ex 7.2 - Q5 (5 Marks)',
          title: 'Volume of a conical container with radius 5 cm and height 12 cm filled with water',
          difficulty: 'Intermediate',
          statementLatex: '\\text{A conical container of base radius } 5 \\text{ cm and height } 12 \\text{ cm is full of water. The water is poured into a cylindrical container of radius } 10 \\text{ cm. Find the height of the water level in the cylinder.}',
          description: 'Sura Guide standard 5-mark volume conservation problem.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Find the volume of water in the conical container.',
              hint: 'V = (1/3)πr₁²h₁ = (1/3)π(5)²(12) = 100π cm³.',
              expectedInsight: 'Volume = 100π cm³.',
              latexIntermediate: 'V_1 = \\frac{1}{3} \\pi (5)^2 (12) = 100\\pi \\text{ cm}^3',
              options: ['100π cm³', '300π cm³'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Equate to the volume in cylinder of radius 10 cm and solve for height h₂.',
              hint: 'πr₂²h₂ = 100π => π(10)²h₂ = 100π => 100h₂ = 100 => h₂ = 1 cm.',
              expectedInsight: 'h₂ = 1 cm.',
              latexIntermediate: '\\pi (10)^2 h_2 = 100\\pi \\implies h_2 = 1 \\text{ cm}',
              options: ['1 cm', '2 cm', '0.5 cm'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Height of water in the cylinder} = 1 \\text{ cm}',
          fullSolutionWalkthrough:
            'Conical container:\nRadius r₁ = 5 cm, Height h₁ = 12 cm [1 Mark]\nVolume of water = (1/3) π r₁² h₁\n= (1/3) × π × 5² × 12 = 100π cm³  [2 Marks]\n\nCylindrical container:\nRadius r₂ = 10 cm, Height of water level = h₂\nVolume of water in cylinder = π r₂² h₂  [1 Mark]\n\nSince volume remains constant:\nπ(10)² h₂ = 100π\n100 h₂ = 100\nh₂ = 1 cm  [1 Mark]\nFinal Answer: Height of water in cylinder = 1 cm (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 7.3 (Combined Solids - 2 & 5 Marks)
    // =========================================================================
    {
      id: 'en_sec_7_3',
      sectionNumber: '7.3',
      title: 'Exercise 7.3 - Volume and Surface Area of Combined Solids (2 & 5 Marks)',
      introText:
        'When geometric solids are combined, total volume is the algebraic sum of component volumes. Total surface area includes only the exposed outer surfaces.',
      items: [
        {
          id: 'en_def_7_3',
          type: 'definition',
          number: '7.3',
          title: 'Combined Solids Principle',
          statementLatex: 'V_{\\text{total}} = V_1 + V_2, \\quad \\text{TSA}_{\\text{toy}} = \\text{CSA}_1 + \\text{CSA}_2',
          statementText: 'Internal contact surfaces between combined solids are NOT included in the total surface area.'
        }
      ],
      problems: [
        {
          id: 'en_prob_7_3_2mark',
          number: 'Ex 7.3 - Q2 (2 Marks)',
          title: 'Find total volume of a toy consisting of a cone mounted on a hemisphere with radius 3 cm and cone height 4 cm',
          difficulty: 'Foundational',
          statementLatex: '\\text{A toy is in the form of a cone mounted on a hemisphere of radius } 3\\text{ cm. If the height of the cone is } 4\\text{ cm, find the volume of the toy (in terms of } \\pi\\text{).}',
          description: 'Sum of hemisphere and cone volume.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Calculate V = Volume of hemisphere + Volume of cone.',
              hint: '(2/3)π(3³) + (1/3)π(3²)(4) = (2/3)π(27) + (1/3)π(9)(4) = 18π + 12π = 30π cm³.',
              expectedInsight: '30π cm³.',
              latexIntermediate: 'V = \\frac{2}{3}\\pi(27) + \\frac{1}{3}\\pi(9)(4) = 18\\pi + 12\\pi = 30\\pi \\text{ cm}^3',
              options: ['30π cm³', '36π cm³', '24π cm³'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'V = 30\\pi \\text{ cm}^3',
          fullSolutionWalkthrough:
            'Radius r = 3 cm, height of cone h = 4 cm [1 Mark]\nTotal Volume = Volume of hemisphere + Volume of cone\n= (2/3)πr³ + (1/3)πr²h\n= (2/3)π(27) + (1/3)π(9)(4) = 18π + 12π = 30π cm³ [1 Mark]\nFinal Answer: 30π cm³.'
        },
        {
          id: 'en_prob_7_3_5mark',
          number: 'Ex 7.3 - Q1 (5 Marks)',
          title: 'A vessel is in the form of a hemispherical bowl surmounted by a hollow cylinder. Find total surface area.',
          difficulty: 'Intermediate',
          statementLatex: '\\text{A vessel is in the form of a hemispherical bowl surmounted by a hollow cylinder. The diameter of the hemisphere is } 14 \\text{ cm and the total height of the vessel is } 13 \\text{ cm. Find the inner surface area of the vessel.}',
          description: 'Sura Guide standard 5-mark combined solid surface area calculation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Find radius r and height of the cylindrical part h.',
              hint: 'Radius r = 14/2 = 7 cm. Height of cylinder h = Total height - radius = 13 - 7 = 6 cm.',
              expectedInsight: 'r = 7 cm, h = 6 cm.',
              latexIntermediate: 'r = 7 \\text{ cm}, \\quad h = 13 - 7 = 6 \\text{ cm}',
              options: ['r = 7 cm, h = 6 cm', 'r = 7 cm, h = 13 cm'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Inner surface area = CSA of cylinder + CSA of hemisphere.',
              hint: '2πrh + 2πr² = 2πr(h + r).',
              expectedInsight: '2πr(h + r).',
              latexIntermediate: '\\text{Area} = 2\\pi r (h + r)',
              options: ['2πr(h + r)', '2πrh + 3πr²'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Substitute r = 7 cm, h = 6 cm and calculate.',
              hint: '2 × (22/7) × 7 × (6 + 7) = 44 × 13 = 572 cm².',
              expectedInsight: '572 cm².',
              latexIntermediate: '2 \\times \\frac{22}{7} \\times 7 \\times 13 = 572 \\text{ cm}^2',
              options: ['572 cm²', '616 cm²', '528 cm²'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Inner Surface Area} = 572 \\text{ cm}^2',
          fullSolutionWalkthrough:
            'Diameter of hemisphere = 14 cm => Radius r = 7 cm [1 Mark]\nTotal height of the vessel = 13 cm\nHeight of the cylindrical portion h = 13 - 7 = 6 cm [1 Mark]\n\nInner surface area of the vessel:\n= CSA of cylinder + CSA of hemisphere [1 Mark]\n= 2πrh + 2πr²\n= 2πr(h + r) [1 Mark]\n= 2 × (22/7) × 7 × (6 + 7)\n= 44 × 13 = 572 cm² [1 Mark]\nFinal Answer: 572 cm² (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 7.4 (Conversion of Solids - Melting & Recasting - 2 & 5 Marks)
    // =========================================================================
    {
      id: 'en_sec_7_4',
      sectionNumber: '7.4',
      title: 'Exercise 7.4 - Conversion of Solids / Melting & Recasting (2 & 5 Marks)',
      introText:
        'When a solid is melted and recast into another shape, its total volume remains invariant: Volume of original solid = Volume of new solid.',
      items: [
        {
          id: 'en_thm_7_4',
          type: 'theorem',
          number: '7.4',
          title: 'Volume Invariance Law',
          statementLatex: 'V_{\\text{original}} = V_{\\text{recast}}',
          statementText: 'The volume of material is conserved during melting and reformulating.'
        }
      ],
      problems: [
        {
          id: 'en_prob_7_4_2mark',
          number: 'Ex 7.4 - Q2 (2 Marks)',
          title: 'Metallic spheres of radii 6 cm, 8 cm, 10 cm melted to form single solid sphere. Find radius.',
          difficulty: 'Foundational',
          statementLatex: '\\text{Metallic spheres of radii } 6\\text{ cm}, \\; 8\\text{ cm}, \\; 10\\text{ cm} \\text{ are melted to form a single solid sphere. Find its radius.}',
          description: 'Sum of spheres volume equal to single sphere volume.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'R³ = r₁³ + r₂³ + r₃³.',
              hint: 'R³ = 6³ + 8³ + 10³ = 216 + 512 + 1000 = 1728 => R = ∛1728 = 12 cm.',
              expectedInsight: 'R = 12 cm.',
              latexIntermediate: 'R^3 = 6^3 + 8^3 + 10^3 = 1728 \\implies R = 12\\text{ cm}',
              options: ['12 cm', '14 cm', '10 cm'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'R = 12\\text{ cm}',
          fullSolutionWalkthrough:
            'Let the radius of the resulting sphere be R.\nVolume of single sphere = Sum of volumes of three spheres [1 Mark]\n(4/3)πR³ = (4/3)π(r₁³ + r₂³ + r₃³)\nR³ = 6³ + 8³ + 10³ = 216 + 512 + 1000 = 1728\nR = ∛1728 = 12 cm [1 Mark]\nFinal Answer: 12 cm.'
        },
        {
          id: 'en_prob_7_4_5mark',
          number: 'Ex 7.4 - Q1 (5 Marks)',
          title: 'An aluminium sphere of radius 12 cm is melted to make a cylinder of neck radius 8 cm. Find height of cylinder.',
          difficulty: 'Intermediate',
          statementLatex: '\\text{An aluminium sphere of radius } 12 \\text{ cm is melted to make a cylinder of radius } 8 \\text{ cm. Find the height of the cylinder.}',
          description: 'Sura Guide standard 5-mark sphere to cylinder conversion.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Equate volume of sphere to volume of cylinder: (4/3)πr₁³ = πr₂²h.',
              hint: '(4/3) × (12)³ = 8² × h.',
              expectedInsight: '(4/3) × 1728 = 64h.',
              latexIntermediate: '\\frac{4}{3} \\pi (12)^3 = \\pi (8)^2 h',
              options: ['(4/3)(12)³ = 64h', '(4/3)(12)³ = 8h'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Solve for h: h = [4 × 1728] / [3 × 64].',
              hint: '4 × 576 / 64 = 2304 / 64 = 36 cm.',
              expectedInsight: 'h = 36 cm.',
              latexIntermediate: 'h = \\frac{4 \\times 576}{64} = 36 \\text{ cm}',
              options: ['h = 36 cm', 'h = 32 cm', 'h = 24 cm'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'h = 36 \\text{ cm}',
          fullSolutionWalkthrough:
            'Radius of sphere r₁ = 12 cm\nRadius of cylinder r₂ = 8 cm\nLet height of the cylinder = h cm. [1 Mark]\n\nVolume of cylinder = Volume of sphere [1 Mark]\nπ r₂² h = (4/3) π r₁³ [1 Mark]\n(8)² × h = (4/3) × (12)³\n64h = (4/3) × 1728 = 4 × 576 = 2304 [1 Mark]\nh = 2304 / 64 = 36 cm [1 Mark]\nFinal Answer: Height of the cylinder = 36 cm (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 7.5 (Multiple Choice Questions - MCQs)
    // =========================================================================
    {
      id: 'en_sec_7_5',
      sectionNumber: '7.5',
      title: 'Exercise 7.5 - One Mark Multiple Choice Questions (1 Mark MCQs)',
      introText:
        'Official board examination multiple choice questions covering surface areas and volumes.',
      items: [],
      problems: [
        {
          id: 'en_prob_7_5_1',
          number: 'Ex 7.5 - MCQ 1',
          title: 'The curved surface area of a right circular cone of height 15 cm and base diameter 16 cm is...',
          difficulty: 'Foundational',
          statementLatex: '\\text{The curved surface area of a right circular cone of height } 15 \\text{ cm and base diameter } 16 \\text{ cm is: }',
          description: 'Official 1-mark board question.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Find radius r and slant height l = √(r² + h²).',
              hint: 'r = 8 cm, h = 15 cm => l = √(64 + 225) = √289 = 17 cm.',
              expectedInsight: 'l = 17 cm.',
              latexIntermediate: 'l = \\sqrt{8^2 + 15^2} = 17 \\text{ cm}',
              options: ['17 cm', '15 cm'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'CSA = πrl = π(8)(17) = 136π cm².',
              hint: '136π cm².',
              expectedInsight: '136π cm².',
              latexIntermediate: '\\text{CSA} = 136\\pi \\text{ cm}^2',
              options: ['136π cm²', '120π cm²', '68π cm²'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '136\\pi \\text{ cm}^2',
          fullSolutionWalkthrough:
            'r = 16/2 = 8 cm, h = 15 cm.\nl = √(r² + h²) = √(64 + 225) = 17 cm.\nCSA = πrl = π(8)(17) = 136π cm² [1 Mark].'
        },
        {
          id: 'en_prob_7_5_2',
          number: 'Ex 7.5 - MCQ 2',
          title: 'Radius of cylinder is halved keeping height same. Ratio of new to original volume is...',
          difficulty: 'Foundational',
          statementLatex: '\\text{If radius is halved and height remains same, ratio of volume of new cylinder to original is: }',
          description: 'Ratio change in volume.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'V_new / V_orig = π(r/2)²h / (πr²h).',
              hint: '(1/4) / 1 = 1:4.',
              expectedInsight: '1:4.',
              latexIntermediate: '\\frac{\\pi (r/2)^2 h}{\\pi r^2 h} = \\frac{1}{4}',
              options: ['1:4', '1:2', '1:8', '4:1'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '1:4',
          fullSolutionWalkthrough:
            'V_new / V_old = [π(r/2)²h] / [πr²h] = 1/4 = 1:4 [1 Mark].'
        },
        {
          id: 'en_prob_7_5_3',
          number: 'Ex 7.5 - MCQ 3',
          title: 'A shuttlecock used for playing badminton has the shape of a combination of...',
          difficulty: 'Foundational',
          statementLatex: '\\text{A badminton shuttlecock is a combination of: }',
          description: 'Geometric combination recognition.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Identify the two shapes of a shuttlecock.',
              hint: 'Frustum of a cone and a hemisphere.',
              expectedInsight: 'Frustum of a cone and hemisphere.',
              latexIntermediate: '\\text{Frustum of a cone and hemisphere}',
              options: [
                'Frustum of a cone and hemisphere',
                'Cylinder and hemisphere',
                'Cone and cylinder'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Frustum of a cone and hemisphere}',
          fullSolutionWalkthrough:
            'A badminton shuttlecock is formed by a frustum of a cone surmounted on a hemisphere [1 Mark].'
        }
      ]
    },

    // =========================================================================
    // UNIT EXERCISE 7 (Advanced Mensuration Problems - 5 Marks)
    // =========================================================================
    {
      id: 'en_sec_unit_ex_7',
      sectionNumber: 'Unit Ex 7',
      title: 'Unit Exercise 7 - Advanced Mensuration Problems (5 Marks)',
      introText:
        'Unit Exercise 7 contains advanced problems involving hollow spheres and frustums.',
      items: [
        {
          id: 'en_def_unit_ex_7',
          type: 'definition',
          number: 'UE 7',
          title: 'Volume of Hollow Hemisphere',
          statementLatex: 'V = \\frac{2}{3}\\pi (R^3 - r^3)',
          statementText: 'Volume of material equals difference between outer and inner hemispherical volumes.'
        }
      ],
      problems: [
        {
          id: 'en_prob_unit_ex_7_5mark',
          number: 'Unit Ex 7 - Q2 (5 Marks)',
          title: 'Find the volume of material in a hollow hemispherical shell whose internal and external radii are 3 cm and 5 cm',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Find the volume of a hollow hemispherical shell whose internal and external radii are } 3 \\text{ cm and } 5 \\text{ cm respectively.}',
          description: 'Sura Guide standard 5-mark hollow hemisphere volume.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'State formula V = (2/3)π(R³ - r³).',
              hint: 'R = 5 cm, r = 3 cm. R³ = 125, r³ = 27.',
              expectedInsight: 'R³ - r³ = 125 - 27 = 98.',
              latexIntermediate: 'R^3 - r^3 = 125 - 27 = 98',
              options: ['98', '100'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Calculate V = (2/3) × (22/7) × 98.',
              hint: '(2/3) × 22 × 14 = (44 × 14) / 3 = 616 / 3 = 205.33 cm³.',
              expectedInsight: '205.33 cm³.',
              latexIntermediate: 'V = \\frac{616}{3} \\approx 205.33 \\text{ cm}^3',
              options: ['205.33 cm³', '210 cm³'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'V = 205.33 \\text{ cm}^3',
          fullSolutionWalkthrough:
            'Internal radius r = 3 cm\nExternal radius R = 5 cm [1 Mark]\n\nVolume of hollow hemispherical shell:\nV = (2/3) π (R³ - r³) [1 Mark]\n= (2/3) × (22/7) × (5³ - 3³)\n= (2/3) × (22/7) × (125 - 27) [1 Mark]\n= (2/3) × (22/7) × 98 [1 Mark]\n= (2 × 22 × 14) / 3 = 616 / 3 = 205.33 cm³ [1 Mark]\nFinal Answer: 205.33 cm³ (Full 5/5 Marks Guaranteed).'
        }
      ]
    }
  ]
};
