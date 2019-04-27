import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp820Component } from './cmp820/cmp820.component';
import { Cmp821Component } from './cmp821/cmp821.component';
import { Cmp822Component } from './cmp822/cmp822.component';
import { Cmp823Component } from './cmp823/cmp823.component';
import { Cmp824Component } from './cmp824/cmp824.component';
import { Cmp825Component } from './cmp825/cmp825.component';
import { Cmp826Component } from './cmp826/cmp826.component';
import { Cmp827Component } from './cmp827/cmp827.component';
import { Cmp828Component } from './cmp828/cmp828.component';
import { Cmp829Component } from './cmp829/cmp829.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp820Component, Cmp821Component, Cmp822Component, Cmp823Component, Cmp824Component, Cmp825Component, Cmp826Component, Cmp827Component, Cmp828Component, Cmp829Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp820Component, Cmp821Component, Cmp822Component, Cmp823Component, Cmp824Component, Cmp825Component, Cmp826Component, Cmp827Component, Cmp828Component, Cmp829Component]
})
export class Module2Module { }
