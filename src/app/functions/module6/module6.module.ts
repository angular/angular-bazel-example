import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp36Component } from './cmp36/cmp36.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp36Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp36Component]
})
export class Module6Module { }
