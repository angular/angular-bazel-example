import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp15Component } from './cmp15/cmp15.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp15Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp15Component]
})
export class Module5Module { }
