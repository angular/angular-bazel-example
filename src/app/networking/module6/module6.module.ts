import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp660Component } from './cmp660/cmp660.component';
import { Cmp661Component } from './cmp661/cmp661.component';
import { Cmp662Component } from './cmp662/cmp662.component';
import { Cmp663Component } from './cmp663/cmp663.component';
import { Cmp664Component } from './cmp664/cmp664.component';
import { Cmp665Component } from './cmp665/cmp665.component';
import { Cmp666Component } from './cmp666/cmp666.component';
import { Cmp667Component } from './cmp667/cmp667.component';
import { Cmp668Component } from './cmp668/cmp668.component';
import { Cmp669Component } from './cmp669/cmp669.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp660Component, Cmp661Component, Cmp662Component, Cmp663Component, Cmp664Component, Cmp665Component, Cmp666Component, Cmp667Component, Cmp668Component, Cmp669Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp660Component, Cmp661Component, Cmp662Component, Cmp663Component, Cmp664Component, Cmp665Component, Cmp666Component, Cmp667Component, Cmp668Component, Cmp669Component]
})
export class Module6Module { }
