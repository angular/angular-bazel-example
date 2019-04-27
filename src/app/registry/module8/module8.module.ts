import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp780Component } from './cmp780/cmp780.component';
import { Cmp781Component } from './cmp781/cmp781.component';
import { Cmp782Component } from './cmp782/cmp782.component';
import { Cmp783Component } from './cmp783/cmp783.component';
import { Cmp784Component } from './cmp784/cmp784.component';
import { Cmp785Component } from './cmp785/cmp785.component';
import { Cmp786Component } from './cmp786/cmp786.component';
import { Cmp787Component } from './cmp787/cmp787.component';
import { Cmp788Component } from './cmp788/cmp788.component';
import { Cmp789Component } from './cmp789/cmp789.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp780Component, Cmp781Component, Cmp782Component, Cmp783Component, Cmp784Component, Cmp785Component, Cmp786Component, Cmp787Component, Cmp788Component, Cmp789Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp780Component, Cmp781Component, Cmp782Component, Cmp783Component, Cmp784Component, Cmp785Component, Cmp786Component, Cmp787Component, Cmp788Component, Cmp789Component]
})
export class Module8Module { }
