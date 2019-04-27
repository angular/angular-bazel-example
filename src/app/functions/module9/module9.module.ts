import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp390Component } from './cmp390/cmp390.component';
import { Cmp391Component } from './cmp391/cmp391.component';
import { Cmp392Component } from './cmp392/cmp392.component';
import { Cmp393Component } from './cmp393/cmp393.component';
import { Cmp394Component } from './cmp394/cmp394.component';
import { Cmp395Component } from './cmp395/cmp395.component';
import { Cmp396Component } from './cmp396/cmp396.component';
import { Cmp397Component } from './cmp397/cmp397.component';
import { Cmp398Component } from './cmp398/cmp398.component';
import { Cmp399Component } from './cmp399/cmp399.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp390Component, Cmp391Component, Cmp392Component, Cmp393Component, Cmp394Component, Cmp395Component, Cmp396Component, Cmp397Component, Cmp398Component, Cmp399Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp390Component, Cmp391Component, Cmp392Component, Cmp393Component, Cmp394Component, Cmp395Component, Cmp396Component, Cmp397Component, Cmp398Component, Cmp399Component]
})
export class Module9Module { }
