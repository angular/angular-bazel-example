import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp460Component } from './cmp460/cmp460.component';
import { Cmp461Component } from './cmp461/cmp461.component';
import { Cmp462Component } from './cmp462/cmp462.component';
import { Cmp463Component } from './cmp463/cmp463.component';
import { Cmp464Component } from './cmp464/cmp464.component';
import { Cmp465Component } from './cmp465/cmp465.component';
import { Cmp466Component } from './cmp466/cmp466.component';
import { Cmp467Component } from './cmp467/cmp467.component';
import { Cmp468Component } from './cmp468/cmp468.component';
import { Cmp469Component } from './cmp469/cmp469.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp460Component, Cmp461Component, Cmp462Component, Cmp463Component, Cmp464Component, Cmp465Component, Cmp466Component, Cmp467Component, Cmp468Component, Cmp469Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp460Component, Cmp461Component, Cmp462Component, Cmp463Component, Cmp464Component, Cmp465Component, Cmp466Component, Cmp467Component, Cmp468Component, Cmp469Component]
})
export class Module6Module { }
