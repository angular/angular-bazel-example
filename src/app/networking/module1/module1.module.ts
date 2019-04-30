import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp61Component } from './cmp61/cmp61.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp61Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp61Component]
})
export class Module1Module { }
