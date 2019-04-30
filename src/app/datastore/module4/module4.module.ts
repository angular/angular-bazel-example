import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp24Component } from './cmp24/cmp24.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp24Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp24Component]
})
export class Module4Module { }
