import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp28Component } from './cmp28/cmp28.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp28Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp28Component]
})
export class Module8Module { }
