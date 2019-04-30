import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp18Component } from './cmp18/cmp18.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp18Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp18Component]
})
export class Module8Module { }
