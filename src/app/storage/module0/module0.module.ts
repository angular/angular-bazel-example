import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp8Component } from './cmp8/cmp8.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp8Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp8Component]
})
export class Module0Module { }
