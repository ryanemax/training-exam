import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeStar1HomeComponent } from './coffee-star1-home.component';

describe('CoffeeStar1HomeComponent', () => {
  let component: CoffeeStar1HomeComponent;
  let fixture: ComponentFixture<CoffeeStar1HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeStar1HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeStar1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
