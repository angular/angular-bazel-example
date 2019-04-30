import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp48Component } from './cmp48/cmp48.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp48Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp48Component]
})
export class Module8Module { }
