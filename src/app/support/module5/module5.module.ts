import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp950Component } from './cmp950/cmp950.component';
import { Cmp951Component } from './cmp951/cmp951.component';
import { Cmp952Component } from './cmp952/cmp952.component';
import { Cmp953Component } from './cmp953/cmp953.component';
import { Cmp954Component } from './cmp954/cmp954.component';
import { Cmp955Component } from './cmp955/cmp955.component';
import { Cmp956Component } from './cmp956/cmp956.component';
import { Cmp957Component } from './cmp957/cmp957.component';
import { Cmp958Component } from './cmp958/cmp958.component';
import { Cmp959Component } from './cmp959/cmp959.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp950Component, Cmp951Component, Cmp952Component, Cmp953Component, Cmp954Component, Cmp955Component, Cmp956Component, Cmp957Component, Cmp958Component, Cmp959Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp950Component, Cmp951Component, Cmp952Component, Cmp953Component, Cmp954Component, Cmp955Component, Cmp956Component, Cmp957Component, Cmp958Component, Cmp959Component]
})
export class Module5Module { }
