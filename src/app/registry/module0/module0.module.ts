import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp7Component } from './cmp7/cmp7.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp7Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp7Component]
})
export class Module0Module { }
