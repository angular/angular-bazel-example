import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp560Component } from './cmp560/cmp560.component';
import { Cmp561Component } from './cmp561/cmp561.component';
import { Cmp562Component } from './cmp562/cmp562.component';
import { Cmp563Component } from './cmp563/cmp563.component';
import { Cmp564Component } from './cmp564/cmp564.component';
import { Cmp565Component } from './cmp565/cmp565.component';
import { Cmp566Component } from './cmp566/cmp566.component';
import { Cmp567Component } from './cmp567/cmp567.component';
import { Cmp568Component } from './cmp568/cmp568.component';
import { Cmp569Component } from './cmp569/cmp569.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp560Component, Cmp561Component, Cmp562Component, Cmp563Component, Cmp564Component, Cmp565Component, Cmp566Component, Cmp567Component, Cmp568Component, Cmp569Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp560Component, Cmp561Component, Cmp562Component, Cmp563Component, Cmp564Component, Cmp565Component, Cmp566Component, Cmp567Component, Cmp568Component, Cmp569Component]
})
export class Module6Module { }
