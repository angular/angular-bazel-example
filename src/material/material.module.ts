import {NgModule} from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule} from '@angular/material';

const matModules =
    [MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatToolbarModule];

@NgModule({
  imports: matModules,
  exports: matModules,
})
export class MaterialModule {
}