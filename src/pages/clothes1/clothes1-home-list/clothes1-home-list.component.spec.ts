import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clothes1HomeListComponent } from './clothes1-home-list.component';

describe('Clothes1HomeListComponent', () => {
  let component: Clothes1HomeListComponent;
  let fixture: ComponentFixture<Clothes1HomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clothes1HomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clothes1HomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
