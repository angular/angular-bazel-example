import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp640Component } from './cmp640/cmp640.component';
import { Cmp641Component } from './cmp641/cmp641.component';
import { Cmp642Component } from './cmp642/cmp642.component';
import { Cmp643Component } from './cmp643/cmp643.component';
import { Cmp644Component } from './cmp644/cmp644.component';
import { Cmp645Component } from './cmp645/cmp645.component';
import { Cmp646Component } from './cmp646/cmp646.component';
import { Cmp647Component } from './cmp647/cmp647.component';
import { Cmp648Component } from './cmp648/cmp648.component';
import { Cmp649Component } from './cmp649/cmp649.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp640Component, Cmp641Component, Cmp642Component, Cmp643Component, Cmp644Component, Cmp645Component, Cmp646Component, Cmp647Component, Cmp648Component, Cmp649Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp640Component, Cmp641Component, Cmp642Component, Cmp643Component, Cmp644Component, Cmp645Component, Cmp646Component, Cmp647Component, Cmp648Component, Cmp649Component]
})
export class Module4Module { }
