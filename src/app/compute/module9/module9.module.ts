import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp19Component } from './cmp19/cmp19.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp19Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp19Component]
})
export class Module9Module { }
