import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp910Component } from './cmp910/cmp910.component';
import { Cmp911Component } from './cmp911/cmp911.component';
import { Cmp912Component } from './cmp912/cmp912.component';
import { Cmp913Component } from './cmp913/cmp913.component';
import { Cmp914Component } from './cmp914/cmp914.component';
import { Cmp915Component } from './cmp915/cmp915.component';
import { Cmp916Component } from './cmp916/cmp916.component';
import { Cmp917Component } from './cmp917/cmp917.component';
import { Cmp918Component } from './cmp918/cmp918.component';
import { Cmp919Component } from './cmp919/cmp919.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp910Component, Cmp911Component, Cmp912Component, Cmp913Component, Cmp914Component, Cmp915Component, Cmp916Component, Cmp917Component, Cmp918Component, Cmp919Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp910Component, Cmp911Component, Cmp912Component, Cmp913Component, Cmp914Component, Cmp915Component, Cmp916Component, Cmp917Component, Cmp918Component, Cmp919Component]
})
export class Module1Module { }
