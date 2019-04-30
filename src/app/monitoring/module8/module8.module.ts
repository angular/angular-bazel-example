import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp58Component } from './cmp58/cmp58.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp58Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp58Component]
})
export class Module8Module { }
