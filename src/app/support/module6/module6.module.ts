import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp96Component } from './cmp96/cmp96.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp96Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp96Component]
})
export class Module6Module { }
