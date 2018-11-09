import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryLanguageService } from 'src/app/services/country-language.service';

@Component({
  selector: 'app-setup-user',
  templateUrl: './setup-user.component.html',
  styleUrls: ['./setup-user.component.scss']
})
export class SetupUserComponent implements OnInit {

  isLinear: boolean = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  lastFormGroup: FormGroup;

  supportedLanguages: any[];
  supportedCountries: any[];

  languageLevelValues: any;

  secondaryLanguagesArr: any[];

  constructor(private _formBuilder: FormBuilder, private countryLanguage: CountryLanguageService) { }

  ngOnInit() {
    this.secondaryLanguagesArr = [];
    this.firstFormGroup = this._formBuilder.group({
      nativeLanguage: ['', Validators.required],
      country: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      newLanguage: [''],
      newLanguageLevel: [1]
    });
    this.lastFormGroup = this._formBuilder.group({
      learningLanguage: ['', Validators.required]
    });

    this.supportedLanguages = this.countryLanguage.getSupportedLanguages();
    this.supportedCountries = this.countryLanguage.getSupportedCountries();
    this.languageLevelValues = this.countryLanguage.getLanguageLevelValues();
  }
  printForm() {
    console.log(this.secondFormGroup);
  }

  addSecondaryLanguage() {
    if (this.secondFormGroup.controls.newLanguage.value !== '' &&
      !this.secondaryLanguagesArr.some(
        e => e.language === this.secondFormGroup.controls.newLanguage.value)) {
      this.secondaryLanguagesArr.push({
        language: this.secondFormGroup.controls.newLanguage.value,
        level: this.secondFormGroup.controls.newLanguageLevel.value
      })
    }
  }

  removeCurrentSecondaryLanguage(language) {
    const index = this.secondaryLanguagesArr.findIndex(
      e => e.language === this.secondFormGroup.controls.newLanguage.value);

    this.secondaryLanguagesArr.splice(index);
  }

}
