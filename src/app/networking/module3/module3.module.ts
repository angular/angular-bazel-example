import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp63Component } from './cmp63/cmp63.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp63Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp63Component]
})
export class Module3Module { }
