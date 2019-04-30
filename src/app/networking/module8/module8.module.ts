import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp68Component } from './cmp68/cmp68.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp68Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp68Component]
})
export class Module8Module { }
