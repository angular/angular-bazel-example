import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp630Component } from './cmp630/cmp630.component';
import { Cmp631Component } from './cmp631/cmp631.component';
import { Cmp632Component } from './cmp632/cmp632.component';
import { Cmp633Component } from './cmp633/cmp633.component';
import { Cmp634Component } from './cmp634/cmp634.component';
import { Cmp635Component } from './cmp635/cmp635.component';
import { Cmp636Component } from './cmp636/cmp636.component';
import { Cmp637Component } from './cmp637/cmp637.component';
import { Cmp638Component } from './cmp638/cmp638.component';
import { Cmp639Component } from './cmp639/cmp639.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp630Component, Cmp631Component, Cmp632Component, Cmp633Component, Cmp634Component, Cmp635Component, Cmp636Component, Cmp637Component, Cmp638Component, Cmp639Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp630Component, Cmp631Component, Cmp632Component, Cmp633Component, Cmp634Component, Cmp635Component, Cmp636Component, Cmp637Component, Cmp638Component, Cmp639Component]
})
export class Module3Module { }
