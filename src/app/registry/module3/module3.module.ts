import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp730Component } from './cmp730/cmp730.component';
import { Cmp731Component } from './cmp731/cmp731.component';
import { Cmp732Component } from './cmp732/cmp732.component';
import { Cmp733Component } from './cmp733/cmp733.component';
import { Cmp734Component } from './cmp734/cmp734.component';
import { Cmp735Component } from './cmp735/cmp735.component';
import { Cmp736Component } from './cmp736/cmp736.component';
import { Cmp737Component } from './cmp737/cmp737.component';
import { Cmp738Component } from './cmp738/cmp738.component';
import { Cmp739Component } from './cmp739/cmp739.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp730Component, Cmp731Component, Cmp732Component, Cmp733Component, Cmp734Component, Cmp735Component, Cmp736Component, Cmp737Component, Cmp738Component, Cmp739Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp730Component, Cmp731Component, Cmp732Component, Cmp733Component, Cmp734Component, Cmp735Component, Cmp736Component, Cmp737Component, Cmp738Component, Cmp739Component]
})
export class Module3Module { }
