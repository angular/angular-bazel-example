import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp47Component } from './cmp47/cmp47.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp47Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp47Component]
})
export class Module7Module { }
