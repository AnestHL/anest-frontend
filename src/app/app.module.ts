import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { CoverComponent } from './common/cover/cover.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './common/footer/footer.component';

import { FormatMonetPipe } from './shared/pipe/format-money.pipe';

@NgModule({
  // declare component related to this module
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavComponent,
    FooterComponent,
    CoverComponent,
    FormatMonetPipe
  ],
  // import other similar modules for use in this module
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB2LlIj3sk2akFpnpNcXzX9_NS08Xda1sE'
    })
  ],
  // declare services to use for all of the above defined components
  providers: [],
  // only for AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
