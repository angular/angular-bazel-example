import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp430Component } from './cmp430/cmp430.component';
import { Cmp431Component } from './cmp431/cmp431.component';
import { Cmp432Component } from './cmp432/cmp432.component';
import { Cmp433Component } from './cmp433/cmp433.component';
import { Cmp434Component } from './cmp434/cmp434.component';
import { Cmp435Component } from './cmp435/cmp435.component';
import { Cmp436Component } from './cmp436/cmp436.component';
import { Cmp437Component } from './cmp437/cmp437.component';
import { Cmp438Component } from './cmp438/cmp438.component';
import { Cmp439Component } from './cmp439/cmp439.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp430Component, Cmp431Component, Cmp432Component, Cmp433Component, Cmp434Component, Cmp435Component, Cmp436Component, Cmp437Component, Cmp438Component, Cmp439Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp430Component, Cmp431Component, Cmp432Component, Cmp433Component, Cmp434Component, Cmp435Component, Cmp436Component, Cmp437Component, Cmp438Component, Cmp439Component]
})
export class Module3Module { }
