import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp610Component } from './cmp610/cmp610.component';
import { Cmp611Component } from './cmp611/cmp611.component';
import { Cmp612Component } from './cmp612/cmp612.component';
import { Cmp613Component } from './cmp613/cmp613.component';
import { Cmp614Component } from './cmp614/cmp614.component';
import { Cmp615Component } from './cmp615/cmp615.component';
import { Cmp616Component } from './cmp616/cmp616.component';
import { Cmp617Component } from './cmp617/cmp617.component';
import { Cmp618Component } from './cmp618/cmp618.component';
import { Cmp619Component } from './cmp619/cmp619.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp610Component, Cmp611Component, Cmp612Component, Cmp613Component, Cmp614Component, Cmp615Component, Cmp616Component, Cmp617Component, Cmp618Component, Cmp619Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp610Component, Cmp611Component, Cmp612Component, Cmp613Component, Cmp614Component, Cmp615Component, Cmp616Component, Cmp617Component, Cmp618Component, Cmp619Component]
})
export class Module1Module { }
