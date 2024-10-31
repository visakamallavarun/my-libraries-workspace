import { Injectable, OnInit } from "@angular/core";
import { LibConfigurationProviderImg } from "../config";

@Injectable({
  providedIn: 'root'
})
export class Environment implements OnInit {
  apiBaseUrl:String= this.configurationProvider.configImg.backendApi;
  constructor(public configurationProvider: LibConfigurationProviderImg) {}

  ngOnInit() {
    console.log(this.configurationProvider.configImg);
  }
}