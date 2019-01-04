import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';

import { MainPageComponent } from './main-page.component';
import { ListCourseComponent } from './list-course/list-course.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListCourseComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
