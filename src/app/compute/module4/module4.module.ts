import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp140Component } from './cmp140/cmp140.component';
import { Cmp141Component } from './cmp141/cmp141.component';
import { Cmp142Component } from './cmp142/cmp142.component';
import { Cmp143Component } from './cmp143/cmp143.component';
import { Cmp144Component } from './cmp144/cmp144.component';
import { Cmp145Component } from './cmp145/cmp145.component';
import { Cmp146Component } from './cmp146/cmp146.component';
import { Cmp147Component } from './cmp147/cmp147.component';
import { Cmp148Component } from './cmp148/cmp148.component';
import { Cmp149Component } from './cmp149/cmp149.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp140Component, Cmp141Component, Cmp142Component, Cmp143Component, Cmp144Component, Cmp145Component, Cmp146Component, Cmp147Component, Cmp148Component, Cmp149Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp140Component, Cmp141Component, Cmp142Component, Cmp143Component, Cmp144Component, Cmp145Component, Cmp146Component, Cmp147Component, Cmp148Component, Cmp149Component]
})
export class Module4Module { }
