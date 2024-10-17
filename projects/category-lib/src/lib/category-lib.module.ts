import { NgModule } from '@angular/core';
import { CategoryLibComponent } from './category-lib.component';
import { CategoryLibRoutingModule } from './category-lib-routing.module';



@NgModule({
  declarations: [
    CategoryLibComponent
  ],
  imports: [
  
    CategoryLibRoutingModule
  ],
  exports: [
    CategoryLibComponent
  ]
})
export class CategoryLibModule { }
