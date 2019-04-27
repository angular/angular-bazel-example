import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp100Component } from './cmp100/cmp100.component';
import { Cmp101Component } from './cmp101/cmp101.component';
import { Cmp102Component } from './cmp102/cmp102.component';
import { Cmp103Component } from './cmp103/cmp103.component';
import { Cmp104Component } from './cmp104/cmp104.component';
import { Cmp105Component } from './cmp105/cmp105.component';
import { Cmp106Component } from './cmp106/cmp106.component';
import { Cmp107Component } from './cmp107/cmp107.component';
import { Cmp108Component } from './cmp108/cmp108.component';
import { Cmp109Component } from './cmp109/cmp109.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp100Component, Cmp101Component, Cmp102Component, Cmp103Component, Cmp104Component, Cmp105Component, Cmp106Component, Cmp107Component, Cmp108Component, Cmp109Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp100Component, Cmp101Component, Cmp102Component, Cmp103Component, Cmp104Component, Cmp105Component, Cmp106Component, Cmp107Component, Cmp108Component, Cmp109Component]
})
export class Module0Module { }
