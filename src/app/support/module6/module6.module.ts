import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp960Component } from './cmp960/cmp960.component';
import { Cmp961Component } from './cmp961/cmp961.component';
import { Cmp962Component } from './cmp962/cmp962.component';
import { Cmp963Component } from './cmp963/cmp963.component';
import { Cmp964Component } from './cmp964/cmp964.component';
import { Cmp965Component } from './cmp965/cmp965.component';
import { Cmp966Component } from './cmp966/cmp966.component';
import { Cmp967Component } from './cmp967/cmp967.component';
import { Cmp968Component } from './cmp968/cmp968.component';
import { Cmp969Component } from './cmp969/cmp969.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp960Component, Cmp961Component, Cmp962Component, Cmp963Component, Cmp964Component, Cmp965Component, Cmp966Component, Cmp967Component, Cmp968Component, Cmp969Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp960Component, Cmp961Component, Cmp962Component, Cmp963Component, Cmp964Component, Cmp965Component, Cmp966Component, Cmp967Component, Cmp968Component, Cmp969Component]
})
export class Module6Module { }
