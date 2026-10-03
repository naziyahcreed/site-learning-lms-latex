import { BookChapter } from '../../types/math';

export const unit8English: BookChapter = {
  id: 'en_unit_8',
  chapterNumber: 8,
  romanNumeral: 'VIII',
  title: 'Statistics and Probability',
  subtitle: 'Complete Sura Guide: All Exercises (Ex 8.1 to 8.5 & Unit Ex 8) with 1, 2, and 5-Mark Step-by-Step Solutions',
  synopsis:
    'Statistics and Probability empower us to quantify variation, consistency, and chance. This comprehensive unit provides step-by-step Sura-guide solutions for all exercises in Class 10 Tamil Nadu syllabus: Range & Standard Deviation (Ex 8.1), Coefficient of Variation & Consistency (Ex 8.2), Basic Probability (Ex 8.3), Addition Theorem of Probability (Ex 8.4), MCQs (Ex 8.5), and Unit Exercise 8.',
  prerequisites: ['Arithmetic Mean & Frequency Distributions', 'Sample Spaces & Set Operations', 'Square Root Calculations'],
  sections: [
    // =========================================================================
    // EXERCISE 8.1 (Range & Standard Deviation - 2 Marks and 5 Marks)
    // =========================================================================
    {
      id: 'en_sec_8_1',
      sectionNumber: '8.1',
      title: 'Exercise 8.1 - Range, Variance & Standard Deviation (2 & 5 Marks)',
      introText:
        'Range R = L - S and Coefficient of Range = (L - S)/(L + S). Standard deviation σ measures dispersion around the mean. Using the formula for first n natural numbers: σ = √[(n² - 1)/12]. Variance = σ².',
      items: [
        {
          id: 'en_def_8_1_range',
          type: 'definition',
          number: '8.1a',
          title: 'Range and Coefficient of Range',
          statementLatex: 'R = L - S, \\quad \\text{Coefficient of Range} = \\frac{L - S}{L + S}',
          statementText: 'L is the largest value and S is the smallest value in the given dataset.'
        },
        {
          id: 'en_def_8_1',
          type: 'definition',
          number: '8.1b',
          title: 'Standard Deviation Formula (First n Natural Numbers)',
          statementLatex: '\\sigma = \\sqrt{\\frac{n^2 - 1}{12}}',
          statementText: 'Direct formula for the standard deviation of the first n positive integers.'
        }
      ],
      problems: [
        {
          id: 'en_prob_8_1_2mark',
          number: 'Ex 8.1 - Q1 (2 Marks)',
          title: 'Find the range and coefficient of range of the following data: 25, 67, 48, 53, 18, 39, 44',
          difficulty: 'Foundational',
          statementLatex: '\\text{Find the range and coefficient of range of: } 25, 67, 48, 53, 18, 39, 44.',
          description: 'Sura Guide standard 2-mark range and coefficient of range problem.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Identify the largest value (L) and the smallest value (S) from the data.',
              hint: 'Looking at {25, 67, 48, 53, 18, 39, 44}, largest is 67 and smallest is 18.',
              expectedInsight: 'L = 67, S = 18.',
              latexIntermediate: 'L = 67, \\quad S = 18',
              options: ['L = 67, S = 18', 'L = 67, S = 25'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Calculate Range R = L - S and Coefficient of Range = (L - S)/(L + S).',
              hint: 'R = 67 - 18 = 49. Coefficient = 49 / (67 + 18) = 49 / 85 ≈ 0.576.',
              expectedInsight: 'Range = 49, Coefficient of Range ≈ 0.576.',
              latexIntermediate: 'R = 67 - 18 = 49, \\quad \\text{Coeff} = \\frac{49}{85} \\approx 0.576',
              options: ['R = 49, Coeff = 49/85', 'R = 50, Coeff = 50/85'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Range } R = 49, \\quad \\text{Coefficient of Range} = \\frac{49}{85} \\approx 0.576',
          fullSolutionWalkthrough:
            'Given data: 25, 67, 48, 53, 18, 39, 44\nLargest value L = 67, Smallest value S = 18\n\n1) Range R = L - S = 67 - 18 = 49  [1 Mark]\n2) Coefficient of Range = (L - S) / (L + S) = (67 - 18) / (67 + 18) = 49 / 85 ≈ 0.576  [1 Mark]\n\nFinal Answer: Range = 49, Coefficient of Range = 49/85 ≈ 0.576 (Full 2/2 Marks Guaranteed).'
        },
        {
          id: 'en_prob_8_1_5mark',
          number: 'Ex 8.1 - Q4 (5 Marks)',
          title: 'Find the standard deviation of first 21 natural numbers',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Find the standard deviation of the first } 21 \\text{ natural numbers.}',
          description: 'Sura Guide standard 5-mark formula derivation for first n natural numbers.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'State formula for standard deviation of first n natural numbers: σ = √[(n² - 1)/12].',
              hint: 'For first n natural numbers, σ = √[(n² - 1)/12]. Here n = 21.',
              expectedInsight: 'σ = √[(21² - 1)/12].',
              latexIntermediate: '\\sigma = \\sqrt{\\frac{n^2 - 1}{12}} = \\sqrt{\\frac{21^2 - 1}{12}}',
              options: ['\\sqrt{\\frac{21^2 - 1}{12}}', '\\sqrt{\\frac{21^2 + 1}{12}}'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Calculate 21² - 1 and divide by 12.',
              hint: '441 - 1 = 440; 440 / 12 = 110 / 3 ≈ 36.67.',
              expectedInsight: '36.67.',
              latexIntermediate: '\\frac{440}{12} = \\frac{110}{3} \\approx 36.67',
              options: ['36.67', '40.00'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Take the square root of 36.67.',
              hint: '√36.67 ≈ 6.05.',
              expectedInsight: 'σ ≈ 6.05.',
              latexIntermediate: '\\sigma = \\sqrt{36.67} \\approx 6.05',
              options: ['6.05', '6.25', '5.85'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\sigma \\approx 6.05',
          fullSolutionWalkthrough:
            'Step 1: Formula for standard deviation of first n natural numbers:\nσ = √[(n² - 1) / 12]  [1 Mark]\n\nStep 2: Substitute n = 21:\nσ = √[(21² - 1) / 12] = √[(441 - 1) / 12]  [1 Mark]\n\nStep 3: Simplify inside the radical:\n= √(440 / 12) = √(110 / 3)  [1 Mark]\n\nStep 4: Decimal evaluation:\n110 / 3 = 36.667  [1 Mark]\n\nStep 5: Square root evaluation:\nσ = √36.667 ≈ 6.05  [1 Mark]\nFinal Answer: Standard Deviation σ ≈ 6.05 (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 8.2 (Coefficient of Variation & Consistency - 2 & 5 Marks)
    // =========================================================================
    {
      id: 'en_sec_8_2',
      sectionNumber: '8.2',
      title: 'Exercise 8.2 - Coefficient of Variation & Consistency (2 & 5 Marks)',
      introText:
        'Coefficient of Variation (C.V.) = (σ / x̄) × 100%. The distribution with a smaller C.V. is more consistent, stable, and homogeneous.',
      items: [
        {
          id: 'en_def_8_2',
          type: 'definition',
          number: '8.2',
          title: 'Coefficient of Variation',
          statementLatex: 'C.V. = \\frac{\\sigma}{\\bar{x}} \\times 100\\%',
          statementText: 'A dimensionless relative measure of dispersion used to compare two different distributions.'
        }
      ],
      problems: [
        {
          id: 'en_prob_8_2_2mark',
          number: 'Ex 8.2 - Q1 (2 Marks)',
          title: 'If the mean and standard deviation of a dataset are 30 and 6 respectively, find the coefficient of variation.',
          difficulty: 'Foundational',
          statementLatex: '\\text{Given } \\bar{x} = 30 \\text{ and } \\sigma = 6, \\text{ find the coefficient of variation (C.V.).}',
          description: 'Sura Guide standard 2-mark formula substitution for C.V.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'State formula for C.V. and substitute values.',
              hint: 'C.V. = (σ / x̄) × 100% = (6 / 30) × 100%.',
              expectedInsight: 'C.V. = 20%.',
              latexIntermediate: 'C.V. = \\frac{6}{30} \\times 100\\% = \\frac{1}{5} \\times 100\\% = 20\\%',
              options: ['20%', '25%'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'C.V. = 20\\%',
          fullSolutionWalkthrough:
            'Given: Mean x̄ = 30, Standard Deviation σ = 6\n\nFormula: Coefficient of Variation C.V. = (σ / x̄) × 100%  [1 Mark]\nC.V. = (6 / 30) × 100% = (1 / 5) × 100% = 20%  [1 Mark]\n\nFinal Answer: C.V. = 20% (Full 2/2 Marks Guaranteed).'
        },
        {
          id: 'en_prob_8_2_5mark',
          number: 'Ex 8.2 - Q6 (5 Marks)',
          title: 'The mean and SD of marks of two groups are: Group A (x̄=44, σ=5.1) and Group B (x̄=60, σ=8.2). Which is more consistent?',
          difficulty: 'Intermediate',
          statementLatex: '\\text{The mean and standard deviation of marks of two groups are: Group A: } \\bar{x}_1 = 44, \\; \\sigma_1 = 5.1; \\quad \\text{Group B: } \\bar{x}_2 = 60, \\; \\sigma_2 = 8.2. \\\\ \\text{Find which group is more consistent.}',
          description: 'Sura Guide standard 5-mark consistency comparison using C.V.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Calculate C.V. for Group A: C.V.(A) = (σ₁ / x̄₁) × 100%.',
              hint: '(5.1 / 44) × 100 = 510 / 44 ≈ 11.59%.',
              expectedInsight: 'C.V.(A) ≈ 11.59%.',
              latexIntermediate: 'C.V.(A) = \\frac{5.1}{44} \\times 100\\% \\approx 11.59\\%',
              options: ['11.59%', '13.67%'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Calculate C.V. for Group B: C.V.(B) = (σ₂ / x̄₂) × 100%.',
              hint: '(8.2 / 60) × 100 = 820 / 60 ≈ 13.67%.',
              expectedInsight: 'C.V.(B) ≈ 13.67%.',
              latexIntermediate: 'C.V.(B) = \\frac{8.2}{60} \\times 100\\% \\approx 13.67\\%',
              options: ['13.67%', '11.59%'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Compare C.V.(A) and C.V.(B) and conclude consistency.',
              hint: 'Since 11.59% < 13.67%, Group A has lesser C.V. and is therefore more consistent.',
              expectedInsight: 'Group A is more consistent.',
              latexIntermediate: 'C.V.(A) < C.V.(B) \\implies \\text{Group A is more consistent}',
              options: ['Group A is more consistent', 'Group B is more consistent'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'C.V.(A) = 11.59\\%, \\quad C.V.(B) = 13.67\\% \\implies \\text{Group A is more consistent.}',
          fullSolutionWalkthrough:
            'Step 1: Write given values for Group A and formula for C.V.:\nGroup A: x̄₁ = 44, σ₁ = 5.1\nC.V. = (σ / x̄) × 100%  [1 Mark]\n\nStep 2: Compute C.V. for Group A:\nC.V.(A) = (5.1 / 44) × 100% = 510 / 44 ≈ 11.59%  [1 Mark]\n\nStep 3: Write given values for Group B:\nGroup B: x̄₂ = 60, σ₂ = 8.2  [1 Mark]\n\nStep 4: Compute C.V. for Group B:\nC.V.(B) = (8.2 / 60) × 100% = 820 / 60 ≈ 13.67%  [1 Mark]\n\nStep 5: Comparison and Conclusion:\nSince C.V.(A) < C.V.(B) (11.59% < 13.67%), the group with smaller C.V. is more consistent.\nTherefore, Group A is more consistent than Group B.  [1 Mark]\nFinal Answer: Group A is more consistent (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 8.3 (Basic Probability - 2 & 5 Marks)
    // =========================================================================
    {
      id: 'en_sec_8_3',
      sectionNumber: '8.3',
      title: 'Exercise 8.3 - Basic Probability & Sample Spaces (2 & 5 Marks)',
      introText:
        'Probability of an event E: P(E) = n(E)/n(S) where n(S) is total sample space outcomes. For two dice rolled together, n(S) = 6 × 6 = 36. For three coins tossed, n(S) = 2³ = 8.',
      items: [
        {
          id: 'en_def_8_3',
          type: 'definition',
          number: '8.3',
          title: 'Classical Probability',
          statementLatex: 'P(E) = \\frac{n(E)}{n(S)}, \\quad 0 \\le P(E) \\le 1',
          statementText: 'The probability of an impossible event is 0; the probability of a certain event is 1.'
        }
      ],
      problems: [
        {
          id: 'en_prob_8_3_2mark',
          number: 'Ex 8.3 - Q1 (2 Marks)',
          title: 'Three fair coins are tossed together. Find the probability of getting: (i) at least two heads, (ii) at most one head.',
          difficulty: 'Foundational',
          statementLatex: '\\text{Three fair coins are tossed together. Find the probability of: } \\\\ (i)\\; \\text{at least two heads}, \\quad (ii)\\; \\text{at most one head.}',
          description: 'Sura Guide standard 2-mark 3-coin sample space problem.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Write sample space S and total outcomes n(S) for 3 coins.',
              hint: 'S = {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT} => n(S) = 8.',
              expectedInsight: 'n(S) = 8.',
              latexIntermediate: 'S = \\{HHH, HHT, HTH, HTT, THH, THT, TTH, TTT\\}, \\quad n(S) = 8',
              options: ['n(S) = 8', 'n(S) = 6'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Calculate probabilities for (i) at least 2 heads and (ii) at most 1 head.',
              hint: 'At least 2 heads: {HHH, HHT, HTH, THH} (4 outcomes => 4/8 = 1/2). At most 1 head: {HTT, THT, TTH, TTT} (4 outcomes => 4/8 = 1/2).',
              expectedInsight: 'P(at least 2 heads) = 1/2, P(at most 1 head) = 1/2.',
              latexIntermediate: 'P(A) = \\frac{4}{8} = \\frac{1}{2}, \\quad P(B) = \\frac{4}{8} = \\frac{1}{2}',
              options: ['Both are 1/2', '1/4 and 3/4'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '(i)\\; \\frac{1}{2}, \\quad (ii)\\; \\frac{1}{2}',
          fullSolutionWalkthrough:
            'When 3 coins are tossed together:\nSample space S = {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT} => n(S) = 8\n\n(i) Event A: Getting at least two heads (2 or 3 heads):\nA = {HHH, HHT, HTH, THH} => n(A) = 4\nP(A) = n(A)/n(S) = 4/8 = 1/2  [1 Mark]\n\n(ii) Event B: Getting at most one head (0 or 1 head):\nB = {HTT, THT, TTH, TTT} => n(B) = 4\nP(B) = n(B)/n(S) = 4/8 = 1/2  [1 Mark]\n\nFinal Answer: (i) 1/2, (ii) 1/2 (Full 2/2 Marks Guaranteed).'
        },
        {
          id: 'en_prob_8_3_5mark',
          number: 'Ex 8.3 - Q4 (5 Marks)',
          title: 'Two unbiased dice are rolled. Find probability that: (i) doublet, (ii) product of digits is prime, (iii) sum is 8',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Two unbiased dice are rolled. Find the probability of getting: } \\\\ (i)\\; \\text{a doublet}, \\quad (ii)\\; \\text{the product as a prime number}, \\quad (iii)\\; \\text{the sum of numbers is 8.}',
          description: 'Sura Guide standard 5-mark two-dice probability distribution.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Write sample space S and total outcomes n(S).',
              hint: 'n(S) = 6 × 6 = 36.',
              expectedInsight: 'n(S) = 36.',
              latexIntermediate: 'n(S) = 36',
              options: ['n(S) = 36', 'n(S) = 12'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Event A: Doublet. Find n(A) and P(A).',
              hint: 'A = {(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)} => n(A) = 6 => P(A) = 6/36 = 1/6.',
              expectedInsight: 'P(A) = 1/6.',
              latexIntermediate: 'P(A) = \\frac{6}{36} = \\frac{1}{6}',
              options: ['1/6', '1/12'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Event B: Product is prime (2, 3, 5). Find n(B) and P(B).',
              hint: 'B = {(1,2),(2,1),(1,3),(3,1),(1,5),(5,1)} => n(B) = 6 => P(B) = 6/36 = 1/6.',
              expectedInsight: 'P(B) = 1/6.',
              latexIntermediate: 'P(B) = \\frac{6}{36} = \\frac{1}{6}',
              options: ['1/6', '1/9'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 4,
              prompt: 'Event C: Sum is 8. Find n(C) and P(C).',
              hint: 'C = {(2,6),(3,5),(4,4),(5,3),(6,2)} => n(C) = 5 => P(C) = 5/36.',
              expectedInsight: 'P(C) = 5/36.',
              latexIntermediate: 'P(C) = \\frac{5}{36}',
              options: ['5/36', '6/36'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '(i)\\; \\frac{1}{6}, \\quad (ii)\\; \\frac{1}{6}, \\quad (iii)\\; \\frac{5}{36}',
          fullSolutionWalkthrough:
            'Step 1: Sample space definition:\nWhen two dice are rolled:\nS = {(1,1), (1,2), ..., (6,6)} => Total outcomes n(S) = 36  [1 Mark]\n\nStep 2: (i) Event A = Doublet:\nA = {(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)} => n(A) = 6\nP(A) = n(A)/n(S) = 6/36 = 1/6  [1 Mark]\n\nStep 3: (ii) Event B = Product is a prime number (primes are 2, 3, 5):\nB = {(1,2), (2,1), (1,3), (3,1), (1,5), (5,1)} => n(B) = 6  [1 Mark]\n\nStep 4: Compute P(B):\nP(B) = n(B)/n(S) = 6/36 = 1/6  [1 Mark]\n\nStep 5: (iii) Event C = Sum of numbers is 8:\nC = {(2,6), (3,5), (4,4), (5,3), (6,2)} => n(C) = 5\nP(C) = n(C)/n(S) = 5/36  [1 Mark]\n\nFinal Answer: (i) 1/6, (ii) 1/6, (iii) 5/36 (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 8.4 (Addition Theorem of Probability - 2 & 5 Marks)
    // =========================================================================
    {
      id: 'en_sec_8_4',
      sectionNumber: '8.4',
      title: 'Exercise 8.4 - Addition Theorem of Probability (2 & 5 Marks)',
      introText:
        'Addition Theorem: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). If A and B are mutually exclusive, P(A ∩ B) = 0 and P(A ∪ B) = P(A) + P(B).',
      items: [
        {
          id: 'en_thm_8_4',
          type: 'theorem',
          number: '8.4',
          title: 'Addition Theorem of Probability',
          statementLatex: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
          statementText: 'Used to find the probability that either event A or event B or both occur.'
        }
      ],
      problems: [
        {
          id: 'en_prob_8_4_2mark',
          number: 'Ex 8.4 - Q1 (2 Marks)',
          title: 'If P(A) = 0.37, P(B) = 0.42, and P(A ∩ B) = 0.09, find P(A ∪ B)',
          difficulty: 'Foundational',
          statementLatex: '\\text{If } P(A) = 0.37, \\; P(B) = 0.42, \\; P(A \\cap B) = 0.09, \\text{ find } P(A \\cup B).',
          description: 'Sura Guide direct 2-mark formula application of addition theorem.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'State Addition Theorem and substitute the given values.',
              hint: 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.37 + 0.42 - 0.09.',
              expectedInsight: 'P(A ∪ B) = 0.70.',
              latexIntermediate: 'P(A \\cup B) = 0.37 + 0.42 - 0.09 = 0.79 - 0.09 = 0.70',
              options: ['0.70', '0.88'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'P(A \\cup B) = 0.70',
          fullSolutionWalkthrough:
            'Given: P(A) = 0.37, P(B) = 0.42, P(A ∩ B) = 0.09\n\nBy Addition Theorem of Probability:\nP(A ∪ B) = P(A) + P(B) - P(A ∩ B)  [1 Mark]\nP(A ∪ B) = 0.37 + 0.42 - 0.09 = 0.79 - 0.09 = 0.70  [1 Mark]\n\nFinal Answer: P(A ∪ B) = 0.70 (Full 2/2 Marks Guaranteed).'
        },
        {
          id: 'en_prob_8_4_5mark',
          number: 'Ex 8.4 - Q5 (5 Marks)',
          title: 'A card is drawn from a well-shuffled pack of 52 cards. Find probability of it being a spade or a king.',
          difficulty: 'Intermediate',
          statementLatex: '\\text{A card is drawn from a pack of } 52 \\text{ cards. Find the probability of getting a spade or a king.}',
          description: 'Sura Guide standard 5-mark addition theorem layout.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Total cards n(S) = 52. Let A = spade, B = king. Find n(A) and n(B).',
              hint: 'There are 13 spades and 4 kings.',
              expectedInsight: 'n(A) = 13, n(B) = 4.',
              latexIntermediate: 'n(A) = 13, \\quad n(B) = 4, \\quad n(S) = 52',
              options: ['n(A) = 13, n(B) = 4', 'n(A) = 26, n(B) = 4'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Find n(A ∩ B) (spade and king).',
              hint: 'There is exactly 1 king of spades: n(A ∩ B) = 1.',
              expectedInsight: 'n(A ∩ B) = 1.',
              latexIntermediate: 'n(A \\cap B) = 1',
              options: ['n(A ∩ B) = 1', 'n(A ∩ B) = 2'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Apply addition theorem: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).',
              hint: '13/52 + 4/52 - 1/52 = 16/52 = 4/13.',
              expectedInsight: 'P(A ∪ B) = 4/13.',
              latexIntermediate: 'P(A \\cup B) = \\frac{13 + 4 - 1}{52} = \\frac{16}{52} = \\frac{4}{13}',
              options: ['4/13', '17/52', '1/4'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'P(\\text{Spade or King}) = \\frac{4}{13}',
          fullSolutionWalkthrough:
            'Step 1: Total sample space:\nTotal number of cards n(S) = 52  [1 Mark]\n\nStep 2: Event A = Drawing a spade:\nNumber of spade cards n(A) = 13\nP(A) = n(A)/n(S) = 13/52  [1 Mark]\n\nStep 3: Event B = Drawing a king:\nNumber of king cards n(B) = 4\nP(B) = n(B)/n(S) = 4/52  [1 Mark]\n\nStep 4: Event A ∩ B = King of spades:\nNumber of cards that are both spade and king n(A ∩ B) = 1\nP(A ∩ B) = 1/52  [1 Mark]\n\nStep 5: Apply Addition Theorem:\nP(A ∪ B) = P(A) + P(B) - P(A ∩ B)\n= 13/52 + 4/52 - 1/52 = 16/52 = 4/13  [1 Mark]\nFinal Answer: P(Spade or King) = 4/13 (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 8.5 (Multiple Choice Questions - MCQs)
    // =========================================================================
    {
      id: 'en_sec_8_5',
      sectionNumber: '8.5',
      title: 'Exercise 8.5 - One Mark Multiple Choice Questions (1 Mark MCQs)',
      introText:
        'Official board examination objective questions for Unit 8 covering range, variance, coefficient of variation, and probability.',
      items: [],
      problems: [
        {
          id: 'en_prob_8_5_1',
          number: 'Ex 8.5 - MCQ 1',
          title: 'Which of the following is not a measure of dispersion?',
          difficulty: 'Foundational',
          statementLatex: '\\text{Which of the following is NOT a measure of dispersion?}',
          description: 'Official 1-mark board exam question.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Recall measures of dispersion (Range, SD, Variance) vs measures of central tendency.',
              hint: 'Arithmetic Mean is a measure of central tendency, not dispersion.',
              expectedInsight: 'Arithmetic Mean.',
              latexIntermediate: '\\text{Arithmetic Mean}',
              options: ['Arithmetic Mean', 'Range', 'Variance', 'Standard Deviation'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Arithmetic Mean}',
          fullSolutionWalkthrough:
            'Range, Standard Deviation, and Variance are measures of dispersion. Arithmetic Mean is a measure of central tendency. Answer: Arithmetic Mean [1 Mark].'
        },
        {
          id: 'en_prob_8_5_2',
          number: 'Ex 8.5 - MCQ 2',
          title: 'The variance of the first 20 natural numbers is...',
          difficulty: 'Foundational',
          statementLatex: '\\text{The variance of the first } 20 \\text{ natural numbers is: }',
          description: 'Official 1-mark board exam variance calculation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Use the variance formula for first n natural numbers: σ² = (n² - 1)/12 with n = 20.',
              hint: '(20² - 1) / 12 = (400 - 1) / 12 = 399 / 12 = 33.25.',
              expectedInsight: '33.25.',
              latexIntermediate: '\\sigma^2 = \\frac{20^2 - 1}{12} = \\frac{399}{12} = 33.25',
              options: ['33.25', '32.25', '35.00', '30.00'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '33.25',
          fullSolutionWalkthrough:
            'Variance of first n natural numbers = (n² - 1) / 12\nFor n = 20: (20² - 1) / 12 = (400 - 1) / 12 = 399 / 12 = 33.25. Answer: 33.25 [1 Mark].'
        },
        {
          id: 'en_prob_8_5_3',
          number: 'Ex 8.5 - MCQ 3',
          title: 'If P(A) is the probability of an event A, then P(A) + P(not A) is equal to...',
          difficulty: 'Foundational',
          statementLatex: '\\text{If } P(A) \\text{ is the probability of an event } A, \\text{ then } P(A) + P(\\bar{A}) = \\dots',
          description: 'Official 1-mark board exam complementary probability rule.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Recall the sum of probabilities of complementary events.',
              hint: 'P(A) + P(Ā) = 1.',
              expectedInsight: '1.',
              latexIntermediate: 'P(A) + P(\\bar{A}) = 1',
              options: ['1', '0', '0.5', '2'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '1',
          fullSolutionWalkthrough:
            'The sum of the probability of an event and its complementary event is always 1: P(A) + P(Ā) = 1. Answer: 1 [1 Mark].'
        }
      ]
    },

    // =========================================================================
    // UNIT EXERCISE 8 (Advanced Statistics and Probability - 2 & 5 Marks)
    // =========================================================================
    {
      id: 'en_sec_unit_ex_8',
      sectionNumber: 'Unit Ex 8',
      title: 'Unit Exercise 8 - Advanced Statistics & Probability (2 & 5 Marks)',
      introText:
        'Unit Exercise 8 contains board-level questions on corrected mean and standard deviation, as well as property of standard deviation under change of origin.',
      items: [
        {
          id: 'en_def_unit_ex_8',
          type: 'definition',
          number: 'UE 8',
          title: 'Corrected Variance Formula',
          statementLatex: '\\sigma^2 = \\frac{\\sum x_{\\text{corr}}^2}{n} - (\\bar{x}_{\\text{corr}})^2',
          statementText: 'Subtract incorrect values and add correct values to recalculate sum and sum of squares.'
        }
      ],
      problems: [
        {
          id: 'en_prob_unit_ex_8_2mark',
          number: 'Unit Ex 8 - Q2 (2 Marks)',
          title: 'If the standard deviation of a dataset is 4.5 and each value is decreased by 5, find the new standard deviation.',
          difficulty: 'Foundational',
          statementLatex: '\\text{If } \\sigma = 4.5 \\text{ and each observation is decreased by } 5, \\text{ find the new standard deviation.}',
          description: 'Sura Guide standard 2-mark property: SD is unaffected by change of origin.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Recall whether standard deviation changes when a constant is added or subtracted from every value.',
              hint: 'Standard deviation is independent of change of origin. Adding or subtracting a constant does NOT change the standard deviation.',
              expectedInsight: 'The new standard deviation remains 4.5.',
              latexIntermediate: '\\sigma_{\\text{new}} = \\sigma_{\\text{old}} = 4.5',
              options: ['4.5', '-0.5', '9.5'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\sigma_{\\text{new}} = 4.5',
          fullSolutionWalkthrough:
            'Property: Standard deviation is independent of change of origin.\nWhen each observation is decreased by a constant c = 5, the dispersion around the mean remains unchanged.\nTherefore, the new standard deviation = 4.5.  [2 Marks]\n\nFinal Answer: New Standard Deviation = 4.5 (Full 2/2 Marks Guaranteed).'
        },
        {
          id: 'en_prob_unit_ex_8_5mark',
          number: 'Unit Ex 8 - Q1 (5 Marks)',
          title: 'The mean and SD of 100 observations were calculated as 40 and 5.1. Later it was discovered that one value 40 was wrongly taken as 50. Find corrected mean and SD.',
          difficulty: 'Advanced',
          statementLatex: '\\text{The mean and standard deviation of } 100 \\text{ observations were found to be } 40 \\text{ and } 5.1. \\text{ If one observation was wrongly copied as 50 instead of 40, find the correct mean and SD.}',
          description: 'Classic 5-mark board exam error correction calculation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Find incorrect ∑x and correct ∑x.',
              hint: 'Incorrect ∑x = 100 × 40 = 4000. Correct ∑x = 4000 - 50 + 40 = 3990.',
              expectedInsight: 'Correct ∑x = 3990.',
              latexIntermediate: '\\sum x_{\\text{corr}} = 4000 - 50 + 40 = 3990',
              options: ['3990', '4010'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Find corrected mean x̄_corr.',
              hint: '3990 / 100 = 39.9.',
              expectedInsight: 'Corrected mean = 39.9.',
              latexIntermediate: '\\bar{x}_{\\text{corr}} = \\frac{3990}{100} = 39.9',
              options: ['39.9', '40.1'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Find incorrect ∑x²: σ² = (∑x²/100) - 40² => 5.1² = 26.01 => ∑x² = 100(1600 + 26.01) = 162601.',
              hint: 'Correct ∑x² = 162601 - 50² + 40² = 162601 - 2500 + 1600 = 161701.',
              expectedInsight: 'Correct ∑x² = 161701.',
              latexIntermediate: '\\sum x_{\\text{corr}}^2 = 161701',
              options: ['161701', '162601'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 4,
              prompt: 'Compute corrected standard deviation.',
              hint: 'σ_corr = √[161701/100 - (39.9)²] = √[1617.01 - 1592.01] = √25 = 5.',
              expectedInsight: 'Corrected SD = 5.',
              latexIntermediate: '\\sigma_{\\text{corr}} = \\sqrt{1617.01 - 1592.01} = \\sqrt{25} = 5',
              options: ['5', '5.1', '4.9'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Corrected Mean} = 39.9, \\quad \\text{Corrected SD} = 5',
          fullSolutionWalkthrough:
            'Step 1: Write given values and compute incorrect sum:\nGiven n = 100, x̄ = 40, σ = 5.1\nIncorrect observation = 50, Correct observation = 40\nIncorrect ∑x = n × x̄ = 100 × 40 = 4000  [1 Mark]\n\nStep 2: Corrected Mean:\nCorrect ∑x = 4000 - 50 + 40 = 3990\nCorrected mean x̄_corr = 3990 / 100 = 39.9  [1 Mark]\n\nStep 3: Compute incorrect sum of squares:\nσ² = (∑x² / n) - (x̄)²\n(5.1)² = (∑x² / 100) - 40²\n26.01 = (∑x² / 100) - 1600 => Incorrect ∑x² = 100 × 1626.01 = 162601  [1 Mark]\n\nStep 4: Compute corrected sum of squares:\nCorrect ∑x² = 162601 - 50² + 40² = 162601 - 2500 + 1600 = 161701  [1 Mark]\n\nStep 5: Compute corrected standard deviation:\nσ_corr² = (161701 / 100) - (39.9)² = 1617.01 - 1592.01 = 25\nσ_corr = √25 = 5  [1 Mark]\n\nFinal Answer: Corrected Mean = 39.9, Corrected SD = 5 (Full 5/5 Marks Guaranteed).'
        }
      ]
    }
  ]
};
