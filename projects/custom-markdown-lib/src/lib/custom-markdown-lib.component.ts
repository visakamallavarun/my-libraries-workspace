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
    .markdown-toolbar {
      display: flex;
      gap: 8px;
      margin-bottom: 15px;
      background-color: #f4f4f9; /* Light background for the toolbar */
      padding: 10px; /* Padding around the toolbar */
      border-radius: 4px; /* Slightly rounded corners */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    }

    button {
      padding: 8px 12px; /* Padding for buttons */
      font-size: 14px; /* Font size for buttons */
      color: #fff; /* White text color */
      background-color: #007bff; /* Primary button color */
      border: none; /* Remove default border */
      border-radius: 4px; /* Rounded corners for buttons */
      cursor: pointer; /* Pointer cursor on hover */
      transition: background-color 0.3s; /* Smooth background color transition */
    }

    button:hover {
      background-color: #0056b3; /* Darker shade on hover */
    }

    textarea {
      width: 100%;
      height: 200px;
      margin-bottom: 15px;
      padding: 10px; /* Padding inside textarea */
      border: 1px solid #ccc; /* Border for textarea */
      border-radius: 4px; /* Rounded corners for textarea */
      font-size: 14px; /* Font size for textarea */
      font-family: 'Courier New', Courier, monospace; /* Monospace font for better readability */
      resize: vertical; /* Allow vertical resizing */
      outline: none; /* Remove outline on focus */
      transition: border-color 0.3s; /* Smooth border color transition */
    }

    textarea:focus {
      border-color: #007bff; /* Change border color on focus */
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Subtle shadow effect */
    }

    .markdown-preview {
      background-color: #f0f0f0; /* Background color for preview */
      padding: 15px; /* Padding inside preview area */
      border: 1px solid #ddd; /* Border around preview area */
      border-radius: 4px; /* Rounded corners for preview */
      max-height: 400px; /* Max height for preview */
      overflow-y: auto; /* Allow vertical scrolling if content exceeds */
      font-family: 'Arial', sans-serif; /* Font for preview content */
      font-size: 14px; /* Font size for preview */
      line-height: 1.6; /* Line height for better readability */
    }
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
