import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp890Component } from './cmp890/cmp890.component';
import { Cmp891Component } from './cmp891/cmp891.component';
import { Cmp892Component } from './cmp892/cmp892.component';
import { Cmp893Component } from './cmp893/cmp893.component';
import { Cmp894Component } from './cmp894/cmp894.component';
import { Cmp895Component } from './cmp895/cmp895.component';
import { Cmp896Component } from './cmp896/cmp896.component';
import { Cmp897Component } from './cmp897/cmp897.component';
import { Cmp898Component } from './cmp898/cmp898.component';
import { Cmp899Component } from './cmp899/cmp899.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp890Component, Cmp891Component, Cmp892Component, Cmp893Component, Cmp894Component, Cmp895Component, Cmp896Component, Cmp897Component, Cmp898Component, Cmp899Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp890Component, Cmp891Component, Cmp892Component, Cmp893Component, Cmp894Component, Cmp895Component, Cmp896Component, Cmp897Component, Cmp898Component, Cmp899Component]
})
export class Module9Module { }
