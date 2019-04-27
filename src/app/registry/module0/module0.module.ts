import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp700Component } from './cmp700/cmp700.component';
import { Cmp701Component } from './cmp701/cmp701.component';
import { Cmp702Component } from './cmp702/cmp702.component';
import { Cmp703Component } from './cmp703/cmp703.component';
import { Cmp704Component } from './cmp704/cmp704.component';
import { Cmp705Component } from './cmp705/cmp705.component';
import { Cmp706Component } from './cmp706/cmp706.component';
import { Cmp707Component } from './cmp707/cmp707.component';
import { Cmp708Component } from './cmp708/cmp708.component';
import { Cmp709Component } from './cmp709/cmp709.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp700Component, Cmp701Component, Cmp702Component, Cmp703Component, Cmp704Component, Cmp705Component, Cmp706Component, Cmp707Component, Cmp708Component, Cmp709Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp700Component, Cmp701Component, Cmp702Component, Cmp703Component, Cmp704Component, Cmp705Component, Cmp706Component, Cmp707Component, Cmp708Component, Cmp709Component]
})
export class Module0Module { }
