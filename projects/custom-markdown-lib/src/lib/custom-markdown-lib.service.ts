import { Injectable } from '@angular/core';
import { marked, Renderer, Tokens } from 'marked'; 
import hljs from 'highlight.js';

@Injectable({
  providedIn: 'root'
})
export class CustomMarkdownLibService {

  constructor() {
    const renderer = new Renderer();

    // Override the default code renderer
    renderer.code = ({ text, lang, escaped }: Tokens.Code) => {
      const language = lang || 'plaintext'; // Default to plaintext if no language is provided
      const highlighted = hljs.highlight(text, { language }).value;
      return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
    };

    marked.setOptions({
      renderer,
      gfm: true,
      breaks: true,
    });
  }

  async convertToHtml(markdown: string): Promise<string> {
    const html = marked(markdown); // Convert markdown to HTML
    // Check if the result is a promise and handle it
    if (html instanceof Promise) {
      return html; // If it's a promise, return it directly
    }
    return Promise.resolve(html); // Otherwise, wrap it in a resolved promise
  }
}
