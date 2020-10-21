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
  public income: number = 7300;
  public outcome: number = 0;
  public balance: number = 0;

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
          this.outcome += product.amount;
          this.balance = this.income - this.outcome;
          return product;
        })
      }
    );
  }
}
