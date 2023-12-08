import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productList$!: Observable<any[]>;
  show = true;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productList$ = this.productService.getProducts();
  }

  loadMore() {
    console.log(this.productList$);
    this.productService.loadMoreProducts().subscribe({
      next: (newProducts) => {
        if (newProducts.length === 0) {
          this.show = false;
        } else {
          this.productList$ = this.productList$.pipe(
            map((existingProducts) => [...existingProducts, ...newProducts])
          );
        }
      },
      error: (error) => {
        console.error('Error loading more products:', error);
      },
    });
  }
}
