import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp680Component } from './cmp680/cmp680.component';
import { Cmp681Component } from './cmp681/cmp681.component';
import { Cmp682Component } from './cmp682/cmp682.component';
import { Cmp683Component } from './cmp683/cmp683.component';
import { Cmp684Component } from './cmp684/cmp684.component';
import { Cmp685Component } from './cmp685/cmp685.component';
import { Cmp686Component } from './cmp686/cmp686.component';
import { Cmp687Component } from './cmp687/cmp687.component';
import { Cmp688Component } from './cmp688/cmp688.component';
import { Cmp689Component } from './cmp689/cmp689.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp680Component, Cmp681Component, Cmp682Component, Cmp683Component, Cmp684Component, Cmp685Component, Cmp686Component, Cmp687Component, Cmp688Component, Cmp689Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp680Component, Cmp681Component, Cmp682Component, Cmp683Component, Cmp684Component, Cmp685Component, Cmp686Component, Cmp687Component, Cmp688Component, Cmp689Component]
})
export class Module8Module { }
