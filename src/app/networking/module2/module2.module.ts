import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp620Component } from './cmp620/cmp620.component';
import { Cmp621Component } from './cmp621/cmp621.component';
import { Cmp622Component } from './cmp622/cmp622.component';
import { Cmp623Component } from './cmp623/cmp623.component';
import { Cmp624Component } from './cmp624/cmp624.component';
import { Cmp625Component } from './cmp625/cmp625.component';
import { Cmp626Component } from './cmp626/cmp626.component';
import { Cmp627Component } from './cmp627/cmp627.component';
import { Cmp628Component } from './cmp628/cmp628.component';
import { Cmp629Component } from './cmp629/cmp629.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp620Component, Cmp621Component, Cmp622Component, Cmp623Component, Cmp624Component, Cmp625Component, Cmp626Component, Cmp627Component, Cmp628Component, Cmp629Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp620Component, Cmp621Component, Cmp622Component, Cmp623Component, Cmp624Component, Cmp625Component, Cmp626Component, Cmp627Component, Cmp628Component, Cmp629Component]
})
export class Module2Module { }
