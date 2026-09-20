import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Trash2, 
  Sparkles, 
  FileCode,
  PenTool
} from 'lucide-react';
import { MathRenderer } from './MathRenderer';

interface LatexScratchpadModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

const PRESET_SNIPPETS = [
  { label: 'Quadratic Formula', code: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}' },
  { label: 'Euler’s Identity', code: 'e^{i \\pi} + 1 = 0' },
  { label: 'Definite Integral', code: '\\int_a^b f(x) \\, dx = F(b) - F(a)' },
  { label: 'Cauchy-Schwarz', code: '|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\le \\|\\mathbf{u}\\| \\|\\mathbf{v}\\|' },
  { label: 'Basel Sum', code: '\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}' },
  { label: 'Epsilon-Delta', code: '\\forall \\varepsilon > 0, \\; \\exists \\delta > 0 : 0 < |x - c| < \\delta \\implies |f(x) - L| < \\varepsilon' },
];

export const LatexScratchpadModal: React.FC<LatexScratchpadModalProps> = ({
  isOpen,
  onClose,
  isDark,
}) => {
  const [latexInput, setLatexInput] = useState('\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(latexInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div 
        className={`w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
          isDark ? 'bg-[#151b23] border-stone-800 text-stone-200' : 'bg-white border-stone-300 text-stone-900'
        }`}
      >
        {/* Header */}
        <div className={`p-6 border-b flex items-center justify-between gap-4 ${
          isDark ? 'bg-[#1b222d] border-stone-800' : 'bg-[#faf8f5] border-stone-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <PenTool className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold tracking-tight">
                LaTeX Math Scratchpad & Live Sandbox
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Experiment with math formulas, verify syntax, and export LaTeX code.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-amber-600 text-white hover:bg-amber-700 transition-colors shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy LaTeX</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-transparent hover:border-stone-300 dark:hover:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Preset Snippets */}
        <div className={`px-6 py-2.5 border-b flex items-center gap-2 overflow-x-auto text-xs ${
          isDark ? 'bg-[#12161f] border-stone-800' : 'bg-[#f7f5f0] border-stone-200'
        }`}>
          <span className="text-[10px] uppercase font-bold text-stone-500 whitespace-nowrap">
            Presets:
          </span>
          {PRESET_SNIPPETS.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => setLatexInput(preset.code)}
              className={`px-2.5 py-1 rounded border text-xs whitespace-nowrap transition-colors ${
                isDark 
                  ? 'border-stone-800 bg-stone-900 hover:bg-stone-800 text-stone-300' 
                  : 'border-stone-200 bg-white hover:bg-stone-100 text-stone-700'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Main Work Area: Input & Live Render */}
        <div className="flex-1 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200 dark:divide-stone-800 overflow-hidden">
          {/* Editor Column */}
          <div className="p-6 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                LaTeX Source Input
              </span>
              <button
                onClick={() => setLatexInput('')}
                className="text-xs text-stone-400 hover:text-rose-500 flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear</span>
              </button>
            </div>

            <textarea
              value={latexInput}
              onChange={(e) => setLatexInput(e.target.value)}
              placeholder="Type or paste LaTeX equation here, e.g. \int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}"
              className={`flex-1 w-full p-4 rounded-xl border font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                isDark 
                  ? 'bg-[#0d1117] border-stone-800 text-amber-200 placeholder-stone-600' 
                  : 'bg-[#faf8f5] border-stone-300 text-stone-900 placeholder-stone-400'
              }`}
            />
          </div>

          {/* Render Column */}
          <div className="p-6 flex flex-col overflow-y-auto">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                Live KaTeX Typeset Preview
              </span>
            </div>

            <div className={`flex-1 min-h-[160px] p-6 rounded-xl border flex items-center justify-center overflow-x-auto shadow-inner ${
              isDark ? 'bg-[#0b0e14] border-stone-800' : 'bg-white border-stone-200'
            }`}>
              {latexInput.trim() ? (
                <MathRenderer math={latexInput} block={true} className="text-lg" />
              ) : (
                <span className="text-sm text-stone-400 italic">
                  Equation will render here in real-time...
                </span>
              )}
            </div>

            <div className="mt-4 text-xs text-stone-500 leading-relaxed">
              💡 <strong>Tip:</strong> You can paste equations from the book’s chapters, modify parameters, test identities, and copy the compiled code to Overleaf.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`px-6 py-3 border-t flex items-center justify-between text-xs text-stone-500 ${
          isDark ? 'bg-[#1b222d] border-stone-800' : 'bg-[#faf8f5] border-stone-200'
        }`}>
          <span>Powered by KaTeX & AMS-LaTeX Engine</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md font-medium bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors"
          >
            Close Sandbox
          </button>
        </div>
      </div>
    </div>
  );
};
