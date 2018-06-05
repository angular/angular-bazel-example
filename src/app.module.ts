
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {HelloWorldModule} from './hello-world/hello-world.module';
import {todoReducer} from './reducers/reducers';
import {TodosComponent} from './todos/todos.component';
import {TodosModule} from './todos/todos.module';

export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: HelloWorldComponent},
  {path: 'todos', pathMatch: 'full', component: TodosComponent},
];

@NgModule({
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HelloWorldModule, TodosModule,
    StoreModule.forRoot({todoReducer})
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
