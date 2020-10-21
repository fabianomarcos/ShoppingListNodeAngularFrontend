import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Product extends BaseResourceModel {
  constructor(
    public id?: string,
    public name?: string,
    public quantity?: number,
    public price?: number,
    public amount?: number,
    public dateRegister?: string,
  ){
    super();
  }

  static fromJson(jsonData: any): Product {
    return Object.assign(new Product(), jsonData);
  }
}
