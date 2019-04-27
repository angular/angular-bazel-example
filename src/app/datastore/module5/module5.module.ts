import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp250Component } from './cmp250/cmp250.component';
import { Cmp251Component } from './cmp251/cmp251.component';
import { Cmp252Component } from './cmp252/cmp252.component';
import { Cmp253Component } from './cmp253/cmp253.component';
import { Cmp254Component } from './cmp254/cmp254.component';
import { Cmp255Component } from './cmp255/cmp255.component';
import { Cmp256Component } from './cmp256/cmp256.component';
import { Cmp257Component } from './cmp257/cmp257.component';
import { Cmp258Component } from './cmp258/cmp258.component';
import { Cmp259Component } from './cmp259/cmp259.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp250Component, Cmp251Component, Cmp252Component, Cmp253Component, Cmp254Component, Cmp255Component, Cmp256Component, Cmp257Component, Cmp258Component, Cmp259Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp250Component, Cmp251Component, Cmp252Component, Cmp253Component, Cmp254Component, Cmp255Component, Cmp256Component, Cmp257Component, Cmp258Component, Cmp259Component]
})
export class Module5Module { }
