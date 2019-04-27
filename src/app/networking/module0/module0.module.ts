import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp600Component } from './cmp600/cmp600.component';
import { Cmp601Component } from './cmp601/cmp601.component';
import { Cmp602Component } from './cmp602/cmp602.component';
import { Cmp603Component } from './cmp603/cmp603.component';
import { Cmp604Component } from './cmp604/cmp604.component';
import { Cmp605Component } from './cmp605/cmp605.component';
import { Cmp606Component } from './cmp606/cmp606.component';
import { Cmp607Component } from './cmp607/cmp607.component';
import { Cmp608Component } from './cmp608/cmp608.component';
import { Cmp609Component } from './cmp609/cmp609.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp600Component, Cmp601Component, Cmp602Component, Cmp603Component, Cmp604Component, Cmp605Component, Cmp606Component, Cmp607Component, Cmp608Component, Cmp609Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp600Component, Cmp601Component, Cmp602Component, Cmp603Component, Cmp604Component, Cmp605Component, Cmp606Component, Cmp607Component, Cmp608Component, Cmp609Component]
})
export class Module0Module { }
