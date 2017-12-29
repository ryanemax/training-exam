import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDataListComponent } from './weather-data-list.component';

describe('WeatherDataListComponent', () => {
  let component: WeatherDataListComponent;
  let fixture: ComponentFixture<WeatherDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
