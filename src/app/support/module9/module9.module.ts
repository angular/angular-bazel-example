import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp990Component } from './cmp990/cmp990.component';
import { Cmp991Component } from './cmp991/cmp991.component';
import { Cmp992Component } from './cmp992/cmp992.component';
import { Cmp993Component } from './cmp993/cmp993.component';
import { Cmp994Component } from './cmp994/cmp994.component';
import { Cmp995Component } from './cmp995/cmp995.component';
import { Cmp996Component } from './cmp996/cmp996.component';
import { Cmp997Component } from './cmp997/cmp997.component';
import { Cmp998Component } from './cmp998/cmp998.component';
import { Cmp999Component } from './cmp999/cmp999.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp990Component, Cmp991Component, Cmp992Component, Cmp993Component, Cmp994Component, Cmp995Component, Cmp996Component, Cmp997Component, Cmp998Component, Cmp999Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp990Component, Cmp991Component, Cmp992Component, Cmp993Component, Cmp994Component, Cmp995Component, Cmp996Component, Cmp997Component, Cmp998Component, Cmp999Component]
})
export class Module9Module { }
