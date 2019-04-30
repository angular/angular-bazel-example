import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp26Component } from './cmp26/cmp26.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp26Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp26Component]
})
export class Module6Module { }
