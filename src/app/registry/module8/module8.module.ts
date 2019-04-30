import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp78Component } from './cmp78/cmp78.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp78Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp78Component]
})
export class Module8Module { }
