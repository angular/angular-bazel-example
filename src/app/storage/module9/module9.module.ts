import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp89Component } from './cmp89/cmp89.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp89Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp89Component]
})
export class Module9Module { }
