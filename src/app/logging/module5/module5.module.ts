import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp450Component } from './cmp450/cmp450.component';
import { Cmp451Component } from './cmp451/cmp451.component';
import { Cmp452Component } from './cmp452/cmp452.component';
import { Cmp453Component } from './cmp453/cmp453.component';
import { Cmp454Component } from './cmp454/cmp454.component';
import { Cmp455Component } from './cmp455/cmp455.component';
import { Cmp456Component } from './cmp456/cmp456.component';
import { Cmp457Component } from './cmp457/cmp457.component';
import { Cmp458Component } from './cmp458/cmp458.component';
import { Cmp459Component } from './cmp459/cmp459.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp450Component, Cmp451Component, Cmp452Component, Cmp453Component, Cmp454Component, Cmp455Component, Cmp456Component, Cmp457Component, Cmp458Component, Cmp459Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp450Component, Cmp451Component, Cmp452Component, Cmp453Component, Cmp454Component, Cmp455Component, Cmp456Component, Cmp457Component, Cmp458Component, Cmp459Component]
})
export class Module5Module { }
