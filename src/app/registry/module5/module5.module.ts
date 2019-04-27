import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp750Component } from './cmp750/cmp750.component';
import { Cmp751Component } from './cmp751/cmp751.component';
import { Cmp752Component } from './cmp752/cmp752.component';
import { Cmp753Component } from './cmp753/cmp753.component';
import { Cmp754Component } from './cmp754/cmp754.component';
import { Cmp755Component } from './cmp755/cmp755.component';
import { Cmp756Component } from './cmp756/cmp756.component';
import { Cmp757Component } from './cmp757/cmp757.component';
import { Cmp758Component } from './cmp758/cmp758.component';
import { Cmp759Component } from './cmp759/cmp759.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp750Component, Cmp751Component, Cmp752Component, Cmp753Component, Cmp754Component, Cmp755Component, Cmp756Component, Cmp757Component, Cmp758Component, Cmp759Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp750Component, Cmp751Component, Cmp752Component, Cmp753Component, Cmp754Component, Cmp755Component, Cmp756Component, Cmp757Component, Cmp758Component, Cmp759Component]
})
export class Module5Module { }
