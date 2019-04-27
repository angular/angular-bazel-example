import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp40Component } from './cmp40/cmp40.component';
import { Cmp41Component } from './cmp41/cmp41.component';
import { Cmp42Component } from './cmp42/cmp42.component';
import { Cmp43Component } from './cmp43/cmp43.component';
import { Cmp44Component } from './cmp44/cmp44.component';
import { Cmp45Component } from './cmp45/cmp45.component';
import { Cmp46Component } from './cmp46/cmp46.component';
import { Cmp47Component } from './cmp47/cmp47.component';
import { Cmp48Component } from './cmp48/cmp48.component';
import { Cmp49Component } from './cmp49/cmp49.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp40Component, Cmp41Component, Cmp42Component, Cmp43Component, Cmp44Component, Cmp45Component, Cmp46Component, Cmp47Component, Cmp48Component, Cmp49Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp40Component, Cmp41Component, Cmp42Component, Cmp43Component, Cmp44Component, Cmp45Component, Cmp46Component, Cmp47Component, Cmp48Component, Cmp49Component]
})
export class Module4Module { }
