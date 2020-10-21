import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import "@angular/compiler";

const routes: Routes = [
  { path: 'products',
    loadChildren: () => import('./pages/products/products.module').then(module => module.ProductsModule)
  },

  { path: 'shopping-list',
    loadChildren: () => import('./pages/shopping-list/shopping-list.module').then(module => module.ShoppingListModule)
  },

  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
