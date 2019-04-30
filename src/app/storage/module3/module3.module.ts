import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp83Component } from './cmp83/cmp83.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp83Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp83Component]
})
export class Module3Module { }
