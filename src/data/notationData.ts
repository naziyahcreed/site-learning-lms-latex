import { NotationCategory, NotationItem } from '../types/math';

export const NOTATION_CATEGORIES: NotationCategory[] = [
  { id: 'all', name: 'All Notations', description: 'Complete reference across all disciplines' },
  { id: 'logic_sets', name: 'Logic & Set Theory', description: 'Quantifiers, connectives, sets, relations' },
  { id: 'calculus_analysis', name: 'Calculus & Real Analysis', description: 'Limits, derivatives, integrals, series, epsilon-delta' },
  { id: 'linear_algebra', name: 'Linear Algebra', description: 'Vectors, matrices, inner products, operators, spectra' },
  { id: 'number_theory', name: 'Number Theory & Algebra', description: 'Divisibility, modular congruence, totient, algebraic structures' },
  { id: 'probability_combinatorics', name: 'Probability & Combinatorics', description: 'Permutations, binomials, expectation, variance, sample spaces' },
  { id: 'geometry_topology', name: 'Geometry & Topology', description: 'Neighborhoods, boundaries, closures, congruence, angles' },
];

export const NOTATION_LIBRARY: NotationItem[] = [
  // --- Logic & Set Theory ---
  {
    id: 'not_forall',
    symbol: '∀',
    latexCommand: '\\forall',
    name: 'Universal Quantifier',
    category: 'logic_sets',
    readAs: 'for all, for every, for each',
    meaning: 'Asserts that a predicate is true for every element in the domain of discourse.',
    exampleLatex: '\\forall x \\in \\mathbb{R}, \\; x^2 \\ge 0',
    exampleExplanation: 'For all real numbers x, x squared is greater than or equal to zero.'
  },
  {
    id: 'not_exists',
    symbol: '∃',
    latexCommand: '\\exists',
    name: 'Existential Quantifier',
    category: 'logic_sets',
    readAs: 'there exists, for some',
    meaning: 'Asserts that there is at least one element in the domain for which the statement holds.',
    exampleLatex: '\\exists x \\in \\mathbb{R} : x^2 = 2',
    exampleExplanation: 'There exists a real number x such that x squared equals 2.'
  },
  {
    id: 'not_in',
    symbol: '∈',
    latexCommand: '\\in',
    name: 'Element of (Set Membership)',
    category: 'logic_sets',
    readAs: 'is in, belongs to, is an element of',
    meaning: 'Indicates that an object is a member of a given set.',
    exampleLatex: '3 \\in \\mathbb{Z}',
    exampleExplanation: '3 is an element of the integers.'
  },
  {
    id: 'not_notin',
    symbol: '∉',
    latexCommand: '\\notin',
    name: 'Not an Element of',
    category: 'logic_sets',
    readAs: 'is not in, does not belong to',
    meaning: 'Indicates that an object is not contained in the given set.',
    exampleLatex: '\\sqrt{2} \\notin \\mathbb{Q}',
    exampleExplanation: 'The square root of 2 is not in the set of rational numbers.'
  },
  {
    id: 'not_subset',
    symbol: '⊆',
    latexCommand: '\\subseteq',
    name: 'Subset',
    category: 'logic_sets',
    readAs: 'is a subset of',
    meaning: 'Set A is a subset of B if every element of A is also an element of B.',
    exampleLatex: '\\mathbb{N} \\subseteq \\mathbb{Z} \\subseteq \\mathbb{Q} \\subseteq \\mathbb{R} \\subseteq \\mathbb{C}',
    exampleExplanation: 'The natural numbers are a subset of integers, which are a subset of rationals, reals, and complexes.'
  },
  {
    id: 'not_union',
    symbol: '∪',
    latexCommand: '\\cup',
    name: 'Set Union',
    category: 'logic_sets',
    readAs: 'union, cup',
    meaning: 'The collection of all elements that belong to A, B, or both.',
    exampleLatex: 'A \\cup B = \\{ x : x \\in A \\lor x \\in B \\}',
    exampleExplanation: 'The union of A and B is the set of all elements in A or B.'
  },
  {
    id: 'not_intersection',
    symbol: '∩',
    latexCommand: '\\cap',
    name: 'Set Intersection',
    category: 'logic_sets',
    readAs: 'intersection, cap',
    meaning: 'The set containing elements that belong simultaneously to both A and B.',
    exampleLatex: 'A \\cap B = \\{ x : x \\in A \\land x \\in B \\}',
    exampleExplanation: 'The intersection of A and B contains elements belonging to both.'
  },
  {
    id: 'not_empty',
    symbol: '∅',
    latexCommand: '\\emptyset',
    name: 'Empty Set',
    category: 'logic_sets',
    readAs: 'the empty set, null set',
    meaning: 'The unique set containing no elements, having cardinality 0.',
    exampleLatex: '\\{ x \\in \\mathbb{R} : x^2 + 1 = 0 \\} = \\emptyset',
    exampleExplanation: 'The set of real numbers whose square is -1 is empty.'
  },
  {
    id: 'not_implies',
    symbol: '⟹',
    latexCommand: '\\implies',
    name: 'Material Implication',
    category: 'logic_sets',
    readAs: 'implies, if... then',
    meaning: 'Logical implication: P implies Q is false only when P is true and Q is false.',
    exampleLatex: 'x > 2 \\implies x^2 > 4',
    exampleExplanation: 'If x is strictly greater than 2, then x squared is greater than 4.'
  },
  {
    id: 'not_iff',
    symbol: '⟺',
    latexCommand: '\\iff',
    name: 'Biconditional (If and Only If)',
    category: 'logic_sets',
    readAs: 'if and only if, is equivalent to',
    meaning: 'Both directions of implication hold: P implies Q and Q implies P.',
    exampleLatex: 'a \\cdot b = 0 \\iff (a = 0 \\lor b = 0)',
    exampleExplanation: 'Product of two numbers is zero iff at least one factor is zero in an integral domain.'
  },
  {
    id: 'not_therefore',
    symbol: '∴',
    latexCommand: '\\therefore',
    name: 'Therefore',
    category: 'logic_sets',
    readAs: 'therefore, hence',
    meaning: 'Introduces a logical deduction deduced from preceding premises.',
    exampleLatex: 'p \\land (p \\implies q) \\;\\therefore\\; q',
    exampleExplanation: 'Modus ponens: p and p implies q, therefore q.'
  },

  // --- Calculus & Real Analysis ---
  {
    id: 'not_limit',
    symbol: 'lim',
    latexCommand: '\\lim_{x \\to a} f(x)',
    name: 'Limit of a Function',
    category: 'calculus_analysis',
    readAs: 'the limit of f(x) as x approaches a',
    meaning: 'The value that f(x) approaches as the input x comes arbitrarily close to a.',
    exampleLatex: '\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1',
    exampleExplanation: 'The fundamental trigonometric limit evaluated at zero.'
  },
  {
    id: 'not_derivative',
    symbol: 'df/dx',
    latexCommand: '\\frac{df}{dx}',
    name: 'Derivative (Leibniz Notation)',
    category: 'calculus_analysis',
    readAs: 'd f by d x, the derivative of f with respect to x',
    meaning: 'The instantaneous rate of change of f(x) with respect to x.',
    exampleLatex: '\\frac{d}{dx} \\left( e^{3x} \\right) = 3e^{3x}',
    exampleExplanation: 'Chain rule applied to natural exponential function.'
  },
  {
    id: 'not_partial',
    symbol: '∂',
    latexCommand: '\\frac{\\partial f}{\\partial x}',
    name: 'Partial Derivative',
    category: 'calculus_analysis',
    readAs: 'partial f over partial x, the partial derivative of f with respect to x',
    meaning: 'Derivative with respect to one variable while holding all other variables constant.',
    exampleLatex: '\\frac{\\partial}{\\partial x}(x^2 y^3) = 2x y^3',
    exampleExplanation: 'Differentiating with respect to x while treating y as a constant.'
  },
  {
    id: 'not_integral',
    symbol: '∫',
    latexCommand: '\\int_a^b f(x) \\, dx',
    name: 'Definite Riemann Integral',
    category: 'calculus_analysis',
    readAs: 'the integral of f(x) from a to b with respect to x',
    meaning: 'The signed accumulation (area under curve) of f(x) over interval [a, b].',
    exampleLatex: '\\int_0^1 x^2 \\, dx = \\left[ \\frac{x^3}{3} \\right]_0^1 = \\frac{1}{3}',
    exampleExplanation: 'Definite integral evaluated via the Fundamental Theorem of Calculus.'
  },
  {
    id: 'not_contour',
    symbol: '∮',
    latexCommand: '\\oint_C \\mathbf{F} \\cdot d\\mathbf{r}',
    name: 'Closed Line / Contour Integral',
    category: 'calculus_analysis',
    readAs: 'the closed loop integral over C',
    meaning: 'Integral taken over a closed boundary curve C in vector calculus or complex analysis.',
    exampleLatex: '\\oint_C \\frac{1}{z} \\, dz = 2\\pi i',
    exampleExplanation: 'Cauchy residue theorem for unit circle enclosing simple pole at origin.'
  },
  {
    id: 'not_gradient',
    symbol: '∇',
    latexCommand: '\\nabla f',
    name: 'Nabla / Gradient Operator',
    category: 'calculus_analysis',
    readAs: 'grad f, del f',
    meaning: 'Vector of all first-order partial derivatives pointing in direction of steepest ascent.',
    exampleLatex: '\\nabla f(x, y) = \\left( \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y} \\right)',
    exampleExplanation: 'Gradient vector in two-dimensional Cartesian coordinates.'
  },
  {
    id: 'not_laplacian',
    symbol: 'Δ',
    latexCommand: '\\Delta f = \\nabla^2 f',
    name: 'Laplace Operator',
    category: 'calculus_analysis',
    readAs: 'Laplacian of f, del-squared f',
    meaning: 'Divergence of the gradient, measuring how the average value in a ball deviates from point value.',
    exampleLatex: '\\Delta u = \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0',
    exampleExplanation: "Laplace's equation governing steady-state harmonic functions."
  },
  {
    id: 'not_sum',
    symbol: '∑',
    latexCommand: '\\sum_{k=1}^n a_k',
    name: 'Summation Operator',
    category: 'calculus_analysis',
    readAs: 'sum of a_k from k equals 1 to n',
    meaning: 'Addition of a sequence of terms indexed by k.',
    exampleLatex: '\\sum_{k=1}^{\\infty} \\frac{1}{k^2} = \\frac{\\pi^2}{6}',
    exampleExplanation: "Euler's solution to the famous Basel Problem."
  },
  {
    id: 'not_epsilon_delta',
    symbol: 'ε, δ',
    latexCommand: '|x - c| < \\delta \\implies |f(x) - L| < \\varepsilon',
    name: 'Epsilon-Delta Continuity Condition',
    category: 'calculus_analysis',
    readAs: 'for every epsilon greater than zero there exists delta greater than zero',
    meaning: 'The rigorous Cauchy-Weierstrass formulation of limit and continuous functions.',
    exampleLatex: '\\forall \\varepsilon > 0, \\; \\exists \\delta > 0 : 0 < |x - a| < \\delta \\implies |f(x) - L| < \\varepsilon',
    exampleExplanation: 'Formal definition of limit in metric spaces and real analysis.'
  },

  // --- Linear Algebra ---
  {
    id: 'not_transpose',
    symbol: 'Aᵀ',
    latexCommand: '\\mathbf{A}^\\top',
    name: 'Matrix Transpose',
    category: 'linear_algebra',
    readAs: 'A transpose',
    meaning: 'Flips a matrix over its main diagonal, swapping row and column indices.',
    exampleLatex: '(\\mathbf{A} \\mathbf{B})^\\top = \\mathbf{B}^\\top \\mathbf{A}^\\top',
    exampleExplanation: 'Transpose of matrix product reverses factor order.'
  },
  {
    id: 'not_inverse',
    symbol: 'A⁻¹',
    latexCommand: '\\mathbf{A}^{-1}',
    name: 'Matrix Inverse',
    category: 'linear_algebra',
    readAs: 'A inverse',
    meaning: 'The unique matrix such that matrix multiplied by its inverse yields the identity matrix.',
    exampleLatex: '\\mathbf{A} \\mathbf{A}^{-1} = \\mathbf{A}^{-1} \\mathbf{A} = \\mathbf{I}_n',
    exampleExplanation: 'Definition of an invertible (non-singular) square matrix.'
  },
  {
    id: 'not_determinant',
    symbol: 'det(A)',
    latexCommand: '\\det(\\mathbf{A}) \\text{ or } |\\mathbf{A}|',
    name: 'Determinant',
    category: 'linear_algebra',
    readAs: 'determinant of A',
    meaning: 'Scalar value characterizing signed volume scaling factor of the linear transformation.',
    exampleLatex: '\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc',
    exampleExplanation: '2x2 determinant formula.'
  },
  {
    id: 'not_inner_prod',
    symbol: '⟨u, v⟩',
    latexCommand: '\\langle \\mathbf{u}, \\mathbf{v} \\rangle',
    name: 'Inner Product',
    category: 'linear_algebra',
    readAs: 'inner product of u and v, scalar product',
    meaning: 'A positive-definite conjugate-symmetric bilinear form inducing norm and orthogonality.',
    exampleLatex: '\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\sum_{i=1}^n u_i v_i = \\|\\mathbf{u}\\| \\|\\mathbf{v}\\| \\cos \\theta',
    exampleExplanation: 'Standard Euclidean dot product and geometric cosine angle relation.'
  },
  {
    id: 'not_norm',
    symbol: '‖v‖',
    latexCommand: '\\|\\mathbf{v}\\|',
    name: 'Vector Norm (Length)',
    category: 'linear_algebra',
    readAs: 'norm of v, length of v',
    meaning: 'Function assigning positive length to vector satisfying triangle inequality.',
    exampleLatex: '\\|\\mathbf{v}\\|_2 = \\sqrt{\\sum_{i=1}^n v_i^2}',
    exampleExplanation: 'Standard Euclidean L2 norm.'
  },
  {
    id: 'not_eigen',
    symbol: 'Av = λv',
    latexCommand: '\\mathbf{A} \\mathbf{v} = \\lambda \\mathbf{v}',
    name: 'Eigenvalue Equation',
    category: 'linear_algebra',
    readAs: 'A times v equals lambda times v',
    meaning: 'A non-zero vector v whose direction is invariant under linear transformation A, scaled by lambda.',
    exampleLatex: '\\det(\\mathbf{A} - \\lambda \\mathbf{I}) = 0',
    exampleExplanation: 'The characteristic equation solved to determine eigenvalues.'
  },

  // --- Number Theory & Algebra ---
  {
    id: 'not_divides',
    symbol: '∣',
    latexCommand: 'a \\mid b',
    name: 'Divisibility Relation',
    category: 'number_theory',
    readAs: 'a divides b, a is a factor of b',
    meaning: 'There exists an integer k such that b = a * k.',
    exampleLatex: '3 \\mid 12 \\iff \\exists k \\in \\mathbb{Z} : 12 = 3k',
    exampleExplanation: '3 divides 12 because 12 = 3 * 4.'
  },
  {
    id: 'not_mod_congruence',
    symbol: '≡',
    latexCommand: 'a \\equiv b \\pmod m',
    name: 'Modular Congruence',
    category: 'number_theory',
    readAs: 'a is congruent to b modulo m',
    meaning: 'The difference (a - b) is an integer multiple of m, i.e., m divides (a - b).',
    exampleLatex: '17 \\equiv 5 \\pmod{12}',
    exampleExplanation: '17 and 5 leave the same remainder when divided by 12.'
  },
  {
    id: 'not_gcd',
    symbol: 'gcd(a, b)',
    latexCommand: '\\gcd(a, b)',
    name: 'Greatest Common Divisor',
    category: 'number_theory',
    readAs: 'gcd of a and b, greatest common factor',
    meaning: 'The largest positive integer dividing both a and b.',
    exampleLatex: '\\gcd(54, 24) = 6',
    exampleExplanation: '6 is the largest shared divisor of 54 and 24.'
  },
  {
    id: 'not_totient',
    symbol: 'φ(n)',
    latexCommand: '\\phi(n)',
    name: "Euler's Totient Function",
    category: 'number_theory',
    readAs: 'phi of n, totient of n',
    meaning: 'Counts integers k up to n with gcd(k, n) = 1 (coprime integers).',
    exampleLatex: 'a^{\\phi(n)} \\equiv 1 \\pmod n \\quad \\text{if } \\gcd(a, n) = 1',
    exampleExplanation: "Euler's Totient Theorem generalizing Fermat's Little Theorem."
  },

  // --- Probability & Combinatorics ---
  {
    id: 'not_binomial',
    symbol: '(n k)',
    latexCommand: '\\binom{n}{k}',
    name: 'Binomial Coefficient (Combination)',
    category: 'probability_combinatorics',
    readAs: 'n choose k',
    meaning: 'Number of ways to choose k unordered items from a set of n distinct items.',
    exampleLatex: '\\binom{n}{k} = \\frac{n!}{k!(n-k)!}',
    exampleExplanation: 'Formula for combinations with factorial representation.'
  },
  {
    id: 'not_expectation',
    symbol: 'E[X]',
    latexCommand: '\\mathbb{E}[X]',
    name: 'Expected Value',
    category: 'probability_combinatorics',
    readAs: 'expectation of X, expected value of X',
    meaning: 'The probability-weighted average of all possible values of random variable X.',
    exampleLatex: '\\mathbb{E}[X] = \\int_{-\\infty}^{\\infty} x f_X(x) \\, dx',
    exampleExplanation: 'Expected value for a continuous random variable with PDF f(x).'
  },
  {
    id: 'not_variance',
    symbol: 'Var(X)',
    latexCommand: '\\mathrm{Var}(X) = \\sigma^2',
    name: 'Variance',
    category: 'probability_combinatorics',
    readAs: 'variance of X, sigma squared',
    meaning: 'Measure of dispersion: the expectation of the squared deviation of X from its mean.',
    exampleLatex: '\\mathrm{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2',
    exampleExplanation: 'Standard computational shortcut formula for variance.'
  },

  // --- Geometry & Topology ---
  {
    id: 'not_ball',
    symbol: 'B_ε(x)',
    latexCommand: 'B_\\varepsilon(x_0)',
    name: 'Open Ball / Neighborhood',
    category: 'geometry_topology',
    readAs: 'open ball of radius epsilon centered at x_0',
    meaning: 'The set of all points within metric distance strictly less than epsilon from center.',
    exampleLatex: 'B_\\varepsilon(x_0) = \\{ x \\in X : d(x, x_0) < \\varepsilon \\}',
    exampleExplanation: 'Fundamental basis element for topology induced by metric d.'
  },
  {
    id: 'not_boundary',
    symbol: '∂S',
    latexCommand: '\\partial S',
    name: 'Boundary of a Set',
    category: 'geometry_topology',
    readAs: 'boundary of S, partial S',
    meaning: 'Points whose every neighborhood contains points inside S and points outside S.',
    exampleLatex: '\\partial S = \\bar{S} \\setminus S^\\circ',
    exampleExplanation: 'Set difference between closure and interior of S.'
  },
  {
    id: 'not_closure',
    symbol: 'S̄',
    latexCommand: '\\overline{S}',
    name: 'Closure of a Set',
    category: 'geometry_topology',
    readAs: 'closure of S, S bar',
    meaning: 'Smallest closed set containing S; the union of S and all its limit points.',
    exampleLatex: '\\overline{(0, 1)} = [0, 1]',
    exampleExplanation: 'The closure of open unit interval is the closed unit interval.'
  },
  {
    id: 'not_perp',
    symbol: '⟂',
    latexCommand: '\\mathbf{u} \\perp \\mathbf{v}',
    name: 'Perpendicular / Orthogonal',
    category: 'geometry_topology',
    readAs: 'is perpendicular to, is orthogonal to',
    meaning: 'Meeting or intersecting at right angles (90 degrees, or inner product is 0).',
    exampleLatex: '\\mathbf{u} \\perp \\mathbf{v} \\iff \\langle \\mathbf{u}, \\mathbf{v} \\rangle = 0',
    exampleExplanation: 'Algebraic characterization of orthogonality via zero inner product.'
  }
];
