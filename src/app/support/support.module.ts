import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { Module0Module } from './module0/module0.module';
import { Module1Module } from './module1/module1.module';
import { Module2Module } from './module2/module2.module';
import { Module3Module } from './module3/module3.module';
import { Module4Module } from './module4/module4.module';
import { Module5Module } from './module5/module5.module';
import { Module6Module } from './module6/module6.module';
import { Module7Module } from './module7/module7.module';
import { Module8Module } from './module8/module8.module';
import { Module9Module } from './module9/module9.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
RouterModule.forChild([{path: '', component: IndexComponent}]),
    Module0Module,
    Module1Module,
    Module2Module,
    Module3Module,
    Module4Module,
    Module5Module,
    Module6Module,
    Module7Module,
    Module8Module,
    Module9Module
  ]
})
export class SupportModule { }
