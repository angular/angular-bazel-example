import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp810Component } from './cmp810/cmp810.component';
import { Cmp811Component } from './cmp811/cmp811.component';
import { Cmp812Component } from './cmp812/cmp812.component';
import { Cmp813Component } from './cmp813/cmp813.component';
import { Cmp814Component } from './cmp814/cmp814.component';
import { Cmp815Component } from './cmp815/cmp815.component';
import { Cmp816Component } from './cmp816/cmp816.component';
import { Cmp817Component } from './cmp817/cmp817.component';
import { Cmp818Component } from './cmp818/cmp818.component';
import { Cmp819Component } from './cmp819/cmp819.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp810Component, Cmp811Component, Cmp812Component, Cmp813Component, Cmp814Component, Cmp815Component, Cmp816Component, Cmp817Component, Cmp818Component, Cmp819Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp810Component, Cmp811Component, Cmp812Component, Cmp813Component, Cmp814Component, Cmp815Component, Cmp816Component, Cmp817Component, Cmp818Component, Cmp819Component]
})
export class Module1Module { }
