
import {NgModule, NgModuleFactoryLoader} from '@angular/core';

import * as routes from './app-routing.module';
import {AppComponent} from './app.component';
import {AppModuleProd} from './app.module.prod';
import {HelloWorldModuleNgFactory} from './hello-world/hello-world.module.ngfactory';
import {TodosModuleNgFactory} from './todos/todos.module.ngfactory';

export class MyLoader extends NgModuleFactoryLoader {
  load(id: string) {
    switch (id) {
      case routes.helloModuleId:
        return Promise.resolve(HelloWorldModuleNgFactory);
      case routes.todosModuleId:
        return Promise.resolve(TodosModuleNgFactory);
      default:
        throw new Error(`Unrecognized route id ${id}`);
    }
  }
}

@NgModule({
  imports: [AppModuleProd],
  bootstrap: [AppComponent],
  providers: [{provide: NgModuleFactoryLoader, useClass: MyLoader}]
})
export class AppModuleDev {
}
