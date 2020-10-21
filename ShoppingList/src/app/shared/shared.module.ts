import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from './components/header/header.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { CardInformationComponent } from './components/card-information/card-information.component';
import { ServerErrorMessagesComponent } from '../core/components/server-error-messages/server-error-messages.component';
import { FormFieldErrorComponent } from '../core/components/form-field-error/form-field-error.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    BreadCrumbComponent,
    CardInformationComponent,
    FormFieldErrorComponent,
    HeaderComponent,
    ServerErrorMessagesComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    BreadCrumbComponent,
    CardInformationComponent,
    FormFieldErrorComponent,
    HeaderComponent,
    ServerErrorMessagesComponent
  ]
})
export class SharedModule { }
