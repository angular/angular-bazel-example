import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp590Component } from './cmp590/cmp590.component';
import { Cmp591Component } from './cmp591/cmp591.component';
import { Cmp592Component } from './cmp592/cmp592.component';
import { Cmp593Component } from './cmp593/cmp593.component';
import { Cmp594Component } from './cmp594/cmp594.component';
import { Cmp595Component } from './cmp595/cmp595.component';
import { Cmp596Component } from './cmp596/cmp596.component';
import { Cmp597Component } from './cmp597/cmp597.component';
import { Cmp598Component } from './cmp598/cmp598.component';
import { Cmp599Component } from './cmp599/cmp599.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp590Component, Cmp591Component, Cmp592Component, Cmp593Component, Cmp594Component, Cmp595Component, Cmp596Component, Cmp597Component, Cmp598Component, Cmp599Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp590Component, Cmp591Component, Cmp592Component, Cmp593Component, Cmp594Component, Cmp595Component, Cmp596Component, Cmp597Component, Cmp598Component, Cmp599Component]
})
export class Module9Module { }
