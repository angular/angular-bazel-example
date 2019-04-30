import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp99Component } from './cmp99/cmp99.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp99Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp99Component]
})
export class Module9Module { }
