import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  
  @Input() markdownContent: string = ''; 
  @Output() markdownContentChange: EventEmitter<string> = new EventEmitter<string>(); 

  htmlContent: string = ''; // This will hold the generated HTML

  constructor(private markdownService: CustomMarkdownLibService) {} // Inject the service

  async updatePreview() {
    this.htmlContent = await this.markdownService.convertToHtml(this.markdownContent); // Convert markdown to HTML
    this.markdownContentChange.emit(this.markdownContent); 
  }

  applyMarkdownSyntax(syntax: string, closeSyntax?: string) {
    this.markdownContent += syntax + (closeSyntax || '');
    this.updatePreview(); 
  }
}
