import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp42Component } from './cmp42/cmp42.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp42Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp42Component]
})
export class Module2Module { }
