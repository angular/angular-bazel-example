import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp840Component } from './cmp840/cmp840.component';
import { Cmp841Component } from './cmp841/cmp841.component';
import { Cmp842Component } from './cmp842/cmp842.component';
import { Cmp843Component } from './cmp843/cmp843.component';
import { Cmp844Component } from './cmp844/cmp844.component';
import { Cmp845Component } from './cmp845/cmp845.component';
import { Cmp846Component } from './cmp846/cmp846.component';
import { Cmp847Component } from './cmp847/cmp847.component';
import { Cmp848Component } from './cmp848/cmp848.component';
import { Cmp849Component } from './cmp849/cmp849.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp840Component, Cmp841Component, Cmp842Component, Cmp843Component, Cmp844Component, Cmp845Component, Cmp846Component, Cmp847Component, Cmp848Component, Cmp849Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp840Component, Cmp841Component, Cmp842Component, Cmp843Component, Cmp844Component, Cmp845Component, Cmp846Component, Cmp847Component, Cmp848Component, Cmp849Component]
})
export class Module4Module { }
