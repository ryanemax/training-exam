import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringBtnComponent } from './engineering-btn.component';

describe('EngineeringBtnComponent', () => {
  let component: EngineeringBtnComponent;
  let fixture: ComponentFixture<EngineeringBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
