import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp540Component } from './cmp540/cmp540.component';
import { Cmp541Component } from './cmp541/cmp541.component';
import { Cmp542Component } from './cmp542/cmp542.component';
import { Cmp543Component } from './cmp543/cmp543.component';
import { Cmp544Component } from './cmp544/cmp544.component';
import { Cmp545Component } from './cmp545/cmp545.component';
import { Cmp546Component } from './cmp546/cmp546.component';
import { Cmp547Component } from './cmp547/cmp547.component';
import { Cmp548Component } from './cmp548/cmp548.component';
import { Cmp549Component } from './cmp549/cmp549.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp540Component, Cmp541Component, Cmp542Component, Cmp543Component, Cmp544Component, Cmp545Component, Cmp546Component, Cmp547Component, Cmp548Component, Cmp549Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp540Component, Cmp541Component, Cmp542Component, Cmp543Component, Cmp544Component, Cmp545Component, Cmp546Component, Cmp547Component, Cmp548Component, Cmp549Component]
})
export class Module4Module { }
