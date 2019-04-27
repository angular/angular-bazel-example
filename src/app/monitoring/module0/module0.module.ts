import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp500Component } from './cmp500/cmp500.component';
import { Cmp501Component } from './cmp501/cmp501.component';
import { Cmp502Component } from './cmp502/cmp502.component';
import { Cmp503Component } from './cmp503/cmp503.component';
import { Cmp504Component } from './cmp504/cmp504.component';
import { Cmp505Component } from './cmp505/cmp505.component';
import { Cmp506Component } from './cmp506/cmp506.component';
import { Cmp507Component } from './cmp507/cmp507.component';
import { Cmp508Component } from './cmp508/cmp508.component';
import { Cmp509Component } from './cmp509/cmp509.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp500Component, Cmp501Component, Cmp502Component, Cmp503Component, Cmp504Component, Cmp505Component, Cmp506Component, Cmp507Component, Cmp508Component, Cmp509Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp500Component, Cmp501Component, Cmp502Component, Cmp503Component, Cmp504Component, Cmp505Component, Cmp506Component, Cmp507Component, Cmp508Component, Cmp509Component]
})
export class Module0Module { }
