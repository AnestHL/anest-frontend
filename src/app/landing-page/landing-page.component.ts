import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {

  categories = {
    'free-course': 'free-course.jpg',
    'basic-course': 'basic-course.jpg',
    'advanced-course': 'advanced-course.jpg'
  }

  courseReady = [{
    id: 1,
    course: 'Java Core Basic',
    time: 10,
    numberStudent: 30,
    startAt: 1551571200,
    price: 1000000,
    image: 'e.jpg',
    status: '1'
  }, {
    id: 2,
    course: 'Java Core Advanced',
    time: 10,
    numberStudent: 30,
    startAt: 1551571200,
    price: 1000000,
    image: 'e.jpg',
    status: '1'
  }, {
    id: 3,
    course: 'HTML/CSS',
    time: 10,
    numberStudent: 30,
    startAt: 1551571200,
    price: 1000000,
    image: 'c-html.jpg',
    status: '1'
  }, {
    id: 4,
    course: 'Angular',
    time: 10,
    numberStudent: 30,
    startAt: 1551571200,
    price: 1000000,
    image: 'e.jpg',
    status: '1'
  }]

  constructor() { }

  ngOnInit() {
  }
}
