import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp29Component } from './cmp29/cmp29.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp29Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp29Component]
})
export class Module9Module { }
