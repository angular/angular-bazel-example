import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp56Component } from './cmp56/cmp56.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp56Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp56Component]
})
export class Module6Module { }
