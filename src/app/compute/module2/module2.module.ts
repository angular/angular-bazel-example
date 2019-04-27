import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp120Component } from './cmp120/cmp120.component';
import { Cmp121Component } from './cmp121/cmp121.component';
import { Cmp122Component } from './cmp122/cmp122.component';
import { Cmp123Component } from './cmp123/cmp123.component';
import { Cmp124Component } from './cmp124/cmp124.component';
import { Cmp125Component } from './cmp125/cmp125.component';
import { Cmp126Component } from './cmp126/cmp126.component';
import { Cmp127Component } from './cmp127/cmp127.component';
import { Cmp128Component } from './cmp128/cmp128.component';
import { Cmp129Component } from './cmp129/cmp129.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp120Component, Cmp121Component, Cmp122Component, Cmp123Component, Cmp124Component, Cmp125Component, Cmp126Component, Cmp127Component, Cmp128Component, Cmp129Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp120Component, Cmp121Component, Cmp122Component, Cmp123Component, Cmp124Component, Cmp125Component, Cmp126Component, Cmp127Component, Cmp128Component, Cmp129Component]
})
export class Module2Module { }
