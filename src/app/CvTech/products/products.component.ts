import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private apiService: ApiService) {
  }
  limit = 12;
  productList: any = [];
  show=true;

  products = this.apiService.getProducts(this.limit).subscribe((data) => {
    this.productList = data.products;
  })


  loadMore() {
    if (this.productList.length+12<100){
      this.limit+=12;
    }
    else {
      this.limit=100;
      this.show=false;
    }
    this.products = this.apiService.getProducts(this.limit).subscribe((data) => {
      this.productList = data.products;
      console.log(this.productList);
    })
  }
}
