import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp300Component } from './cmp300/cmp300.component';
import { Cmp301Component } from './cmp301/cmp301.component';
import { Cmp302Component } from './cmp302/cmp302.component';
import { Cmp303Component } from './cmp303/cmp303.component';
import { Cmp304Component } from './cmp304/cmp304.component';
import { Cmp305Component } from './cmp305/cmp305.component';
import { Cmp306Component } from './cmp306/cmp306.component';
import { Cmp307Component } from './cmp307/cmp307.component';
import { Cmp308Component } from './cmp308/cmp308.component';
import { Cmp309Component } from './cmp309/cmp309.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp300Component, Cmp301Component, Cmp302Component, Cmp303Component, Cmp304Component, Cmp305Component, Cmp306Component, Cmp307Component, Cmp308Component, Cmp309Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp300Component, Cmp301Component, Cmp302Component, Cmp303Component, Cmp304Component, Cmp305Component, Cmp306Component, Cmp307Component, Cmp308Component, Cmp309Component]
})
export class Module0Module { }
