import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp650Component } from './cmp650/cmp650.component';
import { Cmp651Component } from './cmp651/cmp651.component';
import { Cmp652Component } from './cmp652/cmp652.component';
import { Cmp653Component } from './cmp653/cmp653.component';
import { Cmp654Component } from './cmp654/cmp654.component';
import { Cmp655Component } from './cmp655/cmp655.component';
import { Cmp656Component } from './cmp656/cmp656.component';
import { Cmp657Component } from './cmp657/cmp657.component';
import { Cmp658Component } from './cmp658/cmp658.component';
import { Cmp659Component } from './cmp659/cmp659.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp650Component, Cmp651Component, Cmp652Component, Cmp653Component, Cmp654Component, Cmp655Component, Cmp656Component, Cmp657Component, Cmp658Component, Cmp659Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp650Component, Cmp651Component, Cmp652Component, Cmp653Component, Cmp654Component, Cmp655Component, Cmp656Component, Cmp657Component, Cmp658Component, Cmp659Component]
})
export class Module5Module { }
