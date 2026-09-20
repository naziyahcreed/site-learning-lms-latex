import React, { useState, useMemo } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  FileCode, 
  Eye, 
  Code2, 
  FileText 
} from 'lucide-react';
import { MathRenderer } from './MathRenderer';

interface LatexExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  latexCode: string;
  isDark: boolean;
}

export const LatexExportModal: React.FC<LatexExportModalProps> = ({
  isOpen,
  onClose,
  title,
  latexCode,
  isDark,
}) => {
  const [includePreamble, setIncludePreamble] = useState(false);
  const [copied, setCopied] = useState(false);
  const [previewTab, setPreviewTab] = useState<'code' | 'render'>('code');

  const fullDocumentCode = useMemo(() => {
    if (!includePreamble) return latexCode;

    return `% LaTeX Monograph Export: ${title}
\\documentclass[11pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[margin=1in]{geometry}
\\usepackage{amsmath, amssymb, amsthm, amsfonts}
\\usepackage{xcolor}

\\theoremstyle{definition}
\\newtheorem{theorem}{Theorem}[section]
\\newtheorem{lemma}[theorem]{Lemma}
\\newtheorem{definition}[theorem]{Definition}
\\newtheorem{problem}{Problem}[section]
\\newtheorem*{solution}{Solution}

\\title{${title}}
\\author{Principia Mathematica Treatise}
\\date{\\today}

\\begin{document}
\\maketitle

${latexCode}

\\end{document}`;
  }, [latexCode, includePreamble, title]);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullDocumentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const filename = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '_')}.tex`;
    const blob = new Blob([fullDocumentCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

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
              <FileCode className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  LaTeX Code Export
                </span>
                <span className="text-xs text-stone-500">
                  (Ready for Overleaf / TeXShop / pdfLaTeX)
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold tracking-tight">
                {title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                isDark 
                  ? 'border-stone-700 bg-stone-800 hover:bg-stone-750 text-stone-300' 
                  : 'border-stone-300 bg-white hover:bg-stone-50 text-stone-700'
              }`}
            >
              <Download className="w-4 h-4 text-amber-500" />
              <span>Download .tex</span>
            </button>

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

        {/* Options Toolbar */}
        <div className={`px-6 py-3 border-b flex flex-wrap items-center justify-between gap-3 text-xs ${
          isDark ? 'bg-[#12161f] border-stone-800' : 'bg-[#f8f6f2] border-stone-200'
        }`}>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={includePreamble}
                onChange={(e) => setIncludePreamble(e.target.checked)}
                className="rounded accent-amber-600 w-4 h-4"
              />
              <span className="font-medium text-stone-700 dark:text-stone-300">
                Wrap with Standalone Document Preamble (\documentclass, packages, \maketitle)
              </span>
            </label>
          </div>

          <div className="flex items-center gap-1 bg-stone-200/60 dark:bg-stone-800/80 p-0.5 rounded-lg">
            <button
              onClick={() => setPreviewTab('code')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded font-medium transition-all ${
                previewTab === 'code'
                  ? isDark ? 'bg-amber-600 text-white' : 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 dark:text-stone-400'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>TeX Code</span>
            </button>
            <button
              onClick={() => setPreviewTab('render')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded font-medium transition-all ${
                previewTab === 'render'
                  ? isDark ? 'bg-amber-600 text-white' : 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 dark:text-stone-400'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 font-mono text-xs">
          {previewTab === 'code' ? (
            <div className={`p-4 rounded-xl border relative ${
              isDark ? 'bg-[#0b0e14] border-stone-800 text-amber-200/90' : 'bg-[#1f242c] border-stone-700 text-stone-100'
            }`}>
              <pre className="whitespace-pre-wrap font-mono leading-relaxed select-all">
                {fullDocumentCode}
              </pre>
            </div>
          ) : (
            <div className={`p-8 rounded-xl border ${
              isDark ? 'bg-[#0d1117] border-stone-800 text-stone-200' : 'bg-white border-stone-300 text-stone-900'
            }`}>
              <h4 className="font-serif text-xl font-bold mb-4 pb-2 border-b">
                {title}
              </h4>
              <p className="text-xs text-stone-500 mb-6 italic">
                Compiled representation preview:
              </p>
              <div className="space-y-4">
                <MathRenderer math={latexCode.replace(/%[^\n]*/g, '')} block={true} />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={`px-6 py-3 border-t flex items-center justify-between text-xs text-stone-500 ${
          isDark ? 'bg-[#1b222d] border-stone-800' : 'bg-[#faf8f5] border-stone-200'
        }`}>
          <span>Compatibility: pdfLaTeX, XeLaTeX, LuaLaTeX, AMS-LaTeX</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md font-medium border border-stone-300 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
