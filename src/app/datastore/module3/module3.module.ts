import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp230Component } from './cmp230/cmp230.component';
import { Cmp231Component } from './cmp231/cmp231.component';
import { Cmp232Component } from './cmp232/cmp232.component';
import { Cmp233Component } from './cmp233/cmp233.component';
import { Cmp234Component } from './cmp234/cmp234.component';
import { Cmp235Component } from './cmp235/cmp235.component';
import { Cmp236Component } from './cmp236/cmp236.component';
import { Cmp237Component } from './cmp237/cmp237.component';
import { Cmp238Component } from './cmp238/cmp238.component';
import { Cmp239Component } from './cmp239/cmp239.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp230Component, Cmp231Component, Cmp232Component, Cmp233Component, Cmp234Component, Cmp235Component, Cmp236Component, Cmp237Component, Cmp238Component, Cmp239Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp230Component, Cmp231Component, Cmp232Component, Cmp233Component, Cmp234Component, Cmp235Component, Cmp236Component, Cmp237Component, Cmp238Component, Cmp239Component]
})
export class Module3Module { }
