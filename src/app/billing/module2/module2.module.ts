import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp20Component } from './cmp20/cmp20.component';
import { Cmp21Component } from './cmp21/cmp21.component';
import { Cmp22Component } from './cmp22/cmp22.component';
import { Cmp23Component } from './cmp23/cmp23.component';
import { Cmp24Component } from './cmp24/cmp24.component';
import { Cmp25Component } from './cmp25/cmp25.component';
import { Cmp26Component } from './cmp26/cmp26.component';
import { Cmp27Component } from './cmp27/cmp27.component';
import { Cmp28Component } from './cmp28/cmp28.component';
import { Cmp29Component } from './cmp29/cmp29.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp20Component, Cmp21Component, Cmp22Component, Cmp23Component, Cmp24Component, Cmp25Component, Cmp26Component, Cmp27Component, Cmp28Component, Cmp29Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp20Component, Cmp21Component, Cmp22Component, Cmp23Component, Cmp24Component, Cmp25Component, Cmp26Component, Cmp27Component, Cmp28Component, Cmp29Component]
})
export class Module2Module { }
