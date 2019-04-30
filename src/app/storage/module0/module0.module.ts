import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp80Component } from './cmp80/cmp80.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp80Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp80Component]
})
export class Module0Module { }
