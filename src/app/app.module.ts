import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ListCourseComponent } from './main-page/list-course/list-course.component';
import { CourseDetailComponent } from './main-page/course-detail/course-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainPageComponent,
    ErrorPageComponent,
    ListCourseComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB2LlIj3sk2akFpnpNcXzX9_NS08Xda1sE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
