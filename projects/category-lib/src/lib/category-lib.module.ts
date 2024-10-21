import { ModuleWithProviders, NgModule } from '@angular/core';
import { CategoryLibRoutingModule } from './category-lib-routing.module';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultLibConfiguration, LibConfiguration, LibConfigurationProvider } from './config';

@NgModule({
  declarations: [
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
  ],
  imports: [
    CategoryLibRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    CategoryLibRoutingModule,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
  ]
})
export class CategoryLibModule { 
  static forRoot(
    libModuleConfiguration: LibConfiguration = {}
  ): ModuleWithProviders<CategoryLibModule> {
    return {
      ngModule: CategoryLibModule,
      providers: [
        libModuleConfiguration.config || {
          provide: LibConfigurationProvider,
          useClass: DefaultLibConfiguration,
        },
      ],
    };
  }

}
