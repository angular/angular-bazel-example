import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp95Component } from './cmp95/cmp95.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp95Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp95Component]
})
export class Module5Module { }
