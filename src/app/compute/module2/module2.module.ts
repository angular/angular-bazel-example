import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp12Component } from './cmp12/cmp12.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp12Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp12Component]
})
export class Module2Module { }
