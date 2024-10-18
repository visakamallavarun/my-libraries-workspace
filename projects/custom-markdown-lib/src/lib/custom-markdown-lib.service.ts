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

  convertToHtml(markdown: string): string | Promise<string>{
    return marked(markdown);
  }
}
