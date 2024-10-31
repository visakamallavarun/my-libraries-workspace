import { Injectable } from "@angular/core";
import { LibConfigurationProvider } from "../config";
import { filter } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class Environment {
  apiBaseUrl: string | undefined;

  constructor(private configurationProvider: LibConfigurationProvider) {
    // Subscribe to config$ and initialize apiBaseUrl when config is available
    this.configurationProvider.config$
      .pipe(filter(config => !!config.backendApi)) // Ensure backendApi is defined
      .subscribe(config => {
        this.apiBaseUrl = config.backendApi;
        console.log('Configuration loaded:', config);
      });
  }
}
