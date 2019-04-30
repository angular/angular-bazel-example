import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp92Component } from './cmp92/cmp92.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp92Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp92Component]
})
export class Module2Module { }
