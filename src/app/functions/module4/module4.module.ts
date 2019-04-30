import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp34Component } from './cmp34/cmp34.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp34Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp34Component]
})
export class Module4Module { }
