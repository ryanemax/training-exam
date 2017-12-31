import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clothes1HomeComponent } from './clothes1-home.component';

describe('Clothes1HomeComponent', () => {
  let component: Clothes1HomeComponent;
  let fixture: ComponentFixture<Clothes1HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clothes1HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clothes1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
