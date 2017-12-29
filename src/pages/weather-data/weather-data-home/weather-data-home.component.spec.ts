import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDataHomeComponent } from './weather-data-home.component';

describe('WeatherDataHomeComponent', () => {
  let component: WeatherDataHomeComponent;
  let fixture: ComponentFixture<WeatherDataHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDataHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDataHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
