import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp81Component } from './cmp81/cmp81.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp81Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp81Component]
})
export class Module1Module { }
