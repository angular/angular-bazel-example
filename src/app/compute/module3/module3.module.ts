import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp130Component } from './cmp130/cmp130.component';
import { Cmp131Component } from './cmp131/cmp131.component';
import { Cmp132Component } from './cmp132/cmp132.component';
import { Cmp133Component } from './cmp133/cmp133.component';
import { Cmp134Component } from './cmp134/cmp134.component';
import { Cmp135Component } from './cmp135/cmp135.component';
import { Cmp136Component } from './cmp136/cmp136.component';
import { Cmp137Component } from './cmp137/cmp137.component';
import { Cmp138Component } from './cmp138/cmp138.component';
import { Cmp139Component } from './cmp139/cmp139.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp130Component, Cmp131Component, Cmp132Component, Cmp133Component, Cmp134Component, Cmp135Component, Cmp136Component, Cmp137Component, Cmp138Component, Cmp139Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp130Component, Cmp131Component, Cmp132Component, Cmp133Component, Cmp134Component, Cmp135Component, Cmp136Component, Cmp137Component, Cmp138Component, Cmp139Component]
})
export class Module3Module { }
