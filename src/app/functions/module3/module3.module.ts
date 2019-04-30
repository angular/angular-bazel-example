import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp33Component } from './cmp33/cmp33.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp33Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp33Component]
})
export class Module3Module { }
