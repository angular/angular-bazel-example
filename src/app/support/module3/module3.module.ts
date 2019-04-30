import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp93Component } from './cmp93/cmp93.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp93Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp93Component]
})
export class Module3Module { }
