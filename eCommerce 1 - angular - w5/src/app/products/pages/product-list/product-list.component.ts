import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> = this.productService.products$;
  isLoading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.productService.fetchProducts().subscribe(() => {
      this.isLoading = false;
    });
  }
}
