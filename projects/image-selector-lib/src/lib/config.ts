import { Injectable, Provider } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class LibToConfigureConfiguration {
  backendApi: string = '';
}

export class LibConfiguration {
  config?: Provider;
}

@Injectable({ providedIn: 'root' })
export abstract class LibConfigurationProvider {
  abstract config$: Observable<LibToConfigureConfiguration>;
  abstract setConfig(config: LibToConfigureConfiguration): void;
}

@Injectable({ providedIn: 'root' })
export class DefaultLibConfiguration implements LibConfigurationProvider {
  private configSubject = new BehaviorSubject<LibToConfigureConfiguration>({ backendApi: '' });
  config$ = this.configSubject.asObservable();
  setConfig(config: LibToConfigureConfiguration): void {
    this.configSubject.next(config);
  }
}
