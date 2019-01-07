import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// third party
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './server/service/in-memory-data.service';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AgmCoreModule } from '@agm/core';

// router
import { AppRoutingModule } from './app-routing.module';

// component
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { CoverLandingComponent } from './common/cover-landing/cover-landing.component';
import { CoverComponent } from './common/cover/cover.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './common/footer/footer.component';
import { AboutComponent } from './common/modal/about/about.component';
import { LogoutComponent } from './common/modal/logout/logout.component';

// other
import { FormatMonetPipe } from './shared/pipe/format-money.pipe';

@NgModule({
  // declare component related to this module
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavComponent,
    FooterComponent,
    CoverComponent,
    FormatMonetPipe,
    AboutComponent,
    LogoutComponent,
    CoverLandingComponent
  ],
  // import other similar modules for use in this module
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlimLoadingBarModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB2LlIj3sk2akFpnpNcXzX9_NS08Xda1sE'
    }),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  // declare services to use for all of the above defined components
  providers: [],
  // only for AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
