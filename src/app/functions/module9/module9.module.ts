import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp39Component } from './cmp39/cmp39.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp39Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp39Component]
})
export class Module9Module { }
