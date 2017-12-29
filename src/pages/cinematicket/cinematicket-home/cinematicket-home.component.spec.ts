import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinematicketHomeComponent } from './cinematicket-home.component';

describe('CinematicketHomeComponent', () => {
  let component: CinematicketHomeComponent;
  let fixture: ComponentFixture<CinematicketHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinematicketHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinematicketHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
