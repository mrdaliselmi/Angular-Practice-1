import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'https://dummyjson.com/products';
  private limit = 2;
  private skip = 0;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    const url = `${this.url}?limit=${this.limit}&skip=${this.skip}`;
    return this.http.get<any[]>(url).pipe(
    //@ts-ignore
      map((productsInfo) => productsInfo.products)
    );
  }

  loadMoreProducts(): Observable<any[]> {
    console.log("Loading more products");
    this.skip+=this.limit;
    return this.getProducts();
  }
}
