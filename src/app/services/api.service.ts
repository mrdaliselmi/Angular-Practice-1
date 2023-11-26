import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private usersUrl = 'https://apilb.tridevs.net/api/personnes';
  constructor(private http: HttpClient) {}
  // Create an instance of HttpParams

  getUsers() {
    return this.http.get<any>(this.usersUrl);}


}
