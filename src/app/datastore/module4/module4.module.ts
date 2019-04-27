import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp240Component } from './cmp240/cmp240.component';
import { Cmp241Component } from './cmp241/cmp241.component';
import { Cmp242Component } from './cmp242/cmp242.component';
import { Cmp243Component } from './cmp243/cmp243.component';
import { Cmp244Component } from './cmp244/cmp244.component';
import { Cmp245Component } from './cmp245/cmp245.component';
import { Cmp246Component } from './cmp246/cmp246.component';
import { Cmp247Component } from './cmp247/cmp247.component';
import { Cmp248Component } from './cmp248/cmp248.component';
import { Cmp249Component } from './cmp249/cmp249.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp240Component, Cmp241Component, Cmp242Component, Cmp243Component, Cmp244Component, Cmp245Component, Cmp246Component, Cmp247Component, Cmp248Component, Cmp249Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp240Component, Cmp241Component, Cmp242Component, Cmp243Component, Cmp244Component, Cmp245Component, Cmp246Component, Cmp247Component, Cmp248Component, Cmp249Component]
})
export class Module4Module { }
