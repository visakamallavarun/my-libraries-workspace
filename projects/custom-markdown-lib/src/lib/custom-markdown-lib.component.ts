import { Component } from '@angular/core';
import { CustomMarkdownLibService } from './custom-markdown-lib.service';

@Component({
  selector: 'lib-markdown-renderer',
  template: `
    <div class="markdown-toolbar">
      <button (click)="applyMarkdownSyntax('# ')">H1</button>
      <button (click)="applyMarkdownSyntax('## ')">H2</button>
      <button (click)="applyMarkdownSyntax('**', '**')">Bold</button>
      <button (click)="applyMarkdownSyntax('*', '*')">Italic</button>
      <button (click)="applyMarkdownSyntax('\n\`\`\`', '\n\`\`\`')">Code Block</button>
    </div>
    <textarea [(ngModel)]="markdownContent" (ngModelChange)="updatePreview()" placeholder="Write your markdown here..."></textarea>
    <div class="markdown-preview" [innerHTML]="htmlContent"></div>
  `,
  styles: [
    `
    .markdown-toolbar { display: flex; gap: 8px; margin-bottom: 10px; }
    textarea { width: 100%; height: 200px; margin-bottom: 10px; }
    .markdown-preview { background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd; }
  `
  ]
})
export class CustomMarkdownLibComponent {
  
  markdownContent: string = '';
  htmlContent: string | Promise<string> = '';

  constructor(private markdownService: CustomMarkdownLibService) {}

  updatePreview() {
    this.htmlContent = this.markdownService.convertToHtml(this.markdownContent);
  }

  applyMarkdownSyntax(prefix: string, suffix: string = '') {
    const textarea: HTMLTextAreaElement = document.querySelector('textarea')!;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const selectedText = this.markdownContent.slice(start, end);
    const newText = prefix + selectedText + suffix;

    this.markdownContent =
      this.markdownContent.slice(0, start) + newText + this.markdownContent.slice(end);
    textarea.setSelectionRange(start, start + newText.length);
    this.updatePreview(); 
  }
}
