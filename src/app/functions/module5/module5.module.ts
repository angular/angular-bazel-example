import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp35Component } from './cmp35/cmp35.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp35Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp35Component]
})
export class Module5Module { }
