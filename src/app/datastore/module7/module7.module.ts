import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp27Component } from './cmp27/cmp27.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp27Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp27Component]
})
export class Module7Module { }
