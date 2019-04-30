import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp40Component } from './cmp40/cmp40.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp40Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp40Component]
})
export class Module0Module { }
