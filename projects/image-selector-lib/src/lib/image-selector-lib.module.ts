import { NgModule } from '@angular/core';
import { ImageSelectorLibComponent } from './image-selector-lib.component';
import { ImageSelectorComponent } from './components/image-selector/image-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ImageSelectorLibComponent,
    ImageSelectorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ImageSelectorLibComponent,
    ImageSelectorComponent
  ]
})
export class ImageSelectorLibModule { }
