import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp760Component } from './cmp760/cmp760.component';
import { Cmp761Component } from './cmp761/cmp761.component';
import { Cmp762Component } from './cmp762/cmp762.component';
import { Cmp763Component } from './cmp763/cmp763.component';
import { Cmp764Component } from './cmp764/cmp764.component';
import { Cmp765Component } from './cmp765/cmp765.component';
import { Cmp766Component } from './cmp766/cmp766.component';
import { Cmp767Component } from './cmp767/cmp767.component';
import { Cmp768Component } from './cmp768/cmp768.component';
import { Cmp769Component } from './cmp769/cmp769.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp760Component, Cmp761Component, Cmp762Component, Cmp763Component, Cmp764Component, Cmp765Component, Cmp766Component, Cmp767Component, Cmp768Component, Cmp769Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp760Component, Cmp761Component, Cmp762Component, Cmp763Component, Cmp764Component, Cmp765Component, Cmp766Component, Cmp767Component, Cmp768Component, Cmp769Component]
})
export class Module6Module { }
