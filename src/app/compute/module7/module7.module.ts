import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp17Component } from './cmp17/cmp17.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp17Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp17Component]
})
export class Module7Module { }
