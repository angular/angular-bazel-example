import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp9Component } from './cmp9/cmp9.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp9Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp9Component]
})
export class Module9Module { }
