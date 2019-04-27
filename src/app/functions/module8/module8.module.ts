import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp380Component } from './cmp380/cmp380.component';
import { Cmp381Component } from './cmp381/cmp381.component';
import { Cmp382Component } from './cmp382/cmp382.component';
import { Cmp383Component } from './cmp383/cmp383.component';
import { Cmp384Component } from './cmp384/cmp384.component';
import { Cmp385Component } from './cmp385/cmp385.component';
import { Cmp386Component } from './cmp386/cmp386.component';
import { Cmp387Component } from './cmp387/cmp387.component';
import { Cmp388Component } from './cmp388/cmp388.component';
import { Cmp389Component } from './cmp389/cmp389.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp380Component, Cmp381Component, Cmp382Component, Cmp383Component, Cmp384Component, Cmp385Component, Cmp386Component, Cmp387Component, Cmp388Component, Cmp389Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp380Component, Cmp381Component, Cmp382Component, Cmp383Component, Cmp384Component, Cmp385Component, Cmp386Component, Cmp387Component, Cmp388Component, Cmp389Component]
})
export class Module8Module { }
