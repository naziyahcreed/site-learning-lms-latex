import React, { useState, useEffect } from 'react';
import { ProblemItem, ProblemStepGuide, Difficulty } from '../types/math';
import { MathRenderer } from './MathRenderer';
import { 
  CheckCircle2, 
  HelpCircle, 
  Lightbulb, 
  ChevronRight, 
  FileCode, 
  RotateCcw, 
  Award,
  AlertCircle,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface ProblemSetViewProps {
  problems: ProblemItem[];
  sectionTitle: string;
  onExportLatex: (latex: string, title: string) => void;
  isDark: boolean;
}

export const ProblemSetView: React.FC<ProblemSetViewProps> = ({
  problems,
  sectionTitle,
  onExportLatex,
  isDark,
}) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [solvedProblemIds, setSolvedProblemIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('principia_solved_problems');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // State per problem: active step index, revealed hints, selected options, isStepUnlocked
  const [problemStates, setProblemStates] = useState<Record<string, {
    activeStep: number;
    showHints: Record<number, boolean>;
    selectedOption: Record<number, number>;
    stepFeedback: Record<number, 'correct' | 'incorrect' | null>;
    revealedSteps: Record<number, boolean>;
    showFullWalkthrough: boolean;
  }>>({});

  useEffect(() => {
    try {
      localStorage.setItem('principia_solved_problems', JSON.stringify(solvedProblemIds));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [solvedProblemIds]);

  const getProblemState = (problemId: string) => {
    return problemStates[problemId] || {
      activeStep: 0,
      showHints: {},
      selectedOption: {},
      stepFeedback: {},
      revealedSteps: { 0: true },
      showFullWalkthrough: false,
    };
  };

  const updateProblemState = (problemId: string, updater: (prev: any) => any) => {
    setProblemStates(prev => {
      const current = prev[problemId] || {
        activeStep: 0,
        showHints: {},
        selectedOption: {},
        stepFeedback: {},
        revealedSteps: { 0: true },
        showFullWalkthrough: false,
      };
      return {
        ...prev,
        [problemId]: updater(current),
      };
    });
  };

  const handleOptionSelect = (problem: ProblemItem, stepIdx: number, optionIdx: number) => {
    const step = problem.guidedSteps[stepIdx];
    const isCorrect = optionIdx === (step.correctOptionIndex ?? 0);

    updateProblemState(problem.id, prev => ({
      ...prev,
      selectedOption: { ...prev.selectedOption, [stepIdx]: optionIdx },
      stepFeedback: { ...prev.stepFeedback, [stepIdx]: isCorrect ? 'correct' : 'incorrect' },
      revealedSteps: { ...prev.revealedSteps, [stepIdx]: true },
    }));

    if (isCorrect) {
      // If there's a next step, unlock it
      if (stepIdx + 1 < problem.guidedSteps.length) {
        updateProblemState(problem.id, prev => ({
          ...prev,
          activeStep: stepIdx + 1,
          revealedSteps: { ...prev.revealedSteps, [stepIdx + 1]: true },
        }));
      } else {
        // Mark problem as solved
        setSolvedProblemIds(prev => ({ ...prev, [problem.id]: true }));
      }
    }
  };

  const handleToggleHint = (problemId: string, stepIdx: number) => {
    updateProblemState(problemId, prev => ({
      ...prev,
      showHints: { ...prev.showHints, [stepIdx]: !prev.showHints[stepIdx] },
    }));
  };

  const handleRevealStep = (problem: ProblemItem, stepIdx: number) => {
    updateProblemState(problem.id, prev => {
      const isLast = stepIdx + 1 >= problem.guidedSteps.length;
      if (isLast) {
        setSolvedProblemIds(s => ({ ...s, [problem.id]: true }));
      }
      return {
        ...prev,
        stepFeedback: { ...prev.stepFeedback, [stepIdx]: 'correct' },
        revealedSteps: { 
          ...prev.revealedSteps, 
          [stepIdx]: true, 
          ...(isLast ? {} : { [stepIdx + 1]: true }) 
        },
        activeStep: isLast ? stepIdx : stepIdx + 1,
      };
    });
  };

  const handleResetProblem = (problemId: string) => {
    updateProblemState(problemId, () => ({
      activeStep: 0,
      showHints: {},
      selectedOption: {},
      stepFeedback: {},
      revealedSteps: { 0: true },
      showFullWalkthrough: false,
    }));
  };

  const handleExportProblemLatex = (problem: ProblemItem) => {
    const latex = `% Problem ${problem.number}: ${problem.title}
\\begin{problem}
${problem.description}
\\[
${problem.statementLatex}
\\]
\\end{problem}

\\begin{solution}
${problem.fullSolutionWalkthrough}
\\[
${problem.finalSolutionLatex}
\\]
\\end{solution}`;
    onExportLatex(latex, `Problem ${problem.number}: ${problem.title}`);
  };

  const filteredProblems = problems.filter(p => {
    if (selectedDifficulty === 'All') return true;
    return p.difficulty === selectedDifficulty;
  });

  const getDifficultyBadge = (diff: Difficulty) => {
    switch (diff) {
      case 'Foundational':
        return isDark ? 'bg-emerald-950/70 text-emerald-300 border-emerald-800' : 'bg-emerald-50 text-emerald-800 border-emerald-300';
      case 'Intermediate':
        return isDark ? 'bg-amber-950/70 text-amber-300 border-amber-800' : 'bg-amber-50 text-amber-800 border-amber-300';
      case 'Advanced':
        return isDark ? 'bg-rose-950/70 text-rose-300 border-rose-800' : 'bg-rose-50 text-rose-800 border-rose-300';
    }
  };

  return (
    <div className="my-8">
      {/* Header & Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200 dark:border-stone-800">
        <div>
          <h3 className="font-serif text-2xl font-bold tracking-tight">
            Problem Set: {sectionTitle}
          </h3>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
            Carefully curated mathematical exercises featuring step-by-step guidance, intermediate deductive checks, and complete LaTeX solutions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
            Filter:
          </span>
          {['All', 'Foundational', 'Intermediate', 'Advanced'].map(diff => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-2.5 py-1 text-xs rounded-md font-medium border transition-colors ${
                selectedDifficulty === diff
                  ? isDark ? 'bg-amber-600 text-white border-amber-500' : 'bg-amber-600 text-white border-amber-600 shadow-sm'
                  : isDark ? 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200' : 'bg-white border-stone-300 text-stone-700 hover:bg-stone-50'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Problems List */}
      <div className="space-y-8">
        {filteredProblems.map((problem) => {
          const state = getProblemState(problem.id);
          const isSolved = solvedProblemIds[problem.id];

          return (
            <div
              key={problem.id}
              id={`problem-card-${problem.id}`}
              className={`rounded-xl border overflow-hidden shadow-sm transition-all ${
                isSolved
                  ? isDark ? 'bg-[#131a22] border-emerald-900/60' : 'bg-white border-emerald-300/80 ring-1 ring-emerald-500/20'
                  : isDark ? 'bg-[#151b23] border-stone-800 text-stone-200' : 'bg-white border-stone-300 text-stone-900'
              }`}
            >
              {/* Problem Card Header */}
              <div className={`px-6 py-4 border-b flex flex-wrap items-center justify-between gap-3 ${
                isDark ? 'bg-[#1b222d] border-stone-800' : 'bg-[#faf8f5] border-stone-200'
              }`}>
                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-md border ${getDifficultyBadge(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Problem {problem.number}: {problem.title}
                  </h4>
                  {isSolved && (
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      <Award className="w-3.5 h-3.5" />
                      <span>Solved</span>
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleExportProblemLatex(problem)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded border transition-colors ${
                      isDark 
                        ? 'border-stone-700 bg-stone-800 hover:bg-stone-750 text-stone-300' 
                        : 'border-stone-300 bg-white hover:bg-stone-50 text-stone-700'
                    }`}
                    title="Export Problem & Solution to LaTeX"
                  >
                    <FileCode className="w-3.5 h-3.5 text-amber-500" />
                    <span>LaTeX</span>
                  </button>

                  <button
                    onClick={() => handleResetProblem(problem.id)}
                    className="p-1 rounded border border-stone-300 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500"
                    title="Reset progress for this problem"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Problem Statement Box */}
              <div className="p-6 border-b border-stone-200 dark:border-stone-800">
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
                  {problem.description}
                </p>

                <div className={`p-4 rounded-lg border text-center ${
                  isDark ? 'bg-[#0d1117] border-stone-800' : 'bg-[#f8f6f2] border-stone-200'
                }`}>
                  <MathRenderer math={problem.statementLatex} block={true} />
                </div>
              </div>

              {/* Step-by-Step Guidance Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      Step-by-Step Student Guidance
                    </span>
                  </div>
                  <span className="text-xs text-stone-500">
                    Step {Math.min(problem.guidedSteps.length, state.activeStep + 1)} of {problem.guidedSteps.length}
                  </span>
                </div>

                {/* Steps Accordion / Progression */}
                <div className="space-y-4">
                  {problem.guidedSteps.map((step, sIdx) => {
                    const isUnlocked = state.revealedSteps[sIdx] || sIdx === 0;
                    const feedback = state.stepFeedback[sIdx];
                    const showHint = state.showHints[sIdx];
                    const selectedOpt = state.selectedOption[sIdx];

                    if (!isUnlocked) {
                      return (
                        <div 
                          key={step.stepIndex}
                          className={`p-3 rounded-lg border border-dashed text-xs text-stone-400 flex items-center justify-between ${
                            isDark ? 'border-stone-800 bg-stone-900/30' : 'border-stone-200 bg-stone-50/50'
                          }`}
                        >
                          <span>Step {step.stepIndex}: Complete preceding step to unlock</span>
                          <span className="font-mono text-[10px]">🔒 Locked</span>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={step.stepIndex}
                        className={`p-5 rounded-lg border transition-all ${
                          feedback === 'correct'
                            ? isDark ? 'bg-[#101820] border-emerald-900/50' : 'bg-emerald-50/50 border-emerald-200'
                            : isDark ? 'bg-[#12161f] border-stone-800' : 'bg-[#faf8f6] border-stone-300'
                        }`}
                      >
                        {/* Step Header */}
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                            <span>Step {step.stepIndex}</span>
                            {feedback === 'correct' && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 inline" />
                            )}
                          </span>

                          <button
                            onClick={() => handleToggleHint(problem.id, sIdx)}
                            className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 hover:underline"
                          >
                            <Lightbulb className="w-3.5 h-3.5" />
                            <span>{showHint ? 'Hide Hint' : 'Need a Hint?'}</span>
                          </button>
                        </div>

                        {/* Step Prompt */}
                        <p className="text-sm text-stone-800 dark:text-stone-200 font-medium mb-3">
                          {step.prompt}
                        </p>

                        {/* Hint Box */}
                        {showHint && (
                          <div className={`p-3 rounded-md mb-3 text-xs flex items-start gap-2 border ${
                            isDark ? 'bg-amber-950/30 border-amber-900/50 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-900'
                          }`}>
                            <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
                            <span><strong>Hint:</strong> {step.hint}</span>
                          </div>
                        )}

                        {/* Multiple Choice Interactive Selection if available */}
                        {step.options && step.options.length > 0 && feedback !== 'correct' && (
                          <div className="space-y-2 mb-3">
                            <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                              Select the correct deduction:
                            </span>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {step.options.map((opt, optIdx) => (
                                <button
                                  key={optIdx}
                                  onClick={() => handleOptionSelect(problem, sIdx, optIdx)}
                                  className={`p-2.5 rounded-md border text-xs text-left transition-all ${
                                    selectedOpt === optIdx
                                      ? optIdx === step.correctOptionIndex
                                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-700 dark:text-emerald-300'
                                        : 'bg-rose-500/20 border-rose-500 text-rose-700 dark:text-rose-300'
                                      : isDark ? 'bg-stone-900 border-stone-700 hover:bg-stone-800' : 'bg-white border-stone-300 hover:bg-stone-50'
                                  }`}
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                            {feedback === 'incorrect' && (
                              <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                                <AlertCircle className="w-3.5 h-3.5" />
                                <span>Not quite. Check the hint or re-examine the algebraic relationship.</span>
                              </p>
                            )}
                          </div>
                        )}

                        {/* Revealed Intermediate KaTeX & Insight */}
                        {feedback === 'correct' && (
                          <div className="mt-3 pt-3 border-t border-dashed border-stone-300 dark:border-stone-800 space-y-2">
                            <div className={`p-3 rounded-lg border text-center ${
                              isDark ? 'bg-[#0a0d12] border-stone-800' : 'bg-white border-stone-200'
                            }`}>
                              <MathRenderer math={step.latexIntermediate} block={true} />
                            </div>
                            <p className="text-xs text-stone-600 dark:text-stone-300">
                              <strong>Step Explanation:</strong> {step.expectedInsight}
                            </p>
                          </div>
                        )}

                        {/* Bypass / Direct Reveal Step Button */}
                        {feedback !== 'correct' && (
                          <div className="mt-2 text-right">
                            <button
                              onClick={() => handleRevealStep(problem, sIdx)}
                              className="text-[11px] text-stone-500 hover:text-amber-500 underline"
                            >
                              Skip to step derivation
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Final Solution Walkthrough */}
                {isSolved && (
                  <div className={`mt-6 p-5 rounded-xl border ${
                    isDark ? 'bg-emerald-950/20 border-emerald-900/60' : 'bg-emerald-50/70 border-emerald-300'
                  }`}>
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-serif font-bold text-sm mb-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Complete Formal Solution:</span>
                    </div>

                    <div className="my-3 p-3 rounded-lg bg-white dark:bg-stone-900 border border-emerald-200 dark:border-emerald-900 text-center">
                      <MathRenderer math={problem.finalSolutionLatex} block={true} />
                    </div>

                    <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                      {problem.fullSolutionWalkthrough}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
