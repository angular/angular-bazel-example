import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp45Component } from './cmp45/cmp45.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp45Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp45Component]
})
export class Module5Module { }
