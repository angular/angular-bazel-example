import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp720Component } from './cmp720/cmp720.component';
import { Cmp721Component } from './cmp721/cmp721.component';
import { Cmp722Component } from './cmp722/cmp722.component';
import { Cmp723Component } from './cmp723/cmp723.component';
import { Cmp724Component } from './cmp724/cmp724.component';
import { Cmp725Component } from './cmp725/cmp725.component';
import { Cmp726Component } from './cmp726/cmp726.component';
import { Cmp727Component } from './cmp727/cmp727.component';
import { Cmp728Component } from './cmp728/cmp728.component';
import { Cmp729Component } from './cmp729/cmp729.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp720Component, Cmp721Component, Cmp722Component, Cmp723Component, Cmp724Component, Cmp725Component, Cmp726Component, Cmp727Component, Cmp728Component, Cmp729Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp720Component, Cmp721Component, Cmp722Component, Cmp723Component, Cmp724Component, Cmp725Component, Cmp726Component, Cmp727Component, Cmp728Component, Cmp729Component]
})
export class Module2Module { }
