import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp88Component } from './cmp88/cmp88.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp88Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp88Component]
})
export class Module8Module { }
