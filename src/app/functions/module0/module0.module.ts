import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp3Component } from './cmp3/cmp3.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp3Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp3Component]
})
export class Module0Module { }
