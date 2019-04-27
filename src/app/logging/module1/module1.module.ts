import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp410Component } from './cmp410/cmp410.component';
import { Cmp411Component } from './cmp411/cmp411.component';
import { Cmp412Component } from './cmp412/cmp412.component';
import { Cmp413Component } from './cmp413/cmp413.component';
import { Cmp414Component } from './cmp414/cmp414.component';
import { Cmp415Component } from './cmp415/cmp415.component';
import { Cmp416Component } from './cmp416/cmp416.component';
import { Cmp417Component } from './cmp417/cmp417.component';
import { Cmp418Component } from './cmp418/cmp418.component';
import { Cmp419Component } from './cmp419/cmp419.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp410Component, Cmp411Component, Cmp412Component, Cmp413Component, Cmp414Component, Cmp415Component, Cmp416Component, Cmp417Component, Cmp418Component, Cmp419Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp410Component, Cmp411Component, Cmp412Component, Cmp413Component, Cmp414Component, Cmp415Component, Cmp416Component, Cmp417Component, Cmp418Component, Cmp419Component]
})
export class Module1Module { }
