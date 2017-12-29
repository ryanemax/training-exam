import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsNumberHomeComponent } from './trips-number-home.component';

describe('TripsNumberHomeComponent', () => {
  let component: TripsNumberHomeComponent;
  let fixture: ComponentFixture<TripsNumberHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsNumberHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsNumberHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
