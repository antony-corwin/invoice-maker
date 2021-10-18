import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicePreviewComponent } from './invoice-preview.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    InvoicePreviewComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatIconModule
  ]
})
export class InvoicePreviewModule { }
