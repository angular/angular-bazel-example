import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp6Component } from './cmp6/cmp6.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp6Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp6Component]
})
export class Module0Module { }
