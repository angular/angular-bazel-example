import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp70Component } from './cmp70/cmp70.component';
import { Cmp71Component } from './cmp71/cmp71.component';
import { Cmp72Component } from './cmp72/cmp72.component';
import { Cmp73Component } from './cmp73/cmp73.component';
import { Cmp74Component } from './cmp74/cmp74.component';
import { Cmp75Component } from './cmp75/cmp75.component';
import { Cmp76Component } from './cmp76/cmp76.component';
import { Cmp77Component } from './cmp77/cmp77.component';
import { Cmp78Component } from './cmp78/cmp78.component';
import { Cmp79Component } from './cmp79/cmp79.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp70Component, Cmp71Component, Cmp72Component, Cmp73Component, Cmp74Component, Cmp75Component, Cmp76Component, Cmp77Component, Cmp78Component, Cmp79Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp70Component, Cmp71Component, Cmp72Component, Cmp73Component, Cmp74Component, Cmp75Component, Cmp76Component, Cmp77Component, Cmp78Component, Cmp79Component]
})
export class Module7Module { }
