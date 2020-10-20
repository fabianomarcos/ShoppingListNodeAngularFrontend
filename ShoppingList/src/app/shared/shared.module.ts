import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from './components/header/header.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { CardInformationComponent } from './components/card-information/card-information.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    BreadCrumbComponent,
    CardInformationComponent,
    HeaderComponent,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    BreadCrumbComponent,
    CardInformationComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
