import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp84Component } from './cmp84/cmp84.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp84Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp84Component]
})
export class Module4Module { }
