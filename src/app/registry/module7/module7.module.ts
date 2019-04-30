import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp77Component } from './cmp77/cmp77.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp77Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp77Component]
})
export class Module7Module { }
