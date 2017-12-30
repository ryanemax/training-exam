import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clothes1HomeItemComponent } from './clothes1-home-item.component';

describe('Clothes1HomeItemComponent', () => {
  let component: Clothes1HomeItemComponent;
  let fixture: ComponentFixture<Clothes1HomeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clothes1HomeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clothes1HomeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
