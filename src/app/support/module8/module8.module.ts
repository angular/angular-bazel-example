import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp980Component } from './cmp980/cmp980.component';
import { Cmp981Component } from './cmp981/cmp981.component';
import { Cmp982Component } from './cmp982/cmp982.component';
import { Cmp983Component } from './cmp983/cmp983.component';
import { Cmp984Component } from './cmp984/cmp984.component';
import { Cmp985Component } from './cmp985/cmp985.component';
import { Cmp986Component } from './cmp986/cmp986.component';
import { Cmp987Component } from './cmp987/cmp987.component';
import { Cmp988Component } from './cmp988/cmp988.component';
import { Cmp989Component } from './cmp989/cmp989.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp980Component, Cmp981Component, Cmp982Component, Cmp983Component, Cmp984Component, Cmp985Component, Cmp986Component, Cmp987Component, Cmp988Component, Cmp989Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp980Component, Cmp981Component, Cmp982Component, Cmp983Component, Cmp984Component, Cmp985Component, Cmp986Component, Cmp987Component, Cmp988Component, Cmp989Component]
})
export class Module8Module { }
