import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp170Component } from './cmp170/cmp170.component';
import { Cmp171Component } from './cmp171/cmp171.component';
import { Cmp172Component } from './cmp172/cmp172.component';
import { Cmp173Component } from './cmp173/cmp173.component';
import { Cmp174Component } from './cmp174/cmp174.component';
import { Cmp175Component } from './cmp175/cmp175.component';
import { Cmp176Component } from './cmp176/cmp176.component';
import { Cmp177Component } from './cmp177/cmp177.component';
import { Cmp178Component } from './cmp178/cmp178.component';
import { Cmp179Component } from './cmp179/cmp179.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp170Component, Cmp171Component, Cmp172Component, Cmp173Component, Cmp174Component, Cmp175Component, Cmp176Component, Cmp177Component, Cmp178Component, Cmp179Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp170Component, Cmp171Component, Cmp172Component, Cmp173Component, Cmp174Component, Cmp175Component, Cmp176Component, Cmp177Component, Cmp178Component, Cmp179Component]
})
export class Module7Module { }
