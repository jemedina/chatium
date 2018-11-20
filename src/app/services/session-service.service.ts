import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

export class NewUser {
  name: string;
  email: string;
  password: string;
  gender: string;
  constructor(name, email, pass, gender) {
    this.name = name;
    this.email = email;
    this.password = pass;
    this.gender = gender;
  }
}
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  MOCK_USER = {
    name: "User",
    profile_pic: "assets/images/default_profile_pic.png",
    sex: "female",
    native_lang: "es",
    secundaryLenguages: []
  }
  currentUserInfo = {};

  beginSession(email: string, passwd: string) {
    console.log(email, passwd);
    return this.httpClient.post(environment.host + '/login', {
      email: email,
      password: passwd
    }, { withCredentials: true });
  }

  createUser(newUser: NewUser) {
    console.log(newUser);
    return this.httpClient.post(environment.host+ '/regist', newUser, { withCredentials: true });
  }

  setupUserLanguages(userLanguagesConifg) {
    console.log(userLanguagesConifg);
    return this.httpClient.post(environment.host+ '/setupLanguages', userLanguagesConifg, { withCredentials: true });
  }


  getUserInfo() {
    return this.httpClient.get(environment.host+ '/getUserInfo', { withCredentials: true });
  }

  signOut() {
    return this.httpClient.get(environment.host+ '/singOut', { withCredentials: true });
  }

  getCookieUserId() {
    return this.cookieService.get('userid');
  }


  getCookieUserName() {
    return this.cookieService.get('username');
  }

  constructor(private httpClient: HttpClient,
    private cookieService: CookieService) { }
}
