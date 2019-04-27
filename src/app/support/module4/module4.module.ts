import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp940Component } from './cmp940/cmp940.component';
import { Cmp941Component } from './cmp941/cmp941.component';
import { Cmp942Component } from './cmp942/cmp942.component';
import { Cmp943Component } from './cmp943/cmp943.component';
import { Cmp944Component } from './cmp944/cmp944.component';
import { Cmp945Component } from './cmp945/cmp945.component';
import { Cmp946Component } from './cmp946/cmp946.component';
import { Cmp947Component } from './cmp947/cmp947.component';
import { Cmp948Component } from './cmp948/cmp948.component';
import { Cmp949Component } from './cmp949/cmp949.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp940Component, Cmp941Component, Cmp942Component, Cmp943Component, Cmp944Component, Cmp945Component, Cmp946Component, Cmp947Component, Cmp948Component, Cmp949Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp940Component, Cmp941Component, Cmp942Component, Cmp943Component, Cmp944Component, Cmp945Component, Cmp946Component, Cmp947Component, Cmp948Component, Cmp949Component]
})
export class Module4Module { }
