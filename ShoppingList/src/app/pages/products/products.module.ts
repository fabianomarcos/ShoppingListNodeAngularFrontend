import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [ProductListComponent],
})
export class ProductsModule { }
