import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

export const helloModuleId = './hello-world/hello-world.module#HelloWorldModule';
export const todosModuleId = './todos/todos.module#TodosModule';

// These are lazy-loaded routes - note that we don't import the modules here
// to avoid having an eager dependency on them.
const routes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: helloModuleId},
  {path: 'todos', pathMatch: 'full', loadChildren: todosModuleId},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
