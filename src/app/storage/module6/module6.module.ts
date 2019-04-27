import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp860Component } from './cmp860/cmp860.component';
import { Cmp861Component } from './cmp861/cmp861.component';
import { Cmp862Component } from './cmp862/cmp862.component';
import { Cmp863Component } from './cmp863/cmp863.component';
import { Cmp864Component } from './cmp864/cmp864.component';
import { Cmp865Component } from './cmp865/cmp865.component';
import { Cmp866Component } from './cmp866/cmp866.component';
import { Cmp867Component } from './cmp867/cmp867.component';
import { Cmp868Component } from './cmp868/cmp868.component';
import { Cmp869Component } from './cmp869/cmp869.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp860Component, Cmp861Component, Cmp862Component, Cmp863Component, Cmp864Component, Cmp865Component, Cmp866Component, Cmp867Component, Cmp868Component, Cmp869Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp860Component, Cmp861Component, Cmp862Component, Cmp863Component, Cmp864Component, Cmp865Component, Cmp866Component, Cmp867Component, Cmp868Component, Cmp869Component]
})
export class Module6Module { }
