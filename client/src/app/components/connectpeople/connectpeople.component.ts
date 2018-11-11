import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryLanguageService } from 'src/app/services/country-language.service';

@Component({
  selector: 'app-connectpeople',
  templateUrl: './connectpeople.component.html',
  styleUrls: ['./connectpeople.component.scss']
})
export class ConnectpeopleComponent implements OnInit {
  supportedLanguages: any[];
  languageLevels: any;
  GENDERS: any[] = [
    { code: "male", name: "Male" },
    { code: "female", name: "Female" }
  ];

  foundUsers = [1,2,3,4,5,6,7,8,9,10];

  constructor(private _formBuilder: FormBuilder, private countryLanguage: CountryLanguageService) { }

  ngOnInit() {
    this.supportedLanguages = this.countryLanguage.getSupportedLanguages();
    this.languageLevels = this.countryLanguage.getLanguageLevelValues();
  }

}
