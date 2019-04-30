import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp11Component } from './cmp11/cmp11.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp11Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp11Component]
})
export class Module1Module { }
