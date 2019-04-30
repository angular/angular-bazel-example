import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp75Component } from './cmp75/cmp75.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp75Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp75Component]
})
export class Module5Module { }
