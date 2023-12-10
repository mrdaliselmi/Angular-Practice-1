import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {UserModel} from "../../models/user.model";




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginLink = 'https://apilb.tridevs.net/api/Users/login';
  logoutLink = 'https://apilb.tridevs.net/api/Users/logout';
  constructor(private http:HttpClient) { }




  login(credentials : {email : string , password : string}) {
    return this.http.post(this.loginLink, credentials);
  }

  logout() {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');
    return this.http.post(this.logoutLink + '?access_token=' + token, '');
  }


}
