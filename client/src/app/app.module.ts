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
import { SearchService } from './services/search.service';
import { ProfileComponent } from "./components/profile/profile.component";  
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { ConnectpeopleComponent } from './components/connectpeople/connectpeople.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SetupUserComponent,
    ProfileComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    ChatComponent,
    ConnectpeopleComponent
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
    SearchService,
    FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
