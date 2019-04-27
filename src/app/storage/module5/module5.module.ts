import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp850Component } from './cmp850/cmp850.component';
import { Cmp851Component } from './cmp851/cmp851.component';
import { Cmp852Component } from './cmp852/cmp852.component';
import { Cmp853Component } from './cmp853/cmp853.component';
import { Cmp854Component } from './cmp854/cmp854.component';
import { Cmp855Component } from './cmp855/cmp855.component';
import { Cmp856Component } from './cmp856/cmp856.component';
import { Cmp857Component } from './cmp857/cmp857.component';
import { Cmp858Component } from './cmp858/cmp858.component';
import { Cmp859Component } from './cmp859/cmp859.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp850Component, Cmp851Component, Cmp852Component, Cmp853Component, Cmp854Component, Cmp855Component, Cmp856Component, Cmp857Component, Cmp858Component, Cmp859Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp850Component, Cmp851Component, Cmp852Component, Cmp853Component, Cmp854Component, Cmp855Component, Cmp856Component, Cmp857Component, Cmp858Component, Cmp859Component]
})
export class Module5Module { }
