import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingRoutingModule } from './shopping-routing.module';



@NgModule({
  declarations: [ShoppingListComponent],
  imports: [
    SharedModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingListModule { }
