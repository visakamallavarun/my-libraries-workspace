import { Injectable, Provider } from '@angular/core';

export class LibToConfigureConfigurationImg {
  backendApi: string = '';
}

export class LibConfiguration {
  config?: Provider;
}

@Injectable({ providedIn: 'root' })
export abstract class LibConfigurationProviderImg {
  abstract get config(): LibToConfigureConfigurationImg;
}

@Injectable({ providedIn: 'root' })
export class DefaultLibConfiguration implements LibConfigurationProviderImg {
  get config(): LibToConfigureConfigurationImg {
    return { backendApi: "" };
  }
}
