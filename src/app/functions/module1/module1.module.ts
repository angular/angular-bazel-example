import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp31Component } from './cmp31/cmp31.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp31Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp31Component]
})
export class Module1Module { }
