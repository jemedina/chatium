import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CountryLanguageService } from 'src/app/services/country-language.service';

@Component({
  selector: 'app-setup-user',
  templateUrl: './setup-user.component.html',
  styleUrls: ['./setup-user.component.scss']
})
export class SetupUserComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  supportedLanguages: any[];
  supportedCountries: any[];

  /*Supported languages*/

  constructor(private _formBuilder: FormBuilder, private countryLanguage: CountryLanguageService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.supportedLanguages = this.countryLanguage.getSupportedLanguages();
    this.supportedCountries = this.countryLanguage.getSupportedCountries();
  }

}
