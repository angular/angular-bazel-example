import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp64Component } from './cmp64/cmp64.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp64Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp64Component]
})
export class Module4Module { }
