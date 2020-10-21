import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';



@NgModule({
  declarations: [ShoppingListComponent, ShoppingFormComponent],
  imports: [
    SharedModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingListModule { }
