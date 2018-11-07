import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryLanguageService {
  private supportedLanguages = [
    "English",
    "Spanish",
    "French"
  ];

  private supportedCountried = [
    {
      name: "United States",
      icon: ''
    },{
      name: "México",
      icon: ''
    },{
      name: "France",
      icon: ''
    }
  ];
  constructor() { }

  getSupportedLanguages() {
    return this.supportedLanguages;
  }

  getSupportedCountries() {
    return this.supportedCountried;
  }
}
