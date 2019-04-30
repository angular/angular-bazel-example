import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp59Component } from './cmp59/cmp59.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp59Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp59Component]
})
export class Module9Module { }
