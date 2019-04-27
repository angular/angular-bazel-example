import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp930Component } from './cmp930/cmp930.component';
import { Cmp931Component } from './cmp931/cmp931.component';
import { Cmp932Component } from './cmp932/cmp932.component';
import { Cmp933Component } from './cmp933/cmp933.component';
import { Cmp934Component } from './cmp934/cmp934.component';
import { Cmp935Component } from './cmp935/cmp935.component';
import { Cmp936Component } from './cmp936/cmp936.component';
import { Cmp937Component } from './cmp937/cmp937.component';
import { Cmp938Component } from './cmp938/cmp938.component';
import { Cmp939Component } from './cmp939/cmp939.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp930Component, Cmp931Component, Cmp932Component, Cmp933Component, Cmp934Component, Cmp935Component, Cmp936Component, Cmp937Component, Cmp938Component, Cmp939Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp930Component, Cmp931Component, Cmp932Component, Cmp933Component, Cmp934Component, Cmp935Component, Cmp936Component, Cmp937Component, Cmp938Component, Cmp939Component]
})
export class Module3Module { }
