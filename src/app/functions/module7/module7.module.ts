import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp370Component } from './cmp370/cmp370.component';
import { Cmp371Component } from './cmp371/cmp371.component';
import { Cmp372Component } from './cmp372/cmp372.component';
import { Cmp373Component } from './cmp373/cmp373.component';
import { Cmp374Component } from './cmp374/cmp374.component';
import { Cmp375Component } from './cmp375/cmp375.component';
import { Cmp376Component } from './cmp376/cmp376.component';
import { Cmp377Component } from './cmp377/cmp377.component';
import { Cmp378Component } from './cmp378/cmp378.component';
import { Cmp379Component } from './cmp379/cmp379.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp370Component, Cmp371Component, Cmp372Component, Cmp373Component, Cmp374Component, Cmp375Component, Cmp376Component, Cmp377Component, Cmp378Component, Cmp379Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp370Component, Cmp371Component, Cmp372Component, Cmp373Component, Cmp374Component, Cmp375Component, Cmp376Component, Cmp377Component, Cmp378Component, Cmp379Component]
})
export class Module7Module { }
