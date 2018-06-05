import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {TodosComponent} from './todos.component';

@NgModule({
  declarations: [TodosComponent],
  imports: [CommonModule, FormsModule],
})
export class TodosModule {
}