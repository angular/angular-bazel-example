import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp790Component } from './cmp790/cmp790.component';
import { Cmp791Component } from './cmp791/cmp791.component';
import { Cmp792Component } from './cmp792/cmp792.component';
import { Cmp793Component } from './cmp793/cmp793.component';
import { Cmp794Component } from './cmp794/cmp794.component';
import { Cmp795Component } from './cmp795/cmp795.component';
import { Cmp796Component } from './cmp796/cmp796.component';
import { Cmp797Component } from './cmp797/cmp797.component';
import { Cmp798Component } from './cmp798/cmp798.component';
import { Cmp799Component } from './cmp799/cmp799.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp790Component, Cmp791Component, Cmp792Component, Cmp793Component, Cmp794Component, Cmp795Component, Cmp796Component, Cmp797Component, Cmp798Component, Cmp799Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp790Component, Cmp791Component, Cmp792Component, Cmp793Component, Cmp794Component, Cmp795Component, Cmp796Component, Cmp797Component, Cmp798Component, Cmp799Component]
})
export class Module9Module { }
