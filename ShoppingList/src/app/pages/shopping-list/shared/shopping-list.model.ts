import { BaseResourceModel } from "../../../shared/models/base-resource.model";
import { Product } from '../../products/shared/product.model';

export class ShoppingList extends BaseResourceModel{
  constructor(
    public id?: string,
    public quantity?: number,
    public price?: number,
    public dateRegister?: Date,
    public product_id?: string,
    public product?: Product
  ){
    super();
  }

  static fromJson(jsonData: any): ShoppingList {
    return Object.assign(new ShoppingList(), jsonData);
  }
}
