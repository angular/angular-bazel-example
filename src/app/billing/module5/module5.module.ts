import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp50Component } from './cmp50/cmp50.component';
import { Cmp51Component } from './cmp51/cmp51.component';
import { Cmp52Component } from './cmp52/cmp52.component';
import { Cmp53Component } from './cmp53/cmp53.component';
import { Cmp54Component } from './cmp54/cmp54.component';
import { Cmp55Component } from './cmp55/cmp55.component';
import { Cmp56Component } from './cmp56/cmp56.component';
import { Cmp57Component } from './cmp57/cmp57.component';
import { Cmp58Component } from './cmp58/cmp58.component';
import { Cmp59Component } from './cmp59/cmp59.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp50Component, Cmp51Component, Cmp52Component, Cmp53Component, Cmp54Component, Cmp55Component, Cmp56Component, Cmp57Component, Cmp58Component, Cmp59Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp50Component, Cmp51Component, Cmp52Component, Cmp53Component, Cmp54Component, Cmp55Component, Cmp56Component, Cmp57Component, Cmp58Component, Cmp59Component]
})
export class Module5Module { }
