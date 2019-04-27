import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp520Component } from './cmp520/cmp520.component';
import { Cmp521Component } from './cmp521/cmp521.component';
import { Cmp522Component } from './cmp522/cmp522.component';
import { Cmp523Component } from './cmp523/cmp523.component';
import { Cmp524Component } from './cmp524/cmp524.component';
import { Cmp525Component } from './cmp525/cmp525.component';
import { Cmp526Component } from './cmp526/cmp526.component';
import { Cmp527Component } from './cmp527/cmp527.component';
import { Cmp528Component } from './cmp528/cmp528.component';
import { Cmp529Component } from './cmp529/cmp529.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp520Component, Cmp521Component, Cmp522Component, Cmp523Component, Cmp524Component, Cmp525Component, Cmp526Component, Cmp527Component, Cmp528Component, Cmp529Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp520Component, Cmp521Component, Cmp522Component, Cmp523Component, Cmp524Component, Cmp525Component, Cmp526Component, Cmp527Component, Cmp528Component, Cmp529Component]
})
export class Module2Module { }
