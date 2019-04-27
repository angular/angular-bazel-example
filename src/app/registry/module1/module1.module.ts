import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp710Component } from './cmp710/cmp710.component';
import { Cmp711Component } from './cmp711/cmp711.component';
import { Cmp712Component } from './cmp712/cmp712.component';
import { Cmp713Component } from './cmp713/cmp713.component';
import { Cmp714Component } from './cmp714/cmp714.component';
import { Cmp715Component } from './cmp715/cmp715.component';
import { Cmp716Component } from './cmp716/cmp716.component';
import { Cmp717Component } from './cmp717/cmp717.component';
import { Cmp718Component } from './cmp718/cmp718.component';
import { Cmp719Component } from './cmp719/cmp719.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp710Component, Cmp711Component, Cmp712Component, Cmp713Component, Cmp714Component, Cmp715Component, Cmp716Component, Cmp717Component, Cmp718Component, Cmp719Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp710Component, Cmp711Component, Cmp712Component, Cmp713Component, Cmp714Component, Cmp715Component, Cmp716Component, Cmp717Component, Cmp718Component, Cmp719Component]
})
export class Module1Module { }
