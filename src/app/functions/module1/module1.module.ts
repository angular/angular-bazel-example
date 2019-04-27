import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp310Component } from './cmp310/cmp310.component';
import { Cmp311Component } from './cmp311/cmp311.component';
import { Cmp312Component } from './cmp312/cmp312.component';
import { Cmp313Component } from './cmp313/cmp313.component';
import { Cmp314Component } from './cmp314/cmp314.component';
import { Cmp315Component } from './cmp315/cmp315.component';
import { Cmp316Component } from './cmp316/cmp316.component';
import { Cmp317Component } from './cmp317/cmp317.component';
import { Cmp318Component } from './cmp318/cmp318.component';
import { Cmp319Component } from './cmp319/cmp319.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp310Component, Cmp311Component, Cmp312Component, Cmp313Component, Cmp314Component, Cmp315Component, Cmp316Component, Cmp317Component, Cmp318Component, Cmp319Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp310Component, Cmp311Component, Cmp312Component, Cmp313Component, Cmp314Component, Cmp315Component, Cmp316Component, Cmp317Component, Cmp318Component, Cmp319Component]
})
export class Module1Module { }
