// Custom MDX components for rendering content with IkiGlow styling

import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  // Headings
  h1: ({ children }) => (
    <h1 className="text-3xl tracking-wide md:text-4xl">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl tracking-wide pt-8">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg tracking-wide pt-6">{children}</h3>
  ),

  // Paragraphs
  p: ({ children }) => (
    <p className="text-base leading-relaxed">{children}</p>
  ),

  // Links
  a: ({ href, children }) => {
    const isInternal = href?.startsWith("/");
    const isAnchor = href?.startsWith("#");

    if (isInternal || isAnchor) {
      return (
        <Link
          href={href || ""}
          className="text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
      >
        {children}
      </a>
    );
  },

  // Lists
  ul: ({ children }) => (
    <ul className="list-disc list-outside ml-6 space-y-2 text-base leading-relaxed">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside ml-6 space-y-3 text-base leading-relaxed">{children}</ol>
  ),
  li: ({ children }) => <li className="pl-2">{children}</li>,

  // Emphasis
  em: ({ children }) => <em className="italic">{children}</em>,
  strong: ({ children }) => <strong className="font-medium">{children}</strong>,

  // Blockquote (used for empathy sections)
  blockquote: ({ children }) => (
    <blockquote className="space-y-4 border-l-2 border-border pl-6">
      {children}
    </blockquote>
  ),

  // Code
  code: ({ children }) => (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
      {children}
    </code>
  ),

  // Horizontal rule
  hr: () => <hr className="border-t border-border my-8" />,
};
