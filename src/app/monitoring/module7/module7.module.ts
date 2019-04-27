import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp570Component } from './cmp570/cmp570.component';
import { Cmp571Component } from './cmp571/cmp571.component';
import { Cmp572Component } from './cmp572/cmp572.component';
import { Cmp573Component } from './cmp573/cmp573.component';
import { Cmp574Component } from './cmp574/cmp574.component';
import { Cmp575Component } from './cmp575/cmp575.component';
import { Cmp576Component } from './cmp576/cmp576.component';
import { Cmp577Component } from './cmp577/cmp577.component';
import { Cmp578Component } from './cmp578/cmp578.component';
import { Cmp579Component } from './cmp579/cmp579.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp570Component, Cmp571Component, Cmp572Component, Cmp573Component, Cmp574Component, Cmp575Component, Cmp576Component, Cmp577Component, Cmp578Component, Cmp579Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp570Component, Cmp571Component, Cmp572Component, Cmp573Component, Cmp574Component, Cmp575Component, Cmp576Component, Cmp577Component, Cmp578Component, Cmp579Component]
})
export class Module7Module { }
