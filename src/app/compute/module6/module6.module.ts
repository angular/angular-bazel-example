import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp160Component } from './cmp160/cmp160.component';
import { Cmp161Component } from './cmp161/cmp161.component';
import { Cmp162Component } from './cmp162/cmp162.component';
import { Cmp163Component } from './cmp163/cmp163.component';
import { Cmp164Component } from './cmp164/cmp164.component';
import { Cmp165Component } from './cmp165/cmp165.component';
import { Cmp166Component } from './cmp166/cmp166.component';
import { Cmp167Component } from './cmp167/cmp167.component';
import { Cmp168Component } from './cmp168/cmp168.component';
import { Cmp169Component } from './cmp169/cmp169.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp160Component, Cmp161Component, Cmp162Component, Cmp163Component, Cmp164Component, Cmp165Component, Cmp166Component, Cmp167Component, Cmp168Component, Cmp169Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp160Component, Cmp161Component, Cmp162Component, Cmp163Component, Cmp164Component, Cmp165Component, Cmp166Component, Cmp167Component, Cmp168Component, Cmp169Component]
})
export class Module6Module { }
