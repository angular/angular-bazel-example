import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp98Component } from './cmp98/cmp98.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp98Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp98Component]
})
export class Module8Module { }
