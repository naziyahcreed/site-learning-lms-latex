import React from 'react';
import { BookChapter } from '../types/math';
import { 
  BookOpen, 
  Bookmark, 
  ChevronRight, 
  ListOrdered, 
  CheckCircle2, 
  HelpCircle, 
  GitBranch, 
  BookMarked,
  PenTool,
  Download
} from 'lucide-react';

interface ChapterSidebarProps {
  chapters: BookChapter[];
  activeChapterId: string;
  activeSectionId: string;
  onSelectSection: (chapterId: string, sectionId: string) => void;
  onOpenNotation: () => void;
  onOpenScratchpad: () => void;
  onExportEntireBook: () => void;
  isDark: boolean;
  solvedCount: number;
  totalProblemsCount: number;
}

export const ChapterSidebar: React.FC<ChapterSidebarProps> = ({
  chapters,
  activeChapterId,
  activeSectionId,
  onSelectSection,
  onOpenNotation,
  onOpenScratchpad,
  onExportEntireBook,
  isDark,
  solvedCount,
  totalProblemsCount,
}) => {
  return (
    <aside 
      id="academic-table-of-contents"
      className={`w-80 shrink-0 border-r flex flex-col h-[calc(100vh-4rem)] sticky top-16 transition-colors select-none ${
        isDark ? 'bg-[#0f141c] border-stone-800 text-stone-300' : 'bg-[#fcfbf9] border-stone-200 text-stone-800'
      }`}
    >
      {/* Sidebar Header */}
      <div className={`p-4 border-b ${
        isDark ? 'border-stone-800 bg-[#141a24]' : 'border-stone-200 bg-[#f8f6f2]'
      }`}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-amber-500" />
            <span className="font-serif font-bold text-sm tracking-wider uppercase">
              Table of Contents
            </span>
          </div>
          <span className="text-[11px] font-mono text-stone-500">
            {chapters.length} Treatises
          </span>
        </div>

        {/* Student Mastery Progress */}
        <div className="mt-3 pt-2.5 border-t border-stone-200 dark:border-stone-800">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-stone-500">Problem Set Mastery:</span>
            <span className="font-bold text-amber-600 dark:text-amber-400 font-mono">
              {solvedCount} / {totalProblemsCount}
            </span>
          </div>
          <div className="w-full bg-stone-200 dark:bg-stone-800 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-500 h-full transition-all duration-300"
              style={{ width: `${totalProblemsCount > 0 ? (solvedCount / totalProblemsCount) * 100 : 0}%` }}
            />
          </div>
        </div>
      </div>

      {/* Chapters & Sections List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {chapters.map((chapter) => {
          const isChapActive = chapter.id === activeChapterId;

          return (
            <div 
              key={chapter.id} 
              id={`nav-chapter-${chapter.id}`}
              className="rounded-xl overflow-hidden"
            >
              {/* Chapter Header */}
              <div 
                className={`p-3 rounded-lg cursor-pointer transition-all ${
                  isChapActive 
                    ? isDark ? 'bg-[#1b2330] text-amber-300' : 'bg-[#f0ede6] text-stone-900 font-bold'
                    : isDark ? 'hover:bg-stone-900 text-stone-400' : 'hover:bg-stone-100 text-stone-600'
                }`}
                onClick={() => {
                  if (chapter.sections.length > 0) {
                    onSelectSection(chapter.id, chapter.sections[0].id);
                  }
                }}
              >
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-bold text-xs text-amber-600 dark:text-amber-400">
                    Chapter {chapter.romanNumeral}.
                  </span>
                  <span className="font-serif text-sm font-semibold leading-tight line-clamp-1">
                    {chapter.title}
                  </span>
                </div>
              </div>

              {/* Sections list */}
              {isChapActive && (
                <div className="mt-1 ml-3 pl-3 border-l-2 border-amber-500/40 space-y-1 py-1">
                  {chapter.sections.map((section) => {
                    const isSecActive = section.id === activeSectionId;

                    return (
                      <button
                        key={section.id}
                        id={`nav-section-${section.id}`}
                        onClick={() => onSelectSection(chapter.id, section.id)}
                        className={`w-full text-left p-2 rounded-lg text-xs transition-all flex items-center justify-between gap-2 ${
                          isSecActive
                            ? isDark 
                              ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30' 
                              : 'bg-white text-stone-900 font-semibold shadow-xs border border-stone-200'
                            : isDark ? 'text-stone-400 hover:text-stone-200 hover:bg-stone-850' : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="font-mono text-[11px] text-amber-600 dark:text-amber-400 shrink-0">
                            §{section.sectionNumber}
                          </span>
                          <span className="truncate">{section.title}</span>
                        </div>
                        <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSecActive ? 'text-amber-500' : 'text-stone-400'}`} />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Access Academic Utilities */}
      <div className={`p-3 border-t space-y-1 text-xs ${
        isDark ? 'border-stone-800 bg-[#141a24]' : 'border-stone-200 bg-[#f8f6f2]'
      }`}>
        <button
          id="open-notation-sidebar-btn"
          onClick={onOpenNotation}
          className={`w-full p-2 rounded-lg text-left flex items-center gap-2.5 transition-colors ${
            isDark ? 'hover:bg-stone-800 text-stone-300' : 'hover:bg-stone-200/80 text-stone-700'
          }`}
        >
          <BookMarked className="w-4 h-4 text-amber-500" />
          <span className="font-medium">Notation Library</span>
        </button>

        <button
          id="open-scratchpad-sidebar-btn"
          onClick={onOpenScratchpad}
          className={`w-full p-2 rounded-lg text-left flex items-center gap-2.5 transition-colors ${
            isDark ? 'hover:bg-stone-800 text-stone-300' : 'hover:bg-stone-200/80 text-stone-700'
          }`}
        >
          <PenTool className="w-4 h-4 text-blue-500" />
          <span className="font-medium">LaTeX Scratchpad</span>
        </button>

        <button
          id="export-entire-book-btn"
          onClick={onExportEntireBook}
          className={`w-full p-2 rounded-lg text-left flex items-center gap-2.5 transition-colors ${
            isDark ? 'hover:bg-stone-800 text-amber-400' : 'hover:bg-stone-200/80 text-amber-800'
          }`}
        >
          <Download className="w-4 h-4 text-emerald-500" />
          <span className="font-medium">Export Book to .tex</span>
        </button>
      </div>
    </aside>
  );
};
