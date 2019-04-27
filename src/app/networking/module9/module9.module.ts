import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp690Component } from './cmp690/cmp690.component';
import { Cmp691Component } from './cmp691/cmp691.component';
import { Cmp692Component } from './cmp692/cmp692.component';
import { Cmp693Component } from './cmp693/cmp693.component';
import { Cmp694Component } from './cmp694/cmp694.component';
import { Cmp695Component } from './cmp695/cmp695.component';
import { Cmp696Component } from './cmp696/cmp696.component';
import { Cmp697Component } from './cmp697/cmp697.component';
import { Cmp698Component } from './cmp698/cmp698.component';
import { Cmp699Component } from './cmp699/cmp699.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp690Component, Cmp691Component, Cmp692Component, Cmp693Component, Cmp694Component, Cmp695Component, Cmp696Component, Cmp697Component, Cmp698Component, Cmp699Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp690Component, Cmp691Component, Cmp692Component, Cmp693Component, Cmp694Component, Cmp695Component, Cmp696Component, Cmp697Component, Cmp698Component, Cmp699Component]
})
export class Module9Module { }
