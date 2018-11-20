import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryLanguageService {
  private supportedLanguages = [
    { name: "English", code: 'en' },
    { name: "Spanish", code: 'es' },
    { name: "French", code: 'fr' }
  ];

  private supportedCountried = [
    {
      name: "United States",
      icon: '/assets/countryflags/us.png',
      code: 'us'
    }, {
      name: "México",
      icon: '/assets/countryflags/mx.png',
      code: 'mx'
    }, {
      name: "Spain",
      icon: '/assets/countryflags/es.png',
      code: 'es'
    }
  ];

  public getLanguageByCode(code){
    return this.supportedLanguages.find(e => e.code == code);
  }

  private languageLevelValues = 
    {
      1: "Newbie",
      2: "Beginner",
      3: "Intermediate",
      4: "Advanced",
      5: "Teacher"
    };
  
  constructor() { }

  getSupportedLanguages() {
    return this.supportedLanguages;
  }

  getSupportedCountries() {
    return this.supportedCountried;
  }

  getLanguageLevelValues() {
    return this.languageLevelValues;
  }
}
