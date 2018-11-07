import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class NewUser {
  name: string;
  email: string;
  password: string;
  constructor(name, email, pass){
    this.name = name;
    this.email = email;
    this.password = pass;
  }
}
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  readonly PORT = 3000;
  readonly DOMAIN = 'http://localhost:';


  beginSession(email: string, passwd: string) {
    console.log(email, passwd);
    return this.httpClient.post(this.DOMAIN+this.PORT+'/login', {
      email: email,
      password: passwd
    });
  }

  createUser(newUser: NewUser) {
    console.log(newUser);
    return this.httpClient.post(this.DOMAIN + this.PORT + '/regist',newUser);
  }

  constructor(private httpClient: HttpClient) { }
}
