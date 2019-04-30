import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp50Component } from './cmp50/cmp50.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp50Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp50Component]
})
export class Module0Module { }
