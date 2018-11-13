import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  readonly PORT = 3000;
  readonly DOMAIN = 'http://localhost:';

  MOCK_USER = {
    name: "User",
    profile_pic: "assets/images/default_profile_pic.png",
    sex: "female",
    native_lang: "es",
    secundaryLenguages: []
  }

  beginSession(email: string, passwd: string) {
    console.log(email, passwd);
    return this.httpClient.post(this.DOMAIN + this.PORT + '/login', {
      email: email,
      password: passwd
    }, { withCredentials: true });
  }

  createUser(newUser: NewUser) {
    console.log(newUser);
    return this.httpClient.post(this.DOMAIN + this.PORT + '/regist', newUser, { withCredentials: true });
  }

  setupUserLanguages(userLanguagesConifg){
    console.log(userLanguagesConifg);
    return this.httpClient.post(this.DOMAIN + this.PORT + '/setupLanguages', userLanguagesConifg, { withCredentials: true });
  }


  getUserInfo() {
    return this.httpClient.get(this.DOMAIN + this.PORT + '/getUserInfo', { withCredentials: true });
  }

  signOut(){
    return this.httpClient.get(this.DOMAIN + this.PORT + '/singOut', { withCredentials : true});
  }

  constructor(private httpClient: HttpClient) { }
}
