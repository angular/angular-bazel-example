import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp550Component } from './cmp550/cmp550.component';
import { Cmp551Component } from './cmp551/cmp551.component';
import { Cmp552Component } from './cmp552/cmp552.component';
import { Cmp553Component } from './cmp553/cmp553.component';
import { Cmp554Component } from './cmp554/cmp554.component';
import { Cmp555Component } from './cmp555/cmp555.component';
import { Cmp556Component } from './cmp556/cmp556.component';
import { Cmp557Component } from './cmp557/cmp557.component';
import { Cmp558Component } from './cmp558/cmp558.component';
import { Cmp559Component } from './cmp559/cmp559.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp550Component, Cmp551Component, Cmp552Component, Cmp553Component, Cmp554Component, Cmp555Component, Cmp556Component, Cmp557Component, Cmp558Component, Cmp559Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp550Component, Cmp551Component, Cmp552Component, Cmp553Component, Cmp554Component, Cmp555Component, Cmp556Component, Cmp557Component, Cmp558Component, Cmp559Component]
})
export class Module5Module { }
