import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp70Component } from './cmp70/cmp70.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp70Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp70Component]
})
export class Module0Module { }
