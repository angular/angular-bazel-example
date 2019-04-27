import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp320Component } from './cmp320/cmp320.component';
import { Cmp321Component } from './cmp321/cmp321.component';
import { Cmp322Component } from './cmp322/cmp322.component';
import { Cmp323Component } from './cmp323/cmp323.component';
import { Cmp324Component } from './cmp324/cmp324.component';
import { Cmp325Component } from './cmp325/cmp325.component';
import { Cmp326Component } from './cmp326/cmp326.component';
import { Cmp327Component } from './cmp327/cmp327.component';
import { Cmp328Component } from './cmp328/cmp328.component';
import { Cmp329Component } from './cmp329/cmp329.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp320Component, Cmp321Component, Cmp322Component, Cmp323Component, Cmp324Component, Cmp325Component, Cmp326Component, Cmp327Component, Cmp328Component, Cmp329Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp320Component, Cmp321Component, Cmp322Component, Cmp323Component, Cmp324Component, Cmp325Component, Cmp326Component, Cmp327Component, Cmp328Component, Cmp329Component]
})
export class Module2Module { }
