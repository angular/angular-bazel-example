import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp870Component } from './cmp870/cmp870.component';
import { Cmp871Component } from './cmp871/cmp871.component';
import { Cmp872Component } from './cmp872/cmp872.component';
import { Cmp873Component } from './cmp873/cmp873.component';
import { Cmp874Component } from './cmp874/cmp874.component';
import { Cmp875Component } from './cmp875/cmp875.component';
import { Cmp876Component } from './cmp876/cmp876.component';
import { Cmp877Component } from './cmp877/cmp877.component';
import { Cmp878Component } from './cmp878/cmp878.component';
import { Cmp879Component } from './cmp879/cmp879.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp870Component, Cmp871Component, Cmp872Component, Cmp873Component, Cmp874Component, Cmp875Component, Cmp876Component, Cmp877Component, Cmp878Component, Cmp879Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp870Component, Cmp871Component, Cmp872Component, Cmp873Component, Cmp874Component, Cmp875Component, Cmp876Component, Cmp877Component, Cmp878Component, Cmp879Component]
})
export class Module7Module { }
