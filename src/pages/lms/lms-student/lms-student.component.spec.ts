import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsStudentComponent } from './lms-student.component';

describe('LmsStudentComponent', () => {
  let component: LmsStudentComponent;
  let fixture: ComponentFixture<LmsStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
