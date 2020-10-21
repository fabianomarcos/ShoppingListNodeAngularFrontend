import { Component, OnInit, Injector } from '@angular/core';
import { Validators } from "@angular/forms";

import { BaseResourceFormComponent } from "../../../shared/components/base-resource-form/base-resource-form.component"
import { Product } from '../../products/shared/product.model';
import { ProductService } from '../../products/shared/product.service';
import { ShoppingList } from '../shared/shopping-list.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.scss']
})
export class ShoppingFormComponent extends BaseResourceFormComponent<ShoppingList> implements OnInit{

  products = [];

  imaskConfig = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ','
  };

  constructor(
    protected shoppingListService: ShoppingListService,
    protected productService: ProductService,
    protected injector: Injector
  ) {
    super(injector, new ShoppingList(), shoppingListService, ShoppingList.fromJson)
  }

  ngOnInit() {
    this.loadProducts();
    super.ngOnInit();
  }

 /*  get typeOptions(): Array<any>{
    return Object.entries(ShoppingList.types).map(
      ([value, text]) => {
        return {
          text: text,
          value: value
        }
      }
    )
  } */


  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
   //   name: [null, [Validators.required, Validators.minLength(2)]],
   //   quantity: [null, [Validators.required]],
    //  price: [null, [Validators.required]],
      product_id: [null, [Validators.required]]
    });
  }

  private loadProducts() {
    this.productService.getAll().subscribe(
      products => {
        this.products = products.map(product => {
          const { id, name } = product;
         // console.log({id, name});
          return {id , name };
        })
        console.log(products, {...this.products})
      }
    );
  }

  protected creationPageTitle(): string {
    return "Cadastro de Novo Produto";
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.name || "";
    return "Editando Produto: " + resourceName;
  }
}
