import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerHomeComponent } from './flower-home.component';

describe('FlowerHomeComponent', () => {
  let component: FlowerHomeComponent;
  let fixture: ComponentFixture<FlowerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
