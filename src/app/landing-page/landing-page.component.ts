import { Component, OnInit } from '@angular/core';

import { COURSEREADY } from '../mock/course-ready';
import { COURSER } from '../mock/course';
import { FAQ } from '../mock/faq';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {

  categories = [{
    id: 1,
    category: 'free course',
    image: 'free-course.jpg'
  }, {
    id: 2,
    category: 'basic course',
    image: 'basic-course.jpg'
  }, {
    id: 3,
    category: 'advanced course',
    image: 'advanced-course.jpg'
  }];

  courseReady = COURSEREADY;

  courses = COURSER;

  faq = FAQ;

  constructor() { }

  ngOnInit() {
  }
}
