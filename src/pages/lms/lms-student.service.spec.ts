import { TestBed, inject } from '@angular/core/testing';

import { LmsStudentService } from './lms-student.service';

describe('LmsStudentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LmsStudentService]
    });
  });

  it('should be created', inject([LmsStudentService], (service: LmsStudentService) => {
    expect(service).toBeTruthy();
  }));
});
