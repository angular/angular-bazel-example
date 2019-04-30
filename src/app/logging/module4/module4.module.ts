import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp44Component } from './cmp44/cmp44.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp44Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp44Component]
})
export class Module4Module { }
