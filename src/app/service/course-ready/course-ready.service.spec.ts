import { TestBed } from '@angular/core/testing';

import { CourseReadyService } from './course-ready.service';

describe('CourseReadyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseReadyService = TestBed.get(CourseReadyService);
    expect(service).toBeTruthy();
  });
});
