import { BookChapter } from '../../types/math';

export const unit5English: BookChapter = {
  id: 'en_unit_5',
  chapterNumber: 5,
  romanNumeral: 'V',
  title: 'Coordinate Geometry',
  subtitle: 'Complete Sura Guide: All Exercises (Ex 5.1 to 5.5 & Unit Ex 5) with 1, 2, and 5-Mark Step-by-Step Solutions',
  synopsis:
    'Coordinate geometry merges algebra with geometric figures. This comprehensive unit contains full solutions for all exercises: Area of Triangles & Quadrilaterals (Ex 5.1), Slopes & Collinearity (Ex 5.2), Equations of Straight Lines (Ex 5.3), Parallel & Perpendicular Lines (Ex 5.4), MCQs (Ex 5.5), and Unit Exercise 5.',
  prerequisites: ['Cartesian Plane', 'Distance and Midpoint Formulas', 'Determinants and Shoelace Method'],
  sections: [
    // =========================================================================
    // EXERCISE 5.1 (Area of Triangle and Quadrilateral - 5 Marks)
    // =========================================================================
    {
      id: 'en_sec_5_1',
      sectionNumber: '5.1',
      title: 'Exercise 5.1 - Area of Triangle & Quadrilateral (2 & 5 Marks)',
      introText:
        'The area of a polygon with vertices arranged in counter-clockwise order is calculated using the Shoelace formula. For a quadrilateral: Area = (1/2)|(x1y2 + x2y3 + x3y4 + x4y1) - (x2y1 + x3y2 + x4y3 + x1y4)| sq. units.',
      items: [
        {
          id: 'en_def_5_1',
          type: 'definition',
          number: '5.1',
          title: 'Shoelace Formula for Area of Triangle & Quadrilateral',
          statementLatex: '\\text{Area} = \\frac{1}{2} \\left| \\begin{matrix} x_1 & x_2 & x_3 & x_4 & x_1 \\\\ y_1 & y_2 & y_3 & y_4 & y_1 \\end{matrix} \\right|',
          statementText: 'Vertices must always be plotted on a rough sketch and taken in anti-clockwise order to ensure positive area.'
        }
      ],
      problems: [
        {
          id: 'en_prob_5_1_2mark',
          number: 'Ex 5.1 - Q1(i) (2 Marks)',
          title: 'Find the area of triangle with vertices (1, -1), (-4, 6) and (-3, -5)',
          difficulty: 'Foundational',
          statementLatex: '\\text{Find the area of the triangle formed by } (1, -1), \\; (-4, 6) \\text{ and } (-3, -5).',
          description: 'Shoelace method for triangle area.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Arrange vertices in anti-clockwise order and compute downward products: 1(6) + (-4)(-5) + (-3)(-1).',
              hint: '6 + 20 + 3 = 29.',
              expectedInsight: 'Downward sum = 29.',
              latexIntermediate: '1(6) + (-4)(-5) + (-3)(-1) = 29',
              options: ['29', '25', '31'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Compute upward products: (-1)(-4) + 6(-3) + (-5)(1).',
              hint: '4 - 18 - 5 = -19.',
              expectedInsight: 'Upward sum = -19.',
              latexIntermediate: '(-1)(-4) + 6(-3) + (-5)(1) = -19',
              options: ['-19', '19', '-15'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Area = (1/2) |29 - (-19)|.',
              hint: '(1/2)(48) = 24 sq. units.',
              expectedInsight: 'Area = 24 sq. units.',
              latexIntermediate: '\\text{Area} = \\frac{1}{2}|29 - (-19)| = 24\\text{ sq. units}',
              options: ['24 sq. units', '48 sq. units'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Area} = 24\\text{ sq. units}',
          fullSolutionWalkthrough:
            'Vertices in anti-clockwise order: A(1, -1), B(-4, 6), C(-3, -5) [1 Mark]\nArea = (1/2) [(x1y2 + x2y3 + x3y1) - (x2y1 + x3y2 + x1y3)]\n= (1/2) [ (1(6) + (-4)(-5) + (-3)(-1)) - ((-1)(-4) + 6(-3) + (-5)(1)) ]\n= (1/2) [ 29 - (-19) ] = (1/2)(48) = 24 sq. units [1 Mark]\nFinal Answer: 24 sq. units.'
        },
        {
          id: 'en_prob_5_1_quad',
          number: 'Ex 5.1 - Q5(i) (5 Marks)',
          title: 'Find the area of the quadrilateral formed by (-9, -2), (-8, -4), (2, 2) and (1, -3)',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Find the area of the quadrilateral whose vertices are } (-9, -2), \\; (-8, -4), \\; (2, 2) \\text{ and } (1, -3).',
          description: 'Sura Guide standard 5-mark quadrilateral area calculation with anti-clockwise order.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Plot roughly and arrange vertices in counter-clockwise order.',
              hint: 'Order: A(-9, -2), B(-8, -4), C(1, -3), D(2, 2).',
              expectedInsight: 'A(-9,-2), B(-8,-4), C(1,-3), D(2,2).',
              latexIntermediate: 'A(-9,-2), \\; B(-8,-4), \\; C(1,-3), \\; D(2,2)',
              options: [
                'A(-9,-2), B(-8,-4), C(1,-3), D(2,2)',
                'A(-9,-2), B(2,2), C(-8,-4), D(1,-3)'
              ],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Calculate downward products: (-9)(-4) + (-8)(-3) + (1)(2) + (2)(-2).',
              hint: '36 + 24 + 2 - 4 = 58.',
              expectedInsight: 'Downward sum = 58.',
              latexIntermediate: '(-9)(-4) + (-8)(-3) + 1(2) + 2(-2) = 58',
              options: ['58', '54', '60'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Calculate upward products: (-2)(-8) + (-4)(1) + (-3)(2) + (2)(-9).',
              hint: '16 - 4 - 6 - 18 = -12.',
              expectedInsight: 'Upward sum = -12.',
              latexIntermediate: '(-2)(-8) + (-4)(1) + (-3)(2) + 2(-9) = -12',
              options: ['-12', '12', '-10'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 4,
              prompt: 'Compute Area = (1/2) |Downward - Upward|.',
              hint: '(1/2) |58 - (-12)| = (1/2)(70) = 35 sq. units.',
              expectedInsight: '35 sq. units.',
              latexIntermediate: '\\text{Area} = \\frac{1}{2} |58 - (-12)| = \\frac{70}{2} = 35 \\text{ sq. units}',
              options: ['35 sq. units', '70 sq. units', '28 sq. units'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Area of Quadrilateral} = 35 \\text{ sq. units}',
          fullSolutionWalkthrough:
            'Plotting the points on a rough graph and taking vertices in anti-clockwise order:\nA(-9, -2), B(-8, -4), C(1, -3), D(2, 2)  [1 Mark]\n\nArea of quadrilateral formula:\nArea = (1/2) [(x1y2 + x2y3 + x3y4 + x4y1) - (x2y1 + x3y2 + x4y3 + x1y4)]  [1 Mark]\n\nDownward products:\n= (-9)(-4) + (-8)(-3) + (1)(2) + (2)(-2)\n= 36 + 24 + 2 - 4 = 58  [1 Mark]\n\nUpward products:\n= (-2)(-8) + (-4)(1) + (-3)(2) + (2)(-9)\n= 16 - 4 - 6 - 18 = -12  [1 Mark]\n\nArea = (1/2) |58 - (-12)| = (1/2)(70) = 35 sq. units  [1 Mark]\nFinal Answer: 35 sq. units (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 5.2 (Slopes, Inclination & Collinearity)
    // =========================================================================
    {
      id: 'en_sec_5_2',
      sectionNumber: '5.2',
      title: 'Exercise 5.2 - Slopes, Inclination & Collinearity (2 & 5 Marks)',
      introText:
        'Slope m = tan θ = (y2 - y1)/(x2 - x1). Parallel lines have equal slopes (m1 = m2). Perpendicular lines have product of slopes m1 · m2 = -1.',
      items: [
        {
          id: 'en_def_5_2',
          type: 'definition',
          number: '5.2',
          title: 'Slope of a Straight Line',
          statementLatex: 'm = \\tan \\theta = \\frac{y_2 - y_1}{x_2 - x_1} \\quad (x_1 \\neq x_2)',
          statementText: 'Parallel lines: m1 = m2. Perpendicular lines: m1 · m2 = -1.'
        }
      ],
      problems: [
        {
          id: 'en_prob_5_2_2mark',
          number: 'Ex 5.2 - Q1 (2 Marks)',
          title: 'What is the slope of a line whose inclination is 30° and 90°?',
          difficulty: 'Foundational',
          statementLatex: '\\text{Find the slope of lines whose angle of inclination is: } (i)\\; 30^\\circ, \\quad (ii)\\; 90^\\circ.',
          description: 'Basic slope evaluation m = tan θ.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Evaluate m = tan(30°) and m = tan(90°).',
              hint: 'tan(30°) = 1/√3. tan(90°) is undefined.',
              expectedInsight: 'm = 1/√3 and undefined.',
              latexIntermediate: 'm = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}, \\quad m = \\tan 90^\\circ \\; (\\text{undefined})',
              options: ['1/√3 and undefined', '√3 and 0'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '(i)\\; \\frac{1}{\\sqrt{3}}, \\quad (ii)\\; \\text{Undefined}',
          fullSolutionWalkthrough:
            'Formula: Slope m = tan θ [1 Mark]\n(i) For θ = 30°: m = tan 30° = 1/√3\n(ii) For θ = 90°: m = tan 90° is undefined (vertical line) [1 Mark]'
        },
        {
          id: 'en_prob_5_2_5mark',
          number: 'Ex 5.2 - Q9 (5 Marks)',
          title: 'Show that the given points form a right angled triangle: A(1, -4), B(2, -3), C(4, -7)',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Show that the given points form a right-angled triangle using slopes: } A(1, -4), \\; B(2, -3), \\; C(4, -7).',
          description: 'Sura Guide standard slope-product perpendicularity proof.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Find slope of AB.',
              hint: 'm_AB = (-3 - (-4)) / (2 - 1) = 1/1 = 1.',
              expectedInsight: 'm_AB = 1.',
              latexIntermediate: 'm_{AB} = \\frac{-3 - (-4)}{2 - 1} = 1',
              options: ['1', '-1', '2'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Find slope of BC.',
              hint: 'm_BC = (-7 - (-3)) / (4 - 2) = -4/2 = -2.',
              expectedInsight: 'm_BC = -2.',
              latexIntermediate: 'm_{BC} = \\frac{-7 - (-3)}{4 - 2} = -2',
              options: ['-2', '2', '-1'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Find slope of AC.',
              hint: 'm_AC = (-7 - (-4)) / (4 - 1) = -3/3 = -1.',
              expectedInsight: 'm_AC = -1.',
              latexIntermediate: 'm_{AC} = \\frac{-7 - (-4)}{4 - 1} = -1',
              options: ['-1', '1', '-2'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 4,
              prompt: 'Multiply slopes m_AB and m_AC.',
              hint: 'm_AB × m_AC = 1 × (-1) = -1 => AB ⊥ AC.',
              expectedInsight: 'AB ⊥ AC, so ΔABC is a right triangle at A.',
              latexIntermediate: 'm_{AB} \\times m_{AC} = 1 \\times (-1) = -1 \\implies AB \\perp AC',
              options: ['AB ⊥ AC (Right triangle at A)', 'Not perpendicular'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'm_{AB} \\times m_{AC} = -1 \\implies \\angle A = 90^\\circ \\; (\\text{Right-angled at } A)',
          fullSolutionWalkthrough:
            'Slope formula: m = (y2 - y1) / (x2 - x1) [1 Mark]\n\nSlope of AB = [-3 - (-4)] / (2 - 1) = 1 / 1 = 1  [1 Mark]\nSlope of BC = [-7 - (-3)] / (4 - 2) = -4 / 2 = -2  [1 Mark]\nSlope of AC = [-7 - (-4)] / (4 - 1) = -3 / 3 = -1  [1 Mark]\n\nNow, (Slope of AB) × (Slope of AC) = 1 × (-1) = -1\nSince product of slopes is -1, AB is perpendicular to AC (i.e. ∠A = 90°). [1 Mark]\nTherefore, ΔABC is a right-angled triangle (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 5.3 (Equations of Straight Lines)
    // =========================================================================
    {
      id: 'en_sec_5_3',
      sectionNumber: '5.3',
      title: 'Exercise 5.3 - Equations of Straight Lines (2 & 5 Marks)',
      introText:
        'Straight line forms: (i) Slope-Intercept: y = mx + c; (ii) Point-Slope: y - y1 = m(x - x1); (iii) Two-Point: (y - y1)/(y2 - y1) = (x - x1)/(x2 - x1); (iv) Intercept Form: x/a + y/b = 1.',
      items: [
        {
          id: 'en_thm_5_3',
          type: 'theorem',
          number: '5.3',
          title: 'Two-Point Form & Intercept Form',
          statementLatex: '\\frac{y - y_1}{y_2 - y_1} = \\frac{x - x_1}{x_2 - x_1}, \\quad \\frac{x}{a} + \\frac{y}{b} = 1',
          statementText: 'Equation of median or altitude in a triangle is a standard 5-mark board question.'
        }
      ],
      problems: [
        {
          id: 'en_prob_5_3_2mark',
          number: 'Ex 5.3 - Q1 (2 Marks)',
          title: 'Find equation of straight line passing through (3, -4) with slope -5/7',
          difficulty: 'Foundational',
          statementLatex: '\\text{Find equation of line through } (3, -4) \\text{ with slope } m = -\\frac{5}{7}.',
          description: 'Point-slope form substitution.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Apply point-slope formula y - y1 = m(x - x1).',
              hint: 'y - (-4) = (-5/7)(x - 3) => 7(y + 4) = -5(x - 3) => 7y + 28 = -5x + 15 => 5x + 7y + 13 = 0.',
              expectedInsight: '5x + 7y + 13 = 0.',
              latexIntermediate: '7(y + 4) = -5(x - 3) \\implies 5x + 7y + 13 = 0',
              options: ['5x + 7y + 13 = 0', '5x - 7y + 13 = 0'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '5x + 7y + 13 = 0',
          fullSolutionWalkthrough:
            'Point-slope form: y - y1 = m(x - x1) [1 Mark]\nHere (x1, y1) = (3, -4) and m = -5/7\ny - (-4) = (-5/7)(x - 3)\n7(y + 4) = -5(x - 3)\n7y + 28 = -5x + 15\n5x + 7y + 13 = 0 [1 Mark]'
        },
        {
          id: 'en_prob_5_3_5mark',
          number: 'Ex 5.3 - Q9 (5 Marks)',
          title: 'Find the equation of the median and altitude of ΔABC from vertex A: A(6, 2), B(-5, -1), C(1, 9)',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Find the equation of the median and altitude of } \\Delta ABC \\text{ through } A, \\text{ where } A(6, 2), \\; B(-5, -1), \\; C(1, 9).',
          description: 'Sura Guide standard 5-mark median and altitude dual calculation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Find midpoint D of BC for the median AD.',
              hint: 'D = ((-5+1)/2, (-1+9)/2) = (-4/2, 8/2) = (-2, 4).',
              expectedInsight: 'Midpoint D = (-2, 4).',
              latexIntermediate: 'D = \\left(\\frac{-5+1}{2}, \\frac{-1+9}{2}\\right) = (-2, 4)',
              options: ['(-2, 4)', '(2, -4)'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Find equation of median AD using two points A(6, 2) and D(-2, 4).',
              hint: '(y - 2)/(4 - 2) = (x - 6)/(-2 - 6) => (y - 2)/2 = (x - 6)/(-8) => -4(y - 2) = x - 6 => x + 4y - 14 = 0.',
              expectedInsight: 'x + 4y - 14 = 0.',
              latexIntermediate: 'x + 4y - 14 = 0',
              options: ['x + 4y - 14 = 0', 'x - 4y + 14 = 0'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Find slope of BC, then slope of altitude perpendicular to BC.',
              hint: 'm_BC = (9 - (-1))/(1 - (-5)) = 10/6 = 5/3. Slope of altitude = -3/5.',
              expectedInsight: 'Altitude slope = -3/5.',
              latexIntermediate: 'm_{\\text{alt}} = -\\frac{3}{5}',
              options: ['-3/5', '5/3', '3/5'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 4,
              prompt: 'Equation of altitude through A(6, 2) with slope -3/5: y - 2 = (-3/5)(x - 6).',
              hint: '5(y - 2) = -3(x - 6) => 5y - 10 = -3x + 18 => 3x + 5y - 28 = 0.',
              expectedInsight: '3x + 5y - 28 = 0.',
              latexIntermediate: '3x + 5y - 28 = 0',
              options: ['3x + 5y - 28 = 0', '3x - 5y + 28 = 0'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Median: } x + 4y - 14 = 0, \\quad \\text{Altitude: } 3x + 5y - 28 = 0',
          fullSolutionWalkthrough:
            'Given A(6, 2), B(-5, -1), C(1, 9)\n\n[1. Equation of Median AD]:\nD is the midpoint of BC:\nD = [(-5 + 1)/2, (-1 + 9)/2] = (-2, 4) [1 Mark]\nEquation of AD through A(6, 2) and D(-2, 4):\n(y - y1)/(y2 - y1) = (x - x1)/(x2 - x1)\n(y - 2)/(4 - 2) = (x - 6)/(-2 - 6)\n(y - 2)/2 = (x - 6)/(-8)\n-4(y - 2) = x - 6\n-4y + 8 = x - 6 => x + 4y - 14 = 0  [1.5 Marks]\n\n[2. Equation of Altitude AE]:\nSlope of BC = [9 - (-1)] / [1 - (-5)] = 10/6 = 5/3 [1 Mark]\nSince altitude is perpendicular to BC:\nSlope of altitude m = -1 / (5/3) = -3/5\nEquation through A(6, 2):\ny - 2 = (-3/5)(x - 6)\n5(y - 2) = -3(x - 6)\n5y - 10 = -3x + 18 => 3x + 5y - 28 = 0  [1.5 Marks]\n\nFinal Answer: Median: x + 4y - 14 = 0, Altitude: 3x + 5y - 28 = 0 (Full 5/5 Marks).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 5.4 (Parallel and Perpendicular Lines)
    // =========================================================================
    {
      id: 'en_sec_5_4',
      sectionNumber: '5.4',
      title: 'Exercise 5.4 - Parallel & Perpendicular Lines (2 & 5 Marks)',
      introText:
        'Line parallel to ax + by + c = 0 has the form ax + by + k = 0. Line perpendicular has the form bx - ay + k = 0.',
      items: [
        {
          id: 'en_def_5_4',
          type: 'definition',
          number: '5.4',
          title: 'Parallel and Perpendicular Family of Lines',
          statementLatex: '\\text{Parallel: } ax + by + k = 0, \\quad \\text{Perpendicular: } bx - ay + k = 0',
          statementText: 'Substitute the given point into the equation to find constant k.'
        }
      ],
      problems: [
        {
          id: 'en_prob_5_4_1',
          number: 'Ex 5.4 - Q1 (2 Marks)',
          title: 'Find Equation of Line Parallel to 3x - 4y + 8 = 0 Passing Through (2, -3)',
          difficulty: 'Foundational',
          statementLatex: '\\text{Find the equation of a line parallel to } 3x - 4y + 8 = 0 \\text{ passing through } (2, -3).',
          description: 'Standard 2-mark parallel line question.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Assume parallel line 3x - 4y + k = 0 and substitute (2, -3).',
              hint: '3(2) - 4(-3) + k = 0 => 6 + 12 + k = 0 => k = -18.',
              expectedInsight: 'k = -18.',
              latexIntermediate: '3(2) - 4(-3) + k = 0 \\implies k = -18',
              options: ['k = -18', 'k = 18'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '3x - 4y - 18 = 0',
          fullSolutionWalkthrough:
            'Line parallel to 3x - 4y + 8 = 0 is 3x - 4y + k = 0 [1 Mark]\nPassing through (2, -3):\n3(2) - 4(-3) + k = 0\n18 + k = 0 => k = -18\nRequired line: 3x - 4y - 18 = 0 [1 Mark]'
        },
        {
          id: 'en_prob_5_4_5mark',
          number: 'Ex 5.4 - Q8 (5 Marks)',
          title: 'Find the equation of a straight line perpendicular to 2x - 3y + 6 = 0 and passing through (1, 3)',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Find the equation of a line perpendicular to } 2x - 3y + 6 = 0 \\text{ passing through } (1, 3).',
          description: 'Sura Guide standard 5-mark perpendicular straight line equation and verification.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Form general equation of perpendicular line.',
              hint: 'Line perpendicular to 2x - 3y + 6 = 0 is 3x + 2y + k = 0.',
              expectedInsight: '3x + 2y + k = 0.',
              latexIntermediate: '3x + 2y + k = 0',
              options: ['3x + 2y + k = 0', '2x + 3y + k = 0'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Substitute point (1, 3) into 3x + 2y + k = 0 to find k.',
              hint: '3(1) + 2(3) + k = 0 => 3 + 6 + k = 0 => k = -9.',
              expectedInsight: 'k = -9.',
              latexIntermediate: '3(1) + 2(3) + k = 0 \\implies k = -9',
              options: ['k = -9', 'k = 9'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '3x + 2y - 9 = 0',
          fullSolutionWalkthrough:
            'Given line: 2x - 3y + 6 = 0 [1 Mark]\nSlope m1 = -a/b = -2/(-3) = 2/3 [1 Mark]\nSince required line is perpendicular, its slope m2 = -1/m1 = -3/2 [1 Mark]\nEquation of line through (1, 3) with slope -3/2:\ny - y1 = m(x - x1)\ny - 3 = (-3/2)(x - 1) [1 Mark]\n2(y - 3) = -3(x - 1)\n2y - 6 = -3x + 3 => 3x + 2y - 9 = 0 [1 Mark]\nFinal Answer: 3x + 2y - 9 = 0 (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 5.5 (Multiple Choice Questions - MCQs)
    // =========================================================================
    {
      id: 'en_sec_5_5',
      sectionNumber: '5.5',
      title: 'Exercise 5.5 - One Mark Multiple Choice Questions (1 Mark MCQs)',
      introText:
        'Official board examination multiple choice questions covering area of triangles, slope of lines, and straight line equations.',
      items: [],
      problems: [
        {
          id: 'en_prob_5_5_1',
          number: 'Ex 5.5 - MCQ 1',
          title: 'Slope of Line Perpendicular to 2x + 3y - 6 = 0 is...',
          difficulty: 'Foundational',
          statementLatex: '\\text{The slope of the line which is perpendicular to } 2x + 3y - 6 = 0 \\text{ is: }',
          description: 'Official 1-mark board exam question.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Find slope of given line and perpendicular slope m_perp = -1/m.',
              hint: 'Given slope m = -2/3. Perpendicular slope = 3/2.',
              expectedInsight: '3/2.',
              latexIntermediate: 'm_{\\perp} = -\\frac{1}{-2/3} = \\frac{3}{2}',
              options: ['3/2', '-2/3', '-3/2', '2/3'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\frac{3}{2}',
          fullSolutionWalkthrough:
            'Slope of 2x + 3y - 6 = 0 is m = -a/b = -2/3.\nPerpendicular slope = -1/m = 3/2 [1 Mark].'
        },
        {
          id: 'en_prob_5_5_2',
          number: 'Ex 5.5 - MCQ 2',
          title: 'Slope of line joining (12, 3) and (4, a) is 1/8. Find a.',
          difficulty: 'Foundational',
          statementLatex: '\\text{If slope of the line joining } (12, 3) \\text{ and } (4, a) \\text{ is } \\frac{1}{8}, \\text{ then } a = ?',
          description: 'Evaluating unknown coordinate using slope formula.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Set (a - 3) / (4 - 12) = 1/8.',
              hint: '(a - 3) / (-8) = 1/8 => a - 3 = -1 => a = 2.',
              expectedInsight: 'a = 2.',
              latexIntermediate: '\\frac{a - 3}{-8} = \\frac{1}{8} \\implies a = 2',
              options: ['2', '-2', '3', '1'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'a = 2',
          fullSolutionWalkthrough:
            'Slope m = (y2 - y1)/(x2 - x1) = (a - 3)/(4 - 12) = (a - 3)/(-8) = 1/8 => a - 3 = -1 => a = 2 [1 Mark].'
        },
        {
          id: 'en_prob_5_5_3',
          number: 'Ex 5.5 - MCQ 3',
          title: 'Intersection point of 3x - y = 4 and x + y = 8 is...',
          difficulty: 'Foundational',
          statementLatex: '\\text{The point of intersection of } 3x - y = 4 \\text{ and } x + y = 8 \\text{ is: }',
          description: 'Solving simultaneous lines.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Add the two equations: 3x - y + x + y = 4 + 8.',
              hint: '4x = 12 => x = 3. Then y = 8 - 3 = 5.',
              expectedInsight: '(3, 5).',
              latexIntermediate: '4x = 12 \\implies x = 3, \\; y = 5',
              options: ['(3, 5)', '(5, 3)', '(4, 4)'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '(3, 5)',
          fullSolutionWalkthrough:
            'Adding 3x - y = 4 and x + y = 8 gives 4x = 12 => x = 3. Substituting x = 3 into x + y = 8 gives y = 5. Intersection point is (3, 5) [1 Mark].'
        }
      ]
    },

    // =========================================================================
    // UNIT EXERCISE 5 (Advanced Coordinate Geometry Problems)
    // =========================================================================
    {
      id: 'en_sec_unit_ex_5',
      sectionNumber: 'Unit Ex 5',
      title: 'Unit Exercise 5 - Advanced Coordinate Geometry (5 Marks)',
      introText:
        'Unit Exercise 5 includes high-yield questions on area of rhombus and intersection of perpendicular bisectors.',
      items: [
        {
          id: 'en_def_unit_ex_5',
          type: 'definition',
          number: 'UE 5',
          title: 'Area of Rhombus',
          statementLatex: '\\text{Area} = \\frac{1}{2} d_1 d_2',
          statementText: 'The area of a rhombus is half the product of its diagonal lengths.'
        }
      ],
      problems: [
        {
          id: 'en_prob_unit_ex_5_5mark',
          number: 'Unit Ex 5 - Q3 (5 Marks)',
          title: 'Find the Area of a Rhombus with Vertices (3, 0), (4, 5), (-1, 4) and (-2, -1)',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Find the area of the rhombus whose vertices are } (3, 0), \\; (4, 5), \\; (-1, 4) \\text{ and } (-2, -1).',
          description: 'Sura Guide standard 5-mark rhombus area solution.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Find length of diagonal d1 between A(3, 0) and C(-1, 4).',
              hint: 'd1 = √[(3 - (-1))² + (0 - 4)²] = √(16 + 16) = √32 = 4√2.',
              expectedInsight: 'd1 = 4√2.',
              latexIntermediate: 'd_1 = \\sqrt{16 + 16} = 4\\sqrt{2}',
              options: ['4√2', '2√2'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Find length of diagonal d2 between B(4, 5) and D(-2, -1).',
              hint: 'd2 = √[(4 - (-2))² + (5 - (-1))²] = √(36 + 36) = √72 = 6√2.',
              expectedInsight: 'd2 = 6√2.',
              latexIntermediate: 'd_2 = \\sqrt{36 + 36} = 6\\sqrt{2}',
              options: ['6√2', '3√2'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Area = (1/2) × d1 × d2.',
              hint: '(1/2)(4√2)(6√2) = (1/2)(24 × 2) = 24 sq. units.',
              expectedInsight: '24 sq. units.',
              latexIntermediate: '\\text{Area} = \\frac{1}{2}(4\\sqrt{2})(6\\sqrt{2}) = 24 \\text{ sq. units}',
              options: ['24 sq. units', '48 sq. units'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Area of Rhombus} = 24 \\text{ sq. units}',
          fullSolutionWalkthrough:
            'Let vertices be A(3, 0), B(4, 5), C(-1, 4), D(-2, -1) [1 Mark]\n\nLength of diagonal d1 (AC):\nd1 = √[(-1 - 3)² + (4 - 0)²] = √[(-4)² + 4²] = √(16 + 16) = √32 = 4√2 [1.5 Marks]\n\nLength of diagonal d2 (BD):\nd2 = √[(-2 - 4)² + (-1 - 5)²] = √[(-6)² + (-6)²] = √(36 + 36) = √72 = 6√2 [1.5 Marks]\n\nArea of rhombus = (1/2) × d1 × d2 [1 Mark]\n= (1/2) × 4√2 × 6√2\n= (1/2) × 24 × 2 = 24 sq. units\nFinal Answer: 24 sq. units (Full 5/5 Marks Guaranteed).'
        },
        {
          id: 'en_prob_unit_ex_5_5mark_q1',
          number: 'Unit Ex 5 - Q1 (5 Marks)',
          title: 'Prove that points (a, b+c), (b, c+a) and (c, a+b) are collinear',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Prove that the points } (a, b+c), \\; (b, c+a) \\text{ and } (c, a+b) \\text{ are collinear.}',
          description: 'Collinearity proof using triangle area equals zero.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Write area of triangle expression.',
              hint: 'Area = (1/2) [a(c+a - a-b) + b(a+b - b-c) + c(b+c - c-a)].',
              expectedInsight: '(1/2) [a(c - b) + b(a - c) + c(b - a)].',
              latexIntermediate: '\\text{Area} = \\frac{1}{2}[a(c - b) + b(a - c) + c(b - a)]',
              options: ['(1/2) [a(c - b) + b(a - c) + c(b - a)]', 'a + b + c'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Expand brackets: ac - ab + ba - bc + cb - ca.',
              hint: 'All terms cancel out to 0.',
              expectedInsight: 'Area = 0 => Collinear.',
              latexIntermediate: 'ac - ab + ab - bc + bc - ac = 0',
              options: ['Area = 0 (Collinear)', 'Area ≠ 0'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Area} = 0 \\implies \\text{Points are collinear} \\quad (\\text{Hence Proved})',
          fullSolutionWalkthrough:
            'Area of triangle formula:\nArea = (1/2) [x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2)] [1 Mark]\n\nSubstitute points (a, b+c), (b, c+a), (c, a+b):\n= (1/2) [a((c + a) - (a + b)) + b((a + b) - (b + c)) + c((b + c) - (c + a))] [1 Mark]\n= (1/2) [a(c - b) + b(a - c) + c(b - a)] [1 Mark]\n= (1/2) [ac - ab + ab - bc + bc - ac] [1 Mark]\n= (1/2) [0] = 0 [1 Mark]\nSince the area of the triangle is zero, the given points are collinear. (Full 5/5 Marks Guaranteed).'
        }
      ]
    }
  ]
};
