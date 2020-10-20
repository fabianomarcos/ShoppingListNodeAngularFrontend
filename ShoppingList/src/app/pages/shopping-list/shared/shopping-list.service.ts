import { Injectable, Injector } from '@angular/core';

import { Observable } from "rxjs";
import { mergeMap, catchError, map } from "rxjs/operators";

import { BaseResourceService } from "../../../shared/services/base-resource.service";
import { ShoppingList } from "./shopping-list.model";

import { ProductService } from '../../products/shared/product.service';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService extends BaseResourceService<ShoppingList> {

  constructor(protected injector: Injector, private productService: ProductService) {
    super("/shopping-list", injector, ShoppingList.fromJson);
  }


  /* create(shoppingList: ShoppingList): Observable<ShoppingList> {
    return this.setCategoryAndSendToServer(shoppingList, super.create.bind(this));
  } */

  /* update(shoppingList: ShoppingList): Observable<ShoppingList> {
    return this.setCategoryAndSendToServer(shoppingList, super.update.bind(this))
  } */

  /* getByMonthAndYear(month: number, year: number): Observable<ShoppingList[]> {
    return this.getAll().pipe(
      map(shopping => this.filterByMonthAndYear(shopping, month, year))
    )
  } */


  /* private setCategoryAndSendToServer(shoppingList: ShoppingList, sendFn: any): Observable<ShoppingList>{
    return this.productService.getById(shoppingList.product_id).pipe(
      mergeMap(product => {
        shoppingList.product = product;
        return sendFn(shoppingList)
      }),
      catchError(this.handleError)
    );
  } */

  /* private filterByMonthAndYear(shoppingList: ShoppingList[], month: number, year: number) {
    return shoppingList.filter(shoppingList => {
      // const entryDate = moment(shoppingList.date, "DD/MM/YYYY");
     // const monthMatches = entryDate.month() + 1 == month;
     // const yearMatches = entryDate.year() == year;

      if(monthMatches && yearMatches) return shoppingList;
    })
  } */

}
