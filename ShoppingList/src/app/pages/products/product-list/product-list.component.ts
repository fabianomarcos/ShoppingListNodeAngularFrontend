import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent extends BaseResourceListComponent<Product> implements OnInit {
  private products: Product[] = [];

  constructor(private productService: ProductService) {
    super(productService);
  }

  ngOnInit() {
    this.loadProducts();
  }

  setProducts() {
    return this.products;
  }

  private loadProducts() {
    this.productService.getAll().subscribe(
      products => {
        this.products = products.map(product => {
          product.amount = product.quantity * product.price;
          return product;
        })
      }
    );
  }
}
