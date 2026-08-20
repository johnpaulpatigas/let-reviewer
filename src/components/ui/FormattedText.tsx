import React from 'react';

export interface FormattedTextProps {
  text?: string | null;
  className?: string;
  inline?: boolean;
  as?: 'p' | 'span' | 'div';
}

/**
 * Parses inline formatting tags:
 * - ***bold italic***
 * - **bold**
 * - *italic*
 * - `code`
 * - newlines (\n)
 */
function parseFormattedContent(text: string): React.ReactNode[] {
  if (!text) return [];

  // Match ***bold italic***, **bold**, *italic*, `code`, or newline \n
  const regex = /(\*\*\*[^*]+?\*\*\*|\*\*[^*]+?\*\*|\*[^*\n]+?\*|`[^`\n]+?`|\n)/g;

  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const matchedStr = match[0];

    if (matchedStr === '\n') {
      nodes.push(<br key={`br-${match.index}`} />);
    } else if (matchedStr.startsWith('***') && matchedStr.endsWith('***') && matchedStr.length >= 6) {
      const content = matchedStr.slice(3, -3);
      nodes.push(
        <strong key={`bi-${match.index}`} className="font-bold">
          <em className="italic">{content}</em>
        </strong>
      );
    } else if (matchedStr.startsWith('**') && matchedStr.endsWith('**') && matchedStr.length >= 4) {
      const content = matchedStr.slice(2, -2);
      nodes.push(
        <strong key={`b-${match.index}`} className="font-semibold">
          {content}
        </strong>
      );
    } else if (matchedStr.startsWith('*') && matchedStr.endsWith('*') && matchedStr.length >= 2) {
      const content = matchedStr.slice(1, -1);
      nodes.push(
        <em key={`i-${match.index}`} className="italic">
          {content}
        </em>
      );
    } else if (matchedStr.startsWith('`') && matchedStr.endsWith('`') && matchedStr.length >= 2) {
      const content = matchedStr.slice(1, -1);
      nodes.push(
        <code
          key={`c-${match.index}`}
          className="px-1 py-0.5 rounded bg-slate-100 dark:bg-neutral-800 text-slate-800 dark:text-neutral-200 font-mono text-[0.9em]"
        >
          {content}
        </code>
      );
    } else {
      nodes.push(matchedStr);
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export const FormattedText: React.FC<FormattedTextProps> = ({
  text,
  className = '',
  inline = false,
  as,
}) => {
  if (!text) return null;

  const Tag = as || (inline ? 'span' : 'div');
  const content = parseFormattedContent(text);

  return <Tag className={className}>{content}</Tag>;
};
