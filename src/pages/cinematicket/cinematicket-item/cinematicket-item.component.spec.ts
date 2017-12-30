import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinematicketItemComponent } from './cinematicket-item.component';

describe('CinematicketItemComponent', () => {
  let component: CinematicketItemComponent;
  let fixture: ComponentFixture<CinematicketItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinematicketItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinematicketItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
