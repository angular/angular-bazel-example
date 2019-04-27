import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp400Component } from './cmp400/cmp400.component';
import { Cmp401Component } from './cmp401/cmp401.component';
import { Cmp402Component } from './cmp402/cmp402.component';
import { Cmp403Component } from './cmp403/cmp403.component';
import { Cmp404Component } from './cmp404/cmp404.component';
import { Cmp405Component } from './cmp405/cmp405.component';
import { Cmp406Component } from './cmp406/cmp406.component';
import { Cmp407Component } from './cmp407/cmp407.component';
import { Cmp408Component } from './cmp408/cmp408.component';
import { Cmp409Component } from './cmp409/cmp409.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp400Component, Cmp401Component, Cmp402Component, Cmp403Component, Cmp404Component, Cmp405Component, Cmp406Component, Cmp407Component, Cmp408Component, Cmp409Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp400Component, Cmp401Component, Cmp402Component, Cmp403Component, Cmp404Component, Cmp405Component, Cmp406Component, Cmp407Component, Cmp408Component, Cmp409Component]
})
export class Module0Module { }
