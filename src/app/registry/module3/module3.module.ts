import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp73Component } from './cmp73/cmp73.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp73Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp73Component]
})
export class Module3Module { }
