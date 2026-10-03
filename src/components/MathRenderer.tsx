import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  math: string;
  block?: boolean;
  className?: string;
}

/**
 * Checks if the string contains Tamil Unicode characters (U+0B80 to U+0BFF)
 */
export function containsTamil(str: string): boolean {
  return /[\u0B80-\u0BFF]/.test(str);
}

/**
 * Checks if the string is prose or a statement/answer wrapped in LaTeX formatting
 * rather than a complex mathematical formula.
 * When true, rendering as native HTML typography ensures 100% accurate Indic glyph shaping,
 * zero tofu glyphs, and natural responsive word-wrapping without truncation.
 */
export function cleanLatexProse(str: string): string | null {
  if (!str) return '';
  const trimmed = str.trim();

  // If it doesn't contain Tamil characters, let standard KaTeX handle it
  if (!containsTamil(trimmed)) {
    return null;
  }

  // If it contains complex mathematical environments, let KaTeX render it
  if (/\\begin\{(matrix|cases|aligned|array)\}/.test(trimmed)) {
    return null;
  }

  // If it has multi-term fractions or square roots without \text wrapper, KaTeX should format the equation
  if (/\\(frac|sqrt|int|sum)\b/.test(trimmed) && !/\\text\{[\s\S]*?\\(frac|sqrt)/.test(trimmed)) {
    return null;
  }

  // Clean common LaTeX prose wrapping and symbols
  let cleaned = trimmed
    .replace(/\\mathbf\{([\s\S]*?)\}/g, '$1')
    .replace(/\\textbf\{([\s\S]*?)\}/g, '$1')
    .replace(/\\textit\{([\s\S]*?)\}/g, '$1')
    .replace(/\\text\{([\s\S]*?)\}/g, '$1')
    .replace(/\\implies/g, ' ⟹ ')
    .replace(/\\iff/g, ' ⟺ ')
    .replace(/\\to\b/g, ' → ')
    .replace(/\\rightarrow/g, ' → ')
    .replace(/\\times/g, ' × ')
    .replace(/\\pm/g, ' ± ')
    .replace(/\\approx/g, ' ≈ ')
    .replace(/\\neq?/g, ' ≠ ')
    .replace(/\\leq?/g, ' ≤ ')
    .replace(/\\geq?/g, ' ≥ ')
    .replace(/\\cdot/g, ' · ')
    .replace(/\\%/g, '%')
    .replace(/\\\\/g, '\n')
    .replace(/\\quad/g, '  ')
    .replace(/\\qquad/g, '    ')
    .replace(/\\([{}])/g, '$1')
    .trim();

  // Strip any remaining nested \text{...} or \mathbf{...}
  while (/\\text\{([\s\S]*?)\}/.test(cleaned)) {
    cleaned = cleaned.replace(/\\text\{([\s\S]*?)\}/g, '$1');
  }
  while (/\\mathbf\{([\s\S]*?)\}/.test(cleaned)) {
    cleaned = cleaned.replace(/\\mathbf\{([\s\S]*?)\}/g, '$1');
  }

  return cleaned;
}

export const MathRenderer: React.FC<MathRendererProps> = ({
  math,
  block = false,
  className = '',
}) => {
  const tamilProse = useMemo(() => {
    return cleanLatexProse(math);
  }, [math]);

  const renderedHtml = useMemo(() => {
    if (tamilProse !== null) return null;
    try {
      const cleanMath = math.trim();
      return katex.renderToString(cleanMath, {
        displayMode: block,
        throwOnError: false,
        strict: false,
      });
    } catch (err) {
      console.warn('KaTeX render error:', err);
      return `<span class="text-red-500 font-mono text-sm">${math}</span>`;
    }
  }, [math, block, tamilProse]);

  // If text is Tamil prose, render as responsive wrapping HTML text
  if (tamilProse !== null) {
    if (block) {
      return (
        <div
          className={`font-sans leading-relaxed text-base sm:text-lg font-medium text-stone-900 dark:text-stone-100 text-center py-2 px-3 my-1 select-text break-words whitespace-normal ${className}`}
        >
          {tamilProse}
        </div>
      );
    }

    return (
      <span
        className={`inline font-sans font-medium text-stone-900 dark:text-stone-100 select-text break-words whitespace-normal ${className}`}
      >
        {tamilProse}
      </span>
    );
  }

  if (block) {
    return (
      <div
        className={`overflow-x-auto py-2 px-3 my-2 text-center select-text max-w-full ${className}`}
        dangerouslySetInnerHTML={{ __html: renderedHtml || '' }}
      />
    );
  }

  return (
    <span
      className={`inline-block align-middle select-text ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml || '' }}
    />
  );
};

interface FormattedMathTextProps {
  text: string;
  className?: string;
}

/**
 * Renders prose containing inline $...$ or display $$...$$ LaTeX expressions,
 * with support for markdown bold **...** emphasis.
 */
export const FormattedMathText: React.FC<FormattedMathTextProps> = ({ text, className = '' }) => {
  const parts = useMemo(() => {
    if (!text) return [];

    // Split by display math $$...$$ first, then inline $...$
    const result: { type: 'text' | 'inline' | 'block'; content: string }[] = [];
    const blockRegex = /\$\$([\s\S]*?)\$\$/g;
    let lastIndex = 0;
    let blockMatch;

    while ((blockMatch = blockRegex.exec(text)) !== null) {
      if (blockMatch.index > lastIndex) {
        const precedingText = text.slice(lastIndex, blockMatch.index);
        processInline(precedingText, result);
      }
      result.push({ type: 'block', content: blockMatch[1] });
      lastIndex = blockRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      processInline(text.slice(lastIndex), result);
    }

    return result;
  }, [text]);

  return (
    <div className={`leading-relaxed whitespace-pre-line ${className}`}>
      {parts.map((part, index) => {
        if (part.type === 'block') {
          return <MathRenderer key={index} math={part.content} block={true} />;
        }
        if (part.type === 'inline') {
          return <MathRenderer key={index} math={part.content} block={false} />;
        }
        return <TextWithBold key={index} content={part.content} />;
      })}
    </div>
  );
};

function TextWithBold({ content }: { content: string }) {
  if (!content.includes('**')) {
    return <span>{content}</span>;
  }
  const parts = content.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((seg, i) => {
        if (seg.startsWith('**') && seg.endsWith('**')) {
          return (
            <strong key={i} className="font-bold text-stone-900 dark:text-stone-100">
              {seg.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{seg}</span>;
      })}
    </>
  );
}

function processInline(text: string, result: { type: 'text' | 'inline' | 'block'; content: string }[]) {
  const inlineRegex = /\$([^\$]+?)\$/g;
  let lastIdx = 0;
  let inlineMatch;

  while ((inlineMatch = inlineRegex.exec(text)) !== null) {
    if (inlineMatch.index > lastIdx) {
      result.push({ type: 'text', content: text.slice(lastIdx, inlineMatch.index) });
    }
    result.push({ type: 'inline', content: inlineMatch[1] });
    lastIdx = inlineRegex.lastIndex;
  }

  if (lastIdx < text.length) {
    result.push({ type: 'text', content: text.slice(lastIdx) });
  }
}
