import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp110Component } from './cmp110/cmp110.component';
import { Cmp111Component } from './cmp111/cmp111.component';
import { Cmp112Component } from './cmp112/cmp112.component';
import { Cmp113Component } from './cmp113/cmp113.component';
import { Cmp114Component } from './cmp114/cmp114.component';
import { Cmp115Component } from './cmp115/cmp115.component';
import { Cmp116Component } from './cmp116/cmp116.component';
import { Cmp117Component } from './cmp117/cmp117.component';
import { Cmp118Component } from './cmp118/cmp118.component';
import { Cmp119Component } from './cmp119/cmp119.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp110Component, Cmp111Component, Cmp112Component, Cmp113Component, Cmp114Component, Cmp115Component, Cmp116Component, Cmp117Component, Cmp118Component, Cmp119Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp110Component, Cmp111Component, Cmp112Component, Cmp113Component, Cmp114Component, Cmp115Component, Cmp116Component, Cmp117Component, Cmp118Component, Cmp119Component]
})
export class Module1Module { }
