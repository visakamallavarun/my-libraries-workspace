import { NgModule } from '@angular/core';
import { CustomMarkdownLibComponent } from './custom-markdown-lib.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomMarkdownLibComponent
  ],
  imports: [
    FormsModule 
  ],
  exports: [
    CustomMarkdownLibComponent
  ]
})
export class CustomMarkdownLibModule { }
