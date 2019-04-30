import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp65Component } from './cmp65/cmp65.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp65Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp65Component]
})
export class Module5Module { }
