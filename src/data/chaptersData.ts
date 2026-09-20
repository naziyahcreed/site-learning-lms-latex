import { BookChapter } from '../types/math';

export const CHAPTERS_DATA: BookChapter[] = [
  // ==========================================
  // CHAPTER 1
  // ==========================================
  {
    id: 'chap_1',
    chapterNumber: 1,
    romanNumeral: 'I',
    title: 'Foundations of Real Analysis & Limits',
    subtitle: 'Infinitesimals, Convergence, and the Epsilon-Delta Criterion',
    synopsis:
      'Rigorous calculus relies upon the arithmetization of the continuum. In this opening chapter, we develop the Weierstrassian language of limits (ε-δ), establishing the foundation of all subsequent analytical machinery.',
    prerequisites: ['Set Theory', 'Field Axioms of Real Numbers', 'Elementary Inequalities'],
    sections: [
      {
        id: 'sec_1_1',
        sectionNumber: '1.1',
        title: 'The Epsilon-Delta Criterion & Uniqueness of Limits',
        introText:
          'Before Cauchy and Weierstrass, limits were conceived through intuitive notions of "infinitesimal flow". Here we replace intuition with universal and existential quantifiers: establishing certainty through algebraic bounds.',
        items: [
          {
            id: 'def_1_1',
            type: 'definition',
            number: '1.1',
            title: 'Cauchy-Weierstrass Definition of Limit',
            statementLatex: '\\lim_{x \\to c} f(x) = L \\iff \\forall \\varepsilon > 0, \\; \\exists \\delta > 0 \\;\\text{s.t. } \\forall x \\in \\mathbb{R}, \\; 0 < |x - c| < \\delta \\implies |f(x) - L| < \\varepsilon',
            statementText:
              'We say that the limit of f(x) as x approaches c is L if for every tolerance ε > 0, there exists a radius δ > 0 such that whenever x is within δ of c (x ≠ c), f(x) is guaranteed to lie within ε of L.',
            historicalContext: 'Formulated by Karl Weierstrass in Berlin during the 1860s, dispensing with vague Newtonian "fluxions".'
          },
          {
            id: 'thm_1_1',
            type: 'theorem',
            number: '1.1',
            title: 'Uniqueness of Limits',
            statementLatex: '\\text{If } \\lim_{x \\to c} f(x) = L_1 \\quad\\text{and}\\quad \\lim_{x \\to c} f(x) = L_2, \\quad\\text{then } L_1 = L_2.',
            statementText:
              'A function cannot converge to two distinct values at the same accumulation point.',
            proof: {
              id: 'proof_1_1',
              theoremId: 'thm_1_1',
              summary: 'We prove uniqueness by contradiction. Assume L1 ≠ L2, pick ε equal to half the distance between L1 and L2, and apply the triangle inequality.',
              proofType: 'Proof by Contradiction',
              steps: [
                {
                  id: 'step_1_1_1',
                  stepNumber: 1,
                  title: 'Hypothesis of Distinct Limits',
                  latex: 'L_1 \\neq L_2 \\implies |L_1 - L_2| > 0',
                  explanation: 'Assume for the sake of contradiction that L1 and L2 are distinct limits. Their metric distance |L1 - L2| is strictly positive.',
                  justificationRule: 'Proof by contradiction premise'
                },
                {
                  id: 'step_1_1_2',
                  stepNumber: 2,
                  title: 'Choice of Non-overlapping Epsilon',
                  latex: '\\text{Choose } \\varepsilon = \\frac{|L_1 - L_2|}{2} > 0',
                  explanation: 'We select ε to be strictly half the distance between L1 and L2, guaranteeing the ε-neighborhoods centered at L1 and L2 are disjoint.',
                  justificationRule: 'Archimedean property / constructive choice',
                  interactiveVariable: {
                    name: 'distance',
                    label: '|L1 - L2| distance',
                    min: 0.2,
                    max: 4.0,
                    step: 0.2,
                    defaultValue: 2.0,
                    description: 'Observe how choosing ε = half distance prevents the function from being close to both limits simultaneously.'
                  }
                },
                {
                  id: 'step_1_1_3',
                  stepNumber: 3,
                  title: 'Existence of Respective Deltas',
                  latex: '\\exists \\delta_1, \\delta_2 > 0 : \\begin{cases} 0 < |x - c| < \\delta_1 \\implies |f(x) - L_1| < \\varepsilon \\\\ 0 < |x - c| < \\delta_2 \\implies |f(x) - L_2| < \\varepsilon \\end{cases}',
                  explanation: 'By the definition of limit applied to L1 and L2 respectively, there exist corresponding positive radii δ1 and δ2.',
                  justificationRule: 'Definition 1.1 (Limit Criterion)'
                },
                {
                  id: 'step_1_1_4',
                  stepNumber: 4,
                  title: 'Intersection of Neighborhoods',
                  latex: '\\delta = \\min(\\delta_1, \\delta_2) > 0 \\implies \\forall x \\in (c-\\delta, c+\\delta) \\setminus \\{c\\}',
                  explanation: 'Let δ be the smaller of δ1 and δ2. For any x in this punctured neighborhood, both bounds hold simultaneously.',
                  justificationRule: 'Infimum of finite positive set is positive'
                },
                {
                  id: 'step_1_1_5',
                  stepNumber: 5,
                  title: 'Application of Triangle Inequality',
                  latex: '|L_1 - L_2| = |(L_1 - f(x)) + (f(x) - L_2)| \\le |f(x) - L_1| + |f(x) - L_2| < \\varepsilon + \\varepsilon = 2\\varepsilon',
                  explanation: 'Adding and subtracting f(x) and applying the triangle inequality yields |L1 - L2| < 2ε.',
                  justificationRule: 'Triangle Inequality: |a + b| ≤ |a| + |b|'
                },
                {
                  id: 'step_1_1_6',
                  stepNumber: 6,
                  title: 'Contradiction and Conclusion',
                  latex: '|L_1 - L_2| < 2 \\left( \\frac{|L_1 - L_2|}{2} \\right) = |L_1 - L_2| \\implies |L_1 - L_2| < |L_1 - L_2|',
                  explanation: 'A strictly positive real number cannot be strictly less than itself. This contradiction invalidates the initial premise.',
                  justificationRule: 'Irreflexivity of strict inequality (<)'
                }
              ],
              qedNote: 'Hence L1 = L2, confirming that limits of functions over the real numbers are uniquely determined.',
              fullLatexSnippet: `% Theorem 1.1: Uniqueness of Limits
\\begin{theorem}[Uniqueness of Limits]
Let $f: D \\to \\mathbb{R}$ and $c$ be an accumulation point of $D$.
If $\\lim_{x \\to c} f(x) = L_1$ and $\\lim_{x \\to c} f(x) = L_2$, then $L_1 = L_2$.
\\end{theorem}

\\begin{proof}
Suppose for contradiction that $L_1 \\neq L_2$. Then $|L_1 - L_2| > 0$.
Set $\\varepsilon = \\frac{|L_1 - L_2|}{2} > 0$.
Since $\\lim_{x \\to c} f(x) = L_1$, $\\exists \\delta_1 > 0$ such that $0 < |x - c| < \\delta_1 \\implies |f(x) - L_1| < \\varepsilon$.
Similarly, $\\exists \\delta_2 > 0$ such that $0 < |x - c| < \\delta_2 \\implies |f(x) - L_2| < \\varepsilon$.
Define $\\delta = \\min(\\delta_1, \\delta_2) > 0$. For any $x$ satisfying $0 < |x - c| < \\delta$, we have:
\\begin{align*}
|L_1 - L_2| &= |(L_1 - f(x)) + (f(x) - L_2)| \\\\
&\\le |L_1 - f(x)| + |f(x) - L_2| \\\\
&< \\varepsilon + \\varepsilon = 2\\varepsilon = |L_1 - L_2|.
\\end{align*}
This yields $|L_1 - L_2| < |L_1 - L_2|$, an absurdity.
Therefore, $L_1 = L_2$. \\qedhere
\\end{proof}`
            }
          }
        ],
        detailedEquations: [
          {
            id: 'eq_geom_series',
            title: 'Closed Form Derivation of the Geometric Series Sum',
            category: 'sum',
            initialLatex: 'S_n = \\sum_{k=0}^n r^k = 1 + r + r^2 + \\cdots + r^n',
            finalLatex: 'S = \\lim_{n \\to \\infty} S_n = \\frac{1}{1-r} \\quad (|r| < 1)',
            context: 'Deriving the exact partial sum of the geometric series and its infinite sum limit through Cauchy cancellation.',
            steps: [
              {
                stepIndex: 1,
                label: 'Express partial sum expanded',
                latex: 'S_n = 1 + r + r^2 + r^3 + \\cdots + r^n',
                operation: 'Explicit polynomial expansion of summation'
              },
              {
                stepIndex: 2,
                label: 'Multiply entire equation by the common ratio r',
                latex: 'r S_n = r + r^2 + r^3 + \\cdots + r^n + r^{n+1}',
                operation: 'Homogeneous scalar multiplication by r'
              },
              {
                stepIndex: 3,
                label: 'Subtract the scaled sum from the original sum',
                latex: 'S_n - r S_n = (1 + r + r^2 + \\cdots + r^n) - (r + r^2 + \\cdots + r^n + r^{n+1})',
                operation: 'Telescoping subtraction'
              },
              {
                stepIndex: 4,
                label: 'All intermediate monomials cancel out',
                latex: '(1 - r) S_n = 1 - r^{n+1}',
                operation: 'Linear factoring of (1 - r)'
              },
              {
                stepIndex: 5,
                label: 'Divide by (1 - r) for r ≠ 1',
                latex: 'S_n = \\frac{1 - r^{n+1}}{1 - r}',
                operation: 'Multiplicative inversion'
              },
              {
                stepIndex: 6,
                label: 'Take the limit as n approaches infinity for |r| < 1',
                latex: '\\lim_{n \\to \\infty} S_n = \\lim_{n \\to \\infty} \\frac{1 - r^{n+1}}{1 - r} = \\frac{1 - 0}{1 - r} = \\frac{1}{1 - r}',
                operation: 'Limit evaluation using lim_{n→∞} r^n = 0 when |r| < 1'
              }
            ],
            latexSnippet: `% Step-by-step derivation of Geometric Series
\\begin{align*}
S_n &= \\sum_{k=0}^n r^k = 1 + r + r^2 + \\dots + r^n \\\\
r S_n &= r + r^2 + r^3 + \\dots + r^{n+1} \\\\
S_n(1 - r) &= 1 - r^{n+1} \\\\
S_n &= \\frac{1 - r^{n+1}}{1 - r} \\quad (r \\neq 1) \\\\
\\lim_{n \\to \\infty} S_n &= \\frac{1}{1 - r} \\quad (|r| < 1)
\\end{align*}`
          }
        ],
        problems: [
          {
            id: 'prob_1_1',
            number: '1.1',
            title: 'Rigorous Epsilon-Delta Verification for a Linear Function',
            difficulty: 'Foundational',
            statementLatex: '\\text{Prove from first principles using } \\varepsilon\\text{-}\\delta \\text{ that } \\lim_{x \\to 3} (4x - 5) = 7.',
            description:
              'Follow the guided steps below to algebraically deduce the required δ as a function of the arbitrary tolerance ε.',
            guidedSteps: [
              {
                stepIndex: 1,
                prompt: 'Write down the target absolute value difference |f(x) - L| and simplify it.',
                hint: 'Substitute f(x) = 4x - 5 and L = 7.',
                expectedInsight: 'We compute |(4x - 5) - 7| = |4x - 12| = 4|x - 3|.',
                latexIntermediate: '|f(x) - L| = |(4x - 5) - 7| = |4x - 12| = 4|x - 3|',
                options: [
                  '4|x - 3|',
                  '|4x - 7|',
                  '12|x - 3|',
                  '4|x + 3|'
                ],
                correctOptionIndex: 0
              },
              {
                stepIndex: 2,
                prompt: 'We need this expression to be strictly less than ε whenever 0 < |x - 3| < δ. What is the relation between 4|x - 3| and ε?',
                hint: 'Set 4|x - 3| < ε and isolate |x - 3|.',
                expectedInsight: 'Dividing both sides by 4 gives |x - 3| < ε / 4.',
                latexIntermediate: '4|x - 3| < \\varepsilon \\iff |x - 3| < \\frac{\\varepsilon}{4}',
                options: [
                  '|x - 3| < \\varepsilon / 4',
                  '|x - 3| < 4\\varepsilon',
                  '|x - 3| < \\varepsilon^2 / 4',
                  '|x - 3| < \\varepsilon - 4'
                ],
                correctOptionIndex: 0
              },
              {
                stepIndex: 3,
                prompt: 'What choice of δ ensures the implication holds for any given ε > 0?',
                hint: 'Choose δ equal to or less than the upper bound derived in Step 2.',
                expectedInsight: 'Choosing δ = ε / 4 (or any smaller positive number) guarantees that 0 < |x - 3| < δ implies |f(x) - 7| < ε.',
                latexIntermediate: '\\text{Set } \\delta = \\frac{\\varepsilon}{4}. \\quad 0 < |x - 3| < \\delta \\implies |f(x) - 7| = 4|x - 3| < 4\\left(\\frac{\\varepsilon}{4}\\right) = \\varepsilon.',
                options: [
                  '\\delta = \\varepsilon / 4',
                  '\\delta = 4 / \\varepsilon',
                  '\\delta = \\varepsilon',
                  '\\delta = \\varepsilon / 12'
                ],
                correctOptionIndex: 0
              }
            ],
            finalSolutionLatex: '\\text{Given } \\varepsilon > 0, \\text{ choose } \\delta = \\frac{\\varepsilon}{4}. \\text{ If } 0 < |x - 3| < \\delta, \\text{ then } |(4x-5) - 7| = 4|x-3| < 4\\left(\\frac{\\varepsilon}{4}\\right) = \\varepsilon. \\;\\blacksquare',
            fullSolutionWalkthrough:
              'For any ε > 0, we define δ = ε/4. Whenever 0 < |x - 3| < δ, we have |(4x - 5) - 7| = |4x - 12| = 4|x - 3| < 4δ = 4(ε/4) = ε. By Definition 1.1, the limit equals 7.'
          },
          {
            id: 'prob_1_2',
            number: '1.2',
            title: 'Summation of an Alternating Geometric Series',
            difficulty: 'Intermediate',
            statementLatex: '\\text{Compute the exact analytical sum of the infinite series: } S = \\sum_{k=1}^{\\infty} \\left(-\\frac{2}{3}\\right)^k.',
            description:
              'Deconstruct the index of summation and apply the infinite geometric series formula step-by-step.',
            guidedSteps: [
              {
                stepIndex: 1,
                prompt: 'Identify the common ratio r and verify whether the series converges.',
                hint: 'The base of the power is r. Does |r| < 1?',
                expectedInsight: 'The common ratio is r = -2/3. Since |-2/3| = 2/3 < 1, the series converges absolutely.',
                latexIntermediate: 'r = -\\frac{2}{3}, \\quad |r| = \\frac{2}{3} < 1 \\implies \\text{Convergence guaranteed}',
                options: [
                  'r = -2/3 with |r| < 1, so it converges',
                  'r = 2/3 and it diverges',
                  'r = -3/2 with |r| > 1, so it diverges',
                  'r = 1/3 with conditional convergence'
                ],
                correctOptionIndex: 0
              },
              {
                stepIndex: 2,
                prompt: 'Notice that this series starts at k = 1 rather than k = 0. Factor out the first term a1.',
                hint: 'What is the term for k = 1?',
                expectedInsight: 'The first term is a = (-2/3)^1 = -2/3.',
                latexIntermediate: 'S = a_1 \\sum_{j=0}^{\\infty} r^j = \\left(-\\frac{2}{3}\\right) \\sum_{j=0}^{\\infty} \\left(-\\frac{2}{3}\\right)^j',
                options: [
                  'First term a = -2/3',
                  'First term a = 1',
                  'First term a = 4/9',
                  'First term a = 2/3'
                ],
                correctOptionIndex: 0
              },
              {
                stepIndex: 3,
                prompt: 'Apply the formula S = a / (1 - r) and simplify the fraction.',
                hint: 'Denominator is 1 - (-2/3) = 1 + 2/3 = 5/3.',
                expectedInsight: 'S = (-2/3) / (1 - (-2/3)) = (-2/3) / (5/3) = -2/5.',
                latexIntermediate: 'S = \\frac{-\\frac{2}{3}}{1 - \\left(-\\frac{2}{3}\\right)} = \\frac{-\\frac{2}{3}}{\\frac{5}{3}} = -\\frac{2}{5}',
                options: [
                  '-2/5',
                  '2/5',
                  '-2/3',
                  '3/5'
                ],
                correctOptionIndex: 0
              }
            ],
            finalSolutionLatex: 'S = \\frac{a}{1 - r} = \\frac{-2/3}{1 - (-2/3)} = \\frac{-2/3}{5/3} = -\\frac{2}{5}',
            fullSolutionWalkthrough:
              'Factoring out the initial term gives S = (-2/3) / (1 - (-2/3)) = (-2/3)/(5/3) = -2/5.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // CHAPTER 2
  // ==========================================
  {
    id: 'chap_2',
    chapterNumber: 2,
    romanNumeral: 'II',
    title: 'Differential & Integral Calculus',
    subtitle: 'The Fundamental Theorem of Calculus & Analytical Mechanics',
    synopsis:
      'Isaac Barrow, Isaac Newton, and Gottfried Leibniz unified tangent rates and quadrature accumulations into an inverse relationship. Here we analyze the Fundamental Theorem of Calculus and modern derivation chains.',
    prerequisites: ['Continuous Functions', 'Extreme Value Theorem', 'Mean Value Theorem'],
    sections: [
      {
        id: 'sec_2_1',
        sectionNumber: '2.1',
        title: 'The Fundamental Theorem of Calculus (FTC)',
        introText:
          'The Fundamental Theorem of Calculus bridges the differential operator d/dx and the integral operator ∫. It proves that differentiation and integration are inverse operations on continuous functions.',
        items: [
          {
            id: 'thm_2_1',
            type: 'theorem',
            number: '2.1',
            title: 'First Fundamental Theorem of Calculus (FTC Part 1)',
            statementLatex: '\\text{Let } f: [a, b] \\to \\mathbb{R} \\text{ be continuous, and define } F(x) = \\int_a^x f(t) \\, dt. \\text{ Then } F \\text{ is differentiable on } (a, b) \\text{ and } F\'(x) = f(x).',
            statementText:
              'The accumulation function of any continuous function is continuously differentiable, and its derivative returns the integrand function precisely.',
            proof: {
              id: 'proof_2_1',
              theoremId: 'thm_2_1',
              summary: 'We express the derivative F\'(x) as the limit of the difference quotient, rewrite the difference of integrals as a single interval integral, and apply the Mean Value Theorem for Integrals.',
              proofType: 'Direct Proof',
              steps: [
                {
                  id: 'step_2_1_1',
                  stepNumber: 1,
                  title: 'Difference Quotient Formulation',
                  latex: 'F\'(x) = \\lim_{h \\to 0} \\frac{F(x + h) - F(x)}{h}',
                  explanation: 'By the limit definition of derivative for the accumulation function F(x).',
                  justificationRule: 'Definition of derivative'
                },
                {
                  id: 'step_2_1_2',
                  stepNumber: 2,
                  title: 'Subtracting Accumulation Intervals',
                  latex: 'F(x + h) - F(x) = \\int_a^{x+h} f(t) \\, dt - \\int_a^x f(t) \\, dt = \\int_x^{x+h} f(t) \\, dt',
                  explanation: 'Using the additive property of Riemann integrals over adjacent intervals [a, x] and [x, x+h].',
                  justificationRule: 'Additivity of domain: ∫_a^c = ∫_a^b + ∫_b^c'
                },
                {
                  id: 'step_2_1_3',
                  stepNumber: 3,
                  title: 'Rewriting the Difference Quotient',
                  latex: '\\frac{F(x + h) - F(x)}{h} = \\frac{1}{h} \\int_x^{x+h} f(t) \\, dt',
                  explanation: 'The difference quotient represents the average value of f on the small interval [x, x+h].',
                  justificationRule: 'Algebraic substitution'
                },
                {
                  id: 'step_2_1_4',
                  stepNumber: 4,
                  title: 'Mean Value Theorem for Integrals',
                  latex: '\\exists c_h \\in [x, x+h] : \\frac{1}{h} \\int_x^{x+h} f(t) \\, dt = f(c_h)',
                  explanation: 'Since f is continuous on [x, x+h], it attains its mean value at some point c_h between x and x+h.',
                  justificationRule: 'Mean Value Theorem for Definite Integrals'
                },
                {
                  id: 'step_2_1_5',
                  stepNumber: 5,
                  title: 'Evaluating the Limit as h approaches 0',
                  latex: 'h \\to 0 \\implies c_h \\to x \\implies \\lim_{h \\to 0} f(c_h) = f(x)',
                  explanation: 'As h approaches 0, c_h is squeezed to x. By the continuity of f at x, f(c_h) approaches f(x).',
                  justificationRule: 'Continuity of f: lim_{z→x} f(z) = f(x)'
                },
                {
                  id: 'step_2_1_6',
                  stepNumber: 6,
                  title: 'Conclusion',
                  latex: 'F\'(x) = \\lim_{h \\to 0} \\frac{F(x+h) - F(x)}{h} = f(x)',
                  explanation: 'This proves F is differentiable and its derivative equals f(x).',
                  justificationRule: 'Transitivity of limits'
                }
              ],
              qedNote: 'Thus, differentiation cancels integration, concluding the proof of FTC Part 1.',
              fullLatexSnippet: `% Theorem 2.1: First Fundamental Theorem of Calculus
\\begin{theorem}[Fundamental Theorem of Calculus, Part 1]
Let $f$ be continuous on $[a, b]$, and define $F(x) = \\int_a^x f(t) \\, dt$ for $x \\in [a, b]$.
Then $F$ is uniform continuous on $[a, b]$, differentiable on $(a, b)$, and:
\\[
F'(x) = f(x).
\\]
\\end{theorem}

\\begin{proof}
Let $x \\in (a, b)$ and let $h \\neq 0$ such that $x + h \\in (a, b)$.
By the additivity of the Riemann integral:
\\[
F(x + h) - F(x) = \\int_a^{x+h} f(t) \\, dt - \\int_a^x f(t) \\, dt = \\int_x^{x+h} f(t) \\, dt.
\\]
Hence, the difference quotient is:
\\[
\\frac{F(x + h) - F(x)}{h} = \\frac{1}{h} \\int_x^{x+h} f(t) \\, dt.
\\]
By the Mean Value Theorem for Integrals, since $f$ is continuous on the interval between $x$ and $x + h$, there exists $c_h$ strictly between $x$ and $x + h$ such that:
\\[
\\frac{1}{h} \\int_x^{x+h} f(t) \\, dt = f(c_h).
\\]
Taking the limit as $h \\to 0$, we observe that $x \\le c_h \\le x + h$ (for $h > 0$), which implies $c_h \\to x$ by the Squeeze Theorem.
By continuity of $f$:
\\[
\\lim_{h \\to 0} f(c_h) = f\\left( \\lim_{h \\to 0} c_h \\right) = f(x).
\\]
Thus:
\\[
F'(x) = \\lim_{h \\to 0} \\frac{F(x + h) - F(x)}{h} = f(x). \\qedhere
\\]
\\end{proof}`
            }
          }
        ],
        detailedEquations: [
          {
            id: 'eq_parts_derivation',
            title: 'Derivation of Integration by Parts Formula',
            category: 'integral',
            initialLatex: '\\frac{d}{dx} \\left[ u(x) v(x) \\right] = u\'(x) v(x) + u(x) v\'(x)',
            finalLatex: '\\int u \\, dv = u v - \\int v \\, du',
            context: 'Deriving the fundamental bilinear integration rule directly from Leibniz product differentiation rule.',
            steps: [
              {
                stepIndex: 1,
                label: 'State the Leibniz Product Rule for derivatives',
                latex: '\\frac{d}{dx}[u(x) v(x)] = u\'(x) v(x) + u(x) v\'(x)',
                operation: 'Product rule of differential calculus'
              },
              {
                stepIndex: 2,
                label: 'Integrate both sides with respect to x across interval [a, b]',
                latex: '\\int_a^b \\frac{d}{dx}[u(x) v(x)] \\, dx = \\int_a^b u\'(x) v(x) \\, dx + \\int_a^b u(x) v\'(x) \\, dx',
                operation: 'Linearity of definite integral'
              },
              {
                stepIndex: 3,
                label: 'Apply FTC Part 2 to the left-hand side',
                latex: '\\left[ u(x) v(x) \\right]_a^b = \\int_a^b v(x) u\'(x) \\, dx + \\int_a^b u(x) v\'(x) \\, dx',
                operation: 'Fundamental Theorem of Calculus'
              },
              {
                stepIndex: 4,
                label: 'Rearrange terms to isolate the integral of u(x) v\'(x)',
                latex: '\\int_a^b u(x) v\'(x) \\, dx = \\left[ u(x) v(x) \\right]_a^b - \\int_a^b v(x) u\'(x) \\, dx',
                operation: 'Algebraic transposition'
              },
              {
                stepIndex: 5,
                label: 'Express using standard differential notation du = u\'(x)dx, dv = v\'(x)dx',
                latex: '\\int u \\, dv = u v - \\int v \\, du',
                operation: 'Differential substitution'
              }
            ],
            latexSnippet: `% Integration by Parts Derivation
\\begin{align*}
\\frac{d}{dx}[u \\cdot v] &= u' v + u v' \\\\
\\int \\frac{d}{dx}[u \\cdot v] \\, dx &= \\int u' v \\, dx + \\int u v' \\, dx \\\\
u v &= \\int v \\, du + \\int u \\, dv \\\\
\\int u \\, dv &= u v - \\int v \\, du
\\end{align*}`
          }
        ],
        problems: [
          {
            id: 'prob_2_1',
            number: '2.1',
            title: 'Differentiation of Variable Integral Bounds via Leibniz Rule',
            difficulty: 'Intermediate',
            statementLatex: '\\text{Compute the exact derivative } \\frac{d}{dx} G(x) \\text{ where } G(x) = \\int_0^{x^3} e^{-t^2} \\, dt.',
            description:
              'Combine the First Fundamental Theorem of Calculus with the Chain Rule for a composite upper bound.',
            guidedSteps: [
              {
                stepIndex: 1,
                prompt: 'Define the outer accumulation function F(u) and express G(x) as a composite function.',
                hint: 'Let F(u) = ∫_0^u e^(-t^2) dt, and u(x) = x^3.',
                expectedInsight: 'G(x) is the composite function F(u(x)) where u(x) = x^3.',
                latexIntermediate: 'G(x) = F(u(x)), \\quad F(u) = \\int_0^u e^{-t^2} \\, dt, \\quad u(x) = x^3',
                options: [
                  'G(x) = F(u(x)) with u = x^3 and F\'(u) = e^(-u^2)',
                  'G(x) = x^3 e^(-x^2)',
                  'G(x) = 3x^2 + e^(-x^6)',
                  'G(x) = e^(-t^2)'
                ],
                correctOptionIndex: 0
              },
              {
                stepIndex: 2,
                prompt: 'Apply the Chain Rule: dG/dx = F\'(u) * du/dx. What is F\'(u) by FTC?',
                hint: 'By Theorem 2.1, the derivative of the integral with respect to its upper bound is the integrand evaluated at u.',
                expectedInsight: 'F\'(u) = e^(-u^2). Substituting u = x^3 gives F\'(x^3) = e^(-(x^3)^2) = e^(-x^6).',
                latexIntermediate: 'F\'(u) = e^{-u^2} \\implies F\'(x^3) = e^{-(x^3)^2} = e^{-x^6}',
                options: [
                  'e^(-x^6)',
                  'e^(-x^5)',
                  'e^(-x^3)',
                  '-2x e^(-x^6)'
                ],
                correctOptionIndex: 0
              },
              {
                stepIndex: 3,
                prompt: 'Differentiate the inner function u(x) = x^3 and multiply.',
                hint: 'du/dx = d/dx (x^3) = 3x^2.',
                expectedInsight: 'dG/dx = e^(-x^6) * (3x^2) = 3x^2 e^(-x^6).',
                latexIntermediate: '\\frac{dG}{dx} = F\'(u(x)) \\cdot u\'(x) = e^{-x^6} \\cdot (3x^2) = 3x^2 e^{-x^6}',
                options: [
                  '3x^2 e^{-x^6}',
                  'x^3 e^{-x^6}',
                  '3x^2 e^{-x^2}',
                  '6x^5 e^{-x^6}'
                ],
                correctOptionIndex: 0
              }
            ],
            finalSolutionLatex: '\\frac{d}{dx} \\left( \\int_0^{x^3} e^{-t^2} \\, dt \\right) = 3x^2 e^{-x^6}',
            fullSolutionWalkthrough:
              'By Leibniz integral rule / Chain rule: d/dx ∫_a^{u(x)} f(t) dt = f(u(x)) * u\'(x). Here f(t) = e^(-t^2) and u(x) = x^3, giving e^(-(x^3)^2) * (3x^2) = 3x^2 e^(-x^6).'
          }
        ]
      }
    ]
  },

  // ==========================================
  // CHAPTER 3
  // ==========================================
  {
    id: 'chap_3',
    chapterNumber: 3,
    romanNumeral: 'III',
    title: 'Linear Algebra & Inner Product Spaces',
    subtitle: 'Geometry in Hilbert Spaces, Cauchy-Schwarz, and Orthogonality',
    synopsis:
      'Geometric intuition scales to infinite dimensions through bilinear forms and inner products. This chapter provides algebraic proofs of the Cauchy-Schwarz inequality, angle geometry, and spectral projection.',
    prerequisites: ['Vector Spaces', 'Bilinear Forms', 'Quadratic Polynomial Discriminants'],
    sections: [
      {
        id: 'sec_3_1',
        sectionNumber: '3.1',
        title: 'The Cauchy-Schwarz Inequality',
        introText:
          'The Cauchy-Schwarz Inequality is arguably the single most important inequality in all of mathematics, underpinning quantum mechanics (Heisenberg Uncertainty), statistics (correlation bounds), and functional analysis.',
        items: [
          {
            id: 'thm_3_1',
            type: 'theorem',
            number: '3.1',
            title: 'The Cauchy-Schwarz Inequality',
            statementLatex: '|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\le \\|\\mathbf{u}\\| \\|\\mathbf{v}\\| \\quad \\forall \\mathbf{u}, \\mathbf{v} \\in V',
            statementText:
              'In any real or complex inner product space V, the absolute value of the inner product of two vectors never exceeds the product of their induced norms. Equality holds if and only if u and v are linearly dependent.',
            proof: {
              id: 'proof_3_1',
              theoremId: 'thm_3_1',
              summary: 'We construct a real quadratic polynomial p(t) = ||u - t v||^2. Since norms are non-negative, p(t) >= 0 for all t, which forces its algebraic discriminant to be non-positive.',
              proofType: 'Constructive Proof',
              steps: [
                {
                  id: 'step_3_1_1',
                  stepNumber: 1,
                  title: 'Trivial Case Check',
                  latex: '\\text{If } \\mathbf{v} = \\mathbf{0}, \\quad |\\langle \\mathbf{u}, \\mathbf{0} \\rangle| = 0 \\le \\|\\mathbf{u}\\| \\cdot 0 = 0',
                  explanation: 'If v is the zero vector, both sides equal zero and equality holds trivially.',
                  justificationRule: 'Axiom of inner product with zero vector'
                },
                {
                  id: 'step_3_1_2',
                  stepNumber: 2,
                  title: 'Construction of Norm Quadratic Function',
                  latex: 'p(t) = \\|\\mathbf{u} - t \\mathbf{v}\\|^2 \\ge 0 \\quad \\forall t \\in \\mathbb{R}',
                  explanation: 'By the positive-definiteness axiom of inner product norms, the squared norm of any vector is always greater than or equal to zero.',
                  justificationRule: 'Positive-definiteness: ||w||^2 >= 0',
                  interactiveVariable: {
                    name: 'scalar_t',
                    label: 'Scalar parameter t',
                    min: -3,
                    max: 3,
                    step: 0.25,
                    defaultValue: 1.0,
                    description: 'Notice that p(t) = ||u - tv||^2 forms an upward-opening parabola that never dips strictly below the horizontal axis.'
                  }
                },
                {
                  id: 'step_3_1_3',
                  stepNumber: 3,
                  title: 'Expansion via Bilinearity',
                  latex: 'p(t) = \\langle \\mathbf{u} - t \\mathbf{v}, \\mathbf{u} - t \\mathbf{v} \\rangle = \\|\\mathbf{u}\\|^2 - 2t \\langle \\mathbf{u}, \\mathbf{v} \\rangle + t^2 \\|\\mathbf{v}\\|^2',
                  explanation: 'Expanding the inner product using symmetry and linearity in both arguments.',
                  justificationRule: 'Bilinearity and symmetry of real inner product'
                },
                {
                  id: 'step_3_1_4',
                  stepNumber: 4,
                  title: 'Quadratic Form in t',
                  latex: 'p(t) = A t^2 + B t + C \\ge 0, \\quad A = \\|\\mathbf{v}\\|^2, \\; B = -2\\langle \\mathbf{u}, \\mathbf{v} \\rangle, \\; C = \\|\\mathbf{u}\\|^2',
                  explanation: 'This is a standard quadratic polynomial in t. Since A = ||v||^2 > 0, it is an upward-opening parabola.',
                  justificationRule: 'Polynomial classification'
                },
                {
                  id: 'step_3_1_5',
                  stepNumber: 5,
                  title: 'Discriminant Non-positivity Condition',
                  latex: 'p(t) \\ge 0 \\; \\forall t \\implies \\Delta = B^2 - 4AC \\le 0',
                  explanation: 'A parabola that never dips below the horizontal axis can have at most one real root, hence its discriminant must be less than or equal to zero.',
                  justificationRule: 'Quadratic formula real root theorem'
                },
                {
                  id: 'step_3_1_6',
                  stepNumber: 6,
                  title: 'Algebraic Deduction',
                  latex: '(-2\\langle \\mathbf{u}, \\mathbf{v} \\rangle)^2 - 4(\\|\\mathbf{v}\\|^2)(\\|\\mathbf{u}\\|^2) \\le 0 \\implies 4|\\langle \\mathbf{u}, \\mathbf{v} \\rangle|^2 \\le 4\\|\\mathbf{u}\\|^2 \\|\\mathbf{v}\\|^2',
                  explanation: 'Dividing by 4 and taking the square root of both sides gives the desired inequality.',
                  justificationRule: 'Monotonicity of square root on positive reals'
                }
              ],
              qedNote: 'Dividing by 4 yields |<u, v>|^2 <= ||u||^2 ||v||^2. Taking square roots yields |<u, v>| <= ||u|| ||v||.',
              fullLatexSnippet: `% Theorem 3.1: Cauchy-Schwarz Inequality
\\begin{theorem}[Cauchy-Schwarz Inequality]
Let $(V, \\langle \\cdot, \\cdot \\rangle)$ be a real inner product space. For all $\\mathbf{u}, \\mathbf{v} \\in V$:
\\[
|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\le \\|\\mathbf{u}\\| \\|\\mathbf{v}\\|,
\\]
with equality if and only if $\\mathbf{u}$ and $\\mathbf{v}$ are linearly dependent.
\\end{theorem}

\\begin{proof}
If $\\mathbf{v} = \\mathbf{0}$, the statement is trivial since $\\langle \\mathbf{u}, \\mathbf{0} \\rangle = 0$ and $\\|\\mathbf{0}\\| = 0$.
Assume $\\mathbf{v} \\neq \\mathbf{0}$. For any $t \\in \\mathbb{R}$, by positive-definiteness:
\\[
0 \\le \\|\\mathbf{u} - t \\mathbf{v}\\|^2 = \\langle \\mathbf{u} - t \\mathbf{v}, \\mathbf{u} - t \\mathbf{v} \\rangle.
\\]
Expanding by bilinearity:
\\[
\\|\\mathbf{u}\\|^2 - 2t \\langle \\mathbf{u}, \\mathbf{v} \\rangle + t^2 \\|\\mathbf{v}\\|^2 \\ge 0.
\\]
This is a quadratic polynomial $p(t) = A t^2 + B t + C \\ge 0$ with $A = \\|\\mathbf{v}\\|^2 > 0$, $B = -2\\langle \\mathbf{u}, \\mathbf{v} \\rangle$, and $C = \\|\\mathbf{u}\\|^2$.
Since $p(t) \\ge 0$ for all $t \\in \\mathbb{R}$, $p$ cannot possess two distinct real roots. Hence its discriminant $\\Delta$ must satisfy:
\\[
\\Delta = B^2 - 4 A C \\le 0.
\\]
Substituting $A, B, C$:
\\[
(-2\\langle \\mathbf{u}, \\mathbf{v} \\rangle)^2 - 4 \\|\\mathbf{v}\\|^2 \\|\\mathbf{u}\\|^2 \\le 0 \\implies 4 |\\langle \\mathbf{u}, \\mathbf{v} \\rangle|^2 \\le 4 \\|\\mathbf{u}\\|^2 \\|\\mathbf{v}\\|^2.
\\]
Dividing by 4 and taking the non-negative square root yields:
\\[
|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\le \\|\\mathbf{u}\\| \\|\\mathbf{v}\\|. \\qedhere
\\]
\\end{proof}`
            }
          }
        ],
        detailedEquations: [
          {
            id: 'eq_gram_schmidt',
            title: 'The Gram-Schmidt Orthogonalization Process',
            category: 'algebraic',
            initialLatex: '\\mathbf{u}_k = \\mathbf{v}_k - \\sum_{j=1}^{k-1} \\mathrm{proj}_{\\mathbf{u}_j}(\\mathbf{v}_k)',
            finalLatex: '\\mathbf{e}_k = \\frac{\\mathbf{u}_k}{\\|\\mathbf{u}_k\\|} \\quad (\\langle \\mathbf{e}_i, \\mathbf{e}_j \\rangle = \\delta_{ij})',
            context: 'Deriving the orthogonal projection subtraction operator to transform linearly independent sets into orthonormal bases.',
            steps: [
              {
                stepIndex: 1,
                label: 'Initialize the first orthogonal vector',
                latex: '\\mathbf{u}_1 = \\mathbf{v}_1',
                operation: 'Direct assignment'
              },
              {
                stepIndex: 2,
                label: 'Calculate orthogonal projection of v2 onto u1',
                latex: '\\mathrm{proj}_{\\mathbf{u}_1}(\\mathbf{v}_2) = \\frac{\\langle \\mathbf{v}_2, \\mathbf{u}_1 \\rangle}{\\langle \\mathbf{u}_1, \\mathbf{u}_1 \\rangle} \\mathbf{u}_1',
                operation: 'Scalar projection along u1'
              },
              {
                stepIndex: 3,
                label: 'Subtract the parallel projection component',
                latex: '\\mathbf{u}_2 = \\mathbf{v}_2 - \\frac{\\langle \\mathbf{v}_2, \\mathbf{u}_1 \\rangle}{\\|\\mathbf{u}_1\\|^2} \\mathbf{u}_1',
                operation: 'Vector difference yielding orthogonal remainder'
              },
              {
                stepIndex: 4,
                label: 'Verify orthogonality: <u2, u1> = 0',
                latex: '\\langle \\mathbf{u}_2, \\mathbf{u}_1 \\rangle = \\langle \\mathbf{v}_2, \\mathbf{u}_1 \\rangle - \\frac{\\langle \\mathbf{v}_2, \\mathbf{u}_1 \\rangle}{\\|\\mathbf{u}_1\\|^2} \\langle \\mathbf{u}_1, \\mathbf{u}_1 \\rangle = 0',
                operation: 'Direct inner product verification'
              },
              {
                stepIndex: 5,
                label: 'Normalize each vector to obtain orthonormal basis',
                latex: '\\mathbf{e}_k = \\frac{\\mathbf{u}_k}{\\|\\mathbf{u}_k\\|}',
                operation: 'Scalar division by Euclidean norm'
              }
            ],
            latexSnippet: `% Gram-Schmidt Orthogonalization
\\begin{align*}
\\mathbf{u}_1 &= \\mathbf{v}_1 \\\\
\\mathbf{u}_2 &= \\mathbf{v}_2 - \\frac{\\langle \\mathbf{v}_2, \\mathbf{u}_1 \\rangle}{\\|\\mathbf{u}_1\\|^2} \\mathbf{u}_1 \\\\
\\mathbf{u}_k &= \\mathbf{v}_k - \\sum_{j=1}^{k-1} \\frac{\\langle \\mathbf{v}_k, \\mathbf{u}_j \\rangle}{\\|\\mathbf{u}_j\\|^2} \\mathbf{u}_j \\\\
\\mathbf{e}_k &= \\frac{\\mathbf{u}_k}{\\|\\mathbf{u}_k\\|} \\quad (k = 1, \\dots, n)
\\end{align*}`
          }
        ],
        problems: [
          {
            id: 'prob_3_1',
            number: '3.1',
            title: 'Orthogonal Projection & Minimum Metric Distance',
            difficulty: 'Intermediate',
            statementLatex: '\\text{Let } \\mathbf{v} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\text{ and } \\mathbf{u} = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}. \\text{ Find } \\mathrm{proj}_{\\mathbf{u}}(\\mathbf{v}) \\text{ and the distance } \\|\\mathbf{v} - \\mathrm{proj}_{\\mathbf{u}}(\\mathbf{v})\\|.',
            description:
              'Calculate the scalar projection coefficient and decompose v into parallel and perpendicular components.',
            guidedSteps: [
              {
                stepIndex: 1,
                prompt: 'Compute the inner product <v, u> and the squared norm ||u||^2.',
                hint: '<v, u> = (3)(1) + (4)(0).',
                expectedInsight: '<v, u> = 3 and ||u||^2 = 1^2 + 0^2 = 1.',
                latexIntermediate: '\\langle \\mathbf{v}, \\mathbf{u} \\rangle = 3(1) + 4(0) = 3, \\quad \\|\\mathbf{u}\\|^2 = 1',
                options: [
                  '<v, u> = 3 and ||u||^2 = 1',
                  '<v, u> = 4 and ||u||^2 = 2',
                  '<v, u> = 7 and ||u||^2 = 5',
                  '<v, u> = 0 and ||u||^2 = 1'
                ],
                correctOptionIndex: 0
              },
              {
                stepIndex: 2,
                prompt: 'Construct the projection vector proj_u(v) = (<v, u> / ||u||^2) * u.',
                hint: 'Scale u by the scalar 3.',
                expectedInsight: 'proj_u(v) = 3 * (1, 0) = (3, 0).',
                latexIntermediate: '\\mathrm{proj}_{\\mathbf{u}}(\\mathbf{v}) = \\frac{3}{1} \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 0 \\end{pmatrix}',
                options: [
                  '(3, 0)^T',
                  '(0, 4)^T',
                  '(1, 4)^T',
                  '(3, 4)^T'
                ],
                correctOptionIndex: 0
              },
              {
                stepIndex: 3,
                prompt: 'Compute the orthogonal remainder v - proj_u(v) and its norm.',
                hint: '(3, 4) - (3, 0) = (0, 4).',
                expectedInsight: 'The orthogonal component is (0, 4), which has norm sqrt(0^2 + 4^2) = 4.',
                latexIntermediate: '\\mathbf{v} - \\mathrm{proj}_{\\mathbf{u}}(\\mathbf{v}) = \\begin{pmatrix} 0 \\\\ 4 \\end{pmatrix} \\implies \\|\\mathbf{v} - \\mathrm{proj}_{\\mathbf{u}}(\\mathbf{v})\\| = 4',
                options: [
                  '4',
                  '5',
                  '3',
                  'sqrt(7)'
                ],
                correctOptionIndex: 0
              }
            ],
            finalSolutionLatex: '\\mathrm{proj}_{\\mathbf{u}}(\\mathbf{v}) = \\begin{pmatrix} 3 \\\\ 0 \\end{pmatrix}, \\quad \\text{Distance } d = 4',
            fullSolutionWalkthrough:
              'The vector v decomposes into parallel component (3, 0) and orthogonal component (0, 4). The minimum distance from v to span(u) is exactly ||(0, 4)|| = 4.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // CHAPTER 4
  // ==========================================
  {
    id: 'chap_4',
    chapterNumber: 4,
    romanNumeral: 'IV',
    title: 'Number Theory & Prime Distributions',
    subtitle: 'The Euclidean Algorithm, Diophantine Equations, and Euclid’s Primes',
    synopsis:
      'Arithmetic is the queen of mathematics. In this chapter, we inspect the discrete structure of integers, Euclid’s infinitude proof, Bézout’s linear combination identity, and modular arithmetic.',
    prerequisites: ['Well-Ordering Principle', 'Integer Divisibility', 'Induction'],
    sections: [
      {
        id: 'sec_4_1',
        sectionNumber: '4.1',
        title: 'The Infinitude of Primes & Bézout’s Identity',
        introText:
          'Prime numbers form the multiplicative atomic building blocks of the integers. We analyze Euclid’s celebrated proof from Book IX of the Elements, alongside the algorithmic power of Bézout’s identity.',
        items: [
          {
            id: 'thm_4_1',
            type: 'theorem',
            number: '4.1',
            title: 'Euclid’s Theorem on the Infinitude of Primes',
            statementLatex: '|\\mathbb{P}| = \\infty \\iff \\text{There are strictly more than any assigned quantity of prime numbers.}',
            statementText:
              'The set of prime numbers is infinite. No finite collection of primes can contain all prime numbers.',
            proof: {
              id: 'proof_4_1',
              theoremId: 'thm_4_1',
              summary: 'Suppose primes are finite: {p1, p2, ..., pk}. Construct the integer N = p1*p2*...*pk + 1. N is either prime or divisible by a prime not in the set.',
              proofType: 'Proof by Contradiction',
              steps: [
                {
                  id: 'step_4_1_1',
                  stepNumber: 1,
                  title: 'Finite Primes Assumption',
                  latex: '\\text{Assume } \\mathbb{P} = \\{p_1, p_2, \\dots, p_k\\} \\text{ is the complete, finite set of all primes.}',
                  explanation: 'Hypothesize that there exists an exhaustive finite list of all prime numbers.',
                  justificationRule: 'Proof by contradiction premise'
                },
                {
                  id: 'step_4_1_2',
                  stepNumber: 2,
                  title: 'Construction of the Euclidean Product Number',
                  latex: 'N = \\left( \\prod_{i=1}^k p_i \\right) + 1 = p_1 p_2 \\cdots p_k + 1',
                  explanation: 'Construct N by multiplying all putative primes together and adding 1. Notice N > 1.',
                  justificationRule: 'Arithmetic construction'
                },
                {
                  id: 'step_4_1_3',
                  stepNumber: 3,
                  title: 'Fundamental Theorem of Arithmetic',
                  latex: 'N > 1 \\implies \\exists q \\in \\mathbb{P} \\text{ such that } q \\mid N',
                  explanation: 'Every integer greater than 1 must have at least one prime divisor q.',
                  justificationRule: 'Fundamental Theorem of Arithmetic / Well-Ordering'
                },
                {
                  id: 'step_4_1_4',
                  stepNumber: 4,
                  title: 'Duality Analysis on Prime Divisor q',
                  latex: 'q \\in \\mathbb{P} \\implies q = p_j \\text{ for some } j \\in \\{1, \\dots, k\\}',
                  explanation: 'Since our list was assumed exhaustive, the prime q must be one of the elements pj in our list.',
                  justificationRule: 'Assumption of exhaustive list'
                },
                {
                  id: 'step_4_1_5',
                  stepNumber: 5,
                  title: 'Divisibility of the Difference',
                  latex: 'q \\mid N \\quad\\text{and}\\quad q \\mid \\prod_{i=1}^k p_i \\implies q \\mid \\left( N - \\prod_{i=1}^k p_i \\right) = 1',
                  explanation: 'If q divides both N and the product p1...pk, then q must divide their difference, which is exactly 1.',
                  justificationRule: 'Linear combination divisibility: q|a and q|b => q|(a - b)'
                },
                {
                  id: 'step_4_1_6',
                  stepNumber: 6,
                  title: 'Contradiction and Conclusion',
                  latex: 'q \\mid 1 \\implies q = 1, \\quad \\text{contradicting } q \\ge 2 \\text{ for prime } q',
                  explanation: 'No prime number can divide 1, because all primes are at least 2. The contradiction proves primes are infinite.',
                  justificationRule: 'Definition of prime number (q >= 2)'
                }
              ],
              qedNote: 'Thus, no finite list can contain all primes; the set of prime numbers is countably infinite.',
              fullLatexSnippet: `% Theorem 4.1: Infinitude of Primes
\\begin{theorem}[Euclid's Theorem on Primes]
The set of prime numbers $\\mathbb{P}$ is infinite.
\\end{theorem}

\\begin{proof}
Suppose, to the contrary, that $\\mathbb{P}$ is finite, enumerated completely as:
\\[
\\mathbb{P} = \\{p_1, p_2, \\dots, p_k\\}.
\\]
Consider the integer $N$ defined by:
\\[
N = p_1 p_2 \\cdots p_k + 1.
\\]
Since $N > 1$, by the Fundamental Theorem of Arithmetic, $N$ has at least one prime factor $q \\in \\mathbb{P}$.
Because our list $\\{p_1, \\dots, p_k\\}$ is exhaustive, $q = p_j$ for some index $j \\in \\{1, \\dots, k\\}$.
Consequently, $q$ divides the product $p_1 p_2 \\cdots p_k$.
Since $q \\mid N$ and $q \\mid (p_1 p_2 \\cdots p_k)$, it must divide their difference:
\\[
q \\mid \\left( N - p_1 p_2 \\cdots p_k \\right) = 1.
\\]
However, the only positive divisor of 1 is 1 itself, implying $q = 1$.
This contradicts the definition that $q$ is prime ($q \\ge 2$).
Therefore, the initial assumption that $\\mathbb{P}$ is finite is false. \\qedhere
\\end{proof}`
            }
          }
        ],
        detailedEquations: [
          {
            id: 'eq_euclid_gcd',
            title: 'The Division Algorithm & Extended Euclidean Step Sequence',
            category: 'algebraic',
            initialLatex: '\\gcd(a, b) = \\gcd(b, a \\bmod b)',
            finalLatex: 'a x + b y = \\gcd(a, b) \\quad (x, y \\in \\mathbb{Z})',
            context: 'Computing the greatest common divisor and expressing it as a linear combination of inputs a and b.',
            steps: [
              {
                stepIndex: 1,
                label: 'Division Algorithm formulation: a = q1 * b + r1',
                latex: 'a = q_1 b + r_1, \\quad 0 \\le r_1 < b',
                operation: 'Integer Euclidean division'
              },
              {
                stepIndex: 2,
                label: 'Iterate with remainder: b = q2 * r1 + r2',
                latex: 'b = q_2 r_1 + r_2, \\quad 0 \\le r_2 < r_1',
                operation: 'Recursive step down'
              },
              {
                stepIndex: 3,
                label: 'Continue until remainder vanishes: r_{k-1} = q_{k+1} r_k + 0',
                latex: 'r_{k-1} = q_{k+1} r_k + 0 \\implies \\gcd(a, b) = r_k',
                operation: 'Terminal Euclidean step'
              },
              {
                stepIndex: 4,
                label: 'Back-substitute remainders to express gcd as combination',
                latex: 'r_k = r_{k-2} - q_k r_{k-1} = \\cdots = a x + b y',
                operation: 'Extended Euclidean back-substitution'
              }
            ],
            latexSnippet: `% Extended Euclidean Algorithm
\\begin{align*}
a &= q_1 b + r_1 \\\\
b &= q_2 r_1 + r_2 \\\\
r_1 &= q_3 r_2 + r_3 \\\\
&\\dots \\\\
r_{k-1} &= q_{k+1} r_k + 0 \\implies \\gcd(a, b) = r_k \\\\
\\implies \\gcd(a, b) &= a x + b y
\\end{align*}`
          }
        ],
        problems: [
          {
            id: 'prob_4_1',
            number: '4.1',
            title: 'Computing Modular Inverse via Bézout’s Identity',
            difficulty: 'Advanced',
            statementLatex: '\\text{Find the multiplicative inverse of } 7 \\pmod{31}, \\text{ i.e., find an integer } x \\in \\{1, \\dots, 30\\} \\text{ such that } 7x \\equiv 1 \\pmod{31}.',
            description:
              'Apply the Extended Euclidean Algorithm to 31 and 7, then extract the modular Bézout coefficient.',
            guidedSteps: [
              {
                stepIndex: 1,
                prompt: 'Apply Euclidean division on 31 divided by 7.',
                hint: '31 = 4 * 7 + 3.',
                expectedInsight: '31 = 4(7) + 3, with quotient 4 and remainder 3.',
                latexIntermediate: '31 = 4 \\cdot 7 + 3',
                options: [
                  '31 = 4(7) + 3',
                  '31 = 5(7) - 4',
                  '31 = 3(7) + 10',
                  '31 = 7(4) + 1'
                ],
                correctOptionIndex: 0
              },
              {
                stepIndex: 2,
                prompt: 'Divide 7 by the remainder 3.',
                hint: '7 = 2 * 3 + 1.',
                expectedInsight: '7 = 2(3) + 1, giving remainder 1.',
                latexIntermediate: '7 = 2 \\cdot 3 + 1',
                options: [
                  '7 = 2(3) + 1',
                  '7 = 3(2) + 2',
                  '7 = 1(3) + 4',
                  '7 = 4(3) - 5'
                ],
                correctOptionIndex: 0
              },
              {
                stepIndex: 3,
                prompt: 'Back-substitute to express 1 as a linear combination of 31 and 7.',
                hint: '1 = 7 - 2(3) = 7 - 2(31 - 4 * 7) = 9(7) - 2(31).',
                expectedInsight: '1 = 9(7) - 2(31). Taking this modulo 31 gives 7 * 9 ≡ 1 (mod 31).',
                latexIntermediate: '1 = 7 - 2(31 - 4 \\cdot 7) = 9 \\cdot 7 - 2 \\cdot 31 \\implies 7 \\cdot 9 \\equiv 1 \\pmod{31}',
                options: [
                  '9 * 7 - 2 * 31 = 1',
                  '4 * 7 - 1 * 31 = 1',
                  '5 * 7 - 1 * 31 = 4',
                  '12 * 7 - 3 * 31 = 1'
                ],
                correctOptionIndex: 0
              }
            ],
            finalSolutionLatex: '7^{-1} \\equiv 9 \\pmod{31} \\quad (\\text{since } 7 \\times 9 = 63 = 2 \\times 31 + 1)',
            fullSolutionWalkthrough:
              'Through back-substitution: 1 = 7 - 2(3) = 7 - 2(31 - 4*7) = 9*7 - 2*31. Reducing modulo 31 yields 7 * 9 ≡ 1 (mod 31). The modular inverse is 9.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // CHAPTER 5
  // ==========================================
  {
    id: 'chap_5',
    chapterNumber: 5,
    romanNumeral: 'V',
    title: 'Harmonic Analysis & The Basel Problem',
    subtitle: 'Euler’s Infinite Product, Sinc Function, and Zeta at Even Integers',
    synopsis:
      'In 1734, a 28-year-old Leonhard Euler solved the problem that had stumped the Bernoulli dynasty for half a century: computing the exact sum of the reciprocal squares.',
    prerequisites: ['Taylor Series', 'Weierstrass Factorization', 'Infinite Series Tests'],
    sections: [
      {
        id: 'sec_5_1',
        sectionNumber: '5.1',
        title: 'Euler’s Solution to the Basel Problem',
        introText:
          'Pietro Mengoli proposed the sum of reciprocal squares in 1650. Euler ingeniously treated sin(x)/x as an infinite polynomial factored by its roots, equating Taylor coefficients to derive π^2 / 6.',
        items: [
          {
            id: 'thm_5_1',
            type: 'theorem',
            number: '5.1',
            title: 'The Basel Summation Identity',
            statementLatex: '\\zeta(2) = \\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{1}{1^2} + \\frac{1}{2^2} + \\frac{1}{3^2} + \\cdots = \\frac{\\pi^2}{6}',
            statementText:
              'The sum of the reciprocals of all squared positive integers converges precisely to one-sixth of pi squared.',
            proof: {
              id: 'proof_5_1',
              theoremId: 'thm_5_1',
              summary: 'Equate the Maclaurin expansion of sin(x)/x with Euler\'s infinite product expansion over its integer roots ±k*pi. Comparing coefficients of x^2 immediately produces the result.',
              proofType: 'Direct Proof',
              steps: [
                {
                  id: 'step_5_1_1',
                  stepNumber: 1,
                  title: 'Maclaurin Expansion of the Sinc Function',
                  latex: '\\frac{\\sin x}{x} = 1 - \\frac{x^2}{3!} + \\frac{x^4}{5!} - \\frac{x^6}{7!} + \\cdots = 1 - \\frac{x^2}{6} + \\frac{x^4}{120} - \\cdots',
                  explanation: 'Dividing the standard Taylor series of sin(x) by x.',
                  justificationRule: 'Taylor series expansion for sin(x)'
                },
                {
                  id: 'step_5_1_2',
                  stepNumber: 2,
                  title: 'Roots of the Function sin(x) / x',
                  latex: '\\frac{\\sin x}{x} = 0 \\iff x = \\pm \\pi, \\; \\pm 2\\pi, \\; \\pm 3\\pi, \\; \\dots',
                  explanation: 'The zeros of sin(x) are all integer multiples of π. The zero at x = 0 is removed by the denominator.',
                  justificationRule: 'Trigonometric zeros'
                },
                {
                  id: 'step_5_1_3',
                  stepNumber: 3,
                  title: 'Euler\'s Infinite Product Factorization',
                  latex: '\\frac{\\sin x}{x} = \\prod_{n=1}^{\\infty} \\left( 1 - \\frac{x^2}{n^2 \\pi^2} \\right) = \\left(1 - \\frac{x^2}{\\pi^2}\\right) \\left(1 - \\frac{x^2}{4\\pi^2}\\right) \\left(1 - \\frac{x^2}{9\\pi^2}\\right) \\cdots',
                  explanation: 'Factoring an entire function as an infinite product over its roots, mirroring the Fundamental Theorem of Algebra for polynomials.',
                  justificationRule: 'Weierstrass Factorization Theorem'
                },
                {
                  id: 'step_5_1_4',
                  stepNumber: 4,
                  title: 'Expanding the Product for Quadratic Terms in x',
                  latex: '\\prod_{n=1}^{\\infty} \\left( 1 - \\frac{x^2}{n^2 \\pi^2} \\right) = 1 - x^2 \\left( \\sum_{n=1}^{\\infty} \\frac{1}{n^2 \\pi^2} \\right) + \\mathcal{O}(x^4)',
                  explanation: 'Using Vieta’s formulas on the infinite product: the coefficient of x^2 is the negative sum of all 1 / (n^2 π^2).',
                  justificationRule: 'Vieta’s coefficient relation for monic product'
                },
                {
                  id: 'step_5_1_5',
                  stepNumber: 5,
                  title: 'Equating the Quadratic Coefficients',
                  latex: '-\\frac{1}{6} x^2 = -x^2 \\left( \\frac{1}{\\pi^2} \\sum_{n=1}^{\\infty} \\frac{1}{n^2} \\right) \\implies \\frac{1}{6} = \\frac{1}{\\pi^2} \\sum_{n=1}^{\\infty} \\frac{1}{n^2}',
                  explanation: 'Because two power series representing the same analytic function must have identical coefficients.',
                  justificationRule: 'Uniqueness of power series expansions'
                },
                {
                  id: 'step_5_1_6',
                  stepNumber: 6,
                  title: 'Multiplying by pi squared',
                  latex: '\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}',
                  explanation: 'Multiplying both sides by π^2 yields Euler’s famous exact formula.',
                  justificationRule: 'Algebraic simplification'
                }
              ],
              qedNote: 'The Basel sum converges to exactly π^2 / 6, establishing the first evaluated non-trivial Riemann Zeta value.',
              fullLatexSnippet: `% Theorem 5.1: The Basel Problem
\\begin{theorem}[Euler's Solution to the Basel Problem]
The sum of the reciprocals of the squares of the positive integers is:
\\[
\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}.
\\]
\\end{theorem}

\\begin{proof}
Consider the sinc function $f(x) = \\frac{\\sin x}{x}$.
Its Taylor series expansion about $x = 0$ is:
\\[
\\frac{\\sin x}{x} = 1 - \\frac{x^2}{3!} + \\frac{x^4}{5!} - \\cdots = 1 - \\frac{x^2}{6} + \\frac{x^4}{120} - \\cdots
\\]
The zeros of $\\frac{\\sin x}{x}$ occur precisely at $x = \\pm n\\pi$ for $n = 1, 2, 3, \\dots$.
Euler factored this function as an infinite product over its roots:
\\[
\\frac{\\sin x}{x} = \\prod_{n=1}^{\\infty} \\left( 1 - \\frac{x^2}{n^2 \\pi^2} \\right) = \\left(1 - \\frac{x^2}{\\pi^2}\\right) \\left(1 - \\frac{x^2}{4\\pi^2}\\right) \\left(1 - \\frac{x^2}{9\\pi^2}\\right) \\cdots
\\]
Expanding this product to collect the coefficient of $x^2$:
\\[
\\left(1 - \\frac{x^2}{\\pi^2}\\right) \\left(1 - \\frac{x^2}{4\\pi^2}\\right) \\cdots = 1 - x^2 \\left( \\frac{1}{\\pi^2} + \\frac{1}{4\\pi^2} + \\frac{1}{9\\pi^2} + \\cdots \\right) + \\mathcal{O}(x^4).
\\]
Equating the coefficient of $x^2$ with that in the Taylor expansion:
\\[
-\\frac{1}{6} = -\\frac{1}{\\pi^2} \\sum_{n=1}^{\\infty} \\frac{1}{n^2}.
\\]
Multiplying both sides by $-\\pi^2$:
\\[
\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}. \\qedhere
\\]
\\end{proof}`
            }
          }
        ],
        detailedEquations: [
          {
            id: 'eq_telescoping_sum',
            title: 'Telescoping Series via Partial Fraction Decomposition',
            category: 'sum',
            initialLatex: 'S = \\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)}',
            finalLatex: 'S = 1',
            context: 'Breaking a rational summand into partial fractions to produce total internal algebraic cancellation.',
            steps: [
              {
                stepIndex: 1,
                label: 'Set up partial fraction decomposition form',
                latex: '\\frac{1}{n(n+1)} = \\frac{A}{n} + \\frac{B}{n+1}',
                operation: 'Partial fraction setup'
              },
              {
                stepIndex: 2,
                label: 'Solve for coefficients A and B',
                latex: '1 = A(n+1) + B(n) \\implies A = 1, \\; B = -1',
                operation: 'Equating polynomial coefficients'
              },
              {
                stepIndex: 3,
                label: 'Rewrite summand as difference',
                latex: '\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}',
                operation: 'Algebraic substitution'
              },
              {
                stepIndex: 4,
                label: 'Write the N-th partial sum explicitly',
                latex: 'S_N = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{N} - \\frac{1}{N+1}\\right)',
                operation: 'Summation expansion'
              },
              {
                stepIndex: 5,
                label: 'Telescope intermediate terms to leave boundaries',
                latex: 'S_N = 1 - \\frac{1}{N+1}',
                operation: 'Internal cancellation'
              },
              {
                stepIndex: 6,
                label: 'Take the limit as N approaches infinity',
                latex: '\\lim_{N \\to \\infty} S_N = \\lim_{N \\to \\infty} \\left(1 - \\frac{1}{N+1}\\right) = 1 - 0 = 1',
                operation: 'Infinite limit evaluation'
              }
            ],
            latexSnippet: `% Telescoping Series Summation
\\begin{align*}
\\sum_{n=1}^N \\frac{1}{n(n+1)} &= \\sum_{n=1}^N \\left( \\frac{1}{n} - \\frac{1}{n+1} \\right) \\\\
&= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\dots + \\left(\\frac{1}{N} - \\frac{1}{N+1}\\right) \\\\
&= 1 - \\frac{1}{N+1} \\\\
\\lim_{N \\to \\infty} S_N &= 1
\\end{align*}`
          }
        ],
        problems: [
          {
            id: 'prob_5_1',
            number: '5.1',
            title: 'Evaluating Sum of Odd Reciprocal Squares',
            difficulty: 'Intermediate',
            statementLatex: '\\text{Using the result } \\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}, \\text{ compute the sum of odd reciprocal squares: } \\sum_{k=0}^\\infty \\frac{1}{(2k+1)^2} = \\frac{1}{1^2} + \\frac{1}{3^2} + \\frac{1}{5^2} + \\cdots',
            description:
              'Separate the total series into even and odd index subsets and factor out 1/4.',
            guidedSteps: [
              {
                stepIndex: 1,
                prompt: 'Express the sum of even reciprocal squares: 1/2^2 + 1/4^2 + 1/6^2 + ... by factoring out 1/4.',
                hint: 'Note that (2n)^2 = 4n^2.',
                expectedInsight: 'The even terms sum to 1/4 * sum_{n=1}^inf (1/n^2) = (1/4) * (pi^2 / 6) = pi^2 / 24.',
                latexIntermediate: '\\sum_{n=1}^{\\infty} \\frac{1}{(2n)^2} = \\frac{1}{4} \\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{1}{4} \\left( \\frac{\\pi^2}{6} \\right) = \\frac{\\pi^2}{24}',
                options: [
                  'pi^2 / 24',
                  'pi^2 / 12',
                  'pi^2 / 8',
                  'pi^2 / 16'
                ],
                correctOptionIndex: 0
              },
              {
                stepIndex: 2,
                prompt: 'Notice that Total Sum = (Odd Sum) + (Even Sum). Express the Odd Sum.',
                hint: 'Odd Sum = Total Sum - Even Sum.',
                expectedInsight: 'Odd Sum = pi^2 / 6 - pi^2 / 24.',
                latexIntermediate: '\\text{Odd Sum} = \\sum_{n=1}^\\infty \\frac{1}{n^2} - \\sum_{n=1}^\\infty \\frac{1}{(2n)^2} = \\frac{\\pi^2}{6} - \\frac{\\pi^2}{24}',
                options: [
                  'pi^2 / 6 - pi^2 / 24',
                  'pi^2 / 6 + pi^2 / 24',
                  'pi^2 / 6 * 4',
                  'pi^2 / 12'
                ],
                correctOptionIndex: 0
              },
              {
                stepIndex: 3,
                prompt: 'Subtract the two fractions by finding a common denominator (24).',
                hint: 'pi^2 / 6 = 4*pi^2 / 24. 4 - 1 = 3.',
                expectedInsight: '(4*pi^2 - pi^2) / 24 = 3*pi^2 / 24 = pi^2 / 8.',
                latexIntermediate: '\\frac{4\\pi^2 - \\pi^2}{24} = \\frac{3\\pi^2}{24} = \\frac{\\pi^2}{8}',
                options: [
                  'pi^2 / 8',
                  'pi^2 / 12',
                  'pi^2 / 16',
                  'pi^2 / 4'
                ],
                correctOptionIndex: 0
              }
            ],
            finalSolutionLatex: '\\sum_{k=0}^{\\infty} \\frac{1}{(2k+1)^2} = \\frac{\\pi^2}{8}',
            fullSolutionWalkthrough:
              'Total sum = Odd sum + Even sum. Since Even sum = (1/4) * (pi^2 / 6) = pi^2 / 24, we subtract: Odd sum = pi^2/6 - pi^2/24 = 3*pi^2/24 = pi^2/8.'
          }
        ]
      }
    ]
  }
];
