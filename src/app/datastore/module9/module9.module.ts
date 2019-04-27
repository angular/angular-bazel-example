import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp290Component } from './cmp290/cmp290.component';
import { Cmp291Component } from './cmp291/cmp291.component';
import { Cmp292Component } from './cmp292/cmp292.component';
import { Cmp293Component } from './cmp293/cmp293.component';
import { Cmp294Component } from './cmp294/cmp294.component';
import { Cmp295Component } from './cmp295/cmp295.component';
import { Cmp296Component } from './cmp296/cmp296.component';
import { Cmp297Component } from './cmp297/cmp297.component';
import { Cmp298Component } from './cmp298/cmp298.component';
import { Cmp299Component } from './cmp299/cmp299.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp290Component, Cmp291Component, Cmp292Component, Cmp293Component, Cmp294Component, Cmp295Component, Cmp296Component, Cmp297Component, Cmp298Component, Cmp299Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp290Component, Cmp291Component, Cmp292Component, Cmp293Component, Cmp294Component, Cmp295Component, Cmp296Component, Cmp297Component, Cmp298Component, Cmp299Component]
})
export class Module9Module { }
