import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp54Component } from './cmp54/cmp54.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp54Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp54Component]
})
export class Module4Module { }
