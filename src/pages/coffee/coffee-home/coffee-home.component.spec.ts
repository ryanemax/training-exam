import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeHomeComponent } from './coffee-home.component';

describe('CoffeeHomeComponent', () => {
  let component: CoffeeHomeComponent;
  let fixture: ComponentFixture<CoffeeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
