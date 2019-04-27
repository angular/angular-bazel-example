import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp580Component } from './cmp580/cmp580.component';
import { Cmp581Component } from './cmp581/cmp581.component';
import { Cmp582Component } from './cmp582/cmp582.component';
import { Cmp583Component } from './cmp583/cmp583.component';
import { Cmp584Component } from './cmp584/cmp584.component';
import { Cmp585Component } from './cmp585/cmp585.component';
import { Cmp586Component } from './cmp586/cmp586.component';
import { Cmp587Component } from './cmp587/cmp587.component';
import { Cmp588Component } from './cmp588/cmp588.component';
import { Cmp589Component } from './cmp589/cmp589.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp580Component, Cmp581Component, Cmp582Component, Cmp583Component, Cmp584Component, Cmp585Component, Cmp586Component, Cmp587Component, Cmp588Component, Cmp589Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp580Component, Cmp581Component, Cmp582Component, Cmp583Component, Cmp584Component, Cmp585Component, Cmp586Component, Cmp587Component, Cmp588Component, Cmp589Component]
})
export class Module8Module { }
