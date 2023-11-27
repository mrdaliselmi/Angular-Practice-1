import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginLink = 'https://apilb.tridevs.net/api/Users/login';
  logoutLink = 'https://apilb.tridevs.net/api/Users/logout';
  constructor(private http:HttpClient) { }


  login(credentials: any) {
    console.log(credentials);
    return this.http.post(this.loginLink, credentials);
  }

  logout(token: any) {
    return this.http.post(this.logoutLink + '?access_token=' + token, '');
  }
}
