import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HelloWorldComponent} from './hello-world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [FormsModule, RouterModule, RouterModule.forChild([{path: '', component: HelloWorldComponent}])],
  exports: [HelloWorldComponent],
})
export class HelloWorldModule {
}