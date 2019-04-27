import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp180Component } from './cmp180/cmp180.component';
import { Cmp181Component } from './cmp181/cmp181.component';
import { Cmp182Component } from './cmp182/cmp182.component';
import { Cmp183Component } from './cmp183/cmp183.component';
import { Cmp184Component } from './cmp184/cmp184.component';
import { Cmp185Component } from './cmp185/cmp185.component';
import { Cmp186Component } from './cmp186/cmp186.component';
import { Cmp187Component } from './cmp187/cmp187.component';
import { Cmp188Component } from './cmp188/cmp188.component';
import { Cmp189Component } from './cmp189/cmp189.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp180Component, Cmp181Component, Cmp182Component, Cmp183Component, Cmp184Component, Cmp185Component, Cmp186Component, Cmp187Component, Cmp188Component, Cmp189Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp180Component, Cmp181Component, Cmp182Component, Cmp183Component, Cmp184Component, Cmp185Component, Cmp186Component, Cmp187Component, Cmp188Component, Cmp189Component]
})
export class Module8Module { }
