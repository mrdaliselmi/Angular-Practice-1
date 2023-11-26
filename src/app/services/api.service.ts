import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private usersUrl = 'https://apilb.tridevs.net/api/personnes';
  constructor(private http: HttpClient) {}
  // Create an instance of HttpParams

  getUsers(query: string) {
    let params = new HttpParams();

   if(query) {params = params.set('where', JSON.stringify({
      name: {
        like: query // Replace 'searchTerm' with your actual search term
      }}));
    return this.http.get<any>(this.usersUrl,{params});
  }
  else {return this.http.get<any>(this.usersUrl);}}


}
