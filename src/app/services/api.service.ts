import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private usersUrl = 'https://apilb.tridevs.net/api/personnes';
  constructor(private http: HttpClient) {}

  getUsers(searchTerm: string) {
    const options = searchTerm !="" ?
      { params: new HttpParams().set('filter', `{"where":{"name":{"like":"%${searchTerm}%"}}}`) } : {};
    return this.http.get<any>(this.usersUrl,options);}


}
