import { Component, OnInit } from '@angular/core';

import { CourseReadyService } from '../service/course-ready/course-ready.service';
import { CourseService } from '../service/course/course.service';
import { FaqService } from '../service/faq/faq.service';

import { CourseReady } from '../model/course-ready.model';
import { Course } from '../model/course.model';
import { Faq } from '../model/faq.model';

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

  courseReady: CourseReady[];
  courses: Course[];
  faq: Faq[];

  constructor(
    private _courseReadyService: CourseReadyService,
    private _courseService: CourseService,
    private _faqService: FaqService,
  ) { }

  ngOnInit() {
    this.getCourseReady();
    this.getCourses();
    this.getFaq();
  }

  getCourseReady(): void {
    this._courseReadyService.getCourseReady().subscribe(courseReady => this.courseReady = courseReady);
  }

  getCourses(): void {
    this._courseService.getCourses().subscribe(courses => this.courses = courses);
  }

  getFaq(): void {
    this._faqService.getFaq().subscribe(faq => this.faq = faq);
  }
}
