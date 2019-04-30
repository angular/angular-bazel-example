import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp16Component } from './cmp16/cmp16.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp16Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp16Component]
})
export class Module6Module { }
