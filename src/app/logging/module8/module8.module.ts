import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp480Component } from './cmp480/cmp480.component';
import { Cmp481Component } from './cmp481/cmp481.component';
import { Cmp482Component } from './cmp482/cmp482.component';
import { Cmp483Component } from './cmp483/cmp483.component';
import { Cmp484Component } from './cmp484/cmp484.component';
import { Cmp485Component } from './cmp485/cmp485.component';
import { Cmp486Component } from './cmp486/cmp486.component';
import { Cmp487Component } from './cmp487/cmp487.component';
import { Cmp488Component } from './cmp488/cmp488.component';
import { Cmp489Component } from './cmp489/cmp489.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp480Component, Cmp481Component, Cmp482Component, Cmp483Component, Cmp484Component, Cmp485Component, Cmp486Component, Cmp487Component, Cmp488Component, Cmp489Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp480Component, Cmp481Component, Cmp482Component, Cmp483Component, Cmp484Component, Cmp485Component, Cmp486Component, Cmp487Component, Cmp488Component, Cmp489Component]
})
export class Module8Module { }
