import React from 'react';
import { ViewMode } from '../types/math';
import { 
  Sun, 
  Moon, 
  BookMarked, 
  PenTool, 
  FileCode, 
  BookOpen, 
  Award, 
  GitBranch,
  Layers,
  ChevronRight
} from 'lucide-react';

interface AcademicHeaderProps {
  currentChapterNum: string;
  currentChapterTitle: string;
  currentSectionNum: string;
  currentSectionTitle: string;
  viewMode: ViewMode;
  onSelectViewMode: (mode: ViewMode) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenNotation: () => void;
  onOpenScratchpad: () => void;
  onExportSectionLatex: () => void;
}

export const AcademicHeader: React.FC<AcademicHeaderProps> = ({
  currentChapterNum,
  currentChapterTitle,
  currentSectionNum,
  currentSectionTitle,
  viewMode,
  onSelectViewMode,
  isDark,
  onToggleTheme,
  onOpenNotation,
  onOpenScratchpad,
  onExportSectionLatex,
}) => {
  return (
    <header 
      id="academic-masthead"
      className={`h-16 sticky top-0 z-40 border-b transition-colors backdrop-blur-md px-6 flex items-center justify-between gap-4 ${
        isDark 
          ? 'bg-[#0d1117]/95 border-stone-800 text-stone-200' 
          : 'bg-[#faf8f5]/95 border-stone-300 text-stone-900 shadow-xs'
      }`}
    >
      {/* Title & Breadcrumb */}
      <div className="flex items-center gap-4 min-w-0">
        <div className="flex items-baseline gap-2 shrink-0">
          <span className="font-serif font-black tracking-widest text-base sm:text-lg text-amber-600 dark:text-amber-400">
            PRINCIPIA
          </span>
          <span className="font-serif italic text-xs tracking-wider text-stone-500 hidden sm:inline">
            MATHEMATICA
          </span>
        </div>

        <div className="h-4 w-px bg-stone-300 dark:bg-stone-700 hidden md:block" />

        {/* Breadcrumb Navigation */}
        <div className="items-center gap-1 text-xs text-stone-500 hidden md:flex truncate">
          <span className="font-serif font-bold text-stone-700 dark:text-stone-300">
            Ch. {currentChapterNum}
          </span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="font-mono text-amber-600 dark:text-amber-400 shrink-0">
            §{currentSectionNum}
          </span>
          <span className="truncate text-stone-600 dark:text-stone-400">
            {currentSectionTitle}
          </span>
        </div>
      </div>

      {/* Center: View Mode Tabs */}
      <div className="hidden lg:flex items-center bg-stone-200/60 dark:bg-stone-800/80 p-0.5 rounded-lg text-xs font-medium">
        <button
          onClick={() => onSelectViewMode('read')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
            viewMode === 'read'
              ? isDark ? 'bg-amber-600 text-white shadow-xs' : 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Full Monograph</span>
        </button>

        <button
          onClick={() => onSelectViewMode('proofs')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
            viewMode === 'proofs'
              ? isDark ? 'bg-amber-600 text-white shadow-xs' : 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Interactive Proofs</span>
        </button>

        <button
          onClick={() => onSelectViewMode('equations')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
            viewMode === 'equations'
              ? isDark ? 'bg-amber-600 text-white shadow-xs' : 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <GitBranch className="w-3.5 h-3.5" />
          <span>Equation Derivations</span>
        </button>

        <button
          onClick={() => onSelectViewMode('problems')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
            viewMode === 'problems'
              ? isDark ? 'bg-amber-600 text-white shadow-xs' : 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>Problem Sets</span>
        </button>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2">
        <button
          id="open-notation-library-header-btn"
          onClick={onOpenNotation}
          className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
            isDark 
              ? 'border-stone-800 bg-stone-900 hover:bg-stone-800 text-stone-300' 
              : 'border-stone-300 bg-white hover:bg-stone-100 text-stone-700'
          }`}
          title="Open Mathematical Notation Library"
        >
          <BookMarked className="w-4 h-4 text-amber-500" />
          <span>Notations</span>
        </button>

        <button
          id="open-scratchpad-header-btn"
          onClick={onOpenScratchpad}
          className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
            isDark 
              ? 'border-stone-800 bg-stone-900 hover:bg-stone-800 text-stone-300' 
              : 'border-stone-300 bg-white hover:bg-stone-100 text-stone-700'
          }`}
          title="Open LaTeX Scratchpad"
        >
          <PenTool className="w-4 h-4 text-blue-500" />
          <span>Scratchpad</span>
        </button>

        <button
          id="export-section-latex-header-btn"
          onClick={onExportSectionLatex}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
            isDark 
              ? 'border-stone-800 bg-stone-900 hover:bg-stone-800 text-stone-300' 
              : 'border-stone-300 bg-white hover:bg-stone-100 text-stone-700'
          }`}
          title="Export Section to LaTeX"
        >
          <FileCode className="w-4 h-4 text-amber-500" />
          <span className="hidden sm:inline">Export Section</span>
          <span className="sm:hidden">LaTeX</span>
        </button>

        {/* Dark Mode Toggle */}
        <button
          id="toggle-dark-mode-btn"
          onClick={onToggleTheme}
          className={`p-2 rounded-lg border transition-colors ${
            isDark 
              ? 'border-stone-800 bg-stone-900 hover:bg-stone-800 text-amber-400' 
              : 'border-stone-300 bg-white hover:bg-stone-100 text-stone-700'
          }`}
          title={isDark ? 'Switch to Oxford Parchment Light Mode' : 'Switch to Obsidian Dark Mode'}
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
