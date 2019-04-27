import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp330Component } from './cmp330/cmp330.component';
import { Cmp331Component } from './cmp331/cmp331.component';
import { Cmp332Component } from './cmp332/cmp332.component';
import { Cmp333Component } from './cmp333/cmp333.component';
import { Cmp334Component } from './cmp334/cmp334.component';
import { Cmp335Component } from './cmp335/cmp335.component';
import { Cmp336Component } from './cmp336/cmp336.component';
import { Cmp337Component } from './cmp337/cmp337.component';
import { Cmp338Component } from './cmp338/cmp338.component';
import { Cmp339Component } from './cmp339/cmp339.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp330Component, Cmp331Component, Cmp332Component, Cmp333Component, Cmp334Component, Cmp335Component, Cmp336Component, Cmp337Component, Cmp338Component, Cmp339Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp330Component, Cmp331Component, Cmp332Component, Cmp333Component, Cmp334Component, Cmp335Component, Cmp336Component, Cmp337Component, Cmp338Component, Cmp339Component]
})
export class Module3Module { }
