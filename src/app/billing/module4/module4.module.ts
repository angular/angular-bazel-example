import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp4Component } from './cmp4/cmp4.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp4Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp4Component]
})
export class Module4Module { }
