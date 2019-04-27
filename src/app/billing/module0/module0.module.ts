import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp0Component } from './cmp0/cmp0.component';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { Cmp3Component } from './cmp3/cmp3.component';
import { Cmp4Component } from './cmp4/cmp4.component';
import { Cmp5Component } from './cmp5/cmp5.component';
import { Cmp6Component } from './cmp6/cmp6.component';
import { Cmp7Component } from './cmp7/cmp7.component';
import { Cmp8Component } from './cmp8/cmp8.component';
import { Cmp9Component } from './cmp9/cmp9.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp0Component, Cmp1Component, Cmp2Component, Cmp3Component, Cmp4Component, Cmp5Component, Cmp6Component, Cmp7Component, Cmp8Component, Cmp9Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp0Component, Cmp1Component, Cmp2Component, Cmp3Component, Cmp4Component, Cmp5Component, Cmp6Component, Cmp7Component, Cmp8Component, Cmp9Component]
})
export class Module0Module { }
