import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp91Component } from './cmp91/cmp91.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp91Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp91Component]
})
export class Module1Module { }
