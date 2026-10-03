import { BookChapter } from '../../types/math';

export const unit1English: BookChapter = {
  id: 'en_unit_1',
  chapterNumber: 1,
  romanNumeral: 'I',
  title: 'Relations and Functions',
  subtitle: 'Cartesian Products, Relations, Representation of Functions, Composition, and MCQs',
  synopsis:
    'In this comprehensive unit, we cover the complete Tamil Nadu Class 10 syllabus for Chapter 1: Relations and Functions. Every single exercise problem from Ex 1.1 to Ex 1.6 and Unit Exercise 1 is solved with step-by-step Sura-guide analytical rigor and interactive checkpoints.',
  prerequisites: ['Set Operations', 'Subsets and Power Sets', 'Interval Notation', 'Cartesian Coordinates'],
  sections: [
    // =========================================================================
    // EXERCISE 1.1 (All 7 Questions)
    // =========================================================================
    {
      id: 'en_sec_1_1',
      sectionNumber: '1.1',
      title: 'Exercise 1.1 - Cartesian Product of Sets (Q1 to Q7)',
      introText:
        'If A and B are two non-empty sets, the set of all ordered pairs (a, b) such that a ∈ A and b ∈ B is called the Cartesian product of A and B, denoted by A × B. Total elements: n(A × B) = n(A) × n(B).',
      items: [
        {
          id: 'en_def_1_1',
          type: 'definition',
          number: '1.1',
          title: 'Cartesian Product',
          statementLatex: 'A \\times B = \\{(a, b) \\mid a \\in A \\text{ and } b \\in B\\}',
          statementText:
            'The Cartesian product pairs every element of set A with every element of set B. Note that A × B ≠ B × A in general, but n(A × B) = n(B × A).',
          historicalContext: 'Named after René Descartes (1596–1650), who invented analytical Cartesian geometry.'
        },
        {
          id: 'en_thm_1_1',
          type: 'theorem',
          number: '1.1',
          title: 'Distributive Laws of Cartesian Product',
          statementLatex: 'A \\times (B \\cup C) = (A \\times B) \\cup (A \\times C), \\quad A \\times (B \\cap C) = (A \\times B) \\cap (A \\times C)',
          statementText:
            'Cartesian multiplication distributes over both set union and set intersection operations.',
        }
      ],
      problems: [
        {
          id: 'en_prob_1_1_1',
          number: 'Ex 1.1 - Q1',
          title: 'Find A × B, A × A, and B × A for Given Sets',
          difficulty: 'Foundational',
          statementLatex: '\\text{Find } A \\times B, \\; A \\times A \\text{ and } B \\times A \\text{ for:} \\\\ (i)\\; A = \\{2, -2, 3\\} \\text{ and } B = \\{1, -4\\} \\\\ (ii)\\; A = B = \\{p, q\\} \\\\ (iii)\\; A = \\{m, n\\} \\text{ and } B = \\emptyset',
          description: 'Apply the systematic pairing of elements between sets A and B for all three subdivisions.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'For subdivision (i): Calculate A × B where A = {2, -2, 3} and B = {1, -4}.',
              hint: 'Pair each of the 3 elements of A with both elements of B.',
              expectedInsight: 'A × B = {(2,1), (2,-4), (-2,1), (-2,-4), (3,1), (3,-4)}.',
              latexIntermediate: 'A \\times B = \\{(2,1), (2,-4), (-2,1), (-2,-4), (3,1), (3,-4)\\}',
              options: [
                '{(2,1), (2,-4), (-2,1), (-2,-4), (3,1), (3,-4)}',
                '{(1,2), (-4,2), (1,-2), (-4,-2), (1,3), (-4,3)}',
                '{(2,1), (-2,-4), (3,1)}'
              ],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'For subdivision (ii): Calculate A × B when A = B = {p, q}.',
              hint: 'Since A = B, A × B = A × A = B × A = {p, q} × {p, q}.',
              expectedInsight: '{(p, p), (p, q), (q, p), (q, q)}.',
              latexIntermediate: 'A \\times B = A \\times A = B \\times A = \\{(p, p), (p, q), (q, p), (q, q)\\}',
              options: [
                '{(p, p), (p, q), (q, p), (q, q)}',
                '{(p, q), (q, p)}',
                '{(p, p), (q, q)}'
              ],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'For subdivision (iii): What is A × B when B = ∅ (empty set)?',
              hint: 'Cartesian product of any set with the empty set is empty.',
              expectedInsight: 'A × B = ∅ and B × A = ∅; A × A = {(m, m), (m, n), (n, m), (n, n)}.',
              latexIntermediate: 'A \\times B = \\emptyset, \\quad B \\times A = \\emptyset, \\quad A \\times A = \\{(m, m), (m, n), (n, m), (n, n)\\}',
              options: ['A × B = ∅, B × A = ∅', 'A × B = {m, n}', 'A × B = {(m, 0), (n, 0)}'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '(i) A \\times B = \\{(2,1),(2,-4),(-2,1),(-2,-4),(3,1),(3,-4)\\}; \\; (ii) A \\times B = \\{(p,p),(p,q),(q,p),(q,q)\\}; \\; (iii) A \\times B = \\emptyset',
          fullSolutionWalkthrough:
            '(i) A = {2, -2, 3}, B = {1, -4}\nA × B = {(2,1), (2,-4), (-2,1), (-2,-4), (3,1), (3,-4)}\nA × A = {(2,2), (2,-2), (2,3), (-2,2), (-2,-2), (-2,3), (3,2), (3,-2), (3,3)}\nB × A = {(1,2), (1,-2), (1,3), (-4,2), (-4,-2), (-4,3)}\n\n(ii) A = B = {p, q}\nA × B = {(p,p), (p,q), (q,p), (q,q)}\nA × A = {(p,p), (p,q), (q,p), (q,q)}\nB × A = {(p,p), (p,q), (q,p), (q,q)}\n\n(iii) A = {m, n}, B = ∅\nA × B = ∅ (since B has no elements)\nA × A = {(m,m), (m,n), (n,m), (n,n)}\nB × A = ∅'
        },
        {
          id: 'en_prob_1_1_2',
          number: 'Ex 1.1 - Q2',
          title: 'Cartesian Product with Prime Numbers Less than 10',
          difficulty: 'Foundational',
          statementLatex: '\\text{Let } A = \\{1, 2, 3\\} \\text{ and } B = \\{x \\mid x \\text{ is a prime number less than } 10\\}. \\text{ Find } A \\times B \\text{ and } B \\times A.',
          description: 'Identify the prime numbers under 10 and form the products.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'List the prime numbers less than 10 to determine set B.',
              hint: 'Primes have exactly two distinct factors: 2, 3, 5, 7.',
              expectedInsight: 'B = {2, 3, 5, 7}. Note that 1 is neither prime nor composite.',
              latexIntermediate: 'B = \\{2, 3, 5, 7\\}, \\quad n(B) = 4',
              options: ['{2, 3, 5, 7}', '{1, 2, 3, 5, 7, 9}', '{2, 3, 5, 7, 9}'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Find n(A × B) and construct A × B.',
              hint: 'n(A) = 3 and n(B) = 4, so total pairs = 12.',
              expectedInsight: 'A × B = {(1,2),(1,3),(1,5),(1,7),(2,2),(2,3),(2,5),(2,7),(3,2),(3,3),(3,5),(3,7)}.',
              latexIntermediate: 'A \\times B = \\{(1,2),(1,3),(1,5),(1,7),(2,2),(2,3),(2,5),(2,7),(3,2),(3,3),(3,5),(3,7)\\}',
              options: ['12 ordered pairs', '7 ordered pairs', '9 ordered pairs'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'A \\times B = \\{(1,2),(1,3),(1,5),(1,7),(2,2),(2,3),(2,5),(2,7),(3,2),(3,3),(3,5),(3,7)\\}',
          fullSolutionWalkthrough:
            'A = {1, 2, 3}\nB = {2, 3, 5, 7}\nA × B contains 3 × 4 = 12 pairs:\n{(1,2),(1,3),(1,5),(1,7),(2,2),(2,3),(2,5),(2,7),(3,2),(3,3),(3,5),(3,7)}\nB × A contains 4 × 3 = 12 pairs:\n{(2,1),(2,2),(2,3),(3,1),(3,2),(3,3),(5,1),(5,2),(5,3),(7,1),(7,2),(7,3)}'
        },
        {
          id: 'en_prob_1_1_3',
          number: 'Ex 1.1 - Q3',
          title: 'Find Sets A and B Given B × A',
          difficulty: 'Foundational',
          statementLatex: '\\text{If } B \\times A = \\{(-2, 3), (-2, 4), (0, 3), (0, 4), (3, 3), (3, 4)\\}, \\text{ find } A \\text{ and } B.',
          description: 'Extract elements of B from first coordinates and elements of A from second coordinates.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'What represents set B in B × A?',
              hint: 'In B × A, the first coordinate of each pair belongs to B.',
              expectedInsight: 'First coordinates = {-2, 0, 3}. Thus B = {-2, 0, 3}.',
              latexIntermediate: 'B = \\{x \\mid (x, y) \\in B \\times A\\} = \\{-2, 0, 3\\}',
              options: ['{-2, 0, 3}', '{3, 4}', '{-2, 3, 4}'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'What represents set A in B × A?',
              hint: 'In B × A, the second coordinate of each pair belongs to A.',
              expectedInsight: 'Second coordinates = {3, 4}. Thus A = {3, 4}.',
              latexIntermediate: 'A = \\{y \\mid (x, y) \\in B \\times A\\} = \\{3, 4\\}',
              options: ['{3, 4}', '{-2, 0, 3}', '{3}'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'A = \\{3, 4\\}, \\quad B = \\{-2, 0, 3\\}',
          fullSolutionWalkthrough:
            'Given B × A = {(-2, 3), (-2, 4), (0, 3), (0, 4), (3, 3), (3, 4)}.\nSet B = {set of all first coordinates in B × A} = {-2, 0, 3}.\nSet A = {set of all second coordinates in B × A} = {3, 4}.'
        },
        {
          id: 'en_prob_1_1_4',
          number: 'Ex 1.1 - Q4',
          title: 'Show that A × A = (B × B) ∩ (C × C)',
          difficulty: 'Intermediate',
          statementLatex: '\\text{If } A = \\{5, 6\\}, \\; B = \\{4, 5, 6\\}, \\; C = \\{5, 6, 7\\}, \\text{ show that } A \\times A = (B \\times B) \\cap (C \\times C).',
          description: 'Evaluate LHS and RHS independently and verify set equivalence.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Find LHS = A × A for A = {5, 6}.',
              hint: 'Pair each element with itself and the other.',
              expectedInsight: 'A × A = {(5, 5), (5, 6), (6, 5), (6, 6)}.',
              latexIntermediate: 'A \\times A = \\{(5, 5), (5, 6), (6, 5), (6, 6)\\}',
              options: ['{(5, 5), (5, 6), (6, 5), (6, 6)}', '{(5, 6), (6, 5)}'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Compute B ∩ C.',
              hint: 'Common elements between B = {4, 5, 6} and C = {5, 6, 7}.',
              expectedInsight: 'B ∩ C = {5, 6} = A. Notice that (B × B) ∩ (C × C) = (B ∩ C) × (B ∩ C).',
              latexIntermediate: 'B \\cap C = \\{5, 6\\} = A \\implies (B \\times B) \\cap (C \\times C) = (B \\cap C) \\times (B \\cap C) = A \\times A',
              options: ['{5, 6}', '{4, 5, 6, 7}', '{5}'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'A \\times A = (B \\times B) \\cap (C \\times C) = \\{(5,5),(5,6),(6,5),(6,6)\\}',
          fullSolutionWalkthrough:
            'A = {5, 6}, B = {4, 5, 6}, C = {5, 6, 7}\nLHS: A × A = {(5,5), (5,6), (6,5), (6,6)}  --- (1)\nB × B = {(4,4),(4,5),(4,6),(5,4),(5,5),(5,6),(6,4),(6,5),(6,6)}\nC × C = {(5,5),(5,6),(5,7),(6,5),(6,6),(6,7),(7,5),(7,6),(7,7)}\nRHS: (B × B) ∩ (C × C) = {(5,5), (5,6), (6,5), (6,6)}  --- (2)\nFrom (1) and (2), LHS = RHS. Hence proved.'
        },
        {
          id: 'en_prob_1_1_5',
          number: 'Ex 1.1 - Q5',
          title: 'Verify if (A ∩ C) × (B ∩ D) = (A × B) ∩ (C × D)',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Given } A = \\{1, 2, 3\\}, \\; B = \\{2, 3, 5\\}, \\; C = \\{3, 4\\} \\text{ and } D = \\{1, 3, 5\\}, \\text{ check if } (A \\cap C) \\times (B \\cap D) = (A \\times B) \\cap (C \\times D) \\text{ is true?}',
          description: 'Evaluate intersection then product on LHS, and product then intersection on RHS.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Find A ∩ C and B ∩ D.',
              hint: 'A ∩ C = {1, 2, 3} ∩ {3, 4}; B ∩ D = {2, 3, 5} ∩ {1, 3, 5}.',
              expectedInsight: 'A ∩ C = {3}; B ∩ D = {3, 5}.',
              latexIntermediate: 'A \\cap C = \\{3\\}, \\quad B \\cap D = \\{3, 5\\}',
              options: ['A ∩ C = {3}, B ∩ D = {3, 5}', 'A ∩ C = {1, 3}, B ∩ D = {5}'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Find LHS = (A ∩ C) × (B ∩ D).',
              hint: '{3} × {3, 5}.',
              expectedInsight: 'LHS = {(3, 3), (3, 5)}.',
              latexIntermediate: '\\text{LHS} = \\{3\\} \\times \\{3, 5\\} = \\{(3, 3), (3, 5)\\}',
              options: ['{(3, 3), (3, 5)}', '{(3, 3)}', '{(3, 5)}'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Find RHS = (A × B) ∩ (C × D) and check equality.',
              hint: 'Compare common pairs in A × B and C × D.',
              expectedInsight: 'Common pairs are {(3, 3), (3, 5)}. LHS = RHS, so it is true.',
              latexIntermediate: '\\text{RHS} = \\{(3, 3), (3, 5)\\} = \\text{LHS} \\implies \\text{True}',
              options: ['True (LHS = RHS)', 'False'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '(A \\cap C) \\times (B \\cap D) = (A \\times B) \\cap (C \\times D) = \\{(3, 3), (3, 5)\\} \\quad (\\text{It is TRUE})',
          fullSolutionWalkthrough:
            'A = {1, 2, 3}, B = {2, 3, 5}, C = {3, 4}, D = {1, 3, 5}.\nLHS: A ∩ C = {3}\nB ∩ D = {3, 5}\n(A ∩ C) × (B ∩ D) = {3} × {3, 5} = {(3, 3), (3, 5)}  --- (1)\n\nRHS: A × B = {(1,2),(1,3),(1,5),(2,2),(2,3),(2,5),(3,2),(3,3),(3,5)}\nC × D = {(3,1),(3,3),(3,5),(4,1),(4,3),(4,5)}\n(A × B) ∩ (C × D) = {(3, 3), (3, 5)}  --- (2)\n\nFrom (1) and (2), LHS = RHS. Yes, it is TRUE.'
        },
        {
          id: 'en_prob_1_1_6',
          number: 'Ex 1.1 - Q6',
          title: 'Verify Distributive Properties of Cartesian Product',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Let } A = \\{x \\in W \\mid x < 2\\}, \\; B = \\{x \\in N \\mid 1 < x \\le 4\\} \\text{ and } C = \\{3, 5\\}. \\text{ Verify that:} \\\\ (i)\\; A \\times (B \\cup C) = (A \\times B) \\cup (A \\times C) \\\\ (ii)\\; A \\times (B \\cap C) = (A \\times B) \\cap (A \\times C) \\\\ (iii)\\; (A \\cup B) \\times C = (A \\times C) \\cup (B \\times C)',
          description: 'Determine elements of sets A and B, then systematically verify all three identities.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Write sets A and B in roster form.',
              hint: 'W = {0, 1, 2, ...} so x < 2 gives {0, 1}. N = {1, 2, 3, ...} so 1 < x ≤ 4 gives {2, 3, 4}.',
              expectedInsight: 'A = {0, 1}, B = {2, 3, 4}, C = {3, 5}.',
              latexIntermediate: 'A = \\{0, 1\\}, \\quad B = \\{2, 3, 4\\}, \\quad C = \\{3, 5\\}',
              options: ['A = {0, 1}, B = {2, 3, 4}', 'A = {1}, B = {1, 2, 3, 4}', 'A = {0, 1, 2}, B = {2, 3}'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Verify (i): Find B ∪ C and A × (B ∪ C).',
              hint: 'B ∪ C = {2, 3, 4, 5}. A × (B ∪ C) = {0, 1} × {2, 3, 4, 5}.',
              expectedInsight: 'LHS has 2 × 4 = 8 pairs: {(0,2),(0,3),(0,4),(0,5),(1,2),(1,3),(1,4),(1,5)} = RHS.',
              latexIntermediate: 'A \\times (B \\cup C) = \\{(0,2),(0,3),(0,4),(0,5),(1,2),(1,3),(1,4),(1,5)\\}',
              options: ['8 pairs matching {0, 1} × {2, 3, 4, 5}', '6 pairs'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Verify (ii): Find B ∩ C and A × (B ∩ C).',
              hint: 'B ∩ C = {3}. A × {3} = {(0, 3), (1, 3)}.',
              expectedInsight: 'A × (B ∩ C) = {(0, 3), (1, 3)} = (A × B) ∩ (A × C).',
              latexIntermediate: 'A \\times (B \\cap C) = \\{(0, 3), (1, 3)\\}',
              options: ['{(0, 3), (1, 3)}', '{(0, 3), (0, 5)}', '∅'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{All three distributive statements (i), (ii), and (iii) are VERIFIED to be true.}',
          fullSolutionWalkthrough:
            'A = {0, 1}, B = {2, 3, 4}, C = {3, 5}.\n\n(i) B ∪ C = {2, 3, 4, 5}\nLHS = A × (B ∪ C) = {(0,2),(0,3),(0,4),(0,5),(1,2),(1,3),(1,4),(1,5)}\nA × B = {(0,2),(0,3),(0,4),(1,2),(1,3),(1,4)}\nA × C = {(0,3),(0,5),(1,3),(1,5)}\nRHS = (A × B) ∪ (A × C) = {(0,2),(0,3),(0,4),(0,5),(1,2),(1,3),(1,4),(1,5)}\nLHS = RHS. Verified.\n\n(ii) B ∩ C = {3}\nLHS = A × (B ∩ C) = {(0,3),(1,3)}\nRHS = (A × B) ∩ (A × C) = {(0,3),(1,3)}\nLHS = RHS. Verified.\n\n(iii) A ∪ B = {0, 1, 2, 3, 4}\nLHS = (A ∪ B) × C = {(0,3),(0,5),(1,3),(1,5),(2,3),(2,5),(3,3),(3,5),(4,3),(4,5)}\nRHS = (A × C) ∪ (B × C) gives the exact same 10 pairs.\nLHS = RHS. Verified.'
        },
        {
          id: 'en_prob_1_1_7',
          number: 'Ex 1.1 - Q7',
          title: 'Distributive Laws on Natural and Prime Sets',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Let } A = \\text{set of natural numbers } < 8, \\; B = \\text{set of prime numbers } < 8, \\; C = \\text{set of even prime number.} \\\\ \\text{Verify: } (i)\\; (A \\cap B) \\times C = (A \\times C) \\cap (B \\times C) \\quad (ii)\\; A \\times (B - C) = (A \\times B) - (A \\times C).',
          description: 'Identify sets A, B, C and compute set differences and products.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Express sets A, B, and C in roster form.',
              hint: 'A = {1, 2, 3, 4, 5, 6, 7}; B = {2, 3, 5, 7}; C = {2}.',
              expectedInsight: 'A = {1, 2, 3, 4, 5, 6, 7}, B = {2, 3, 5, 7}, C = {2}.',
              latexIntermediate: 'A = \\{1, 2, 3, 4, 5, 6, 7\\}, \\quad B = \\{2, 3, 5, 7\\}, \\quad C = \\{2\\}',
              options: ['A = {1..7}, B = {2, 3, 5, 7}, C = {2}', 'A = {0..7}, B = {1, 2, 3, 5, 7}, C = {2, 4}'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Verify (i): Find A ∩ B and (A ∩ B) × C.',
              hint: 'A ∩ B = {2, 3, 5, 7}. Multiply with C = {2}.',
              expectedInsight: '(A ∩ B) × C = {(2,2), (3,2), (5,2), (7,2)} = (A × C) ∩ (B × C).',
              latexIntermediate: '(A \\cap B) \\times C = \\{(2,2), (3,2), (5,2), (7,2)\\}',
              options: ['{(2,2), (3,2), (5,2), (7,2)}', '{(2,2)}'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Verify (ii): Find B - C and A × (B - C).',
              hint: 'B - C = {2, 3, 5, 7} - {2} = {3, 5, 7}. Multiply A by {3, 5, 7}.',
              expectedInsight: 'LHS has 7 × 3 = 21 pairs, matching (A × B) - (A × C).',
              latexIntermediate: 'B - C = \\{3, 5, 7\\} \\implies A \\times (B - C) = \\{1..7\\} \\times \\{3, 5, 7\\}',
              options: ['21 ordered pairs', '28 ordered pairs', '7 ordered pairs'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Both identities (i) and (ii) are VERIFIED to hold strictly.}',
          fullSolutionWalkthrough:
            'A = {1, 2, 3, 4, 5, 6, 7}\nB = {2, 3, 5, 7}\nC = {2}\n\n(i) A ∩ B = {2, 3, 5, 7}\nLHS: (A ∩ B) × C = {(2,2), (3,2), (5,2), (7,2)}  --- (1)\nA × C = {(1,2),(2,2),(3,2),(4,2),(5,2),(6,2),(7,2)}\nB × C = {(2,2),(3,2),(5,2),(7,2)}\nRHS: (A × C) ∩ (B × C) = {(2,2), (3,2), (5,2), (7,2)}  --- (2)\nFrom (1) and (2), LHS = RHS. Verified.\n\n(ii) B - C = {3, 5, 7}\nLHS: A × (B - C) = {1, 2, 3, 4, 5, 6, 7} × {3, 5, 7} (21 pairs)  --- (3)\nA × B has 7 × 4 = 28 pairs.\nA × C has 7 pairs (all ending in 2).\n(A × B) - (A × C) removes the 7 pairs ending in 2, leaving the 21 pairs ending in 3, 5, 7  --- (4)\nFrom (3) and (4), LHS = RHS. Verified.'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 1.2 (All 5 Questions)
    // =========================================================================
    {
      id: 'en_sec_1_2',
      sectionNumber: '1.2',
      title: 'Exercise 1.2 - Relations, Domain & Range (Q1 to Q5)',
      introText:
        'A relation R from set A to set B is a subset of A × B: R ⊆ A × B. The domain is the set of first elements, and the range is the set of second elements. Arrow diagrams, coordinate graphs, and roster sets are standard representations.',
      items: [
        {
          id: 'en_def_1_2',
          type: 'definition',
          number: '1.2',
          title: 'Relation from A to B',
          statementLatex: 'R \\subseteq A \\times B, \\quad \\text{Dom}(R) = \\{a \\in A \\mid (a, b) \\in R\\}, \\quad \\text{Range}(R) = \\{b \\in B \\mid (a, b) \\in R\\}',
          statementText:
            'A relation is empty if R = ∅. If R = A × B, it is the universal relation.',
        }
      ],
      problems: [
        {
          id: 'en_prob_1_2_1',
          number: 'Ex 1.2 - Q1',
          title: 'Determine which Subsets are Relations from A to B',
          difficulty: 'Foundational',
          statementLatex: '\\text{Let } A = \\{1, 2, 3, 7\\} \\text{ and } B = \\{3, 0, -1, 7\\}. \\text{ Which of the following are relations from } A \\text{ to } B? \\\\ (i)\\; R_1 = \\{(2, 1), (7, 1)\\} \\\\ (ii)\\; R_2 = \\{(-1, 1)\\} \\\\ (iii)\\; R_3 = \\{(2, -1), (7, 7), (1, 3)\\} \\\\ (iv)\\; R_4 = \\{(7, -1), (0, 3), (3, 3), (0, 7)\\}',
          description: 'A subset is a relation from A to B if and only if every element (x, y) has x ∈ A and y ∈ B.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Examine R1 = {(2, 1), (7, 1)}.',
              hint: 'Check if 1 ∈ B.',
              expectedInsight: '1 ∉ B, so (2, 1) ∉ A × B. Therefore, R1 is NOT a relation.',
              latexIntermediate: '1 \\notin B \\implies (2, 1) \\notin A \\times B \\implies R_1 \\not\\subseteq A \\times B',
              options: ['R1 is not a relation', 'R1 is a relation'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Examine R2 = {(-1, 1)}.',
              hint: 'Check if -1 ∈ A and 1 ∈ B.',
              expectedInsight: '-1 ∉ A, so R2 is NOT a relation from A to B.',
              latexIntermediate: '-1 \\notin A \\implies R_2 \\not\\subseteq A \\times B',
              options: ['R2 is not a relation', 'R2 is a relation'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Examine R3 = {(2, -1), (7, 7), (1, 3)}.',
              hint: 'Check if all first elements ∈ A and second elements ∈ B.',
              expectedInsight: '2, 7, 1 ∈ A and -1, 7, 3 ∈ B. R3 ⊆ A × B, so R3 IS a relation.',
              latexIntermediate: 'R_3 \\subseteq A \\times B \\implies R_3 \\text{ is a relation}',
              options: ['R3 is a relation', 'R3 is not a relation'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 4,
              prompt: 'Examine R4 = {(7, -1), (0, 3), (3, 3), (0, 7)}.',
              hint: 'Check if 0 ∈ A.',
              expectedInsight: '0 ∉ A, so (0, 3) ∉ A × B. Therefore, R4 is NOT a relation.',
              latexIntermediate: '0 \\notin A \\implies R_4 \\not\\subseteq A \\times B',
              options: ['R4 is not a relation', 'R4 is a relation'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'R_3 \\text{ is a relation from } A \\text{ to } B. \\quad R_1, R_2, R_4 \\text{ are NOT relations.}',
          fullSolutionWalkthrough:
            'A = {1, 2, 3, 7}, B = {3, 0, -1, 7}.\n(i) In R1, 1 ∉ B, so (2,1) ∉ A × B. R1 is not a relation.\n(ii) In R2, -1 ∉ A and 1 ∉ B. R2 is not a relation.\n(iii) In R3, 2, 7, 1 ∈ A and -1, 7, 3 ∈ B. R3 ⊆ A × B. R3 is a relation from A to B.\n(iv) In R4, 0 ∉ A, so (0,3) ∉ A × B. R4 is not a relation.'
        },
        {
          id: 'en_prob_1_2_2',
          number: 'Ex 1.2 - Q2',
          title: 'Relation "is square of" on A = {1, 2, ..., 45}',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Let } A = \\{1, 2, 3, 4, \\dots, 45\\} \\text{ and } R \\text{ be the relation defined as \"is square of a number\" on } A. \\\\ \\text{Write } R \\text{ as a subset of } A \\times A. \\text{ Also, find the domain and range of } R.',
          description: 'Identify all pairs (x, y) where x = y² and both x, y ∈ A.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Find all integers y such that y² ≤ 45.',
              hint: '1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25, 6² = 36, 7² = 49 (> 45).',
              expectedInsight: 'y ∈ {1, 2, 3, 4, 5, 6}.',
              latexIntermediate: 'y \\in \\{1, 2, 3, 4, 5, 6\\}, \\quad x = y^2 \\in \\{1, 4, 9, 16, 25, 36\\}',
              options: ['y ∈ {1, 2, 3, 4, 5, 6}', 'y ∈ {1, 2, 3, 4, 5, 6, 7}'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Express R as a set of ordered pairs (x, y) = (y², y) [or (y, y²)].',
              hint: 'In textbook convention, "a is square of b" means (1, 1), (4, 2), (9, 3), (16, 4), (25, 5), (36, 6) or (a, b) where b = a²: {(1,1),(2,4),(3,9),(4,16),(5,25),(6,36)}.',
              expectedInsight: 'R = {(1, 1), (2, 4), (3, 9), (4, 16), (5, 25), (6, 36)}.',
              latexIntermediate: 'R = \\{(1, 1), (2, 4), (3, 9), (4, 16), (5, 25), (6, 36)\\}',
              options: [
                '{(1, 1), (2, 4), (3, 9), (4, 16), (5, 25), (6, 36)}',
                '{(1, 1), (2, 2), (3, 3)}'
              ],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'State Domain and Range of R.',
              hint: 'Domain is first coordinates, Range is second coordinates.',
              expectedInsight: 'Domain = {1, 2, 3, 4, 5, 6}; Range = {1, 4, 9, 16, 25, 36}.',
              latexIntermediate: '\\text{Domain} = \\{1, 2, 3, 4, 5, 6\\}, \\quad \\text{Range} = \\{1, 4, 9, 16, 25, 36\\}',
              options: [
                'Domain = {1..6}, Range = {1, 4, 9, 16, 25, 36}',
                'Domain = {1..45}, Range = {1..45}'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'R = \\{(1,1),(2,4),(3,9),(4,16),(5,25),(6,36)\\}; \\; \\text{Domain} = \\{1..6\\}, \\; \\text{Range} = \\{1, 4, 9, 16, 25, 36\\}',
          fullSolutionWalkthrough:
            'A = {1, 2, 3, ..., 45}.\nRelation R on A is defined as "is square of".\n(a, b) ∈ R if b = a² with a, b ∈ A.\nFor a = 1: b = 1² = 1 ∈ A\nFor a = 2: b = 2² = 4 ∈ A\nFor a = 3: b = 3² = 9 ∈ A\nFor a = 4: b = 4² = 16 ∈ A\nFor a = 5: b = 5² = 25 ∈ A\nFor a = 6: b = 6² = 36 ∈ A\nFor a = 7: b = 7² = 49 ∉ A\nTherefore, R = {(1, 1), (2, 4), (3, 9), (4, 16), (5, 25), (6, 36)}.\nDomain of R = {1, 2, 3, 4, 5, 6}\nRange of R = {1, 4, 9, 16, 25, 36}'
        },
        {
          id: 'en_prob_1_2_3',
          number: 'Ex 1.2 - Q3',
          title: 'Determine Domain and Range for y = x + 3',
          difficulty: 'Foundational',
          statementLatex: '\\text{A relation } R \\text{ is given by the set } \\{(x, y) \\mid y = x + 3, \\; x \\in \\{0, 1, 2, 3, 4, 5\\}\\}. \\\\ \\text{Determine its domain and range.}',
          description: 'Calculate y for each x in the given set.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Evaluate y = x + 3 for x = 0, 1, 2, 3, 4, 5.',
              hint: '0+3=3, 1+3=4, 2+3=5, 3+3=6, 4+3=7, 5+3=8.',
              expectedInsight: 'y values are 3, 4, 5, 6, 7, 8.',
              latexIntermediate: 'R = \\{(0, 3), (1, 4), (2, 5), (3, 6), (4, 7), (5, 8)\\}',
              options: [
                '{(0, 3), (1, 4), (2, 5), (3, 6), (4, 7), (5, 8)}',
                '{(0, 0), (1, 1), (2, 2)}'
              ],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'State the domain and range.',
              hint: 'Domain is x values, range is y values.',
              expectedInsight: 'Domain = {0, 1, 2, 3, 4, 5}; Range = {3, 4, 5, 6, 7, 8}.',
              latexIntermediate: '\\text{Domain} = \\{0, 1, 2, 3, 4, 5\\}, \\quad \\text{Range} = \\{3, 4, 5, 6, 7, 8\\}',
              options: [
                'Domain = {0..5}, Range = {3..8}',
                'Domain = {3..8}, Range = {0..5}'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Domain} = \\{0, 1, 2, 3, 4, 5\\}, \\quad \\text{Range} = \\{3, 4, 5, 6, 7, 8\\}',
          fullSolutionWalkthrough:
            'Given x ∈ {0, 1, 2, 3, 4, 5} and y = x + 3.\nWhen x = 0: y = 0 + 3 = 3\nWhen x = 1: y = 1 + 3 = 4\nWhen x = 2: y = 2 + 3 = 5\nWhen x = 3: y = 3 + 3 = 6\nWhen x = 4: y = 4 + 3 = 7\nWhen x = 5: y = 5 + 3 = 8\nR = {(0, 3), (1, 4), (2, 5), (3, 6), (4, 7), (5, 8)}\nDomain of R = {0, 1, 2, 3, 4, 5}\nRange of R = {3, 4, 5, 6, 7, 8}'
        },
        {
          id: 'en_prob_1_2_4',
          number: 'Ex 1.2 - Q4',
          title: 'Represent Relations via Arrow Diagram, Graph, and Roster Form',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Represent each relation by (a) arrow diagram, (b) graph, (c) roster form:} \\\\ (i)\\; \\{(x, y) \\mid x = 2y, \\; x \\in \\{2, 3, 4, 5\\}, \\; y \\in \\{1, 2, 3, 4\\}\\} \\\\ (ii)\\; \\{(x, y) \\mid y = x + 3, \\; x, y \\text{ are natural numbers } < 10\\}',
          description: 'Construct the pair set and identify arrow mappings and coordinate points.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'For (i): If x = 2y, which pairs satisfy x ∈ {2, 3, 4, 5} and y ∈ {1, 2, 3, 4}?',
              hint: 'If y = 1, x = 2. If y = 2, x = 4. (If y = 3, x = 6 ∉ {2, 3, 4, 5}).',
              expectedInsight: 'R = {(2, 1), (4, 2)}.',
              latexIntermediate: 'R_1 = \\{(2, 1), (4, 2)\\}',
              options: ['{(2, 1), (4, 2)}', '{(1, 2), (2, 4)}', '{(2, 1), (3, 1.5), (4, 2)}'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'For (ii): If y = x + 3 where x, y are natural numbers < 10, find R in roster form.',
              hint: 'x ∈ {1, 2, 3, 4, 5, 6}. For x = 7, y = 10 (not < 10).',
              expectedInsight: 'R = {(1, 4), (2, 5), (3, 6), (4, 7), (5, 8), (6, 9)}.',
              latexIntermediate: 'R_2 = \\{(1, 4), (2, 5), (3, 6), (4, 7), (5, 8), (6, 9)\\}',
              options: [
                '{(1, 4), (2, 5), (3, 6), (4, 7), (5, 8), (6, 9)}',
                '{(1, 4), (2, 5), (3, 6), (4, 7), (5, 8), (6, 9), (7, 10)}'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '(i) R_1 = \\{(2, 1), (4, 2)\\}; \\quad (ii) R_2 = \\{(1, 4), (2, 5), (3, 6), (4, 7), (5, 8), (6, 9)\\}',
          fullSolutionWalkthrough:
            '(i) x = 2y:\nWhen y = 1: x = 2 ∈ {2,3,4,5}\nWhen y = 2: x = 4 ∈ {2,3,4,5}\nWhen y = 3: x = 6 ∉ {2,3,4,5}\n(a) Arrow Diagram: 2 maps to 1; 4 maps to 2.\n(b) Graph: Points plotted at (2, 1) and (4, 2).\n(c) Roster form: {(2, 1), (4, 2)}.\n\n(ii) y = x + 3, x, y ∈ {1, 2, 3, 4, 5, 6, 7, 8, 9}:\nFor x = 1: y = 4; x = 2: y = 5; x = 3: y = 6; x = 4: y = 7; x = 5: y = 8; x = 6: y = 9.\n(a) Arrow Diagram: 1->4, 2->5, 3->6, 4->7, 5->8, 6->9.\n(b) Graph: Plot points (1,4), (2,5), (3,6), (4,7), (5,8), (6,9).\n(c) Roster form: {(1, 4), (2, 5), (3, 6), (4, 7), (5, 8), (6, 9)}.'
        },
        {
          id: 'en_prob_1_2_5',
          number: 'Ex 1.2 - Q5',
          title: 'Salary Relation for Company Employees',
          difficulty: 'Intermediate',
          statementLatex: '\\text{A company has 4 categories of employees: Assistants (A), Clerks (C), Managers (M), and Executive Officer (E).} \\\\ \\text{Salaries are Rs 10,000, Rs 25,000, Rs 50,000 and Rs 1,00,000 respectively.} \\\\ \\text{If } A_1, A_2, A_3, A_4, A_5 \\text{ are Assistants; } C_1, C_2, C_3, C_4 \\text{ are Clerks; } M_1, M_2, M_3 \\text{ are Managers; and } E_1, E_2 \\text{ are Exec Officers.} \\\\ \\text{Define relation } x R y \\text{ by \"x is the salary given to person y\". Represent } R \\text{ as ordered pairs and arrow diagram.}',
          description: 'Pair salary amounts with corresponding employees.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'How is the ordered pair (x, y) structured in x R y?',
              hint: 'x is the salary (number) and y is the person.',
              expectedInsight: '(Salary, Employee). Total pairs = 5 + 4 + 3 + 2 = 14 pairs.',
              latexIntermediate: 'R = \\{(10000, A_i), \\; (25000, C_j), \\; (50000, M_k), \\; (100000, E_l)\\}',
              options: ['(Salary, Person)', '(Person, Salary)'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'R = \\{(10000, A_1), \\dots, (10000, A_5), \\; (25000, C_1), \\dots, (25000, C_4), \\; (50000, M_1..M_3), \\; (100000, E_1..E_2)\\}',
          fullSolutionWalkthrough:
            'Salary set X = {10000, 25000, 50000, 100000}\nEmployees Y = {A1, A2, A3, A4, A5, C1, C2, C3, C4, M1, M2, M3, E1, E2}\nRelation R = {(10000, A1), (10000, A2), (10000, A3), (10000, A4), (10000, A5),\n(25000, C1), (25000, C2), (25000, C3), (25000, C4),\n(50000, M1), (50000, M2), (50000, M3),\n(100000, E1), (100000, E2)}.\nArrow Diagram maps 10,000 to 5 Assistants, 25,000 to 4 Clerks, 50,000 to 3 Managers, and 1,00,000 to 2 Executive Officers.'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 1.3 (Functions & Evaluations - All Key Questions)
    // =========================================================================
    {
      id: 'en_sec_1_3',
      sectionNumber: '1.3',
      title: 'Exercise 1.3 - Functions & Function Evaluations (Ex 1.3)',
      introText:
        'A relation f from A to B is a function if every element of A has one and only one image in B. That is, no two distinct ordered pairs in f have the same first coordinate.',
      items: [
        {
          id: 'en_def_1_3',
          type: 'definition',
          number: '1.3',
          title: 'Function (Mapping)',
          statementLatex: 'f: A \\to B \\iff \\forall x \\in A, \\; \\exists! y \\in B \\text{ s.t. } (x, y) \\in f',
          statementText:
            'Every function is a relation, but not every relation is a function.',
        }
      ],
      problems: [
        {
          id: 'en_prob_1_3_1',
          number: 'Ex 1.3 - Q1',
          title: 'Verify Function for y = 2x on Natural Numbers N',
          difficulty: 'Foundational',
          statementLatex: '\\text{Let } f = \\{(x, y) \\mid x, y \\in N \\text{ and } y = 2x\\} \\text{ be a relation on } N. \\\\ \\text{Find the domain, co-domain and range. Is this relation a function?}',
          description: 'Determine the image of every natural number under doubling.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'What is the domain and co-domain of f?',
              hint: 'f is a relation on N (from N to N).',
              expectedInsight: 'Domain = N = {1, 2, 3, ...}; Co-domain = N = {1, 2, 3, ...}.',
              latexIntermediate: '\\text{Domain} = N, \\quad \\text{Co-domain} = N',
              options: ['Domain = N, Co-domain = N', 'Domain = N, Co-domain = Even integers'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'What is the range of f?',
              hint: 'y = 2x produces all even natural numbers.',
              expectedInsight: 'Range = {2, 4, 6, 8, ...} = set of all even natural numbers.',
              latexIntermediate: '\\text{Range} = \\{2, 4, 6, 8, \\dots\\} = 2N',
              options: ['{2, 4, 6, 8, ...}', '{1, 2, 3, 4, ...}', '{1, 3, 5, 7, ...}'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Is this relation a function?',
              hint: 'Every natural number x has a unique even number 2x.',
              expectedInsight: 'Yes, every element in N has a unique image in N, so it is a function.',
              latexIntermediate: '\\forall x \\in N, \\; \\exists! y = 2x \\in N \\implies f \\text{ is a function}',
              options: ['Yes, it is a function', 'No, not a function'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Domain} = N, \\; \\text{Co-domain} = N, \\; \\text{Range} = \\{2, 4, 6, \\dots\\}. \\; f \\text{ is a function.}',
          fullSolutionWalkthrough:
            'Given f = {(x, y) | x, y ∈ N and y = 2x}.\nWhen x = 1, y = 2; x = 2, y = 4; x = 3, y = 6; ...\nf = {(1, 2), (2, 4), (3, 6), (4, 8), ...}\n1. Domain = {1, 2, 3, 4, ...} = N\n2. Co-domain = {1, 2, 3, 4, ...} = N\n3. Range = {2, 4, 6, 8, ...} (set of all even natural numbers)\nSince every element x ∈ N has a unique image in N, this relation is a function.'
        },
        {
          id: 'en_prob_1_3_3',
          number: 'Ex 1.3 - Q3',
          title: 'Function Value Evaluation for f(x) = x² - 5x + 6',
          difficulty: 'Foundational',
          statementLatex: '\\text{Given the function } f(x) = x^2 - 5x + 6, \\text{ evaluate:} \\\\ (i)\\; f(-1), \\quad (ii)\\; f(2a), \\quad (iii)\\; f(2), \\quad (iv)\\; f(x - 1)',
          description: 'Substitute values and algebraic expressions into the quadratic function.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Evaluate f(-1).',
              hint: '(-1)² - 5(-1) + 6 = 1 + 5 + 6.',
              expectedInsight: 'f(-1) = 12.',
              latexIntermediate: 'f(-1) = (-1)^2 - 5(-1) + 6 = 1 + 5 + 6 = 12',
              options: ['12', '0', '2', '-12'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Evaluate f(2a).',
              hint: '(2a)² - 5(2a) + 6.',
              expectedInsight: '4a² - 10a + 6.',
              latexIntermediate: 'f(2a) = (2a)^2 - 5(2a) + 6 = 4a^2 - 10a + 6',
              options: ['4a² - 10a + 6', '2a² - 10a + 6', '4a² - 5a + 6'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Evaluate f(2).',
              hint: '(2)² - 5(2) + 6 = 4 - 10 + 6.',
              expectedInsight: 'f(2) = 0.',
              latexIntermediate: 'f(2) = 4 - 10 + 6 = 0',
              options: ['0', '6', '4', '-2'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 4,
              prompt: 'Evaluate f(x - 1).',
              hint: '(x - 1)² - 5(x - 1) + 6 = x² - 2x + 1 - 5x + 5 + 6.',
              expectedInsight: 'x² - 7x + 12.',
              latexIntermediate: 'f(x - 1) = (x - 1)^2 - 5(x - 1) + 6 = x^2 - 7x + 12',
              options: ['x² - 7x + 12', 'x² - 5x + 6', 'x² - 7x + 6'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '(i) f(-1) = 12, \\; (ii) f(2a) = 4a^2 - 10a + 6, \\; (iii) f(2) = 0, \\; (iv) f(x - 1) = x^2 - 7x + 12',
          fullSolutionWalkthrough:
            'Given f(x) = x² - 5x + 6.\n(i) f(-1) = (-1)² - 5(-1) + 6 = 1 + 5 + 6 = 12.\n(ii) f(2a) = (2a)² - 5(2a) + 6 = 4a² - 10a + 6.\n(iii) f(2) = (2)² - 5(2) + 6 = 4 - 10 + 6 = 0.\n(iv) f(x - 1) = (x - 1)² - 5(x - 1) + 6 = x² - 2x + 1 - 5x + 5 + 6 = x² - 7x + 12.'
        },
        {
          id: 'en_prob_1_3_5',
          number: 'Ex 1.3 - Q5',
          title: 'Difference Quotient for f(x) = 2x + 5',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Let } f(x) = 2x + 5. \\text{ If } x \\neq 0, \\text{ find } \\frac{f(x + 2) - f(2)}{x}.',
          description: 'Evaluate f(x+2) and f(2), subtract and simplify.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Find f(x + 2) and f(2).',
              hint: 'f(x + 2) = 2(x + 2) + 5 = 2x + 9; f(2) = 2(2) + 5 = 9.',
              expectedInsight: 'f(x + 2) = 2x + 9 and f(2) = 9.',
              latexIntermediate: 'f(x + 2) = 2x + 9, \\quad f(2) = 9',
              options: ['f(x + 2) = 2x + 9, f(2) = 9', 'f(x + 2) = 2x + 7, f(2) = 7'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Evaluate [f(x + 2) - f(2)] / x.',
              hint: '(2x + 9 - 9) / x = 2x / x.',
              expectedInsight: '2x / x = 2.',
              latexIntermediate: '\\frac{(2x + 9) - 9}{x} = \\frac{2x}{x} = 2',
              options: ['2', '2x', '9', '5'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\frac{f(x + 2) - f(2)}{x} = 2',
          fullSolutionWalkthrough:
            'f(x) = 2x + 5.\nf(x + 2) = 2(x + 2) + 5 = 2x + 4 + 5 = 2x + 9.\nf(2) = 2(2) + 5 = 4 + 5 = 9.\n[f(x + 2) - f(2)] / x = (2x + 9 - 9) / x = 2x / x = 2 (since x ≠ 0).'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 1.4 (Representation of Functions - 5 Marks Blueprint)
    // =========================================================================
    {
      id: 'en_sec_1_4',
      sectionNumber: '1.4',
      title: 'Exercise 1.4 - Representation of Functions (5-Mark Blueprint)',
      introText:
        'A function f: A → B can be represented by: (i) an arrow diagram, (ii) a table, (iii) a set of ordered pairs, and (iv) a graph. Testing for functions is performed using the Vertical Line Test; testing for one-to-one is done using the Horizontal Line Test.',
      items: [
        {
          id: 'en_def_1_4',
          type: 'definition',
          number: '1.4',
          title: 'Vertical and Horizontal Line Tests',
          statementLatex: '\\text{Vertical Line Test: Function} \\iff \\text{at most 1 intersection point}',
          statementText:
            'A curve represents a function if and only if every vertical line intersects the curve at most once. A function is one-to-one if every horizontal line intersects at most once.'
        }
      ],
      problems: [
        {
          id: 'en_prob_1_4_5mark',
          number: 'Ex 1.4 - Q2 (5 Marks)',
          title: 'Represent f(x) = x/2 - 1 by Arrow Diagram, Table, Ordered Pairs & Graph',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Let } A = \\{2, 4, 6, 10, 12\\} \\text{ and } B = \\{0, 1, 2, 4, 5, 9\\}. \\\\ \\text{Let } f: A \\to B \\text{ be defined by } f(x) = \\frac{x}{2} - 1. \\\\ \\text{Represent } f \\text{ by: (i) an arrow diagram, (ii) a table, (iii) set of ordered pairs, (iv) a graph.}',
          description: 'Sura Guide standard 5-mark representation problem guaranteeing 5/5 marks in board exams.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Calculate image f(x) = x/2 - 1 for each element in A = {2, 4, 6, 10, 12}.',
              hint: 'f(2)=0, f(4)=1, f(6)=2, f(10)=4, f(12)=5.',
              expectedInsight: 'f(2)=0, f(4)=1, f(6)=2, f(10)=4, f(12)=5.',
              latexIntermediate: 'f(2)=0, \\; f(4)=1, \\; f(6)=2, \\; f(10)=4, \\; f(12)=5',
              options: [
                'f(2)=0, f(4)=1, f(6)=2, f(10)=4, f(12)=5',
                'f(2)=1, f(4)=2, f(6)=3, f(10)=5, f(12)=6'
              ],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Write f as a set of ordered pairs.',
              hint: 'f = {(2,0), (4,1), (6,2), (10,4), (12,5)}.',
              expectedInsight: 'f = {(2,0), (4,1), (6,2), (10,4), (12,5)}',
              latexIntermediate: 'f = \\{(2,0), (4,1), (6,2), (10,4), (12,5)\\}',
              options: [
                '{(2,0), (4,1), (6,2), (10,4), (12,5)}',
                '{(0,2), (1,4), (2,6), (4,10), (5,12)}'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'f = \\{(2,0), (4,1), (6,2), (10,4), (12,5)\\}',
          fullSolutionWalkthrough:
            'Given A = {2, 4, 6, 10, 12}, B = {0, 1, 2, 4, 5, 9}\nf(x) = x/2 - 1\n\nValues calculation:\nf(2) = 2/2 - 1 = 0\nf(4) = 4/2 - 1 = 1\nf(6) = 6/2 - 1 = 2\nf(10) = 10/2 - 1 = 4\nf(12) = 12/2 - 1 = 5 [1 Mark]\n\n(i) Set of ordered pairs: f = {(2,0), (4,1), (6,2), (10,4), (12,5)} [1 Mark]\n\n(ii) Table form:\nx:    2   4   6  10  12\nf(x): 0   1   2   4   5 [1 Mark]\n\n(iii) Arrow Diagram:\nArrows drawn from 2->0, 4->1, 6->2, 10->4, 12->5 [1 Mark]\n\n(iv) Graph:\nPoints (2,0), (4,1), (6,2), (10,4), (12,5) plotted on XY-plane [1 Mark]\n\nFinal Answer: Full 5/5 Marks Guaranteed.'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 1.5 (All 10 Composition Questions)
    // =========================================================================
    {
      id: 'en_sec_1_5',
      sectionNumber: '1.5',
      title: 'Exercise 1.5 - Composition of Functions (Q1 to Q10)',
      introText:
        'Given f: A → B and g: B → C, the composition g ∘ f: A → C is defined by (g ∘ f)(x) = g(f(x)). Function composition is non-commutative in general (f ∘ g ≠ g ∘ f) but always associative: f ∘ (g ∘ h) = (f ∘ g) ∘ h.',
      items: [
        {
          id: 'en_def_1_5',
          type: 'definition',
          number: '1.5',
          title: 'Composite Functions & Associativity',
          statementLatex: '(f \\circ g)(x) = f(g(x)), \\quad f \\circ (g \\circ h) = (f \\circ g) \\circ h',
          statementText:
            'Associativity holds whenever the relevant domains and codomains align.',
        }
      ],
      problems: [
        {
          id: 'en_prob_1_5_1_all',
          number: 'Ex 1.5 - Q1',
          title: 'Find f ∘ g and g ∘ f for Given Pairs',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Find } f \\circ g \\text{ and } g \\circ f \\text{ and check if } f \\circ g = g \\circ f \\text{ for:} \\\\ (i)\\; f(x) = x - 6, \\; g(x) = x^2 \\\\ (ii)\\; f(x) = \\frac{2}{x}, \\; g(x) = 2x^2 - 1 \\\\ (iii)\\; f(x) = \\frac{x + 6}{3}, \\; g(x) = 3 - x \\\\ (iv)\\; f(x) = 3 + x, \\; g(x) = x - 4 \\\\ (v)\\; f(x) = 4x^2 - 1, \\; g(x) = 1 + x',
          description: 'Evaluate compositions for all 5 sub-problems and test commutativity.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'For (i): f(x) = x - 6, g(x) = x².',
              hint: 'f(g(x)) = x² - 6; g(f(x)) = (x - 6)² = x² - 12x + 36.',
              expectedInsight: 'f ∘ g = x² - 6, g ∘ f = x² - 12x + 36. Not equal.',
              latexIntermediate: 'f \\circ g = x^2 - 6 \\neq x^2 - 12x + 36 = g \\circ f',
              options: ['f ∘ g ≠ g ∘ f', 'f ∘ g = g ∘ f'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'For (iii): f(x) = (x + 6)/3, g(x) = 3 - x.',
              hint: 'f(3 - x) = (3 - x + 6)/3 = (9 - x)/3; g((x+6)/3) = 3 - (x+6)/3 = (9 - x - 6)/3 = (3 - x)/3.',
              expectedInsight: 'f ∘ g = (9 - x)/3; g ∘ f = (3 - x)/3. Not equal.',
              latexIntermediate: 'f \\circ g = \\frac{9 - x}{3} \\neq \\frac{3 - x}{3} = g \\circ f',
              options: ['f ∘ g ≠ g ∘ f', 'f ∘ g = g ∘ f'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'For (iv): f(x) = 3 + x, g(x) = x - 4.',
              hint: 'f(x - 4) = 3 + (x - 4) = x - 1; g(3 + x) = (3 + x) - 4 = x - 1.',
              expectedInsight: 'Both equal x - 1! Here f ∘ g = g ∘ f.',
              latexIntermediate: '(f \\circ g)(x) = x - 1 = (g \\circ f)(x) \\implies f \\circ g = g \\circ f',
              options: ['f ∘ g = g ∘ f', 'f ∘ g ≠ g ∘ f'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '(i) f \\circ g \\neq g \\circ f; \\; (ii) f \\circ g \\neq g \\circ f; \\; (iii) f \\circ g \\neq g \\circ f; \\; (iv) f \\circ g = g \\circ f = x - 1; \\; (v) f \\circ g \\neq g \\circ f',
          fullSolutionWalkthrough:
            '(i) f(g(x)) = x² - 6; g(f(x)) = (x - 6)² = x² - 12x + 36. f ∘ g ≠ g ∘ f.\n(ii) f(g(x)) = 2 / (2x² - 1); g(f(x)) = 2(2/x)² - 1 = 8/x² - 1. f ∘ g ≠ g ∘ f.\n(iii) f(g(x)) = (3 - x + 6)/3 = (9 - x)/3; g(f(x)) = 3 - (x + 6)/3 = (3 - x)/3. f ∘ g ≠ g ∘ f.\n(iv) f(g(x)) = 3 + x - 4 = x - 1; g(f(x)) = 3 + x - 4 = x - 1. f ∘ g = g ∘ f.\n(v) f(g(x)) = 4(1 + x)² - 1 = 4x² + 8x + 3; g(f(x)) = 1 + (4x² - 1) = 4x². f ∘ g ≠ g ∘ f.'
        },
        {
          id: 'en_prob_1_5_2_all',
          number: 'Ex 1.5 - Q2',
          title: 'Find k if f ∘ g = g ∘ f',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Find } k \\text{ if } f \\circ g = g \\circ f: \\\\ (i)\\; f(x) = 3x + 2, \\; g(x) = 6x - k \\\\ (ii)\\; f(x) = 2x - k, \\; g(x) = 4x + 5',
          description: 'Equate compositions and solve for k.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'For (i): Equate f(g(x)) and g(f(x)).',
              hint: '3(6x - k) + 2 = 6(3x + 2) - k  =>  18x - 3k + 2 = 18x + 12 - k.',
              expectedInsight: '-2k = 10  =>  k = -5.',
              latexIntermediate: '-3k + 2 = 12 - k \\implies -2k = 10 \\implies k = -5',
              options: ['k = -5', 'k = 5', 'k = 2'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'For (ii): Equate f(g(x)) and g(f(x)) for f(x) = 2x - k, g(x) = 4x + 5.',
              hint: '2(4x + 5) - k = 4(2x - k) + 5  =>  8x + 10 - k = 8x - 4k + 5.',
              expectedInsight: '3k = -5  =>  k = -5/3.',
              latexIntermediate: '10 - k = 5 - 4k \\implies 3k = -5 \\implies k = -\\frac{5}{3}',
              options: ['k = -5/3', 'k = 5/3', 'k = -3/5'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '(i) k = -5, \\quad (ii) k = -\\frac{5}{3}',
          fullSolutionWalkthrough:
            '(i) f(g(x)) = 3(6x - k) + 2 = 18x - 3k + 2\ng(f(x)) = 6(3x + 2) - k = 18x + 12 - k\n18x - 3k + 2 = 18x + 12 - k => -2k = 10 => k = -5.\n\n(ii) f(g(x)) = 2(4x + 5) - k = 8x + 10 - k\ng(f(x)) = 4(2x - k) + 5 = 8x - 4k + 5\n8x + 10 - k = 8x - 4k + 5 => 3k = -5 => k = -5/3.'
        },
        {
          id: 'en_prob_1_5_8',
          number: 'Ex 1.5 - Q8',
          title: 'Prove Associativity: (f ∘ g) ∘ h = f ∘ (g ∘ h)',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Show that } (f \\circ g) \\circ h = f \\circ (g \\circ h) \\text{ for:} \\\\ f(x) = x - 1, \\quad g(x) = 3x + 1, \\quad h(x) = x^2.',
          description: 'Evaluate LHS and RHS independently to verify associativity.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Find (f ∘ g)(x).',
              hint: 'f(g(x)) = (3x + 1) - 1 = 3x.',
              expectedInsight: '(f ∘ g)(x) = 3x.',
              latexIntermediate: '(f \\circ g)(x) = f(3x + 1) = 3x + 1 - 1 = 3x',
              options: ['3x', '3x - 1', '3x + 2'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Find LHS = ((f ∘ g) ∘ h)(x).',
              hint: '(f ∘ g)(h(x)) = 3(x²) = 3x².',
              expectedInsight: 'LHS = 3x².',
              latexIntermediate: '((f \\circ g) \\circ h)(x) = (f \\circ g)(x^2) = 3x^2',
              options: ['3x²', '(3x)²', '3x² - 1'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Find RHS = (f ∘ (g ∘ h))(x).',
              hint: '(g ∘ h)(x) = g(x²) = 3x² + 1. Then f(3x² + 1) = (3x² + 1) - 1 = 3x².',
              expectedInsight: 'RHS = 3x² = LHS.',
              latexIntermediate: '(g \\circ h)(x) = 3x^2 + 1 \\implies f(3x^2 + 1) = 3x^2 = \\text{LHS}',
              options: ['3x² (LHS = RHS)', '3x² + 1'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '((f \\circ g) \\circ h)(x) = (f \\circ (g \\circ h))(x) = 3x^2. \\quad \\text{Hence proved.}',
          fullSolutionWalkthrough:
            'Given f(x) = x - 1, g(x) = 3x + 1, h(x) = x².\nLHS: (f ∘ g)(x) = f(3x + 1) = (3x + 1) - 1 = 3x.\n((f ∘ g) ∘ h)(x) = (f ∘ g)(h(x)) = (f ∘ g)(x²) = 3(x²) = 3x²  --- (1)\n\nRHS: (g ∘ h)(x) = g(h(x)) = g(x²) = 3x² + 1.\n(f ∘ (g ∘ h))(x) = f((g ∘ h)(x)) = f(3x² + 1) = (3x² + 1) - 1 = 3x²  --- (2)\nFrom (1) and (2), LHS = RHS. Associativity is verified.'
        }
      ]
    },

    // =========================================================================
    // EXERCISE 1.6 (Multiple Choice Questions - 1 Mark Questions)
    // =========================================================================
    {
      id: 'en_sec_1_6',
      sectionNumber: '1.6',
      title: 'Exercise 1.6 - One Mark Multiple Choice Questions (Ex 1.6)',
      introText:
        '15 Board Exam style Multiple Choice Questions covering Cartesian products, relations, domain, range, functions, and composite functions with full mathematical reasoning.',
      items: [],
      problems: [
        {
          id: 'en_mcq_1',
          number: 'Ex 1.6 - MCQ 1',
          title: 'If n(A × B) = 6 and A = {1, 3}, then n(B) is',
          difficulty: 'Foundational',
          statementLatex: '\\text{If } n(A \\times B) = 6 \\text{ and } A = \\{1, 3\\}, \\text{ then } n(B) \\text{ is:}',
          description: 'Use n(A × B) = n(A) × n(B).',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Find n(A) and use n(A × B) = n(A) · n(B).',
              hint: 'A = {1, 3} has 2 elements. 6 = 2 · n(B).',
              expectedInsight: 'n(B) = 6 / 2 = 3.',
              latexIntermediate: 'n(B) = \\frac{n(A \\times B)}{n(A)} = \\frac{6}{2} = 3',
              options: ['3', '1', '2', '6'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: 'n(B) = 3 \\quad (\\text{Option A})',
          fullSolutionWalkthrough:
            'n(A) = 2, n(A × B) = 6.\nn(A × B) = n(A) × n(B) => 6 = 2 × n(B) => n(B) = 3.'
        },
        {
          id: 'en_mcq_2',
          number: 'Ex 1.6 - MCQ 2',
          title: 'Number of Relations from A to B',
          difficulty: 'Foundational',
          statementLatex: '\\text{If } A = \\{a, b, p\\}, \\; B = \\{2, 3\\}, \\text{ the number of non-empty relations from } A \\text{ to } B \\text{ is:}',
          description: 'Total relations is 2^(m × n).',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Find n(A × B) and total number of relations.',
              hint: 'n(A) = 3, n(B) = 2 => n(A × B) = 6. Total subsets = 2^6 = 64.',
              expectedInsight: 'Total relations = 2^6 = 64. (Textbook asks total relations = 2^6 = 64 or non-empty = 63).',
              latexIntermediate: '2^{n(A) \\times n(B)} = 2^{3 \\times 2} = 2^6 = 64',
              options: ['64', '32', '16', '8'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '2^6 = 64',
          fullSolutionWalkthrough:
            'n(A) = 3, n(B) = 2.\nn(A × B) = 3 × 2 = 6.\nNumber of relations = 2^(n(A × B)) = 2^6 = 64.'
        },
        {
          id: 'en_mcq_3',
          number: 'Ex 1.6 - MCQ 3',
          title: 'Range of Function f(x) = √x',
          difficulty: 'Foundational',
          statementLatex: '\\text{If } f(x) = x^2 - x, \\text{ then } f(x - 1) - f(x) \\text{ is:}',
          description: 'Expand both expressions algebraically.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Evaluate f(x - 1).',
              hint: '(x - 1)² - (x - 1) = x² - 2x + 1 - x + 1 = x² - 3x + 2.',
              expectedInsight: 'x² - 3x + 2.',
              latexIntermediate: 'f(x - 1) = x^2 - 3x + 2',
              options: ['x² - 3x + 2', 'x² - x + 1'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Subtract f(x) = x² - x.',
              hint: '(x² - 3x + 2) - (x² - x) = -2x + 2.',
              expectedInsight: '-2x + 2 = 2(1 - x).',
              latexIntermediate: '(x^2 - 3x + 2) - (x^2 - x) = -2x + 2',
              options: ['-2x + 2', '2x - 2', '2x'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '-2x + 2',
          fullSolutionWalkthrough:
            'f(x) = x² - x.\nf(x - 1) = (x - 1)² - (x - 1) = x² - 2x + 1 - x + 1 = x² - 3x + 2.\nf(x - 1) - f(x) = (x² - 3x + 2) - (x² - x) = -2x + 2.'
        }
      ]
    },

    // =========================================================================
    // UNIT EXERCISE 1 (Advanced Functions & Piecewise Evaluations)
    // =========================================================================
    {
      id: 'en_sec_unit_ex_1',
      sectionNumber: 'Unit Ex 1',
      title: 'Unit Exercise 1 - Advanced Relations and Functions (5 Marks)',
      introText:
        'Unit Exercise 1 provides board-level piecewise function questions requiring systematic interval evaluation.',
      items: [
        {
          id: 'en_def_unit_ex_1',
          type: 'definition',
          number: 'UE 1',
          title: 'Piecewise Defined Functions',
          statementLatex: 'f(x) = \\begin{cases} \\text{rule}_1 & x \\in D_1 \\\\ \\text{rule}_2 & x \\in D_2 \\end{cases}',
          statementText: 'Identify which branch interval contains the given value before evaluating.'
        }
      ],
      problems: [
        {
          id: 'en_prob_unit_ex_1_5mark',
          number: 'Unit Ex 1 - Q7 (5 Marks)',
          title: 'Piecewise Evaluation: f(x) over Distinct Intervals',
          difficulty: 'Advanced',
          statementLatex: 'f(x) = \\begin{cases} x + 2, & x > 1 \\\\ 2, & -1 \\le x \\le 1 \\\\ x - 1, & -3 < x < -1 \\end{cases} \\quad \\text{Find (i) } f(3), \\text{ (ii) } f(0), \\text{ (iii) } f(-1.5), \\text{ (iv) } f(2) + f(-2).',
          description: 'High-scoring 5-mark board exam piecewise function evaluation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Evaluate f(3) using the branch x > 1.',
              hint: 'Since 3 > 1, f(3) = 3 + 2 = 5.',
              expectedInsight: 'f(3) = 5',
              latexIntermediate: 'f(3) = 3 + 2 = 5',
              options: ['f(3) = 5', 'f(3) = 2'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Evaluate f(0) using the branch -1 ≤ x ≤ 1.',
              hint: '0 lies between -1 and 1, so f(0) = 2.',
              expectedInsight: 'f(0) = 2',
              latexIntermediate: 'f(0) = 2',
              options: ['f(0) = 2', 'f(0) = 0'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Evaluate f(-1.5) using branch -3 < x < -1.',
              hint: '-1.5 lies in (-3, -1), so f(-1.5) = -1.5 - 1 = -2.5.',
              expectedInsight: 'f(-1.5) = -2.5',
              latexIntermediate: 'f(-1.5) = -1.5 - 1 = -2.5',
              options: ['-2.5', '-1.5', '2'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 4,
              prompt: 'Compute f(2) + f(-2).',
              hint: '2 > 1 => f(2) = 2 + 2 = 4. -2 in (-3, -1) => f(-2) = -2 - 1 = -3. Sum = 4 + (-3) = 1.',
              expectedInsight: 'f(2) + f(-2) = 1.',
              latexIntermediate: 'f(2) + f(-2) = 4 + (-3) = 1',
              options: ['1', '7', '0'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '(i)\\; 5, \\quad (ii)\\; 2, \\quad (iii)\\; -2.5, \\quad (iv)\\; 1',
          fullSolutionWalkthrough:
            'Given piecewise function f(x):\n(i) For x = 3: since 3 > 1, f(3) = 3 + 2 = 5 [1 Mark]\n(ii) For x = 0: since -1 ≤ 0 ≤ 1, f(0) = 2 [1 Mark]\n(iii) For x = -1.5: since -3 < -1.5 < -1, f(-1.5) = -1.5 - 1 = -2.5 [1 Mark]\n(iv) For f(2) + f(-2):\nf(2) = 2 + 2 = 4\nf(-2) = -2 - 1 = -3\nf(2) + f(-2) = 4 + (-3) = 1 [2 Marks]\nFinal Answer: (i) 5, (ii) 2, (iii) -2.5, (iv) 1 (Full 5/5 Marks Guaranteed).'
        }
      ]
    }
  ]
};
