import { NgModule } from '@angular/core';
import { ImageSelectorLibComponent } from './image-selector-lib.component';
import { ImageSelectorLibRoutingModule } from './image-selector-lib-routing.module';



@NgModule({
  declarations: [
    ImageSelectorLibComponent
  ],
  imports: [
  
    ImageSelectorLibRoutingModule
  ],
  exports: [
    ImageSelectorLibComponent
  ]
})
export class ImageSelectorLibModule { }
