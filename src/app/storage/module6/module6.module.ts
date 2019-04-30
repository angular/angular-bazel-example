import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp86Component } from './cmp86/cmp86.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp86Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp86Component]
})
export class Module6Module { }
