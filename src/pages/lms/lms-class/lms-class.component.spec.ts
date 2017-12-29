import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsClassComponent } from './lms-class.component';

describe('LmsClassComponent', () => {
  let component: LmsClassComponent;
  let fixture: ComponentFixture<LmsClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
