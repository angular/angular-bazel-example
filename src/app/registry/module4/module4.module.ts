import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp740Component } from './cmp740/cmp740.component';
import { Cmp741Component } from './cmp741/cmp741.component';
import { Cmp742Component } from './cmp742/cmp742.component';
import { Cmp743Component } from './cmp743/cmp743.component';
import { Cmp744Component } from './cmp744/cmp744.component';
import { Cmp745Component } from './cmp745/cmp745.component';
import { Cmp746Component } from './cmp746/cmp746.component';
import { Cmp747Component } from './cmp747/cmp747.component';
import { Cmp748Component } from './cmp748/cmp748.component';
import { Cmp749Component } from './cmp749/cmp749.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp740Component, Cmp741Component, Cmp742Component, Cmp743Component, Cmp744Component, Cmp745Component, Cmp746Component, Cmp747Component, Cmp748Component, Cmp749Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp740Component, Cmp741Component, Cmp742Component, Cmp743Component, Cmp744Component, Cmp745Component, Cmp746Component, Cmp747Component, Cmp748Component, Cmp749Component]
})
export class Module4Module { }
