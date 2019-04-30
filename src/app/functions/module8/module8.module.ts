import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp38Component } from './cmp38/cmp38.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp38Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp38Component]
})
export class Module8Module { }
