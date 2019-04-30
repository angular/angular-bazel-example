import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp76Component } from './cmp76/cmp76.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp76Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp76Component]
})
export class Module6Module { }
