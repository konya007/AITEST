import MarkdownIt from 'markdown-it';
import texmath from 'markdown-it-texmath';
import katex from 'katex';
import hljs from 'highlight.js';
import deflist from 'markdown-it-deflist';
import footnote from 'markdown-it-footnote';
import sub from 'markdown-it-sub';
import sup from 'markdown-it-sup';
import taskLists from 'markdown-it-task-lists';

export function createMarkdownRenderer() {
  const md = new MarkdownIt({
    html: true,        // Enable HTML tags in source
    linkify: true,     // Autoconvert URL-like text to links
    typographer: true, // Enable some language-neutral replacement + quotes beautification
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          // Return HTML with hljs class for styling
          return '<pre class="hljs"><code>' +
                 hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                 '</code></pre>';
        } catch (__) {
          // ignore error
        }
      }
      // Fallback for no lang or error: escape HTML and wrap in pre/code
      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
  });

  // Use markdown-it plugins
  md.use(texmath, {
    engine: katex,
    delimiters: 'dollars', // Use $...$ for inline math and $$...$$ for display math
    katexOptions: {
      throwOnError: false, // Don't halt rendering on a KaTeX error
      // You can add KaTeX macros here if needed, e.g.:
      // macros: { "\\RR": "\\mathbb{R}" }
    }
  });
  md.use(deflist);
  md.use(footnote);
  md.use(sub);
  md.use(sup);
  md.use(taskLists, { 
    enabled: true, // Ensure it's enabled (though `use` implies this)
    label: true, // Wrap the content of the list item in a <label>
    labelAfter: true // Put the checkbox after the label
  });

  return md;
}

export function preprocessMarkdown(markdownContent) {
  // This function can be used for any custom preprocessing of the Markdown string
  // before it's rendered by markdown-it.
  // For now, it will return the content unmodified.
  // Example: You could add regex replacements here for common typos or custom syntax.
  // let processedContent = markdownContent;
  // processedContent = processedContent.replace(/\\foo/g, '\\bar');
  // return processedContent;
  return markdownContent;
}

export function postProcessMathDisplay(contentElement) {
  // This function is called after the rendered HTML is inserted into the DOM.
  // With markdown-it-texmath and KaTeX, math is already rendered to HTML strings
  // by the time markdown-it's `render` method completes.
  // KaTeX CSS (linked in index.html) should handle the display.
  // This function could be used for any final DOM manipulations if needed,
  // but for KaTeX rendering itself, it's typically not required.
  // console.log("postProcessMathDisplay called. Math should be rendered by KaTeX via markdown-it-texmath.");
}
