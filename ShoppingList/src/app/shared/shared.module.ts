import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    HeaderComponent,
  ]
})
export class SharedModule { }
