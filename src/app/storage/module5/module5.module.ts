import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp85Component } from './cmp85/cmp85.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp85Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp85Component]
})
export class Module5Module { }
