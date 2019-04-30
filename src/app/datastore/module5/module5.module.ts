import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp25Component } from './cmp25/cmp25.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp25Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp25Component]
})
export class Module5Module { }
