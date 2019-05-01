import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp2Component } from './cmp2/cmp2.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp2Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp2Component]
})
export class Module0Module { }
