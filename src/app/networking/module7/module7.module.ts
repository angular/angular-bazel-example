import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp670Component } from './cmp670/cmp670.component';
import { Cmp671Component } from './cmp671/cmp671.component';
import { Cmp672Component } from './cmp672/cmp672.component';
import { Cmp673Component } from './cmp673/cmp673.component';
import { Cmp674Component } from './cmp674/cmp674.component';
import { Cmp675Component } from './cmp675/cmp675.component';
import { Cmp676Component } from './cmp676/cmp676.component';
import { Cmp677Component } from './cmp677/cmp677.component';
import { Cmp678Component } from './cmp678/cmp678.component';
import { Cmp679Component } from './cmp679/cmp679.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp670Component, Cmp671Component, Cmp672Component, Cmp673Component, Cmp674Component, Cmp675Component, Cmp676Component, Cmp677Component, Cmp678Component, Cmp679Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp670Component, Cmp671Component, Cmp672Component, Cmp673Component, Cmp674Component, Cmp675Component, Cmp676Component, Cmp677Component, Cmp678Component, Cmp679Component]
})
export class Module7Module { }
