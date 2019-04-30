import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp10Component } from './cmp10/cmp10.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp10Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp10Component]
})
export class Module0Module { }
