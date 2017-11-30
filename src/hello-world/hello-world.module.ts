import {NgModule} from '@angular/core';

import {HelloWorldComponent} from './hello-world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  exports: [HelloWorldComponent],
})
export class HelloWorldModule {
}