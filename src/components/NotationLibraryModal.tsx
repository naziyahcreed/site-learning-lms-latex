import React, { useState, useMemo } from 'react';
import { NOTATION_LIBRARY, NOTATION_CATEGORIES } from '../data/notationData';
import { NotationItem } from '../types/math';
import { MathRenderer } from './MathRenderer';
import { 
  Search, 
  Copy, 
  Check, 
  X, 
  BookMarked, 
  FileCode, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface NotationLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExportLatex: (latex: string, title: string) => void;
  isDark: boolean;
}

export const NotationLibraryModal: React.FC<NotationLibraryModalProps> = ({
  isOpen,
  onClose,
  onExportLatex,
  isDark,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredNotations = useMemo(() => {
    return NOTATION_LIBRARY.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        item.name.toLowerCase().includes(query) ||
        item.latexCommand.toLowerCase().includes(query) ||
        item.meaning.toLowerCase().includes(query) ||
        item.readAs.toLowerCase().includes(query) ||
        item.symbol.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopy = (latex: string, id: string) => {
    navigator.clipboard.writeText(latex);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExportFullCheatsheet = () => {
    let tableRows = filteredNotations.map(n => 
      `$${n.latexCommand}$ & \\verb|${n.latexCommand}| & ${n.name} & ${n.readAs} \\\\ \\hline`
    ).join('\n');

    const fullDoc = `% Mathematical Notation Reference Cheatsheet
\\documentclass{article}
\\usepackage[margin=1in]{geometry}
\\usepackage{amsmath, amssymb, amsfonts}

\\title{Principia Mathematica: Comprehensive Notation Cheatsheet}
\\author{Academic Reference Library}
\\date{\\today}

\\begin{document}
\\maketitle

\\section*{Symbol Reference Table}
\\begin{center}
\\begin{tabular}{|c|l|p{4.5cm}|p{4.5cm}|}
\\hline
\\textbf{Symbol} & \\textbf{LaTeX Command} & \\textbf{Concept / Name} & \\textbf{Read As / Pronunciation} \\\\ \\hline
${tableRows}
\\end{tabular}
\\end{center}

\\end{document}`;

    onExportLatex(fullDoc, 'Mathematical Notation Library Cheatsheet');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div 
        className={`w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
          isDark ? 'bg-[#151b23] border-stone-800 text-stone-200' : 'bg-white border-stone-300 text-stone-900'
        }`}
      >
        {/* Header */}
        <div className={`p-6 border-b flex items-center justify-between gap-4 ${
          isDark ? 'bg-[#1b222d] border-stone-800' : 'bg-[#faf8f5] border-stone-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <BookMarked className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold tracking-tight">
                Comprehensive Mathematical Notation Library
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Standard lexicon of symbols, LaTeX definitions, pronunciations, and illustrative expressions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportFullCheatsheet}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                isDark 
                  ? 'border-stone-700 bg-stone-800 hover:bg-stone-750 text-amber-400' 
                  : 'border-stone-300 bg-white hover:bg-stone-50 text-amber-800'
              }`}
              title="Export all symbols to LaTeX tabular document"
            >
              <FileCode className="w-4 h-4" />
              <span>Export Cheatsheet (.tex)</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-transparent hover:border-stone-300 dark:hover:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className={`p-4 border-b space-y-3 ${
          isDark ? 'bg-[#12161f] border-stone-800' : 'bg-[#f7f5f0] border-stone-200'
        }`}>
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search by symbol, LaTeX command (e.g. \\forall, \\int), or concept..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                isDark 
                  ? 'bg-stone-900/90 border-stone-700 text-stone-200 placeholder-stone-500' 
                  : 'bg-white border-stone-300 text-stone-900 placeholder-stone-400'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {NOTATION_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-full font-medium whitespace-nowrap transition-all border ${
                  selectedCategory === cat.id
                    ? isDark ? 'bg-amber-600 text-white border-amber-500' : 'bg-amber-600 text-white border-amber-600'
                    : isDark ? 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200' : 'bg-white border-stone-300 text-stone-700 hover:bg-stone-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Notations Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-4 text-xs text-stone-500">
            <span>Showing {filteredNotations.length} notations</span>
            <span className="italic">Click on any LaTeX command to copy to clipboard</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {filteredNotations.map((item) => (
              <div
                key={item.id}
                id={`notation-card-${item.id}`}
                className={`p-4 rounded-xl border transition-all ${
                  isDark 
                    ? 'bg-[#121720] border-stone-800 hover:border-stone-700' 
                    : 'bg-white border-stone-300 hover:border-stone-400'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    {/* Rendered Symbol Box */}
                    <div className={`w-12 h-12 rounded-lg border flex items-center justify-center text-lg font-serif ${
                      isDark ? 'bg-stone-900 border-stone-800' : 'bg-[#faf8f5] border-stone-200'
                    }`}>
                      <MathRenderer math={item.latexCommand} block={false} />
                    </div>

                    <div>
                      <h4 className="font-serif font-bold text-sm">
                        {item.name}
                      </h4>
                      <p className="text-xs text-stone-500 italic">
                        Read as: &ldquo;{item.readAs}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Copy LaTeX Snippet Button */}
                  <button
                    onClick={() => handleCopy(item.latexCommand, item.id)}
                    className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-mono border transition-all ${
                      copiedId === item.id
                        ? 'bg-emerald-500/20 text-emerald-600 border-emerald-500/30'
                        : isDark ? 'bg-stone-900 border-stone-800 hover:bg-stone-800 text-stone-300' : 'bg-stone-100 border-stone-200 hover:bg-stone-200 text-stone-700'
                    }`}
                    title="Click to copy LaTeX code"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>{item.latexCommand}</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed my-2">
                  {item.meaning}
                </p>

                {/* Example Usage */}
                <div className={`p-2.5 rounded-lg border text-xs mt-3 ${
                  isDark ? 'bg-[#0a0d12] border-stone-800' : 'bg-[#f9f8f6] border-stone-200'
                }`}>
                  <div className="flex items-center justify-between text-[10px] uppercase font-bold text-stone-400 mb-1">
                    <span>Example Usage</span>
                    <button 
                      onClick={() => handleCopy(item.exampleLatex, `${item.id}-ex`)}
                      className="hover:text-amber-500 font-mono"
                    >
                      {copiedId === `${item.id}-ex` ? 'Copied' : 'Copy Ex'}
                    </button>
                  </div>
                  <div className="my-1 text-center">
                    <MathRenderer math={item.exampleLatex} block={true} />
                  </div>
                  <p className="text-[11px] text-stone-500 italic mt-1">
                    {item.exampleExplanation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredNotations.length === 0 && (
            <div className="text-center py-16 text-stone-500">
              <BookMarked className="w-10 h-10 mx-auto opacity-30 mb-3" />
              <p className="font-serif text-lg">No mathematical symbols found</p>
              <p className="text-xs mt-1">Try a different search keyword or switch the category filter.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={`px-6 py-3 border-t flex items-center justify-between text-xs text-stone-500 ${
          isDark ? 'bg-[#1b222d] border-stone-800' : 'bg-[#faf8f5] border-stone-200'
        }`}>
          <span>Principia Mathematica Notation Standard</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md font-medium bg-amber-600 text-white hover:bg-amber-700 transition-colors"
          >
            Close Reference
          </button>
        </div>
      </div>
    </div>
  );
};
