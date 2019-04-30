import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp32Component } from './cmp32/cmp32.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp32Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp32Component]
})
export class Module2Module { }
