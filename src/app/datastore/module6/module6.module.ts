import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp260Component } from './cmp260/cmp260.component';
import { Cmp261Component } from './cmp261/cmp261.component';
import { Cmp262Component } from './cmp262/cmp262.component';
import { Cmp263Component } from './cmp263/cmp263.component';
import { Cmp264Component } from './cmp264/cmp264.component';
import { Cmp265Component } from './cmp265/cmp265.component';
import { Cmp266Component } from './cmp266/cmp266.component';
import { Cmp267Component } from './cmp267/cmp267.component';
import { Cmp268Component } from './cmp268/cmp268.component';
import { Cmp269Component } from './cmp269/cmp269.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp260Component, Cmp261Component, Cmp262Component, Cmp263Component, Cmp264Component, Cmp265Component, Cmp266Component, Cmp267Component, Cmp268Component, Cmp269Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp260Component, Cmp261Component, Cmp262Component, Cmp263Component, Cmp264Component, Cmp265Component, Cmp266Component, Cmp267Component, Cmp268Component, Cmp269Component]
})
export class Module6Module { }
