import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { COURSEREADY } from 'src/app/mock/course-ready';
import { COURSES } from 'src/app/mock/course';
import { FAQ } from 'src/app/mock/faq';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const courseready = COURSEREADY;
    const courses = COURSES;
    const faq = FAQ;
    return { courseready, courses, faq };
  }
}
