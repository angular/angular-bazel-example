import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp60Component } from './cmp60/cmp60.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp60Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp60Component]
})
export class Module0Module { }
