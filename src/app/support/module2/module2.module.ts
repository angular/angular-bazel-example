import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp920Component } from './cmp920/cmp920.component';
import { Cmp921Component } from './cmp921/cmp921.component';
import { Cmp922Component } from './cmp922/cmp922.component';
import { Cmp923Component } from './cmp923/cmp923.component';
import { Cmp924Component } from './cmp924/cmp924.component';
import { Cmp925Component } from './cmp925/cmp925.component';
import { Cmp926Component } from './cmp926/cmp926.component';
import { Cmp927Component } from './cmp927/cmp927.component';
import { Cmp928Component } from './cmp928/cmp928.component';
import { Cmp929Component } from './cmp929/cmp929.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp920Component, Cmp921Component, Cmp922Component, Cmp923Component, Cmp924Component, Cmp925Component, Cmp926Component, Cmp927Component, Cmp928Component, Cmp929Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp920Component, Cmp921Component, Cmp922Component, Cmp923Component, Cmp924Component, Cmp925Component, Cmp926Component, Cmp927Component, Cmp928Component, Cmp929Component]
})
export class Module2Module { }
