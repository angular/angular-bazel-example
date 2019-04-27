import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp440Component } from './cmp440/cmp440.component';
import { Cmp441Component } from './cmp441/cmp441.component';
import { Cmp442Component } from './cmp442/cmp442.component';
import { Cmp443Component } from './cmp443/cmp443.component';
import { Cmp444Component } from './cmp444/cmp444.component';
import { Cmp445Component } from './cmp445/cmp445.component';
import { Cmp446Component } from './cmp446/cmp446.component';
import { Cmp447Component } from './cmp447/cmp447.component';
import { Cmp448Component } from './cmp448/cmp448.component';
import { Cmp449Component } from './cmp449/cmp449.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp440Component, Cmp441Component, Cmp442Component, Cmp443Component, Cmp444Component, Cmp445Component, Cmp446Component, Cmp447Component, Cmp448Component, Cmp449Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp440Component, Cmp441Component, Cmp442Component, Cmp443Component, Cmp444Component, Cmp445Component, Cmp446Component, Cmp447Component, Cmp448Component, Cmp449Component]
})
export class Module4Module { }
