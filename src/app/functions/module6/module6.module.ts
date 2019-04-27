import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp360Component } from './cmp360/cmp360.component';
import { Cmp361Component } from './cmp361/cmp361.component';
import { Cmp362Component } from './cmp362/cmp362.component';
import { Cmp363Component } from './cmp363/cmp363.component';
import { Cmp364Component } from './cmp364/cmp364.component';
import { Cmp365Component } from './cmp365/cmp365.component';
import { Cmp366Component } from './cmp366/cmp366.component';
import { Cmp367Component } from './cmp367/cmp367.component';
import { Cmp368Component } from './cmp368/cmp368.component';
import { Cmp369Component } from './cmp369/cmp369.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp360Component, Cmp361Component, Cmp362Component, Cmp363Component, Cmp364Component, Cmp365Component, Cmp366Component, Cmp367Component, Cmp368Component, Cmp369Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp360Component, Cmp361Component, Cmp362Component, Cmp363Component, Cmp364Component, Cmp365Component, Cmp366Component, Cmp367Component, Cmp368Component, Cmp369Component]
})
export class Module6Module { }
