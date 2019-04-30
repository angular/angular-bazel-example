import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp21Component } from './cmp21/cmp21.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp21Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp21Component]
})
export class Module1Module { }
