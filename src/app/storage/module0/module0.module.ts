import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp800Component } from './cmp800/cmp800.component';
import { Cmp801Component } from './cmp801/cmp801.component';
import { Cmp802Component } from './cmp802/cmp802.component';
import { Cmp803Component } from './cmp803/cmp803.component';
import { Cmp804Component } from './cmp804/cmp804.component';
import { Cmp805Component } from './cmp805/cmp805.component';
import { Cmp806Component } from './cmp806/cmp806.component';
import { Cmp807Component } from './cmp807/cmp807.component';
import { Cmp808Component } from './cmp808/cmp808.component';
import { Cmp809Component } from './cmp809/cmp809.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp800Component, Cmp801Component, Cmp802Component, Cmp803Component, Cmp804Component, Cmp805Component, Cmp806Component, Cmp807Component, Cmp808Component, Cmp809Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp800Component, Cmp801Component, Cmp802Component, Cmp803Component, Cmp804Component, Cmp805Component, Cmp806Component, Cmp807Component, Cmp808Component, Cmp809Component]
})
export class Module0Module { }
