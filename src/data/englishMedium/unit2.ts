import { BookChapter } from '../../types/math';

export const unit2English: BookChapter = {
  id: 'en_unit_2',
  chapterNumber: 2,
  romanNumeral: 'II',
  title: 'Numbers and Sequences',
  subtitle: 'Complete Sura Guide: All Exercises (Ex 2.1 to 2.10 & Unit Ex 2) with 1, 2, and 5-Mark Step-by-Step Solutions',
  synopsis:
    'Numbers and Sequences introduces foundational number theory, modular arithmetic, arithmetic progressions, geometric progressions, special series, and comprehensive board exam problem solving according to Sura Guide standards.',
  prerequisites: ['Euclidean Division', 'Prime Numbers & Prime Factorization', 'Patterns in Numbers', 'Algebraic Sums'],
  sections: [
    // =========================================================================
    // EXERCISE 2.1 (Euclid's Division Lemma & Algorithm - HCF)
    // =========================================================================
    {
      id: 'en_sec_2_1',
      sectionNumber: '2.1',
      title: 'Exercise 2.1 - Euclid’s Division Lemma & HCF (2 & 5 Marks)',
      introText:
        'Euclid’s Division Lemma states that for any two positive integers a and b, there exist unique integers q and r such that a = bq + r, 0 ≤ r < b. Repeated division yields the HCF (GCD).',
      items: [
        {
          id: 'en_thm_2_1',
          type: 'theorem',
          number: '2.1',
          title: 'Euclid’s Division Lemma',
          statementLatex: 'a = bq + r, \\quad 0 \\le r < b',
          statementText: 'Given positive integers a and b, there exist unique integers q and r satisfying this relation.'
        }
      ],
      problems: [
        {
          id: 'en_prob_2_1_2mark',
          number: 'Ex 2.1 - Q1 (2 Marks)',
          title: 'Find all positive integers which when divided by 3 leaves remainder 2',
          difficulty: 'Foundational',
          statementLatex: '\\text{Find all positive integers which when divided by 3 leaves remainder 2.}',
          description: 'Apply Euclid’s Division Lemma with divisor b = 3 and remainder r = 2.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Express the number N in the form bq + r with b = 3 and r = 2.',
              hint: 'N = 3q + 2, where q is a non-negative integer (q ≥ 0).',
              expectedInsight: 'N = 3q + 2, q = 0, 1, 2, 3, ...',
              latexIntermediate: 'N = 3q + 2, \\quad q \\in \\{0, 1, 2, 3, \\dots\\}',
              options: ['N = 3q + 2, q ≥ 0', 'N = 2q + 3, q ≥ 1'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Substitute q = 0, 1, 2, 3, ... to find the positive integers.',
              hint: 'q=0 => 2; q=1 => 5; q=2 => 8; q=3 => 11; ...',
              expectedInsight: 'The positive integers are 2, 5, 8, 11, 14, ...',
              latexIntermediate: 'N \\in \\{2, 5, 8, 11, 14, \\dots\\}',
              options: ['2, 5, 8, 11, 14, ...', '3, 5, 7, 9, ...'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{The positive integers are } 2, 5, 8, 11, 14, \\dots',
          fullSolutionWalkthrough:
            'By Euclid’s Division Lemma:\na = bq + r, where 0 ≤ r < b [1 Mark]\nHere divisor b = 3 and remainder r = 2.\nTherefore, the required numbers are of the form:\na = 3q + 2, where q is any whole number (q = 0, 1, 2, 3, ...)\nWhen q = 0: a = 3(0) + 2 = 2\nWhen q = 1: a = 3(1) + 2 = 5\nWhen q = 2: a = 3(2) + 2 = 8\nWhen q = 3: a = 3(3) + 2 = 11\nHence, the positive integers are 2, 5, 8, 11, 14, ... [1 Mark]\nFinal Answer: 2, 5, 8, 11, 14, ... (Full 2/2 Marks Guaranteed).'
        },
        {
          id: 'en_prob_2_1_5mark',
          number: 'Ex 2.1 - Q6(i) (5 Marks)',
          title: 'Find HCF of 340 and 412 using Euclid’s Division Algorithm',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Use Euclid’s division algorithm to find the HCF of } 340 \\text{ and } 412.',
          description: 'Sura Guide standard 5-mark division algorithm layout.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Apply division lemma on 412 and 340: 412 = 340 × q + r.',
              hint: '412 = 340(1) + 72.',
              expectedInsight: '412 = 340(1) + 72, remainder = 72 ≠ 0.',
              latexIntermediate: '412 = 340(1) + 72',
              options: ['412 = 340(1) + 72', '412 = 340(1) + 62'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Apply division lemma on 340 and 72.',
              hint: '340 = 72(4) + 52.',
              expectedInsight: '340 = 72(4) + 52, remainder = 52 ≠ 0.',
              latexIntermediate: '340 = 72(4) + 52',
              options: ['340 = 72(4) + 52', '340 = 72(4) + 42'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Apply lemma on 72 and 52, then 52 and 20, then 20 and 12, then 12 and 8, then 8 and 4.',
              hint: '72 = 52(1) + 20; 52 = 20(2) + 12; 20 = 12(1) + 8; 12 = 8(1) + 4; 8 = 4(2) + 0.',
              expectedInsight: 'Remainder = 0; divisor 4 is HCF.',
              latexIntermediate: '8 = 4(2) + 0 \\implies \\text{HCF} = 4',
              options: ['HCF = 4', 'HCF = 8', 'HCF = 2'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{HCF}(340, 412) = 4',
          fullSolutionWalkthrough:
            'By Euclid’s Division Algorithm:\nStep 1: 412 = 340(1) + 72 (Remainder 72 ≠ 0) [1 Mark]\nStep 2: 340 = 72(4) + 52 (Remainder 52 ≠ 0) [1 Mark]\nStep 3: 72 = 52(1) + 20 (Remainder 20 ≠ 0) [1 Mark]\nStep 4: 52 = 20(2) + 12 (Remainder 12 ≠ 0)\nStep 5: 20 = 12(1) + 8 (Remainder 8 ≠ 0)\nStep 6: 12 = 8(1) + 4 (Remainder 4 ≠ 0) [1 Mark]\nStep 7: 8 = 4(2) + 0 (Remainder = 0)\nSince the remainder is 0, the divisor at this stage is 4.\nHence, HCF(340, 412) = 4. [1 Mark]\nFinal Answer: 4 (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 2.2 (Fundamental Theorem of Arithmetic)
    // =========================================================================
    {
      id: 'en_sec_2_2',
      sectionNumber: '2.2',
      title: 'Exercise 2.2 - Fundamental Theorem of Arithmetic (2 & 5 Marks)',
      introText:
        'Every composite number can be uniquely expressed as a product of primes, up to the order of factors. Numbers of the form 4ⁿ cannot end with digit 0 because they lack the prime factor 5.',
      items: [
        {
          id: 'en_thm_2_2',
          type: 'theorem',
          number: '2.2',
          title: 'Fundamental Theorem of Arithmetic',
          statementLatex: 'n = p_1^{a_1} p_2^{a_2} \\cdots p_k^{a_k}',
          statementText: 'Prime factorization is unique except for the order in which prime factors occur.'
        }
      ],
      problems: [
        {
          id: 'en_prob_2_2_1',
          number: 'Ex 2.2 - Q1 (2 Marks)',
          title: 'For what values of n (n ∈ N) can 4ⁿ end with digit 0?',
          difficulty: 'Foundational',
          statementLatex: '\\text{For what values of natural number } n, \\; 4^n \\text{ can end with the digit 0?}',
          description: 'Standard 2-mark conceptual question.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Express 4ⁿ in its prime factorization.',
              hint: '4ⁿ = (2²)ⁿ = 2^(2n).',
              expectedInsight: '4ⁿ contains only prime factor 2.',
              latexIntermediate: '4^n = (2^2)^n = 2^{2n}',
              options: ['4ⁿ = 2^(2n)', '4ⁿ = 2ⁿ × 5ⁿ'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Does 4ⁿ contain prime factor 5?',
              hint: 'For a number to end in 0, it must have both 2 and 5 as prime factors.',
              expectedInsight: 'No value of n exists.',
              latexIntermediate: '5 \\nmid 4^n \\implies \\text{Cannot end with 0}',
              options: ['No value of n exists', 'For all even n'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{No natural number } n \\text{ exists such that } 4^n \\text{ ends with digit 0.}',
          fullSolutionWalkthrough:
            '4ⁿ = (2 × 2)ⁿ = 2^(2n) [1 Mark]\nThe only prime factor of 4ⁿ is 2.\nAny number ending in digit 0 must be divisible by 10 = 2 × 5, so 5 must be a prime factor.\nSince 5 is not a prime factor of 4ⁿ, 4ⁿ can never end with the digit 0 for any natural number n. [1 Mark]'
        },
        {
          id: 'en_prob_2_2_5mark',
          number: 'Ex 2.2 - Q2 (5 Marks)',
          title: 'If 13824 = 2ᵃ × 3ᵇ, then find a and b and HCF of 13824 and 432',
          difficulty: 'Intermediate',
          statementLatex: '\\text{If } 13824 = 2^a \\times 3^b, \\text{ then find } a \\text{ and } b. \\text{ Hence find HCF}(13824, 432).',
          description: 'Prime factorization method to solve exponents and determine highest common factor.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Perform prime factorization of 13824 by dividing by 2 repeatedly.',
              hint: '13824 / 2 = 6912 / 2 = 3456 / 2 = 1728 / 2 = 864 / 2 = 432 / 2 = 216 / 2 = 108 / 2 = 54 / 2 = 27 = 3³.',
              expectedInsight: '13824 = 2⁹ × 3³.',
              latexIntermediate: '13824 = 2^9 \\times 3^3',
              options: ['13824 = 2⁹ × 3³', '13824 = 2⁸ × 3⁴'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Compare with 2ᵃ × 3ᵇ to find values of a and b.',
              hint: 'a = 9, b = 3.',
              expectedInsight: 'a = 9, b = 3.',
              latexIntermediate: 'a = 9, \\quad b = 3',
              options: ['a = 9, b = 3', 'a = 8, b = 3'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Factorize 432 and find HCF using lowest powers of common prime factors.',
              hint: '432 = 2⁴ × 3³. HCF = 2⁴ × 3³ = 16 × 27 = 432.',
              expectedInsight: 'HCF(13824, 432) = 432.',
              latexIntermediate: '\\text{HCF} = 2^4 \\times 3^3 = 432',
              options: ['432', '216', '144'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'a = 9, \\; b = 3, \\quad \\text{HCF}(13824, 432) = 432',
          fullSolutionWalkthrough:
            'Step 1: Prime factorization of 13824:\n13824 = 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 3 × 3 × 3\n13824 = 2⁹ × 3³ [2 Marks]\n\nStep 2: Comparing with 2ᵃ × 3ᵇ:\na = 9, b = 3 [1 Mark]\n\nStep 3: Prime factorization of 432:\n432 = 2⁴ × 3³ [1 Mark]\n\nStep 4: Finding HCF:\nHCF is the product of the smallest powers of each common prime factor:\nHCF = 2⁴ × 3³ = 16 × 27 = 432 [1 Mark]\nFinal Answer: a = 9, b = 3; HCF = 432 (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 2.3 (Modular Arithmetic)
    // =========================================================================
    {
      id: 'en_sec_2_3',
      sectionNumber: '2.3',
      title: 'Exercise 2.3 - Modular Arithmetic (2 & 5 Marks)',
      introText:
        'a ≡ b (mod m) means that a - b is an integer multiple of m. In other words, a and b leave the same remainder when divided by m.',
      items: [
        {
          id: 'en_def_2_3',
          type: 'definition',
          number: '2.3',
          title: 'Congruence Modulo m',
          statementLatex: 'a \\equiv b \\pmod m \\iff m \\mid (a - b)',
          statementText: 'a is congruent to b modulo m if m divides a - b.'
        }
      ],
      problems: [
        {
          id: 'en_prob_2_3_1',
          number: 'Ex 2.3 - Q1(i) (2 Marks)',
          title: 'Find least positive value of x: 71 ≡ x (mod 8)',
          difficulty: 'Foundational',
          statementLatex: '\\text{Find the least positive value of } x \\text{ such that } 71 \\equiv x \\pmod 8.',
          description: 'Standard 2-mark modular arithmetic question.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Divide 71 by 8 to find the remainder.',
              hint: '71 = 8 × 8 + 7.',
              expectedInsight: '71 = 8(8) + 7 => x = 7.',
              latexIntermediate: '71 = 8 \\times 8 + 7 \\implies x = 7',
              options: ['x = 7', 'x = 1', 'x = 3'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'x = 7',
          fullSolutionWalkthrough:
            '71 ≡ x (mod 8) means 71 - x is divisible by 8. [1 Mark]\n71 = 8(8) + 7\n71 - 7 = 64, which is divisible by 8.\nTherefore, the least positive value of x is 7. [1 Mark]'
        },
        {
          id: 'en_prob_2_3_5mark',
          number: 'Ex 2.3 - Q5 & Q7 (5 Marks)',
          title: 'Clock Arithmetic & Linear Congruence: Time 100 hours after 7 a.m. & Solve 5x ≡ 4 (mod 6)',
          difficulty: 'Intermediate',
          statementLatex: '(i)\\; \\text{What is the time 100 hours after 7 a.m.?} \\\\ (ii)\\; \\text{Solve: } 5x \\equiv 4 \\pmod 6.',
          description: 'Sura Guide standard 5-mark modular arithmetic word problem and linear congruence.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'For part (i): Compute 100 modulo 24 (since a clock repeats every 24 hours).',
              hint: '100 = 24 × 4 + 4 => 100 ≡ 4 (mod 24).',
              expectedInsight: '100 ≡ 4 (mod 24).',
              latexIntermediate: '100 = 24(4) + 4 \\implies 100 \\equiv 4 \\pmod{24}',
              options: ['100 ≡ 4 (mod 24)', '100 ≡ 6 (mod 24)'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Add the remainder 4 hours to the starting time 7 a.m.',
              hint: '7 + 4 = 11 a.m.',
              expectedInsight: 'Time is 11 a.m.',
              latexIntermediate: '7 + 4 = 11 \\text{ a.m.}',
              options: ['11 a.m.', '11 p.m.'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'For part (ii): Solve 5x ≡ 4 (mod 6) => 5x - 4 = 6k.',
              hint: '5x - 4 is a multiple of 6. For k = 1: 5x = 10 => x = 2.',
              expectedInsight: 'x = 2, 8, 14, ...',
              latexIntermediate: '5x - 4 = 6k \\implies x = 2, 8, 14, \\dots',
              options: ['x = 2, 8, 14, ...', 'x = 1, 7, 13, ...'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '(i)\\; 11\\text{ a.m.}, \\quad (ii)\\; x = 2, 8, 14, \\dots',
          fullSolutionWalkthrough:
            'Part (i): Time 100 hours after 7 a.m.:\nA standard clock repeats in cycles of 24 hours.\n100 = 24 × 4 + 4  [1 Mark]\nSo 100 ≡ 4 (mod 24).\nRequired time = 7 a.m. + 4 hours = 11 a.m. [1 Mark]\n\nPart (ii): Solve 5x ≡ 4 (mod 6):\n5x - 4 = 6k for some integer k [1 Mark]\n5x = 6k + 4 => x = (6k + 4) / 5\nWhen k = 1: x = (6(1) + 4) / 5 = 10 / 5 = 2  [1 Mark]\nWhen k = 6: x = (6(6) + 4) / 5 = 40 / 5 = 8\nWhen k = 11: x = (6(11) + 4) / 5 = 70 / 5 = 14\nHence, solutions are x = 2, 8, 14, ... [1 Mark]\nFinal Answer: 11 a.m. and x = 2, 8, 14, ... (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 2.4 (Sequences)
    // =========================================================================
    {
      id: 'en_sec_2_4',
      sectionNumber: '2.4',
      title: 'Exercise 2.4 - Sequences & Finding Terms (2 Marks)',
      introText:
        'A sequence is an arrangement of numbers in a definite order according to some rule. The n-th term is denoted by aₙ.',
      items: [
        {
          id: 'en_def_2_4',
          type: 'definition',
          number: '2.4',
          title: 'Sequence Term Formula',
          statementLatex: 'a_n = f(n), \\quad n \\in \\mathbb{N}',
          statementText: 'Evaluating a sequence at index n gives the n-th term.'
        }
      ],
      problems: [
        {
          id: 'en_prob_2_4_2mark_q1',
          number: 'Ex 2.4 - Q1(i) (2 Marks)',
          title: 'Find the next three terms of sequence 1/2, 1/6, 1/10, 1/14, ...',
          difficulty: 'Foundational',
          statementLatex: '\\text{Find the next three terms of: } \\frac{1}{2}, \\frac{1}{6}, \\frac{1}{10}, \\frac{1}{14}, \\dots',
          description: 'Identify the pattern in denominators and determine the successive terms.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Observe the denominators: 2, 6, 10, 14, ...',
              hint: 'Each denominator increases by 4.',
              expectedInsight: 'Common difference of denominators is 4.',
              latexIntermediate: 'd = 4 \\implies \\text{Next denominators are } 18, 22, 26',
              options: ['18, 22, 26', '16, 18, 20'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\frac{1}{18}, \\; \\frac{1}{22}, \\; \\frac{1}{26}',
          fullSolutionWalkthrough:
            'The numerators are all 1.\nThe denominators are 2, 6, 10, 14, ... which is an AP with first term 2 and common difference 4. [1 Mark]\nNext three denominators are:\n14 + 4 = 18\n18 + 4 = 22\n22 + 4 = 26\nTherefore, the next three terms are 1/18, 1/22, 1/26. [1 Mark]'
        },
        {
          id: 'en_prob_2_4_1',
          number: 'Ex 2.4 - Q3(i) (2 Marks)',
          title: 'Find the indicated terms of aₙ = (n² - 1)/(n + 3); find a₄ and a₆',
          difficulty: 'Foundational',
          statementLatex: 'a_n = \\frac{n^2 - 1}{n + 3}. \\quad \\text{Find } a_4 \\text{ and } a_6.',
          description: 'Standard 2-mark substitution into sequence term formula.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Substitute n = 4 into aₙ.',
              hint: 'a₄ = (4² - 1)/(4 + 3) = (16 - 1)/7 = 15/7.',
              expectedInsight: 'a₄ = 15/7.',
              latexIntermediate: 'a_4 = \\frac{16 - 1}{7} = \\frac{15}{7}',
              options: ['15/7', '16/7'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Substitute n = 6 into aₙ.',
              hint: 'a₆ = (6² - 1)/(6 + 3) = (36 - 1)/9 = 35/9.',
              expectedInsight: 'a₆ = 35/9.',
              latexIntermediate: 'a_6 = \\frac{36 - 1}{9} = \\frac{35}{9}',
              options: ['35/9', '36/9'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'a_4 = \\frac{15}{7}, \\quad a_6 = \\frac{35}{9}',
          fullSolutionWalkthrough:
            'Given aₙ = (n² - 1)/(n + 3)\nFor n = 4: a₄ = (4² - 1)/(4 + 3) = 15/7 [1 Mark]\nFor n = 6: a₆ = (6² - 1)/(6 + 3) = 35/9 [1 Mark]\nFinal Answer: a₄ = 15/7, a₆ = 35/9.'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 2.5 (Arithmetic Progression - AP)
    // =========================================================================
    {
      id: 'en_sec_2_5',
      sectionNumber: '2.5',
      title: 'Exercise 2.5 - Arithmetic Progression (AP) (2 & 5 Marks)',
      introText:
        'An Arithmetic Progression (AP) is a sequence in which each term is obtained by adding a fixed constant d to the preceding term: tₙ = a + (n - 1)d. Number of terms: n = (l - a)/d + 1.',
      items: [
        {
          id: 'en_def_2_5',
          type: 'definition',
          number: '2.5',
          title: 'Arithmetic Progression Formulas',
          statementLatex: 't_n = a + (n-1)d, \\quad n = \\frac{l - a}{d} + 1',
          statementText: 'Three consecutive terms in an AP can be taken as a - d, a, a + d.'
        }
      ],
      problems: [
        {
          id: 'en_prob_2_5_2mark',
          number: 'Ex 2.5 - Q2 (2 Marks)',
          title: 'First term a = 5, common difference d = 6. Find the AP and the 19th term.',
          difficulty: 'Foundational',
          statementLatex: '\\text{First term } a = 5, \\; d = 6. \\quad \\text{Find the AP and } t_{19}.',
          description: 'Construct the AP and evaluate the 19th term using general formula.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Write the general form of the AP: a, a+d, a+2d, ...',
              hint: '5, 5+6, 5+12, ... => 5, 11, 17, ...',
              expectedInsight: 'AP is 5, 11, 17, ...',
              latexIntermediate: 'a, a+d, a+2d \\implies 5, 11, 17, \\dots',
              options: ['5, 11, 17, ...', '5, 10, 15, ...'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Calculate t₁₉ = a + (19 - 1)d.',
              hint: 't₁₉ = 5 + 18(6) = 5 + 108 = 113.',
              expectedInsight: 't₁₉ = 113.',
              latexIntermediate: 't_{19} = 5 + 18(6) = 113',
              options: ['113', '108', '115'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{AP: } 5, 11, 17, \\dots \\quad \\text{and} \\quad t_{19} = 113',
          fullSolutionWalkthrough:
            'General form of AP is a, a + d, a + 2d, ...\nHere a = 5, d = 6\nTerms: 5, 5 + 6, 5 + 2(6) => 5, 11, 17, ... [1 Mark]\n\nFormula for n-th term: tₙ = a + (n - 1)d\nt₁₉ = 5 + (19 - 1)(6) = 5 + 18(6) = 5 + 108 = 113 [1 Mark]\nFinal Answer: AP is 5, 11, 17, ... and t₁₉ = 113.'
        },
        {
          id: 'en_prob_2_5_5mark',
          number: 'Ex 2.5 - Q11 (5 Marks)',
          title: 'The sum of three consecutive terms in AP is 27 and product is 288. Find the terms.',
          difficulty: 'Intermediate',
          statementLatex: '\\text{The sum of three consecutive terms of an AP is 27 and their product is 288. Find the three terms.}',
          description: 'Sura Guide standard 5-mark consecutive terms AP problem.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Let the three terms be a - d, a, a + d. Form sum equation.',
              hint: '(a - d) + a + (a + d) = 27 => 3a = 27 => a = 9.',
              expectedInsight: 'a = 9.',
              latexIntermediate: '3a = 27 \\implies a = 9',
              options: ['a = 9', 'a = 8'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Use the product condition: (a - d)(a)(a + d) = 288 with a = 9.',
              hint: '9(9² - d²) = 288 => 81 - d² = 32 => d² = 49 => d = ±7.',
              expectedInsight: 'd = ±7.',
              latexIntermediate: '9(81 - d^2) = 288 \\implies d^2 = 49 \\implies d = \\pm 7',
              options: ['d = ±7', 'd = ±5'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Write down the three terms for d = 7 and d = -7.',
              hint: 'When d = 7: 9 - 7 = 2, 9, 9 + 7 = 16. When d = -7: 16, 9, 2.',
              expectedInsight: '2, 9, 16 or 16, 9, 2.',
              latexIntermediate: '2, 9, 16 \\quad \\text{or} \\quad 16, 9, 2',
              options: ['2, 9, 16 or 16, 9, 2', '3, 9, 15'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{The three terms are } 2, 9, 16 \\text{ or } 16, 9, 2.',
          fullSolutionWalkthrough:
            'Let the three consecutive terms be (a - d), a, (a + d). [1 Mark]\nGiven Sum = 27:\n(a - d) + a + (a + d) = 27\n3a = 27 => a = 9  [1 Mark]\n\nGiven Product = 288:\n(a - d) × a × (a + d) = 288\n(9 - d) × 9 × (9 + d) = 288\n9(81 - d²) = 288\n81 - d² = 32\nd² = 81 - 32 = 49 => d = ±7  [2 Marks]\n\nCase 1: a = 9, d = 7:\nTerms are: 9 - 7, 9, 9 + 7 => 2, 9, 16.\nCase 2: a = 9, d = -7:\nTerms are: 9 - (-7), 9, 9 + (-7) => 16, 9, 2.  [1 Mark]\nFinal Answer: 2, 9, 16 or 16, 9, 2 (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 2.6 (Sum to n terms of an AP)
    // =========================================================================
    {
      id: 'en_sec_2_6',
      sectionNumber: '2.6',
      title: 'Exercise 2.6 - Sum to n Terms of an AP (2 & 5 Marks)',
      introText:
        'Formula for sum of first n terms of an AP: Sₙ = (n/2)[2a + (n - 1)d] = (n/2)(a + l). Proving identities like S₁₂ = 3(S₈ - S₄) is a guaranteed 5-mark board question.',
      items: [
        {
          id: 'en_thm_2_6',
          type: 'theorem',
          number: '2.6',
          title: 'Sum of n Terms Formula',
          statementLatex: 'S_n = \\frac{n}{2}[2a + (n-1)d] = \\frac{n}{2}(a + l)',
          statementText: 'The sum equals the number of terms times the average of first and last terms.'
        }
      ],
      problems: [
        {
          id: 'en_prob_2_6_2mark',
          number: 'Ex 2.6 - Q1(i) (2 Marks)',
          title: 'Find the sum of the AP: 3, 7, 11, ... up to 40 terms',
          difficulty: 'Foundational',
          statementLatex: '\\text{Find the sum of: } 3, 7, 11, \\dots \\text{ up to 40 terms.}',
          description: 'Standard 2-mark AP sum formula substitution.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Identify a, d, and n from the AP.',
              hint: 'a = 3, d = 7 - 3 = 4, n = 40.',
              expectedInsight: 'a = 3, d = 4, n = 40.',
              latexIntermediate: 'a = 3, \\quad d = 4, \\quad n = 40',
              options: ['a = 3, d = 4, n = 40', 'a = 3, d = 7, n = 40'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Calculate S₄₀ = (40/2)[2(3) + (40 - 1)(4)].',
              hint: '20[6 + 156] = 20(162) = 3240.',
              expectedInsight: 'S₄₀ = 3240.',
              latexIntermediate: 'S_{40} = 20[6 + 156] = 3240',
              options: ['3240', '3120', '3360'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'S_{40} = 3240',
          fullSolutionWalkthrough:
            'Given AP: 3, 7, 11, ...\na = 3, d = 7 - 3 = 4, n = 40 [1 Mark]\nFormula: Sₙ = (n/2)[2a + (n - 1)d]\nS₄₀ = (40/2) [2(3) + (40 - 1)(4)]\n= 20 [6 + 39(4)] = 20 [6 + 156] = 20 × 162 = 3240 [1 Mark]\nFinal Answer: 3240.'
        },
        {
          id: 'en_prob_2_6_5mark',
          number: 'Ex 2.6 - Q6 (5 Marks)',
          title: 'Find the sum of all odd positive integers less than 450',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Find the sum of all odd positive integers less than 450.}',
          description: 'Sura Guide standard 5-mark AP sum calculation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Identify the sequence, first term a, common difference d, and last term l.',
              hint: 'Odd integers: 1, 3, 5, ..., 449. So a = 1, d = 2, l = 449.',
              expectedInsight: 'a = 1, d = 2, l = 449.',
              latexIntermediate: 'a = 1, \\quad d = 2, \\quad l = 449',
              options: ['a = 1, d = 2, l = 449', 'a = 1, d = 2, l = 451'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Find the number of terms n = (l - a)/d + 1.',
              hint: 'n = (449 - 1)/2 + 1 = 448/2 + 1 = 224 + 1 = 225.',
              expectedInsight: 'n = 225.',
              latexIntermediate: 'n = \\frac{449 - 1}{2} + 1 = 225',
              options: ['n = 225', 'n = 224'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Calculate Sₙ = (n/2)(a + l).',
              hint: 'S₂₂₅ = (225/2)(1 + 449) = (225/2)(450) = 225 × 225 = 50,625.',
              expectedInsight: 'S = 50,625.',
              latexIntermediate: 'S_{225} = 225^2 = 50625',
              options: ['50625', '50000', '49500'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'S_{225} = 50625',
          fullSolutionWalkthrough:
            'Odd positive integers less than 450 are: 1, 3, 5, ..., 449.\nThis forms an Arithmetic Progression where:\nFirst term a = 1\nCommon difference d = 3 - 1 = 2\nLast term l = 449 [1 Mark]\n\nNumber of terms n = (l - a)/d + 1 [1 Mark]\nn = (449 - 1)/2 + 1 = 448/2 + 1 = 224 + 1 = 225  [1 Mark]\n\nSum formula: Sₙ = (n/2)(a + l) [1 Mark]\nS₂₂₅ = (225/2)(1 + 449) = (225/2)(450) = 225 × 225 = 50,625  [1 Mark]\nFinal Answer: 50,625 (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 2.7 (Geometric Progression - GP)
    // =========================================================================
    {
      id: 'en_sec_2_7',
      sectionNumber: '2.7',
      title: 'Exercise 2.7 - Geometric Progression (GP) (2 & 5 Marks)',
      introText:
        'A sequence is in GP if each term is obtained by multiplying the preceding term by a non-zero constant ratio r: tₙ = a · rⁿ⁻¹.',
      items: [
        {
          id: 'en_def_2_7',
          type: 'definition',
          number: '2.7',
          title: 'GP nth Term',
          statementLatex: 't_n = a r^{n-1}, \\quad r = \\frac{t_{k+1}}{t_k}',
          statementText: 'Three consecutive terms in GP can be taken as a/r, a, ar.'
        }
      ],
      problems: [
        {
          id: 'en_prob_2_7_1',
          number: 'Ex 2.7 - Q1 (2 Marks)',
          title: 'Check whether 3, 9, 27, 81, ... is a G.P.',
          difficulty: 'Foundational',
          statementLatex: '\\text{Which of the following sequences are in G.P.? } 3, 9, 27, 81, \\dots',
          description: 'Check if consecutive term ratio is constant.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Calculate ratios 9/3, 27/9, 81/27.',
              hint: 'All equal 3.',
              expectedInsight: 'Common ratio r = 3 is constant.',
              latexIntermediate: 'r = 3',
              options: ['In G.P. with r = 3', 'Not in G.P.'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{The sequence is in G.P. with common ratio } r = 3.',
          fullSolutionWalkthrough:
            't2/t1 = 9/3 = 3 [1 Mark]\nt3/t2 = 27/9 = 3\nt4/t3 = 81/27 = 3\nSince the common ratio is constant (r = 3), the sequence is a Geometric Progression. [1 Mark]'
        },
        {
          id: 'en_prob_2_7_5mark',
          number: 'Ex 2.7 - Q9 (5 Marks)',
          title: 'In a GP, 4th term is 8/9 and 7th term is 64/243. Find the GP.',
          difficulty: 'Intermediate',
          statementLatex: '\\text{In a GP, the } 4^{\\text{th}} \\text{ term is } \\frac{8}{9} \\text{ and the } 7^{\\text{th}} \\text{ term is } \\frac{64}{243}. \\text{ Find the GP.}',
          description: 'Sura Guide standard 5-mark solution by dividing two term equations.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Write formulas for t₄ and t₇.',
              hint: 't₄ = ar³ = 8/9, t₇ = ar⁶ = 64/243.',
              expectedInsight: 'ar³ = 8/9 and ar⁶ = 64/243.',
              latexIntermediate: 'a r^3 = \\frac{8}{9}, \\quad a r^6 = \\frac{64}{243}',
              options: ['ar³ = 8/9, ar⁶ = 64/243', 'ar⁴ = 8/9, ar⁷ = 64/243'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Divide t₇ by t₄ to find common ratio r.',
              hint: 'ar⁶ / ar³ = r³ = (64/243) / (8/9) = (64/243) × (9/8) = 8/27 => r = 2/3.',
              expectedInsight: 'r = 2/3.',
              latexIntermediate: 'r^3 = \\frac{8}{27} \\implies r = \\frac{2}{3}',
              options: ['r = 2/3', 'r = 3/2'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Substitute r = 2/3 into ar³ = 8/9 to find first term a.',
              hint: 'a(2/3)³ = 8/9 => a(8/27) = 8/9 => a = (8/9) × (27/8) = 3.',
              expectedInsight: 'a = 3.',
              latexIntermediate: 'a\\left(\\frac{8}{27}\\right) = \\frac{8}{9} \\implies a = 3',
              options: ['a = 3', 'a = 2'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{The GP is } 3, 2, \\frac{4}{3}, \\frac{8}{9}, \\dots',
          fullSolutionWalkthrough:
            'Formula for nth term of GP: tₙ = a rⁿ⁻¹ [1 Mark]\nGiven:\nt₄ = a r³ = 8/9  --- (1)\nt₇ = a r⁶ = 64/243  --- (2) [1 Mark]\n\nDividing (2) by (1):\n(a r⁶) / (a r³) = (64/243) / (8/9)\nr³ = (64/243) × (9/8) = 8/27\nr³ = (2/3)³ => r = 2/3  [1 Mark]\n\nSubstitute r = 2/3 in (1):\na(2/3)³ = 8/9\na(8/27) = 8/9 => a = (8/9) × (27/8) = 3  [1 Mark]\n\nTherefore, the Geometric Progression is:\na, ar, ar², ar³, ...\n= 3, 3(2/3), 3(4/9), 3(8/27), ...\n= 3, 2, 4/3, 8/9, ... [1 Mark]\nFinal Answer: 3, 2, 4/3, 8/9, ... (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 2.8 (Sum to n terms of a GP - Guaranteed 5 Marks)
    // =========================================================================
    {
      id: 'en_sec_2_8',
      sectionNumber: '2.8',
      title: 'Exercise 2.8 - Sum of a GP: 5 + 55 + 555 + ... (2 & 5 Marks)',
      introText:
        'Sum to n terms of a GP: Sₙ = a(rⁿ - 1)/(r - 1). Evaluating series like 5 + 55 + 555 + ... is a guaranteed 5-mark question in almost every board exam.',
      items: [
        {
          id: 'en_thm_2_8',
          type: 'theorem',
          number: '2.8',
          title: 'Sum of GP & Repeated Digits Method',
          statementLatex: 'S_n = \\frac{a(r^n - 1)}{r - 1}, \\quad 9 + 99 + 999 + \\dots = (10 - 1) + (10^2 - 1) + \\dots',
          statementText: 'Multiply and divide by 9 to transform repeated digit series into powers of 10.'
        }
      ],
      problems: [
        {
          id: 'en_prob_2_8_2mark',
          number: 'Ex 2.8 - Q1 (2 Marks)',
          title: 'Find the sum of first 6 terms of the GP: 5, 15, 45, ...',
          difficulty: 'Foundational',
          statementLatex: '\\text{Find the sum of first 6 terms of the GP: } 5, 15, 45, \\dots',
          description: 'Apply formula Sₙ = a(rⁿ - 1)/(r - 1) for r > 1.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Identify first term a and common ratio r.',
              hint: 'a = 5, r = 15/5 = 3 (since r > 1).',
              expectedInsight: 'a = 5, r = 3, n = 6.',
              latexIntermediate: 'a = 5, \\quad r = 3, \\quad n = 6',
              options: ['a = 5, r = 3', 'a = 5, r = 5'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Calculate S₆ = 5(3⁶ - 1)/(3 - 1).',
              hint: '3⁶ = 729. 729 - 1 = 728. S₆ = 5(728)/2 = 5(364) = 1820.',
              expectedInsight: 'S₆ = 1820.',
              latexIntermediate: 'S_6 = \\frac{5(729 - 1)}{2} = 1820',
              options: ['1820', '1800', '1750'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'S_6 = 1820',
          fullSolutionWalkthrough:
            'Given GP: 5, 15, 45, ...\nFirst term a = 5, common ratio r = 15/5 = 3 > 1, n = 6 [1 Mark]\nFormula: Sₙ = a(rⁿ - 1) / (r - 1)\nS₆ = 5(3⁶ - 1) / (3 - 1) = 5(729 - 1) / 2 = 5(728) / 2 = 5 × 364 = 1820 [1 Mark]\nFinal Answer: 1820.'
        },
        {
          id: 'en_prob_2_8_5mark',
          number: 'Ex 2.8 - Q6(i) (5 Marks)',
          title: 'Find the sum to n terms of 5 + 55 + 555 + ...',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Find the sum to } n \\text{ terms of the series: } 5 + 55 + 555 + \\dots',
          description: 'Sura Guide standard 5-mark solution format for repeated-digit series.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Factor out 5 and multiply & divide by 9.',
              hint: '5(1 + 11 + 111 + ...) = (5/9)(9 + 99 + 999 + ...).',
              expectedInsight: '(5/9)(9 + 99 + 999 + ...).',
              latexIntermediate: 'S_n = \\frac{5}{9}(9 + 99 + 999 + \\dots)',
              options: ['\\frac{5}{9}(9 + 99 + 999 + \\dots)', '5(9 + 99 + \\dots)'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Write each term 9, 99, 999 as (10 - 1), (10² - 1), (10³ - 1).',
              hint: '(5/9)[(10 + 10² + ... + 10ⁿ) - (1 + 1 + ... n times)].',
              expectedInsight: 'GP with a = 10, r = 10 minus n.',
              latexIntermediate: '\\frac{5}{9}\\left[\\frac{10(10^n - 1)}{10 - 1} - n\\right]',
              options: [
                '\\frac{5}{9}\\left[\\frac{10(10^n - 1)}{9} - n\\right]',
                '\\frac{5}{9}\\left[\\frac{10(10^n - 1)}{10} - n\\right]'
              ],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Expand brackets to write the final formula.',
              hint: '[50(10ⁿ - 1)/81] - 5n/9.',
              expectedInsight: '\\frac{50(10^n - 1)}{81} - \\frac{5n}{9}',
              latexIntermediate: 'S_n = \\frac{50(10^n - 1)}{81} - \\frac{5n}{9}',
              options: [
                '\\frac{50(10^n - 1)}{81} - \\frac{5n}{9}',
                '\\frac{50(10^n - 1)}{9} - 5n'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'S_n = \\frac{50(10^n - 1)}{81} - \\frac{5n}{9}',
          fullSolutionWalkthrough:
            'Let Sₙ = 5 + 55 + 555 + ... to n terms [1 Mark]\n= 5(1 + 11 + 111 + ... to n terms)\nMultiply and divide by 9:\n= (5/9)(9 + 99 + 999 + ... to n terms) [1 Mark]\n= (5/9)[(10 - 1) + (10² - 1) + (10³ - 1) + ... to n terms]\n= (5/9)[(10 + 10² + 10³ + ... + 10ⁿ) - (1 + 1 + 1 + ... to n terms)] [1 Mark]\n\nHere, 10 + 10² + ... + 10ⁿ is a GP with a = 10, r = 10:\nSum of GP = a(rⁿ - 1)/(r - 1) = 10(10ⁿ - 1)/(10 - 1) = 10(10ⁿ - 1)/9  [1 Mark]\n\nTherefore:\nSₙ = (5/9) [10(10ⁿ - 1)/9 - n]\n= [50(10ⁿ - 1) / 81] - (5n / 9)  [1 Mark]\nFinal Answer: [50(10ⁿ - 1) / 81] - (5n / 9) (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 2.9 (Sum of Special Series)
    // =========================================================================
    {
      id: 'en_sec_2_9',
      sectionNumber: '2.9',
      title: 'Exercise 2.9 - Sum of Special Series (2 & 5 Marks)',
      introText:
        'Formulas for sum of first n natural numbers, their squares, and cubes: ∑ k = n(n+1)/2, ∑ k² = n(n+1)(2n+1)/6, ∑ k³ = [n(n+1)/2]².',
      items: [
        {
          id: 'en_def_2_9',
          type: 'definition',
          number: '2.9',
          title: 'Special Series Formulas',
          statementLatex: '\\sum_{k=1}^n k = \\frac{n(n+1)}{2}, \\quad \\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}, \\quad \\sum_{k=1}^n k^3 = \\left[\\frac{n(n+1)}{2}\\right]^2',
          statementText: 'Notice that the sum of cubes is the square of the sum of natural numbers: ∑ k³ = (∑ k)².'
        }
      ],
      problems: [
        {
          id: 'en_prob_2_9_2mark',
          number: 'Ex 2.9 - Q1(i) (2 Marks)',
          title: 'Find the sum of 1 + 2 + 3 + ... + 60',
          difficulty: 'Foundational',
          statementLatex: '\\text{Find the sum of } 1 + 2 + 3 + \\dots + 60.',
          description: 'Formula ∑ n = n(n+1)/2 calculation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Apply formula with n = 60.',
              hint: '60(61)/2 = 30 × 61 = 1830.',
              expectedInsight: 'Sum = 1830.',
              latexIntermediate: '\\frac{60 \\times 61}{2} = 1830',
              options: ['1830', '1800', '1860'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '1 + 2 + \\dots + 60 = 1830',
          fullSolutionWalkthrough:
            'Formula: 1 + 2 + 3 + ... + n = n(n + 1) / 2 [1 Mark]\nHere n = 60\nSum = (60 × 61) / 2 = 30 × 61 = 1830 [1 Mark]\nFinal Answer: 1830.'
        },
        {
          id: 'en_prob_2_9_5mark',
          number: 'Ex 2.9 - Q4 (5 Marks)',
          title: 'Find the sum of 15² + 16² + 17² + ... + 28²',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Find the sum: } 15^2 + 16^2 + 17^2 + \\dots + 28^2.',
          description: 'Sura Guide standard 5-mark special series split method.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Split into difference of two series starting from 1².',
              hint: '(1² + 2² + ... + 28²) - (1² + 2² + ... + 14²).',
              expectedInsight: '∑_{k=1}^{28} k² - ∑_{k=1}^{14} k².',
              latexIntermediate: '\\sum_{k=1}^{28} k^2 - \\sum_{k=1}^{14} k^2',
              options: ['∑_{k=1}^{28} k² - ∑_{k=1}^{14} k²', '∑_{k=1}^{28} k² - ∑_{k=1}^{15} k²'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Calculate ∑_{k=1}^{28} k² using n(n+1)(2n+1)/6 for n = 28.',
              hint: '28 × 29 × 57 / 6 = 7714.',
              expectedInsight: '7714.',
              latexIntermediate: '\\frac{28 \\times 29 \\times 57}{6} = 7714',
              options: ['7714', '7600'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Calculate ∑_{k=1}^{14} k² using n = 14 and subtract.',
              hint: '14 × 15 × 29 / 6 = 1015. Result = 7714 - 1015 = 6699.',
              expectedInsight: '6699.',
              latexIntermediate: '7714 - 1015 = 6699',
              options: ['6699', '6700'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '15^2 + 16^2 + \\dots + 28^2 = 6699',
          fullSolutionWalkthrough:
            '15² + 16² + ... + 28²\n= (1² + 2² + ... + 28²) - (1² + 2² + ... + 14²) [1 Mark]\n\nUsing formula ∑ k² = n(n+1)(2n+1)/6: [1 Mark]\nFor n = 28: (28 × 29 × 57) / 6 = 7714 [1 Mark]\nFor n = 14: (14 × 15 × 29) / 6 = 1015 [1 Mark]\n\nSubtracting:\n7714 - 1015 = 6699 [1 Mark]\nFinal Answer: 6699 (Full 5/5 Marks Guaranteed).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 2.10 (Multiple Choice Questions - MCQs)
    // =========================================================================
    {
      id: 'en_sec_2_10',
      sectionNumber: '2.10',
      title: 'Exercise 2.10 - One Mark Multiple Choice Questions (1 Mark MCQs)',
      introText:
        'Official board exam multiple choice questions on Euclid’s lemma, arithmetic and geometric progressions, and series.',
      items: [],
      problems: [
        {
          id: 'en_prob_2_10_1',
          number: 'Ex 2.10 - MCQ 1',
          title: 'Remainder Condition in Euclid’s Division Lemma',
          difficulty: 'Foundational',
          statementLatex: '\\text{In } a = bq + r, \\text{ remainder } r \\text{ satisfies: }',
          description: 'Official board exam 1-mark question.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Identify the strict bound on remainder r.',
              hint: '0 ≤ r < b.',
              expectedInsight: '0 ≤ r < b.',
              latexIntermediate: '0 \\le r < b',
              options: ['0 ≤ r < b', '0 < r ≤ b', '0 ≤ r ≤ b'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '0 \\le r < b',
          fullSolutionWalkthrough:
            'By Euclid’s Division Lemma, remainder r satisfies 0 ≤ r < b [1 Mark].'
        },
        {
          id: 'en_prob_2_10_2',
          number: 'Ex 2.10 - MCQ 2',
          title: 'Next term in GP sequence 3/16, 1/8, 1/12, 1/18, ...',
          difficulty: 'Foundational',
          statementLatex: '\\text{The next term of the sequence } \\frac{3}{16}, \\frac{1}{8}, \\frac{1}{12}, \\frac{1}{18}, \\dots \\text{ is: }',
          description: 'Calculate common ratio and multiply to find the next term.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Calculate common ratio r = (1/8) / (3/16).',
              hint: '(1/8) × (16/3) = 2/3. Next term = (1/18) × (2/3) = 2/54 = 1/27.',
              expectedInsight: '1/27.',
              latexIntermediate: 'r = \\frac{2}{3} \\implies \\frac{1}{18} \\times \\frac{2}{3} = \\frac{1}{27}',
              options: ['1/27', '1/24', '2/27'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\frac{1}{27}',
          fullSolutionWalkthrough:
            'Common ratio r = (1/8) / (3/16) = 2/3.\nNext term = (1/18) × (2/3) = 1/27 [1 Mark].'
        },
        {
          id: 'en_prob_2_10_3',
          number: 'Ex 2.10 - MCQ 3',
          title: 'If 6 times 6th term equals 7 times 7th term of an AP, find 13th term',
          difficulty: 'Foundational',
          statementLatex: '\\text{If } 6 \\text{ times } 6^{\\text{th}} \\text{ term of an AP is equal to } 7 \\text{ times } 7^{\\text{th}} \\text{ term, then } t_{13} = ?',
          description: 'Standard algebraic relation in AP.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Form equation: 6(a + 5d) = 7(a + 6d).',
              hint: '6a + 30d = 7a + 42d => a + 12d = 0 => t₁₃ = 0.',
              expectedInsight: 't₁₃ = 0.',
              latexIntermediate: 'a + 12d = 0 \\implies t_{13} = 0',
              options: ['0', '1', '13'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '0',
          fullSolutionWalkthrough:
            '6 · t₆ = 7 · t₇ => 6(a + 5d) = 7(a + 6d) => 6a + 30d = 7a + 42d => a + 12d = 0.\nSince t₁₃ = a + 12d, t₁₃ = 0 [1 Mark].'
        }
      ]
    },

    // =========================================================================
    // UNIT EXERCISE 2 (Advanced Board Exam Special Problems)
    // =========================================================================
    {
      id: 'en_sec_unit_ex_2',
      sectionNumber: 'Unit Ex 2',
      title: 'Unit Exercise 2 - Advanced AP & GP Problems (5 Marks)',
      introText:
        'Unit Exercise 2 contains board-level proof questions involving l-th, m-th, and n-th terms of an AP.',
      items: [
        {
          id: 'en_def_unit_ex_2',
          type: 'definition',
          number: 'UE 2',
          title: 'Symmetric AP Term Identities',
          statementLatex: 't_l = a + (l-1)d = x, \\quad t_m = a + (m-1)d = y, \\quad t_n = a + (n-1)d = z',
          statementText: 'Use cyclic sum identities to prove algebraic vanishing.'
        }
      ],
      problems: [
        {
          id: 'en_prob_unit_ex_2_5mark',
          number: 'Unit Ex 2 - Q1 (5 Marks)',
          title: 'If l-th, m-th, and n-th terms of AP are x, y, z, prove x(m - n) + y(n - l) + z(l - m) = 0',
          difficulty: 'Advanced',
          statementLatex: '\\text{If } l^{\\text{th}}, m^{\\text{th}}, \\text{ and } n^{\\text{th}} \\text{ terms of an AP are } x, y, z, \\text{ prove } x(m - n) + y(n - l) + z(l - m) = 0.',
          description: 'Classic 5-mark board exam AP cyclic proof.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Write expressions for x, y, z using first term A and common difference D.',
              hint: 'x = A + (l - 1)D, y = A + (m - 1)D, z = A + (n - 1)D.',
              expectedInsight: 'x, y, z expressed in terms of A, D.',
              latexIntermediate: 'x = A + (l-1)D, \\quad y = A + (m-1)D, \\quad z = A + (n-1)D',
              options: [
                'x = A + (l-1)D, y = A + (m-1)D, z = A + (n-1)D',
                'x = A + lD'
              ],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Substitute x, y, z into LHS: x(m - n) + y(n - l) + z(l - m) and group coefficients of A and D.',
              hint: 'Coeff of A = (m - n) + (n - l) + (l - m) = 0.',
              expectedInsight: 'A(0) + D(0) = 0.',
              latexIntermediate: 'A[(m - n) + (n - l) + (l - m)] + D[(l - 1)(m - n) + (m - 1)(n - l) + (n - 1)(l - m)] = 0',
              options: ['LHS = 0', 'LHS = 1'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'x(m - n) + y(n - l) + z(l - m) = 0 \\quad (\\text{Hence Proved})',
          fullSolutionWalkthrough:
            'Let the first term of the AP be A and common difference be D.\nGiven:\nx = tₗ = A + (l - 1)D  --- (1)\ny = tₘ = A + (m - 1)D  --- (2)\nz = tₙ = A + (n - 1)D  --- (3) [2 Marks]\n\nNow, LHS = x(m - n) + y(n - l) + z(l - m)\nSubstitute (1), (2), (3):\n= [A + (l - 1)D](m - n) + [A + (m - 1)D](n - l) + [A + (n - 1)D](l - m) [1 Mark]\n\nGrouping terms with A and D:\n= A [(m - n) + (n - l) + (l - m)] + D [(l - 1)(m - n) + (m - 1)(n - l) + (n - 1)(l - m)]\n= A(0) + D [l(m - n) + m(n - l) + n(l - m) - ((m - n) + (n - l) + (l - m))]  [1 Mark]\n= 0 + D [lm - ln + mn - ml + nl - nm - 0] = 0 = RHS. [1 Mark]\nHence Proved (Full 5/5 Marks Guaranteed).'
        },
        {
          id: 'en_prob_unit_ex_2_5mark_q2',
          number: 'Unit Ex 2 - Q2 (5 Marks)',
          title: 'Find the sum of all natural numbers between 300 and 600 which are divisible by 7',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Find the sum of all natural numbers between 300 and 600 which are divisible by 7.}',
          description: 'Sura Guide standard 5-mark AP divisibility bounds problem.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Find the first and last numbers between 300 and 600 divisible by 7.',
              hint: '300/7 = 42.85 => first number = 7 × 43 = 301. 600/7 = 85.71 => last number = 7 × 85 = 595.',
              expectedInsight: 'a = 301, l = 595, d = 7.',
              latexIntermediate: 'a = 301, \\quad l = 595, \\quad d = 7',
              options: ['a = 301, l = 595', 'a = 308, l = 595'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Find number of terms n = (l - a)/d + 1.',
              hint: 'n = (595 - 301)/7 + 1 = 294/7 + 1 = 42 + 1 = 43.',
              expectedInsight: 'n = 43.',
              latexIntermediate: 'n = \\frac{595 - 301}{7} + 1 = 43',
              options: ['n = 43', 'n = 42'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Calculate S₄₃ = (43/2)(301 + 595).',
              hint: '(43/2)(896) = 43 × 448 = 19264.',
              expectedInsight: 'S = 19264.',
              latexIntermediate: 'S_{43} = 43 \\times 448 = 19264',
              options: ['19264', '19300', '18900'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'S = 19264',
          fullSolutionWalkthrough:
            'Numbers between 300 and 600 divisible by 7 are: 301, 308, 315, ..., 595 [1 Mark]\nFirst term a = 301\nCommon difference d = 7\nLast term l = 595\n\nNumber of terms n = (l - a)/d + 1 [1 Mark]\nn = (595 - 301)/7 + 1 = 294/7 + 1 = 42 + 1 = 43 [1 Mark]\n\nSum formula: Sₙ = (n/2)(a + l) [1 Mark]\nS₄₃ = (43/2) × (301 + 595) = (43/2) × 896 = 43 × 448 = 19,264 [1 Mark]\nFinal Answer: 19,264 (Full 5/5 Marks Guaranteed).'
        }
      ]
    }
  ]
};
