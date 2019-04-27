import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp200Component } from './cmp200/cmp200.component';
import { Cmp201Component } from './cmp201/cmp201.component';
import { Cmp202Component } from './cmp202/cmp202.component';
import { Cmp203Component } from './cmp203/cmp203.component';
import { Cmp204Component } from './cmp204/cmp204.component';
import { Cmp205Component } from './cmp205/cmp205.component';
import { Cmp206Component } from './cmp206/cmp206.component';
import { Cmp207Component } from './cmp207/cmp207.component';
import { Cmp208Component } from './cmp208/cmp208.component';
import { Cmp209Component } from './cmp209/cmp209.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp200Component, Cmp201Component, Cmp202Component, Cmp203Component, Cmp204Component, Cmp205Component, Cmp206Component, Cmp207Component, Cmp208Component, Cmp209Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp200Component, Cmp201Component, Cmp202Component, Cmp203Component, Cmp204Component, Cmp205Component, Cmp206Component, Cmp207Component, Cmp208Component, Cmp209Component]
})
export class Module0Module { }
