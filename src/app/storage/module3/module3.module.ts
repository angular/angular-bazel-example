import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp830Component } from './cmp830/cmp830.component';
import { Cmp831Component } from './cmp831/cmp831.component';
import { Cmp832Component } from './cmp832/cmp832.component';
import { Cmp833Component } from './cmp833/cmp833.component';
import { Cmp834Component } from './cmp834/cmp834.component';
import { Cmp835Component } from './cmp835/cmp835.component';
import { Cmp836Component } from './cmp836/cmp836.component';
import { Cmp837Component } from './cmp837/cmp837.component';
import { Cmp838Component } from './cmp838/cmp838.component';
import { Cmp839Component } from './cmp839/cmp839.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp830Component, Cmp831Component, Cmp832Component, Cmp833Component, Cmp834Component, Cmp835Component, Cmp836Component, Cmp837Component, Cmp838Component, Cmp839Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp830Component, Cmp831Component, Cmp832Component, Cmp833Component, Cmp834Component, Cmp835Component, Cmp836Component, Cmp837Component, Cmp838Component, Cmp839Component]
})
export class Module3Module { }
