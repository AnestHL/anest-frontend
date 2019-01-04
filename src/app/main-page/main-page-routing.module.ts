import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { ListCourseComponent } from './list-course/list-course.component';

const MainPage_Router: Routes = [
  {
      path: '', component: MainPageComponent, children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: ListCourseComponent  }
      ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(MainPage_Router)
  ],
  exports: [
    RouterModule
  ]
})
export class MainPageRoutingModule { }
