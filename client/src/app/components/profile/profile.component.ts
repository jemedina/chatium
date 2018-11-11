import { Component, OnInit } from '@angular/core';
import { CountryLanguageService } from '../../services/country-language.service';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, FormGroup, Validators, FormArray } from "@angular/forms";
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';

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
  flag_changeLearningL = false;
  flag_ChangeSex = false;
  removable = true;
   
  formSelectNative:FormGroup;
  formSelectLearn:FormGroup;


  profile_data: any = {
    name: "User",
    profile_pic: "assets/images/default_profile_pic.png",
    sex: "female",
    native_leng: "Español",
    secundaryLenguages:[],
    learning :["es","en", "fr"]
  }

  learnPills: any[] =  [];
  supportedLanguages: any[];

  constructor(private countryLanguage: CountryLanguageService) {
    this.formSelectNative= new FormGroup({
      'selectNative' : new FormControl('', [Validators.required]),
    })

    this.formSelectLearn = new FormGroup({
      'selectNew' : new FormControl('', [Validators.required])
    })

  } 

  ngOnInit() {
    //Obtiene del servicio todos los idiomas soportados
    this.supportedLanguages = this.countryLanguage.getSupportedLanguages();    
    console.log("Lenguajes Soportados", this.supportedLanguages)

    //Obtiene los nombres de los idiomas en base al codigo para mostrarlos en los chips
    for (let index = 0; index < this.profile_data.learning.length; index++){
      this.learnPills.push(this.countryLanguage.getLanguageByCode(this.profile_data.learning[index]))
    }
  }

  changeNativeL() {
    this.flag_changeNativeL = !this.flag_changeNativeL;
  }
  changeLearningL(){
    this.flag_changeLearningL = !this.flag_changeLearningL;
  }

  remove(fruit: Fruit): void {
    const index = this.learnPills.indexOf(fruit);

    if (index >= 0) {
      this.learnPills.splice(index, 1);
    }
    console.log(this.learnPills)
  }


  changeNative(){
    console.log(this.formSelectNative.controls)
    let code=this.formSelectNative.controls.selectNative.value
    if(code){
      this.profile_data.native_leng=this.countryLanguage.getLanguageByCode(code).name
    }    
  }
  changeSex(){
    this.flag_ChangeSex = !this.flag_ChangeSex;
  }

  addLearning(){   
    console.log(this.formSelectLearn.controls)
    let code =this.formSelectLearn.controls.selectNew.value
    if (code){
      let idiom = this.countryLanguage.getLanguageByCode(code)
      this.learnPills.push(idiom);
      console.log("idiom",idiom)
      console.log("learnPills",this.learnPills)
    }
  }
}
