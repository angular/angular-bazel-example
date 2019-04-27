import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp150Component } from './cmp150/cmp150.component';
import { Cmp151Component } from './cmp151/cmp151.component';
import { Cmp152Component } from './cmp152/cmp152.component';
import { Cmp153Component } from './cmp153/cmp153.component';
import { Cmp154Component } from './cmp154/cmp154.component';
import { Cmp155Component } from './cmp155/cmp155.component';
import { Cmp156Component } from './cmp156/cmp156.component';
import { Cmp157Component } from './cmp157/cmp157.component';
import { Cmp158Component } from './cmp158/cmp158.component';
import { Cmp159Component } from './cmp159/cmp159.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp150Component, Cmp151Component, Cmp152Component, Cmp153Component, Cmp154Component, Cmp155Component, Cmp156Component, Cmp157Component, Cmp158Component, Cmp159Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp150Component, Cmp151Component, Cmp152Component, Cmp153Component, Cmp154Component, Cmp155Component, Cmp156Component, Cmp157Component, Cmp158Component, Cmp159Component]
})
export class Module5Module { }
