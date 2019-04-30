import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp53Component } from './cmp53/cmp53.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp53Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp53Component]
})
export class Module3Module { }
