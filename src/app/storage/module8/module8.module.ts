import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp880Component } from './cmp880/cmp880.component';
import { Cmp881Component } from './cmp881/cmp881.component';
import { Cmp882Component } from './cmp882/cmp882.component';
import { Cmp883Component } from './cmp883/cmp883.component';
import { Cmp884Component } from './cmp884/cmp884.component';
import { Cmp885Component } from './cmp885/cmp885.component';
import { Cmp886Component } from './cmp886/cmp886.component';
import { Cmp887Component } from './cmp887/cmp887.component';
import { Cmp888Component } from './cmp888/cmp888.component';
import { Cmp889Component } from './cmp889/cmp889.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp880Component, Cmp881Component, Cmp882Component, Cmp883Component, Cmp884Component, Cmp885Component, Cmp886Component, Cmp887Component, Cmp888Component, Cmp889Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp880Component, Cmp881Component, Cmp882Component, Cmp883Component, Cmp884Component, Cmp885Component, Cmp886Component, Cmp887Component, Cmp888Component, Cmp889Component]
})
export class Module8Module { }
