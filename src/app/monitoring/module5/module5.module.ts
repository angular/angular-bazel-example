import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp55Component } from './cmp55/cmp55.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp55Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp55Component]
})
export class Module5Module { }
