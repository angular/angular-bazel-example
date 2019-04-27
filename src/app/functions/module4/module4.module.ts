import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp340Component } from './cmp340/cmp340.component';
import { Cmp341Component } from './cmp341/cmp341.component';
import { Cmp342Component } from './cmp342/cmp342.component';
import { Cmp343Component } from './cmp343/cmp343.component';
import { Cmp344Component } from './cmp344/cmp344.component';
import { Cmp345Component } from './cmp345/cmp345.component';
import { Cmp346Component } from './cmp346/cmp346.component';
import { Cmp347Component } from './cmp347/cmp347.component';
import { Cmp348Component } from './cmp348/cmp348.component';
import { Cmp349Component } from './cmp349/cmp349.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp340Component, Cmp341Component, Cmp342Component, Cmp343Component, Cmp344Component, Cmp345Component, Cmp346Component, Cmp347Component, Cmp348Component, Cmp349Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp340Component, Cmp341Component, Cmp342Component, Cmp343Component, Cmp344Component, Cmp345Component, Cmp346Component, Cmp347Component, Cmp348Component, Cmp349Component]
})
export class Module4Module { }
