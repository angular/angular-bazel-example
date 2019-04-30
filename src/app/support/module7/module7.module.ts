import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp97Component } from './cmp97/cmp97.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp97Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp97Component]
})
export class Module7Module { }
