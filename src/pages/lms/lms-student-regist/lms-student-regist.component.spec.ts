import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsStudentRegistComponent } from './lms-student-regist.component';

describe('LmsStudentRegistComponent', () => {
  let component: LmsStudentRegistComponent;
  let fixture: ComponentFixture<LmsStudentRegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsStudentRegistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsStudentRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
