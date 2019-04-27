import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp10Component } from './cmp10/cmp10.component';
import { Cmp11Component } from './cmp11/cmp11.component';
import { Cmp12Component } from './cmp12/cmp12.component';
import { Cmp13Component } from './cmp13/cmp13.component';
import { Cmp14Component } from './cmp14/cmp14.component';
import { Cmp15Component } from './cmp15/cmp15.component';
import { Cmp16Component } from './cmp16/cmp16.component';
import { Cmp17Component } from './cmp17/cmp17.component';
import { Cmp18Component } from './cmp18/cmp18.component';
import { Cmp19Component } from './cmp19/cmp19.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp10Component, Cmp11Component, Cmp12Component, Cmp13Component, Cmp14Component, Cmp15Component, Cmp16Component, Cmp17Component, Cmp18Component, Cmp19Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp10Component, Cmp11Component, Cmp12Component, Cmp13Component, Cmp14Component, Cmp15Component, Cmp16Component, Cmp17Component, Cmp18Component, Cmp19Component]
})
export class Module1Module { }
