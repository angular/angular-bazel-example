import {HelloWorldModule} from './hello-world/hello-world.module';
import {HelloWorldComponent} from './hello-world/hello-world.component';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({

  imports: [BrowserModule, HelloWorldModule],
  bootstrap: [HelloWorldComponent]
})
export class AppModule {}
