import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp94Component } from './cmp94/cmp94.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp94Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp94Component]
})
export class Module4Module { }
