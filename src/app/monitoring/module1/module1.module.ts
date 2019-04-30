import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp51Component } from './cmp51/cmp51.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp51Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp51Component]
})
export class Module1Module { }
