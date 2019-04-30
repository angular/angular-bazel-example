import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp13Component } from './cmp13/cmp13.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp13Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp13Component]
})
export class Module3Module { }
