
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {todoReducer} from './reducers/reducers';

@NgModule({
  imports: [AppModule, BrowserModule, AppRoutingModule, StoreModule.forRoot({todoReducer})],
  bootstrap: [AppComponent],
})
export class AppModuleProd {
}
