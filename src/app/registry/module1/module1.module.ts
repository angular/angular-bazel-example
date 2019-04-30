import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp71Component } from './cmp71/cmp71.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp71Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp71Component]
})
export class Module1Module { }
