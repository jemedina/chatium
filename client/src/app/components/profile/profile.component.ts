import { Component, OnInit } from '@angular/core';
import { CountryLanguageService } from '../../services/country-language.service';
import { MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  flag_changeNativeL: boolean = false;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  profile_data: any = {
    name: "User",
    profile_pic: "assets/images/default_profile_pic.png",
    sex: "female",
    native_leng: "Español",
    secundaryLenguages:[]
  }

  supportedLanguages: any[];


  constructor(private countryLanguage: CountryLanguageService) {

  }

  ngOnInit() {
    this.supportedLanguages = this.countryLanguage.getSupportedLanguages();
    console.log(this.supportedLanguages);
  }

  changeNativeL() {
    this.flag_changeNativeL = !this.flag_changeNativeL;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      console.log('valor '+ value)
      this.profile_data.secundaryLenguages.push({ name: value.trim() });
      console.log(this.profile_data.secundaryLenguages)
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.profile_data.secundaryLenguages.indexOf();

    if (index >= 0) {
      this.profile_data.secundaryLenguages.splice(index, 1);
    }
  }
}
