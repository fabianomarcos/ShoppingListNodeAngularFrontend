import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from './components/header/header.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    BreadCrumbComponent,
    HeaderComponent,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    BreadCrumbComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
