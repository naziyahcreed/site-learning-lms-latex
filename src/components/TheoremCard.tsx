import React, { useState } from 'react';
import { MathItem, ProofStep } from '../types/math';
import { MathRenderer, FormattedMathText } from './MathRenderer';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Copy, 
  Check, 
  FileCode, 
  Sliders, 
  HelpCircle,
  Maximize2,
  CheckCircle2
} from 'lucide-react';

interface TheoremCardProps {
  item: MathItem;
  onExportLatex: (latex: string, title: string) => void;
  isDark: boolean;
}

export const TheoremCard: React.FC<TheoremCardProps> = ({ item, onExportLatex, isDark }) => {
  const [proofOpen, setProofOpen] = useState(true);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [interactiveParamVal, setInteractiveParamVal] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'stepped' | 'full'>('stepped');

  const proof = item.proof;
  const currentStep: ProofStep | undefined = proof?.steps[currentStepIdx];

  const handleCopyLatex = () => {
    if (!proof) return;
    navigator.clipboard.writeText(proof.fullLatexSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'theorem':
        return isDark ? 'bg-amber-950/80 text-amber-300 border-amber-800/80' : 'bg-amber-50 text-amber-900 border-amber-200';
      case 'lemma':
        return isDark ? 'bg-blue-950/80 text-blue-300 border-blue-800/80' : 'bg-blue-50 text-blue-900 border-blue-200';
      case 'definition':
        return isDark ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80' : 'bg-emerald-50 text-emerald-900 border-emerald-200';
      default:
        return isDark ? 'bg-zinc-800 text-zinc-300 border-zinc-700' : 'bg-stone-100 text-stone-800 border-stone-300';
    }
  };

  const typeNameCapitalized = item.type.charAt(0).toUpperCase() + item.type.slice(1);

  return (
    <article
      id={`item-${item.id}`}
      className={`rounded-xl border transition-all duration-200 my-8 shadow-sm overflow-hidden ${
        isDark 
          ? 'bg-[#151b23] border-stone-800 text-stone-200' 
          : 'bg-[#ffffff] border-stone-300 text-stone-900'
      }`}
    >
      {/* Header Bar */}
      <div 
        className={`px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b ${
          isDark ? 'border-stone-800 bg-[#1a222d]' : 'border-stone-200 bg-[#faf8f5]'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className={`px-2.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-md border ${getBadgeColor(item.type)}`}>
            {typeNameCapitalized} {item.number}
          </span>
          <h3 className="font-serif text-lg font-bold tracking-tight">
            {item.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {proof && (
            <button
              id={`export-latex-btn-${item.id}`}
              onClick={() => onExportLatex(proof.fullLatexSnippet, `${typeNameCapitalized} ${item.number}: ${item.title}`)}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded border transition-colors ${
                isDark 
                  ? 'border-stone-700 bg-stone-800/80 hover:bg-stone-750 text-stone-300' 
                  : 'border-stone-300 bg-white hover:bg-stone-50 text-stone-700'
              }`}
              title="Export to LaTeX code"
            >
              <FileCode className="w-3.5 h-3.5 text-amber-500" />
              <span>LaTeX</span>
            </button>
          )}

          {proof && (
            <button
              id={`toggle-proof-btn-${item.id}`}
              onClick={() => setProofOpen(!proofOpen)}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded transition-colors ${
                proofOpen 
                  ? isDark ? 'bg-amber-500/20 text-amber-300' : 'bg-amber-100 text-amber-900'
                  : isDark ? 'bg-stone-800 text-stone-400' : 'bg-stone-200 text-stone-700'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{proofOpen ? 'Hide Proof' : 'Interactive Proof'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Statement Box */}
      <div className="p-6">
        <div className="font-serif text-base italic leading-relaxed mb-4">
          <FormattedMathText text={item.statementText} />
        </div>

        {/* KaTeX Statement Display */}
        <div className={`p-4 rounded-lg border my-4 overflow-x-auto ${
          isDark ? 'bg-[#0d1117] border-stone-800' : 'bg-[#f7f5f0] border-stone-200'
        }`}>
          <MathRenderer math={item.statementLatex} block={true} />
        </div>

        {item.historicalContext && (
          <p className="text-xs text-stone-500 italic mt-2">
            Historical Note: {item.historicalContext}
          </p>
        )}
      </div>

      {/* Interactive Proof Container */}
      {proof && proofOpen && (
        <div className={`border-t transition-colors ${
          isDark ? 'border-stone-800 bg-[#10141b]' : 'border-stone-200 bg-[#faf8f6]'
        }`}>
          {/* Proof Header */}
          <div className="px-6 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-inherit">
            <div className="flex items-center gap-2">
              <span className="font-serif text-sm font-semibold text-amber-600 dark:text-amber-400 italic">
                Proof. ({proof.proofType})
              </span>
              <span className="text-xs text-stone-500">
                — {proof.steps.length} deductive steps
              </span>
            </div>

            {/* Stepped vs Full Monograph toggle */}
            <div className="flex items-center gap-1 bg-stone-200/60 dark:bg-stone-800/80 p-0.5 rounded-lg text-xs">
              <button
                onClick={() => setViewMode('stepped')}
                className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                  viewMode === 'stepped'
                    ? isDark ? 'bg-amber-600 text-white' : 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
              >
                Interactive Stepper
              </button>
              <button
                onClick={() => setViewMode('full')}
                className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                  viewMode === 'full'
                    ? isDark ? 'bg-amber-600 text-white' : 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
              >
                Monograph View
              </button>
            </div>
          </div>

          {/* Stepped Interactive Mode */}
          {viewMode === 'stepped' && currentStep && (
            <div className="p-6">
              {/* Step Navigation Bar */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                    Step {currentStep.stepNumber} of {proof.steps.length}
                  </span>
                  <span className="text-xs font-serif font-bold text-stone-800 dark:text-stone-200">
                    : {currentStep.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    disabled={currentStepIdx === 0}
                    onClick={() => setCurrentStepIdx(prev => Math.max(0, prev - 1))}
                    className="p-1.5 rounded border border-stone-300 dark:border-stone-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
                    aria-label="Previous step"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    disabled={currentStepIdx === proof.steps.length - 1}
                    onClick={() => setCurrentStepIdx(prev => Math.min(proof.steps.length - 1, prev + 1))}
                    className="p-1.5 rounded border border-stone-300 dark:border-stone-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
                    aria-label="Next step"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Step Progression Pills */}
              <div className="grid grid-cols-6 gap-1 mb-5">
                {proof.steps.map((step, idx) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStepIdx(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentStepIdx
                        ? 'bg-amber-500 ring-2 ring-amber-400/40'
                        : idx < currentStepIdx
                        ? 'bg-emerald-500'
                        : isDark ? 'bg-stone-800' : 'bg-stone-300'
                    }`}
                    title={`Step ${idx + 1}: ${step.title}`}
                  />
                ))}
              </div>

              {/* Step Equation Card */}
              <div className={`p-5 rounded-lg border shadow-inner mb-4 ${
                isDark ? 'bg-[#090d12] border-stone-800' : 'bg-[#ffffff] border-stone-200'
              }`}>
                <MathRenderer math={currentStep.latex} block={true} />
              </div>

              {/* Step Explanation & Justification Box */}
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="md:col-span-2">
                  <h4 className="text-xs uppercase font-semibold tracking-wider text-stone-500 mb-1">
                    Mathematical Explanation
                  </h4>
                  <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                    {currentStep.explanation}
                  </p>
                </div>

                <div className={`p-3 rounded-md border text-xs ${
                  isDark ? 'bg-stone-900/80 border-stone-800' : 'bg-stone-100/90 border-stone-200'
                }`}>
                  <span className="font-semibold text-amber-600 dark:text-amber-400 block mb-1">
                    Deductive Justification:
                  </span>
                  <span className="italic text-stone-600 dark:text-stone-300">
                    {currentStep.justificationRule}
                  </span>
                </div>
              </div>

              {/* Interactive Variable Experimentation if available */}
              {currentStep.interactiveVariable && (
                <div className={`p-4 rounded-lg border mt-4 ${
                  isDark ? 'bg-amber-950/20 border-amber-900/50' : 'bg-amber-50/70 border-amber-200'
                }`}>
                  <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-amber-700 dark:text-amber-400">
                    <Sliders className="w-4 h-4" />
                    <span>Interactive Parameter Testing: {currentStep.interactiveVariable.label}</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mb-3">
                    {currentStep.interactiveVariable.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={currentStep.interactiveVariable.min}
                      max={currentStep.interactiveVariable.max}
                      step={currentStep.interactiveVariable.step}
                      value={interactiveParamVal ?? currentStep.interactiveVariable.defaultValue}
                      onChange={(e) => setInteractiveParamVal(parseFloat(e.target.value))}
                      className="flex-1 accent-amber-600 cursor-pointer"
                    />
                    <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-stone-200 dark:bg-stone-800">
                      {interactiveParamVal ?? currentStep.interactiveVariable.defaultValue}
                    </span>
                  </div>
                </div>
              )}

              {/* QED on final step */}
              {currentStepIdx === proof.steps.length - 1 && (
                <div className="mt-6 pt-4 border-t border-dashed border-stone-300 dark:border-stone-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{proof.qedNote}</span>
                  </div>
                  <span className="font-serif font-bold text-base select-none" title="Quod Erat Demonstrandum">
                    ■ Q.E.D.
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Monograph Full Text Mode */}
          {viewMode === 'full' && (
            <div className="p-6 space-y-6">
              <p className="text-sm italic text-stone-600 dark:text-stone-400 border-l-2 border-amber-500 pl-3">
                {proof.summary}
              </p>

              <ol className="space-y-4">
                {proof.steps.map((step) => (
                  <li 
                    key={step.id} 
                    className={`p-4 rounded-lg border transition-all ${
                      isDark ? 'bg-stone-900/60 border-stone-800' : 'bg-stone-50 border-stone-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        Step {step.stepNumber}: {step.title}
                      </span>
                      <span className="text-[11px] font-serif text-stone-500 italic">
                        [{step.justificationRule}]
                      </span>
                    </div>

                    <div className="my-2">
                      <MathRenderer math={step.latex} block={true} />
                    </div>

                    <p className="text-xs text-stone-600 dark:text-stone-300">
                      {step.explanation}
                    </p>
                  </li>
                ))}
              </ol>

              <div className="flex items-center justify-between pt-4 border-t border-stone-300 dark:border-stone-800 text-xs">
                <span className="text-stone-600 dark:text-stone-400 italic">
                  {proof.qedNote}
                </span>
                <span className="font-serif font-bold text-base select-none">
                  ■ Q.E.D.
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
};
