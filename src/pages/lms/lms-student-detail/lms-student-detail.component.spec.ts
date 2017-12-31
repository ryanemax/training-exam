import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsStudentDetailComponent } from './lms-student-detail.component';

describe('LmsStudentDetailComponent', () => {
  let component: LmsStudentDetailComponent;
  let fixture: ComponentFixture<LmsStudentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsStudentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsStudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
