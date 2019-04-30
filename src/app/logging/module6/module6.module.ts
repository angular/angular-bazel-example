import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp46Component } from './cmp46/cmp46.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp46Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp46Component]
})
export class Module6Module { }
