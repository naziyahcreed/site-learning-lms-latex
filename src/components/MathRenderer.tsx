import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  math: string;
  block?: boolean;
  className?: string;
}

export const MathRenderer: React.FC<MathRendererProps> = ({
  math,
  block = false,
  className = '',
}) => {
  const renderedHtml = useMemo(() => {
    try {
      // Clean up math string
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
  }, [math, block]);

  if (block) {
    return (
      <div
        className={`overflow-x-auto py-2 px-3 my-2 text-center select-text ${className}`}
        dangerouslySetInnerHTML={{ __html: renderedHtml }}
      />
    );
  }

  return (
    <span
      className={`inline-block align-middle select-text ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};

interface FormattedMathTextProps {
  text: string;
  className?: string;
}

/**
 * Renders prose containing inline $...$ or display $$...$$ LaTeX expressions.
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
    <div className={`leading-relaxed ${className}`}>
      {parts.map((part, index) => {
        if (part.type === 'block') {
          return <MathRenderer key={index} math={part.content} block={true} />;
        }
        if (part.type === 'inline') {
          return <MathRenderer key={index} math={part.content} block={false} />;
        }
        return <span key={index}>{part.content}</span>;
      })}
    </div>
  );
};

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
