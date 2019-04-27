import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp490Component } from './cmp490/cmp490.component';
import { Cmp491Component } from './cmp491/cmp491.component';
import { Cmp492Component } from './cmp492/cmp492.component';
import { Cmp493Component } from './cmp493/cmp493.component';
import { Cmp494Component } from './cmp494/cmp494.component';
import { Cmp495Component } from './cmp495/cmp495.component';
import { Cmp496Component } from './cmp496/cmp496.component';
import { Cmp497Component } from './cmp497/cmp497.component';
import { Cmp498Component } from './cmp498/cmp498.component';
import { Cmp499Component } from './cmp499/cmp499.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp490Component, Cmp491Component, Cmp492Component, Cmp493Component, Cmp494Component, Cmp495Component, Cmp496Component, Cmp497Component, Cmp498Component, Cmp499Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp490Component, Cmp491Component, Cmp492Component, Cmp493Component, Cmp494Component, Cmp495Component, Cmp496Component, Cmp497Component, Cmp498Component, Cmp499Component]
})
export class Module9Module { }
