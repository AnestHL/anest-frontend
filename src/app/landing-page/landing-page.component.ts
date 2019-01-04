import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  // google maps zoom level
  zoom = 16;

  // initial center position for the map
  lat = 21.018840;
  lng = 105.549235;

  ngOnInit() {
  }

}
