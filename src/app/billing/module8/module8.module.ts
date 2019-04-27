import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp80Component } from './cmp80/cmp80.component';
import { Cmp81Component } from './cmp81/cmp81.component';
import { Cmp82Component } from './cmp82/cmp82.component';
import { Cmp83Component } from './cmp83/cmp83.component';
import { Cmp84Component } from './cmp84/cmp84.component';
import { Cmp85Component } from './cmp85/cmp85.component';
import { Cmp86Component } from './cmp86/cmp86.component';
import { Cmp87Component } from './cmp87/cmp87.component';
import { Cmp88Component } from './cmp88/cmp88.component';
import { Cmp89Component } from './cmp89/cmp89.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp80Component, Cmp81Component, Cmp82Component, Cmp83Component, Cmp84Component, Cmp85Component, Cmp86Component, Cmp87Component, Cmp88Component, Cmp89Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp80Component, Cmp81Component, Cmp82Component, Cmp83Component, Cmp84Component, Cmp85Component, Cmp86Component, Cmp87Component, Cmp88Component, Cmp89Component]
})
export class Module8Module { }
