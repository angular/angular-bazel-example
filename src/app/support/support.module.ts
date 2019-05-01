import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { Module0Module } from './module0/module0.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
RouterModule.forChild([{path: '', component: IndexComponent}]),
    Module0Module
  ]
})
export class SupportModule { }
