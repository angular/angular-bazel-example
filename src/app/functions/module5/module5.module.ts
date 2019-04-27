import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp350Component } from './cmp350/cmp350.component';
import { Cmp351Component } from './cmp351/cmp351.component';
import { Cmp352Component } from './cmp352/cmp352.component';
import { Cmp353Component } from './cmp353/cmp353.component';
import { Cmp354Component } from './cmp354/cmp354.component';
import { Cmp355Component } from './cmp355/cmp355.component';
import { Cmp356Component } from './cmp356/cmp356.component';
import { Cmp357Component } from './cmp357/cmp357.component';
import { Cmp358Component } from './cmp358/cmp358.component';
import { Cmp359Component } from './cmp359/cmp359.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp350Component, Cmp351Component, Cmp352Component, Cmp353Component, Cmp354Component, Cmp355Component, Cmp356Component, Cmp357Component, Cmp358Component, Cmp359Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp350Component, Cmp351Component, Cmp352Component, Cmp353Component, Cmp354Component, Cmp355Component, Cmp356Component, Cmp357Component, Cmp358Component, Cmp359Component]
})
export class Module5Module { }
