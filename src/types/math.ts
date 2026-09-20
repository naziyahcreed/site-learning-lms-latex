export type Difficulty = 'Foundational' | 'Intermediate' | 'Advanced';

export interface ProofStep {
  id: string;
  stepNumber: number;
  title: string;
  latex: string;
  explanation: string;
  justificationRule: string;
  intuitionNote?: string;
  interactiveVariable?: {
    name: string;
    label: string;
    min: number;
    max: number;
    step: number;
    defaultValue: number;
    unit?: string;
    description: string;
  };
}

export interface InteractiveProof {
  id: string;
  theoremId: string;
  summary: string;
  proofType: 'Direct Proof' | 'Proof by Contradiction' | 'Mathematical Induction' | 'Epsilon-Delta Construction' | 'Constructive Proof';
  steps: ProofStep[];
  qedNote: string;
  fullLatexSnippet: string;
}

export interface EquationStep {
  stepIndex: number;
  label: string;
  latex: string;
  operation: string;
  substitutionsOrRemarks?: string;
}

export interface DetailedEquation {
  id: string;
  title: string;
  category: 'sum' | 'integral' | 'algebraic' | 'limit' | 'recurrence';
  initialLatex: string;
  finalLatex: string;
  context: string;
  steps: EquationStep[];
  latexSnippet: string;
}

export interface ProblemStepGuide {
  stepIndex: number;
  prompt: string;
  hint: string;
  expectedInsight: string;
  latexIntermediate: string;
  options?: string[];
  correctOptionIndex?: number;
  numericOrSymbolicAnswer?: string;
}

export interface ProblemItem {
  id: string;
  number: string;
  title: string;
  difficulty: Difficulty;
  statementLatex: string;
  description: string;
  guidedSteps: ProblemStepGuide[];
  finalSolutionLatex: string;
  fullSolutionWalkthrough: string;
}

export interface MathItem {
  id: string;
  type: 'definition' | 'theorem' | 'lemma' | 'corollary' | 'proposition' | 'remark' | 'example';
  number: string; // e.g. "2.1", "2.2"
  title: string;
  statementLatex: string;
  statementText: string;
  proof?: InteractiveProof;
  associatedEquation?: DetailedEquation;
  historicalContext?: string;
}

export interface BookSection {
  id: string;
  sectionNumber: string; // e.g. "2.1"
  title: string;
  introText: string;
  items: MathItem[];
  detailedEquations?: DetailedEquation[];
  problems: ProblemItem[];
}

export interface BookChapter {
  id: string;
  chapterNumber: number;
  romanNumeral: string;
  title: string;
  subtitle: string;
  synopsis: string;
  prerequisites: string[];
  sections: BookSection[];
}

export interface NotationCategory {
  id: string;
  name: string;
  description: string;
}

export interface NotationItem {
  id: string;
  symbol: string;
  latexCommand: string;
  name: string;
  category: 'logic_sets' | 'calculus_analysis' | 'linear_algebra' | 'number_theory' | 'probability_combinatorics' | 'geometry_topology';
  meaning: string;
  exampleLatex: string;
  exampleExplanation: string;
  readAs: string;
}

export type ViewMode = 'read' | 'proofs' | 'problems' | 'equations';
