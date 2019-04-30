import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp90Component } from './cmp90/cmp90.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp90Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp90Component]
})
export class Module0Module { }
