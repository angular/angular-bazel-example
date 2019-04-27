import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp280Component } from './cmp280/cmp280.component';
import { Cmp281Component } from './cmp281/cmp281.component';
import { Cmp282Component } from './cmp282/cmp282.component';
import { Cmp283Component } from './cmp283/cmp283.component';
import { Cmp284Component } from './cmp284/cmp284.component';
import { Cmp285Component } from './cmp285/cmp285.component';
import { Cmp286Component } from './cmp286/cmp286.component';
import { Cmp287Component } from './cmp287/cmp287.component';
import { Cmp288Component } from './cmp288/cmp288.component';
import { Cmp289Component } from './cmp289/cmp289.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp280Component, Cmp281Component, Cmp282Component, Cmp283Component, Cmp284Component, Cmp285Component, Cmp286Component, Cmp287Component, Cmp288Component, Cmp289Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp280Component, Cmp281Component, Cmp282Component, Cmp283Component, Cmp284Component, Cmp285Component, Cmp286Component, Cmp287Component, Cmp288Component, Cmp289Component]
})
export class Module8Module { }
