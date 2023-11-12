import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://apilb.tridevs.net/api/personnes'
  constructor(
    private http: HttpClient,
  ) { }
  getUsers() {
    return this.http.get<any>(this.url);
  }
}
