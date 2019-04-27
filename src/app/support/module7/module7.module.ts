import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp970Component } from './cmp970/cmp970.component';
import { Cmp971Component } from './cmp971/cmp971.component';
import { Cmp972Component } from './cmp972/cmp972.component';
import { Cmp973Component } from './cmp973/cmp973.component';
import { Cmp974Component } from './cmp974/cmp974.component';
import { Cmp975Component } from './cmp975/cmp975.component';
import { Cmp976Component } from './cmp976/cmp976.component';
import { Cmp977Component } from './cmp977/cmp977.component';
import { Cmp978Component } from './cmp978/cmp978.component';
import { Cmp979Component } from './cmp979/cmp979.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp970Component, Cmp971Component, Cmp972Component, Cmp973Component, Cmp974Component, Cmp975Component, Cmp976Component, Cmp977Component, Cmp978Component, Cmp979Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp970Component, Cmp971Component, Cmp972Component, Cmp973Component, Cmp974Component, Cmp975Component, Cmp976Component, Cmp977Component, Cmp978Component, Cmp979Component]
})
export class Module7Module { }
