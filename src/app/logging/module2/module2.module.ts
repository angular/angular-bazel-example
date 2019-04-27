import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp420Component } from './cmp420/cmp420.component';
import { Cmp421Component } from './cmp421/cmp421.component';
import { Cmp422Component } from './cmp422/cmp422.component';
import { Cmp423Component } from './cmp423/cmp423.component';
import { Cmp424Component } from './cmp424/cmp424.component';
import { Cmp425Component } from './cmp425/cmp425.component';
import { Cmp426Component } from './cmp426/cmp426.component';
import { Cmp427Component } from './cmp427/cmp427.component';
import { Cmp428Component } from './cmp428/cmp428.component';
import { Cmp429Component } from './cmp429/cmp429.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp420Component, Cmp421Component, Cmp422Component, Cmp423Component, Cmp424Component, Cmp425Component, Cmp426Component, Cmp427Component, Cmp428Component, Cmp429Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp420Component, Cmp421Component, Cmp422Component, Cmp423Component, Cmp424Component, Cmp425Component, Cmp426Component, Cmp427Component, Cmp428Component, Cmp429Component]
})
export class Module2Module { }
