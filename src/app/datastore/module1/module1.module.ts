import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp210Component } from './cmp210/cmp210.component';
import { Cmp211Component } from './cmp211/cmp211.component';
import { Cmp212Component } from './cmp212/cmp212.component';
import { Cmp213Component } from './cmp213/cmp213.component';
import { Cmp214Component } from './cmp214/cmp214.component';
import { Cmp215Component } from './cmp215/cmp215.component';
import { Cmp216Component } from './cmp216/cmp216.component';
import { Cmp217Component } from './cmp217/cmp217.component';
import { Cmp218Component } from './cmp218/cmp218.component';
import { Cmp219Component } from './cmp219/cmp219.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp210Component, Cmp211Component, Cmp212Component, Cmp213Component, Cmp214Component, Cmp215Component, Cmp216Component, Cmp217Component, Cmp218Component, Cmp219Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp210Component, Cmp211Component, Cmp212Component, Cmp213Component, Cmp214Component, Cmp215Component, Cmp216Component, Cmp217Component, Cmp218Component, Cmp219Component]
})
export class Module1Module { }
