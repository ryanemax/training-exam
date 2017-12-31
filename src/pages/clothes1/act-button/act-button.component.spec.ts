import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActButtonComponent } from './act-button.component';

describe('ActButtonComponent', () => {
  let component: ActButtonComponent;
  let fixture: ComponentFixture<ActButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
