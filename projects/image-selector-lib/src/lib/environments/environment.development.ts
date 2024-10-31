import { Injectable, OnInit } from "@angular/core";
import { LibConfigurationProviderImg } from "../config";

@Injectable({
  providedIn: 'root'
})
export class Environmentdevelopment implements OnInit {
  apiBaseUrl:String= this.configurationProvider.config.backendApi;
  constructor(public configurationProvider: LibConfigurationProviderImg) {}

  ngOnInit() {
    console.log(this.configurationProvider.config);
  }
}