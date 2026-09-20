import React, { useState } from 'react';
import { DetailedEquation } from '../types/math';
import { MathRenderer } from './MathRenderer';
import { 
  GitBranch, 
  ArrowRight, 
  CheckCircle, 
  FileCode, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles,
  RotateCcw
} from 'lucide-react';

interface EquationExplosionProps {
  equation: DetailedEquation;
  onExportLatex: (latex: string, title: string) => void;
  isDark: boolean;
}

export const EquationExplosion: React.FC<EquationExplosionProps> = ({
  equation,
  onExportLatex,
  isDark,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [revealedUpTo, setRevealedUpTo] = useState(0);

  const handleNext = () => {
    const next = Math.min(equation.steps.length - 1, activeStep + 1);
    setActiveStep(next);
    if (next > revealedUpTo) {
      setRevealedUpTo(next);
    }
  };

  const handlePrev = () => {
    setActiveStep(prev => Math.max(0, prev - 1));
  };

  const handleReset = () => {
    setActiveStep(0);
    setRevealedUpTo(0);
  };

  const handleRevealAll = () => {
    setRevealedUpTo(equation.steps.length - 1);
    setActiveStep(equation.steps.length - 1);
  };

  const currentStepData = equation.steps[activeStep];

  return (
    <section
      id={`equation-explorer-${equation.id}`}
      className={`rounded-xl border my-8 overflow-hidden transition-all shadow-sm ${
        isDark ? 'bg-[#151b23] border-stone-800 text-stone-200' : 'bg-white border-stone-300 text-stone-900'
      }`}
    >
      {/* Header */}
      <div className={`px-6 py-4 border-b flex flex-wrap items-center justify-between gap-3 ${
        isDark ? 'bg-[#1c232e] border-stone-800' : 'bg-[#faf8f5] border-stone-200'
      }`}>
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <GitBranch className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Step-by-Step Derivation
              </span>
              <span className="text-[11px] text-stone-500">
                ({equation.category.toUpperCase()})
              </span>
            </div>
            <h4 className="font-serif text-base font-bold">
              {equation.title}
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onExportLatex(equation.latexSnippet, equation.title)}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded border transition-colors ${
              isDark 
                ? 'border-stone-700 bg-stone-800/80 hover:bg-stone-750 text-stone-300' 
                : 'border-stone-300 bg-white hover:bg-stone-50 text-stone-700'
            }`}
            title="Export full derivation to LaTeX"
          >
            <FileCode className="w-3.5 h-3.5 text-amber-500" />
            <span>LaTeX Code</span>
          </button>
        </div>
      </div>

      {/* Overview Box: From Target Sum to Closed Form */}
      <div className={`p-5 border-b grid md:grid-cols-2 gap-4 items-center ${
        isDark ? 'bg-[#10141b] border-stone-800' : 'bg-[#f8f6f2] border-stone-200'
      }`}>
        <div>
          <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-1">
            Initial Expression / Sum
          </span>
          <div className={`p-3 rounded-lg border text-center ${
            isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
          }`}>
            <MathRenderer math={equation.initialLatex} block={true} />
          </div>
        </div>

        <div>
          <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-1">
            Target Closed Form / Evaluated Limit
          </span>
          <div className={`p-3 rounded-lg border text-center ${
            isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
          }`}>
            <MathRenderer math={equation.finalLatex} block={true} />
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-stone-600 dark:text-stone-300 mb-6 italic">
          {equation.context}
        </p>

        {/* Stepper Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
              Stage {activeStep + 1} of {equation.steps.length}:
            </span>
            <span className="text-xs font-medium text-stone-700 dark:text-stone-300">
              {currentStepData.label}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="px-2 py-1 text-xs rounded border border-stone-300 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400 flex items-center gap-1"
              title="Reset to step 1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
            <button
              onClick={handleRevealAll}
              className="px-2.5 py-1 text-xs rounded border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-300 hover:bg-amber-500/20 font-medium"
            >
              Reveal All
            </button>
            <div className="h-4 w-px bg-stone-300 dark:bg-stone-700 mx-1" />
            <button
              disabled={activeStep === 0}
              onClick={handlePrev}
              className="p-1.5 rounded border border-stone-300 dark:border-stone-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-200 dark:hover:bg-stone-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              disabled={activeStep === equation.steps.length - 1}
              onClick={handleNext}
              className="p-1.5 rounded border border-stone-300 dark:border-stone-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-200 dark:hover:bg-stone-800"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Step Progress Bar */}
        <div className="w-full bg-stone-200 dark:bg-stone-800 h-1.5 rounded-full overflow-hidden mb-6">
          <div 
            className="bg-amber-500 h-full transition-all duration-300 ease-out"
            style={{ width: `${((activeStep + 1) / equation.steps.length) * 100}%` }}
          />
        </div>

        {/* Current Active Step Focused Box */}
        <div className={`p-6 rounded-xl border mb-6 shadow-sm ${
          isDark ? 'bg-[#0b0e14] border-stone-800' : 'bg-[#ffffff] border-stone-200'
        }`}>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
              Active Algebraic State
            </span>
            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 font-medium border border-amber-500/20">
              <Sparkles className="w-3 h-3" />
              <span>Operation: {currentStepData.operation}</span>
            </span>
          </div>

          <div className="my-4 text-center">
            <MathRenderer math={currentStepData.latex} block={true} />
          </div>

          <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-400">
            <strong>Student Guidance:</strong> {currentStepData.label} — Notice how this operation simplifies the expression toward the closed target form.
          </div>
        </div>

        {/* Step History / Walkthrough Chain */}
        <div className="space-y-3">
          <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
            Derivation Trail (Steps 1 to {revealedUpTo + 1})
          </span>

          <div className="grid gap-2">
            {equation.steps.slice(0, revealedUpTo + 1).map((step, idx) => (
              <div
                key={step.stepIndex}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-lg border text-xs cursor-pointer transition-all flex items-center justify-between gap-4 ${
                  idx === activeStep
                    ? isDark 
                      ? 'bg-amber-950/30 border-amber-700/60 ring-1 ring-amber-500/30' 
                      : 'bg-amber-50/80 border-amber-300 ring-1 ring-amber-400/40'
                    : isDark ? 'bg-stone-900/60 border-stone-800 hover:bg-stone-850' : 'bg-stone-50 border-stone-200 hover:bg-stone-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                    idx === activeStep 
                      ? 'bg-amber-500 text-white' 
                      : isDark ? 'bg-stone-800 text-stone-400' : 'bg-stone-200 text-stone-700'
                  }`}>
                    {step.stepIndex}
                  </span>
                  <span className="font-medium">{step.label}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-stone-500">
                    [{step.operation}]
                  </span>
                  {idx < equation.steps.length - 1 ? (
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                  ) : (
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {revealedUpTo < equation.steps.length - 1 && (
            <button
              onClick={handleNext}
              className={`w-full py-2.5 rounded-lg border text-xs font-medium transition-all flex items-center justify-center gap-2 mt-3 ${
                isDark 
                  ? 'border-dashed border-stone-700 hover:border-amber-500 text-stone-400 hover:text-amber-300 bg-stone-900/40' 
                  : 'border-dashed border-stone-300 hover:border-amber-600 text-stone-600 hover:text-amber-800 bg-stone-50'
              }`}
            >
              <span>Reveal Next Algebraic Step ({revealedUpTo + 2} of {equation.steps.length})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
