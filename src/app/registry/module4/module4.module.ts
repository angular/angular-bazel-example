import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp74Component } from './cmp74/cmp74.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp74Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp74Component]
})
export class Module4Module { }
