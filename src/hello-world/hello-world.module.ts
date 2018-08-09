import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HelloWorldComponent} from './hello-world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [FormsModule],
  exports: [HelloWorldComponent],
})
export class HelloWorldModule {
}