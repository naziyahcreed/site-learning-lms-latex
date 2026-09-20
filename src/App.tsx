import React, { useState, useEffect, useMemo } from 'react';
import { CHAPTERS_DATA } from './data/chaptersData';
import { ViewMode, BookChapter, BookSection } from './types/math';
import { AcademicHeader } from './components/AcademicHeader';
import { ChapterSidebar } from './components/ChapterSidebar';
import { TheoremCard } from './components/TheoremCard';
import { EquationExplosion } from './components/EquationExplosion';
import { ProblemSetView } from './components/ProblemSetView';
import { NotationLibraryModal } from './components/NotationLibraryModal';
import { LatexExportModal } from './components/LatexExportModal';
import { LatexScratchpadModal } from './components/LatexScratchpadModal';
import { MathRenderer, FormattedMathText } from './components/MathRenderer';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Award, 
  GitBranch, 
  Bookmark, 
  Layers, 
  Sparkles,
  Printer,
  FileCode,
  ArrowUp
} from 'lucide-react';

export default function App() {
  // Dark mode state (persisted)
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('principia_dark_mode');
      if (saved !== null) return JSON.parse(saved);
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('principia_dark_mode', JSON.stringify(isDark));
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      console.warn(e);
    }
  }, [isDark]);

  // Active chapter and section
  const [activeChapterId, setActiveChapterId] = useState<string>(CHAPTERS_DATA[0].id);
  const [activeSectionId, setActiveSectionId] = useState<string>(CHAPTERS_DATA[0].sections[0].id);

  // View mode: 'read' (full monograph), 'proofs', 'equations', 'problems'
  const [viewMode, setViewMode] = useState<ViewMode>('read');

  // Modals state
  const [notationModalOpen, setNotationModalOpen] = useState(false);
  const [scratchpadModalOpen, setScratchpadModalOpen] = useState(false);
  const [exportModalState, setExportModalState] = useState<{
    isOpen: boolean;
    title: string;
    latexCode: string;
  }>({
    isOpen: false,
    title: '',
    latexCode: '',
  });

  // Solved problems count from localStorage
  const [solvedCount, setSolvedCount] = useState<number>(0);

  const totalProblemsCount = useMemo(() => {
    let count = 0;
    for (const chap of CHAPTERS_DATA) {
      for (const sec of chap.sections) {
        count += sec.problems.length;
      }
    }
    return count;
  }, []);

  const updateSolvedCount = () => {
    try {
      const saved = localStorage.getItem('principia_solved_problems');
      if (saved) {
        const parsed = JSON.parse(saved);
        setSolvedCount(Object.keys(parsed).filter(k => parsed[k]).length);
      }
    } catch {
      setSolvedCount(0);
    }
  };

  useEffect(() => {
    updateSolvedCount();
    const interval = setInterval(updateSolvedCount, 1500);
    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcut listener (Cmd/Ctrl + K for Notations, Cmd/Ctrl + E for Scratchpad)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setNotationModalOpen(prev => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'e') {
        e.preventDefault();
        setScratchpadModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentChapter: BookChapter = useMemo(() => {
    return CHAPTERS_DATA.find(c => c.id === activeChapterId) || CHAPTERS_DATA[0];
  }, [activeChapterId]);

  const currentSection: BookSection = useMemo(() => {
    return currentChapter.sections.find(s => s.id === activeSectionId) || currentChapter.sections[0];
  }, [currentChapter, activeSectionId]);

  // Section navigation (Previous / Next section)
  const allSectionsList = useMemo(() => {
    const list: { chapterId: string; section: BookSection; chapterRoman: string }[] = [];
    for (const ch of CHAPTERS_DATA) {
      for (const sec of ch.sections) {
        list.push({ chapterId: ch.id, section: sec, chapterRoman: ch.romanNumeral });
      }
    }
    return list;
  }, []);

  const currentSectionIndex = allSectionsList.findIndex(item => item.section.id === currentSection.id);
  const prevSection = currentSectionIndex > 0 ? allSectionsList[currentSectionIndex - 1] : null;
  const nextSection = currentSectionIndex < allSectionsList.length - 1 ? allSectionsList[currentSectionIndex + 1] : null;

  const handleSelectSection = (chapterId: string, sectionId: string) => {
    setActiveChapterId(chapterId);
    setActiveSectionId(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenExportModal = (latexCode: string, title: string) => {
    setExportModalState({
      isOpen: true,
      title,
      latexCode,
    });
  };

  // Export entire current section to LaTeX
  const handleExportSectionLatex = () => {
    let sectionLatex = `% Section ${currentSection.sectionNumber}: ${currentSection.title}
\\section{${currentSection.title}}

${currentSection.introText}

`;

    // Add items
    for (const item of currentSection.items) {
      const type = item.type;
      sectionLatex += `\\begin{${type}}[${item.title}]\n${item.statementText}\n\\[\n${item.statementLatex}\n\\]\n\\end{${type}}\n\n`;

      if (item.proof) {
        sectionLatex += `${item.proof.fullLatexSnippet}\n\n`;
      }
    }

    // Add detailed equations
    if (currentSection.detailedEquations) {
      for (const eq of currentSection.detailedEquations) {
        sectionLatex += `\\subsection*{Derivation: ${eq.title}}\n${eq.latexSnippet}\n\n`;
      }
    }

    // Add problems
    if (currentSection.problems.length > 0) {
      sectionLatex += `\\subsection*{Exercises & Problems}\n`;
      for (const prob of currentSection.problems) {
        sectionLatex += `\\begin{problem}[${prob.title}]\n${prob.description}\n\\[\n${prob.statementLatex}\n\\]\n\\end{problem}\n\n`;
        sectionLatex += `\\begin{solution}\n${prob.fullSolutionWalkthrough}\n\\[\n${prob.finalSolutionLatex}\n\\]\n\\end{solution}\n\n`;
      }
    }

    handleOpenExportModal(sectionLatex, `Section ${currentSection.sectionNumber}: ${currentSection.title}`);
  };

  // Export entire monograph to a master LaTeX book document
  const handleExportEntireBook = () => {
    let monograph = `% PRINCIPIA MATHEMATICA: MASTER MONOGRAPH
\\documentclass[11pt,openany]{book}
\\usepackage[margin=1.2in]{geometry}
\\usepackage{amsmath, amssymb, amsthm, amsfonts}
\\usepackage{mathrsfs}
\\usepackage{hyperref}

\\theoremstyle{definition}
\\newtheorem{theorem}{Theorem}[chapter]
\\newtheorem{lemma}[theorem]{Lemma}
\\newtheorem{definition}[theorem]{Definition}
\\newtheorem{corollary}[theorem]{Corollary}
\\newtheorem{proposition}[theorem]{Proposition}
\\newtheorem{example}[theorem]{Example}
\\newtheorem{remark}[theorem]{Remark}
\\newtheorem{problem}{Exercise}[chapter]
\\newtheorem*{solution}{Solution}

\\title{\\textbf{PRINCIPIA MATHEMATICA}\\\\\\large An Interactive Academic Treatise on Foundations, Analysis, and Linear Geometry}
\\author{Institute for Advanced Mathematical Studies}
\\date{\\today}

\\begin{document}
\\maketitle
\\tableofcontents

`;

    for (const chap of CHAPTERS_DATA) {
      monograph += `\\chapter{${chap.title}}\n\\textbf{Subtitle: } ${chap.subtitle}\\\\\n\\emph{Synopsis: } ${chap.synopsis}\n\n`;

      for (const sec of chap.sections) {
        monograph += `\\section{${sec.title}}\n${sec.introText}\n\n`;

        for (const item of sec.items) {
          monograph += `\\begin{${item.type}}[${item.title}]\n${item.statementText}\n\\[\n${item.statementLatex}\n\\]\n\\end{${item.type}}\n\n`;
          if (item.proof) {
            monograph += `${item.proof.fullLatexSnippet}\n\n`;
          }
        }

        if (sec.detailedEquations) {
          for (const eq of sec.detailedEquations) {
            monograph += `\\subsection*{Step-by-Step Derivation: ${eq.title}}\n${eq.latexSnippet}\n\n`;
          }
        }

        if (sec.problems.length > 0) {
          monograph += `\\subsection*{Exercises for Section ${sec.sectionNumber}}\n`;
          for (const prob of sec.problems) {
            monograph += `\\begin{problem}[${prob.title}]\n${prob.description}\n\\[\n${prob.statementLatex}\n\\]\n\\end{problem}\n\n`;
            monograph += `\\begin{solution}\n${prob.fullSolutionWalkthrough}\n\\[\n${prob.finalSolutionLatex}\n\\]\n\\end{solution}\n\n`;
          }
        }
      }
    }

    monograph += `\\end{document}`;
    handleOpenExportModal(monograph, 'Principia Mathematica: Complete Treatise Monograph');
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors ${
      isDark ? 'bg-[#0a0d12] text-stone-200' : 'bg-[#faf8f5] text-stone-900'
    }`}>
      {/* Top Academic Masthead */}
      <AcademicHeader
        currentChapterNum={currentChapter.romanNumeral}
        currentChapterTitle={currentChapter.title}
        currentSectionNum={currentSection.sectionNumber}
        currentSectionTitle={currentSection.title}
        viewMode={viewMode}
        onSelectViewMode={setViewMode}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        onOpenNotation={() => setNotationModalOpen(true)}
        onOpenScratchpad={() => setScratchpadModalOpen(true)}
        onExportSectionLatex={handleExportSectionLatex}
      />

      {/* Main Layout: Table of Contents Sidebar + Academic Text Stage */}
      <div className="flex-1 flex max-w-7xl mx-auto w-full">
        {/* Left Sidebar Table of Contents */}
        <div className="hidden md:block">
          <ChapterSidebar
            chapters={CHAPTERS_DATA}
            activeChapterId={activeChapterId}
            activeSectionId={activeSectionId}
            onSelectSection={handleSelectSection}
            onOpenNotation={() => setNotationModalOpen(true)}
            onOpenScratchpad={() => setScratchpadModalOpen(true)}
            onExportEntireBook={handleExportEntireBook}
            isDark={isDark}
            solvedCount={solvedCount}
            totalProblemsCount={totalProblemsCount}
          />
        </div>

        {/* Central Monograph Reading Canvas */}
        <main className="flex-1 px-4 sm:px-8 lg:px-12 py-8 max-w-4xl min-w-0 mx-auto">
          {/* Mobile View Selector & Breadcrumb */}
          <div className="md:hidden flex items-center justify-between pb-4 mb-4 border-b border-stone-200 dark:border-stone-800 text-xs">
            <span className="font-serif font-bold text-amber-600 dark:text-amber-400">
              Ch. {currentChapter.romanNumeral} §{currentSection.sectionNumber}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setNotationModalOpen(true)}
                className="px-2 py-1 rounded border text-stone-600 dark:text-stone-300 border-stone-300 dark:border-stone-700"
              >
                Notations
              </button>
              <button
                onClick={() => setScratchpadModalOpen(true)}
                className="px-2 py-1 rounded border text-stone-600 dark:text-stone-300 border-stone-300 dark:border-stone-700"
              >
                Scratchpad
              </button>
            </div>
          </div>

          {/* Chapter Opening Masthead */}
          <div className="mb-10 pb-6 border-b border-stone-300 dark:border-stone-800">
            <div className="flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-1">
              <span>Chapter {currentChapter.romanNumeral}</span>
              <span>•</span>
              <span>Pure & Applied Mathematics</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-2">
              {currentChapter.title}
            </h1>

            <p className="font-serif italic text-base sm:text-lg text-stone-600 dark:text-stone-400 mb-4">
              {currentChapter.subtitle}
            </p>

            <div className={`p-4 rounded-xl border text-sm leading-relaxed ${
              isDark ? 'bg-[#12161f] border-stone-800 text-stone-300' : 'bg-[#f4efe6] border-stone-200 text-stone-700'
            }`}>
              <span className="font-serif font-bold text-xs uppercase tracking-wider block mb-1 text-stone-500">
                Chapter Synopsis:
              </span>
              <p>{currentChapter.synopsis}</p>
            </div>
          </div>

          {/* Section Heading */}
          <div className="mb-8">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-mono text-base font-bold text-amber-600 dark:text-amber-400">
                § {currentSection.sectionNumber}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
                {currentSection.title}
              </h2>
            </div>

            <div className="text-base leading-relaxed font-serif text-stone-700 dark:text-stone-300 border-l-2 border-stone-300 dark:border-stone-700 pl-4 py-1 my-4">
              <FormattedMathText text={currentSection.introText} />
            </div>
          </div>

          {/* CONTENT ACCORDING TO VIEW MODE */}

          {/* View Mode 1: Full Monograph (All) */}
          {viewMode === 'read' && (
            <div className="space-y-12">
              {/* Theorems, Definitions, Lemmas */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 pb-2 border-b border-stone-200 dark:border-stone-800">
                  <Bookmark className="w-4 h-4 text-amber-500" />
                  <span>Theorems, Definitions & Interactive Proofs</span>
                </div>

                {currentSection.items.map((item) => (
                  <TheoremCard
                    key={item.id}
                    item={item}
                    onExportLatex={handleOpenExportModal}
                    isDark={isDark}
                  />
                ))}
              </div>

              {/* Detailed Equations & Sums with Step-by-Step Guidance */}
              {currentSection.detailedEquations && currentSection.detailedEquations.length > 0 && (
                <div className="space-y-6 pt-4 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 pb-2 border-b border-stone-200 dark:border-stone-800">
                    <GitBranch className="w-4 h-4 text-amber-500" />
                    <span>Sums & Equation Derivations (Step-by-Step Student Guidance)</span>
                  </div>

                  {currentSection.detailedEquations.map((equation) => (
                    <EquationExplosion
                      key={equation.id}
                      equation={equation}
                      onExportLatex={handleOpenExportModal}
                      isDark={isDark}
                    />
                  ))}
                </div>
              )}

              {/* Section Problem Sets */}
              {currentSection.problems.length > 0 && (
                <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
                  <ProblemSetView
                    problems={currentSection.problems}
                    sectionTitle={currentSection.title}
                    onExportLatex={handleOpenExportModal}
                    isDark={isDark}
                  />
                </div>
              )}
            </div>
          )}

          {/* View Mode 2: Interactive Proofs Focused */}
          {viewMode === 'proofs' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl border mb-6 bg-amber-500/10 border-amber-500/20 text-xs text-stone-700 dark:text-stone-300">
                <p className="font-semibold text-amber-600 dark:text-amber-400 mb-1">
                  Interactive Proofs Laboratory
                </p>
                <p>
                  Explore every deductive milestone step-by-step. Inspect logical justifications, adjust parameters to test edge conditions, and export LaTeX code.
                </p>
              </div>

              {currentSection.items
                .filter(i => !!i.proof)
                .map((item) => (
                  <TheoremCard
                    key={item.id}
                    item={item}
                    onExportLatex={handleOpenExportModal}
                    isDark={isDark}
                  />
                ))}

              {currentSection.items.filter(i => !!i.proof).length === 0 && (
                <p className="text-center py-12 text-stone-500">
                  No interactive proofs in this specific section. Navigate to Section 1.1, 2.1, 3.1, 4.1, or 5.1!
                </p>
              )}
            </div>
          )}

          {/* View Mode 3: Sums & Equations Derivations Focused */}
          {viewMode === 'equations' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl border mb-6 bg-blue-500/10 border-blue-500/20 text-xs text-stone-700 dark:text-stone-300">
                <p className="font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  Equation & Summation Derivation Chains
                </p>
                <p>
                  Deconstruct formulas into precise algebraic operations: telescoping cancellations, factoring, limits, and integration transformations.
                </p>
              </div>

              {currentSection.detailedEquations && currentSection.detailedEquations.length > 0 ? (
                currentSection.detailedEquations.map((equation) => (
                  <EquationExplosion
                    key={equation.id}
                    equation={equation}
                    onExportLatex={handleOpenExportModal}
                    isDark={isDark}
                  />
                ))
              ) : (
                <p className="text-center py-12 text-stone-500">
                  No dedicated equation derivations registered in this section.
                </p>
              )}
            </div>
          )}

          {/* View Mode 4: Problem Sets Focused */}
          {viewMode === 'problems' && (
            <div>
              <ProblemSetView
                problems={currentSection.problems}
                sectionTitle={currentSection.title}
                onExportLatex={handleOpenExportModal}
                isDark={isDark}
              />
            </div>
          )}

          {/* Section Navigation Footer */}
          <div className="mt-16 pt-8 border-t border-stone-300 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
            {prevSection ? (
              <button
                id="prev-section-btn"
                onClick={() => handleSelectSection(prevSection.chapterId, prevSection.section.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-medium transition-all ${
                  isDark 
                    ? 'border-stone-800 bg-stone-900 hover:bg-stone-800 text-stone-300' 
                    : 'border-stone-300 bg-white hover:bg-stone-100 text-stone-800 shadow-xs'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <div className="text-left">
                  <span className="text-[10px] text-stone-500 block">Previous Section</span>
                  <span className="font-serif font-bold">§{prevSection.section.sectionNumber} {prevSection.section.title}</span>
                </div>
              </button>
            ) : <div />}

            {nextSection && (
              <button
                id="next-section-btn"
                onClick={() => handleSelectSection(nextSection.chapterId, nextSection.section.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-medium transition-all ${
                  isDark 
                    ? 'border-stone-800 bg-stone-900 hover:bg-stone-800 text-amber-400' 
                    : 'border-stone-300 bg-white hover:bg-stone-100 text-amber-800 shadow-xs'
                }`}
              >
                <div className="text-right">
                  <span className="text-[10px] text-stone-500 block">Next Section</span>
                  <span className="font-serif font-bold">§{nextSection.section.sectionNumber} {nextSection.section.title}</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </main>
      </div>

      {/* Floating Bottom Quick Action Bar */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`p-3 rounded-full border shadow-lg transition-transform hover:scale-105 ${
            isDark ? 'bg-stone-900 border-stone-700 text-stone-300 hover:bg-stone-800' : 'bg-white border-stone-300 text-stone-700 hover:bg-stone-50'
          }`}
          title="Return to top of page"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Modals */}
      <NotationLibraryModal
        isOpen={notationModalOpen}
        onClose={() => setNotationModalOpen(false)}
        onExportLatex={handleOpenExportModal}
        isDark={isDark}
      />

      <LatexScratchpadModal
        isOpen={scratchpadModalOpen}
        onClose={() => setScratchpadModalOpen(false)}
        isDark={isDark}
      />

      <LatexExportModal
        isOpen={exportModalState.isOpen}
        onClose={() => setExportModalState(prev => ({ ...prev, isOpen: false }))}
        title={exportModalState.title}
        latexCode={exportModalState.latexCode}
        isDark={isDark}
      />
    </div>
  );
}
