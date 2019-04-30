import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp82Component } from './cmp82/cmp82.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp82Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp82Component]
})
export class Module2Module { }
