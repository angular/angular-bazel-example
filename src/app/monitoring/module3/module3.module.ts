import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp530Component } from './cmp530/cmp530.component';
import { Cmp531Component } from './cmp531/cmp531.component';
import { Cmp532Component } from './cmp532/cmp532.component';
import { Cmp533Component } from './cmp533/cmp533.component';
import { Cmp534Component } from './cmp534/cmp534.component';
import { Cmp535Component } from './cmp535/cmp535.component';
import { Cmp536Component } from './cmp536/cmp536.component';
import { Cmp537Component } from './cmp537/cmp537.component';
import { Cmp538Component } from './cmp538/cmp538.component';
import { Cmp539Component } from './cmp539/cmp539.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp530Component, Cmp531Component, Cmp532Component, Cmp533Component, Cmp534Component, Cmp535Component, Cmp536Component, Cmp537Component, Cmp538Component, Cmp539Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp530Component, Cmp531Component, Cmp532Component, Cmp533Component, Cmp534Component, Cmp535Component, Cmp536Component, Cmp537Component, Cmp538Component, Cmp539Component]
})
export class Module3Module { }
