import { Component, OnInit, Injector } from '@angular/core';
import { Validators } from "@angular/forms";

import { BaseResourceFormComponent } from "../../../shared/components/base-resource-form/base-resource-form.component"
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductsFormComponent extends BaseResourceFormComponent<Product> implements OnInit{
  imaskConfig = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ','
  };

  constructor(
    protected productService: ProductService,
    protected injector: Injector
  ) {
    super(injector, new Product(), productService, Product.fromJson)
  }

  ngOnInit() {

  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: ["null", [Validators.required, Validators.minLength(2)]],
      quantidade: [10, [Validators.required]],
      amount: [null, [Validators.required]],
    });
  }

  protected creationPageTitle(): string {
    return "Cadastro de Novo Produto";
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.name || "";
    return "Editando Produto: " + resourceName;
  }
}
