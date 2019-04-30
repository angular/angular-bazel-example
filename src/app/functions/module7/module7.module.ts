import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp37Component } from './cmp37/cmp37.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp37Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp37Component]
})
export class Module7Module { }
