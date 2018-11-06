import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  PORT = 3000;


  beginSession(user, passwd) {
    console.log(user, passwd);
    return this.httpClient.post('http://localhost:'+this.PORT+'/login', {
      user: user,
      password: passwd
    });
  }

  constructor(private httpClient: HttpClient) { }
}
