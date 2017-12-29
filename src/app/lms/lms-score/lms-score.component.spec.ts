import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsScoreComponent } from './lms-score.component';

describe('LmsScoreComponent', () => {
  let component: LmsScoreComponent;
  let fixture: ComponentFixture<LmsScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
