import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryLanguageService } from 'src/app/services/country-language.service';
import { SessionService } from 'src/app/services/session-service.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-connectpeople',
  templateUrl: './connectpeople.component.html',
  styleUrls: ['./connectpeople.component.scss']
})
export class ConnectpeopleComponent implements OnInit {
  supportedLanguages: any[];
  languageLevels: any;
  userInfo: any;
  GENDERS: any[] = [
    { code: "male", name: "Male" },
    { code: "female", name: "Female" }
  ];

  searchParams: any = {
    "nativeLanguage": "en",
    "learningLanguage": "es",
    "gender": "female"
  };

  foundUsers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private sessionService: SessionService, 
    private _formBuilder: FormBuilder,
    private countryLanguage: CountryLanguageService, 
    private searchService: SearchService) { }

  ngOnInit() {
    this.supportedLanguages = this.countryLanguage.getSupportedLanguages();
    this.languageLevels = this.countryLanguage.getLanguageLevelValues();

    this.sessionService.getUserInfo().subscribe(resp => {
      this.userInfo = resp;
      this.searchParams.nativeLanguage = this.userInfo.languageConfiguration.learningLanguage;
      this.searchParams.learningLanguage = this.userInfo.languageConfiguration.nativeLanguage;
      this.searchParams.gender = this.userInfo.gender == 'male'?'female':'male';
    });

    this.searchService.getResultsByLanguagePreferences(this.searchParams).subscribe(res => {
      console.log(res);
    });
  }

}
