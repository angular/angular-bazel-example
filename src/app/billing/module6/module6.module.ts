import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp60Component } from './cmp60/cmp60.component';
import { Cmp61Component } from './cmp61/cmp61.component';
import { Cmp62Component } from './cmp62/cmp62.component';
import { Cmp63Component } from './cmp63/cmp63.component';
import { Cmp64Component } from './cmp64/cmp64.component';
import { Cmp65Component } from './cmp65/cmp65.component';
import { Cmp66Component } from './cmp66/cmp66.component';
import { Cmp67Component } from './cmp67/cmp67.component';
import { Cmp68Component } from './cmp68/cmp68.component';
import { Cmp69Component } from './cmp69/cmp69.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp60Component, Cmp61Component, Cmp62Component, Cmp63Component, Cmp64Component, Cmp65Component, Cmp66Component, Cmp67Component, Cmp68Component, Cmp69Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp60Component, Cmp61Component, Cmp62Component, Cmp63Component, Cmp64Component, Cmp65Component, Cmp66Component, Cmp67Component, Cmp68Component, Cmp69Component]
})
export class Module6Module { }
