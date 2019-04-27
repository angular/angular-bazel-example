import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp30Component } from './cmp30/cmp30.component';
import { Cmp31Component } from './cmp31/cmp31.component';
import { Cmp32Component } from './cmp32/cmp32.component';
import { Cmp33Component } from './cmp33/cmp33.component';
import { Cmp34Component } from './cmp34/cmp34.component';
import { Cmp35Component } from './cmp35/cmp35.component';
import { Cmp36Component } from './cmp36/cmp36.component';
import { Cmp37Component } from './cmp37/cmp37.component';
import { Cmp38Component } from './cmp38/cmp38.component';
import { Cmp39Component } from './cmp39/cmp39.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp30Component, Cmp31Component, Cmp32Component, Cmp33Component, Cmp34Component, Cmp35Component, Cmp36Component, Cmp37Component, Cmp38Component, Cmp39Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp30Component, Cmp31Component, Cmp32Component, Cmp33Component, Cmp34Component, Cmp35Component, Cmp36Component, Cmp37Component, Cmp38Component, Cmp39Component]
})
export class Module3Module { }
