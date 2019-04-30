import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp43Component } from './cmp43/cmp43.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp43Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp43Component]
})
export class Module3Module { }
