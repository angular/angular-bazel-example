import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp510Component } from './cmp510/cmp510.component';
import { Cmp511Component } from './cmp511/cmp511.component';
import { Cmp512Component } from './cmp512/cmp512.component';
import { Cmp513Component } from './cmp513/cmp513.component';
import { Cmp514Component } from './cmp514/cmp514.component';
import { Cmp515Component } from './cmp515/cmp515.component';
import { Cmp516Component } from './cmp516/cmp516.component';
import { Cmp517Component } from './cmp517/cmp517.component';
import { Cmp518Component } from './cmp518/cmp518.component';
import { Cmp519Component } from './cmp519/cmp519.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp510Component, Cmp511Component, Cmp512Component, Cmp513Component, Cmp514Component, Cmp515Component, Cmp516Component, Cmp517Component, Cmp518Component, Cmp519Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp510Component, Cmp511Component, Cmp512Component, Cmp513Component, Cmp514Component, Cmp515Component, Cmp516Component, Cmp517Component, Cmp518Component, Cmp519Component]
})
export class Module1Module { }
