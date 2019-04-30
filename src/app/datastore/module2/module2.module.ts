import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp22Component } from './cmp22/cmp22.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp22Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp22Component]
})
export class Module2Module { }
