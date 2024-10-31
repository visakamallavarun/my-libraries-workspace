import { ModuleWithProviders, NgModule } from '@angular/core';
import { ImageSelectorLibComponent } from './image-selector-lib.component';
import { ImageSelectorComponent } from './components/image-selector/image-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultLibConfiguration, LibConfiguration, LibConfigurationProviderImg } from './config';

@NgModule({
  declarations: [
    ImageSelectorLibComponent,
    ImageSelectorComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ImageSelectorLibComponent,
    ImageSelectorComponent
  ]
})
export class ImageSelectorLibModule {
  static forRoot(
    libModuleConfiguration: LibConfiguration = {}
  ): ModuleWithProviders<ImageSelectorLibModule> {
    return {
      ngModule: ImageSelectorLibModule,
      providers: [
        libModuleConfiguration.config || {
          provide: LibConfigurationProviderImg,
          useClass: DefaultLibConfiguration,
        },
      ],
    };
  }

 }
