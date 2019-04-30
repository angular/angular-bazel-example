import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp57Component } from './cmp57/cmp57.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp57Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp57Component]
})
export class Module7Module { }
