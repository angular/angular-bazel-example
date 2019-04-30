import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp41Component } from './cmp41/cmp41.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp41Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp41Component]
})
export class Module1Module { }
