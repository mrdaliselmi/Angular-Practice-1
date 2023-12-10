import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {skip} from "rxjs";
@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private usersUrl = 'https://apilb.tridevs.net/api/personnes';
  private productsUrl = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}

  getUsers(searchTerm: string) {
    const options = searchTerm !="" ?
      { params: new HttpParams().set('filter', `{"where":{"name":{"like":"%${searchTerm}%"}}}`) } : {};
    return this.http.get<any>(this.usersUrl,options);}



  getProducts(limit:number,skip:number  ) {
    const options={params: new HttpParams().set('limit', `${limit}`).set('skip', `${skip}`)};
    return this.http.get<any>(this.productsUrl, options);
  }

}
