import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp0Component } from './cmp0/cmp0.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp0Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp0Component]
})
export class Module0Module { }
