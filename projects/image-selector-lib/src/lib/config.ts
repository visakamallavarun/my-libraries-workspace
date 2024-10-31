import { Injectable, Provider } from '@angular/core';

export class LibToConfigureConfigurationImg {
  backendApi: string = '';
}

export class LibConfiguration {
  config?: Provider;
}

@Injectable({ providedIn: 'root' })
export abstract class LibConfigurationProviderImg {
  abstract get configImg(): LibToConfigureConfigurationImg;
}

@Injectable({ providedIn: 'root' })
export class DefaultLibConfiguration implements LibConfigurationProviderImg {
  get configImg(): LibToConfigureConfigurationImg {
    return { backendApi: "" };
  }
}
