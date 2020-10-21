import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsFormComponent } from './product-form/product-form.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './product.routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [ProductListComponent, ProductsFormComponent],
})
export class ProductsModule { }
