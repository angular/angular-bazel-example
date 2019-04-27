import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp270Component } from './cmp270/cmp270.component';
import { Cmp271Component } from './cmp271/cmp271.component';
import { Cmp272Component } from './cmp272/cmp272.component';
import { Cmp273Component } from './cmp273/cmp273.component';
import { Cmp274Component } from './cmp274/cmp274.component';
import { Cmp275Component } from './cmp275/cmp275.component';
import { Cmp276Component } from './cmp276/cmp276.component';
import { Cmp277Component } from './cmp277/cmp277.component';
import { Cmp278Component } from './cmp278/cmp278.component';
import { Cmp279Component } from './cmp279/cmp279.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp270Component, Cmp271Component, Cmp272Component, Cmp273Component, Cmp274Component, Cmp275Component, Cmp276Component, Cmp277Component, Cmp278Component, Cmp279Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp270Component, Cmp271Component, Cmp272Component, Cmp273Component, Cmp274Component, Cmp275Component, Cmp276Component, Cmp277Component, Cmp278Component, Cmp279Component]
})
export class Module7Module { }
