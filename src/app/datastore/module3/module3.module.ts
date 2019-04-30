import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp23Component } from './cmp23/cmp23.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp23Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp23Component]
})
export class Module3Module { }
