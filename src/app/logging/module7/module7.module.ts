import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp470Component } from './cmp470/cmp470.component';
import { Cmp471Component } from './cmp471/cmp471.component';
import { Cmp472Component } from './cmp472/cmp472.component';
import { Cmp473Component } from './cmp473/cmp473.component';
import { Cmp474Component } from './cmp474/cmp474.component';
import { Cmp475Component } from './cmp475/cmp475.component';
import { Cmp476Component } from './cmp476/cmp476.component';
import { Cmp477Component } from './cmp477/cmp477.component';
import { Cmp478Component } from './cmp478/cmp478.component';
import { Cmp479Component } from './cmp479/cmp479.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp470Component, Cmp471Component, Cmp472Component, Cmp473Component, Cmp474Component, Cmp475Component, Cmp476Component, Cmp477Component, Cmp478Component, Cmp479Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp470Component, Cmp471Component, Cmp472Component, Cmp473Component, Cmp474Component, Cmp475Component, Cmp476Component, Cmp477Component, Cmp478Component, Cmp479Component]
})
export class Module7Module { }
