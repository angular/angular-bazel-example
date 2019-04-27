import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp900Component } from './cmp900/cmp900.component';
import { Cmp901Component } from './cmp901/cmp901.component';
import { Cmp902Component } from './cmp902/cmp902.component';
import { Cmp903Component } from './cmp903/cmp903.component';
import { Cmp904Component } from './cmp904/cmp904.component';
import { Cmp905Component } from './cmp905/cmp905.component';
import { Cmp906Component } from './cmp906/cmp906.component';
import { Cmp907Component } from './cmp907/cmp907.component';
import { Cmp908Component } from './cmp908/cmp908.component';
import { Cmp909Component } from './cmp909/cmp909.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp900Component, Cmp901Component, Cmp902Component, Cmp903Component, Cmp904Component, Cmp905Component, Cmp906Component, Cmp907Component, Cmp908Component, Cmp909Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp900Component, Cmp901Component, Cmp902Component, Cmp903Component, Cmp904Component, Cmp905Component, Cmp906Component, Cmp907Component, Cmp908Component, Cmp909Component]
})
export class Module0Module { }
