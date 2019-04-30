import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp72Component } from './cmp72/cmp72.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp72Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp72Component]
})
export class Module2Module { }
