import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp69Component } from './cmp69/cmp69.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp69Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp69Component]
})
export class Module9Module { }
