import { Injectable, OnInit } from "@angular/core";
import { LibConfigurationProvider } from "../config";

@Injectable({
  providedIn: 'root'
})
export class Environment implements OnInit {
  apiBaseUrl:String= this.configurationProvider.config.backendApi;
  constructor(public configurationProvider: LibConfigurationProvider) {}

  ngOnInit() {
    console.log(this.configurationProvider.config);
  }
}