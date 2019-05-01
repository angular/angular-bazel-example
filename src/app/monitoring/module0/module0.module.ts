import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp5Component } from './cmp5/cmp5.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp5Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp5Component]
})
export class Module0Module { }
