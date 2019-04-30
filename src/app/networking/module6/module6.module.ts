import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp66Component } from './cmp66/cmp66.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp66Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp66Component]
})
export class Module6Module { }
