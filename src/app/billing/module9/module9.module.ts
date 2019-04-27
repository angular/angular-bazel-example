import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp90Component } from './cmp90/cmp90.component';
import { Cmp91Component } from './cmp91/cmp91.component';
import { Cmp92Component } from './cmp92/cmp92.component';
import { Cmp93Component } from './cmp93/cmp93.component';
import { Cmp94Component } from './cmp94/cmp94.component';
import { Cmp95Component } from './cmp95/cmp95.component';
import { Cmp96Component } from './cmp96/cmp96.component';
import { Cmp97Component } from './cmp97/cmp97.component';
import { Cmp98Component } from './cmp98/cmp98.component';
import { Cmp99Component } from './cmp99/cmp99.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp90Component, Cmp91Component, Cmp92Component, Cmp93Component, Cmp94Component, Cmp95Component, Cmp96Component, Cmp97Component, Cmp98Component, Cmp99Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp90Component, Cmp91Component, Cmp92Component, Cmp93Component, Cmp94Component, Cmp95Component, Cmp96Component, Cmp97Component, Cmp98Component, Cmp99Component]
})
export class Module9Module { }
