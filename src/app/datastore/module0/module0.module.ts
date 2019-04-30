import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp20Component } from './cmp20/cmp20.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp20Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp20Component]
})
export class Module0Module { }
