import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { CustomMaterialModule } from './core/material.module';

import { SessionService } from './services/session-service.service';
import { SetupUserComponent } from './components/setup-user/setup-user.component';
import { CountryLanguageService } from './services/country-language.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SetupUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ],
  providers: [
    SessionService,
    CountryLanguageService,
    FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
