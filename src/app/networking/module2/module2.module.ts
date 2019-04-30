import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp62Component } from './cmp62/cmp62.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp62Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp62Component]
})
export class Module2Module { }
