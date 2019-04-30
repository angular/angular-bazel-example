import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp67Component } from './cmp67/cmp67.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp67Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp67Component]
})
export class Module7Module { }
