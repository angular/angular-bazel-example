import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp190Component } from './cmp190/cmp190.component';
import { Cmp191Component } from './cmp191/cmp191.component';
import { Cmp192Component } from './cmp192/cmp192.component';
import { Cmp193Component } from './cmp193/cmp193.component';
import { Cmp194Component } from './cmp194/cmp194.component';
import { Cmp195Component } from './cmp195/cmp195.component';
import { Cmp196Component } from './cmp196/cmp196.component';
import { Cmp197Component } from './cmp197/cmp197.component';
import { Cmp198Component } from './cmp198/cmp198.component';
import { Cmp199Component } from './cmp199/cmp199.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp190Component, Cmp191Component, Cmp192Component, Cmp193Component, Cmp194Component, Cmp195Component, Cmp196Component, Cmp197Component, Cmp198Component, Cmp199Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp190Component, Cmp191Component, Cmp192Component, Cmp193Component, Cmp194Component, Cmp195Component, Cmp196Component, Cmp197Component, Cmp198Component, Cmp199Component]
})
export class Module9Module { }
