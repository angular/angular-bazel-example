import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp220Component } from './cmp220/cmp220.component';
import { Cmp221Component } from './cmp221/cmp221.component';
import { Cmp222Component } from './cmp222/cmp222.component';
import { Cmp223Component } from './cmp223/cmp223.component';
import { Cmp224Component } from './cmp224/cmp224.component';
import { Cmp225Component } from './cmp225/cmp225.component';
import { Cmp226Component } from './cmp226/cmp226.component';
import { Cmp227Component } from './cmp227/cmp227.component';
import { Cmp228Component } from './cmp228/cmp228.component';
import { Cmp229Component } from './cmp229/cmp229.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp220Component, Cmp221Component, Cmp222Component, Cmp223Component, Cmp224Component, Cmp225Component, Cmp226Component, Cmp227Component, Cmp228Component, Cmp229Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp220Component, Cmp221Component, Cmp222Component, Cmp223Component, Cmp224Component, Cmp225Component, Cmp226Component, Cmp227Component, Cmp228Component, Cmp229Component]
})
export class Module2Module { }
