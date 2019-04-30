import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp79Component } from './cmp79/cmp79.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp79Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp79Component]
})
export class Module9Module { }
