import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp770Component } from './cmp770/cmp770.component';
import { Cmp771Component } from './cmp771/cmp771.component';
import { Cmp772Component } from './cmp772/cmp772.component';
import { Cmp773Component } from './cmp773/cmp773.component';
import { Cmp774Component } from './cmp774/cmp774.component';
import { Cmp775Component } from './cmp775/cmp775.component';
import { Cmp776Component } from './cmp776/cmp776.component';
import { Cmp777Component } from './cmp777/cmp777.component';
import { Cmp778Component } from './cmp778/cmp778.component';
import { Cmp779Component } from './cmp779/cmp779.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp770Component, Cmp771Component, Cmp772Component, Cmp773Component, Cmp774Component, Cmp775Component, Cmp776Component, Cmp777Component, Cmp778Component, Cmp779Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp770Component, Cmp771Component, Cmp772Component, Cmp773Component, Cmp774Component, Cmp775Component, Cmp776Component, Cmp777Component, Cmp778Component, Cmp779Component]
})
export class Module7Module { }
